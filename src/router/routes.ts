export const routes = {
  auth: {
    root: '/auth',
    login: '/auth/login',
    register: '/auth/register',
    verifyEmail: '/auth/verify-email',
    forgotPassword: '/auth/forgot-password',
  },
  verify: {
    root: '/verify',
    setPassword: '/verify/set-password',
  },
  dashboard: '/portal/dashboard',
  listing: '/portal/listings',
  filtering: '/portal/filtering',
  order: '/portal/order',
  subscriptions: '/portal/subscriptions',
  settings: '/portal/settings',
  successfullSubscription: '/portal/successfull-subscription',
};
