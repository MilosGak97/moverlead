interface Tab {
  name: string;
  isSelected: boolean;
}

interface TabProps {
  tabs: Tab[];
  onTabClick: (name: string) => void;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Tabs = ({ tabs, onTabClick }: TabProps) => {
  return (
    <div>
      <div>
        <nav
          aria-label="Tabs"
          className="isolate flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-200 rounded-lg shadow"
        >
          {tabs.map((tab, tabIdx) => (
            <button
              key={tab.name}
              onClick={() => onTabClick(tab.name)}
              aria-current={tab.isSelected ? 'page' : undefined}
              className={classNames(
                tab.isSelected
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-700',
                tabIdx === 0 ? 'rounded-l-lg' : '',
                tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                'group relative min-w-0 flex-1 overflow-hidden bg-white px-4 py-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10'
              )}
            >
              <span>{tab.name}</span>
              <span
                aria-hidden="true"
                className={classNames(
                  tab.isSelected ? 'bg-primary' : 'bg-transparent',
                  'absolute inset-x-0 bottom-0 h-0.5'
                )}
              />
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Tabs;
