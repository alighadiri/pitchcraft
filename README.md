# PitchCraft

> Where ideas become reality

PitchCraft is a Next.js application for creating and managing startup pitches and ideas.

## Features

- 🔐 **Authentication** - Secure authentication powered by NextAuth.js with GitHub OAuth
- 🎨 **Modern UI** - Beautiful, responsive design with Tailwind CSS
- ⚡ **Performance** - Built with Next.js 15 and Turbopack for lightning-fast development
- 📱 **Responsive** - Works seamlessly across all devices

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom animations
- **Authentication:** NextAuth.js v5 (GitHub OAuth)
- **Font:** Work Sans (custom font family)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm (version 10.9.2)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pitchcraft
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
AUTH_SECRET=your-secret-key
AUTH_GITHUB_ID=your-github-oauth-id
AUTH_GITHUB_SECRET=your-github-oauth-secret
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
pitchcraft/
├── app/                    # Next.js app directory
│   ├── (root)/            # Root route group
│   ├── api/               # API routes
│   │   └── auth/          # Authentication routes
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   └── navbar.tsx         # Navigation bar
├── auth.ts               # NextAuth configuration
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

Private project - All rights reserved
