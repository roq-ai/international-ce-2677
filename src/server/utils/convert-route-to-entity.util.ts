const mapping: Record<string, string> = {
  admins: 'admin',
  certificates: 'certificate',
  organizations: 'organization',
  subscribers: 'subscriber',
  subscriptions: 'subscription',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
