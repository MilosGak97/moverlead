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
        className="bg-[#4379F2] hover:bg-[#365bb0] px-4 py-2 text-white cursor-pointer"
        onClick={() => setIsExpanded((prevState) => !prevState)}
      >
        {title || renderHeaderComponent}
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
