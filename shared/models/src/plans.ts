export interface Credits {
  gpuHoursPerMonth: number;
  cpuHoursPerMonth: number;
  maxFileUploads: number;
}

export enum PlanId {
  None = '',
  Admin = 'admin',
  Beta = 'beta',
  BetaBacker = 'beta-backer'
}

export const PlanCredits = new Map<string, Credits>([
  [PlanId.None, { gpuHoursPerMonth: 0, cpuHoursPerMonth: 0, maxFileUploads: 0 }],
  [PlanId.Admin, { gpuHoursPerMonth: Number.POSITIVE_INFINITY, cpuHoursPerMonth: Number.POSITIVE_INFINITY, maxFileUploads: 20 }],
  [PlanId.Beta, { gpuHoursPerMonth: 0, cpuHoursPerMonth: 72, maxFileUploads: 5 }],
  [PlanId.BetaBacker, { gpuHoursPerMonth: 20, cpuHoursPerMonth: 72, maxFileUploads: 10 }]
]);
