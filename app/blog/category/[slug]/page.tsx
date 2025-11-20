// app/blog/category/[slug]/page.tsx
import { getPostsByCategory, getCategories } from '@/lib/cosmic'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const categories = await getCategories()
  const category = categories.find(cat => cat.slug === slug)

  if (!category) {
    return {
      title: 'Category Not Found'
    }
  }

  return {
    title: `${category.metadata.name} - Dog Walking Blog | Paws & Walk`,
    description: category.metadata.description || `Browse ${category.metadata.name} articles from Paws & Walk serving Dublin, Pleasanton, and San Ramon.`
  }
}

export async function generateStaticParams() {
  const categories = await getCategories()
  return categories.map((category) => ({
    slug: category.slug
  }))
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  const [posts, categories] = await Promise.all([
    getPostsByCategory(slug),
    getCategories()
  ])

  const category = categories.find(cat => cat.slug === slug)

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="mb-6 text-sm">
            <Link href="/blog" className="text-gray-200 hover:text-white">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span>{category.metadata.name}</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {category.metadata.name}
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            {category.metadata.description}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/blog"
              className="px-4 py-2 rounded-full border-2 border-gray-300 text-gray-700 font-medium hover:border-primary hover:text-primary transition-colors"
            >
              All Posts
            </Link>
            {categories.filter(cat => cat && cat.metadata && cat.metadata.name).map((cat) => (
              <Link
                key={cat.id}
                href={`/blog/category/${cat.slug}`}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  cat.slug === slug
                    ? 'bg-primary text-white'
                    : 'border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary'
                }`}
              >
                {cat.metadata.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No posts in this category yet.</p>
              <Link
                href="/blog"
                className="inline-block mt-6 text-primary font-semibold hover:underline"
              >
                View all posts
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  {post.metadata?.featured_image && (
                    <Link href={`/blog/${post.slug}`}>
                      <img
                        src={`${post.metadata.featured_image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
                        alt={post.metadata.title}
                        className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
                      />
                    </Link>
                  )}
                  <div className="p-6">
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors">
                        {post.metadata.title}
                      </h2>
                    </Link>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.metadata.excerpt}
                    </p>

                    {post.metadata?.author && post.metadata.author.metadata && (
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          {post.metadata.author.metadata.profile_image && (
                            <img
                              src={`${post.metadata.author.metadata.profile_image.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                              alt={post.metadata.author.metadata.name || 'Author'}
                              className="w-8 h-8 rounded-full"
                            />
                          )}
                          <Link
                            href={`/blog/author/${post.metadata.author.slug}`}
                            className="hover:text-primary"
                          >
                            {post.metadata.author.metadata.name || 'Anonymous'}
                          </Link>
                        </div>
                        {post.metadata?.reading_time && (
                          <span>{post.metadata.reading_time}</span>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}