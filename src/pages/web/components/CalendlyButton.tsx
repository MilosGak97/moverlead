import { PopupButton } from 'react-calendly';
import { twMerge } from 'tailwind-merge';

type CalendlyButtonProps = {
  text?: string;
  className?: string;
};

export const CalendlyButton = ({
  text = 'Schedule a meeting!',
  className,
}: CalendlyButtonProps) => {
  return (
    <PopupButton
      url="https://calendly.com/moverlead-support/30min"
      rootElement={document.getElementById('root') as HTMLElement}
      text={text}
      className={twMerge(
        'px-3 py-2 bg-primary hover:bg-primaryHover active:bg-primaryActive text-white rounded-full border border-white text-sm',
        className
      )}
    />
  );
};
