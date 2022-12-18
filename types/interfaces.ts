export interface Solution {
  id: string;
  title: string;
  description: string;
  actions: string[];
  icon: JSX.Element;
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
