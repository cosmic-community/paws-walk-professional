// Hero section component
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
          Professional Dog Walking Services
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto text-balance">
          Trusted care for your furry friend with experienced, loving professionals
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
          >
            View Services
          </a>
          <a
            href="#staff"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition-colors font-bold text-lg"
          >
            Meet Our Team
          </a>
        </div>
      </div>
    </section>
  )
}