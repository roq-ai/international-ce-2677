interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Organization Owner'],
  customerRoles: [],
  tenantRoles: ['Organization Owner', 'Administrator', 'Subscriber'],
  tenantName: 'Organization',
  applicationName: 'International Certificate Course',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage users', 'Manage organizations', 'Manage certificates', 'Manage subscriptions'],
  getQuoteUrl: 'https://app.roq.ai/proposal/4a368359-b23a-4009-af30-e8ffcc994762',
};
