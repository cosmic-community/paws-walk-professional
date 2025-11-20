// Testimonial card component
import type { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const rating = testimonial.metadata.rating || 5
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => {
      const filled = index < rating
      return (
        <svg
          key={index}
          className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            clipRule="evenodd"
          />
        </svg>
      )
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex text-yellow-400">
          {renderStars()}
        </div>
      </div>

      <p className="text-gray-700 mb-4 italic">
        "{testimonial.metadata.review}"
      </p>

      <div className="border-t pt-4">
        <p className="font-semibold text-gray-900">
          {testimonial.metadata.client_name}
        </p>
        {testimonial.metadata.dog_name && (
          <p className="text-sm text-gray-600">
            Owner of {testimonial.metadata.dog_name}
          </p>
        )}
      </div>
    </div>
  )
}