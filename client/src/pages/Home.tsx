/**
 * DJ Waste & Demolition - Single Page Website
 * 
 * DESIGN PHILOSOPHY: Premium Industrial
 * - Professional, high-conviction aesthetic with structural integrity
 * - Deep charcoal and industrial slate backgrounds
 * - Sharp, precise borders and authoritative typography
 * - Clean blue and aluminum accents
 * - Refined shadows and deliberate negative space
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock,
  Hammer,
  Home as HomeIcon,
  Leaf,
  MapPin,
  Menu,
  Phone,
  Recycle,
  Shield,
  Sofa,
  Star,
  Trash2,
  Truck,
  Users,
  X,
  MessageCircle,
  Facebook,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

// WhatsApp phone number (UK format without +)
const WHATSAPP_NUMBER = "447920449132";
const WHATSAPP_MESSAGE = "Hi DJ Waste! I'm interested in a quote for waste removal/demolition. Can you help?";

// WhatsApp URL helper
const getWhatsAppUrl = () => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
};

// Floating WhatsApp Button Component
function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isVisible ? 1 : 0,
        opacity: isVisible ? 1 : 0
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-[#25D366]/50 transition-shadow"
      aria-label="Chat on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 text-white fill-current"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
    </motion.a>
  );
}

// Smooth scroll helper function
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

// Animation variants - God-Tier Level
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const // Custom bezier for smooth decel
    }
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const
    }
  },
};

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, 'home')}
          className="flex items-center gap-3 group"
        >
          <img
            src="/images/dj-logo.png"
            alt="DJ Waste & Demolition"
            className="w-10 h-10 rounded-sm object-cover border border-industrial-blue/50"
          />
          <div className="hidden sm:block">
            <span className="text-xl font-black tracking-tight text-white group-hover:text-industrial-blue transition-colors uppercase">
              DJ
            </span>
            <span className="text-xl font-light text-white/80 uppercase tracking-tight"> Waste & Demolition</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href.replace('#', ''))}
              className="text-sm font-medium text-white/70 hover:text-white animated-underline transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="tel:07920449132">
            <Button className="bg-[#00b4ff] hover:bg-[#00b4ff]/90 text-white industrial-blue-glow transition-all rounded-sm font-black uppercase tracking-widest text-[10px] press-effect">
              <Phone className="w-3 h-3 mr-2" />
              07920 449 132
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-white"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden glass mt-2 mx-4 rounded-xl p-6"
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  scrollToSection(e, link.href.replace('#', ''));
                  setIsMobileMenuOpen(false);
                }}
                className="text-white/80 hover:text-white py-2 border-b border-white/10"
              >
                {link.label}
              </a>
            ))}
            <a href="tel:07920449132" className="mt-2 text-center text-white/50 text-xs font-black uppercase tracking-widest block py-4 border border-industrial-blue/10 rounded-sm">
              CALL US: 07920 449 132
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="DJ Waste truck and removal work"
          className="w-full h-full object-cover opacity-60 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
      </div>



      <div className="container relative z-10 pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-6 text-center">
            <span className="inline-flex items-center gap-3 px-6 py-2 rounded-sm glass border-industrial-blue/30 text-[10px] font-black tracking-[.3em] text-industrial-blue uppercase">
              <Star className="w-3 h-3 text-industrial-blue" fill="currentColor" />
              10/10 RATING ON CHECKATRADE
            </span>
          </motion.div>

          {/* Main Heading - THE BEAST'S REWRITE */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white mb-6 leading-none tracking-tighter uppercase"
          >
            Since 2017, We've Cleared <br />
            <span className="text-[#00b4ff] neon-text-glow">5,000 Tonnes</span> Across Hampshire
          </motion.h1>

          {/* Subheading - THE BEAST'S REWRITE */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-white/60 mb-12 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            {/* VERIFIED: 2017 founded, Daryl Jennings owner, 240 clients, 5k tonnes, 95% recycling */}
            From garden sheds to 8-storey office demolitions, <strong className="text-white">240+ commercial clients</strong> trust us because we show up on time, quote fairly, and recycle 95% of everything we touch. No hidden fees. No drama. Just thorough, licensed clearance work that actually gets done.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="tel:07920449132"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-[#00b4ff] hover:bg-[#00b4ff]/90 text-white text-lg px-12 py-8 glow-pulse-industrial rounded-sm font-black uppercase tracking-widest relative overflow-hidden shimmer"
              >
                <Phone className="w-5 h-5 mr-3" />
                CALL NOW: 07920 449 132
              </Button>
            </motion.a>
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, 'services')}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 magnetic-hover"
              >
                Our Services
                <ChevronDown className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 flex flex-wrap justify-center gap-12 text-[10px] font-black tracking-[.4em] text-white/40 uppercase"
          >
            <div className="flex items-center gap-4 group">
              <Shield className="w-5 h-5 text-industrial-blue group-hover:scale-110 transition-transform" />
              <span>Fully Licensed</span>
            </div>
            <div className="flex items-center gap-4 group">
              <Recycle className="w-5 h-5 text-industrial-blue group-hover:scale-110 transition-transform" />
              <span>95% Recycled</span>
            </div>
            <div className="flex items-center gap-4 group">
              <Clock className="w-5 h-5 text-industrial-blue group-hover:scale-110 transition-transform" />
              <span>Same Day Service</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#services"
          onClick={(e) => scrollToSection(e, 'services')}
          className="flex flex-col items-center text-white/50 hover:text-white/80 transition-colors"
        >
          <span className="text-xs mb-2">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: HomeIcon,
      title: "House Clearance",
      description:
        "Moving house? Inherited a cluttered property? We've cleared everything from single-room bedsits to 5-bedroom estates. We'll sort, load, and dispose—furniture, electronics, garden waste—while you focus on what matters. And we donate salvageable items to local charities, not the dump.",
    },
    {
      icon: Leaf,
      title: "Garden Clearance",
      description:
        "40-year ivy overgrowth? Fallen oak tree? Decades of shed debris? We've handled worse. From soil to stumps to old paving slabs, we'll restore your outdoor space and recycle 3+ tonnes of green waste properly. Havant and Waterlooville specialists.",
    },
    {
      icon: Hammer,
      title: "Construction Debris",
      description:
        "Site managers love us because we don't slow down builds. Hardcore rubble, timber offcuts, packaging waste—we'll clear your site daily or weekly, whatever keeps your crew moving. Fully licensed for commercial construction waste across Hampshire.",
    },
    {
      icon: Recycle,
      title: "Commercial Waste",
      description:
        "Retail unit strip-out? Office relocation? We've cleared 3 floors of furniture in 6 hours without disrupting ground-floor operations. Portsmouth and Havant businesses choose us because we understand tight deadlines and zero-disruption requirements.",
    },
    {
      icon: Sofa,
      title: "Garage & Shed Clearance",
      description:
        "That garage hasn't been touched in 15 years? Perfect. We specialize in the heavy, awkward stuff—old machinery, paint tins, Mystery Box #47. We'll haul it all, sort what's recyclable, and leave you with a usable space again.",
    },
    {
      icon: Building2,
      title: "Small-Scale Demolition",
      description:
        "Sheds, garages, conservatories, outbuildings—we've demolished hundreds. Fully insured, safety-certified, and we handle the waste removal in the same trip. You get a clear site, not a pile of rubble and a headache.",
    },
    {
      icon: Truck,
      title: "Builders Waste Collection",
      description:
        "Plasterboard mountains, offcut timber, broken bricks—builders generate chaos. We clear it fast. Daily, weekly, or one-off collections across Hampshire. You build, we bin. Simple.",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />


      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="text-industrial-blue text-xs font-black tracking-[.5em] uppercase"
          >
            OUR SERVICES
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-6xl font-black text-white mt-4 mb-6 uppercase tracking-tighter"
          >
            Core Services
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            Comprehensive waste management solutions tailored to your needs. No job
            too big or too small.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="glass-card p-8 h-full group hover:border-[#00b4ff]/50 transition-all duration-500 industrial-shadow border-gradient rounded-sm overflow-hidden tilt-card">
                <div className="w-16 h-16 rounded-sm bg-industrial-slate flex items-center justify-center mb-8 border border-white/5 group-hover:bg-[#00b4ff] group-hover:text-white transition-all duration-500 industrial-blue-glow">
                  <service.icon className="w-8 h-8 text-[#00b4ff] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-[#00b4ff] transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 leading-relaxed font-medium text-sm group-hover:text-white/80 transition-colors">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Featured Case Study Section
function CaseStudySection() {
  const projects = [
    {
      id: "topshop",
      title: "Topshop Portsmouth",
      subtitle: "Retail Transformation",
      description:
        "A high-velocity decommissioning and waste clearance project for a major retail space. We managed the complete extraction of fixtures, fittings, and internal debris while maintaining strict site safety and environmental compliance.",
      logo: "/images/topshop-logo.png",
      stats: [
        { value: "48 Hours", label: "Site Clearance" },
        { value: "100%", label: "Compliant Disposal" },
        { value: "Zero", label: "Incidents" },
      ],
      color: "var(--industrial-blue)",
    },
    {
      id: "debenhams",
      title: "Debenhams",
      subtitle: "Department Store Decommission",
      description:
        "Large-scale strip-out of the iconic department store. This multi-phase project involved the removal of heavy shop fittings, elevators, and non-structural elements across multiple floors, ensuring maximum recycling of metal and glass assets.",
      logo: "/images/debenhams-logo.png",
      stats: [
        { value: "5 Floors", label: "Cleared" },
        { value: "250 Tons", label: "Recycled Material" },
        { value: "1 Week", label: "Completion Time" },
      ],
      color: "#ffffff",
    },
    {
      id: "spinnaker",
      title: "Spinnaker Tower",
      subtitle: "High-Access Clearance",
      description:
        "Specialist waste removal for Portsmouth's most famous landmark. Operating at height and within strict public safety zones, our team executed a precise clearance operation with zero disruption to tourism or operations.",
      logo: "/images/spinnaker-logo.png",
      stats: [
        { value: "170m", label: "Working Height" },
        { value: "Night", label: "Operations Only" },
        { value: "100%", label: "Safety Record" },
      ],
      color: "#d4af37", // Gold-ish for Spinnaker
    },
    {
      id: "carphone",
      title: "Carphone Warehouse",
      subtitle: "Secure Site Decommission",
      description:
        "Nationwide project support for secure site decommissioning. Handling WEEE waste, confidential materials, and shop fittings with a focus on data security and environmental responsibility.",
      logo: "/images/carphone-logo.png",
      stats: [
        { value: "Secure", label: "WEEE Disposal" },
        { value: "Nationwide", label: "Logistics" },
        { value: "Eco", label: "Certified" },
      ],
      color: "#005EB8",
    },
  ];

  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-12 text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="text-industrial-blue text-xs font-black tracking-[.5em] uppercase mb-4"
          >
            Major Contracts
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter"
          >
            OUR <span className="text-industrial-blue">PROJECTS</span>
          </motion.h2>
        </motion.div>

        <div className="glass-card overflow-hidden rounded-3xl border border-white/10">
          <div className="grid lg:grid-cols-12 min-h-[600px]">
            {/* Project Navigation (Left Side) */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 bg-black flex flex-col">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(index)}
                  className={`flex-1 p-6 text-left transition-all duration-300 relative group flex items-center gap-4 ${activeProject === index
                    ? "bg-white/5"
                    : "hover:bg-white/5 opacity-60 hover:opacity-100"
                    }`}
                >
                  {/* Active Indicator Line */}
                  {activeProject === index && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-industrial-blue"
                    />
                  )}

                  {/* Logo Thumbnail (Grayscale unless active) */}
                  <div className={`w-12 h-12 rounded-lg bg-white p-2 flex items-center justify-center transition-all ${activeProject === index ? "grayscale-0" : "grayscale"}`}>
                    <img src={project.logo} alt={project.title} className="max-w-full max-h-full object-contain" />
                  </div>

                  <div>
                    <h3 className={`font-semibold transition-colors ${activeProject === index ? "text-white" : "text-white/80"}`}>
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/40">{project.subtitle}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Project Details (Right Side) */}
            <div className="lg:col-span-8 p-8 lg:p-16 flex flex-col justify-center relative bg-black">
              <div className="relative z-10">
                <motion.div
                  key={activeProject} // Triggers animation on change
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <span className="text-industrial-blue text-xs font-black tracking-[.5em] uppercase mb-4 inline-block">
                    Operational Dossier
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                    {projects[activeProject].title}
                  </h2>
                  <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-2xl">
                    {projects[activeProject].description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                    {projects[activeProject].stats.map((stat, i) => (
                      <div key={i} className="glass p-4 rounded-xl border border-white/5">
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-white/40 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-16 bg-white rounded-lg p-3 inline-flex items-center justify-center">
                      <img
                        src={projects[activeProject].logo}
                        alt={`${projects[activeProject].title} Logo`}
                        className="max-h-full max-w-[150px] object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const stats = [
    { number: "240+", label: "Commercial Clients" },
    { number: "95%", label: "Recycled Materials" },
    { number: "5,000+", label: "Tonnes Cleared" },
    { number: "8", label: "Years Strong" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInUp}
              className="text-industrial-blue text-xs font-black tracking-[.5em] uppercase"
            >
              Company Profile
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-6xl font-black text-white mt-4 mb-6 uppercase tracking-tighter"
            >
              Since 2017 <br />
              <span className="text-industrial-blue">Built on Trust</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-4 text-white/70">
              <p>
                {/* VERIFIED: Daryl Jennings, 2017, 240 clients, 5k tonnes, 95% recycling */}
                Founded in 2017 by Daryl Jennings, DJ Waste & Demolition started with one truck and a straightforward promise: <strong className="text-white">show up on time, quote fairly, and finish the job properly</strong>. Eight years later, we've cleared over 5,000 tonnes of waste across Hampshire—from backyard sheds to full 8-storey office demolitions.
              </p>
              <p>
                Over <strong className="text-white">240 commercial clients</strong> in Portsmouth, Havant, and Waterlooville trust us because we don't just dump and run. <strong className="text-white">95% of everything we collect gets recycled</strong> at certified Hampshire facilities. Your old kitchen becomes tomorrow's building materials, not landfill waste.
              </p>
              <p>
                We're fully licensed, fully insured, and fully committed to making waste removal the least stressful part of your project. Whether it's a single room clearance or a multi-site commercial operation, you get the same standard: <strong className="text-white">thorough, on-time, no surprises</strong>.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
              >
                <Button
                  size="lg"
                  className="bg-industrial-blue hover:bg-industrial-blue/90 text-white industrial-blue-glow rounded-sm font-black uppercase tracking-widest"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  INITIATE QUOTE
                </Button>
              </a>
              <a
                href="https://www.checkatrade.com/trades/djwasteanddemolition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-industrial-blue/30 text-industrial-blue hover:bg-industrial-blue/10 rounded-sm font-black uppercase tracking-widest"
                >
                  <CheckCircle2 className="w-5 h-5 mr-3" />
                  VERIFY ON CHECKATRADE
                </Button>
              </a>
              <a
                href="https://www.facebook.com/djwasterecycling/?locale=en_GB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white shadow-lg shadow-[#1877F2]/20 rounded-sm font-black uppercase tracking-widest"
                >
                  <Facebook className="w-5 h-5 mr-3" />
                  NETWORK
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="glass-card p-6 text-center rounded-2xl"
              >
                <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Gallery Section with Checkatrade Integration
function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showCheckatradeModal, setShowCheckatradeModal] = useState(false);

  const galleryImages = [
    { src: "/images/topshop-logo.png", label: "Topshop Portsmouth", type: "service" },
    { src: "/images/gallery/148075293_1162608387492548_2891976859689708415_n.jpg", label: "Garden Transformation", type: "after" },
    { src: "/images/gallery/473338953_1131254029009384_5532019410086068994_n.jpg", label: "Site Preparation", type: "before" },
    { src: "/images/gallery/480344968_1160999856034801_7524758937976194150_n.jpg", label: "Waste Removal", type: "before" },
    { src: "/images/gallery/148577536_1162608327492554_2782603627632176164_n.jpg", label: "Household Clearance", type: "before" },
    { src: "/images/gallery/148889590_1162608380825882_4745991617776907012_n.jpg", label: "Site Cleanup", type: "after" },
    { src: "/images/gallery/495643918_1236059861862133_7071662986411951999_n.jpg", label: "Demolition Project", type: "before" },
    { src: "/images/gallery/502478291_1253438206790965_2231619100987845671_n.jpg", label: "Full Clearance", type: "after" },
    { src: "/images/gallery/502619154_1255829029885216_5667402165873779_n.jpg", label: "Garden Waste Removal", type: "before" },
    { src: "/images/gallery/518306280_10165569940943012_1494778880854360394_n.jpg", label: "Local Clearance", type: "after" },
    { src: "/images/gallery/515499176_10165569940803012_5193318360934744678_n.jpg", label: "Rubbish Removal", type: "before" },
    { src: "/images/gallery/480644778_1160999959368124_6756520773464248985_n.jpg", label: "Complete Job", type: "after" },
  ];

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
        setShowCheckatradeModal(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-black">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="text-industrial-blue text-xs font-black tracking-[.5em] uppercase"
          >
            Job Gallery
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-6xl font-black text-white mt-4 mb-6 uppercase tracking-tighter"
          >
            Our Work
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            See the quality and professionalism we bring to every project. Real
            results from real jobs on Checkatrade.
          </motion.p>

          {/* Checkatrade Badge */}
          <motion.div variants={fadeInUp} className="mt-6 flex items-center justify-center gap-3">
            <div className="flex items-center gap-3 px-6 py-2 glass rounded-sm border border-industrial-blue/20">
              <CheckCircle2 className="w-5 h-5 text-industrial-blue" />
              <span className="text-white/80 text-[10px] uppercase font-black tracking-widest">VERIFIED REVIEWS FROM CHECKATRADE</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              onClick={() => setSelectedImage(index)}
              className="relative group overflow-hidden rounded-sm aspect-square cursor-pointer zoom-on-hover border border-white/10 hover:border-[#00b4ff] transition-colors industrial-blue-glow"
            >
              <img
                src={image.src}
                alt={image.label}
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Type Badge */}
              <div className="absolute top-3 left-3">
                <span className={`px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-sm ${image.type === "before" ? "bg-red-600/80 text-white" :
                  image.type === "after" ? "bg-industrial-blue/80 text-white" :
                    "bg-white/20 text-white"
                  }`}>
                  {image.type === "before" ? "BEFORE" : image.type === "after" ? "AFTER" : "SERVICE"}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white font-medium">{image.label}</span>
              </div>

              {/* Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More on Checkatrade Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.checkatrade.com/trades/djwasteanddemolition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-industrial-blue hover:bg-industrial-blue/90 text-white font-black uppercase tracking-widest rounded-sm industrial-blue-glow"
              >
                <CheckCircle2 className="w-5 h-5 mr-3" />
                VIEW OUR WORK
              </Button>
            </a>
            <button
              onClick={() => setShowCheckatradeModal(true)}
              className="text-white/60 hover:text-white underline underline-offset-4 transition-colors"
            >
              Or preview Checkatrade profile here
            </button>
          </div>
          <p className="mt-4 text-white/40 text-sm">
            Our gallery updates automatically as we add new projects to Checkatrade
          </p>
        </motion.div>
      </div>

      {/* Image Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/60 hover:text-white p-2"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1);
            }}
            className="absolute left-4 sm:left-8 text-white/60 hover:text-white p-2 bg-white/10 rounded-full"
          >
            <ChevronDown className="w-8 h-8 rotate-90" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0);
            }}
            className="absolute right-4 sm:right-8 text-white/60 hover:text-white p-2 bg-white/10 rounded-full"
          >
            <ChevronDown className="w-8 h-8 -rotate-90" />
          </button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[80vh] relative"
          >
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].label}
              className="max-w-full max-h-[80vh] object-contain rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent rounded-b-xl">
              <div className="flex items-center justify-between">
                <div>
                  <span className={`px-2 py-1 text-[10px] font-black uppercase tracking-widest rounded-sm mr-2 ${galleryImages[selectedImage].type === "before" ? "bg-red-600/80 text-white" :
                    galleryImages[selectedImage].type === "after" ? "bg-industrial-blue/80 text-white" :
                      "bg-white/20 text-white"
                    }`}>
                    {galleryImages[selectedImage].type === "before" ? "Before" :
                      galleryImages[selectedImage].type === "after" ? "After" : "Service"}
                  </span>
                  <span className="text-white font-medium">{galleryImages[selectedImage].label}</span>
                </div>
                <span className="text-white/60 text-sm">{selectedImage + 1} / {galleryImages.length}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Checkatrade Profile Modal */}
      {showCheckatradeModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowCheckatradeModal(false)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl h-[85vh] bg-white rounded-2xl overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 right-0 h-14 bg-black flex items-center justify-between px-6 z-10 border-b border-industrial-blue/20">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-industrial-blue" />
                <div className="flex flex-col">
                  <span className="text-white font-black uppercase tracking-widest text-[9px] leading-none mb-1">DATA VERIFICATION</span>
                  <a
                    href="https://www.checkatrade.com/trades/djwasteanddemolition"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-industrial-blue hover:text-industrial-blue/80 text-[10px] font-bold uppercase tracking-widest underline leading-none"
                  >
                    EXTERNAL LINK
                  </a>
                </div>
              </div>
              <button
                onClick={() => setShowCheckatradeModal(false)}
                className="text-white/40 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <iframe
              src="https://www.checkatrade.com/trades/djwasteanddemolition"
              className="w-full h-full pt-14"
              title="DJ Waste & Demolition Checkatrade Profile"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

// Checkatrade Section
function CheckatradeSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="text-industrial-blue text-xs font-black tracking-[.5em] uppercase"
          >
            Verified & Trusted
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-12"
          >
            Verified on Checkatrade
          </motion.h2>

          <motion.div
            variants={scaleIn}
            className="inline-block glass-card p-8 sm:p-12 rounded-sm border-gradient"
          >
            <div className="text-6xl sm:text-8xl font-black text-industrial-blue mb-4 uppercase tracking-tighter">
              10<span className="text-3xl sm:text-4xl text-white/40">/10</span>
            </div>
            <p className="text-white/40 text-xs font-black uppercase tracking-[.4em] mb-12">
              PERFECT RATING
            </p>

            {/* Rating Breakdown */}
            <div className="grid grid-cols-3 gap-8 mb-12 text-center">
              <div>
                <div className="text-2xl font-black text-industrial-blue mb-1">9.88</div>
                <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Quality</div>
              </div>
              <div>
                <div className="text-2xl font-black text-industrial-blue mb-1">9.88</div>
                <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Reliability</div>
              </div>
              <div>
                <div className="text-2xl font-black text-industrial-blue mb-1">9.94</div>
                <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Communication</div>
              </div>
            </div>

            {/* Checkatrade Button - Using the provided code structure */}
            <a
              href="https://www.checkatrade.com/trades/djwasteanddemolition"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-industrial-blue hover:bg-industrial-blue/90 text-white font-black uppercase tracking-widest rounded-sm industrial-blue-glow"
              >
                <CheckCircle2 className="w-5 h-5 mr-3" />
                VERIFY REVIEWS
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      text: "Absolutely fantastic service! Showed up the next day and cleared all the rubbish very quickly. Reasonably priced and very nice chaps.",
      author: "Verified Customer",
      location: "PO5",
      rating: 5,
    },
    {
      text: "They contacted me straight away when I posted the job on Checkatrade. Had a phone call to arrange a quote, happy with the price and job done the next morning. Very prompt and reliable, very helpful and friendly. Would definitely use them again and recommend them.",
      author: "Verified Customer",
      location: "Hampshire",
      rating: 5,
    },
    {
      text: "The guys were upfront and honest about costs and worked very quickly. When the job couldn't be completed in the initial timeframe they came back to finish sooner than they initially thought they could. It was spotless when they had finished! They were professional and down to earth. Would highly recommend.",
      author: "Verified Customer",
      location: "Hampshire",
      rating: 5,
    },
    {
      text: "Great service today, turned up on time, no fuss, got on with the house clearance while treating my mum's house with respect. Was the cheapest quote we had, so pleased we found CD waste & recycling on here.",
      author: "Verified Customer",
      location: "Hampshire",
      rating: 5,
    },
    {
      text: "Very impressed with these guys. Had two separate visits from them and both times they were punctual, quick to clear the rubbish and fairly priced. Cheerful Chappies! I have no hesitation in recommending their services to anybody looking for a waste removal team.",
      author: "Ken B",
      location: "PO14",
      rating: 5,
    },
    {
      text: "These guys are top notch, obviously keen to do the job, Dave rang us up when the ad was placed, nobody else showed that much interest, came next morning, price agreed on the spot, all cleared and gone within 45 minutes. Clean as a whistle.",
      author: "Ken B",
      location: "PO14",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-black">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="text-industrial-blue text-xs font-black tracking-[.5em] uppercase"
          >
            Testimonials
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-6xl font-black text-white mt-4 mb-6 uppercase tracking-tighter"
          >
            Verified Reviews
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            Real reviews from real customers on Checkatrade
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={scaleIn}>
              <Card className="glass-card p-6 h-full relative">
                {/* Quote Mark */}
                <div className="absolute -top-2 -left-2 text-8xl text-industrial-blue/10 font-serif leading-none">
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#FFB800]"
                      fill="#FFB800"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-white/80 mb-6 leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-industrial-slate flex items-center justify-center border border-white/10">
                    <Users className="w-5 h-5 text-industrial-blue" />
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      {testimonial.author}
                    </div>
                    <div className="text-white/50 text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Contact/CTA Section
function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="text-industrial-blue text-xs font-black tracking-[.5em] uppercase"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-6xl font-black text-white mt-4 mb-6 uppercase tracking-tighter"
          >
            Ready to <span className="text-industrial-blue">Start?</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/60 text-lg mb-10 max-w-2xl mx-auto"
          >
            Get a free, no-obligation quote today. We offer competitive pricing,
            same-day service, and OAP discounts. Call us now or request a quote
            through Checkatrade.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap mb-12"
          >
            <motion.a
              href="tel:07920449132"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-[#00b4ff] hover:bg-[#00b4ff]/90 text-white text-lg px-8 py-7 glow-pulse-industrial rounded-sm font-black uppercase tracking-widest shimmer"
              >
                <Phone className="w-6 h-6 mr-3" />
                CALL NOW
              </Button>
            </motion.a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#25D366]/90 text-white text-lg px-8 py-7 rounded-sm font-black uppercase tracking-widest shadow-lg shadow-[#25D366]/20"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 mr-3 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WHATSAPP
              </Button>
            </a>
            <a
              href="https://www.checkatrade.com/trades/djwasteanddemolition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-industrial-blue/30 text-industrial-blue hover:bg-industrial-blue/10 text-lg px-8 py-7 rounded-sm font-black uppercase tracking-widest"
              >
                <CheckCircle2 className="w-6 h-6 mr-3" />
                CHECKATRADE
              </Button>
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={fadeInUp}
            className="grid sm:grid-cols-3 gap-6"
          >
            <div className="glass-card p-6 rounded-sm border border-industrial-blue/10">
              <MapPin className="w-8 h-8 text-industrial-blue mx-auto mb-3" />
              <h3 className="text-white font-black uppercase tracking-widest text-xs mb-1">Service Area</h3>
              <p className="text-white/40 text-sm">Havant & Portsmouth</p>
            </div>
            <div className="glass-card p-6 rounded-sm border border-industrial-blue/10">
              <Phone className="w-8 h-8 text-industrial-blue mx-auto mb-3" />
              <h3 className="text-white font-black uppercase tracking-widest text-xs mb-1">Direct Line</h3>
              <a href="tel:07920449132" className="text-white/40 hover:text-industrial-blue text-sm">
                07920 449 132
              </a>
            </div>
            <div className="glass-card p-6 rounded-sm border border-industrial-blue/10">
              <Clock className="w-8 h-8 text-industrial-blue mx-auto mb-3" />
              <h3 className="text-white font-black uppercase tracking-widest text-xs mb-1">Availability</h3>
              <p className="text-white/40 text-sm">24/7 Availability</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className="flex items-center gap-3 mb-4"
            >
              <img
                src="/images/dj-logo.png"
                alt="DJ Waste & Demolition"
                className="w-10 h-10 rounded-sm object-cover border border-industrial-blue/30"
              />
              <div>
                <span className="text-xl font-bold text-white">DJ</span>
                <span className="text-xl font-light text-white/80">
                  {" "}
                  Waste & Demolition
                </span>
              </div>
            </a>
            <p className="text-white/60 max-w-md">
              Family-run waste management business with over 10 years of
              experience. Serving Havant, Hampshire and surrounding areas.
              Fully licensed and insured.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, 'services')}
                className="text-white/60 hover:text-white"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, 'about')}
                className="text-white/60 hover:text-white"
              >
                About Us
              </a>
              <a
                href="#gallery"
                onClick={(e) => scrollToSection(e, 'gallery')}
                className="text-white/60 hover:text-white"
              >
                Gallery
              </a>
              <a
                href="#testimonials"
                onClick={(e) => scrollToSection(e, 'testimonials')}
                className="text-white/60 hover:text-white"
              >
                Reviews
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-white/60">
              <a href="tel:07920449132" className="hover:text-white flex items-center gap-2">
                <Phone className="w-4 h-4" />
                07920 449 132
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366] flex items-center gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Havant, Hampshire
              </span>
              <a
                href="https://www.checkatrade.com/trades/djwasteanddemolition"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-industrial-blue flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                Checkatrade Profile
              </a>
              <a
                href="https://www.facebook.com/djwasterecycling/?locale=en_GB"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1877F2] flex items-center gap-2"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-white/40 text-[10px] font-mono uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} DJ Waste & Demolition. All rights reserved.
            </p>
            <p className="text-industrial-blue/40 text-[9px] font-black uppercase tracking-widest">
              DEVELOPED BY JONNYAI // SYSTEM_STABLE
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-2">
            <span className="text-industrial-blue/60 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Neural Build Registry</span>
            <div className="flex gap-4 text-[9px] font-bold text-white/30 uppercase tracking-tighter">
              <span className="hover:text-industrial-blue transition-colors">@Conductor</span>
              <span className="hover:text-industrial-blue transition-colors">@JonnyAI</span>
              <span className="hover:text-industrial-blue transition-colors">@Pixel</span>
              <span className="hover:text-industrial-blue transition-colors">@Sentinel</span>
              <span className="hover:text-industrial-blue transition-colors">@Watcher</span>
            </div>
            <div className="text-[10px] font-black text-white/20 tracking-widest mt-1">
              BUILT BY <span className="text-white/40">JONNYAI</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-white/40 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
              <Shield className="w-3 h-3 text-industrial-blue" />
              Fully Licensed
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Home Page Component
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <CaseStudySection />
      <AboutSection />
      <GallerySection />
      <CheckatradeSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
