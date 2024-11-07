/** @type {import('next').NextConfig} */
const path = require('path');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    config.plugins.push(
      new ModuleFederationPlugin({
        name: 'altofe_core',
        filename: 'remoteEntry.js',
        exposes: {
          './lib/mui': '@mui/material',
          './lib/mui-lab': '@mui/lab',
          './lib/components/Datatable': './src/app/components/Datatable.tsx',
          './lib/components/DatePicker': './src/app/components/DatePicker.tsx',
          './lib/components/Icon': './src/app/components/Icon.tsx',
          './lib/components/Modal': './src/app/components/Modal.tsx',
          './lib/components/Navbar': './src/app/components/Navbar.tsx',
          './lib/components/PageHeader': './src/app/components/PageHeader.tsx',
          './lib/components/Scrollbar': './src/app/components/Scrollbar.tsx',
          './lib/components/Select': './src/app/components/Select.tsx',
          './lib/components/Sidebar': './src/app/components/Sidebar.tsx',
          './lib/components/Snackbar': './src/app/components/Snackbar.tsx',
          './lib/components/TextInfo': './src/app/components/TextInfo.tsx',
          './lib/hooks/useLocalStorage': './src/app/hooks/useLocalStorage.ts',
          './lib/hooks/useResponsive': './src/app/hooks/useResponsive.ts',
          './lib/utils/helper': './src/app/utils/helpers.ts',
          './lib/theme/palette': '@/theme/palette.ts',
          './lib/theme/shadows': '@/theme/shadows.ts',
          './lib/theme/typography': '@/theme/typography.ts',
          './lib/theme/mui-css': '@/theme/css.ts',
          './lib/theme/custom-shadows': '@/theme/custom-shadows.ts',
          './lib/theme/ThemeProvider': '@/theme/index.tsx',
        },
        shared: {
          // react: { singleton: true },
          // 'react-dom': { singleton: true },
        },
      })
    );
    return config
  },
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;
