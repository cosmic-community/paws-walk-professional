'use client'

import { useState } from 'react'
import type { Service } from '@/types'
import ServiceCard from './ServiceCard'
import BookingModal from './BookingModal'

interface ServiceGridProps {
  services: Service[]
}

export default function ServiceGrid({ services }: ServiceGridProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleBookClick = (service: Service) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
  }

  if (!services || services.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No services available at this time.</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard 
            key={service.id} 
            service={service}
            onBookClick={handleBookClick}
          />
        ))}
      </div>
      
      <BookingModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}