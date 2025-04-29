import { Blog1 } from '../components/blogs-content/Blog1';
import { Blog2 } from '../components/blogs-content/Blog2';
import blogOneImage from '../images/blog1.webp';
import blogTwoImage from '../images/blog2.webp';

export const blogPosts = [
  {
    id: '1',
    coverUrl: blogOneImage,
    date: '04/28/2025',
    title:
      '📦 MoverLead.com: The Apple of Moving Leads - How We Redefine the Industry',
    description: `Discover why MoverLead.com is the leading choice for moving companies. With exclusive filtering tools, fresh data every 6 hours, a pay-per-lead system, and free postcard design, it's the Apple of moving leads.`,
    content: <Blog1 />,
  },
  {
    id: '2',
    coverUrl: blogTwoImage,
    date: '04/29/2025',
    title:
      'Why “Old” Leads Are Costing Moving Companies Thousands — And How to Fix It',
    description: `Discover why MoverLead.com is the leading choice for moving companies. With exclusive filtering tools, fresh data every 6 hours, a pay-per-lead system, and free postcard design, it's the Apple of moving leads.`,
    content: <Blog2 />,
  },
];
