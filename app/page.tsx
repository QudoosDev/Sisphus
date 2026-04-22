'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { 
  Zap, 
  ArrowRight, 
  ArrowUpRight,
  ChevronLeft, 
  ChevronRight, 
  Star,
  Monitor,
  Layout,
  Box,
  PenTool,
  Palette,
  Printer,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Logo = ({ className = "", iconOnly = false, light = false }: { className?: string; iconOnly?: boolean; light?: boolean }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative shrink-0">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10">
        {/* Double Linked Rings with diagonal line - Always brand blue */}
        <circle cx="18" cy="24" r="8" stroke="#2563EB" strokeWidth="5" />
        <circle cx="30" cy="24" r="8" stroke="#2563EB" strokeWidth="5" />
        <line x1="12" y1="36" x2="36" y2="12" stroke="#2563EB" strokeWidth="5" strokeLinecap="round" />
      </svg>
    </div>
    {!iconOnly && (
      <span className={`text-xl font-heading font-bold tracking-tight ${light ? 'text-white' : 'text-text-dark'}`}>
        Sisyphus
      </span>
    )}
  </div>
);

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 px-6 md:px-10 py-4 flex items-center justify-between">
      <Logo className="cursor-pointer" />
      
      <div className="hidden md:flex items-center gap-8">
        {['About Us', 'Our Work', 'Our Team'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="text-text-muted font-medium text-sm hover:text-brand cursor-pointer transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
      
      <button className="bg-brand text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:brightness-110 cursor-pointer">
        Get Started
      </button>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center pt-4 pb-0 px-6 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full mb-4 border border-gray-200"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-5 h-5 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                <Image 
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  alt="Avatar" 
                  width={20} 
                  height={20}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <span className="text-[10px] font-semibold text-text-muted">50k+ Satisfied Customer</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-[64px] font-heading font-bold text-text-dark leading-[1.05] tracking-[-0.02em] mb-3"
        >
          Life Feels Empty Without <br />
          <span className="text-brand">Beautiful Design</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-text-muted max-w-md mb-6 text-sm leading-relaxed"
        >
          We create and design applications, websites, or other digital products with professionalism
        </motion.p>
        
        <div className="relative w-full flex justify-center mb-[-12rem] z-0">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-5xl transition-all duration-700"
          >
            <Image
              src="/hero%20section.png" 
              alt="Professional Team" 
              width={1600} 
              height={900} 
              className="object-contain w-full h-auto"
              referrerPolicy="no-referrer"
              priority
            />
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-[#1E1E2E] w-full max-w-4xl px-4 py-4 md:px-6 md:py-6 rounded-[32px] grid grid-cols-1 md:grid-cols-4 gap-4 relative z-20 shadow-2xl"
        >
          {/* Card 1: Blue highlighted */}
          <div className="bg-brand rounded-[24px] p-6 text-left text-white relative flex flex-col justify-between overflow-hidden group cursor-pointer">
            <div className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center text-text-dark transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight size={18} />
            </div>
            <div className="mt-2">
              <div className="text-3xl font-heading font-bold mb-1">50K+</div>
              <div className="text-[10px] font-medium opacity-80 mb-2">Satisfied clients</div>
              <p className="text-[9px] leading-tight opacity-90 max-w-[120px]">
                Our awesome clients are industry experts around the world
              </p>
            </div>
          </div>

          {/* Card 2: White */}
          <div className="bg-white rounded-[24px] p-6 flex flex-col items-center justify-center text-text-dark">
            <div className="text-3xl font-heading font-bold mb-1">13+</div>
            <div className="text-[10px] font-semibold text-text-muted">Years Experience</div>
          </div>

          {/* Card 3: White */}
          <div className="bg-white rounded-[24px] p-6 flex flex-col items-center justify-center text-text-dark">
            <div className="text-3xl font-heading font-bold mb-1">20</div>
            <div className="text-[10px] font-semibold text-text-muted">Professional Designer</div>
          </div>

          {/* Card 4: White */}
          <div className="bg-white rounded-[24px] p-6 flex flex-col items-center justify-center text-text-dark">
            <div className="text-3xl font-heading font-bold mb-1">10K</div>
            <div className="text-[10px] font-semibold text-text-muted">Digital Product</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServingSection = () => {
  const offices = [
    {
      image: "/We%20are%20serving%20section%20image%201.png",
      title: "Sisyphus Office",
      location: "Bournemouth, Poole – UK",
      alt: "Sisyphus Office space"
    },
    {
      image: "/we%20are%20serving%20section%20image%202.png",
      title: "Main Hub",
      location: "London, City Center – UK",
      alt: "Conference and meeting room"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-10 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <h2 className="text-4xl md:text-[48px] font-heading font-bold leading-[1.1] tracking-tight text-text-dark">
            We are Serving <br />
            in <span className="text-brand">Various Countries</span>
          </h2>
          <div className="flex justify-end">
            <p className="text-text-muted text-[13px] leading-relaxed max-w-sm">
              Expand the reach of your digital market by using the right and right way. 
              It will make your traffic go up and profit for your business.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {offices.map((office, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-[40px] border border-gray-100 group cursor-pointer">
              <Image 
                src={office.image} 
                alt={office.alt} 
                width={1200} 
                height={800} 
                className="object-cover h-[480px] w-full transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Arrow Button - Appear on Hover */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-full flex items-center justify-center text-text-dark transition-all duration-300 opacity-0 translate-x-4 -translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 shadow-lg">
                <ArrowUpRight size={28} />
              </div>

              {/* Info Label - Appear on Hover */}
              <div className="absolute left-8 bottom-8 transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                <div className="bg-white px-8 py-5 rounded-[24px] border border-gray-50/50 min-w-[240px] shadow-xl">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-2 h-2 rounded-full bg-brand" />
                    <span className="text-sm font-bold text-text-dark">{office.title}</span>
                  </div>
                  <span className="text-[11px] font-medium text-text-muted ml-5 italic">{office.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  
  const services = [
    { 
      title: "UI/UX Design", 
      desc: "Product that have a good appearance can attract users", 
      icon: <Monitor size={24} />, 
      iconColor: "bg-red-50 text-red-400"
    },
    { 
      title: "Logo branding", 
      desc: "Product identity is needed to have a characteristic", 
      icon: <Layout size={24} />, 
      iconColor: "bg-blue-50 text-brand"
    },
    { 
      title: "3D Design", 
      desc: "3D design is something new and has a high chance", 
      icon: <Box size={24} />, 
      iconColor: "bg-emerald-50 text-emerald-400"
    },
    { 
      title: "Illustration", 
      desc: "Make your product more eye-catching with a touch of illustration", 
      icon: <PenTool size={24} />, 
      iconColor: "bg-indigo-50 text-indigo-400"
    },
    { 
      title: "Digital Painting", 
      desc: "In this era, digital painting is still very popular with young people", 
      icon: <Palette size={24} />, 
      iconColor: "bg-amber-50 text-amber-400"
    },
    { 
      title: "Print Design", 
      desc: "It is undeniable that businesses must still have print designs", 
      icon: <Printer size={24} />, 
      iconColor: "bg-gray-100 text-gray-500"
    },
  ];

  return (
    <section className="py-24 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <button className="bg-brand text-white px-8 py-3 rounded-xl text-sm font-bold self-start cursor-pointer transition-all hover:brightness-110">
            Our Portfolio
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <div 
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`p-10 rounded-[48px] flex flex-col gap-8 cursor-pointer group transition-all duration-300 ${isHovered ? 'bg-brand text-white shadow-xl -translate-y-1' : 'bg-white text-text-dark border border-gray-100'}`}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-300 ${isHovered ? 'bg-white/20 text-white' : service.iconColor}`}>
                  {service.icon}
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold leading-tight">{service.title}</h3>
                  <p className={`text-[13px] leading-relaxed max-w-[240px] transition-colors duration-300 ${isHovered ? 'text-blue-50' : 'text-text-muted'}`}>
                    {service.desc}
                  </p>
                  <a href="#" className={`text-[13px] font-bold flex items-center gap-2 mt-2 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-text-dark'} group-hover:text-blue-600`}>
                    Learn more <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "AR 3D Design Concept",
      desc: "AR creation with 3D design to solve problems with.",
      image: "/project%204.png",
      alt: "AR 3D Design Concept"
    },
    {
      title: "Minimalist Web App",
      desc: "Clean and functional web interface for modern users.",
      image: "/project%202.png",
      alt: "Minimalist Web App"
    },
    {
      title: "Brand Identity",
      desc: "Comprehensive branding for a tech startup.",
      image: "/project%203.png",
      alt: "Brand Identity"
    },
    {
      title: "Mobile Experience",
      desc: "Intuitive mobile application design for global reach.",
      image: "/project%204.png",
      alt: "Mobile Experience"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="text-4xl md:text-[48px] font-heading font-bold leading-[1.1] tracking-tight text-text-dark">
            Projects We <br />
            have <span className="text-brand">Completed</span>
          </h2>
          <div className="flex gap-4">
            <button className="bg-gray-50 text-text-dark px-8 py-3 rounded-xl text-sm font-bold transition-all hover:bg-gray-100 cursor-pointer">
              Start New Project
            </button>
            <button className="bg-brand text-white px-8 py-3 rounded-xl text-sm font-bold transition-all hover:brightness-110 cursor-pointer">
              View All Work
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-[40px] border border-gray-100 group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
              <Image 
                src={project.image} 
                alt={project.alt} 
                width={1000} 
                height={1400}
                className="object-cover h-[520px] w-full transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Arrow Button - Appear on Hover */}
              <div className="absolute top-6 right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center text-text-dark transition-all duration-300 opacity-0 translate-x-4 -translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 shadow-lg z-10">
                <ArrowUpRight size={24} />
              </div>

              {/* Tag / Info - Appear on Hover */}
              <div className="absolute left-6 bottom-6 right-6 transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 z-10">
                <div className="bg-white p-6 rounded-[32px] shadow-2xl border border-gray-50">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                    <span className="text-sm font-bold text-text-dark">{project.title}</span>
                  </div>
                  <p className="text-[10px] text-text-muted leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Job ghazzi",
      role: "Co Founder OG Agency",
      quote: "The material is really updated, so I don't think I need to go to college because here is enough.",
      avatar: "https://picsum.photos/seed/t1/100/100",
      highlight: false
    },
    {
      name: "James son",
      role: "Senior Entrepreneur",
      quote: "Very different from conventional agency, this one is easier, more fast to learn and easy to remember.",
      avatar: "https://picsum.photos/seed/t2/100/100",
      highlight: true
    },
    {
      name: "James son",
      role: "Senior Entrepreneur",
      quote: "Again with this it's not comfortable just learning via zoom at school.",
      avatar: "https://picsum.photos/seed/t3/100/100",
      highlight: false
    }
  ];

  return (
    <section className="py-24 px-6 md:px-10 mb-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-4xl md:text-[48px] font-heading font-bold leading-[1.1] tracking-tight text-text-dark">
            What Our <br />
            <span className="text-brand">Satisfied</span> Client Say
          </h2>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-text-muted hover:bg-gray-100 cursor-pointer transition-all">
              <ChevronLeft size={20} />
            </button>
            <button className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white hover:brightness-110 cursor-pointer transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className={`p-12 rounded-[48px] flex flex-col gap-8 cursor-pointer group transition-colors ${t.highlight ? 'bg-brand text-white' : 'bg-gray-50/50 text-text-dark hover:bg-gray-100'}`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image src={t.avatar} alt={t.name} width={48} height={48} className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">{t.name}</h4>
                  <span className={`text-[11px] block mt-0.5 ${t.highlight ? 'text-blue-100' : 'text-text-muted'}`}>{t.role}</span>
                </div>
              </div>
              
              <p className={`text-[13px] leading-relaxed font-medium ${t.highlight ? 'text-blue-50' : 'text-text-muted'}`}>
                {t.quote}
              </p>

              <a href="#" className={`text-[13px] font-bold flex items-center gap-2 mt-auto transition-colors ${t.highlight ? 'text-white' : 'text-text-dark'} group-hover:text-blue-600`}>
                Learn more <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 px-6 md:px-10 bg-[#1E1E2E] text-white rounded-t-[60px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Pre-footer CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 pb-20 border-b border-white/10 mb-20">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Ready to bring your <br />
              <span className="text-brand">ideas to life?</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              We create and design applications, websites, or other digital products with professionalism and passion.
            </p>
          </div>
          <button className="bg-brand text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all hover:brightness-110 cursor-pointer">
            Start a Project
          </button>
        </div>

        {/* Local Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2">
            <Logo className="mb-8 cursor-pointer" light />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
              A professional design agency creating digital products with professionalism and creativity since 2012.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand hover:text-white transition-all cursor-pointer">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-lg">Services</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand transition-colors cursor-pointer">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-brand transition-colors cursor-pointer">3D Industrial</a></li>
              <li><a href="#" className="hover:text-brand transition-colors cursor-pointer">Logo Branding</a></li>
              <li><a href="#" className="hover:text-brand transition-colors cursor-pointer">Illustration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-lg">Company</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand transition-colors cursor-pointer">About Us</a></li>
              <li><a href="#" className="hover:text-brand transition-colors cursor-pointer">Our Team</a></li>
              <li><a href="#" className="hover:text-brand transition-colors cursor-pointer">Our Work</a></li>
              <li><a href="#" className="hover:text-brand transition-colors cursor-pointer">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-lg">Contact Us</h4>
            <ul className="flex flex-col gap-6 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-brand shrink-0" />
                <span>hello@sisyphus.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-brand shrink-0" />
                <span>+44 20 7946 0123</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand shrink-0" />
                <span>Bournemouth, Poole, UK</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-gray-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Sisyphus Design Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ServingSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
