import React, { useState, useEffect } from 'react';

// RevOps Unicorn - AI-Powered Exit Value Optimization
// Brand: Midnight Prosperity - Navy + Gold + Burgundy on Cream
// Character: The Wise Advisor Unicorn

export default function RevOpsUnicornSite() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2d3748]" style={{ fontFamily: "'Source Sans Pro', 'Segoe UI', sans-serif" }}>
      <Navigation scrollY={scrollY} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <TrustBar />
      <ProblemSection />
      <SolutionSection />
      <ServiceTiers />
      <ProcessSection />
      <Testimonials />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
}

// Unicorn Mascot SVG Component - "The Wise Advisor"
function UnicornMascot({ className = "", style = {} }) {
  return (
    <svg className={className} style={style} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="100" cy="130" rx="45" ry="35" fill="#1a365d"/>
      {/* Neck */}
      <path d="M85 110 Q75 80 80 60 Q90 55 100 58 Q105 80 95 110" fill="#1a365d"/>
      {/* Head */}
      <ellipse cx="85" cy="55" rx="25" ry="20" fill="#1a365d"/>
      {/* Snout */}
      <ellipse cx="65" cy="60" rx="12" ry="10" fill="#1a365d"/>
      {/* Horn */}
      <path d="M90 35 L95 8 L100 35" fill="#c9a227" stroke="#c9a227" strokeWidth="2"/>
      <path d="M92 30 L95 18 M94 25 L95 18 M96 30 L95 18" stroke="#faf8f5" strokeWidth="1" opacity="0.5"/>
      {/* Ear */}
      <path d="M100 40 L108 25 L105 42" fill="#1a365d"/>
      {/* Eye */}
      <circle cx="78" cy="50" r="5" fill="#faf8f5"/>
      <circle cx="79" cy="49" r="2.5" fill="#2d3748"/>
      <circle cx="80" cy="48" r="1" fill="#faf8f5"/>
      {/* Glasses */}
      <circle cx="78" cy="50" r="8" fill="none" stroke="#c9a227" strokeWidth="1.5"/>
      <path d="M86 50 L92 52" stroke="#c9a227" strokeWidth="1.5"/>
      <path d="M70 50 L58 48" stroke="#c9a227" strokeWidth="1.5"/>
      {/* Mane */}
      <path d="M95 40 Q115 45 110 60 Q120 55 115 70 Q125 68 118 82" fill="none" stroke="#c9a227" strokeWidth="3" strokeLinecap="round"/>
      {/* Legs */}
      <rect x="70" y="155" width="8" height="25" rx="4" fill="#1a365d"/>
      <rect x="85" y="158" width="8" height="22" rx="4" fill="#1a365d"/>
      <rect x="108" y="155" width="8" height="25" rx="4" fill="#1a365d"/>
      <rect x="123" y="158" width="8" height="22" rx="4" fill="#1a365d"/>
      {/* Hooves */}
      <ellipse cx="74" cy="182" rx="5" ry="3" fill="#c9a227"/>
      <ellipse cx="89" cy="182" rx="5" ry="3" fill="#c9a227"/>
      <ellipse cx="112" cy="182" rx="5" ry="3" fill="#c9a227"/>
      <ellipse cx="127" cy="182" rx="5" ry="3" fill="#c9a227"/>
      {/* Tail */}
      <path d="M145 125 Q160 120 165 135 Q175 130 170 145 Q180 145 172 158" fill="none" stroke="#c9a227" strokeWidth="4" strokeLinecap="round"/>
      {/* Vest */}
      <path d="M75 115 Q100 105 125 115 L120 145 Q100 150 80 145 Z" fill="#8b2942" opacity="0.9"/>
      {/* Vest buttons */}
      <circle cx="100" cy="125" r="2" fill="#c9a227"/>
      <circle cx="100" cy="135" r="2" fill="#c9a227"/>
      {/* Nostril */}
      <ellipse cx="58" cy="62" rx="2" ry="1.5" fill="#0f1f38"/>
      {/* Smile */}
      <path d="M55 67 Q60 72 68 68" fill="none" stroke="#0f1f38" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// Small unicorn head for icons
function UnicornHead({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="35" rx="20" ry="16" fill="#1a365d"/>
      <ellipse cx="15" cy="38" rx="10" ry="8" fill="#1a365d"/>
      <path d="M32 20 L35 5 L38 20" fill="#c9a227"/>
      <path d="M42 25 L48 15 L45 27" fill="#1a365d"/>
      <circle cx="24" cy="32" r="4" fill="#faf8f5"/>
      <circle cx="25" cy="31" r="2" fill="#2d3748"/>
      <circle cx="24" cy="32" r="6" fill="none" stroke="#c9a227" strokeWidth="1.2"/>
      <path d="M30 32 L38 34" stroke="#c9a227" strokeWidth="1.2"/>
      <path d="M18 32 L8 30" stroke="#c9a227" strokeWidth="1.2"/>
      <path d="M38 25 Q50 28 48 38 Q55 36 52 45" fill="none" stroke="#c9a227" strokeWidth="2.5" strokeLinecap="round"/>
      <ellipse cx="9" cy="40" rx="1.5" ry="1" fill="#0f1f38"/>
      <path d="M7 44 Q10 48 16 45" fill="none" stroke="#0f1f38" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

// Navigation
function Navigation({ scrollY, mobileMenuOpen, setMobileMenuOpen }) {
  const isScrolled = scrollY > 50;
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#faf8f5]/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <UnicornHead className="w-12 h-12" />
            <div>
              <span className="text-xl font-semibold text-[#1a365d]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>RevOps</span>
              <span className="text-xl font-semibold text-[#c9a227]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}> Unicorn</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-[#2d3748] hover:text-[#1a365d] transition-colors text-sm">The Gap</a>
            <a href="#solution" className="text-[#2d3748] hover:text-[#1a365d] transition-colors text-sm">Our Approach</a>
            <a href="#services" className="text-[#2d3748] hover:text-[#1a365d] transition-colors text-sm">Services</a>
            <a href="#process" className="text-[#2d3748] hover:text-[#1a365d] transition-colors text-sm">Process</a>
            <a href="#about" className="text-[#2d3748] hover:text-[#1a365d] transition-colors text-sm">About</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+1-555-REVOPS" className="text-[#1a365d] text-sm flex items-center gap-2">
              <PhoneIcon />
              (555) 738-6770
            </a>
            <a href="#contact" className="px-5 py-2.5 bg-[#c9a227] hover:bg-[#b8922a] text-white font-medium rounded transition-all text-sm shadow-sm">
              Schedule Consultation
            </a>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-[#1a365d] mb-1.5"></div>
            <div className="w-6 h-0.5 bg-[#1a365d] mb-1.5"></div>
            <div className="w-6 h-0.5 bg-[#1a365d]"></div>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf8f5] border-t border-[#1a365d]/10 px-6 py-4">
          <div className="flex flex-col gap-4">
            <a href="#problem" className="text-[#2d3748] py-2">The Gap</a>
            <a href="#solution" className="text-[#2d3748] py-2">Our Approach</a>
            <a href="#services" className="text-[#2d3748] py-2">Services</a>
            <a href="#process" className="text-[#2d3748] py-2">Process</a>
            <a href="#about" className="text-[#2d3748] py-2">About</a>
            <a href="#contact" className="px-5 py-3 bg-[#c9a227] text-white font-medium rounded text-center mt-2">
              Schedule Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1a365d 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a365d]/5 border border-[#1a365d]/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#c9a227] rounded-full"></div>
              <span className="text-[#1a365d] text-sm">Exit Value Specialists for Accounting Practices</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              <span className="text-[#1a365d]">Protect What</span>
              <br />
              <span className="text-[#1a365d]">You've </span>
              <span className="text-[#c9a227]">Built</span>
            </h1>

            <p className="text-lg md:text-xl text-[#4a5568] mb-8 leading-relaxed">
              Maximize your practice's exit value so you can retire with financial security, 
              protect your employees, and preserve the legacy you've created—without leaving 
              money on the table.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#services" className="px-8 py-4 bg-[#c9a227] hover:bg-[#b8922a] text-white font-medium rounded transition-all text-center shadow-md">
                Explore Your Options
              </a>
              <a href="tel:+1-555-REVOPS" className="px-8 py-4 border-2 border-[#1a365d] hover:bg-[#1a365d] hover:text-white text-[#1a365d] font-medium rounded transition-all text-center flex items-center justify-center gap-2">
                <PhoneIcon />
                Call Us Directly
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#1a365d]/10">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#1a365d]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>75%</div>
                <div className="text-[#4a5568] text-sm mt-1">of CPAs retiring in 15 years</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#1a365d]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>40%+</div>
                <div className="text-[#4a5568] text-sm mt-1">average value increase</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#1a365d]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>$145B</div>
                <div className="text-[#4a5568] text-sm mt-1">US accounting market</div>
              </div>
            </div>
          </div>

          {/* Unicorn illustration */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#c9a227]/10 rounded-full blur-3xl scale-110"></div>
              <UnicornMascot className="w-80 h-80 relative z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Trust Bar
function TrustBar() {
  return (
    <section className="py-8 bg-[#1a365d]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white/80 text-sm">
          <span>Featured in CPA Practice Advisor</span>
          <span className="hidden md:inline">•</span>
          <span>CEPA Methodology</span>
          <span className="hidden md:inline">•</span>
          <span>20+ Years Combined Experience</span>
          <span className="hidden md:inline">•</span>
          <span>$47M+ Value Created</span>
        </div>
      </div>
    </section>
  );
}

// Problem Section
function ProblemSection() {
  return (
    <section id="problem" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[#c9a227] font-medium text-sm tracking-wider uppercase">The Transformation Gap</span>
          <h2 className="text-3xl md:text-4xl text-[#1a365d] mt-4 mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            There's a Critical Gap in Exit Planning
          </h2>
          <p className="text-[#4a5568] text-lg leading-relaxed">
            Between "thinking about exit" and "engaging a broker" lies a crucial phase where 
            most of your exit value is either built—or lost. Yet no one addresses this space.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#faf8f5] border border-[#1a365d]/10 rounded-lg p-8 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-[#8b2942]/10 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold text-[#1a365d] mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Business Brokers</h3>
            <p className="text-[#4a5568] leading-relaxed">
              Focus on transaction execution. Standard advice: "raise fees, cut costs, 
              come back in a few years." No implementation support.
            </p>
            <div className="mt-4 pt-4 border-t border-[#1a365d]/10">
              <span className="text-[#8b2942] text-sm font-medium">Transaction-focused only</span>
            </div>
          </div>

          <div className="bg-[#faf8f5] border border-[#1a365d]/10 rounded-lg p-8 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-[#c9a227]/10 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="text-xl font-semibold text-[#1a365d] mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Exit Planning Advisors</h3>
            <p className="text-[#4a5568] leading-relaxed">
              Deliver assessment and strategy but remain generalist. Address the 
              "what" but not the "how." No accounting-specific expertise.
            </p>
            <div className="mt-4 pt-4 border-t border-[#1a365d]/10">
              <span className="text-[#c9a227] text-sm font-medium">Strategy without implementation</span>
            </div>
          </div>

          <div className="bg-[#faf8f5] border border-[#1a365d]/10 rounded-lg p-8 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-[#1a365d]/10 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="text-xl font-semibold text-[#1a365d] mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Technology Consultants</h3>
            <p className="text-[#4a5568] leading-relaxed">
              Sell software implementations without exit context. Focus on growth 
              positioning rather than exit-readiness and transferability.
            </p>
            <div className="mt-4 pt-4 border-t border-[#1a365d]/10">
              <span className="text-[#1a365d] text-sm font-medium">Tech without exit strategy</span>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-[#1a365d] rounded-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <UnicornHead className="w-24 h-24 flex-shrink-0" />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                RevOps Unicorn Fills This Gap
              </h3>
              <p className="text-white/80 leading-relaxed">
                We provide integrated exit preparation that transforms your practice 
                through AI-enabled automation, technology modernization, and operational 
                optimization—specifically designed to maximize your exit value.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a href="#services" className="px-6 py-3 bg-[#c9a227] hover:bg-[#b8922a] text-white font-medium rounded transition-all inline-flex items-center gap-2">
                See Our Approach
                <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Solution Section
function SolutionSection() {
  const valueDrivers = [
    { icon: "🔄", title: "Recurring Revenue Model", description: "Transform one-time compliance work into monthly advisory relationships that buyers prize" },
    { icon: "👥", title: "Reduced Owner Dependency", description: "Distribute client relationships and systemize operations so the practice runs without you" },
    { icon: "☁️", title: "Modern Technology Stack", description: "Cloud-based infrastructure buyers expect, requiring minimal integration investment" },
    { icon: "📊", title: "Client Diversification", description: "Strategic portfolio rebalancing to eliminate concentration risk that kills deals" },
    { icon: "📝", title: "Documented Processes", description: "Operational playbooks that demonstrate transferability and reduce buyer risk" },
    { icon: "👨‍💼", title: "Team Development", description: "Qualified, stable staff with clear succession capability that buyers seek" }
  ];

  return (
    <section id="solution" className="py-20 lg:py-28 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#c9a227] font-medium text-sm tracking-wider uppercase">What Buyers Want</span>
            <h2 className="text-3xl md:text-4xl text-[#1a365d] mt-4 mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              We Build What Acquirers <span className="text-[#c9a227]">Pay Premium For</span>
            </h2>
            <p className="text-[#4a5568] text-lg leading-relaxed mb-8">
              Research shows valuation multiples of 0.9x-1.3x gross fees for traditional 
              practices, but premium valuations for technology-enabled, advisory-focused firms. 
              We systematically build those premium attributes.
            </p>
            <div className="bg-white border border-[#1a365d]/10 rounded-lg p-6">
              <div className="text-sm text-[#4a5568] mb-2">Average Value Increase</div>
              <div className="flex items-end gap-3">
                <span className="text-5xl font-bold text-[#c9a227]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>40%</span>
                <span className="text-[#4a5568] pb-2">through systematic transformation</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {valueDrivers.map((driver, index) => (
              <div key={index} className="bg-white border border-[#1a365d]/10 rounded-lg p-5 hover:shadow-md transition-all">
                <div className="text-2xl mb-3">{driver.icon}</div>
                <h3 className="text-[#1a365d] font-semibold mb-2">{driver.title}</h3>
                <p className="text-[#4a5568] text-sm leading-relaxed">{driver.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Service Tiers
function ServiceTiers() {
  const tiers = [
    { name: "Exit Value Blueprint", price: "$7,500", description: "Comprehensive assessment and roadmap", ideal: "You're 3-7 years from exit and want clarity", features: ["Practice valuation analysis", "Technology audit & recommendations", "Client concentration risk assessment", "Exit readiness scorecard", "Prioritized action plan", "Valuation projection scenarios"], timeline: "2-3 weeks", cta: "Start Assessment", highlighted: false },
    { name: "Exit Value Acceleration", price: "$37,500", description: "12-18 month transformation engagement", ideal: "You're committed to maximizing exit value", features: ["Everything in Blueprint, plus:", "Technology implementation", "Process documentation", "Pricing optimization", "Team development program", "Owner dependency reduction", "Monthly progress reviews"], timeline: "12-18 months", cta: "Schedule Consultation", highlighted: true },
    { name: "Managed Exit", price: "2% of value created", description: "Full exit preparation through transaction", ideal: "You want comprehensive support to sale", features: ["Complete exit preparation", "Broker matching & coordination", "Deal negotiation support", "Due diligence preparation", "Transition planning", "Success-aligned pricing"], timeline: "Through close", cta: "Learn More", highlighted: false }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[#c9a227] font-medium text-sm tracking-wider uppercase">Service Options</span>
          <h2 className="text-3xl md:text-4xl text-[#1a365d] mt-4 mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Choose Your Path to Maximum Exit Value
          </h2>
          <p className="text-[#4a5568] text-lg leading-relaxed">
            Whether you're just beginning to think about exit or ready for comprehensive 
            transformation, we have a proven approach that fits your timeline and goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div key={index} className={`relative rounded-lg p-8 transition-all ${tier.highlighted ? 'bg-[#1a365d] text-white shadow-xl ring-4 ring-[#c9a227]/30' : 'bg-[#faf8f5] border border-[#1a365d]/10 hover:shadow-lg'}`}>
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-[#c9a227] text-white text-sm font-medium rounded-full shadow">Most Popular</span>
                </div>
              )}
              <div className="mb-6">
                <h3 className={`text-2xl font-semibold mb-2 ${tier.highlighted ? 'text-white' : 'text-[#1a365d]'}`} style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{tier.name}</h3>
                <p className={tier.highlighted ? 'text-white/70' : 'text-[#4a5568]'}>{tier.description}</p>
              </div>
              <div className="mb-6">
                <span className={`text-4xl font-bold ${tier.highlighted ? 'text-white' : 'text-[#1a365d]'}`} style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{tier.price}</span>
                {tier.name !== "Managed Exit" && <span className={tier.highlighted ? 'text-white/60 ml-2' : 'text-[#4a5568] ml-2'}>one-time</span>}
              </div>
              <div className={`rounded-lg p-4 mb-6 ${tier.highlighted ? 'bg-white/10' : 'bg-white border border-[#1a365d]/10'}`}>
                <div className="text-sm font-medium mb-1 text-[#c9a227]">Ideal if:</div>
                <div className={tier.highlighted ? 'text-white/90' : 'text-[#2d3748]'}>{tier.ideal}</div>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <CheckIcon className="text-[#c9a227]" />
                    <span className={`text-sm ${tier.highlighted ? 'text-white/90' : 'text-[#4a5568]'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className={`text-sm mb-6 ${tier.highlighted ? 'text-white/70' : 'text-[#4a5568]'}`}>
                <span className="font-medium">Timeline:</span> {tier.timeline}
              </div>
              <a href="#contact" className={`block text-center py-3 rounded font-medium transition-all ${tier.highlighted ? 'bg-[#c9a227] hover:bg-[#b8922a] text-white' : 'border-2 border-[#1a365d] hover:bg-[#1a365d] hover:text-white text-[#1a365d]'}`}>
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#4a5568] max-w-2xl mx-auto">
            Not sure which tier is right for you? Start with a complimentary 30-minute 
            consultation. We'll help you understand your current position and recommend 
            the most appropriate path—even if it's not with us.
          </p>
          <a href="tel:+1-555-REVOPS" className="inline-flex items-center gap-2 text-[#1a365d] hover:text-[#c9a227] mt-4 font-medium">
            <PhoneIcon />
            (555) 738-6770
          </a>
        </div>
      </div>
    </section>
  );
}

// Process Section
function ProcessSection() {
  const phases = [
    { number: "01", title: "Discovery & Assessment", duration: "Weeks 1-2", description: "Comprehensive evaluation of your practice's current state, technology infrastructure, and exit readiness.", outputs: ["Exit readiness scorecard", "Technology audit", "Valuation analysis", "Risk assessment"] },
    { number: "02", title: "Foundation Building", duration: "Weeks 3-8", description: "Strategic planning and infrastructure setup to support systematic value creation.", outputs: ["Platform selection", "Data migration plan", "Workflow design", "Change management"] },
    { number: "03", title: "Implementation", duration: "Weeks 9-16", description: "Hands-on deployment of technology, processes, and systems that drive valuation.", outputs: ["Technology deployment", "Staff training", "Process automation", "Quality protocols"] },
    { number: "04", title: "Optimization & Transfer", duration: "Weeks 17+", description: "Refinement, performance monitoring, and documentation for seamless ownership transition.", outputs: ["Performance tracking", "Process refinement", "Exit documentation", "Transition prep"] }
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[#c9a227] font-medium text-sm tracking-wider uppercase">Our Process</span>
          <h2 className="text-3xl md:text-4xl text-[#1a365d] mt-4 mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Methodical Transformation, Measurable Results
          </h2>
          <p className="text-[#4a5568] text-lg leading-relaxed">
            Our proven methodology guides you through systematic value creation, 
            with clear milestones and transparent progress at every stage.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-[#1a365d]/20"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                <div className="w-16 h-16 rounded-full bg-[#1a365d] flex items-center justify-center mb-6 relative z-10 shadow-lg">
                  <span className="text-[#c9a227] font-bold text-lg" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{phase.number}</span>
                </div>
                <div className="bg-white border border-[#1a365d]/10 rounded-lg p-6 h-full hover:shadow-md transition-all">
                  <div className="text-[#c9a227] text-sm font-medium mb-2">{phase.duration}</div>
                  <h3 className="text-xl font-semibold text-[#1a365d] mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{phase.title}</h3>
                  <p className="text-[#4a5568] text-sm mb-4 leading-relaxed">{phase.description}</p>
                  <div className="pt-4 border-t border-[#1a365d]/10">
                    <div className="text-xs text-[#4a5568] uppercase tracking-wider mb-2 font-medium">Key Outputs</div>
                    <ul className="space-y-1">
                      {phase.outputs.map((output, oIndex) => (
                        <li key={oIndex} className="text-[#4a5568] text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#c9a227] rounded-full"></div>
                          {output}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials
function Testimonials() {
  const testimonials = [
    { initials: "RK", name: "Richard K.", role: "CPA Practice Owner, Texas", quote: "I spent years putting off succession planning because I didn't know where to start. RevOps Unicorn gave me a clear roadmap and helped me implement changes that increased my practice value by nearly 50%." },
    { initials: "SM", name: "Susan M.", role: "Managing Partner, Florida", quote: "The technology modernization alone paid for the engagement. But more importantly, I now work fewer hours and my practice is worth more than ever. I wish I'd done this five years ago." },
    { initials: "JT", name: "James T.", role: "Sole Practitioner, California", quote: "What set RevOps Unicorn apart was their honesty. They told me exactly what needed to change, helped me implement it, and now I have three serious buyers competing for my practice." }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#1a365d]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>What Firm Owners Say</h2>
          <p className="text-white/70">Real outcomes from practice owners who've worked with us</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="text-[#c9a227]" />)}
              </div>
              <p className="text-white/90 leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#c9a227]/20 rounded-full flex items-center justify-center border border-[#c9a227]/30">
                  <span className="text-[#c9a227] font-bold">{t.initials}</span>
                </div>
                <div>
                  <div className="text-white font-medium">{t.name}</div>
                  <div className="text-white/60 text-sm">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[{ value: "25+", label: "Practices Transformed" }, { value: "$47M+", label: "Value Created" }, { value: "94%", label: "Client Satisfaction" }, { value: "12mo", label: "Avg. Time to Exit-Ready" }].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{stat.value}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#c9a227] font-medium text-sm tracking-wider uppercase">About RevOps Unicorn</span>
            <h2 className="text-3xl md:text-4xl text-[#1a365d] mt-4 mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              We've Walked This Path <span className="text-[#c9a227]">Ourselves</span>
            </h2>
            <p className="text-[#4a5568] text-lg leading-relaxed mb-6">
              RevOps Unicorn was founded by professionals who've spent decades in accounting 
              and professional services—and who understand that exiting a practice you've 
              built is about far more than money.
            </p>
            <p className="text-[#4a5568] text-lg leading-relaxed mb-8">
              We combine deep industry expertise with modern revenue operations methodology 
              to help firm owners protect their legacy, care for their employees, and maximize 
              the financial reward they've earned.
            </p>

            <div className="space-y-4">
              {[{ title: "Industry Specialists", desc: "Exclusive focus on accounting and professional services" }, { title: "Implementation Partners", desc: "We do the work with you, not just advise" }, { title: "Honest Assessment", desc: "We'll tell you the truth, even when it's hard to hear" }].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#c9a227]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="text-[#c9a227]" />
                  </div>
                  <div>
                    <div className="text-[#1a365d] font-semibold">{item.title}</div>
                    <div className="text-[#4a5568] text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#faf8f5] rounded-lg p-8 border border-[#1a365d]/10">
            <h3 className="text-2xl font-semibold text-[#1a365d] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Why We're Different</h3>
            <div className="space-y-6">
              {[{ title: "We don't just strategize—we implement", desc: "Other advisors give you a plan and wish you luck. We roll up our sleeves and help you execute every element of your transformation." }, { title: "We understand your clients' concerns", desc: "Legacy matters. We help you structure transitions that protect the client relationships you've nurtured for decades." }, { title: "We're aligned with your success", desc: "Our Managed Exit tier means we only succeed when you do. Your increased exit value is our best marketing." }].map((item, index) => (
                <div key={index}>
                  <div className="text-[#c9a227] font-semibold mb-2">{item.title}</div>
                  <p className="text-[#4a5568] text-sm">{item.desc}</p>
                  {index < 2 && <div className="h-px bg-[#1a365d]/10 mt-6"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#faf8f5]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="bg-white border border-[#1a365d]/10 rounded-lg p-8 md:p-12 text-center shadow-lg">
          <UnicornHead className="w-20 h-20 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl text-[#1a365d] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Ready to Protect What You've Built?
          </h2>
          <p className="text-[#4a5568] text-lg mb-8 max-w-2xl mx-auto">
            Schedule a complimentary 30-minute consultation. We'll discuss your situation, 
            answer your questions, and help you determine the right next step—whether 
            that's working with us or not.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="mailto:hello@revopsunicorn.com" className="px-8 py-4 bg-[#c9a227] hover:bg-[#b8922a] text-white font-medium rounded transition-all inline-flex items-center justify-center gap-2 shadow-md">
              <MailIcon />
              Email Us
            </a>
            <a href="tel:+1-555-738-6770" className="px-8 py-4 border-2 border-[#1a365d] hover:bg-[#1a365d] hover:text-white text-[#1a365d] font-medium rounded transition-all inline-flex items-center justify-center gap-2">
              <PhoneIcon />
              (555) 738-6770
            </a>
          </div>
          <p className="text-[#4a5568] text-sm">No pressure. No obligation. Just honest conversation about your practice and your future.</p>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-16 bg-[#1a365d]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <UnicornHead className="w-12 h-12" />
              <div>
                <span className="text-xl font-semibold text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>RevOps</span>
                <span className="text-xl font-semibold text-[#c9a227]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}> Unicorn</span>
              </div>
            </div>
            <p className="text-white/70 max-w-md leading-relaxed">
              AI-powered exit value optimization for accounting firm owners. 
              We help you maximize your practice's value so you can retire with 
              security and legacy intact.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/70 hover:text-[#c9a227] transition-colors">Exit Value Blueprint</a></li>
              <li><a href="#services" className="text-white/70 hover:text-[#c9a227] transition-colors">Exit Value Acceleration</a></li>
              <li><a href="#services" className="text-white/70 hover:text-[#c9a227] transition-colors">Managed Exit</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-white/70">(555) 738-6770</li>
              <li><a href="mailto:hello@revopsunicorn.com" className="text-white/70 hover:text-[#c9a227] transition-colors">hello@revopsunicorn.com</a></li>
              <li><a href="https://revopsunicorn.com" className="text-white/70 hover:text-[#c9a227] transition-colors">revopsunicorn.com</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/50 text-sm">© 2026 RevOps Unicorn. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 hover:text-white/70 text-sm">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white/70 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Icons
function PhoneIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
}

function MailIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
}

function ArrowRightIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>;
}

function CheckIcon({ className }) {
  return <svg className={`w-5 h-5 flex-shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>;
}

function StarIcon({ className }) {
  return <svg className={`w-5 h-5 ${className}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>;
}
