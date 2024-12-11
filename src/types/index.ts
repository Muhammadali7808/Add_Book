export interface Book {
  id: string;
  title: string;
  author: string;
  status: 'available' | 'borrowed';
  addedDate: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}