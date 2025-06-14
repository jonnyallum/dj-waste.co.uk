import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin } from 'lucide-react'
import djLogo from '../assets/dj-logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={djLogo} alt="DJ Waste & Demolition" className="h-10 w-auto" />
              <div className="text-white">
                <div className="text-lg font-bold">DJ Waste & Demolition</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Portsmouth's premier commercial demolition and waste clearance specialists. 
              Licensed, insured, and trusted by major retailers across Hampshire.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">Commercial Demolition</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">Soft Strip Demolition</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">Office Strip-Outs</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">Waste Management</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">Asbestos Removal</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">Scrap Metal Collection</Link></li>
            </ul>
          </div>

          {/* Areas Covered */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Areas Covered</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Portsmouth</li>
              <li className="text-gray-400">Havant</li>
              <li className="text-gray-400">Waterlooville</li>
              <li className="text-gray-400">Southampton</li>
              <li className="text-gray-400">Hampshire</li>
              <li className="text-gray-400">London (Commercial)</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">07458 178097</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">djwaste@yahoo.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">Foxcott Grove, Portsmouth</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">24/7 Emergency Service</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 DJ Waste & Demolition. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</Link>
            <span className="text-gray-400">Licensed Waste Carrier</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

