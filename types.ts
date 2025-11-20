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

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}