#!/usr/bin/env node

(async () => {
  try {
    const { build } = await import('vite');
    const path = await import('path');
    
    await build({
      configFile: path.default.resolve(process.cwd(), 'vite.config.js'),
    });
    
    console.log('Build completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
})();
