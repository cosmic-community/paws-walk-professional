import { getServices } from '@/lib/cosmic'
import ServiceGrid from '@/components/ServiceGrid'

export const metadata = {
  title: 'Our Services - Paws & Walk',
  description: 'Choose the perfect walking package for your furry friend. Individual walks, group adventures, and premium care packages.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto">
            Choose the perfect walking package for your furry friend. From individual attention to group adventures, we have the right service to keep your dog happy, healthy, and active.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <ServiceGrid services={services} />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Paws & Walk?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">
                Fully licensed and insured for your peace of mind
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📸</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Photo Updates</h3>
              <p className="text-gray-600">
                Receive photos and updates during every walk
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Experienced Care</h3>
              <p className="text-gray-600">
                Professional staff trained in pet first aid and behavior
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book a Walk?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Get started today and give your dog the exercise and attention they deserve
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