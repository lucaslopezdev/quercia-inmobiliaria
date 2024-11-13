export interface Property {
  code: string;
  image: string;
  value: number;
  expenses: string | null;
  symbol: string;
  address: string;
  location: string;
  total_surface: number;
  covered_surface: number;
  spaces: number;
  rooms: number;
  bathrooms: number;
  description: string;
  summary: string;
  age: number;
  details: any[];
  type: string;
  featured: boolean
}