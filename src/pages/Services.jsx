import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Building, 
  Truck, 
  Recycle, 
  Shield,
  CheckCircle,
  Phone,
  Clock,
  Users,
  Wrench,
  Home,
  Factory,
  Trash2
} from 'lucide-react'
import demolitionImage from '../assets/pexels_demolition_1.jpg'
import wasteImage from '../assets/pexels_waste_management_1.jpg'
import officeImage from '../assets/checkatrade_image_5.webp'

const Services = () => {
  const mainServices = [
    {
      icon: Building,
      title: 'Commercial Demolition',
      description: 'Professional soft strip demolition and site clearance for major retailers and contractors.',
      image: demolitionImage,
      features: [
        'Soft Strip Demolition',
        'Commercial Site Clearance', 
        'Retail Unit Transformations',
        'Office Space Conversions',
        'Pre-demolition Preparation',
        'Multi-phase Project Management'
      ],
      subServices: [
        {
          title: 'Soft Strip Demolition',
          description: 'Interior wall removal, ceiling strips, flooring extraction for main contractors.'
        },
        {
          title: 'Commercial Site Clearance', 
          description: 'Full building clearances and construction site preparation.'
        },
        {
          title: 'Office Strip-Outs',
          description: 'Multi-floor office clearances with partition wall removal and IT disposal.'
        }
      ]
    },
    {
      icon: Truck,
      title: 'Waste Management',
      description: 'Comprehensive waste collection and disposal with 95%+ recycling rates.',
      image: wasteImage,
      features: [
        'Commercial Waste Collection',
        'Confidential Waste Destruction',
        'Scrap Metal Collection',
        'Aggregates & Concrete Removal',
        'Tyre Recycling',
        'Emergency Clearance'
      ],
      subServices: [
        {
          title: 'Commercial Waste',
          description: 'Regular collections for businesses with flexible scheduling.'
        },
        {
          title: 'Confidential Shredding',
          description: 'Secure destruction of sensitive documents with audit trails.'
        },
        {
          title: 'Scrap Metal Collection',
          description: 'Free collection service for all types of scrap metal.'
        }
      ]
    },
    {
      icon: Shield,
      title: 'Specialized Services',
      description: 'Expert handling of hazardous materials and specialized clearances.',
      image: officeImage,
      features: [
        'Asbestos Removal (Non-Licensed)',
        'Commercial Kitchen Strip-Outs',
        'Equipment Dismantling',
        'Extraction System Removal',
        'Appliance Recycling',
        'Safe Handling Protocols'
      ],
      subServices: [
        {
          title: 'Asbestos Removal',
          description: 'Non-licensed asbestos removal with certified disposal routes.'
        },
        {
          title: 'Kitchen Strip-Outs',
          description: 'Restaurant and pub kitchen equipment removal and disposal.'
        },
        {
          title: 'Emergency Services',
          description: '24/7 emergency clearance for urgent situations.'
        }
      ]
    }
  ]

  const domesticServices = [
    {
      icon: Home,
      title: 'House Clearances',
      description: 'Complete property clearances with careful handling of belongings.'
    },
    {
      icon: Recycle,
      title: 'Garden & Garage Clearance',
      description: 'Green waste removal and garage clearances with recycling.'
    },
    {
      icon: Wrench,
      title: 'Light Tree Surgery',
      description: 'Tree removal and garden maintenance services.'
    },
    {
      icon: Trash2,
      title: 'Soil & Rubble Disposal',
      description: 'Safe disposal of construction waste and garden materials.'
    }
  ]

  const serviceAreas = [
    'Portsmouth', 'Havant', 'Waterlooville', 'Southampton', 'Hampshire', 'London (Commercial)'
  ]

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-600 text-white mb-6">
              <Shield className="h-3 w-3 mr-1" />
              Professional Services
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-blue-400">Services</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From major commercial demolitions to specialized waste management, 
              we deliver professional solutions across Hampshire and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-3 mb-6">
                    <service.icon className="h-8 w-8 text-blue-400" />
                    <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                  </div>
                  
                  <p className="text-xl text-gray-300 mb-8">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {service.subServices.map((subService, idx) => (
                      <Card key={idx} className="bg-gray-900 border-gray-800">
                        <CardContent className="p-4">
                          <h4 className="font-semibold text-white mb-2">{subService.title}</h4>
                          <p className="text-gray-400 text-sm">{subService.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Phone className="h-4 w-4 mr-2" />
                    Get Quote for {service.title}
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="rounded-lg shadow-2xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domestic Services */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-blue-400">Domestic</span> Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We also provide comprehensive domestic clearance services for homeowners 
              across Portsmouth and Hampshire.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {domesticServices.map((service, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-400 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <service.icon className="h-10 w-10 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Areas We <span className="text-blue-400">Cover</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Serving clients across Hampshire and specialized commercial projects in London.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {serviceAreas.map((area, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-colors">
                  <div className="text-white font-semibold">{area}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Why Choose DJ Waste & Demolition?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">24/7 Emergency Service</h3>
              <p className="text-blue-100">Available around the clock for urgent clearances and demolitions.</p>
            </div>
            
            <div className="text-center">
              <Users className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Experienced Team</h3>
              <p className="text-blue-100">15+ years of experience with major commercial projects.</p>
            </div>
            
            <div className="text-center">
              <Recycle className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">95%+ Recycling Rate</h3>
              <p className="text-blue-100">Environmental responsibility in all our waste management.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              Get Your Free Quote Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

