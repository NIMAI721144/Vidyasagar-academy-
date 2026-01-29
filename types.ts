
export enum UserRole {
  STUDENT = 'Student',
  TEACHER = 'Teacher',
  PARENT = 'Parent',
  ADMIN = 'Admin',
  BRANCH_ADMIN = 'Branch Admin',
  SUPER_ADMIN = 'Super Admin'
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
}

export interface StaffMember {
  name: string;
  role: string;
  department?: string;
  imageUrl: string;
}
