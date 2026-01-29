
export type UserRole = 'Student' | 'Teacher' | 'Parent' | 'Admin' | 'Super Admin' | 'Branch';

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Update' | 'Event' | 'News';
}

export interface Club {
  name: string;
  description: string;
  icon: string;
}

export interface FacultyMember {
  name: string;
  role: string;
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
}
