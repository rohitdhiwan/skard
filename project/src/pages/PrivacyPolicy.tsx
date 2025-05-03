'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="text-gray-600">
            We collect information that you provide directly to us, such as when you fill out forms or contact us. This may include:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Your name and contact information</li>
            <li>Email address</li>
            <li>Information related to your booking inquiries</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Respond to your inquiries</li>
            <li>Process your bookings</li>
            <li>Improve our services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
          <p className="text-gray-600">
            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
          <p className="text-gray-600">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Access your personal information</li>
            <li>Correct any inaccuracies</li>
            <li>Request deletion of your information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Changes to This Policy</h2>
          <p className="text-gray-600">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this privacy policy, please contact us through our contact form.
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
