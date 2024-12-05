export interface Course {
  id?: number;
  title: string;
  description: string;
  price: number;
  duration: string;
  level: string;
}

export interface TeamMember {
  name: string;
  title: string;
  image: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}