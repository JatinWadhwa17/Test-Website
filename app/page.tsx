const socialProof = [
  '★★★★★ "Best haircut I\'ve ever gotten." — Milo M.',
  "Tulsa's Most Recommended Barbershop",
  "Walk-ins Welcome · Appointments Available",
  "Family Friendly · Kids Welcome",
];

const services = [
  {
    icon: "✂",
    title: "Haircuts",
    description: "Fades, tapers, scissors, buzz cuts, military cuts",
  },
  {
    icon: "🪒",
    title: "Beard Trims & Straight Razor Shaves",
    description: "Hot towel. Straight razor. The full ritual.",
  },
  {
    icon: "🧒",
    title: "Kids' Cuts",
    description: "Welcoming, patient, perfect every time",
  },
  {
    icon: "🧵",
    title: "Braids & Natural Hair",
    description: "Skilled stylists. Intricate work. Stunning results",
  },
  {
    icon: "🎨",
    title: "Hair Color & Highlights",
    description: "Precision color that hits exactly right",
  },
  {
    icon: "➕",
    title: "Hair Extensions",
    description: "Length, volume, flawlessly applied",
  },
];

const barbers = [
  {
    name: "JT (J'Shawn Butler)",
    bio: '"Hands down the best barber I\'ve ever been to. Straight razor, hot towel, perfect beard — the experience is above and beyond." Uses hot towel + straight razor finishing. Books up fast.',
  },
  {
    name: "Chevy",
    bio: '"Been going to Chevy for 9 years. Never once did my hair wrong." A Chop House legend.',
  },
  {
    name: "Nukey",
    bio: '"Got me feeling amazing in under 30 minutes." Fast, precise, great energy.',
  },
  {
    name: "DJ",
    bio: '"Always getting me right. Super nice, will help anyone." Consistent and chill.',
  },
  {
    name: "Terrence Lewis",
    bio: '"Surgeon lines. So damn fresh. Never disappoints." Known for razor-sharp fades.',
  },
  {
    name: "Sky",
    bio: '"Replicated my daughter\'s chosen style perfectly. Best braids we\'ve ever gotten."',
  },
  {
    name: "Anna",
    bio: '"Always twists my son\'s hair up perfectly."',
  },
  {
    name: "Luis",
    bio: '"Pays attention to detail. Gave me a brilliant haircut."',
  },
];

const reviews = [
  `"I've been going to Chevy tha barber for 9 years. Prices are amazing and worth every penny." — Chris C.`,
  `"JT goes the extra mile — straight razor, hot towel, fresh cut, beard perfect. It's just not some haircut. The experience is what makes it worth it." — Lea I.`,
  `"This is the only place in town I will even consider getting my haircut. Top notch work for a way better price than anywhere in Tulsa." — Nathan D.`,
  `"People come in and leave looking like entirely different people. Worth the 45-minute drive from Muskogee." — Brandy F.`,
  `"My grandson has problems being around people he doesn't know. He felt at ease there. He loves his new hairstyle." — Carol H.`,
  `"Very recommended if you have trust issues with people messing up your hair. My first time was never my last." — Jose R.`,
  `"Nukey is one of the best barbers in town. Gets me right every time." — Dj L.`,
  `"The Chop House is a great family friendly business with amazing barbers!" — Kendall R.`,
];

const atmosphereBadges = [
  "Entertainment for Kids",
  "Music You Actually Want to Hear",
  "Walk-ins Welcome",
  "Easy Online Booking",
];

const hours = [
  "Mon-Thu · 9AM-7PM",
  "Fri-Sat · 9AM-8PM",
  "Sun · Walk-ins & special appointments",
];

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.4" cy="6.6" r="1.15" className="fill-current" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon fill-current">
      <path d="M13.44 21v-7.47h2.51l.38-2.92h-2.89V8.74c0-.85.23-1.43 1.45-1.43h1.55V4.7c-.27-.04-1.19-.12-2.25-.12-2.22 0-3.74 1.35-3.74 3.84v2.19H8v2.92h2.45V21h2.99Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <div className="mobile-booking-bar">
        <a href="#book">Book Now</a>
      </div>

      <section className="hero-section">
        <div className="hero-backdrop" />
        <header className="topbar">
          <a href="#" className="brand-mark" aria-label="The Chop House home">
            <span className="brand-badge" aria-hidden="true">
              CH
            </span>
            <span className="brand-kicker">Tulsa, Oklahoma</span>
            <span className="brand-title">The Chop House</span>
          </a>

          <nav className="topnav" aria-label="Primary">
            <a href="#services">Services</a>
            <a href="#barbers">Our Barbers</a>
            <a href="#reviews">Reviews</a>
            <a href="#book" className="nav-cta">
              Book Now
            </a>
          </nav>
        </header>

        <div className="hero-content" id="content">
          <div className="eyebrow-row">
            <div className="eyebrow">Premium cuts. Real culture. No average allowed.</div>
            <div className="hero-status-card" aria-label="Booking and availability">
              <div className="hero-status-topline">
                <span className="pulse-dot" aria-hidden="true" />
                <span>Open Today</span>
              </div>
              <div className="hero-status-grid">
                <span>Walk-ins Welcome</span>
                <span>Appointments Available</span>
              </div>
            </div>
          </div>
          <h1>Tulsa&apos;s Sharpest Cut. Every Single Time.</h1>
          <p className="hero-copy">
            Walk in. Sit down. Leave a different person.
          </p>
          <div className="hero-actions">
            <a href="#book" className="button-primary">
              Book Your Barber Now
            </a>
            <a href="#services" className="button-secondary">
              Explore Services
            </a>
          </div>

          <div className="hero-stats" aria-label="Highlights">
            <div>
              <strong>Elite Team</strong>
              <span>Barbers and stylists known across Tulsa.</span>
            </div>
            <div>
              <strong>Starting at $20</strong>
              <span>Premium quality without premium attitude.</span>
            </div>
            <div>
              <strong>Walk-ins Welcome</strong>
              <span>Fast service when you need to pull up today.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="social-proof-bar" aria-label="Trust signals">
        <div className="ticker-track">
          {[...socialProof, ...socialProof].map((item, index) => (
            <span key={`${item}-${index}`} className="ticker-item">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section split-section" id="about">
        <div className="section-copy">
          <span className="section-label">About The Shop</span>
          <h2>This Isn&apos;t Just a Haircut. It&apos;s an Experience.</h2>
          <p>
            At The Chop House, we&apos;ve built something rare — a shop where the
            energy is right, the barbers are elite, and nobody leaves looking
            average. From straight razor fades to precision line-ups, hot towel
            shaves to braids that turn heads, our team brings skill, passion,
            and personality to every single chair. We&apos;ve been getting Tulsa
            sharp for years — and we&apos;re just getting started.
          </p>
        </div>

        <div className="experience-panel">
          <div className="experience-photo experience-photo-main" />
          <div className="experience-card">
            <span className="card-kicker">Inside The Vibe</span>
            <p>
              Moody lighting, precise work, real conversation, and a room full
              of confidence. The whole place feels like the moment before you
              step out and everybody notices.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <span className="section-label">Services</span>
          <h2>Premium Work Across Every Chair.</h2>
          <p>
            Clean cuts, sharp finishes, and specialized styling for the whole
            family.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>

        <div className="price-callout">
          <span>Starting from just $20</span>
          <p>Premium quality, unbeatable value.</p>
        </div>
      </section>

      <section className="section barbers-section" id="barbers">
        <div className="section-heading">
          <span className="section-label">Barber Spotlight</span>
          <h2>Request Your Barber. Own Your Look.</h2>
          <p>
            Every chair at The Chop House is held by someone who takes their
            craft seriously.
          </p>
        </div>

        <div className="barber-grid">
          {barbers.map((barber, index) => (
            <article key={barber.name} className="barber-card">
              <div className="barber-avatar" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3>{barber.name}</h3>
                <p>{barber.bio}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="section-link-row">
          <a href="#book" className="section-link">
            Find Your Barber &amp; Book Now →
          </a>
        </div>
      </section>

      <section className="section reviews-section" id="reviews">
        <div className="section-heading">
          <span className="section-label">Review Wall</span>
          <h2>Don&apos;t Take Our Word For It.</h2>
        </div>

        <div className="review-grid">
          {reviews.map((review) => (
            <blockquote key={review} className="review-card">
              <p>{review}</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section atmosphere-section">
        <div className="atmosphere-copy">
          <span className="section-label">Atmosphere</span>
          <h2>Good Vibes. Great Cuts. Every Time.</h2>
          <p>
            The Chop House isn&apos;t just somewhere you get your hair cut —
            it&apos;s somewhere you actually want to be. Great music, real
            conversation, a crew that makes you feel at home the second you
            walk in. Walk-ins always welcome. Appointments available so you
            never have to wait.
          </p>
        </div>

        <div className="badge-grid">
          {atmosphereBadges.map((badge) => (
            <div key={badge} className="atmosphere-badge">
              <span className="badge-bullet" aria-hidden="true">
                ◆
              </span>
              {badge}
            </div>
          ))}
        </div>
      </section>

      <section className="booking-section" id="book">
        <div className="booking-overlay" />
        <div className="booking-content">
          <span className="section-label">Booking</span>
          <h2>Your Best Cut Is One Click Away.</h2>
          <p>
            Walk in or book your barber online. Either way, we&apos;ve got you.
          </p>

          <div className="hero-actions">
            <a href="https://book.squareup.com/" className="button-primary">
              Book an Appointment
            </a>
            <a href="#top" className="button-secondary">
              Walk In Today
            </a>
          </div>

          <div className="booking-meta">
            <div>
              <span className="meta-label">Visit</span>
              <strong>Tulsa, Oklahoma</strong>
            </div>
            <div>
              <span className="meta-label">Hours</span>
              <strong>{hours[0]}</strong>
              <strong>{hours[1]}</strong>
              <strong>{hours[2]}</strong>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer" id="top">
        <div className="footer-brand">
          <span className="brand-title">The Chop House</span>
          <p>The Chop House — Where Tulsa Gets Sharp.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <a href="#services">Services</a>
          <a href="#barbers">Our Barbers</a>
          <a href="#reviews">Reviews</a>
          <a href="#book">Book Now</a>
        </nav>

        <div className="footer-contact">
          <span>Tulsa, OK</span>
          <span>Call the shop for today&apos;s availability</span>
        </div>

        <div className="social-icons" aria-label="Social media links">
          <a href="https://instagram.com" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="https://facebook.com" aria-label="Facebook">
            <FacebookIcon />
          </a>
        </div>
      </footer>
    </main>
  );
}
