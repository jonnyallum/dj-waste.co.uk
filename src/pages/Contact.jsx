import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  CheckCircle,
  Star,
  Send,
  MessageSquare,
  Calendar,
  Truck
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    projectScale: '',
    location: '',
    urgency: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Daryl Direct',
      value: '07458 178097',
      description: 'Available 24/7 for emergency services',
      action: 'tel:07458178097',
      actionText: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'djwaste@yahoo.com',
      description: 'We respond within 2 hours',
      action: 'mailto:djwaste@yahoo.com',
      actionText: 'Send Email'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      value: 'Send Photos & Details',
      description: 'Quick quotes via WhatsApp',
      action: 'https://wa.me/447458178097',
      actionText: 'WhatsApp'
    }
  ]

  const serviceAreas = [
    'Portsmouth', 'Havant', 'Waterlooville', 'Southampton', 'Hampshire', 'London (Commercial)'
  ]

  const businessHours = [
    { day: 'Monday - Friday', hours: '7:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Emergency Only' },
    { day: 'Emergency Service', hours: '24/7 Available' }
  ]

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-600 text-white mb-6">
              <Clock className="h-3 w-3 mr-1" />
              24/7 Emergency Service
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get Your <span className="text-blue-400">Free Quote</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to start your project? Contact us today for a free, no-obligation quote. 
              Same day response guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-400 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <method.icon className="h-12 w-12 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-2xl font-semibold text-blue-400 mb-2">{method.value}</p>
                  <p className="text-gray-400 text-sm mb-6">{method.description}</p>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open(method.action, '_blank')}
                  >
                    {method.actionText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Request Your <span className="text-blue-400">Free Quote</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below and we'll get back to you within 2 hours with a detailed quote.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-gray-900 border-gray-700 text-white"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-gray-900 border-gray-700 text-white"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-900 border-gray-700 text-white"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Service Type *
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('serviceType', value)}>
                      <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="commercial-demolition">Commercial Demolition</SelectItem>
                        <SelectItem value="waste-management">Waste Management</SelectItem>
                        <SelectItem value="office-stripout">Office Strip-Out</SelectItem>
                        <SelectItem value="domestic-clearance">Domestic Clearance</SelectItem>
                        <SelectItem value="asbestos-removal">Asbestos Removal</SelectItem>
                        <SelectItem value="emergency-service">Emergency Service</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Project Scale
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('projectScale', value)}>
                      <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                        <SelectValue placeholder="Select project scale" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small (1-2 days)</SelectItem>
                        <SelectItem value="medium">Medium (3-7 days)</SelectItem>
                        <SelectItem value="large">Large (1-2 weeks)</SelectItem>
                        <SelectItem value="major">Major (2+ weeks)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Location *
                    </label>
                    <Input
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="bg-gray-900 border-gray-700 text-white"
                      placeholder="Project location"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Urgency
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('urgency', value)}>
                      <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">Emergency (24 hours)</SelectItem>
                        <SelectItem value="urgent">Urgent (2-3 days)</SelectItem>
                        <SelectItem value="standard">Standard (1 week)</SelectItem>
                        <SelectItem value="flexible">Flexible (2+ weeks)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-gray-900 border-gray-700 text-white min-h-32"
                    placeholder="Please describe your project requirements, including any specific challenges or requirements..."
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Send className="h-5 w-5 mr-2" />
                  Send Quote Request
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Business Hours */}
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Clock className="h-5 w-5 text-blue-400 mr-2" />
                    Business Hours
                  </h3>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-400">{schedule.day}</span>
                        <span className="text-white font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Service Areas */}
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                    Service Areas
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-400" />
                        <span className="text-gray-300 text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Why Choose Us */}
              <Card className="bg-blue-600 border-blue-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Star className="h-5 w-5 text-white mr-2" />
                    Why Choose Us?
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-white" />
                      <span className="text-blue-100 text-sm">9.93/10 Checkatrade Rating</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-white" />
                      <span className="text-blue-100 text-sm">Fully Licensed & Insured</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-white" />
                      <span className="text-blue-100 text-sm">Same Day Response</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-white" />
                      <span className="text-blue-100 text-sm">95%+ Recycling Rate</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Emergency Service Available
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Need immediate assistance? We're available 24/7 for emergency demolition and clearance services.
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            <Phone className="h-5 w-5 mr-2" />
            Emergency Line: 07458 178097
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Contact

