import { ChevronDownIcon } from '@heroicons/react/16/solid';

interface Tab {
    name: string;
    current: boolean;
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
            <div className="grid grid-cols-1 sm:hidden mt-8">
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    defaultValue={tabs.find((tab) => tab.current)?.name || ""}
                    onChange={(e) => onTabClick(e.target.value)}
                    aria-label="Select a tab"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:outline-[#4379F2]"
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>

                <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
                />
            </div>
            <div className="hidden sm:block">
                <nav aria-label="Tabs" className="isolate flex divide-x divide-gray-200 rounded-lg shadow">
                    {tabs.map((tab, tabIdx) => (
                        <button
                            key={tab.name}
                            onClick={() => onTabClick(tab.name)}
                            aria-current={tab.current ? 'page' : undefined}
                            className={classNames(
                                tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                                tabIdx === 0 ? 'rounded-l-lg' : '',
                                tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                                'group relative min-w-0 flex-1 overflow-hidden bg-white px-4 py-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10',
                            )}
                        >
                            <span>{tab.name}</span>
                            <span
                                aria-hidden="true"
                                className={classNames(
                                    tab.current ? 'bg-[#4379F2]' : 'bg-transparent',
                                    'absolute inset-x-0 bottom-0 h-0.5',
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
