# SaaS Automation Builder

A powerful, user-friendly SaaS automation builder application built with Next.js, TailwindCSS, shadcn components, and optimized with Million.js.

## Features

- **Next.js**: React framework for server-side rendering and static site generation
- **TailwindCSS**: Utility-first CSS framework for rapid UI development
- **shadcn Components**: Pre-built, customizable UI components
- **Million.js**: Performance optimization for React components
- **Biome**: Fast linter and formatter for JavaScript, TypeScript, and more
- **Husky & lint-staged**: Git hooks for code quality checks
- **Bun**: Fast all-in-one JavaScript runtime and package manager
- **Drag-and-Drop Interface**: Intuitive workflow builder
- **Integrations**: Connect with popular SaaS tools and APIs
- **Customizable Templates**: Pre-built automation templates for quick setup
- **Real-time Monitoring**: Track and analyze your automation performance

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (>=1.0.0)

### Installation

1. Clone the repository:
   
   git clone [your-repo-url]
   cd saas-automation-builder
   

2. Install dependencies:
   
   bun install
   

3. Development
   Start the development server:
   
   bun dev
   

   Open http://localhost:3000 to view the application.

4. Building for Production
   Create an optimized production build:
   
   bun build
   

5. Start the production server:
   
   bun start
   

## Project Structure


.
├── public          # Static assets
├── src
│   ├── app         # Next.js app directory
│   ├── components  # React components
│   ├── constants   # Constant values and content
│   ├── lib         # Utility functions
│   └── styles      # Global styles
├── .husky          # Husky configuration
├── biome.json      # Biome configuration
├── tailwind.config.ts # Tailwind configuration
└── package.json    # Project dependencies and scripts


## Customization

- Update `src/constants/Metadata.ts` to change application metadata
- Modify `src/constants/integrations.ts` to update available integrations
- Adjust `tailwind.config.ts` for theme customization

## Performance Testing

Run Million.js performance linting:

bun dlx million@latest


## Linting and Formatting

Run Biome linter:

bun lint


Auto-fix linting and formatting issues:

bun format

