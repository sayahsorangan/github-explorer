# GitHub Explorer

A modern, responsive GitHub user search application built with React Router. Discover amazing developers and explore their incredible repositories with a beautiful, intuitive interface.

## Features

-   🔍 **Search GitHub Users** - Find developers by username with real-time search
-   👤 **User Profiles** - View detailed user information and statistics
-   📁 **Repository Explorer** - Browse user repositories with detailed information
-   🌓 **Dark/Light Theme** - Toggle between themes with system preference detection
-   📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
-   ⚡️ **Fast Performance** - Built with React Router for optimal loading
-   🎨 **Beautiful UI** - Modern design with Tailwind CSS and smooth animations
-   📄 **Pagination** - Navigate through search results efficiently
-   🔗 **External Links** - Direct links to GitHub profiles and repositories

## Tech Stack

-   **Frontend Framework**: React 19 with React Router 7
-   **Styling**: Tailwind CSS 4
-   **Language**: TypeScript
-   **Build Tool**: Vite
-   **API**: GitHub REST API
-   **Deployment**: Docker support included

## Getting Started

### Prerequisites

-   Node.js 18+
-   npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd github-api-intg
```

2. Install the dependencies:

```bash
npm install
```

### Development

Start the development server with Hot Module Replacement:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### Type Checking

Run TypeScript type checking:

```bash
npm run typecheck
```

## Building for Production

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
app/
├── routes/
│   └── home.tsx           # Main route component
├── welcome/
│   ├── welcome.tsx        # Main application component
│   ├── logo-dark.svg      # Dark theme logo
│   ├── logo-light.svg     # Light theme logo
│   └── components/        # UI components
│       ├── index.ts       # Component exports
│       ├── ThemeSwitcher.tsx
│       ├── SearchInput.tsx
│       ├── UserCard.tsx
│       ├── UserProfile.tsx
│       ├── RepositoryCard.tsx
│       ├── Pagination.tsx
│       ├── LoadingSkeletons.tsx
│       ├── ErrorMessage.tsx
│       └── NoResults.tsx
├── root.tsx               # Root component
├── routes.ts              # Route configuration
└── app.css                # Global styles
```

## Features in Detail

### User Search

-   Search GitHub users by username
-   Paginated results (5 users per page)
-   Real-time search with enter key support
-   Search result statistics

### User Profile Display

-   User avatar with online status indicator
-   Username and GitHub profile link
-   Repository count display
-   Direct link to GitHub profile

### Repository Explorer

-   Grid layout of user repositories
-   Repository name, description, and stars
-   Programming language indicators
-   Last updated timestamps
-   Direct links to repositories

### Theme Support

-   Dark and light theme toggle
-   System preference detection
-   Persistent theme storage
-   Smooth theme transitions

## API Usage

This application uses the GitHub REST API:

-   **User Search**: `GET https://api.github.com/search/users`
-   **User Repositories**: `GET https://api.github.com/users/{username}/repos`

> **Note**: GitHub API has rate limits. For unauthenticated requests, you get 60 requests per hour.

## Deployment

### Docker Deployment

Build and run using Docker:

```bash
# Build the Docker image
docker build -t github-explorer .

# Run the container
docker run -p 3000:3000 github-explorer
```

The containerized application can be deployed to:

-   AWS ECS
-   Google Cloud Run
-   Azure Container Apps
-   Digital Ocean App Platform
-   Fly.io
-   Railway

### Traditional Deployment

Deploy the output of `npm run build`:

```
├── package.json
├── package-lock.json
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Browser Support

-   Chrome 90+
-   Firefox 88+
-   Safari 14+
-   Edge 90+

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React Router and GitHub API
