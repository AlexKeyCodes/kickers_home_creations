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

  // Images for the Services carousel (vertical/portrait crop)
  serviceImages: [
    'assets/images/kitchen_island.jpg',
    'assets/images/kitchen_island2.jpg',
    'assets/images/full_bath.jpg',
    'assets/images/full_bath2.jpg',
    'assets/images/full_bath3.jpg',
    'assets/images/full_bath4.jpg',
    'assets/images/bathroom_tub.jpg',
    'assets/images/bathroom_vanity.jpg',
    'assets/images/bathroom_tile.jpg',
    'assets/images/bathroom_tile2.jpg',
  ],

  // Project progression spotlight (Portfolio section)
  projectSpotlight: {
    eyebrow: 'Project Spotlight',
    title: 'From Framing to Finished',
    description: 'Follow one of our custom fireplace feature walls from rough framing all the way to the finished marble surround.',
    steps: [
      {
        image: 'assets/images/living_room1.jpg',
        stage: 'Framing',
        caption: 'Custom built-in framing for the new fireplace and media wall.',
      },
      {
        image: 'assets/images/living_room2.jpg',
        stage: 'Tile Prep',
        caption: 'Backerboard installed and the firebox opening framed out.',
      },
      {
        image: 'assets/images/living_room3.jpg',
        stage: 'Finished',
        caption: 'Floor-to-ceiling marble surround with a linear fireplace and mounted TV.',
      },
    ],
  },
}
