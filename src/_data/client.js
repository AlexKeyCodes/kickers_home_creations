module.exports = {
  // Basic Business Information
  name: 'Kickers Low Country Home Creations',

  // Page Content
  hero_title: 'Kitchen & Bath Remodeling Done Right',
  hero_subtitle: 'Charleston-area kitchen and bathroom remodels built on quality craftsmanship, honest pricing, and dependable service.',
  about_title: 'About Us',
  about_desc_one: 'Kickers Low Country Home Creations LLC is a small, locally owned construction company serving Charleston, South Carolina and the surrounding Low Country. We specialize in home builds, renovations, and remodeling with a focus on quality and customer satisfaction.',
  about_desc_two: 'From kitchen and bathroom remodels to additions and custom carpentry, our experienced team handles every project with care and attention to detail. We pride ourselves on clear communication, honest pricing, and craftsmanship that stands the test of time.',
  about_desc_three: 'Whether you are updating a single room or building something entirely new, we work closely with you from the first consultation to the final walkthrough to make sure the finished result is exactly what you imagined.',

  // Contact Information
  address: {
    city: 'Charleston',
    state: 'SC',
  },
  phone: '(608) 346-3448',
  email: 'kickerservices@outlook.com',
  domain: 'https://kickershomecreations.com',

  // Business Hours
  hours: {
    schedule: [
      { day: 'Monday - Friday', lunch: '7:00am - 5:00pm', dinner: '' },
      { day: 'Saturday', lunch: 'By Appointment', dinner: '' },
      { day: 'Sunday', lunch: 'Closed', dinner: '' },
    ],
  },


  // Services (Services section)
  services: [
    {
      icon: 'kitchen',
      title: 'Kitchen Remodel',
      description: 'Custom cabinets, countertops, tile, and lighting — full kitchen transformations built to last.',
    },
    {
      icon: 'bath',
      title: 'Bath Remodel',
      description: 'Tubs, showers, vanities, and tile work that turn dated bathrooms into relaxing retreats.',
    },
    {
      icon: 'handyman',
      title: 'Handyman',
      description: 'Repairs, installs, and the small projects on your list — done right the first time.',
    },
    {
      icon: 'punchlist',
      title: 'Real Estate Punch List',
      description: 'Fast, reliable pre-sale and post-inspection fixes to get properties market-ready.',
    },
  ],

  // Images for the Services carousel (vertical/portrait crop).
  // { src (jpg fallback), webp (preferred), alt }
  serviceImages: [
    { src: 'assets/images/kitchen_island.jpg',  webp: 'assets/images/kitchen_island.webp',  alt: 'Remodeled kitchen with a custom island and new cabinetry' },
    { src: 'assets/images/kitchen_island2.jpg', webp: 'assets/images/kitchen_island2.webp', alt: 'Updated kitchen island with stone countertops' },
    { src: 'assets/images/full_bath.jpg',       webp: 'assets/images/full_bath.webp',       alt: 'Fully remodeled bathroom with a tiled shower' },
    { src: 'assets/images/full_bath2.jpg',      webp: 'assets/images/full_bath2.webp',      alt: 'Bathroom renovation with custom tile and a glass shower' },
    { src: 'assets/images/full_bath3.jpg',      webp: 'assets/images/full_bath3.webp',      alt: 'Renovated bathroom with a walk-in tiled shower' },
    { src: 'assets/images/full_bath4.jpg',      webp: 'assets/images/full_bath4.webp',      alt: 'Modern bathroom remodel with new fixtures and tile' },
    { src: 'assets/images/bathroom_tub.jpg',    webp: 'assets/images/bathroom_tub.webp',    alt: 'Bathroom remodel featuring a new soaking tub' },
    { src: 'assets/images/bathroom_vanity.jpg', webp: 'assets/images/bathroom_vanity.webp', alt: 'New bathroom vanity and fixtures after a remodel' },
    { src: 'assets/images/bathroom_tile.jpg',   webp: 'assets/images/bathroom_tile.webp',   alt: 'Custom tile work in a remodeled bathroom' },
    { src: 'assets/images/bathroom_tile2.jpg',  webp: 'assets/images/bathroom_tile2.webp',  alt: 'Detailed shower tile work in a bathroom remodel' },
  ],

  // Project progression spotlight (Portfolio section)
  projectSpotlight: {
    eyebrow: 'Project Spotlight',
    title: 'From Framing to Finished',
    description: 'Follow one of our custom fireplace feature walls from rough framing all the way to the finished marble surround.',
    steps: [
      {
        image: 'assets/images/living_room1.jpg',
        webp: 'assets/images/living_room1.webp',
        stage: 'Framing',
        caption: 'Custom built-in framing for the new fireplace and media wall.',
      },
      {
        image: 'assets/images/living_room2.jpg',
        webp: 'assets/images/living_room2.webp',
        stage: 'Tile Prep',
        caption: 'Backerboard installed and the firebox opening framed out.',
      },
      {
        image: 'assets/images/living_room3.jpg',
        webp: 'assets/images/living_room3.webp',
        stage: 'Finished',
        caption: 'Floor-to-ceiling marble surround with a linear fireplace and mounted TV.',
      },
    ],
  },

  // Customer testimonials (Reviews section).
  // ⚠️ SAMPLE DATA — these are placeholder reviews for design preview only.
  // REPLACE every entry below with real, client-provided testimonials before
  // launch. Never present invented reviews as genuine to the public.
  // Each entry: { quote, name, location, rating (1-5) }
  testimonials: [
    {
      quote:
        'Kickers gutted our dated kitchen and gave us exactly what we pictured — new cabinets, quartz counters, and tile that looks incredible. The crew was on time every day and cleaned up before they left.',
      name: 'Sarah M.',
      location: 'Mount Pleasant, SC',
      rating: 5,
    },
    {
      quote:
        'Our master bath remodel went smoother than we expected. They walked us through the budget up front, stuck to the timeline, and the new walk-in shower is beautiful. Honest, dependable work.',
      name: 'David R.',
      location: 'Summerville, SC',
      rating: 5,
    },
    {
      quote:
        'We hired them for a punch list before selling our house and ended up having them back for a full kitchen update. Quality craftsmanship and they actually communicate. Highly recommend.',
      name: 'Karen T.',
      location: 'James Island, SC',
      rating: 5,
    },
  ],

  // Frequently asked questions (FAQ section). { question, answer }
  faqs: [
    {
      question: 'What areas do you serve?',
      answer:
        'We serve Charleston, South Carolina and the surrounding Low Country. If you are nearby and not sure whether you are in our service area, reach out and just ask — we are happy to let you know.',
    },
    {
      question: 'Do you offer free quotes?',
      answer:
        'Yes. We provide free, no-obligation quotes on every project. Tell us what you have in mind and we will walk you through the scope, timeline, and pricing before any work begins.',
    },
    {
      question: 'What types of projects do you take on?',
      answer:
        'Our focus is kitchen and bathroom remodels, but we also handle handyman work, real estate punch lists, additions, and custom carpentry. Whether it is a single-room update or a larger renovation, we are glad to talk it through.',
    },
    {
      question: 'How long will my remodel take?',
      answer:
        'It depends on the size and scope of the work — a small bathroom refresh moves much faster than a full kitchen renovation. We give you a realistic timeline as part of your quote so you know what to expect from start to finish.',
    },
    {
      question: 'How do we get started?',
      answer:
        'The first step is a free consultation. Send us a message through the quote form or give us a call, and we will set up a time to discuss your project, look at the space, and put together a detailed quote.',
    },
  ],
}
