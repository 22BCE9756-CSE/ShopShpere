# VS Code Terminal Setup

## Quick Start (Works on Windows, Mac, Linux)

After extracting the zip and opening in VS Code:

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
node dev.js
```

That's it! Your application will be running at `http://localhost:5000`

## Alternative Methods

### Method 1: Direct Command
```bash
tsx server/index.ts
```

### Method 2: With Environment (PowerShell)
```powershell
$env:NODE_ENV="development"; tsx server/index.ts
```

### Method 3: With Environment (Command Prompt)
```cmd
set NODE_ENV=development && tsx server/index.ts
```

## What You'll See

```
🚀 Starting EliteCommerce Development Server...
📦 Environment: development
🌐 Server will be available at: http://localhost:5000
👨‍💼 Admin dashboard at: http://localhost:5000/admin

[express] serving on port 5000
```

## VS Code Extensions (Recommended)

1. **TypeScript Importer** - Auto imports
2. **Tailwind CSS IntelliSense** - CSS class suggestions
3. **ES7+ React/Redux/React-Native snippets** - React shortcuts
4. **Auto Rename Tag** - HTML/JSX tag syncing
5. **Prettier** - Code formatting

## VS Code Settings

Add to your VS Code settings.json:
```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.organizeImports": true
  },
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

## Terminal Shortcuts in VS Code

- **Ctrl + `** (Windows/Linux) or **Cmd + `** (Mac) - Toggle terminal
- **Ctrl + Shift + `** - New terminal
- **Ctrl + C** - Stop the server

## Project Structure Overview

```
elitecommerce/
├── client/src/           # React frontend
│   ├── components/       # UI components  
│   ├── pages/           # Route pages (Home, Admin)
│   └── lib/             # Store, utilities
├── server/              # Express backend
│   ├── index.ts         # Server entry
│   ├── routes.ts        # API endpoints
│   └── storage.ts       # Data layer
├── shared/schema.ts     # Shared types
└── dev.js              # Development starter
```

## Hot Reload Features

- **Frontend**: Auto-refresh on React changes
- **Backend**: Auto-restart on server changes  
- **Styles**: Instant Tailwind CSS updates
- **Types**: Real-time TypeScript checking

## Interview Demo Tips

1. **Start with architecture** - Show the folder structure
2. **Demo customer flow** - Browse → Cart → Checkout
3. **Show admin features** - Dashboard → Orders → Inventory
4. **Highlight tech stack** - React, TypeScript, Express, Tailwind
5. **Discuss scalability** - Database integration, authentication, payments