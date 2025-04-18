import { twMerge } from 'tailwind-merge';

type SectionHeaderProps = {
  title: string;
  description: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export const SectionHeader = ({
  title,
  description,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) => {
  return (
    <div className="max-w-xl md:mx-auto md:text-center xl:max-w-none">
      <h2
        className={twMerge(
          'font-display text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl',
          titleClassName
        )}
      >
        {title}
      </h2>
      <p
        className={twMerge(
          'mt-6 text-lg tracking-tight text-slate-700',
          descriptionClassName
        )}
      >
        {description}
      </p>
    </div>
  );
};
