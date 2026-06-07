# API Integration Guide

This document explains how to integrate the website with Strapi CMS.

## Setting Up Strapi

### Local Installation

```bash
# Create a new Strapi project
npx create-strapi-app@latest my-strapi-project

# Start development server
npm run develop
```

Strapi admin will be available at `http://localhost:1337/admin`

### Collections to Create

Create the following content types in Strapi:

#### 1. Events
- `title` (String, required)
- `date` (DateTime, required)
- `description` (Text, required)
- `location` (String)
- `type` (Enumeration: "Cultural", "Development", "Social Reform", "Advocacy")
- `status` (Enumeration: "upcoming", "past")

#### 2. Figures
- `name` (String, required)
- `category` (Enumeration: "Elders", "Leaders", "Professionals")
- `role` (String, required)
- `description` (Text, required)
- `expertise` (JSON or Repeatable Component)

#### 3. News Articles
- `title` (String, required)
- `date` (DateTime, required)
- `excerpt` (Text, required)
- `category` (String)
- `content` (RichText)

#### 4. Culture Articles
- `title` (String, required)
- `section` (Enumeration: "Pastoral", "Hatti", "Devara", "Folklore", "Reform")
- `content` (RichText)

## API Endpoints

All endpoints use the base URL: `http://localhost:1337/api`

### Authentication

Include the bearer token in headers:

```
Authorization: Bearer YOUR_API_TOKEN
```

### Examples

```bash
# Fetch all events
curl -H "Authorization: Bearer YOUR_TOKEN" \
  http://localhost:1337/api/events

# Fetch specific event
curl -H "Authorization: Bearer YOUR_TOKEN" \
  http://localhost:1337/api/events/1

# Create event
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "data": {
      "title": "Festival",
      "date": "2026-10-01",
      "description": "Annual celebration"
    }
  }' \
  http://localhost:1337/api/events
```

## Using in Next.js

```typescript
import { fetchStrapiCollection } from "@/lib/strapi";

export default async function EventsPage() {
  const events = await fetchStrapiCollection("events");

  return (
    <div>
      {events.data.map((event: any) => (
        <div key={event.id}>{event.attributes.title}</div>
      ))}
    </div>
  );
}
```

## Deployment

For production Strapi hosting, use:
- Strapi Cloud
- Railway
- Render
- Self-hosted VPS

Update `NEXT_PUBLIC_STRAPI_URL` to your production URL.

## Best Practices

1. **API Caching**: Use Next.js revalidation for performance
2. **Draft/Publish**: Use Strapi's draft system for staging content
3. **Permissions**: Configure role-based API access in Strapi
4. **Rate Limiting**: Set up rate limiting in Strapi for production
5. **Image Optimization**: Use Strapi's image processing plugin
