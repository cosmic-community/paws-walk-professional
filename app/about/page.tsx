import { getAboutPage } from '@/lib/cosmic'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'About Us - Paws & Walk',
  description: 'Learn about our mission, story, and commitment to providing the best dog walking services',
}

export default async function AboutPage() {
  const aboutPage = await getAboutPage()

  if (!aboutPage) {
    notFound()
  }

  const { metadata: content } = aboutPage

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {content.hero_heading}
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed">
                {content.hero_description}
              </p>
            </div>
            {content.hero_image && (
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={`${content.hero_image.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
                  alt={content.hero_heading}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {content.stats && content.stats.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {content.stats.map((stat: { label: string; value: string }, index: number) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            {content.mission_statement}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            {content.our_story.split('\n\n').map((paragraph: string, index: number) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Meet Our Team?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Learn more about the experienced professionals who will care for your furry friend
          </p>
          <a
            href="/#staff"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
          >
            Meet Our Team
          </a>
        </div>
      </section>
    </div>
  )
}