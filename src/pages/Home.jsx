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
import heroImage from '../assets/hero-image.webp'
import wasteImage from '../assets/pexels_waste_management_1.jpg'
import demolitionImage from '../assets/pexels_demolition_1.jpg'

const Home = () => {
  const services = [
    {
      icon: Building,
      title: 'Commercial Demolition',
      description: 'Professional soft strip demolition and site clearance for major retailers and contractors. We handle everything from retail unit strip-outs to complete building demolitions.',
      features: ['Retail Unit Strip-Outs', 'Office Clearances', 'Kitchen Removals', 'Complete Building Demolition'],
      image: '/images/big-machinery.jpg'
    },
    {
      icon: Truck,
      title: 'Domestic Waste Clearance',
      description: 'Reliable and efficient domestic waste removal services for homes and residential properties. From garden clearances to full house clearouts.',
      features: ['Garden Waste Removal', 'House Clearances', 'Furniture Disposal', 'Same Day Service'],
      image: '/images/commercial-waste.jpg'
    },
    {
      icon: Truck,
      title: 'Commercial Waste Clearance',
      description: 'Professional commercial waste collection and disposal services for businesses across Hampshire. Licensed and fully insured with competitive rates.',
      features: ['Office Waste Collection', 'Retail Waste Management', 'Confidential Shredding', 'Regular Collections'],
      image: '/images/corporate.jpg'
    },
    {
      icon: Recycle,
      title: 'Rubble and Builders Waste',
      description: 'Specialist builders waste and rubble removal service. We handle all construction waste, aggregates, and building materials with 95%+ recycling rates.',
      features: ['Construction Waste', 'Concrete & Bricks', 'Timber & Metal', 'Aggregate Recycling'],
      image: '/images/rubble-waste.jpg'
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
              <a href="https://www.checkatrade.com/trades/djwasteandrecycling" target="_blank" rel="noopener noreferrer">
                <Badge className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer">
                  <Star className="h-3 w-3 mr-1" />
                  9.93/10 Checkatrade Rating - View Reviews
                </Badge>
              </a>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:border-blue-400 transition-all duration-300 group overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="h-10 w-10 text-blue-400" />
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See What Our <span className="text-blue-400">Customers Say</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Check out our reviews, testimonials, and project gallery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <a href="https://www.checkatrade.com/trades/djwasteandrecycling" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="bg-gray-800 border-gray-700 hover:border-blue-400 transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <Award className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Checkatrade</h3>
                  <div className="flex items-center justify-center mb-4">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-3xl font-bold text-white ml-2">9.93/10</span>
                  </div>
                  <p className="text-gray-400 mb-4">View our verified reviews and project gallery</p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    View Reviews & Gallery
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </a>
            
            <a href="https://www.facebook.com/djwasteandrecycling" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="bg-gray-800 border-gray-700 hover:border-blue-400 transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Facebook</h3>
                  <p className="text-gray-400 mb-6">Follow us for updates, testimonials, and behind-the-scenes content</p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Visit Our Page
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </a>
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

