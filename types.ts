
import { ReactNode } from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Vehicle {
  id: string;
  name: string;
  capacity: string;
  description: string;
  imageUrl: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
}

export enum SectionId {
  Home = 'home',
  Services = 'services',
  Fleet = 'fleet',
  Booking = 'booking',
  Contact = 'contact'
}
