# Complete Windows Setup Guide - EliteCommerce

## Prerequisites (Download These First)

### 1. Install Node.js
- Go to https://nodejs.org/
- Download "LTS" version (recommended for most users)
- Run the installer and follow default settings
- This installs both Node.js and npm

### 2. Install VS Code (Optional but Recommended)
- Go to https://code.visualstudio.com/
- Download and install VS Code
- Launch VS Code after installation

## Step-by-Step Project Setup

### Step 1: Download the Complete Project

**Important:** You need ALL the project files, not just package.json

1. Go to your Replit project
2. Click the three dots menu (⋯) in the file explorer
3. Select "Download as ZIP" 
4. Save the zip file (e.g., to Downloads folder)
5. Extract the ZIP file to a folder like `C:\Projects\EliteCommerce`

**Verify Download:** The extracted folder should contain:
```
EliteCommerce/
├── client/          (React frontend folder)
├── server/          (Express backend folder) 
├── shared/          (Shared types folder)
├── package.json     (Dependencies file)
├── README.md        (Documentation)
└── Many other files...
```

### Step 2: Open Project in VS Code

1. Open VS Code
2. Click "File" → "Open Folder"
3. Navigate to your extracted project folder
4. Click "Select Folder"

### Step 3: Open Terminal in VS Code

1. In VS Code, press `Ctrl + `` (backtick) to open terminal
2. Or go to "Terminal" → "New Terminal"
3. The terminal should open at the bottom of VS Code

### Step 4: Install Project Dependencies

In the VS Code terminal, type:
```bash
npm install
```
Press Enter and wait. This will:
- Download all required packages (100+ packages)
- Create a `node_modules` folder
- Take 1-2 minutes to complete

### Step 5: Install TypeScript Runner

Still in the terminal, type:
```bash
npm install -g tsx
```
Press Enter. This installs the TypeScript execution tool globally.

If that fails with permissions error, try:
```bash
npm install tsx
```

### Step 6: Start the Development Server

In the terminal, type:
```bash
npx tsx server/index.ts
```
Press Enter.

**Success looks like:**
```
Starting EliteCommerce Development Server...
[express] serving on port 5000
```

### Step 7: Open the Application

1. Open your web browser
2. Go to: `http://localhost:5000`
3. You should see the EliteCommerce homepage

**Admin Dashboard:** `http://localhost:5000/admin`

## Alternative Start Methods (If Step 6 Fails)

### Method A: Using Batch File
Double-click on `start-server.bat` in Windows Explorer

### Method B: Using PowerShell
In VS Code terminal:
```powershell
$env:NODE_ENV="development"
npx tsx server/index.ts
```

### Method C: Using Command Prompt
In VS Code terminal, switch to cmd:
```cmd
set NODE_ENV=development && npx tsx server/index.ts
```

## What You'll See When Working

### Customer Features
- **Homepage:** Product catalog with categories
- **Search & Filter:** Find products by category/name
- **Shopping Cart:** Add items, change quantities
- **Checkout:** Complete order form with validation

### Admin Features (at /admin)
- **Dashboard:** Revenue and order statistics
- **Order Management:** Update order statuses
- **Inventory Alerts:** Low stock warnings

## Troubleshooting Common Issues

### Error: "tsx is not recognized"
**Solution:**
```bash
npm install tsx
npx tsx server/index.ts
```

### Error: "Cannot find module 'server/index.ts'"
**Problem:** Project files are incomplete
**Solution:** Re-download the complete project from Replit

### Error: "Port 5000 already in use"
**Solution:** Kill the process using port 5000:
1. Press `Ctrl + C` in terminal to stop current server
2. Or change port in server/index.ts

### Error: "npm install" fails
**Solution:**
1. Delete `node_modules` folder (if exists)
2. Delete `package-lock.json` (if exists)  
3. Run `npm install` again

## Stopping the Server

In the VS Code terminal:
- Press `Ctrl + C`
- Type `y` if prompted
- The server will stop

## Restarting the Server

After making changes:
1. Stop the server (`Ctrl + C`)
2. Run `npx tsx server/index.ts` again

## File Structure Overview

```
EliteCommerce/
├── client/src/           # Frontend React code
│   ├── components/       # UI components
│   ├── pages/           # Home and Admin pages
│   └── lib/             # Store and utilities
├── server/              # Backend Express code
│   ├── index.ts         # Main server file
│   ├── routes.ts        # API endpoints
│   └── storage.ts       # Data management
├── shared/              # Shared types
│   └── schema.ts        # Database schemas
└── package.json         # Project dependencies
```

## Interview Demo Points

1. **Full-Stack Architecture:** React + Express + TypeScript
2. **Modern State Management:** Zustand + TanStack Query
3. **Professional UI:** Tailwind CSS + shadcn components
4. **Type Safety:** End-to-end TypeScript
5. **Form Validation:** React Hook Form + Zod
6. **Responsive Design:** Mobile-first approach

## Next Steps

Once running successfully:
1. Explore the customer shopping experience
2. Test the admin dashboard features
3. Review the code structure for interview discussion
4. Practice explaining the technical architecture

The project demonstrates advanced full-stack development skills with modern best practices.