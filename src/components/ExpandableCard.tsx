import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { ReactNode, useState } from 'react';

type ExpandableCardProps = {
  children: ReactNode;
  title?: string;
  renderHeaderComponent?: ReactNode;
};

export const ExpandableCard = ({
  title,
  renderHeaderComponent,
  children,
}: ExpandableCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="rounded-lg border overflow-hidden">
      <div
        className="bg-primary hover:bg-primaryHover px-4 py-2 text-white cursor-pointer flex items-center gap-4"
        onClick={() => setIsExpanded((prevState) => !prevState)}
      >
        {title || renderHeaderComponent}
        <ChevronDownIcon
          className={`size-5 transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </div>
      <div
        className={`grid transition-all ${
          isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div
          className="min-h-0 overflow-hidden
"
        >
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
