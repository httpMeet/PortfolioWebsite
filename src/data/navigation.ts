import { NavigationConfig } from "@/types/navigation";

export const navigationConfig: NavigationConfig = {
  mainNav: [
    { label: "Overview", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  recruiterActions: [
    { label: "Explore Projects", href: "/projects" },
    { label: "View Resume", href: "/resume", external: true },
    { label: "View GitHub", href: "https://github.com/httpMeet", external: true },
    { label: "Contact Me", href: "/contact" },
  ],
};
