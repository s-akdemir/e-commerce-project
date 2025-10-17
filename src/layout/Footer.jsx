import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail } from 'lucide-react';
// Sosyal medya ikonları için bir kütüphane kullanabilirsiniz veya SVG olarak ekleyebilirsiniz.
// Şimdilik sadece placeholder ekliyorum.
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white">
        {/* Üst Kısım: Logo ve Sosyal Medya */}
        <div className="bg-gray-50">
            <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 md:mb-0">Bandage</h3>
                <div className="flex gap-5 text-sky-500">
                    <Facebook />
                    <Instagram />
                    <Twitter />
                </div>
            </div>
        </div>

        <div className="bg-white py-12">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-sm">
                
                {/* Link Sütunları */}
                <div className="flex flex-col gap-4">
                    <h5 className="font-bold text-slate-800 mb-2">Company Info</h5>
                    <Link to="#" className="text-gray-500 font-bold hover:underline">About Us</Link>
                    <Link to="#" className="text-gray-500 font-bold hover:underline">Carrier</Link>
                    <Link to="#" className="text-gray-500 font-bold hover:underline">We are hiring</Link>
                    <Link to="#" className="text-gray-500 font-bold hover:underline">Blog</Link>
                </div>

                <div className="flex flex-col gap-4">
                    <h5 className="font-bold text-slate-800 mb-2">Legal</h5>
                    <Link to="#" className="text-gray-500 font-bold hover:underline">About Us</Link>
                    <Link to="#" className="text-gray-500 font-bold hover:underline">Carrier</Link>
                    <Link to="#" className="text-gray-500 font-bold hover:underline">We are hiring</Link>
                    <Link to="#" className="text-gray-500 font-bold hover:underline">Blog</Link>
                </div>

                <div className="flex flex-col gap-4">
                    <h5 className="font-bold text-slate-800 mb-2">Features</h5>
                    <Link to="#" className="text-gray-500 font-bold hover:underline">Business Marketing</Link>
                    <Link to="#" className="text-gray-500 font-bold hover:underline">User Analytic</Link>
                    <Link to="#" className="text-gray-500 font-bold hover:underline">Live Chat</Link>
                    <Link to="#" className="text-gray-500 font-bold hover:underline">Unlimited Support</Link>
                </div>

                <div className="flex flex-col gap-4">
                    <h5 className="font-bold text-slate-800 mb-2">Resources</h5>
                    <Link to="#" className="text-gray-500 font-bold hover:underline">IOS & Android</Link>
                    <Link to="#" className="text-gray-500 font-bold hover:underline">Watch a Demo</Link>
                    <Link to="#" className="text-gray-500 font-bold hover:underline">Customers</Link>
                    <Link to="#" className="text-gray-500 font-bold hover:underline">API</Link>
                </div>
                
                {/* İletişim Sütunu */}
                <div className="flex flex-col gap-4">
                    <h5 className="font-bold text-slate-800 mb-2">Get In Touch</h5>
                    <div className="flex items-center gap-2 text-gray-500 font-bold">
                        <Phone size={20} className="text-sky-500"/>
                        <span>(480) 555-0103</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 font-bold">
                        <MapPin size={20} className="text-sky-500"/>
                        <span>4517 Washington Ave.</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 font-bold">
                        <Mail size={20} className="text-sky-500"/>
                        <span>debra.holt@example.com</span>
                    </div>
                </div>

            </div>
        </div>

        {/* Alt Kısım: Telif Hakkı */}
        <div className="bg-gray-50">
            <div className="container mx-auto px-6 py-6">
                <p className="text-center md:text-left text-gray-500 font-bold">Made With Love By Finland All Right Reserved</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;