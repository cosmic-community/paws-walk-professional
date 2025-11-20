// Shared TypeScript type definitions for the application

// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Service type definition
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name: string;
    description: string;
    duration: string;
    price: string;
    features?: string;
    service_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Staff member type definition
export interface StaffMember extends CosmicObject {
  type: 'staff';
  metadata: {
    full_name: string;
    bio: string;
    years_experience: number;
    specialties?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Testimonial type definition
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name: string;
    dog_name?: string;
    review: string;
    rating: number;
  };
}

// About page type definition
export interface AboutPage extends CosmicObject {
  type: 'pages';
  metadata: {
    page_title: string;
    hero_heading: string;
    hero_description: string;
    mission_statement: string;
    our_story: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
    stats?: Array<{
      label: string;
      value: string;
    }>;
  };
}

// Booking type definition
export interface Booking extends CosmicObject {
  type: 'bookings';
  metadata: {
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    dog_name: string;
    dog_breed?: string;
    service_name: string;
    preferred_date: string;
    preferred_time: string;
    special_instructions?: string;
    booking_status: string;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

// Booking form data interface
export interface BookingFormData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  dogName: string;
  dogBreed?: string;
  serviceName: string;
  preferredDate: string;
  preferredTime: string;
  specialInstructions?: string;
}