import listingImage from '../images/listing.webp';
import subscriptionsImage from '../images/subscriptions.webp';
import filteringImage from '../images/filtering.webp';
import postcardsImage from '../images/postcards.webp';

export type FeatureItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export const features: FeatureItem[] = [
  {
    id: '1',
    title: 'Filtering Feature',
    description:
      'Our filtering tool lets you easily sort through property listings, identifying homes that are furnished or empty.',
    image: filteringImage,
  },
  {
    id: '2',
    title: 'High-Intent Moving Leads',
    description:
      'Our platform filters listings to highlight homes that are actively preparing for a move, so you can connect with homeowners at the right time.',
    image: listingImage,
  },
  {
    id: '3',
    title: 'Postcards Design',
    description:
      'Gain access to beautifully designed postcards completely free. Choose a design and we’ll help you connect with homeowners effectively.',
    image: postcardsImage,
  },
  {
    id: '4',
    title: 'Smart Billing',
    description: 'Pay only for the counties that you need and use.',
    image: subscriptionsImage,
  },
];
