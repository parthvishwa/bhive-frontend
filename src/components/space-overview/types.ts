export type DayPassDiscountType  = {
  value: number;
  message: string;
}

export interface iSpace {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  googleMapsURL?: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  description: null;
  rules: null;
  amenities: string[] | null;
  images: string[];
  working_hours_start: string;
  working_hours_end: string;
  contact_person_name?: string;
  facilities: null;
  is_active: boolean;
  is_day_pass_enabled: boolean;
  day_pass_price: number;
  day_pass_discounts_percentage: { [key: string]: DayPassDiscountType };
  managerID: null;
  canEdit?: boolean;
}

export type amenityType = {
  name: string;
  iconsrc: SVGElement;
};
