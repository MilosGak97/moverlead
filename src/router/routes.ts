export const routes = {
  web: {
    root: '/',
    contactUs: '/contact-us',
    blogs: {
      root: '/blogs',
      blogDetails: '/blogs/:blogId',
    },
  },
  auth: {
    root: '/auth',
    login: '/auth/login',
    register: '/auth/register',
    forgotPassword: '/auth/forgot-password',
  },
  verify: {
    root: '/verify',
    setPassword: '/verify/set-password',
    notVerifiedEmail: '/verify/not-verified-email',
  },
  resetPassword: '/reset-password',
  verifyEmail: '/verify-email',
  dashboard: '/portal/dashboard',
  listing: '/portal/listings',
  filtering: '/portal/filtering',
  order: '/portal/order',
  subscriptions: '/portal/subscriptions',
  settings: '/portal/settings',
  successfullSubscription: '/portal/successfull-subscription',
  postcardDesigns: '/portal/postcard-designs',
};
