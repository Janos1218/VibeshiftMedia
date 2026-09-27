export type PackageType = 'lathatosag' | 'motor' | 'piacvezeto' | 'pilot';

export interface BookingData {
  name: string;
  phone: string;
  email: string;
  businessName: string;
  businessType: string;
  selectedPackage: PackageType;
  date: string;
  timeSlot: string;
  notes?: string;
}

export type LegalModalType = 'impresszum' | 'gdpr' | 'aszf' | 'dpa' | null;
