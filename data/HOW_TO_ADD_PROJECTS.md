# How to Add New Projects

## Quick Guide

To add a new project to your portfolio, simply edit the `data/projects.ts` file.

### Steps:

1. Open `data/projects.ts`
2. Add a new project object to the `projects` array
3. Save the file - changes will appear automatically!

### Project Template:

```typescript
import { Rocket } from 'lucide-react'; // Import icon from lucide-react

{
  id: 2,
  category: "Your Category · Type",
  title: "Project Name — Brief Description",
  icon: "Rocket", // Icon name as string
  iconComponent: Rocket, // Actual icon component
  image: "/projects/your-screenshot.png", // Screenshot in public/projects/
  tall: false, // Set to true for featured/tall cards
  url: "https://your-project-url.com", // The actual project URL
  description: "Optional project description"
}
```

### Available Icons:
Browse icons at: https://lucide.dev/icons/
Common ones: Store, Rocket, Briefcase, Code, Smartphone, Zap, TrendingUp

### Example:

```typescript
import { Store, Rocket } from 'lucide-react';

export const projects: Project[] = [
  {
    id: 1,
    category: "E-Commerce · Retail",
    title: "Lumiere Botanicals — E-Commerce Platform",
    icon: "Store",
    iconComponent: Store,
    image: "/projects/hero1.png",
    tall: true,
    url: "https://lumiere-botanicals.pxxl.click/",
    description: "A complete e-commerce solution"
  },
  {
    id: 2,
    category: "SaaS · Productivity",
    title: "TaskFlow — Project Management Tool",
    icon: "Rocket",
    iconComponent: Rocket,
    image: "/projects/taskflow.png",
    tall: false,
    url: "https://taskflow-demo.com",
    description: "Streamlined project management"
  },
  // Add more projects here...
];
```

### Adding Project Screenshots:

1. Save your project screenshot/hero image
2. Place it in `public/projects/` folder (e.g., `public/projects/myproject.png`)
3. Reference it in the project data: `image: "/projects/myproject.png"`
4. The image will automatically display as the project background

### Tips:

- Use `tall: true` for 1 featured project to make it stand out
- Save project screenshots in `public/projects/` folder
- Use high-quality hero/landing page screenshots
- Keep titles concise and descriptive
- Import icons from lucide-react: https://lucide.dev/icons/
- Icon is used as fallback if image fails to load
