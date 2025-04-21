import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { routes } from '../../../../router/routes';
import { useNavigate } from 'react-router-dom';
import { settingsTabs } from '../../settings/Settings';

const actions = [
  {
    title: 'Get Listings',
    description:
      'A list of all properties that are on the market in the selected areas.',
    path: routes.listing,
    icon: ClockIcon,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
  },
  {
    title: 'Filter new properties',
    description:
      'Quickly review and categorize properties based on interior photos.',
    path: routes.filtering,
    icon: CheckBadgeIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    title: 'Subscribe to new areas',
    description:
      'Select and activate subscriptions for new areas to expand your reach.',
    path: routes.order,
    icon: UsersIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  {
    title: 'See past orders',
    path: routes.subscriptions,
    description:
      'Review your previous subscriptions and payment history in one place.',
    icon: BanknotesIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'Change account informations',
    description:
      'Update your company details such as name, email, and other basic info.',
    path: routes.settings,
    icon: ReceiptRefundIcon,
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
  },
  {
    title: 'Update Password',
    description: 'Set a new password to keep your account secure.',
    path: `${routes.settings}?tab=${settingsTabs[1].name}`,
    icon: AcademicCapIcon,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const DashboardGridList = () => {
  const navigate = useNavigate();

  return (
    <div className="divide-y mt-8 divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
      {actions.map(
        (
          {
            title,
            iconBackground,
            iconForeground,
            description,
            path,
            icon: Icon,
          },
          actionIdx
        ) => (
          <div
            key={title}
            className={classNames(
              actionIdx === 0
                ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                : '',
              actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
              actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
              actionIdx === actions.length - 1
                ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                : '',
              'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 cursor-pointer hover:bg-gray-50'
            )}
          >
            <div>
              <span
                className={classNames(
                  iconBackground,
                  iconForeground,
                  'inline-flex rounded-lg p-3 ring-4 ring-white'
                )}
              >
                <Icon aria-hidden="true" className="size-6" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-base font-semibold text-gray-900">
                <a
                  className="focus:outline-none"
                  onClick={() => navigate(path)}
                >
                  {/* Extend touch target to entire panel */}
                  <span aria-hidden="true" className="absolute inset-0" />
                  {title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-500">{description}</p>
            </div>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="size-6">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        )
      )}
    </div>
  );
};
