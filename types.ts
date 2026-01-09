
export enum DesignVibe {
  ZEN = 'Zen Minimalist',
  MODERN_CLINIC = 'Modern Clinic',
  DEEP_NATURE = 'Deep Nature',
  OFFICE_TECH = 'Corporate Wellness',
  DEFAULT = 'Soft Healing'
}

export interface DesignTheme {
  primaryColor: string;
  backgroundColor: string;
  cardBackground: string;
  textColor: string;
  accentColor: string;
  borderRadius: string;
  fontFamily: 'font-sans' | 'font-display' | 'font-cursive';
  buttonClasses: string;
  heroGradient: string;
  vibe: DesignVibe;
}

export interface LandingContent {
  brand: {
    name: string;
    title: string;
    phone: string;
  };
  sections: {
    what: {
      title: string;
      content: string[];
      content2: string[];
    };
    about: {
      title: string;
      content: string[];
    };
    benefits: {
      title: string;
      items: Array<{ title: string; description: string }>;
    };
    service: {
      title: string;
      description: string;
      features: string[];
      clients: string[];
    };
  };
}
