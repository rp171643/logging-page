 

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Our Services' },
  { id: 'about', label: 'About Us' },
  { id: 'contact', label: 'Contact' },
]

function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="container-responsive flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 no-underline">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-sky-500 to-blue-700" />
          <span className="font-semibold text-slate-900">Aura AI</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="text-slate-700 hover:text-slate-900 no-underline">
              {s.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-800 transition-colors no-underline">Contact Us</a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative isolate pt-28 md:pt-32 lg:pt-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 to-white" />
      <div className="container-responsive grid gap-10 md:gap-12 lg:gap-16 lg:grid-cols-12 items-center">
        <div className="lg:col-span-7">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
            Empowering Your Future with Data, AI, and Innovation
          </h1>
          <p className="mt-6 text-base md:text-lg text-slate-600 max-w-2xl">
            Partner in strategizing goals, analyzing data, and excelling in competitive landscapes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#services" className="inline-flex items-center justify-center rounded-md bg-sky-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-sky-700 transition-colors no-underline">Our Services</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-slate-900 font-medium hover:bg-slate-50 transition-colors no-underline">Contact Us</a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-gradient-to-tr from-sky-300 to-blue-500 opacity-20 blur-2xl" />
            <div className="absolute -bottom-8 -left-4 h-24 w-24 rounded-full bg-gradient-to-tr from-indigo-300 to-sky-400 opacity-20 blur-2xl" />
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 flex items-center justify-center">
                  <div className="h-8 w-8 rounded-md bg-gradient-to-br from-sky-500 to-blue-700" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type Service = {
  title: string
  description: string
  bullets: string[]
}

const services: Service[] = [
  {
    title: 'Artificial Intelligence',
    description: 'Transformative AI solutions across your organization.',
    bullets: ['NLP', 'Generative AI', 'Visual AI', 'Edge AI'],
  },
  {
    title: 'Data Integration',
    description: 'Reliable data pipelines and governance at scale.',
    bullets: ['Data sourcing', 'Pipelines', 'Quality management', 'Secure transfer'],
  },
  {
    title: 'Data Visualization',
    description: 'Insightful dashboards and data storytelling.',
    bullets: ['Dashboards', 'Storytelling', 'Mobile-ready insights'],
  },
  {
    title: 'Big Data Analytics',
    description: 'Harness large-scale data for predictive insights.',
    bullets: ['Data lakes', 'Predictive analytics', 'Governance'],
  },
  {
    title: 'Machine Learning',
    description: 'Models that drive decisions and growth.',
    bullets: ['Forecasting', 'Recommendations', 'Dynamic pricing'],
  },
]

function Services() {
  return (
    <section id="services" className="py-16 md:py-20 lg:py-24">
      <div className="container-responsive">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Our Services</h2>
          <p className="mt-4 text-slate-600">Pragmatic solutions designed for outcomes, reliability, and trust.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-sky-500 to-blue-700" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              <ul className="mt-4 space-y-1 text-sm text-slate-700 list-disc list-inside">
                {service.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <div className="container-responsive grid gap-10 lg:grid-cols-12 items-start">
        <div className="lg:col-span-7">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">About Us</h2>
          <p className="mt-4 text-slate-700 max-w-2xl">
            Our vision is to make advanced AI and data capabilities accessible, trustworthy, and outcome-driven.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">Founder</h3>
              <p className="mt-2 text-sm text-slate-700">Dr. Vipul Joshi (PhD in Physics), AI & Cloud expert.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">Philosophy</h3>
              <p className="mt-2 text-sm text-slate-700">Personalized AI and data solutions tailored to each business.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">Approach</h3>
              <p className="mt-2 text-sm text-slate-700">Custom solutions, decision empowerment, and future-proof strategies.</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-md bg-gradient-to-br from-sky-500 to-blue-700" />
              <div>
                <h3 className="font-semibold text-slate-900">Vision</h3>
                <p className="text-sm text-slate-700 mt-1">Deliver measurable value through responsible AI and robust data foundations.</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-slate-600">
              We partner closely with clients to understand goals, design pragmatic roadmaps, and implement solutions that scale. Our work emphasizes governance, transparency, and alignment with business outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24">
      <div className="container-responsive grid gap-10 lg:grid-cols-12 items-start">
        <div className="lg:col-span-7">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Contact Us</h2>
          <form className="mt-8 grid grid-cols-1 gap-6">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
              <input id="name" name="name" type="text" required className="rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500" placeholder="Your full name" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
              <input id="email" name="email" type="email" required className="rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500" placeholder="you@company.com" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
              <textarea id="message" name="message" rows={5} required className="rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500" placeholder="How can we help?" />
            </div>
            <div>
              <button type="submit" className="inline-flex items-center rounded-md bg-sky-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-sky-700 transition-colors">Send Message</button>
            </div>
          </form>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Business Details</h3>
            <dl className="mt-4 text-sm text-slate-700 space-y-2">
              <div className="grid grid-cols-3 gap-2">
                <dt className="col-span-1 text-slate-500">Address</dt>
                <dd className="col-span-2">123 Innovation Drive, Suite 400, San Francisco, CA</dd>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <dt className="col-span-1 text-slate-500">Phone</dt>
                <dd className="col-span-2">(415) 555-0127</dd>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <dt className="col-span-1 text-slate-500">Office Hours</dt>
                <dd className="col-span-2">Mon–Fri, 9:00am–6:00pm PT</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-responsive py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-sky-500 to-blue-700" />
          <span className="font-semibold text-slate-900">Aura AI</span>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="text-slate-600 hover:text-slate-900 no-underline">
              {s.label}
            </a>
          ))}
          <a href="#privacy" className="text-slate-600 hover:text-slate-900 no-underline">Privacy</a>
        </nav>
        <p className="text-sm text-slate-500">© 2024 Aura AI</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="font-sans">
      <NavBar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
