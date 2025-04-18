import screenshotExpenses from '../../../images/screenshots/expenses.png';
import screenshotPayroll from '../../../images/screenshots/payroll.png';
import screenshotReporting from '../../../images/screenshots/reporting.png';
import screenshotVatReturns from '../../../images/screenshots/vat-returns.png';

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
    image: screenshotPayroll,
  },
  {
    id: '2',
    title: 'Property Listings Management',
    description:
      'All property listings in one place for seamless management. Filter, organize, and target the right leads effortlessly',
    image: screenshotExpenses,
  },
  {
    id: '3',
    title: 'Realtors Information',
    description:
      'Gain access to realtor information including details to help you connect and enhance your outreach strategy.',
    image: screenshotVatReturns,
  },
  {
    id: '4',
    title: 'Smart Billing',
    description: 'Pay only for the counties that you need and use.',
    image: screenshotReporting,
  },
];
