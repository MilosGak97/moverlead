import { SubscriptionStatus } from '../../../../enums/subscriptionStatus';
import { SubscriptionStatusState } from '../Subscriptions';

export const subscriptionStatusOptions: SubscriptionStatusState[] = [
  { id: SubscriptionStatus.ACTIVE, name: 'Active' },
  { id: SubscriptionStatus.INCOMPLETE, name: 'Incomplete' },
  { id: SubscriptionStatus.INCOMPLETE_EXPIRED, name: 'Incomplete expired' },
  { id: SubscriptionStatus.TRAILING, name: 'Trailing' },
  { id: SubscriptionStatus.UNPAID, name: 'Unpaid' },
  { id: SubscriptionStatus.PAST_DUE, name: 'Past due' },
  { id: SubscriptionStatus.PAUSED, name: 'Paused' },
  { id: SubscriptionStatus.CANCELED, name: 'Canceled' },
];
