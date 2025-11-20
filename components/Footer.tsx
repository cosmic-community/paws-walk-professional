// Footer component
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">🐕 Paws & Walk</h3>
            <p className="text-gray-400 mb-4">
              Professional dog walking services with experienced, caring staff.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#staff" className="text-gray-400 hover:text-primary transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-primary transition-colors">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📧 info@pawsandwalk.com</li>
              <li>📞 (555) 123-4567</li>
              <li>📍 123 Pet Street, Dog City</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Paws & Walk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}