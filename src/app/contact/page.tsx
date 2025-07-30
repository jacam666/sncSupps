"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We\'ll get back to you soon.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-orange-50 min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <div className="text-center pt-32 pb-12 px-4"> {/* Added pt-32 to account for fixed navbar */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Get In <span className="text-orange-500">Touch</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ready to start your fitness journey? We're here to help you achieve your goals with expert guidance and support.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg border border-orange-100 p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Contact <span className="text-orange-500">Information</span>
              </h2>
              
              {/* Address */}
              <div className="mb-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-full p-3">
                    <MapPinIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Our Studio</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Moorings,<br />
                      Watling Street,<br />
                      Hockliffe,<br />
                      Leighton Buzzard,<br />
                      LU7 9NB
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-full p-3">
                    <EnvelopeIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
                    <a 
                      href="mailto:hello@uksnc.co.uk" 
                      className="text-orange-600 hover:text-orange-700 font-semibold text-lg transition-colors duration-300"
                    >
                      hello@uksnc.co.uk
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-full p-3">
                    <PhoneIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
                    <a 
                      href="tel:01525211127" 
                      className="text-orange-600 hover:text-orange-700 font-semibold text-lg transition-colors duration-300"
                    >
                      01525 211127
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="mb-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-full p-3">
                    <ClockIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Opening Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p><span className="font-medium">Monday - Friday:</span> 6:00 AM - 10:00 PM</p>
                      <p><span className="font-medium">Saturday:</span> 7:00 AM - 8:00 PM</p>
                      <p><span className="font-medium">Sunday:</span> 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Follow Our Journey</h2>
              <p className="text-orange-100 mb-6">
                Stay updated with our latest training tips, success stories, and community events.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.987 11.988 11.987 6.618 0 11.985-5.369 11.985-11.987C23.985 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.185-1.559-.737-.948-1.038-2.165-.849-3.433.189-1.268.89-2.392 1.978-3.172 1.088-.78 2.473-.995 3.907-.606 1.434.389 2.684 1.331 3.527 2.658.843 1.327.954 2.924.312 4.505-.642 1.581-1.966 2.795-3.735 3.425-.709.252-1.463.376-2.253.376-.592 0-1.178-.073-1.748-.2l1.046-.996z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-orange-100 p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Send Us A <span className="text-orange-500">Message</span>
            </h2>
            
            {submitMessage && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Phone & Subject Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="personal-training">Personal Training</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="nutrition">Nutrition Consultation</option>
                    <option value="studio-tour">Studio Tour</option>
                    <option value="supplements">Supplement Questions</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300 resize-vertical"
                  placeholder="Tell us about your fitness goals, questions, or how we can help you..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending Message...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Map or Additional Info Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg border border-orange-100 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Why Choose <span className="text-orange-500">SNC Studio?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Guidance</h3>
              <p className="text-gray-600">30+ years of experience in fitness and nutrition coaching</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Facility</h3>
              <p className="text-gray-600">State-of-the-art equipment in a professional environment</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Personal Approach</h3>
              <p className="text-gray-600">Customized training and nutrition plans for your goals</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
