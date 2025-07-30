const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 EliteCommerce Complete Setup');
console.log('================================');

// Check current directory contents
console.log('\n📁 Checking current directory...');
const currentFiles = fs.readdirSync('.');
console.log('Files found:', currentFiles.length);

// Install tsx if not available
console.log('\n📦 Setting up TypeScript execution...');
try {
  execSync('npx tsx --version', { stdio: 'pipe' });
  console.log('✅ tsx is available');
} catch (error) {
  console.log('Installing tsx...');
  execSync('npm install tsx', { stdio: 'inherit' });
  console.log('✅ tsx installed');
}

// Create missing directories if needed
const requiredDirs = ['client/src', 'server', 'shared'];
requiredDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(` Created: ${dir}`);
  }
});

console.log('\n🔧 Setup complete!');
console.log('\nTo start the server, run:');
console.log('  npx tsx server/index.ts');
console.log('\nOr use the batch file:');
console.log('  start-server.bat');

if (fs.existsSync('server/index.ts')) {
  console.log('\n🎯 Starting development server...');
  process.env.NODE_ENV = 'development';
  require('./server/index.ts');
} else {
  console.log('\n⚠️  Server files not found. Please ensure all project files are present.');
}