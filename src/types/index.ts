export type Trimester = 1 | 2 | 3 | "postpartum";

export interface DiaryEntry {
  id: string;
  weekNumber: number;
  trimester: Trimester;
  date: string; // ISO format: YYYY-MM-DD
  formattedDate: string;
  title: string;
  excerpt: string;
  content: string[];
  tags: string[];
  symptoms: string[];
  babySize: {
    name: string;
    desertFruit: string;
    length: string;
    weight: string;
    milestone: string;
  };
  momdocHighlight: {
    title: string;
    summary: string;
    careType:
      | "Ultrasound"
      | "OB Checkup"
      | "OB Consultation"
      | "Glucose Test"
      | "Birth Plan"
      | "Postpartum Check";
  };
  tempeSpotlight: {
    location: string;
    description: string;
  };
  moodScore: number; // 1-5
  energyLevel: number; // 1-5
  readTime: string;
  coverImage: string;
  isMilestone?: boolean;
}

export interface MomDocClinicInfo {
  name: string;
  tagline: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  website: string;
  hours: string[];
  services: string[];
  tempeHighlights: string[];
}

export interface DesertMilestone {
  week: number;
  trimester: Trimester;
  fruitComparison: string;
  lengthInches: number;
  weightGrams: number;
  weightText: string;
  keyFeature: string;
  momdocMilestone: string;
}
