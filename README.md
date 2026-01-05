# Vite React Shadcn TypeScript Project

A modern, fast, and fully-featured React application built with Vite, TypeScript, Shadcn UI, and Tailwind CSS.

## 🚀 Features

- ⚡️ **Vite** - Lightning fast build tool and dev server
- ⚛️ **React 18** - Latest React with hooks and concurrent features
- 🎨 **Shadcn UI** - Beautiful, accessible component library
- 🎭 **Tailwind CSS** - Utility-first CSS framework
- 📝 **TypeScript** - Type-safe code with excellent DX
- 🔄 **React Router** - Client-side routing
- 📊 **Recharts** - Composable charting library
- 🎯 **React Hook Form** - Performant form validation
- 🔍 **Zod** - TypeScript-first schema validation
- 🎬 **Framer Motion** - Production-ready motion library
- 📈 **Vercel Analytics** - Web analytics
- 🌙 **Dark Mode** - Built-in theme switching

## 📦 Tech Stack

### Core
- [Vite](https://vitejs.dev/) - Build tool
- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling

### UI Components
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Shadcn UI](https://ui.shadcn.com/) - Re-usable components
- [Lucide React](https://lucide.dev/) - Beautiful icons
- [Framer Motion](https://www.framer.com/motion/) - Animations

### Form & Validation
- [React Hook Form](https://react-hook-form.com/) - Form management
- [Zod](https://zod.dev/) - Schema validation

### Routing & State
- [React Router](https://reactrouter.com/) - Routing
- [TanStack Query](https://tanstack.com/query) - Server state management

### Analytics & Monitoring
- [Vercel Analytics](https://vercel.com/analytics) - Web analytics

## 🛠️ Installation

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

You can install Node.js using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating):

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install Node.js
nvm install 18
nvm use 18
```

### Setup

1. **Clone the repository**

```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Start development server**

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm run lint

# Type check with TypeScript
tsc --noEmit
```

## 🏗️ Project Structure

```
├── src/
│   ├── components/     # Reusable UI components
│   │   └── ui/        # Shadcn UI components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions and configs
│   ├── pages/         # Page components
│   ├── styles/        # Global styles
│   ├── types/         # TypeScript type definitions
│   ├── App.tsx        # Main app component
│   └── main.tsx       # Entry point
├── public/            # Static assets
├── index.html         # HTML template
├── vite.config.ts     # Vite configuration
├── tailwind.config.ts # Tailwind configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Dependencies and scripts
```

## 🎨 Customization

### Adding New Components

Use Shadcn CLI to add new components:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
```

### Theming

Modify `src/index.css` to customize your theme colors:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  /* ... */
}
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My App
```

Access in your code:

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and deploy

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Other Platforms

Build command: `npm run build`  
Output directory: `dist`

## 🧪 Testing

```bash
# Add your testing framework
npm install -D vitest @testing-library/react
```

## 📝 Code Quality

### ESLint Configuration

The project uses ESLint with React and TypeScript rules. Configuration can be found in `eslint.config.js`.

### TypeScript

Strict mode is enabled for better type safety. Check `tsconfig.json` for configuration.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) - Amazing component library
- [Radix UI](https://www.radix-ui.com/) - Accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Vite](https://vitejs.dev/) - Next generation frontend tooling

## 📞 Support

For issues and questions:
- Open an issue on GitHub
- Check existing discussions
- Review the documentation

---

**Built with ❤️ using Vite + React + TypeScript**