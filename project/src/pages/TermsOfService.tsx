'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
          <p className="text-gray-600">
            We provide creative services including but not limited to photography, videography, and creative direction. All services are subject to availability.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Booking and Payments</h2>
          <p className="text-gray-600">
            - Bookings are confirmed upon receipt of a 50% deposit<br/>
            - Full payment is due 7 days before the scheduled service<br/>
            - Cancellations must be made at least 14 days in advance to receive a refund of the deposit
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
          <p className="text-gray-600">
            All content, including images and videos, remains the property of the creator unless otherwise agreed upon in writing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p className="text-gray-600">
            In no event shall we be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
          <p className="text-gray-600">
            We reserve the right to modify these Terms of Service at any time. Your continued use of our services after any changes constitutes your acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
          <p className="text-gray-600">
            If you have any questions about these Terms of Service, please contact us through our contact form.
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default TermsOfService;
