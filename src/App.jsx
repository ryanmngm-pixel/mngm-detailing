import { useState } from "react";
import "./App.css";

const PHONE_NUMBER = "4352782290";

function QuoteButton({ className = "" }) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(PHONE_NUMBER);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2200);
    } catch {
      window.location.href = `tel:${PHONE_NUMBER}`;
    }
  }

  return (
    <button
      type="button"
      className={`quote-button ${className} ${copied ? "is-copied" : ""}`}
      onClick={handleClick}
      aria-live="polite"
    >
      <span className="quote-button-label">
        {copied ? "Number Copied ✓" : "Request Quote"}
      </span>

      <span className="quote-button-arrow" aria-hidden="true">
        {copied ? "✓" : "↗"}
      </span>
    </button>
  );
}

function Brand() {
  return (
    <a href="#home" className="brand" aria-label="MNGM Detailing home">
      <span className="brand-mark" aria-hidden="true" />
      <span className="brand-name">
        MNGM<span> DETAILING</span>
      </span>
    </a>
  );
}

function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`section-heading ${centered ? "centered" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Brand />

        <button
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#process" onClick={closeMenu}>
            Our Process
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <QuoteButton className="nav-quote" />
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-content">
          <Eyebrow>PROFESSIONAL AUTOMOTIVE DETAILING</Eyebrow>

          <h1>
            Every detail.
            <br />
            <span>Matters.</span>
          </h1>

          <p className="hero-description">
            More than a clean car. A standard of care you can see, feel, and
            appreciate every time you get behind the wheel.
          </p>

          <div className="hero-actions">
            <QuoteButton />
            <a href="#services" className="text-link">
              Explore Services <span>↓</span>
            </a>
          </div>

          <div className="hero-bottom">
            <span className="hero-line" />
            <span>PRECISION IN EVERY PASS</span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-orbit orbit-three" />

          <div className="visual-center">
            <div className="visual-center-line" />
            <span className="visual-center-label">MNGM</span>
            <span className="visual-center-subtitle">DETAILING</span>
          </div>

          <div className="visual-coordinate coordinate-top">
            <span>01 / 03</span>
            <span>PRECISION</span>
          </div>

          <div className="visual-coordinate coordinate-bottom">
            <span>CRAFTED WITH CARE</span>
            <span>EST. 2026</span>
          </div>

          <div className="visual-cross cross-one">+</div>
          <div className="visual-cross cross-two">+</div>
          <div className="visual-cross cross-three">+</div>
        </div>
      </div>

      <div className="hero-index" aria-hidden="true">
        <span>01</span>
        <span className="hero-index-line" />
        <span>04</span>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="container trust-inner">
        <span>ATTENTION TO DETAIL</span>
        <span className="trust-divider">✳</span>
        <span>QUALITY OVER SHORTCUTS</span>
        <span className="trust-divider">✳</span>
        <span>YOUR VEHICLE, RESPECTED</span>
      </div>
    </section>
  );
}

const services = [
  {
    number: "01",
    name: "Interior Detail",
    description:
      "A refreshed cabin with careful attention to the surfaces and spaces you use every day.",
    features: [
      "Interior vacuuming",
      "Surface cleaning",
      "Interior glass cleaning",
      "Detailed finishing",
    ],
  },
  {
    number: "02",
    name: "Exterior Detail",
    description:
      "A thorough exterior clean focused on restoring a crisp, well-maintained appearance.",
    features: [
      "Exterior hand wash",
      "Wheel and tire cleaning",
      "Exterior surface care",
      "Final finish inspection",
    ],
  },
  {
    number: "03",
    name: "Full Detail",
    description:
      "A comprehensive interior and exterior service for a complete vehicle refresh.",
    features: [
      "Interior detailing",
      "Exterior detailing",
      "Careful finishing",
      "Final quality check",
    ],
    featured: true,
  },
];

function ServiceCard({ service }) {
  return (
    <article className={`service-card ${service.featured ? "featured" : ""}`}>
      <div className="service-card-top">
        <span className="service-number">{service.number}</span>

        {service.featured && (
          <span className="service-tag">COMPLETE CARE</span>
        )}
      </div>

      <div className="service-card-content">
        <h3>{service.name}</h3>
        <p>{service.description}</p>

        <ul className="service-features">
          {service.features.map((feature) => (
            <li key={feature}>
              <span>+</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="service-card-bottom">
        <span className="service-price">Custom quote</span>
        <QuoteButton className="service-quote" />
      </div>
    </article>
  );
}

function Services() {
  return (
    <section className="services section-padding" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="WHAT WE DO"
          title={
            <>
              Care that goes
              <br />
              <span>beyond clean.</span>
            </>
          }
          description="Straightforward detailing services, thoughtful execution, and an uncompromising focus on the finished result."
        />

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard service={service} key={service.number} />
          ))}
        </div>

        <p className="services-note">
          Every vehicle is different. Final pricing depends on vehicle size,
          condition, and requested service.
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="container about-grid">
        <div className="about-visual" aria-hidden="true">
          <div className="about-frame">
            <div className="about-frame-inner">
              <span className="about-roman">M</span>
              <span className="about-frame-caption">DETAIL IS THE DIFFERENCE</span>
            </div>
          </div>

          <span className="about-side-label">THE MNGM STANDARD</span>
          <span className="about-cross">+</span>
        </div>

        <div className="about-content">
          <SectionHeading
            eyebrow="OUR PHILOSOPHY"
            title={
              <>
                The difference is
                <br />
                in the <span>details.</span>
              </>
            }
          />

          <p>
            At MNGM Detailing, we believe a quality detail is about more than
            appearances. It is about taking the time to do the job properly
            and treating every vehicle with care.
          </p>

          <p>
            No unnecessary extras. No careless shortcuts. Just a commitment
            to quality workmanship and a result you can feel good about.
          </p>

          <a href="#process" className="text-link">
            How We Work <span>↗</span>
          </a>

          <div className="about-signature">
            <span className="signature-line" />
            <span>MNGM DETAILING</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const processSteps = [
  {
    number: "01",
    title: "Tell Us About Your Vehicle",
    description:
      "Request a quote and share your vehicle details and the service you're looking for.",
  },
  {
    number: "02",
    title: "Get Your Quote",
    description:
      "We'll discuss your needs, the vehicle's condition, and the right service for you.",
  },
  {
    number: "03",
    title: "Enjoy the Difference",
    description:
      "Your vehicle receives careful attention, with quality and the finished result in mind.",
  },
];

function Process() {
  return (
    <section className="process section-padding" id="process">
      <div className="container">
        <SectionHeading
          eyebrow="A STRAIGHTFORWARD EXPERIENCE"
          title={
            <>
              Simple by design.
              <br />
              <span>Detailed by hand.</span>
            </>
          }
          description="A clear process from your first message to the final result."
        />

        <div className="process-grid">
          {processSteps.map((step) => (
            <article className="process-step" key={step.number}>
              <span className="process-number">{step.number}</span>
              <span className="process-line" />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section-padding" id="contact">
      <div className="container contact-inner">
        <div className="contact-decoration" aria-hidden="true">
          <div className="contact-ring ring-one" />
          <div className="contact-ring ring-two" />
          <div className="contact-ring ring-three" />
          <span className="contact-cross">+</span>
        </div>

        <div className="contact-content">
          <Eyebrow>YOUR VEHICLE DESERVES BETTER</Eyebrow>

          <h2>
            Let's make your
            <br />
            vehicle <span>stand out.</span>
          </h2>

          <p>
            Ready for a refresh? Request a quote to get the conversation
            started. Your number is copied automatically so you can reach out
            in seconds.
          </p>

          <QuoteButton className="contact-quote" />

          <span className="contact-footnote">
            TAP TO COPY OUR CONTACT NUMBER
          </span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Brand />
          <p>Every detail matters.</p>
        </div>

        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#process">Our Process</a>
          <a href="#contact">Contact</a>
        </div>

        <QuoteButton className="footer-quote" />
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} MNGM Detailing</span>
        <span>BUILT AROUND THE DETAILS.</span>
        <a href="#home">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}