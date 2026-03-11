import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  category: string;
  title: string;
  icon: string;
  iconComponent?: LucideIcon;
  image?: string;
  tall?: boolean;
  url: string;
  description?: string;
}

import { Store, Rocket } from 'lucide-react';

export const projects: Project[] = [
  {
    id: 1,
    category: "E-Commerce · Retail",
    title: "Lumiere Botanicals - E-Commerce Platform",
    icon: "Store",
    iconComponent: Store,
    image: "/projects/hero1.png",
    tall: true,
    url: "https://lumiere-botanicals.pxxl.click/",
    description: "A complete e-commerce solution with cart, checkout, and inventory management"
  },
  {
    id: 2,
    category: "Real Estate",
    title: "Nexusestate - Modern real estate solution",
    icon: "Store",
    iconComponent: Store,
    image: "/projects/nexusestate.png",
    tall: true,
    url: "https://nexusestate.vercel.app/",
    description: "A modern real estate solution that makes property listing, discovery, and client connection seamless."
  },
  {
    id: 3,
    category: "Food Plug",
    title: "Food Plug - Good food choices are good investments.",
    icon: "Store",
    iconComponent: Store,
    image: "/projects/foodplug.png",
    tall: true,
    url: "https://dx1-foodplug.netlify.app/",
    description: "."
  },
  // Add more projects here as they become available
  // {
  //   id: 2,
  //   category: "Your Category",
  //   title: "Your Project Title",
  //   icon: "Rocket",
  //   iconComponent: Rocket, // Import from lucide-react
  //   image: "/projects/your-screenshot.png", // Add screenshot to public/projects/
  //   tall: false,
  //   url: "https://your-project-url.com",
  //   description: "Project description"
  // },
];
