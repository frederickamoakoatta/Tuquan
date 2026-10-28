export type Destination = {
  id: string
  city: string
  country: string
  title: string
  days: string
  budget: string
  tags: string[]
  summary: string
  visa: string
  visaNote: string
  visaLabel: string
  airport: string
  airportDetail: string
  travelTime: string
  travelFrom: string
  image: string
}

export const destinations: Destination[] = [
  {
    id: 'bali',
    city: 'Bali',
    country: 'Indonesia',
    title: 'Bali Beaches & Rice Terraces, Indonesia',
    days: '8 days',
    budget: 'USD 1,500–2,300',
    tags: ['beaches', 'temples', 'tropical'],
    summary:
      'Bali is made for unhurried sunny days. Spend mornings among Ubud temples and rice terraces, then evenings on Canggu beaches, clubs, and sunset warungs by the water.',
    visa: "From Canada to Indonesia, you're eligible for a 30-day visa on arrival.",
    visaNote: 'Visa on arrival',
    visaLabel: 'On Arrival',
    airport: 'DPS',
    airportDetail: '13 km from Kuta',
    travelTime: '16h 30m',
    travelFrom: 'from Toronto',
    image: '/images/destinations/tequan-slider-04.webp',
  },
  {
    id: 'london',
    city: 'London',
    country: 'United Kingdom',
    title: 'London Palaces & West End, United Kingdom',
    days: '5 days',
    budget: 'USD 2,100–3,000',
    tags: ['culture', 'history', 'nightlife'],
    summary:
      'London mixes royal history with neighborhood energy. Walk palaces and parks by day, then theatres, markets, and late pubs from Covent Garden to Shoreditch after dark.',
    visa: "From Canada to the UK, you're eligible for a 180-day visa-free stay.",
    visaNote: 'Visa not required',
    visaLabel: 'Visa Free',
    airport: 'LHR',
    airportDetail: '23 km from the city center',
    travelTime: '7h 20m',
    travelFrom: 'from Toronto',
    image: '/images/destinations/tequan-slider-02.webp',
  },
  {
    id: 'dubai',
    city: 'Dubai',
    country: 'United Arab Emirates',
    title: 'Dubai Marina & Desert Dunes, UAE',
    days: '6 days',
    budget: 'USD 2,400–3,400',
    tags: ['luxury', 'desert', 'skyline'],
    summary:
      'Dubai is built for bold skyline contrast. Split days between Marina towers and the old souks, then add a desert evening and one quieter morning along the Palm.',
    visa: "From Canada to the UAE, you're eligible for a 30-day visa-free stay.",
    visaNote: 'Visa not required',
    visaLabel: 'Visa Free',
    airport: 'DXB',
    airportDetail: '5 km from Deira',
    travelTime: '12h 50m',
    travelFrom: 'from Toronto',
    image: '/images/destinations/tequan-slider-03.webp',
  },
]
