import { NextResponse } from 'next/server'
import { createBooking } from '@/lib/cosmic'
import { Resend } from 'resend'
import type { BookingFormData } from '@/types'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const bookingData: BookingFormData = await request.json()

    // Validate required fields
    if (!bookingData.customerName || !bookingData.customerEmail || !bookingData.customerPhone || 
        !bookingData.dogName || !bookingData.serviceName || !bookingData.preferredDate || 
        !bookingData.preferredTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create booking in Cosmic CMS
    const booking = await createBooking(bookingData)

    // Send notification email to business
    try {
      await resend.emails.send({
        from: 'tony@cosmicjs.com',
        to: 'tony@cosmicjs.com',
        subject: `New Booking: ${bookingData.serviceName} - ${bookingData.customerName}`,
        html: `
          <h2>New Dog Walking Service Booking</h2>
          <h3>Customer Information</h3>
          <ul>
            <li><strong>Name:</strong> ${bookingData.customerName}</li>
            <li><strong>Email:</strong> ${bookingData.customerEmail}</li>
            <li><strong>Phone:</strong> ${bookingData.customerPhone}</li>
          </ul>
          
          <h3>Dog Information</h3>
          <ul>
            <li><strong>Dog's Name:</strong> ${bookingData.dogName}</li>
            ${bookingData.dogBreed ? `<li><strong>Breed:</strong> ${bookingData.dogBreed}</li>` : ''}
          </ul>
          
          <h3>Service Details</h3>
          <ul>
            <li><strong>Service:</strong> ${bookingData.serviceName}</li>
            <li><strong>Preferred Date:</strong> ${bookingData.preferredDate}</li>
            <li><strong>Preferred Time:</strong> ${bookingData.preferredTime}</li>
          </ul>
          
          ${bookingData.specialInstructions ? `
            <h3>Special Instructions</h3>
            <p>${bookingData.specialInstructions}</p>
          ` : ''}
          
          <p><em>Booking ID: ${booking.id}</em></p>
        `,
      })
    } catch (emailError) {
      console.error('Error sending notification email:', emailError)
      // Continue even if notification email fails
    }

    // Send confirmation email to customer
    try {
      await resend.emails.send({
        from: 'tony@cosmicjs.com',
        to: bookingData.customerEmail,
        subject: `Booking Confirmation - ${bookingData.serviceName}`,
        html: `
          <h2>Thank You for Your Booking!</h2>
          <p>Dear ${bookingData.customerName},</p>
          <p>We've received your booking request for ${bookingData.dogName}. We'll contact you shortly to confirm your appointment.</p>
          
          <h3>Booking Details</h3>
          <ul>
            <li><strong>Service:</strong> ${bookingData.serviceName}</li>
            <li><strong>Dog's Name:</strong> ${bookingData.dogName}</li>
            ${bookingData.dogBreed ? `<li><strong>Breed:</strong> ${bookingData.dogBreed}</li>` : ''}
            <li><strong>Preferred Date:</strong> ${bookingData.preferredDate}</li>
            <li><strong>Preferred Time:</strong> ${bookingData.preferredTime}</li>
          </ul>
          
          ${bookingData.specialInstructions ? `
            <h3>Your Special Instructions</h3>
            <p>${bookingData.specialInstructions}</p>
          ` : ''}
          
          <p>If you have any questions, please don't hesitate to contact us.</p>
          <p><strong>Paws & Walk Team</strong><br>
          📧 info@pawsandwalk.com<br>
          📞 (555) 123-4567</p>
          
          <p><em>Booking Reference: ${booking.id}</em></p>
        `,
      })
    } catch (emailError) {
      console.error('Error sending confirmation email:', emailError)
      // Continue even if confirmation email fails
    }

    return NextResponse.json({ 
      success: true,
      bookingId: booking.id,
      message: 'Booking created successfully'
    })
  } catch (error) {
    console.error('Error processing booking:', error)
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 500 }
    )
  }
}