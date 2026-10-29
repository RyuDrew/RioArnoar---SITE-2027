export interface RegionInfo {
  id: string;
  name: string;
  state: string;
  tagline: string;
  beaches: string[];
  audienceEstimate: string;
  flightTimeAvg: string;
  image: string;
  highlights: string[];
}

export interface BannerFormat {
  id: string;
  name: string;
  dimensions: string;
  audienceImpact: string;
  bestFor: string;
  description: string;
  specs: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'beverage' | 'retail' | 'real-estate' | 'events';
  categoryLabel: string;
  beach: string;
  client: string;
  impactReach: string;
  image: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  verifiedFlight: string;
}
