// Home page component
import { getServices, getStaff, getTestimonials } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ServiceGrid from '@/components/ServiceGrid'
import StaffGrid from '@/components/StaffGrid'
import TestimonialGrid from '@/components/TestimonialGrid'

export default async function HomePage() {
  const [services, staff, testimonials] = await Promise.all([
    getServices(),
    getStaff(),
    getTestimonials(),
  ])

  return (
    <>
      <Hero />
      
      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect walking package for your furry friend
            </p>
          </div>
          <ServiceGrid services={services} />
        </div>
      </section>

      <section id="staff" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced, caring professionals who love dogs
            </p>
          </div>
          <StaffGrid staff={staff} />
        </div>
      </section>

      <section id="testimonials" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real reviews from satisfied pet parents
            </p>
          </div>
          <TestimonialGrid testimonials={testimonials} />
        </div>
      </section>
    </>
  )
}