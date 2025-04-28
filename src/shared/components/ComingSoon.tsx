import { ClockIcon } from '@heroicons/react/20/solid';

type ComingSoonProps = {
  title: string;
  description: string;
};

export const ComingSoon = ({ title, description }: ComingSoonProps) => {
  return (
    <div className="grid place-content-center">
      <div className="flex flex-col gap-4 items-center text-center">
        <ClockIcon className="text-primary w-16" />
        <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
        <p className="text-slate-700">{description}</p>
      </div>
    </div>
  );
};
