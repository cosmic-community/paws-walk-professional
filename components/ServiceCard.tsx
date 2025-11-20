// Service card component
import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const imageUrl = service.metadata?.service_image?.imgix_url
  const features = service.metadata?.features?.split('\n').filter(Boolean) || []

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={`${imageUrl}?w=600&h=400&fit=crop&auto=format,compress`}
            alt={service.metadata.service_name}
            className="w-full h-full object-cover"
            width={600}
            height={400}
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {service.metadata.service_name}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {service.metadata.description}
        </p>

        <div className="flex justify-between items-center mb-4 text-sm">
          <span className="text-gray-700">
            <span className="font-semibold">Duration:</span> {service.metadata.duration}
          </span>
          <span className="text-2xl font-bold text-primary">
            {service.metadata.price}
          </span>
        </div>

        {features.length > 0 && (
          <div className="border-t pt-4">
            <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
            <ul className="space-y-1">
              {features.map((feature, index) => (
                <li key={index} className="text-gray-600 text-sm">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}