import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-4 text-slate-800">Get In Touch</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center mb-12">
          We'd love to hear from you. Please feel free to contact us through any of the methods below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 shadow-lg rounded-lg">
                <Phone size={40} className="mx-auto text-blue-500 mb-4" />
                <h3 className="font-bold text-lg">By Phone</h3>
                <p className="text-gray-600">(480) 555-0103</p>
            </div>
            <div className="p-8 shadow-lg rounded-lg">
                <MapPin size={40} className="mx-auto text-blue-500 mb-4" />
                <h3 className="font-bold text-lg">Our Office</h3>
                <p className="text-gray-600">4517 Washington Ave, Manchester</p>
            </div>
            <div className="p-8 shadow-lg rounded-lg">
                <Mail size={40} className="mx-auto text-blue-500 mb-4" />
                <h3 className="font-bold text-lg">By Email</h3>
                <p className="text-gray-600">debra.holt@example.com</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;