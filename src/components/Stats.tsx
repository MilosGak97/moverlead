import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

type StatsProps = {
  lastMonthCount: number;
  thisMonthCount: number;
  todayCount: number;
};

export const Stats = ({
  lastMonthCount,
  thisMonthCount,
  todayCount,
}: StatsProps) => {
  const stats = [
    {
      id: 1,
      name: 'Last Month',
      stat: lastMonthCount,
      icon: UsersIcon,
      change: '122',
      changeType: 'increase',
    },
    {
      id: 2,
      name: 'Current Month',
      stat: thisMonthCount,
      icon: EnvelopeOpenIcon,
      change: '8',
      changeType: 'increase',
    },
    {
      id: 3,
      name: 'Today',
      stat: todayCount,
      icon: CursorArrowRaysIcon,
      change: '4',
      changeType: 'increase',
    },
  ];

  return (
    <div>
      <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-blue-500 p-3">
                <item.icon aria-hidden="true" className="size-6 text-white" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">
                {item.stat}
              </p>
              <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-blue-500 hover:text-blue-600"
                  >
                    View all<span className="sr-only"> {item.name} stats</span>
                  </a>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
