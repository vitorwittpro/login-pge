export const DeviceType = {
    MOBILE: 'MOBILE',
    DESKTOP: 'DESKTOP',
  } as const;
  
  export type DeviceType = keyof typeof DeviceType;
  