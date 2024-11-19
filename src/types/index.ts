export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Service {
  name: string;
  description: string;
  features: string[];
}
