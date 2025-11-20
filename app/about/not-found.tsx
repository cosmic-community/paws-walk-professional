export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">About Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The About page content hasn't been created yet in Cosmic CMS.
        </p>
        <a
          href="/"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium"
        >
          Return Home
        </a>
      </div>
    </div>
  )
}