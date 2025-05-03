import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, addDays, isWeekend, setHours, setMinutes } from 'date-fns';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle, Camera, Video, Users, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { bookingEmailTemplate } from '../utils/emailTemplates';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  date: Date | null;
  time: Date | null;
  service: string;
  message: string;
}

const services = [
  { id: 'content-creation', name: 'Content Creation', icon: <Camera className="h-5 w-5" /> },
  { id: 'video-production', name: 'Video Production', icon: <Video className="h-5 w-5" /> },
  { id: 'consultation', name: 'Consultation', icon: <Users className="h-5 w-5" /> },
  { id: 'collaboration', name: 'Brand Collaboration', icon: <MessageSquare className="h-5 w-5" /> },
];

// Filter available times (9 AM to 5 PM, hourly slots)
const filterPassedTime = (time: Date) => {
  const currentDate = new Date();
  const selectedDate = new Date(time);
  return currentDate.getTime() < selectedDate.getTime();
};

// Generate available time slots (9 AM to 5 PM, hourly slots)
const getTimeSlots = () => {
  const slots = [];
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  // Generate slots from 9 AM to 5 PM
  for (let i = 9; i <= 17; i++) {
    const time = setHours(setMinutes(new Date(today), 0), i);
    // Only include times that haven't passed today
    if (time >= now) {
      slots.push(time);
    }
  }
  return slots;
};

const Booking = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedStep, setSelectedStep] = useState(1);
  const { register, handleSubmit, control, watch, formState: { errors }, reset } = useForm<BookingFormData>();
  
  const selectedService = watch('service');
  const selectedDate = watch('date');
  
  // Filter weekends and ensure date is not in the past
  const isWeekday = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return !isWeekend(date) && date >= today;
  };
  
  // Get tomorrow as minimum date
  const tomorrow = addDays(new Date(), 1);
  
  const onSubmit = async (data: BookingFormData) => {
    // Format the data for display
    const formattedData = {
      ...data,
      date: data.date ? format(data.date, 'MMMM dd, yyyy') : null,
      time: data.time ? format(data.time, 'h:mm a') : null,
    };

    try {
      // Send email using EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          to_email: 'suparnakhanna05@gmail.com',
          from_name: data.name,
          from_email: data.email,
          service: data.service,
          date: formattedData.date,
          time: formattedData.time,
          phone: data.phone,
          message: data.message
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setIsSubmitted(true);
      reset();
      
      // Reset the success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setSelectedStep(1);
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error submitting your booking. Please try again.');
    }
  };

  const nextStep = () => {
    setSelectedStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setSelectedStep(prev => Math.max(prev - 1, 1));
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Book an Appointment</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to work together? Book a session with me using the form below.
            I'll get back to you to confirm all the details.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          {/* Booking Information */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="card p-8 h-full">
              <h2 className="text-2xl font-display font-bold mb-6">Booking Information</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-medium text-lg mb-3">Available Services</h3>
                  <ul className="space-y-4">
                    {services.map((service) => (
                      <li key={service.id} className="flex items-start">
                        <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-3">
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="font-medium">{service.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {service.id === 'content-creation' && 'Custom content creation for your brand'}
                            {service.id === 'video-production' && 'Professional video shooting and editing'}
                            {service.id === 'consultation' && 'Strategic advice for your social media presence'}
                            {service.id === 'collaboration' && 'Partnership opportunities for brands'}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-3">Working Hours</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-3">What to Expect</h3>
                  <ol className="space-y-3 text-gray-600 dark:text-gray-400 list-decimal list-inside">
                    <li>Confirmation email within 24 hours</li>
                    <li>Pre-session consultation call</li>
                    <li>Detailed planning of your project</li>
                    <li>The session/service as scheduled</li>
                    <li>Follow-up and delivery of final content</li>
                  </ol>
                </div>
                
                <div className="pt-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    * Please note that all bookings are subject to availability and confirmation.
                    Cancellations should be made at least 48 hours in advance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Booking Form */}
          <motion.div 
            className="md:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="card p-8">
              {/* Progress Steps */}
              <div className="mb-8">
                <div className="relative flex items-center justify-between mb-4">
                  <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 dark:bg-gray-700 -z-10"></div>
                  {[1, 2, 3].map((step) => (
                    <div 
                      key={step}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        step === selectedStep 
                          ? 'bg-primary-500 text-white' 
                          : step < selectedStep 
                            ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-500' 
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      {step < selectedStep ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        step
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-sm font-medium">
                  <span className={selectedStep === 1 ? 'text-primary-500' : 'text-gray-600 dark:text-gray-400'}>Service</span>
                  <span className={selectedStep === 2 ? 'text-primary-500' : 'text-gray-600 dark:text-gray-400'}>Schedule</span>
                  <span className={selectedStep === 3 ? 'text-primary-500' : 'text-gray-600 dark:text-gray-400'}>Details</span>
                </div>
              </div>

              {isSubmitted ? (
                <motion.div 
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-lg p-6 flex items-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <div>
                    <h3 className="font-medium text-green-800 dark:text-green-400">Booking Request Submitted!</h3>
                    <p className="text-green-700 dark:text-green-500 text-sm">
                      Thank you for your booking request. I'll review your details and get back to you within 24 hours to confirm.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Step 1: Service Selection */}
                  {selectedStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h2 className="text-2xl font-display font-bold mb-6">Select a Service</h2>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        {services.map((service) => (
                          <label
                            key={service.id}
                            className={`border rounded-lg p-4 cursor-pointer transition-colors hover:border-primary-300 dark:hover:border-primary-700 ${
                              selectedService === service.id 
                                ? 'border-primary-500 dark:border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                                : 'border-gray-300 dark:border-gray-700'
                            }`}
                          >
                            <input
                              type="radio"
                              value={service.id}
                              className="sr-only"
                              {...register('service', { required: 'Please select a service' })}
                            />
                            <div className="flex items-center">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                                selectedService === service.id
                                  ? 'bg-primary-500 text-white'
                                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                              }`}>
                                {service.icon}
                              </div>
                              <span className="font-medium">{service.name}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                      
                      {errors.service && (
                        <p className="text-sm text-red-500 mb-4">{errors.service.message}</p>
                      )}
                      
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={nextStep}
                          disabled={!selectedService}
                          className={`btn-primary ${!selectedService ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          Next: Choose Date & Time
                        </button>
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Step 2: Date and Time Selection */}
                  {selectedStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h2 className="text-2xl font-display font-bold mb-6">Select Date & Time</h2>
                      
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Select Date
                          <span className="text-red-500 ml-1">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute left-3 top-3 text-gray-500">
                            <Calendar className="h-5 w-5" />
                          </div>
                          <Controller
                            control={control}
                            name="date"
                            rules={{ required: 'Please select a date' }}
                            render={({ field }) => (
                              <DatePicker
                                selected={field.value}
                                onChange={(date) => {
                                  const newDate = date;
                                  if (newDate) {
                                    // Set time to 9 AM by default
                                    newDate.setHours(9, 0, 0, 0);
                                  }
                                  field.onChange(newDate);
                                }}
                                minDate={tomorrow}
                                filterDate={isWeekday}
                                placeholderText="Select a weekday"
                                className="input pl-10"
                                calendarClassName="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg"
                                selectsStart
                                startDate={field.value}
                                endDate={watch('time')}
                              />
                            )}
                          />
                        </div>
                        {errors.date && (
                          <p className="mt-1 text-sm text-red-500">{errors.date.message}</p>
                        )}
                      </div>
                      
                      <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Select Time
                          <span className="text-red-500 ml-1">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute left-3 top-3 text-gray-500">
                            <Clock className="h-5 w-5" />
                          </div>
                          <Controller
                            control={control}
                            name="time"
                            rules={{ required: 'Please select a time' }}
                            render={({ field }) => (
                              <DatePicker
                                selected={field.value}
                                onChange={(time) => {
                                  const newTime = time;
                                  if (newTime) {
                                    // Ensure time is within working hours
                                    const hours = newTime.getHours();
                                    if (hours < 9) {
                                      newTime.setHours(9, 0, 0, 0);
                                    } else if (hours > 17) {
                                      newTime.setHours(17, 0, 0, 0);
                                    }
                                  }
                                  field.onChange(newTime);
                                }}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={60}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                                placeholderText="Select a time"
                                className="input pl-10"
                                selectsEnd
                                startDate={watch('date')}
                                endDate={field.value}
                                minTime={setHours(setMinutes(new Date(), 0), 9)}
                                maxTime={setHours(setMinutes(new Date(), 0), 17)}
                              />
                            )}
                          />
                        </div>
                        {errors.time && (
                          <p className="mt-1 text-sm text-red-500">{errors.time.message}</p>
                        )}
                      </div>
                      
                      <div className="flex justify-between">
                        <button type="button" onClick={prevStep} className="btn-secondary">
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={nextStep}
                          disabled={!selectedDate || !watch('time')}
                          className={`btn-primary ${!selectedDate || !watch('time') ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          Next: Your Details
                        </button>
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Step 3: Personal Details */}
                  {selectedStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h2 className="text-2xl font-display font-bold mb-6">Your Details</h2>
                      
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Full Name
                              <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                              type="text"
                              id="name"
                              className={`input ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                              placeholder="John Doe"
                              {...register('name', { required: 'Name is required' })}
                            />
                            {errors.name && (
                              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                            )}
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Email Address
                              <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              className={`input ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                              placeholder="john@example.com"
                              {...register('email', { 
                                required: 'Email is required',
                                pattern: { 
                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: 'Invalid email address'
                                }
                              })}
                            />
                            {errors.email && (
                              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Phone Number
                            <span className="text-red-500 ml-1">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            className={`input ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                            placeholder="(123) 456-7890"
                            {...register('phone', { 
                              required: 'Phone number is required',
                              pattern: { 
                                value: /^[0-9()-\s+]+$/,
                                message: 'Invalid phone number'
                              }
                            })}
                          />
                          {errors.phone && (
                            <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Additional Information
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            className="input"
                            placeholder="Tell me more about what you're looking for..."
                            {...register('message')}
                          ></textarea>
                        </div>
                        
                        <div className="flex justify-between">
                          <button type="button" onClick={prevStep} className="btn-secondary">
                            Back
                          </button>
                          <button type="submit" className="btn-primary">
                            Submit Booking Request
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Booking;