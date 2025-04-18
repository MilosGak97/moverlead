import { ClockIcon } from '@heroicons/react/24/outline';

export const CampaignSettings = () => {
  return (
    <div className="grid place-content-center mt-8">
      <div className="flex flex-col gap-4 items-center text-center">
        <ClockIcon className="text-primary w-16" />
        <h1 className="text-3xl font-bold text-slate-900">
          Campaign Settings Coming Soon!
        </h1>
        <p className="text-slate-700">
          We're building campaign settings to help you manage your leads. More
          info coming soon.
        </p>
      </div>
    </div>
  );
};
