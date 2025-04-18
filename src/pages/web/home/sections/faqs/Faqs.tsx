import { Container } from '../../../../../components/Container';
import backgroundImage from './images/background.jpg';

const faqs = [
  [
    {
      question: 'What is Mover Lead?',
      answer:
        'Mover Lead is a platform designed for moving and storage companies to identify high-intent moving leads. We use advanced filtering technology to analyze property listings and highlight furnished, move-ready homes.',
    },
    {
      question: 'How does your filtering feature work?',
      answer:
        'Our system analyzes Zillow photos and property details to determine if a home is furnished or empty. This helps moving companies target leads that are more likely preparing for a move.',
    },
    {
      question: 'What kind of property listings are available?',
      answer:
        'We provide access to real estate listings that are new on the market. Our filtering tool helps identify properties that are move-ready, allowing you to focus on homeowners who are more likely to need moving services.',
    },
  ],
  [
    {
      question: 'How does Mover Lead help with outreach?',
      answer:
        'Mover Lead offers multiple ways to connect with potential customers, including access to realtor information and tools for sending direct mail campaigns. You can generate label-ready documents for USPS, UPS, and other mailing services in just a few clicks.',
    },
    {
      question: 'Can I choose specific counties to target?',
      answer:
        'Yes! Our Smart Billing system allows you to pay only for the counties you need, ensuring you focus your efforts on the most relevant markets.',
    },
    {
      question: 'How often is the data updated?',
      answer:
        'Our property listings and filtering data are updated daily to ensure you have access to the most recent and relevant information.',
    },
  ],
  [
    {
      question: 'Do you provide contact details for homeowners?',
      answer:
        'While we focus on identifying high-intent moving leads, we do not provide direct homeowner contact information. However, you can leverage our platform to connect with realtors and optimize your outreach strategy.',
    },
    {
      question: 'How do I get started?',
      answer:
        'You can Create an Account on our platform or Schedule a Meeting with our team to learn more about how Mover Lead can help your business.',
    },
    {
      question:
        'What makes Mover Lead different from other lead generation platforms?',
      answer:
        'Unlike generic lead generation tools, Mover Lead specifically targets furnished, move-ready properties. Our AI-powered filtering technology ensures that you only spend time and resources on high-quality leads.',
    },
  ],
];

export const Faqs = () => {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <img
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
