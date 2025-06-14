import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Phone, 
  Star, 
  CheckCircle, 
  Truck, 
  Building, 
  Recycle, 
  Shield,
  ArrowRight,
  Users,
  Clock,
  Award
} from 'lucide-react'
import heroImage from '../assets/checkatrade_image_8.webp'
import wasteImage from '../assets/pexels_waste_management_1.jpg'
import demolitionImage from '../assets/pexels_demolition_1.jpg'

const Home = () => {
  const services = [
    {
      icon: Building,
      title: 'Commercial Demolition',
      description: 'Professional soft strip demolition and site clearance for major retailers and contractors.',
      features: ['Retail Unit Strip-Outs', 'Office Clearances', 'Kitchen Removals']
    },
    {
      icon: Truck,
      title: 'Waste Management',
      description: 'Comprehensive waste collection and disposal with 95%+ recycling rates.',
      features: ['Commercial Waste', 'Confidential Shredding', 'Scrap Metal Collection']
    },
    {
      icon: Recycle,
      title: 'Environmental Solutions',
      description: 'Sustainable waste processing and recycling facilities for all waste streams.',
      features: ['Aggregates Recycling', 'Green Waste Processing', 'Asbestos Removal']
    }
  ]

  const clients = [
    'Debenhams', 'Topshop', 'Marks & Spencer', 'Ministry of Defence', 'Kings Nightclub', 'Spinnaker Tower'
  ]

  const stats = [
    { icon: Users, value: '500+', label: 'Projects Completed' },
    { icon: Star, value: '9.93/10', label: 'Checkatrade Rating' },
    { icon: Recycle, value: '95%+', label: 'Recycling Rate' },
    { icon: Clock, value: '24/7', label: 'Emergency Service' }
  ]

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-6">
              <Badge className="bg-blue-600 text-white">
                <Star className="h-3 w-3 mr-1" />
                9.93/10 Checkatrade Rating
              </Badge>
              <Badge className="bg-green-600 text-white">
                <Shield className="h-3 w-3 mr-1" />
                Fully Licensed & Insured
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Portsmouth's Premier
              <span className="text-blue-400 block">Demolition & Waste</span>
              Specialists
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Professional commercial demolition and waste clearance services. 
              Trusted by major retailers including Debenhams, Topshop, and M&S.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                Call 07920 449132
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4">
                Get Free Quote
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                24/7 Emergency Service
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                Same Day Response
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                No Job Too Big
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-blue-400">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From major commercial demolitions to specialized waste management, 
              we deliver professional solutions across Hampshire.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:border-blue-400 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <service.icon className="h-12 w-12 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-400 mb-6 text-center">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by <span className="text-blue-400">Major Brands</span>
            </h2>
            <p className="text-gray-400">
              We've successfully completed projects for some of the UK's biggest retailers and organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                  <div className="text-white font-semibold">{client}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get your free, no-obligation quote today. Same day response guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="h-5 w-5 mr-2" />
              Call Now: 07920 449132
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              Request Quote Online
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

