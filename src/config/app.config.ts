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
  ownerRoles: ['Store Manager'],
  customerRoles: [],
  tenantRoles: ['Store Manager', 'Inventory Manager'],
  tenantName: 'Organization',
  applicationName: 'Online Grocery Store',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage Organization profile',
    'Invite Inventory Manager to Organization',
    'View product listings',
    'Manage special offers for products',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/c36d8427-c5ae-4e69-b751-252613fb0e3d',
};
