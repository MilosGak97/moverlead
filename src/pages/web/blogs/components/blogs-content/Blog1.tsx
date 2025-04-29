import blogOneImage from '../../images/blog1.webp';

export const Blog1 = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 lg:mb-10">
        📦 MoverLead.com: The Apple of Moving Leads - How We Redefine the
        Industry
      </h1>
      <div className="flex flex-col gap-4 text-slate-700">
        <div className="rounded-2xl overflow-hidden mb-4 border border-slate-200">
          <img
            src={blogOneImage}
            alt="Grow your moving business"
            className="w-full"
          />
        </div>
        <h2 className="font-display text-2xl tracking-tight font-bold text-slate-900">
          When it comes to finding high-quality moving leads, not all platforms
          are created equal.
        </h2>
        <p>
          MoverLead.com has set a new standard, offering unmatched technology,
          fresher data, and a client-first approach that helps moving companies
          grow faster and smarter. Here's why MoverLead.com stands out from the
          rest:
        </p>
        <div className="py-4 flex flex-col gap-4 border-y border-slate-500">
          <h2 className="font-display text-2xl tracking-tight font-bold text-slate-900">
            Why MoverLead.com Stands Out
          </h2>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium text-slate-900">
              Exclusive Filtering Tool
            </h3>
            <p>
              MoverLead.com is the only platform that provides a powerful
              filtering tool directly on the dashboard. Leads can be easily
              filtered from a desktop or mobile device by swiping left for empty
              homes and right for occupied ones. No other lead provider offers
              this kind of simplicity and control, especially on mobile.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium text-slate-900">
              Fresh Data Every 6 Hours
            </h3>
            <p>
              While other lead companies refresh their databases once a day,
              MoverLead.com updates automatically every 6 hours. This means
              access to the newest property listings much faster, giving moving
              companies a real edge in reaching homeowners first.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium text-slate-900">
              Credit-Based Pricing Model
            </h3>
            <p>
              Unlike traditional lead providers that lock clients into expensive
              monthly tiers, MoverLead.com operates on a credit system. Clients
              pay only for the homeowner information they select. This
              pay-per-lead approach is significantly more cost-effective,
              allowing companies to control their budgets and pay for only what
              they actually use.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium text-slate-900">
              Free Professional Postcard Design
            </h3>
            <p>
              MoverLead.com doesn't just provide leads - it helps moving
              companies market smarter. Every client receives free professional
              postcard designs, making it easier to launch effective direct mail
              campaigns without the extra cost.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium text-slate-900">
              An Apple-Level User Experience
            </h3>
            <p>
              MoverLead.com brings a user experience to the moving industry
              that's comparable to what Apple did for technology. It's simple,
              intuitive, and powerful - a system designed to help movers
              dominate their local markets with less effort and greater results.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 pb-4 border-b border-slate-500">
          <h2 className="font-display text-2xl tracking-tight font-bold text-slate-900">
            Trusted by Leading Movers
          </h2>
          <p>
            Many top moving companies, such as{' '}
            <a
              href="https://www.vanexpressmoving.com"
              target="_blank"
              className="text-primary hover:text-primaryHover active:text-primaryActive font-medium"
            >
              Van Express Moving
            </a>{' '}
            and{' '}
            <a
              href="https://www.vitemoving.com"
              target="_blank"
              className="text-primary hover:text-primaryHover active:text-primaryActive font-medium"
            >
              Vite Moving
            </a>
            , rely on MoverLead.com to power their growth with fresh,
            high-quality leads refreshed every 6 hours.
          </p>
        </div>
        <h2 className="font-display text-2xl tracking-tight font-bold text-slate-900">
          Trusted by Leading Movers
        </h2>
        <p>
          Stop settling for outdated leads and rigid pricing. Switch to
          MoverLead.com today - and be the mover everyone calls first.
        </p>
      </div>
    </div>
  );
};
