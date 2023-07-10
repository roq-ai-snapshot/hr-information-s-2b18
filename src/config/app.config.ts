export const appConfig = {
  ownerRoles: ['Admin'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Admin', 'Employee', 'HR Manager'],
  tenantName: 'Organization',
  applicationName: 'HR Information System',
  addOns: ['notifications', 'file upload', 'chat'],
} as const;
