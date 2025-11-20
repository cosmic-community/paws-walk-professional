// Header component with navigation
export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">🐕 Paws & Walk</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/#services"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="/#staff"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Our Team
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              About
            </a>
            <a
              href="/#testimonials"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors font-medium"
            >
              Book Now
            </a>
          </div>

          <div className="md:hidden">
            <button
              className="text-gray-700 hover:text-primary"
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}