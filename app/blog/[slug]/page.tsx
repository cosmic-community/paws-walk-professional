// app/blog/[slug]/page.tsx
import { getPostBySlug, getPosts } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: post.metadata.seo_title || `${post.metadata.title} | Paws & Walk Blog`,
    description: post.metadata.seo_description || post.metadata.excerpt,
    keywords: post.metadata.seo_keywords || 'dog walking, pet care, Dublin CA, Pleasanton, San Ramon'
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata } = post
  const publishedDate = new Date(metadata.published_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/blog" className="hover:text-primary">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{metadata.title}</span>
        </nav>

        {/* Categories */}
        {metadata.categories && Array.isArray(metadata.categories) && metadata.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {metadata.categories.map((category) => (
              <Link
                key={category.id}
                href={`/blog/category/${category.slug}`}
                className="px-3 py-1 rounded-full text-sm font-semibold text-primary bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                {category.metadata.name}
              </Link>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {metadata.title}
        </h1>

        {/* Author and Meta */}
        <div className="flex items-center gap-4 mb-8 pb-8 border-b">
          <div className="flex items-center gap-3">
            {metadata.author?.metadata?.profile_image && (
              <img
                src={`${metadata.author.metadata.profile_image.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                alt={metadata.author.metadata.name}
                className="w-12 h-12 rounded-full"
              />
            )}
            <div>
              <Link
                href={`/blog/author/${metadata.author.slug}`}
                className="font-semibold text-gray-900 hover:text-primary"
              >
                {metadata.author.metadata.name}
              </Link>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <time dateTime={metadata.published_date}>{publishedDate}</time>
                {metadata.reading_time && (
                  <>
                    <span>•</span>
                    <span>{metadata.reading_time}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {metadata.featured_image && (
          <img
            src={`${metadata.featured_image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={metadata.title}
            className="w-full h-auto rounded-lg mb-12"
          />
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {metadata.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Location Tags */}
        {metadata.location_tags && (
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-sm font-semibold text-gray-600 mb-3">LOCATIONS</h3>
            <div className="flex flex-wrap gap-2">
              {metadata.location_tags.split(',').map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio */}
        {metadata.author && (
          <div className="mt-12 p-8 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">About the Author</h3>
            <div className="flex gap-6">
              {metadata.author.metadata?.profile_image && (
                <img
                  src={`${metadata.author.metadata.profile_image.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                  alt={metadata.author.metadata.name}
                  className="w-24 h-24 rounded-full"
                />
              )}
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-1">
                  {metadata.author.metadata.name}
                </h4>
                {metadata.author.metadata?.role && (
                  <p className="text-primary font-medium mb-3">
                    {metadata.author.metadata.role}
                  </p>
                )}
                <p className="text-gray-700">
                  {metadata.author.metadata.bio}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium"
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  )
}