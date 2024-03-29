export interface Solution {
  id: string;
  title: string;
  description: string;
  actions: string[];
  icon: JSX.Element;
  example: JSX.Element;
}

export interface Color {
  start: string;
  stop: string;
}

export interface LinkItem {
  id: string;
  name: string;
  url: string;
  logo: JSX.Element;
  logoDark: JSX.Element;
}

export interface Testimonial {
  id: string;
  author: string;
  url: string;
  company: string;
  job: string;
  location: string;
  rating: string;
  quote: string;
  date: string;
  avatar: string;
}
