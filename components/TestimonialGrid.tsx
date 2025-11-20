// Testimonial grid component
import type { Testimonial } from '@/types'
import TestimonialCard from './TestimonialCard'

interface TestimonialGridProps {
  testimonials: Testimonial[]
}

export default function TestimonialGrid({ testimonials }: TestimonialGridProps) {
  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No testimonials available at this time.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  )
}