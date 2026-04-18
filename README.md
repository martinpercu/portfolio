# 👨‍💻 Martín Percudani Portfolio

A modern professional portfolio built with **Angular 17** showcasing projects, experience, and development skills.

## 🎯 Features

- **Dynamic Home** - Landing page with personal information and call-to-action
- **Projects Section** - Interactive gallery of completed works
- **AI Projects** - Use cases with integrated artificial intelligence
- **Work Experience** - Timeline of positions and achievements
- **Integrated Chat** - Multiple chat interfaces (ChatGPT, Claude, Custom)
- **Certifications** - PDF viewer for certifications and courses
- **Resume/CV** - Interactive downloadable curriculum
- **Dark/Light Theme** - Theme toggle persisted in localStorage
- **Responsive Design** - Mobile-first with TailwindCSS

## 🚀 Tech Stack

- **Framework**: Angular 17 (Standalone Components)
- **Language**: TypeScript 5.2
- **Styling**: TailwindCSS 3.4 + Autoprefixer
- **Routing**: Angular Router with lazy loading
- **Testing**: Karma + Jasmine
- **Icons**: Angular Tabler Icons
- **Email**: EmailJS for contact forms
- **Build Tool**: Vite (Angular CLI v17)

## 📁 Project Structure

```
src/
├── app/
│   ├── domains/
│   │   ├── body/              # Landing page
│   │   ├── about/             # About section
│   │   ├── projects/          # Projects gallery
│   │   ├── projects-ia/       # AI-powered projects
│   │   ├── works/             # Work experience
│   │   ├── chat/              # ChatGPT integration
│   │   ├── chat2/             # Claude integration
│   │   ├── chat3/             # Custom chat
│   │   ├── contact/           # Contact form
│   │   ├── pdf-certi/         # Certifications viewer
│   │   ├── resume-pdf/        # Downloadable CV
│   │   ├── shared/            # Reusable components
│   │   ├── footer/            # Footer
│   │   └── models/            # TypeScript interfaces
│   ├── app.component.ts       # Root component
│   ├── app.routes.ts          # Main routes
│   └── app.config.ts          # Global configuration
├── assets/                     # Images and static resources
├── environments/               # Environment configuration
└── styles.css                 # Global styles
```

## ⚙️ Installation and Setup

```bash
# Install dependencies
npm install

# Development server
npm start
# Navigate to http://localhost:4200/

# Production build
npm run build

# Run tests
npm test

# Watch mode for development
npm run watch
```

## 📋 Main Routes

| Route | Component | Description |
|-------|-----------|------------|
| `/` | BodyComponent | Home page |
| `/project` | ProjectsComponent | Projects gallery |
| `/works` | WorkContainerComponent | Work experience |
| `/chat` | ChatComponent | Chat with OpenAI |
| `/chat2` | Chat2Component | Chat with Claude |
| `/chat3` | Chat3Component | Custom chat |
| `/cert` | PdfCertiComponent | Technical certifications |
| `/certification/:pdfname` | PdfPedagogicComponent | Pedagogical certifications |
| `/resume` | ResumePdfComponent | Downloadable CV |
| `/acute` | AcutePdfComponent | Special documents |

## 🎨 Highlighted Features

- **Theme Toggle**: Switch between light/dark mode with persistence
- **Standalone Components**: Modern Angular architecture without modules
- **Lazy Loading**: Asynchronous route loading for better performance
- **Responsive**: Mobile-first responsive design
- **PDF Viewer**: Native PDF visualization integration
- **Email Integration**: Contact form with EmailJS

## 🔧 Development

### Generate Components
```bash
ng generate component domains/my-domain/my-component
```

### Add Services
```bash
ng generate service domains/my-domain/my-service
```

### Configure Path Aliases
Path aliases (`@body`, `@chat`, etc.) are configured in `tsconfig.json` for clean relative imports.

## 📦 Build and Deploy

The project is optimized to deploy on any static server or platforms like Vercel, Netlify, or GitHub Pages.

```bash
npm run build
# Artifacts are generated in dist/test/browser/
```

## 📧 Contact and Links

- 📧 Email: martinpercu@gmail.com
- 🔗 LinkedIn: [Your LinkedIn]
- 💼 GitHub: [Your GitHub]

## 📝 Development Notes

- The project uses **standalone components** (Angular 14+), without NgModules
- Certifications are loaded as PDFs from `assets/`
- Images and data are located in the `assets/` folder
- Use the included `.gitignore` to avoid uploading `node_modules` and build files

---

**Last Updated**: April 2026 | Angular 17 | TypeScript 5.2
