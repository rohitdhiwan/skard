export const bookingEmailTemplate = (formData: any) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
    <h1 style="color: #333; margin-bottom: 20px;">New Booking Request</h1>
    
    <div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
      <h2 style="color: #444; margin-bottom: 15px;">Service Details</h2>
      <p><strong>Service:</strong> ${formData.service}</p>
      <p><strong>Date:</strong> ${formData.date}</p>
      <p><strong>Time:</strong> ${formData.time}</p>
    </div>

    <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 20px;">
      <h2 style="color: #444; margin-bottom: 15px;">Client Information</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
    </div>

    <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 20px;">
      <h2 style="color: #444; margin-bottom: 15px;">Additional Information</h2>
      <p>${formData.message || 'No additional information provided'}</p>
    </div>

    <div style="text-align: center; margin-top: 30px;">
      <p style="color: #666;">This is an automated email. Please do not reply.</p>
    </div>
  </div>
`
