import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Users, 
  Award, 
  Shield, 
  Target,
  CheckCircle,
  Phone
} from 'lucide-react'
import teamImage from '../assets/checkatrade_image_8.webp'

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'All team members are DBS-cleared with comprehensive health & safety training.'
    },
    {
      icon: Target,
      title: 'Professional Excellence',
      description: '15+ years of experience delivering projects on time and within budget.'
    },
    {
      icon: Award,
      title: 'Environmental Responsibility',
      description: '95%+ recycling rate, minimizing landfill waste across all projects.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Dedicated to exceeding expectations with personalized service.'
    }
  ]

  const credentials = [
    'Licensed Waste Carrier',
    '£2M Public Liability Insurance',
    'DBS-Cleared Team',
    'Checkatrade Verified',
    'Environmental Permits',
    'Health & Safety Certified'
  ]

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-600 text-white mb-6">
                <Award className="h-3 w-3 mr-1" />
                Established 2017
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-blue-400">DJ Waste & Demolition</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                DJ Waste & Recycling is a small established business, set up by two lifelong friends 
                from Portsmouth, Jon Allum and Daryl Jennings. Together, they have substantial 
                experience in the industry.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <p className="text-gray-300">
                      <strong>Jon</strong> has spent a great deal of his career in London, undertaking 
                      office clearances for some of the largest business establishments in the country.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                  <div>
                    <p className="text-gray-300">
                      <strong>Daryl</strong> had a small building company and was spending a fortune on skip hire. 
                      He realized there was a gap in the market and got experience working for a local waste firm.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="h-4 w-4 mr-2" />
                Get in Touch
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={teamImage} 
                alt="DJ Waste & Demolition Team" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-blue-400">Mission</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed">
                Our principle objective is to minimise the amount of waste that goes to landfill 
                and to transform it into a resource that provides value to our customers. We operate 
                recycling facilities for aggregates, wood, plastic and green waste, ensuring 
                environmental responsibility in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-blue-400">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These core principles guide every project we undertake and every relationship we build.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:border-blue-400 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <value.icon className="h-10 w-10 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Fully <span className="text-blue-400">Licensed & Certified</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We maintain all necessary licenses, certifications, and insurance to ensure 
              complete peace of mind for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((credential, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gray-800 rounded-lg p-4">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-white font-medium">{credential}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Philosophy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              "No job too big, no timeline too tight"
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              This philosophy drives everything we do. Whether it's a major commercial demolition 
              or emergency waste clearance, we deliver professional results when you need them most.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              Call 07920 449132
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

