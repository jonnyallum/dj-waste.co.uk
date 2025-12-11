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
  Home,
  Factory
} from 'lucide-react'

const Services = () => {
  const mainServices = [
    {
      icon: Building,
      title: 'Commercial Demolition',
      description: 'Professional soft strip demolition and site clearance services for major retailers, contractors, and commercial properties across Portsmouth and Hampshire. We specialize in retail unit transformations, office conversions, and complete building demolitions.',
      image: '/images/big-machinery.jpg',
      features: [
        'Soft Strip Demolition',
        'Retail Unit Strip-Outs', 
        'Office Clearances',
        'Kitchen Removals',
        'Complete Building Demolition',
        'Commercial Site Clearance',
        'Pre-demolition Preparation',
        'Multi-phase Project Management'
      ],
      subServices: [
        {
          title: 'Retail Unit Strip-Outs',
          description: 'Complete retail space clearances for major brands including Debenhams, Topshop, and M&S. We handle everything from fixture removal to final site handover.'
        },
        {
          title: 'Office Demolition',
          description: 'Multi-floor office clearances with partition wall removal, ceiling strips, and IT equipment disposal. Minimal disruption to surrounding tenants.'
        },
        {
          title: 'Commercial Kitchen Strip-Outs',
          description: 'Restaurant and pub kitchen equipment removal including extraction systems, appliances, and commercial fixtures with certified disposal.'
        }
      ]
    },
    {
      icon: Home,
      title: 'Domestic Waste Clearance',
      description: 'Reliable and efficient domestic waste removal services for homes and residential properties throughout Portsmouth, Havant, and Waterlooville. From garden clearances to full house clearouts, we provide same-day service with competitive rates.',
      image: '/images/commercial-waste.jpg',
      features: [
        'Garden Waste Removal',
        'House Clearances',
        'Furniture Disposal',
        'Same Day Service',
        'Garage Clearances',
        'Shed Dismantling',
        'Green Waste Collection',
        'Appliance Recycling'
      ],
      subServices: [
        {
          title: 'Full House Clearances',
          description: 'Complete property clearances with careful handling of belongings. Ideal for house moves, probate clearances, and downsizing projects.'
        },
        {
          title: 'Garden & Garage Clearance',
          description: 'Green waste removal, garden shed dismantling, and garage clearances. We recycle all suitable materials and dispose of waste responsibly.'
        },
        {
          title: 'Furniture & Appliance Removal',
          description: 'Quick and efficient removal of unwanted furniture, white goods, and household items with same-day service available.'
        }
      ]
    },
    {
      icon: Factory,
      title: 'Commercial Waste Clearance',
      description: 'Professional commercial waste collection and disposal services for businesses across Hampshire. Licensed and fully insured with competitive rates and flexible scheduling. We handle everything from regular office waste to confidential document destruction.',
      image: '/images/corporate.jpg',
      features: [
        'Office Waste Collection',
        'Retail Waste Management',
        'Confidential Shredding',
        'Regular Collections',
        'Scrap Metal Collection',
        'Cardboard & Packaging',
        'Equipment Disposal',
        'Emergency Clearance'
      ],
      subServices: [
        {
          title: 'Office Waste Management',
          description: 'Regular commercial waste collections for offices and business premises with flexible scheduling to suit your operations.'
        },
        {
          title: 'Confidential Waste Destruction',
          description: 'Secure destruction of sensitive documents and confidential materials with full audit trails and certification.'
        },
        {
          title: 'Retail Waste Services',
          description: 'Comprehensive waste management for retail premises including cardboard recycling, packaging disposal, and fixture removal.'
        }
      ]
    },
    {
      icon: Recycle,
      title: 'Rubble and Builders Waste',
      description: 'Specialist builders waste and rubble removal service for construction sites, renovation projects, and building contractors. We handle all construction waste, aggregates, concrete, bricks, and building materials with industry-leading 95%+ recycling rates.',
      image: '/images/rubble-waste.jpg',
      features: [
        'Construction Waste',
        'Concrete & Bricks',
        'Timber & Metal',
        'Aggregate Recycling',
        'Soil Disposal',
        'Plasterboard Removal',
        'Site Clearance',
        'Skip Alternative'
      ],
      subServices: [
        {
          title: 'Construction Site Clearance',
          description: 'Complete site clearance for builders and contractors. We handle all types of construction waste with fast turnaround times.'
        },
        {
          title: 'Aggregate & Concrete Recycling',
          description: 'Environmentally responsible disposal and recycling of concrete, bricks, blocks, and aggregates. Licensed waste carrier with full documentation.'
        },
        {
          title: 'Mixed Builders Waste',
          description: 'Collection and disposal of mixed construction waste including timber, metal, plasterboard, and general building materials.'
        }
      ]
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
              From commercial demolitions to domestic waste clearance and builders rubble removal, 
              we deliver professional solutions across Portsmouth, Hampshire and beyond.
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
                  
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {service.subServices.map((subService, idx) => (
                      <Card key={idx} className="bg-gray-900 border-gray-800 hover:border-blue-400 transition-colors">
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
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
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

      {/* Service Areas */}
      <section className="py-16 bg-gray-900">
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
                <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
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
              <p className="text-blue-100">Available around the clock for urgent clearances and demolitions across Hampshire.</p>
            </div>
            
            <div className="text-center">
              <Users className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Experienced Team</h3>
              <p className="text-blue-100">Trusted by major retailers including Debenhams, Topshop, and M&S with 500+ projects completed.</p>
            </div>
            
            <div className="text-center">
              <Recycle className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">95%+ Recycling Rate</h3>
              <p className="text-blue-100">Environmental responsibility in all our waste management and demolition services.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              Call 07920 449132 for Free Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
