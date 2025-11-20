import { getTestimonials } from '@/lib/cosmic'
import TestimonialGrid from '@/components/TestimonialGrid'

export const metadata = {
  title: 'Reviews - Paws & Walk',
  description: 'Read what our satisfied clients have to say about our professional dog walking services.',
}

export default async function ReviewsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            What Our Clients Say
          </h1>
          <p className="text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto">
            Real reviews from satisfied pet parents who trust us with their furry family members. See why hundreds of dogs and their owners love Paws & Walk.
          </p>
        </div>
      </section>

      {/* Testimonials Grid Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <TestimonialGrid testimonials={testimonials} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Trusted by the Community
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium">
                Happy Dogs
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                50,000+
              </div>
              <div className="text-gray-600 font-medium">
                Walks Completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                5.0
              </div>
              <div className="text-gray-600 font-medium">
                Average Rating
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                9+
              </div>
              <div className="text-gray-600 font-medium">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Love Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Clients Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reliable Service</h3>
              <p className="text-gray-600">
                Consistent, on-time service you can count on every single day
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Great Communication</h3>
              <p className="text-gray-600">
                Photo updates and detailed reports after every walk
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Care</h3>
              <p className="text-gray-600">
                Experienced team trained in pet first aid and dog behavior
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Happy Clients</h2>
          <p className="text-xl mb-8 text-gray-100">
            Experience the care and professionalism that our clients rave about
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
          >
            Book Now
          </a>
        </div>
      </section>
    </div>
  )
}