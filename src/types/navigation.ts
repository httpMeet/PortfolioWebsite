export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavigationConfig {
  mainNav: NavLink[];
  recruiterActions: NavLink[];
}
