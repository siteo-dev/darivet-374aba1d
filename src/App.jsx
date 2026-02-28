import { useState, useEffect, useRef } from 'react';
import { Menu, X, Shield, Award, Users, Clock, Star, Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Marquee } from '@/components/magicui/marquee';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BorderBeam } from '@/components/magicui/border-beam';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { ShineBorder } from '@/components/magicui/shine-border';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { ProgressiveBlur } from '@/components/magicui/progressive-blur';
import { cn } from '@/lib/utils';
import DemoBanner from './DemoBanner';
import LightRays from './LightRays';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const observerRef = useRef([]);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const stats = [
    { value: 350, suffix: '+', label: 'Happy Pets Served' },
    { value: 10, suffix: '+', label: 'Years of Expertise' },
    { value: 98, suffix: '%', label: 'Client Satisfaction Rate' },
    { value: 24, suffix: '/7', label: 'Emergency Support' }
  ];

  const aboutItems = [
    {
      title: "Expert Veterinary Care",
      description: "Licensed professionals with 10+ years experience"
    },
    {
      title: "Modern Facilities",
      description: "State-of-the-art clinic with advanced equipment"
    },
    {
      title: "Personalized Attention",
      description: "Tailored care plans for each pet's unique needs"
    },
    {
      title: "Trusted Community",
      description: "Serving families across Ilfov since 2019"
    }
  ];

  const services = [
    {
      name: "Deworming Treatment",
      description: "Complete parasite elimination with safe medications",
      price: "400 RON",
      icon: Shield
    },
    {
      name: "Vaccination Programs",
      description: "Preventive care for all core vaccines",
      price: "250-800 RON",
      icon: Award
    },
    {
      name: "Health Checkups",
      description: "Comprehensive physical examinations and consultations",
      price: "300-600 RON",
      icon: Users
    },
    {
      name: "Emergency Care",
      description: "24/7 urgent medical attention when needed",
      price: "Starting at 500 RON",
      icon: Clock
    }
  ];

  const whyUsFeatures = [
    {
      number: "01",
      title: "Expertise",
      description: "Our licensed veterinarians bring over a decade of specialized experience in pet health and wellness"
    },
    {
      number: "02",
      title: "Quality",
      description: "We maintain the highest standards with modern equipment and evidence-based treatment protocols"
    },
    {
      number: "03",
      title: "Personalized Care",
      description: "Every pet receives individualized attention based on their specific health needs and conditions"
    },
    {
      number: "04",
      title: "Availability",
      description: "24/7 emergency services and flexible appointment scheduling for your convenience"
    }
  ];

  const reviews = [
    {
      name: "Maria S.",
      text: "The deworming treatment was quick and my dog seemed comfortable throughout the process. Highly recommend!",
      avatar: "/assets/people/boy_1.jpg",
      rating: 5
    },
    {
      name: "Ionut M.",
      text: "Best veterinary care in Ilfov. The staff is professional and caring, especially during our pet's emergency visit",
      avatar: "/assets/people/girl_1.jpg",
      rating: 5
    },
    {
      name: "Andreea T.",
      text: "Our cat's vaccination schedule is now so much easier with their convenient appointment system and gentle approach",
      avatar: "/assets/people/boy_1.jpg",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "How often should I deworm my pet?",
      answer: "We recommend deworming every 3 months for puppies and kittens, and every 6 months for adults."
    },
    {
      question: "Do you offer emergency services?",
      answer: "Yes, our clinic provides 24/7 emergency care for urgent pet health issues."
    },
    {
      question: "What should I bring to my pet's appointment?",
      answer: "Please bring your pet's vaccination records and any relevant medical history for better care planning."
    },
    {
      question: "How can I schedule an appointment?",
      answer: "You can book online through our website or call us directly at +4075728379480 for immediate assistance."
    },
    {
      question: "Do you treat all types of pets?",
      answer: "We specialize in dogs and cats, but also provide care for small mammals and exotic pets upon request."
    },
    {
      question: "What makes your deworming treatment different?",
      answer: "Our treatments use premium medications with minimal side effects and comprehensive follow-up care."
    }
  ];

  const contactItems = [
    { icon: Phone, label: "Phone", value: "+4075728379480" },
    { icon: Mail, label: "Email", value: "contact@darivet.com" },
    { icon: MapPin, label: "Address", value: "Domnesti, Ilfov, Romania" }
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) { 
          e.target.classList.add('visible'); 
          observer.unobserve(e.target); 
        } 
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    
    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <DemoBanner />
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto mt-4">
          <div className="flex items-center justify-between h-14 px-4 sm:px-6 rounded-full bg-black/60 backdrop-blur-xl border border-white/[0.08]">
            <a href="#" className="font-semibold text-base tracking-tight text-white">Darivet</a>
            
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                  className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white rounded-full hover:bg-white/[0.05] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden text-white p-2"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/[0.08] p-4">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); setIsMenuOpen(false); }}
                  className="block py-2 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      <section 
        id="hero" 
        className="pt-40 pb-24 sm:pt-48 sm:pb-32 min-h-screen flex items-center relative overflow-x-clip"
      >
        <div className="absolute inset-0 z-0">
          <LightRays 
            raysOrigin="top-center" 
            raysColor="#07bcd4" 
            raysSpeed={1} 
            lightSpread={isMobile ? 2 : 0.5} 
            rayLength={isMobile ? 3 : 1} 
            followMouse={true} 
            mouseInfluence={0.05} 
            noiseAmount={0} 
            distortion={0} 
            pulsating={false} 
            fadeDistance={1} 
            saturation={1} 
          />
        </div>
        
        <DotPattern opacity={0.15} className="absolute inset-0 z-0" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <div className="hero-blur hero-delay-1 mb-6">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
              <AnimatedShinyText className="text-sm font-medium">Premium Pet Care</AnimatedShinyText>
            </div>
          </div>
          
          <h1 className="hero-blur hero-delay-2 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
              Your Pet's Health Matters
            </span>
          </h1>
          
          <p className="hero-blur hero-delay-3 text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Providing top-quality pet care services with a focus on wellness and happiness since 2019. Trusted by families across Ilfov.
          </p>
          
          <div className="hero-blur hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <ShimmerButton className="shadow-2xl btn-hover" background="rgba(7, 188, 212, 1)">
              <span className="text-sm font-medium text-black">Book Appointment</span>
            </ShimmerButton>
            <Button 
              variant="outline" 
              className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
          
          <div className="hero-blur hero-delay-5 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className={cn("text-center", i > 0 && "sm:border-l sm:border-white/10 sm:pl-12")}>
                <NumberTicker 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  className="text-4xl font-black bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(7,188,212,0.6)]" 
                />
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
      </section>

      <section 
        id="about" 
        className="relative overflow-x-clip py-24 sm:py-32 lg:py-40"
      >
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Why Choose Darivet?
            </h2>
            <p className="text-lg text-muted-foreground">
              We are a dedicated pet care service based in Domnesti, Ilfov, Romania, providing comprehensive health and wellness solutions for your beloved pets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {aboutItems.map((item, index) => (
              <Card 
                key={index} 
                className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-cyan-500/20 transition-all duration-500 card-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={120} duration={20} delay={index * 1.5} colorFrom="#07bcd4" colorTo="#07bcd4" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-cyan-600/5 border border-cyan-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(7,188,212,0.15)] transition-all duration-500">
                      <Shield className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-50 transition-colors">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section 
        id="services" 
        className="relative overflow-x-clip py-24 sm:py-32 lg:py-40"
      >
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/[0.06] rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Our Pet Care Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive health and wellness services designed to keep your pets happy and healthy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-cyan-500/20 transition-all duration-500 card-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#07bcd4" colorTo="#07bcd4" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-cyan-600/5 border border-cyan-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(7,188,212,0.15)] transition-all duration-500">
                      <service.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-50 transition-colors">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  
                  <Separator className="mb-5 bg-white/[0.06]" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                      {service.price}
                    </span>
                    <ShimmerButton 
                      className="shadow-lg btn-hover" 
                      background="rgba(7, 188, 212, 1)"
                    >
                      <span className="text-xs font-medium text-black">Book Now</span>
                    </ShimmerButton>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section 
        id="why-us" 
        className="relative overflow-x-clip py-24 sm:py-32 lg:py-40"
      >
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-muted-foreground">
              Our commitment to excellence in pet care makes us the preferred choice for families in Ilfov.
            </p>
          </div>
          
          <BentoGrid className="lg:grid-rows-2">
            {whyUsFeatures.map((feature, index) => (
              <BentoCard 
                key={index} 
                className={cn(
                  "hover:border-cyan-500/20",
                  index === 0 && "col-span-3 lg:col-span-1",
                  index === 1 && "col-span-3 lg:col-span-2",
                  index === 2 && "col-span-3 lg:col-span-2",
                  index === 3 && "col-span-3 lg:col-span-1"
                )}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-cyan-600/5 border border-cyan-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(7,188,212,0.15)] transition-all duration-500">
                    <span className="text-xl font-bold text-cyan-400">{feature.number}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-50 transition-colors">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </BentoCard>
            ))}
          </BentoGrid>
        </div>
      </section>

      <section 
        id="reviews" 
        className="relative overflow-x-clip py-24 sm:py-32 lg:py-40"
      >
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-cyan-500/[0.06] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Pet Parents Love Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Real experiences from families who trust us with their pets' health and wellbeing.
            </p>
          </div>
          
          <div className="relative flex max-w-6xl mx-auto flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              {reviews.map((review, index) => (
                <Card 
                  key={index} 
                  className="max-w-sm relative w-[300px] sm:w-[350px] mx-4 group bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-cyan-500/20 transition-all duration-500 card-hover"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#07bcd4" colorTo="#07bcd4" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < review.rating ? 'fill-cyan-400 text-cyan-400' : 'text-zinc-600'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      "{review.text}"
                    </p>
                    <div className="flex items-center">
                      <Avatar className="w-8 h-8 mr-3">
                        <AvatarImage src={review.avatar} alt={review.name} />
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{review.name}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
          </div>
        </div>
      </section>

      <section 
        id="faq" 
        className="relative overflow-x-clip py-24 sm:py-32 lg:py-40"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our pet care services and how we can help your family.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="animate-on-scroll delay-1 border-white/[0.05] rounded-xl mb-4"
              >
                <AccordionTrigger className="text-left py-4 px-6 hover:bg-white/[0.02] transition-colors duration-200 rounded-xl">
                  <span className="font-medium">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section 
        id="contact" 
        className="relative overflow-x-clip py-24 sm:py-32 lg:py-40"
      >
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-cyan-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Ready to Give Your Pet the Best Care?
            </h2>
            <p className="text-lg text-muted-foreground">
              Contact us today to schedule an appointment or learn more about our pet health services.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                {contactItems.map((item, index) => (
                  <Card 
                    key={index} 
                    className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm rounded-2xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/15 to-cyan-600/5 border border-cyan-500/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">{item.label}</h3>
                        <p className="text-white">{item.value}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <ShimmerButton 
                  className="shadow-lg btn-hover" 
                  background="rgba(7, 188, 212, 1)"
                >
                  <span className="text-sm font-medium text-black">WhatsApp</span>
                </ShimmerButton>
                <Button 
                  variant="outline" 
                  className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
            
            <div>
              <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm rounded-2xl overflow-hidden">
                <div className="h-[350px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                  <iframe
                    src={"https://www.google.com/maps?q=" + encodeURIComponent("domnesti, ilfov, romania") + "&output=embed"}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.05] py-8 pb-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <Separator className="mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Darivet. All rights reserved.
            </p>
            <div className="flex gap-3 mt-4 md:mt-0">
              <a 
                href="https://instagram.com/darivet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-cyan-500/20 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden sm:block"><ProgressiveBlur position="bottom" height="250px" /></div><div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:hidden"><ProgressiveBlur position="bottom" height="150px" /></div>
    </>
  );
}
