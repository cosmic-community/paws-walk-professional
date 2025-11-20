// app/blog/author/[slug]/page.tsx
import { getPostsByAuthor, getAuthorBySlug, getAuthors } from '@/lib/cosmic'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const author = await getAuthorBySlug(slug)

  if (!author) {
    return {
      title: 'Author Not Found'
    }
  }

  return {
    title: `${author.metadata.name} - Author | Paws & Walk Blog`,
    description: author.metadata.bio || `Read articles by ${author.metadata.name} about dog walking and pet care in Dublin, Pleasanton, and San Ramon.`
  }
}

export async function generateStaticParams() {
  const authors = await getAuthors()
  return authors.map((author) => ({
    slug: author.slug
  }))
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params
  const [author, posts] = await Promise.all([
    getAuthorBySlug(slug),
    getPostsByAuthor(slug)
  ])

  if (!author) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Author Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="mb-6 text-sm">
            <Link href="/blog" className="text-gray-200 hover:text-white">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span>Authors</span>
            <span className="mx-2">/</span>
            <span>{author.metadata.name}</span>
          </nav>

          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {author.metadata?.profile_image && (
              <img
                src={`${author.metadata.profile_image.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
                alt={author.metadata.name}
                className="w-40 h-40 rounded-full border-4 border-white shadow-xl"
              />
            )}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                {author.metadata.name}
              </h1>
              {author.metadata?.role && (
                <p className="text-2xl text-gray-200 mb-6">
                  {author.metadata.role}
                </p>
              )}
              <p className="text-xl text-gray-100 max-w-3xl">
                {author.metadata.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Author's Posts */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Articles by {author.metadata.name}
          </h2>

          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No posts yet from this author.</p>
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
                    {/* Categories */}
                    {post.metadata?.categories && Array.isArray(post.metadata.categories) && post.metadata.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.metadata.categories.map((category) => (
                          <Link
                            key={category.id}
                            href={`/blog/category/${category.slug}`}
                            className="text-xs font-semibold text-primary hover:underline"
                          >
                            {category.metadata.name}
                          </Link>
                        ))}
                      </div>
                    )}

                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors">
                        {post.metadata.title}
                      </h2>
                    </Link>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.metadata.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <time dateTime={post.metadata.published_date}>
                        {new Date(post.metadata.published_date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      {post.metadata?.reading_time && (
                        <span>{post.metadata.reading_time}</span>
                      )}
                    </div>
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