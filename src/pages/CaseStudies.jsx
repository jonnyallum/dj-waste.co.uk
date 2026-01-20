import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Building, 
  Clock, 
  CheckCircle,
  Phone,
  MapPin,
  Users,
  Recycle,
  Star,
  Calendar,
  Truck
} from 'lucide-react'
import debenhamsImage from '../assets/checkatrade_image_6.webp'
import officeImage from '../assets/checkatrade_image_7.webp'
import teamImage from '../assets/checkatrade_image_8.webp'
import topshopImage from '../assets/topshop_stripout.webp'
import spinnakerImage from '../assets/team_photo_1.webp'
import marksImage from '../assets/marks_spencer_stripout.webp'
import carphoneImage from '../assets/carphone_stripout.webp'
import googleImage from '../assets/google_london_office.webp'

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Debenhams Portsmouth - Full Commercial Strip-Out',
      client: 'National Retail Contractor',
      location: 'Portsmouth City Centre',
      duration: '5 days',
      wasteVolume: '40 tonnes',
      image: debenhamsImage,
      challenge: 'City centre logistics with minimal disruption',
      scope: [
        'Complete 2-floor retail strip-out',
        'Systematic dismantling of retail fixtures',
        'Changing rooms and displays removal',
        'Strategic waste removal coordination'
      ],
      execution: [
        'Systematic dismantling of retail fixtures, changing rooms, and displays',
        'Strategic waste removal using 3.5T grab hire and skip rotation',
        'Coordination with Portsmouth City Council for street access',
        'Final deep clean and handover preparation'
      ],
      results: [
        '98% waste diverted from landfill',
        'Zero noise complaints from neighbouring businesses',
        'Project completed 1 day ahead of schedule',
        'Client awarded DJ Waste additional contract phases'
      ],
      badge: 'Major Retail',
      badgeColor: 'bg-purple-600'
    },
    {
      id: 2,
      title: 'MOD Contract - Secure Government Facility',
      client: 'Ministry of Defence Contractor',
      location: 'Confidential Hampshire Location',
      duration: '7 days',
      wasteVolume: '22 tonnes + classified materials',
      image: officeImage,
      challenge: '100% security compliance maintained',
      scope: [
        'Full building strip and secure clearance',
        'Classified materials handling',
        'Security vetted personnel only',
        'Comprehensive audit trail'
      ],
      execution: [
        'All team members security vetted and DBS-cleared',
        'Confidential waste streams with documented chain of custody',
        'Regular progress reporting with photographic evidence',
        'Secure transport for sensitive materials disposal'
      ],
      results: [
        '100% security compliance maintained',
        'Comprehensive audit trail provided',
        'Awarded repeat MOD contracts',
        'Became approved supplier for government work'
      ],
      badge: 'Government',
      badgeColor: 'bg-red-600'
    },
    {
      id: 3,
      title: 'Assured Interiors London - Multi-Floor Office',
      client: 'Major London Contractor',
      location: 'Central London',
      duration: '4 days',
      wasteVolume: '35 tonnes',
      image: teamImage,
      challenge: '4-storey building, 10,000 sq ft clearance',
      scope: [
        'Complete electrical system removal',
        'Partition wall dismantling',
        'Coordinated lift system disconnection',
        'Multi-floor logistics management'
      ],
      execution: [
        'Systematic floor-by-floor clearance approach',
        'Specialized equipment for electrical system removal',
        'Coordinated lift access for material removal',
        'Minimal disruption to surrounding businesses'
      ],
      results: [
        '4-day completion for major London contractor',
        '100% steel and metal recycling achieved',
        'Established ongoing partnership',
        'Recommended for similar large-scale projects'
      ],
      badge: 'Large Scale',
      badgeColor: 'bg-orange-600'
    },
    {
      id: 4,
      title: 'Topshop Portsmouth - Retail Transformation',
      client: 'Retail Chain Contractor',
      location: 'Portsmouth',
      duration: '3 days',
      wasteVolume: '18 tonnes',
      image: topshopImage,
      challenge: 'Complete retail shelving and display removal',
      scope: [
        'Retail shelving and display removal',
        'Backroom storage clearance',
        'Glass door and window removal',
        'Point-of-sale system dismantling'
      ],
      execution: [
        'Careful dismantling to preserve reusable fixtures',
        'Systematic approach to maximize recycling',
        'Coordinated removal during off-hours',
        'Professional handover preparation'
      ],
      results: [
        '3-day completion with 100% fixture recycling',
        'Zero damage to building structure',
        'Client satisfaction leading to repeat business',
        'Efficient logistics despite city centre location'
      ],
      badge: 'Retail',
      badgeColor: 'bg-green-600'
    },
    {
      id: 5,
      title: 'Spinnaker Tower - Landmark Kitchen Clearance',
      client: 'Portsmouth Landmark',
      location: 'Portsmouth Harbour',
      duration: '2 days',
      wasteVolume: '12 tonnes',
      image: spinnakerImage,
      challenge: 'Iconic Portsmouth landmark with challenging access',
      scope: [
        'Commercial kitchen extraction systems',
        'Tourism facility preparation',
        'Specialized access requirements',
        'Heritage building considerations'
      ],
      execution: [
        'Specialized access via tower base',
        'Careful handling of extraction systems',
        'Coordination with tourism operations',
        'Minimal disruption to visitor experience'
      ],
      results: [
        '100% steel recycling with landmark project recognition',
        'Successful navigation of access challenges',
        'Positive feedback from Portsmouth tourism',
        'Enhanced reputation for complex projects'
      ],
      badge: 'Landmark',
      badgeColor: 'bg-blue-600'
    },
    {
      id: 6,
      title: 'Marks & Spencer Havant - Retail Strip-Out',
      client: 'Marks & Spencer',
      location: 'Havant',
      duration: '4 days',
      wasteVolume: '25 tonnes',
      image: marksImage,
      challenge: 'Complete retail unit strip-out with minimal disruption',
      scope: [
        'Full retail unit clearance',
        'Fixture and display removal',
        'Coordinated waste collection',
        'Professional site handover'
      ],
      execution: [
        'Systematic dismantling of retail fixtures',
        'Efficient waste segregation and removal',
        'Coordination with store operations',
        'Comprehensive recycling approach'
      ],
      results: [
        '98% recyclable waste stream achieved',
        'Zero disruption to adjacent units',
        'Project completed on schedule',
        'Professional handover to next contractor'
      ],
      badge: 'Retail',
      badgeColor: 'bg-green-600'
    },
    {
      id: 7,
      title: 'Carphone Warehouse - Complete Strip Out & Demolition',
      client: 'National Retail Chain',
      location: 'Portsmouth',
      duration: '3 days',
      wasteVolume: '15 tonnes',
      image: carphoneImage,
      challenge: 'Complete retail unit strip-out with fixture removal and disposal',
      scope: [
        'Full retail unit strip-out',
        'Display fixture and shelving removal',
        'Electrical systems disconnection',
        'Signage and branding removal'
      ],
      execution: [
        'Systematic dismantling of all retail fixtures',
        'Safe removal of electrical and lighting systems',
        'Careful handling of glass displays and counters',
        'Efficient waste segregation for maximum recycling'
      ],
      results: [
        '3-day completion with zero disruption to adjacent units',
        '92% waste recycling rate achieved',
        'Clean handover ready for next tenant',
        'Client satisfaction leading to additional contracts'
      ],
      badge: 'Retail',
      badgeColor: 'bg-green-600'
    },
    {
      id: 8,
      title: 'Google London - Premium Office Fit-Out Clearance',
      client: 'Google',
      location: 'London',
      duration: '6 days',
      wasteVolume: '52 tonnes',
      image: googleImage,
      challenge: 'High-spec tech office clearance with minimal downtime',
      scope: [
        'Complete office fit-out removal',
        'Advanced IT infrastructure dismantling',
        'Premium furniture and fixtures removal',
        'Data security compliance throughout'
      ],
      execution: [
        'Systematic clearance of multi-floor premium office space',
        'Specialized handling of IT equipment and cabling systems',
        'Careful removal of high-value furniture and fittings',
        'Coordinated logistics to minimize business disruption',
        'Full compliance with data protection protocols'
      ],
      results: [
        '96% waste diverted from landfill through specialist recycling',
        'Zero security incidents or data breaches',
        '6-day completion with precision scheduling',
        'Client satisfaction leading to potential future contracts',
        'Enhanced reputation for handling premium corporate projects'
      ],
      badge: 'Tech Corporate',
      badgeColor: 'bg-yellow-600'
    }
  ]

  const stats = [
    { icon: Building, value: '500+', label: 'Projects Completed' },
    { icon: Recycle, value: '95%+', label: 'Average Recycling Rate' },
    { icon: Clock, value: '24/7', label: 'Emergency Response' },
    { icon: Star, value: '9.93/10', label: 'Checkatrade Rating' }
  ]

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-600 text-white mb-6">
              <Star className="h-3 w-3 mr-1" />
              Proven Track Record
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Case <span className="text-blue-400">Studies</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover how we've successfully delivered complex demolition and waste management 
              projects for major brands and organizations across the UK.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
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

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className="bg-gray-900 border-gray-800 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image */}
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-96 lg:h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={`${study.badgeColor} text-white`}>
                          {study.badge}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                        {study.title}
                      </h2>
                      
                      {/* Project Details */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-blue-400" />
                          <span className="text-gray-400 text-sm">{study.client}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-blue-400" />
                          <span className="text-gray-400 text-sm">{study.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-blue-400" />
                          <span className="text-gray-400 text-sm">{study.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Truck className="h-4 w-4 text-blue-400" />
                          <span className="text-gray-400 text-sm">{study.wasteVolume}</span>
                        </div>
                      </div>
                      
                      {/* Challenge */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-white mb-2">Challenge:</h4>
                        <p className="text-gray-300 text-sm">{study.challenge}</p>
                      </div>
                      
                      {/* Scope */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-white mb-3">Project Scope:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {study.scope.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="h-3 w-3 text-green-400" />
                              <span className="text-gray-300 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Results */}
                      <div className="mb-8">
                        <h4 className="font-semibold text-white mb-3">Results Delivered:</h4>
                        <div className="space-y-2">
                          {study.results.map((result, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <Star className="h-3 w-3 text-yellow-400" />
                              <span className="text-gray-300 text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        <Phone className="h-4 w-4 mr-2" />
                        Discuss Similar Project
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join the ranks of satisfied clients including Debenhams, MOD, and M&S. 
            Get your free consultation and quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              Call 07920 449132
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Request Detailed Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
