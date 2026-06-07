# Deployment Guide - Vercel

Vercel is the optimal deployment platform for Next.js. This guide covers deploying the Kaadu Golla website.

## Prerequisites

- GitHub account with repository
- Vercel account (free tier available)
- Strapi instance (self-hosted or Strapi Cloud)

## Step 1: Prepare Repository

### 1.1 Initialize Git (if needed)

```bash
git init
git add .
git commit -m "Initial commit: Kaadu Golla website"
```

### 1.2 Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/kaadu-golla.git
git branch -M main
git push -u origin main
```

## Step 2: Set Up Vercel

### 2.1 Connect Repository

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Select your repository
5. Click "Import"

### 2.2 Configure Project

**Framework**: Next.js ✓ (auto-detected)

**Root Directory**: `.` (current directory)

**Build Command**: `npm run build` ✓

**Output Directory**: `.next` ✓

**Environment Variables**: Add these:

```
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-domain.com
STRAPI_API_TOKEN=your_production_api_token
NEXT_PUBLIC_SITE_NAME=Kaadu Golla Community
NEXT_PUBLIC_SITE_DESCRIPTION=Digital home for the Kaadu Golla community
```

### 2.3 Deploy

Click "Deploy" and wait for build to complete.

Your site will be available at: `https://your-project.vercel.app`

## Step 3: Configure Custom Domain

### 3.1 Add Custom Domain

1. In Vercel project settings, go to "Domains"
2. Click "Add"
3. Enter your domain (e.g., `kaadugolla.in`)
4. Select "Use Nameservers" (simplest option)

### 3.2 Update Domain Registrar

Follow Vercel's instructions to update nameservers at your domain registrar.

Propagation may take 24-48 hours.

### 3.3 Enable HTTPS

Vercel automatically provisions SSL certificates. HTTPS will be available once domain propagates.

## Step 4: Environment Configuration

### Production Environment Variables

Add in Vercel Dashboard:

```
Settings → Environment Variables
```

**Key Production Variables:**

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_STRAPI_URL` | `https://api.kaadugolla.in` |
| `STRAPI_API_TOKEN` | `your_strapi_production_token` |
| `NEXT_PUBLIC_SITE_NAME` | `Kaadu Golla Community` |

### Preview Deployments

Vercel automatically creates preview deployments for pull requests—great for testing!

## Step 5: Setting Up Strapi Backend

### Option A: Strapi Cloud (Recommended)

1. Sign up at [strapi.cloud](https://strapi.cloud)
2. Create new project
3. Get API URL: `https://your-project.strapi.cloud`
4. Create API token in Strapi dashboard
5. Add to Vercel environment variables

### Option B: Self-Hosted Strapi

Deploy Strapi separately to:
- Railway.app
- Render.com
- DigitalOcean
- AWS

Then update `NEXT_PUBLIC_STRAPI_URL` to your Strapi instance URL.

## Step 6: Monitoring & Analytics

### Enable Vercel Analytics

1. Vercel Dashboard → Your Project
2. "Analytics" tab
3. Enable Web Vitals

Track:
- Page load times
- Core Web Vitals
- Traffic patterns

### Error Tracking

Vercel automatically logs deployment errors in:
- Deployments tab
- Logs view
- Email notifications

## Deployment Workflow

### Automatic Deployments

Every push to `main` branch triggers automatic deployment:

```
GitHub Push → Vercel Build → Automatic Deploy
```

### Preview Deployments

Pull requests create preview URLs:

```
PR #1 → Preview: pr-1.project.vercel.app
```

Perfect for testing before merging!

### Manual Deployments

Redeploy anytime:

1. Vercel Dashboard → Deployments
2. Find deployment
3. Click "..." → "Redeploy"

## Performance Optimization

### Image Optimization

Vercel's Image Optimization API automatically serves optimized images.

Automatic for `next/image` components ✓

### Edge Caching

- Static pages cached globally at 60s intervals
- ISR pages cached intelligently
- API routes cacheable with headers

### Database Caching

For Strapi API calls, consider:
- ISR (Incremental Static Regeneration)
- Next.js Cache API
- CDN caching

## SSL/HTTPS

✓ Automatic SSL certificates via Let's Encrypt

✓ Force HTTPS via project settings

✓ HTTP/2 and HTTP/3 enabled by default

## Rollback

If deployment has issues:

1. Vercel Dashboard → Deployments
2. Find working deployment
3. Click "..." → "Promote to Production"

## Troubleshooting

### Build Fails

Check logs in Vercel dashboard:

1. Deployments tab
2. Failed deployment
3. Click "View Build Logs"

**Common issues:**
- Missing environment variables
- API connection errors
- TypeScript errors (fix in code, recommit)

### Slow Performance

1. Check Vercel Analytics
2. Identify slow pages/routes
3. Optimize images and components
4. Review Strapi API queries

### Environment Variables Not Working

1. Verify in Vercel Settings
2. Check variable names (case-sensitive)
3. Redeploy after changes
4. Check `.env.local` excluded from git

## Monitoring Deployment

### Vercel Insights

Monitor performance in real-time:
- Page performance
- Visitor trends
- Error rates
- API response times

### Custom Monitoring

Add services like:
- Sentry (error tracking)
- Datadog (monitoring)
- LogRocket (user sessions)

## Scheduled Tasks

For periodic updates (regeneration, data syncing):

Use Vercel's Cron Jobs or GitHub Actions to:
- Revalidate ISR pages
- Sync Strapi content
- Generate reports

```bash
# Example revalidation endpoint
// /app/api/revalidate/route.ts
export async function GET(request: Request) {
  // Validate secret token
  // Revalidate path(s)
  // Return success/error
}
```

## Scaling Considerations

**Free Tier Limits:**
- 100 GB bandwidth/month
- 12 serverless function executions/second
- 10GB of data transfer per month

**For high traffic:**
- Upgrade to Pro ($20/month+)
- Increase bandwidth limits
- Enable automatic scaling

## Security Best Practices

1. ✓ Never commit `.env.local`
2. ✓ Rotate API tokens regularly
3. ✓ Use environment variables for secrets
4. ✓ Enable branch protection on main
5. ✓ Require pull request reviews
6. ✓ Monitor access logs
7. ✓ Use strong Strapi API tokens

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- Community forums and Discord

## Next Steps

1. Deploy to Vercel
2. Configure custom domain
3. Set up Strapi backend
4. Monitor analytics
5. Iterate on content and design

---

**Your Kaadu Golla website is now live! 🚀**

Questions? Check the docs or open an issue on GitHub.
