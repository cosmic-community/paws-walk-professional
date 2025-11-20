import { getPosts, getCategories } from '@/lib/cosmic'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dog Walking Blog - Dublin, Pleasanton & San Ramon | Paws & Walk',
  description: 'Expert dog walking tips, pet care advice, and local insights for Dublin, Pleasanton, and San Ramon pet owners. Learn from professional dog walkers.',
  keywords: 'dog walking blog, pet care tips, Dublin CA dogs, Pleasanton pet care, San Ramon dog walkers, dog training tips, pet health'
}

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getPosts(),
    getCategories()
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Dog Walking Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Expert tips, local insights, and pet care advice for Dublin, Pleasanton & San Ramon
          </p>
        </div>
      </section>

      {/* Categories */}
      {categories.length > 0 && (
        <section className="py-8 px-4 bg-white border-b">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/blog"
                className="px-4 py-2 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
              >
                All Posts
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/blog/category/${category.slug}`}
                  className="px-4 py-2 rounded-full border-2 border-gray-300 text-gray-700 font-medium hover:border-primary hover:text-primary transition-colors"
                >
                  {category.metadata.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No blog posts yet. Check back soon!</p>
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
                      <div className="flex items-center gap-2">
                        {post.metadata?.author?.metadata?.profile_image && (
                          <img
                            src={`${post.metadata.author.metadata.profile_image.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                            alt={post.metadata.author.metadata.name}
                            className="w-8 h-8 rounded-full"
                          />
                        )}
                        <Link
                          href={`/blog/author/${post.metadata.author.slug}`}
                          className="hover:text-primary"
                        >
                          {post.metadata.author.metadata.name}
                        </Link>
                      </div>
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