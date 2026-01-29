
import React from 'react';
import { 
  Users, BookOpen, Calendar, ShieldCheck, 
  MapPin, Phone, Mail, Award, Rocket, Palette 
} from 'lucide-react';
import { NewsItem, Club, FacultyMember, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: 'home' },
  { label: 'About Us', path: 'about' },
  { label: 'Academics', path: 'academics' },
  { label: 'Admissions', path: 'admissions' },
  { label: 'Student Life', path: 'student-life' },
  { label: 'Portal', path: 'portal' },
  { label: 'Contact', path: 'contact' },
];

export const NEWS_TICKER: NewsItem[] = [
  { id: '1', title: 'Upcoming Science Fair: Register by Oct 15th!', date: '2024-10-01', category: 'Event' },
  { id: '2', title: 'New STEM Program launched for Grades 9-10.', date: '2024-09-28', category: 'Update' },
  { id: '3', title: 'Admissions open for the Academic Year 2024-25.', date: '2024-09-25', category: 'News' },
];

export const CLUBS: Club[] = [
  { 
    name: 'Debate Club', 
    description: 'Developing public speaking and critical thinking through structured arguments.', 
    icon: 'message-square' 
  },
  { 
    name: 'Robotics Club', 
    description: 'Hands-on experience with modern technology and engineering principles.', 
    icon: 'cpu' 
  },
  { 
    name: 'Student Council', 
    description: 'Our democratic student body fostering leadership and community service.', 
    icon: 'users' 
  },
];

export const FACULTY: FacultyMember[] = [
  { name: 'Dr. Amitabh Sharma', role: 'Principal', image: 'https://picsum.photos/seed/p1/200/200' },
  { name: 'Ms. Sarah Jenkins', role: 'Vice Principal & Head of Arts', image: 'https://picsum.photos/seed/p2/200/200' },
  { name: 'Mr. Rajesh Kumar', role: 'Head of STEM Department', image: 'https://picsum.photos/seed/p3/200/200' },
];
