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
                About DJ Waste & Demolition: <span className="text-blue-400">Portsmouth's Trusted Waste Management Partner</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                <b>DJ Waste & Demolition is a leading provider of professional waste clearance and demolition services, serving commercial and domestic clients across Portsmouth and Hampshire. Our reputation is built on reliability, efficiency, and an unwavering commitment to sustainable practices.</b>
              </p>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Founded on years of hands-on experience in the waste and construction sectors, DJ Waste & Demolition was established to meet the growing demand for dependable, cost-effective waste solutions. We pride ourselves on a professional, no-nonsense approach, ensuring every project is completed to the highest standards.
              </p>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
				Our core mission is to minimize landfill waste by maximizing recovery, recycling, and repurposing of materials. We transform waste into a valuable resource, delivering both environmental and economic benefits to our clients. With a recycling rate of over 95%, we are dedicated to protecting the environment while providing exceptional service.
              </p>
              
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
              Our <span className="text-blue-400">Commitment to You</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      <b>Professionalism:</b> A highly skilled and certified team dedicated to excellence.
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      <b>Reliability:</b> On-time service and efficient project completion, every time.
                    </li>
                  </ul>
                </div>
                
                <div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      <b>Sustainability:</b> A 95%+ recycling rate to minimize environmental impact.
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      <b>Safety:</b> Fully insured and compliant with all health and safety standards.
                    </li>
                  </ul>
                </div>
              </div>
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
