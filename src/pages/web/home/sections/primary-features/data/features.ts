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
      'Our platform highlights homes getting ready for a move, helping you connect with motivated homeowners at the right time.',
    image: listingImage,
  },
  {
    id: '3',
    title: 'Postcards Design',
    description:
      'Choose from a variety of free postcard templates and connect with homeowners in a more personal and effective way.',
    image: postcardsImage,
  },
  {
    id: '4',
    title: 'Smart Billing',
    description:
      'Only pay for the counties you’re actively using, with transparent pricing and full control over your monthly spending.',
    image: subscriptionsImage,
  },
];
