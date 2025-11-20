import { createBucketClient } from '@cosmicjs/sdk'
import type { Service, StaffMember, Testimonial, AboutPage, Booking, CosmicResponse, BookingFormData } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  apiEnvironment: 'staging'
})

// Server-side cosmic client with write access
export const cosmicWrite = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging'
})

// Helper function for handling Cosmic SDK errors
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all services
export async function getServices(): Promise<Service[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Service[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    console.error('Error fetching services:', error)
    throw new Error('Failed to fetch services')
  }
}

// Fetch all staff members
export async function getStaff(): Promise<StaffMember[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'staff' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as StaffMember[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    console.error('Error fetching staff:', error)
    throw new Error('Failed to fetch staff')
  }
}

// Fetch all testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Testimonial[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    console.error('Error fetching testimonials:', error)
    throw new Error('Failed to fetch testimonials')
  }
}

// Fetch a single service by slug
export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'services', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object as Service
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    console.error('Error fetching service:', error)
    throw new Error('Failed to fetch service')
  }
}

// Fetch a single staff member by slug
export async function getStaffBySlug(slug: string): Promise<StaffMember | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'staff', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object as StaffMember
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    console.error('Error fetching staff member:', error)
    throw new Error('Failed to fetch staff member')
  }
}

// Fetch About page content
export async function getAboutPage(): Promise<AboutPage | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'pages', slug: 'about' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object as AboutPage
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    console.error('Error fetching about page:', error)
    throw new Error('Failed to fetch about page')
  }
}

// Create a new booking
export async function createBooking(bookingData: BookingFormData): Promise<Booking> {
  try {
    const response = await cosmicWrite.objects.insertOne({
      title: `Booking: ${bookingData.customerName} - ${bookingData.serviceName}`,
      type: 'bookings',
      metadata: {
        customer_name: bookingData.customerName,
        customer_email: bookingData.customerEmail,
        customer_phone: bookingData.customerPhone,
        dog_name: bookingData.dogName,
        dog_breed: bookingData.dogBreed || '',
        service_name: bookingData.serviceName,
        preferred_date: bookingData.preferredDate,
        preferred_time: bookingData.preferredTime,
        special_instructions: bookingData.specialInstructions || '',
        booking_status: 'Pending'
      }
    })
    
    return response.object as Booking
  } catch (error) {
    console.error('Error creating booking:', error)
    throw new Error('Failed to create booking')
  }
}