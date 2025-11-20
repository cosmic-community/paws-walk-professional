import { getStaff } from '@/lib/cosmic'
import StaffGrid from '@/components/StaffGrid'

export const metadata = {
  title: 'Our Team - Paws & Walk',
  description: 'Meet our experienced, caring professionals who love dogs and are dedicated to providing the best walking services.',
}

export default async function TeamPage() {
  const staff = await getStaff()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto">
            Experienced, caring professionals who love dogs. Every member of our team is background-checked, trained in pet first aid, and passionate about providing exceptional care for your furry friend.
          </p>
        </div>
      </section>

      {/* Staff Grid Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <StaffGrid staff={staff} />
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Team Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Professionals</h3>
              <p className="text-gray-600">
                All team members are certified in pet first aid and trained in dog behavior
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Background Checked</h3>
              <p className="text-gray-600">
                Every walker undergoes thorough background checks for your peace of mind
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Experienced</h3>
              <p className="text-gray-600">
                Years of combined experience working with dogs of all breeds and temperaments
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Passionate</h3>
              <p className="text-gray-600">
                We genuinely love what we do and treat every dog like our own
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Our Care?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Book a walk today and see why hundreds of dogs and their families trust us
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