# Next.js Development Guide

This guide will help you run, develop, and deploy the Kaadu Golla website locally.

## Prerequisites

- **Node.js**: 18.17.0 or later ([Download](https://nodejs.org/))
- **npm**: Comes with Node.js
- **Git**: For version control
- **Code Editor**: VS Code recommended

## Quick Start (5 minutes)

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy the example file and add your Strapi configuration:

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_api_token_here
```

### 3. Start Development Server

```bash
npm run dev
```

Visit **http://localhost:3000** in your browser.

## Development Workflow

### File Structure During Development

```
/app                  - Route handlers and page components
  /[route]/page.tsx  - Page files
/components           - Reusable React components
/styles/globals.css   - Global Tailwind styles
/public               - Static files (images, fonts)
/lib                  - Utilities and API helpers
```

### Making Changes

1. **Pages**: Edit files in `/app/[route]/page.tsx`
2. **Components**: Create/edit in `/components/`
3. **Styles**: Update Tailwind classes in JSX or `/styles/globals.css`
4. **API**: Modify `/lib/strapi.ts` for CMS integration

Changes are **hot-reloaded** automatically!

### Testing Components

Develop mobile-first:
1. Open DevTools (F12)
2. Toggle device toolbar (Cmd+Shift+M)
3. Test on different screen sizes
4. Check accessibility (tab navigation, focus states)

## Available Commands

```bash
# Development
npm run dev              # Start development server

# Production
npm run build           # Create optimized build
npm run start           # Start production server
npm run lint            # Run ESLint
npm run format          # Format code with Prettier
```

## Debugging

### In VS Code

1. Add breakpoints by clicking line numbers
2. Run with debugger:
   ```bash
   node --inspect-brk ./node_modules/.bin/next dev
   ```
3. Open `chrome://inspect` in Chrome

### In Browser

1. Open DevTools (F12)
2. Use Console for errors
3. Use Network tab for API calls
4. Use Performance tab for optimization

## Common Issues

### Port 3000 Already in Use

```bash
# Find process
lsof -i :3000

# Kill process (replace PID)
kill -9 <PID>

# Or use different port
npm run dev -- -p 3001
```

### Module Not Found Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Strapi Connection Issues

1. Verify Strapi is running: `http://localhost:1337/admin`
2. Check API token in `.env.local`
3. Verify CORS settings in Strapi
4. Test API endpoint: `curl http://localhost:1337/api/events`

## Performance Tips

1. **Images**: Use `next/image` for automatic optimization
2. **Code Splitting**: Dynamic imports for large components
3. **CSS**: Tailwind purges unused classes in production
4. **Fonts**: Preload in HTML head
5. **Analytics**: Consider Web Vitals monitoring

## Code Quality

### Run Linter

```bash
npm run lint
```

Fix issues automatically:
```bash
npm run lint -- --fix
```

### Format Code

```bash
npm run format
```

### Type Checking

TypeScript errors appear during build/dev:
- Check terminal output for errors
- Use VS Code's TypeScript integration
- Hover over variables for type hints

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

The site is optimized for low-bandwidth environments and works on older devices with minimal JS.

## Next Steps

1. **Set Up Strapi**: See [lib/README.md](./lib/README.md)
2. **Deploy to Vercel**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
3. **Customize Styles**: Edit `tailwind.config.ts`
4. **Add Content**: Create collections in Strapi

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Strapi Documentation](https://docs.strapi.io)
- [Vercel Deployment](https://vercel.com/docs)

## Getting Help

- Check error messages in terminal
- Review component documentation in `/components/README.md`
- Consult API guide in `/lib/README.md`
- Open GitHub issues for bugs
