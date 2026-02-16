
import React from 'react';
import { Service, Vehicle, ContactInfo } from './types';

export const LOGO_URL = "https://github.com/richdadpoordad78-creator/logo/blob/main/01b83e2a-449e-4ddb-b2ec-7816cbdb2073.jpg?raw=true";

const IconWrapper = ({ children }: { children?: React.ReactNode }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

export const SERVICES: Service[] = [
  {
    id: 'airport',
    title: 'Airport Concierge',
    description: 'Bespoke, punctual transfers to DFW and Love Field with real-time flight monitoring and gate-side coordination.',
    icon: (
      <IconWrapper>
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-1.1-.3-2.2.4-2.4 1.4l-.4 2.2c-.2.9.4 1.8 1.3 2.1L10.7 14l-3.5 3.5-3 .3c-.5 0-.9.3-1.1.7L2 20c0 .5.5 1 1 1l1.5-1.1c.4-.2.7-.6.7-1.1l.3-3 3.5-3.5 1.6 6.9c.2.9 1.1 1.5 2 1.3l2.2-.4c1-.2 1.7-1.3 1.4-2.4Z" />
      </IconWrapper>
    )
  },
  {
    id: 'north-dallas',
    title: 'North Dallas Priority',
    description: 'Specialized local coverage spanning Plano, Frisco, and McKinney with hyper-local navigational expertise.',
    icon: (
      <IconWrapper>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </IconWrapper>
    )
  },
  {
    id: 'on-demand',
    title: 'On-Demand Elite',
    description: 'Instant luxury dispatch at your fingertips. The convenience of ride-sharing paired with the standards of a private chauffeur.',
    icon: (
      <IconWrapper>
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
        <path d="M17 7 7 17" />
        <path d="m17 17-5-5" />
      </IconWrapper>
    )
  },
  {
    id: 'party-bus',
    title: 'Celebration Fleet',
    description: 'High-capacity luxury environments for gala events and private celebrations, featuring premium lounge seating.',
    icon: (
      <IconWrapper>
        <path d="M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M18 16V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v10" />
        <path d="M18 12h2" />
        <path d="M4 12h2" />
        <rect width="20" height="8" x="2" y="14" rx="2" />
        <path d="M6 18h.01" />
        <path d="M18 18h.01" />
      </IconWrapper>
    )
  },
  {
    id: 'private-transport',
    title: 'Executive Shield',
    description: 'The definitive choice for secure, discrete transportation tailored for dignitaries and high-profile executives.',
    icon: (
      <IconWrapper>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </IconWrapper>
    )
  }
];

export const VEHICLES: Vehicle[] = [
  {
    id: 'escalade',
    name: 'Cadillac Escalade',
    capacity: 'Executive Class',
    description: 'The pinnacle of American luxury. Meticulously maintained for absolute comfort and status.',
    imageUrl: 'https://images.unsplash.com/photo-1574707128808-ab6634334eb2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'suburban',
    name: 'Chevrolet Suburban',
    capacity: 'Elite Transport',
    description: 'Unmatched versatility and refined presence. The gold standard for group executive travel.',
    imageUrl: 'https://imagecdnsa.zigwheels.ae/large/gallery/exterior/6/2155/chevrolet-suburban-2025-front-angle-low-view-392984.jpg'
  },
  {
    id: 'avanza',
    name: 'Toyota Avanza',
    capacity: 'Business Select',
    description: 'Efficient and dependable. A practical choice for streamlined navigation in North Dallas.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPDMcOiIANMSudQOAK1s4JZj0suihveZ_cVQ&s'
  },
  {
    id: 'partybus',
    name: 'Party Bus',
    capacity: 'Celebration Class',
    description: 'A mobile lounge environment designed for high-profile group events and celebrations.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7s0ceYOpVf4kUth8bA2ZMbFnXz2mlS0blRA&s'
  }
];

export const CONTACT_INFO: ContactInfo = {
  phone: '+1 214 694 32 04',
  email: 'ronneaslanibusiness@gmail.com',
  whatsapp: '12146943204'
};
