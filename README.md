# 🐕 Paws & Walk - Professional Dog Walking Services

![App Preview](https://imgix.cosmicjs.com/993b1100-c625-11f0-885f-6dd039c126d9-photo-1548199973-03cce0bbc87b-1763652523369.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive website for a professional dog walking service. Built with Next.js 16 and powered by Cosmic CMS, this application showcases services, staff profiles, and client testimonials with a beautiful, user-friendly interface.

## ✨ Features

- 🐕 **Service Showcase** - Display dog walking packages with pricing, duration, and detailed features
- 👥 **Staff Profiles** - Meet the experienced dog walking team with photos and specialties
- ⭐ **Client Testimonials** - Star-rated reviews from satisfied customers
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- 🎨 **Modern Design** - Clean, professional interface with smooth animations
- ⚡ **Fast Performance** - Server-side rendering with Next.js 16 for optimal speed
- 🖼️ **Image Optimization** - Automatic image optimization using imgix
- 🔄 **Real-time Updates** - Content managed through Cosmic CMS

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=691f333bc6785dc7a4c84712&clone_repository=691f34b0c6785dc7a4c8472a)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a website for a dog walking service. Include services and staff."

### Code Generation Prompt

> Based on the content model I created for "Create a website for a dog walking service. Include services and staff.", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Cosmic
- **Runtime**: Bun
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun installed
- A Cosmic account with the bucket configured

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Create a `.env.local` file with your Cosmic credentials:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   ```

4. Run the development server:
   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching Services

```typescript
import { cosmic } from '@/lib/cosmic'

async function getServices() {
  try {
    const { objects: services } = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return services
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}
```

### Fetching Staff Members

```typescript
async function getStaff() {
  try {
    const { objects: staff } = await cosmic.objects
      .find({ type: 'staff' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return staff
  } catch (error) {
    console.error('Error fetching staff:', error)
    return []
  }
}
```

### Fetching Testimonials

```typescript
async function getTestimonials() {
  try {
    const { objects: testimonials } = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return testimonials
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}
```

## 🔗 Cosmic CMS Integration

This application uses the following content types from your Cosmic bucket:

- **Services** (`services`): Dog walking packages with pricing and features
- **Staff** (`staff`): Team member profiles with experience and specialties
- **Testimonials** (`testimonials`): Client reviews with ratings

All content is fetched server-side for optimal performance and SEO.

## 📦 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Environment Variables

Make sure to set these environment variables in your deployment platform:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Support

For questions about Cosmic CMS, visit the [Cosmic documentation](https://www.cosmicjs.com/docs).

<!-- README_END -->