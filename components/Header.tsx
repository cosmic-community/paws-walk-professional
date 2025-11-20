'use client'

import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">🐕 Paws & Walk</a>
          </div>
          
          {/* Desktop Navigation */}
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
              href="/blog"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Blog
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-primary"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a
                href="/#services"
                className="text-gray-700 hover:text-primary transition-colors font-medium px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="/#staff"
                className="text-gray-700 hover:text-primary transition-colors font-medium px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Team
              </a>
              <a
                href="/blog"
                className="text-gray-700 hover:text-primary transition-colors font-medium px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-primary transition-colors font-medium px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/#testimonials"
                className="text-gray-700 hover:text-primary transition-colors font-medium px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}