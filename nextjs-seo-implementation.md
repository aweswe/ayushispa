# Next.js 16.2.10 — Full SEO Implementation Guide

> Complete technical reference and content strategy for production-grade SEO.  
> Stack: Next.js 16.2.10 · App Router · Turbopack · React 19.2 · TypeScript

---

## Table of Contents

1. [Project Setup](#1-project-setup)
2. [File & Folder Architecture](#2-file--folder-architecture)
3. [Root Layout & Global Metadata](#3-root-layout--global-metadata)
4. [Per-Page Metadata](#4-per-page-metadata)
5. [Dynamic Metadata (Blog, Docs, Product)](#5-dynamic-metadata-blog-docs-product)
6. [Structured Data / JSON-LD](#6-structured-data--json-ld)
7. [Sitemap](#7-sitemap)
8. [Robots.txt](#8-robotstxt)
9. [OG Image Generation](#9-og-image-generation)
10. [proxy.ts — Redirects, Canonicals & Trailing Slash](#10-proxyts--redirects-canonicals--trailing-slash)
11. [Cache Strategy with `use cache` & PPR](#11-cache-strategy-with-use-cache--ppr)
12. [Core Web Vitals — Technical Fixes](#12-core-web-vitals--technical-fixes)
13. [Fonts & Typography](#13-fonts--typography)
14. [Analytics Setup](#14-analytics-setup)
15. [Content Writing Recommendations](#15-content-writing-recommendations)
16. [Blog & Docs Architecture](#16-blog--docs-architecture)
17. [Internal Linking Strategy](#17-internal-linking-strategy)
18. [Technical SEO Checklist](#18-technical-seo-checklist)
19. [Content Calendar Framework](#19-content-calendar-framework)

---

## 1. Project Setup

### Bootstrap

```bash
npx create-next-app@latest my-app \
  --typescript \
  --tailwind \
  --app \
  --turbopack \
  --no-src-dir
```

### Install SEO-related dependencies

```bash
npm install schema-dts next-sitemap
npm install -D @next/bundle-analyzer
```

### `next.config.ts`

```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Turbopack is now default — no flag needed in 16.x

  // React Compiler: stable in 16.x, opt-in
  reactCompiler: true,

  // PPR: stable in 16.x for layout-level caching
  experimental: {
    ppr: true,
    turbopackFileSystemCacheForDev: true, // persist compiler cache between restarts
  },

  // Canonical redirect: never serve both www and non-www
  skipProxyUrlNormalize: false, // was skipMiddlewareUrlNormalize in 15.x

  // Image domains
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.yourdomain.com' },
    ],
    formats: ['image/avif', 'image/webp'],
    // Security: require explicit search param config for local images
    localPatterns: [
      { pathname: '/images/**' },
    ],
  },
};

export default nextConfig;
```

---

## 2. File & Folder Architecture

```
app/
├── layout.tsx                  ← Root layout with global metadata
├── page.tsx                    ← Homepage
├── sitemap.ts                  ← /sitemap.xml
├── robots.ts                   ← /robots.txt
├── opengraph-image.tsx         ← Default OG image
├── twitter-image.tsx           ← Default Twitter card image
│
├── blog/
│   ├── page.tsx                ← Blog index
│   ├── [slug]/
│   │   ├── page.tsx            ← Blog post
│   │   └── opengraph-image.tsx ← Per-post OG image
│
├── docs/
│   ├── layout.tsx
│   └── [slug]/
│       └── page.tsx
│
├── (marketing)/                ← Route group, no URL segment
│   ├── pricing/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
│
components/
├── seo/
│   ├── JsonLd.tsx              ← Structured data injector
│   ├── BreadcrumbJsonLd.tsx
│   └── FAQJsonLd.tsx
│
lib/
├── metadata.ts                 ← Shared metadata helpers
├── structured-data.ts          ← Schema builders
└── blog.ts                     ← Content fetching
│
proxy.ts                        ← Was middleware.ts in Next.js 15
```

---

## 3. Root Layout & Global Metadata

### `app/layout.tsx`

```tsx
import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { GoogleAnalytics } from '@next/third-parties/google';
import { JsonLd } from '@/components/seo/JsonLd';
import { organizationSchema, websiteSchema } from '@/lib/structured-data';
import './globals.css';

// ─── Viewport (separate from Metadata in Next.js 15+) ───────────────────────
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
};

// ─── Global Metadata ─────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // Title: default for root, template applied to all child pages
  title: {
    default: 'Orbit — AI-Powered Code Generation Platform',
    template: '%s | Orbit',
  },
  description:
    'Orbit by Forion is an agentic AI execution engine that generates, runs, and self-corrects production-ready code in real time.',

  // Canonical base — all relative URLs resolve from here
  metadataBase: new URL('https://orbitbyforion.com'),

  // Canonical self-reference
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      // Add more locales when you expand
    },
  },

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://orbitbyforion.com',
    siteName: 'Orbit by Forion',
    title: 'Orbit — AI-Powered Code Generation Platform',
    description:
      'Build production apps with an agentic AI execution engine. Multi-LLM routing, sandboxed builds, live preview.',
    images: [
      {
        url: '/opengraph-image.png', // resolves to metadataBase + /opengraph-image.png
        width: 1200,
        height: 630,
        alt: 'Orbit — AI Code Generation Platform by Forion',
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: 'summary_large_image',
    site: '@forionhq',
    creator: '@forionhq',
    title: 'Orbit — AI-Powered Code Generation Platform',
    description:
      'Build production apps with agentic AI. Multi-LLM routing, sandboxed builds, live preview.',
    images: ['/opengraph-image.png'],
  },

  // Indexing
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // App metadata
  applicationName: 'Orbit',
  authors: [{ name: 'Forion', url: 'https://orbitbyforion.com' }],
  generator: 'Next.js',
  keywords: [
    'AI code generation',
    'agentic AI',
    'code execution engine',
    'multi-LLM routing',
    'AI app builder',
    'Lovable alternative',
    'Bolt alternative',
    'React code generation',
  ],
  category: 'technology',

  // Icons
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-16x16.png',
  },

  // Web manifest
  manifest: '/site.webmanifest',

  // Verification (add tokens from Search Console, Bing, etc.)
  verification: {
    google: 'your-google-verification-token',
    yandex: 'your-yandex-token',
    // bing: 'your-bing-token', // add as other: { 'msvalidate.01': 'token' }
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body>
        {/* Global structured data — Organization + WebSite schema */}
        <JsonLd schema={organizationSchema} />
        <JsonLd schema={websiteSchema} />

        {children}
      </body>

      {/* GA4 — loads after interactive, does not block LCP */}
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
    </html>
  );
}
```

---

## 4. Per-Page Metadata

### Static page example — `app/(marketing)/pricing/page.tsx`

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',  // Becomes "Pricing | Orbit" via root template
  description:
    'Simple, transparent pricing for Orbit. Start free, upgrade as you grow. No hidden fees.',
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'Orbit Pricing — Free to Start',
    description:
      'Simple, transparent pricing. Start free, upgrade as you grow.',
    url: '/pricing',
  },
};

export default function PricingPage() {
  return <main>{/* ... */}</main>;
}
```

---

## 5. Dynamic Metadata (Blog, Docs, Product)

### `app/blog/[slug]/page.tsx`

```tsx
import type { Metadata } from 'next';
import { getPost, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';

// Pre-render all known slugs at build time
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Dynamic metadata from content
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author.name }],
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: `/blog/${post.slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  return <article>{/* ... */}</article>;
}
```

---

## 6. Structured Data / JSON-LD

### `components/seo/JsonLd.tsx`

```tsx
import type { Thing, WithContext } from 'schema-dts';

interface JsonLdProps {
  schema: WithContext<Thing>;
}

export function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

### `lib/structured-data.ts`

```ts
import type {
  Organization,
  WebSite,
  SoftwareApplication,
  BreadcrumbList,
  FAQPage,
  Article,
  WithContext,
} from 'schema-dts';

const BASE_URL = 'https://orbitbyforion.com';

// ─── Organization ─────────────────────────────────────────────────────────
export const organizationSchema: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'Forion',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  sameAs: [
    'https://twitter.com/forionhq',
    'https://github.com/forion',
    'https://linkedin.com/company/forion',
    'https://www.producthunt.com/products/orbit-by-forion',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'hello@forion.dev',
  },
};

// ─── WebSite (enables Sitelinks SearchBox in Google) ─────────────────────
export const websiteSchema: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'Orbit by Forion',
  publisher: { '@id': `${BASE_URL}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
    },
    // @ts-expect-error — schema-dts type limitation
    'query-input': 'required name=search_term_string',
  },
};

// ─── SoftwareApplication (for product pages) ─────────────────────────────
export const softwareAppSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Orbit',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  url: BASE_URL,
  description:
    'Agentic AI execution engine for generating, running, and self-correcting production code.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '120', // Update dynamically from your DB
  },
};

// ─── BreadcrumbList ────────────────────────────────────────────────────────
export function buildBreadcrumbSchema(
  crumbs: { name: string; url: string }[]
): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${BASE_URL}${crumb.url}`,
    })),
  };
}

// ─── FAQPage ───────────────────────────────────────────────────────────────
export function buildFAQSchema(
  items: { question: string; answer: string }[]
): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

// ─── Article (for blog posts) ──────────────────────────────────────────────
export function buildArticleSchema(post: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt: string;
  authorName: string;
  image?: string;
}): WithContext<Article> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    url: `${BASE_URL}/blog/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Person',
      name: post.authorName,
    },
    publisher: { '@id': `${BASE_URL}/#organization` },
    image: post.image ?? `${BASE_URL}/blog/${post.slug}/opengraph-image`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${post.slug}`,
    },
  };
}
```

---

## 7. Sitemap

### `app/sitemap.ts`

```ts
import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import { getAllDocs } from '@/lib/docs';

const BASE_URL = 'https://orbitbyforion.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ─── Static routes ────────────────────────────────────────────────────
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/docs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/changelog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  // ─── Dynamic: blog posts ──────────────────────────────────────────────
  const posts = await getAllPosts();
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // ─── Dynamic: docs pages ──────────────────────────────────────────────
  const docs = await getAllDocs();
  const docRoutes: MetadataRoute.Sitemap = docs.map((doc) => ({
    url: `${BASE_URL}/docs/${doc.slug}`,
    lastModified: new Date(doc.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes, ...docRoutes];
}
```

> Submit `/sitemap.xml` to Google Search Console immediately after first deploy.  
> Re-submit whenever you add a major new section.

---

## 8. Robots.txt

### `app/robots.ts`

```ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/dashboard/',
          '/_next/',
          '/admin/',
          '/private/',
          '/*.json$',   // Block raw JSON data endpoints
        ],
      },
      {
        // Prevent AI training crawlers from indexing your content
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'Google-Extended',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
    ],
    sitemap: 'https://orbitbyforion.com/sitemap.xml',
    host: 'https://orbitbyforion.com',
  };
}
```

---

## 9. OG Image Generation

### Default OG Image — `app/opengraph-image.tsx`

```tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Orbit by Forion — AI Code Generation Platform';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #111827 100%)',
          padding: '80px',
          fontFamily: 'Geist, sans-serif',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 40 }}>
          <div
            style={{
              width: 48,
              height: 48,
              background: '#6366f1',
              borderRadius: 12,
              marginRight: 16,
            }}
          />
          <span style={{ color: '#ffffff', fontSize: 28, fontWeight: 600 }}>
            Orbit by Forion
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            color: '#ffffff',
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            margin: 0,
            marginBottom: 24,
          }}
        >
          AI-Powered Code
          <br />
          Generation Platform
        </h1>

        {/* Subline */}
        <p style={{ color: '#9ca3af', fontSize: 28, margin: 0 }}>
          Build production apps with agentic AI
        </p>
      </div>
    ),
    { ...size }
  );
}
```

### Per-Post OG Image — `app/blog/[slug]/opengraph-image.tsx`

```tsx
import { ImageResponse } from 'next/og';
import { getPost } from '@/lib/blog';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function BlogOGImage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          background: '#0a0a0a',
          padding: '64px',
        }}
      >
        {/* Tag */}
        <div
          style={{
            display: 'flex',
            background: '#6366f120',
            border: '1px solid #6366f150',
            borderRadius: 8,
            padding: '8px 16px',
            color: '#818cf8',
            fontSize: 18,
            width: 'fit-content',
          }}
        >
          {post?.tags?.[0] ?? 'Orbit Blog'}
        </div>

        {/* Post title */}
        <h1
          style={{
            color: '#ffffff',
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.15,
            margin: 0,
          }}
        >
          {post?.title}
        </h1>

        {/* Author + date */}
        <div style={{ display: 'flex', alignItems: 'center', color: '#6b7280', fontSize: 20 }}>
          <span>{post?.author?.name}</span>
          <span style={{ margin: '0 12px' }}>·</span>
          <span>{new Date(post?.publishedAt ?? '').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
```

---

## 10. proxy.ts — Redirects, Canonicals & Trailing Slash

> **In Next.js 16.x, `middleware.ts` is deprecated. Rename to `proxy.ts` and rename your export accordingly.**

### `proxy.ts` (root level, same place as old middleware.ts)

```ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname, hostname } = url;

  // ─── 1. www → non-www canonical redirect ────────────────────────────
  if (hostname.startsWith('www.')) {
    url.hostname = hostname.replace(/^www\./, '');
    return NextResponse.redirect(url, { status: 301 });
  }

  // ─── 2. Trailing slash normalisation (remove) ────────────────────────
  if (pathname !== '/' && pathname.endsWith('/')) {
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, { status: 301 });
  }

  // ─── 3. Lowercase enforcement (prevents duplicate content) ───────────
  if (pathname !== pathname.toLowerCase()) {
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, { status: 301 });
  }

  // ─── 4. Legacy URL redirects ─────────────────────────────────────────
  const legacyRedirects: Record<string, string> = {
    '/home': '/',
    '/product': '/',
    '/orbit': '/',
    '/app': '/dashboard',
    '/get-started': '/docs/getting-started',
    '/join': '/signup',
  };

  if (legacyRedirects[pathname]) {
    url.pathname = legacyRedirects[pathname];
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
```

> Also add permanent redirects in `next.config.ts` for known old URLs — these run at build time and are faster than proxy:

```ts
// next.config.ts
async redirects() {
  return [
    { source: '/blog/old-post-slug', destination: '/blog/new-post-slug', permanent: true },
  ];
},
```

---

## 11. Cache Strategy with `use cache` & PPR

In Next.js 16, caching is opt-in. All routes render dynamically by default.

### Marketing page with PPR

```tsx
// app/(marketing)/pricing/page.tsx
import { Suspense } from 'react';
import { PricingTable } from '@/components/PricingTable';
import { Testimonials } from '@/components/Testimonials';

// Static shell — cached, served instantly to crawlers
export default function PricingPage() {
  return (
    <main>
      <h1>Simple Pricing</h1>
      {/* PPR: static shell renders instantly */}
      <Suspense fallback={<div>Loading plans...</div>}>
        <PricingTable />  {/* fetches live pricing from DB — dynamic */}
      </Suspense>
      <Testimonials />    {/* cached separately */}
    </main>
  );
}
```

### Caching blog content

```tsx
// app/blog/[slug]/page.tsx
async function getPost(slug: string) {
  'use cache';  // cache this function's output
  // cacheTag and cacheLife available for fine-grained invalidation
  const { unstable_cacheTag: cacheTag, unstable_cacheLife: cacheLife } = await import('next/cache');
  cacheTag(`post-${slug}`);
  cacheLife('hours'); // revalidate every hour

  return await db.post.findUnique({ where: { slug } });
}
```

### On-demand revalidation (for CMS webhooks)

```ts
// app/api/revalidate/route.ts
import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { slug, secret } = await request.json();

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  revalidateTag(`post-${slug}`);
  return NextResponse.json({ revalidated: true, slug });
}
```

---

## 12. Core Web Vitals — Technical Fixes

### LCP (Largest Contentful Paint) — target < 2.5s

```tsx
// Hero image — always add priority + fetchPriority
import Image from 'next/image';

<Image
  src="/hero.webp"
  alt="Orbit AI Code Generation Platform dashboard"
  width={1200}
  height={675}
  priority                         // disables lazy load, preloads the image
  fetchPriority="high"
  quality={90}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
/>
```

### CLS (Cumulative Layout Shift) — target < 0.1

```tsx
// Always provide width + height to reserve space before image loads
// Never omit these on above-the-fold images

// Skeleton placeholder for async content
function CardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-48 bg-gray-800 rounded-lg" />
      <div className="h-4 bg-gray-800 rounded mt-3 w-3/4" />
    </div>
  );
}

// Reserve space for ads or embeds explicitly
<div style={{ minHeight: '250px' }}>
  <Suspense fallback={<CardSkeleton />}>
    <DynamicComponent />
  </Suspense>
</div>
```

### INP (Interaction to Next Paint) — target < 200ms

```tsx
// Most marketing page components should be Server Components (no 'use client')
// Isolate interactivity into small leaf components

// ❌ Don't make a whole section a client component
'use client';
export function PricingSection() { ... }

// ✅ Only the interactive toggle needs to be client
'use client';
export function BillingToggle({ onChange }: { onChange: (v: string) => void }) {
  return <button onClick={() => onChange('annual')}>Annual</button>;
}

// The section itself stays a Server Component
import { BillingToggle } from './BillingToggle';
export function PricingSection() {
  return (
    <section>
      <BillingToggle onChange={...} />
      <PricingTable />
    </section>
  );
}
```

---

## 13. Fonts & Typography

```tsx
// app/layout.tsx
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',      // shows fallback font immediately — avoids invisible text
  preload: true,
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});
```

> Never use `display: 'block'` for body fonts — it holds the render until the font loads, hurting LCP.  
> Use `display: 'swap'` for body and `display: 'optional'` for decorative fonts.

---

## 14. Analytics Setup

### Google Analytics 4

```tsx
// app/layout.tsx — already covered above
import { GoogleAnalytics } from '@next/third-parties/google';
<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
```

### Vercel Analytics + Speed Insights

```bash
npm install @vercel/analytics @vercel/speed-insights
```

```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// In the body:
<Analytics />
<SpeedInsights />
```

> SpeedInsights sends **real user Core Web Vitals** per route to your Vercel dashboard. Essential for finding which pages hurt your ranking.

### Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property → URL prefix → `https://orbitbyforion.com`
3. Verify via the `verification.google` field in your root metadata
4. Submit sitemap → `https://orbitbyforion.com/sitemap.xml`
5. Check weekly: Impressions, Average Position, CTR, Coverage errors

---

## 15. Content Writing Recommendations

### Title Tag Formula

```
Primary Keyword — Benefit/Value | Brand
```

**Good examples:**
- `AI Code Generation — Build Apps 10× Faster | Orbit`
- `Agentic AI Execution Engine for React Apps | Orbit`
- `No-Code to Pro Code: Ship Faster with AI | Orbit by Forion`

**Rules:**
- Keep under 60 characters (Google truncates at ~580px)
- Lead with the keyword, not the brand
- Every page title must be unique — no duplicates across the site
- Avoid stop words at the start ("The", "A", "An")

### Meta Description Formula

```
[Action verb] + [what the product does] + [key benefit/proof] + [CTA]
```

**Good examples:**
- `Build and ship production React apps in minutes using Orbit's agentic AI engine. Multi-LLM routing, live sandbox, and self-healing code. Try free.`
- `Stop context-switching. Orbit writes, runs, and fixes your code in real time using multiple AI models. No setup. No config. Just results.`

**Rules:**
- Keep between 140–160 characters
- Every page must have a unique meta description
- Include the primary keyword naturally
- Always end with a soft CTA ("Try free", "Get started", "Learn more")
- Never keyword stuff — write for humans first

### Heading Hierarchy Rules

```
H1 → One per page. Matches or closely mirrors the title tag. Contains primary keyword.
H2 → Main sections. Each H2 targets a secondary keyword or question.
H3 → Subsections under H2. Specific, concrete.
H4–H6 → Avoid unless it's genuinely nested reference content (docs, specs).
```

**H1 examples for homepage:**
- `AI-Powered Code Generation for Developers`
- `Build Production Apps with an Agentic AI Engine`

**H2 examples:**
- `How Orbit Works` (feature section)
- `Why Teams Switch to Orbit` (benefits section)
- `From Prompt to Production in Minutes` (CTA section)
- `Frequently Asked Questions` (FAQ section)

### Content Length Guidelines by Page Type

| Page Type | Target Word Count | Why |
|---|---|---|
| Homepage | 800–1,200 | Signal relevance; too long feels like a wall |
| Landing page | 1,000–1,500 | Enough to cover benefits + objections |
| Blog post (informational) | 1,500–2,500 | Depth beats competitors for long-tail |
| Blog post (technical tutorial) | 2,000–4,000 | Thoroughness = backlinks |
| Docs page | 600–1,200 per topic | Focused; add "next steps" links |
| Comparison page | 1,500–2,000 | Cover all angles to win "X vs Y" searches |

### Keyword Strategy for Orbit/Forion

**Tier 1 — Primary (high competition, long game):**
- `AI code generation`
- `AI app builder`
- `AI coding assistant`

**Tier 2 — Secondary (medium competition, 3–6 months):**
- `agentic AI coding`
- `multi-LLM code generation`
- `AI React code generator`
- `Lovable alternative`
- `Bolt.new alternative`
- `AI sandbox development`

**Tier 3 — Long-tail (low competition, quick wins):**
- `how to generate React components with AI`
- `best AI tool for building web apps without code`
- `agentic AI execution engine for developers`
- `build a web app with AI agent`
- `LLM routing for code generation`
- `E2B sandbox AI coding`

> **Strategy:** Write Tier 3 blog posts first. They rank quickly, drive traffic, and create internal linking opportunities that lift your Tier 1 pages over time.

### Copywriting Tone Guidelines

**Voice:** Direct, technical-but-accessible, confident without being arrogant.  
**Audience:** Developers and technical founders who are tired of slow iteration cycles.  
**Avoid:** Buzzword soup ("leverage synergies", "next-gen AI-powered solutions").  
**Use:** Specifics over adjectives ("builds in 8 seconds" not "blazing fast").

**Opening paragraph formula for blog posts:**

```
Problem statement (1 sentence) →
Why the current solution fails (1–2 sentences) →
Tease the answer (1 sentence)
```

**Example:**
> Building a web app with AI still takes too long — you write the prompt, wait for output, copy it to your editor, fix the errors manually, and start over. Most AI tools help you write code but not run it. Orbit does both.

---

## 16. Blog & Docs Architecture

### Blog categories that compound for Orbit

```
/blog/tutorials/         ← How-to content, ranks for "how to X with AI"
/blog/comparisons/       ← "Orbit vs Lovable", "Orbit vs Bolt.new"
/blog/updates/           ← Changelog-style posts, signals freshness to Google
/blog/case-studies/      ← Customer stories, E-E-A-T signal
/blog/engineering/       ← Deep technical posts, earns backlinks from devs
```

### High-priority posts to write first (SEO quick wins)

1. **"Orbit vs Lovable — Which AI App Builder Is Right for You?"**  
   Targets: `lovable alternative`, `orbit vs lovable`  
   Intent: Comparison / bottom of funnel

2. **"How to Build a React App with an AI Agent in 10 Minutes"**  
   Targets: `build react app with AI`, `AI react generator`  
   Intent: Tutorial / middle of funnel

3. **"What Is an Agentic AI Execution Engine?"**  
   Targets: `agentic AI execution`, `agentic coding`  
   Intent: Informational / top of funnel

4. **"Multi-LLM Routing: Why One Model Isn't Enough for AI Code Generation"**  
   Targets: `multi-LLM routing`, `LLM routing code generation`  
   Intent: Thought leadership / earns backlinks

5. **"E2B Sandboxes: The Future of Safe AI Code Execution"**  
   Targets: `E2B sandbox`, `safe AI code execution`  
   Intent: Technical / earns dev backlinks

### Docs SEO structure

```
/docs/getting-started
/docs/how-it-works
/docs/llm-routing
/docs/sandbox-environment
/docs/api-reference
/docs/integrations/github
/docs/integrations/vercel
```

Every docs page should have:
- A clear H1 matching the URL slug concept
- A short description (used as meta description)
- "Was this helpful?" feedback widget (signals engagement to Google)
- "Next Steps" section with 2–3 internal links

---

## 17. Internal Linking Strategy

### Rules

1. **Every new blog post** must link to at least 2 existing posts and 1 product page.
2. **Every product page** must link to at least 1 relevant blog post.
3. **Docs pages** always link to related docs and the relevant feature on the product page.
4. **Homepage** links to your 3 highest-priority landing pages in the nav and in body copy.
5. **Use descriptive anchor text** — never "click here" or "read more". Use the keyword: "learn how multi-LLM routing works" not "read more".

### Anchor text pattern

```
❌ "Click here to learn more about our features"
✅ "Orbit's multi-LLM routing selects the best model for each task"
```

### Pillar + cluster model for Orbit

```
Pillar page: /ai-code-generation  (broad, authoritative)
  ↓ links to:
  /blog/tutorials/build-react-app-ai
  /blog/comparisons/orbit-vs-lovable
  /blog/engineering/multi-llm-routing
  /docs/how-it-works
  /docs/llm-routing
  ↑ all cluster pages link back to the pillar
```

---

## 18. Technical SEO Checklist

### Pre-Launch

- [ ] `metadataBase` set to production URL in root layout
- [ ] Every page has a unique `<title>` and `<meta name="description">`
- [ ] Every page has a `canonical` URL set in metadata
- [ ] `sitemap.ts` covers all indexable routes
- [ ] `robots.ts` blocks `/api/`, `/dashboard/`, `/_next/`
- [ ] `proxy.ts` enforces www redirect, trailing slash removal, lowercase
- [ ] Hero image uses `priority` prop in `next/image`
- [ ] All images have descriptive `alt` text (not filename)
- [ ] All images specify `width` and `height`
- [ ] Fonts loaded with `next/font` using `display: 'swap'`
- [ ] `site.webmanifest` present and valid
- [ ] `favicon.ico`, `apple-touch-icon.png`, `icon.svg` present in `/public`
- [ ] Organization + WebSite JSON-LD on every page
- [ ] Article JSON-LD on every blog post
- [ ] No broken internal links (run `broken-link-checker` before launch)
- [ ] HTTPS enforced, HTTP → HTTPS redirect configured at host level
- [ ] No duplicate content (check with Screaming Frog or similar)

### Post-Launch (Week 1)

- [ ] Google Search Console property verified
- [ ] Sitemap submitted to Search Console
- [ ] Bing Webmaster Tools verified (second largest crawler)
- [ ] GA4 data flowing (check Realtime report)
- [ ] Vercel Speed Insights showing Core Web Vitals data
- [ ] Check PageSpeed Insights: [pagespeed.web.dev](https://pagespeed.web.dev) — target 90+ on all metrics
- [ ] Run [Rich Results Test](https://search.google.com/test/rich-results) on homepage, a blog post, and pricing page

### Monthly Checks

- [ ] Search Console: any crawl errors? Fix them within 48 hours.
- [ ] Search Console: any manual actions? Rare but critical.
- [ ] Core Web Vitals report in Search Console: any pages in "Poor" or "Needs Improvement"?
- [ ] Broken links scan
- [ ] New blog posts published and indexed (request indexing via URL Inspection tool)

---

## 19. Content Calendar Framework

### First 90 Days (Priority Order)

**Month 1 — Foundation**

| Week | Content | Type | Target Keyword |
|------|---------|------|----------------|
| 1 | Homepage copy finalized | Page | `AI code generation` |
| 1 | Docs: Getting Started | Docs | `orbit getting started` |
| 2 | Blog: What Is an Agentic AI Execution Engine? | Blog | `agentic AI execution engine` |
| 3 | Blog: Orbit vs Lovable | Blog | `lovable alternative` |
| 4 | Blog: How to Build a React App with AI in 10 Minutes | Tutorial | `build react app with AI` |

**Month 2 — Depth**

| Week | Content | Type | Target Keyword |
|------|---------|------|----------------|
| 5 | Blog: Multi-LLM Routing Explained | Blog | `multi-LLM routing` |
| 6 | Blog: Orbit vs Bolt.new | Comparison | `bolt.new alternative` |
| 7 | Docs: LLM Routing Guide | Docs | `orbit LLM routing` |
| 8 | Blog: E2B Sandboxes for AI Code Execution | Technical | `E2B sandbox AI` |

**Month 3 — Authority**

| Week | Content | Type | Target Keyword |
|------|---------|------|----------------|
| 9 | Blog: Case Study — [Customer Name] shipped X in Y hours | Case Study | `orbit case study` |
| 10 | Blog: The Problem with Frontend AI Tools (and How We Solved It) | Thought Leadership | `AI frontend tools` |
| 11 | Changelog: [Major feature] is live | Update | brand |
| 12 | Blog: How We Built Orbit's Plan-Execute Architecture | Engineering | `agentic coding architecture` |

### Publishing Cadence

- **Minimum viable:** 2 posts/month. Below this and Google won't see you as an active publisher.
- **Good:** 4 posts/month (1/week). Builds authority faster, more indexable pages.
- **Target:** 6–8 posts/month once you have a content system running.
- **Quality rule:** One 2,000-word post beats four 500-word posts every time.

### Content promotion after publishing

1. Share on Twitter/X with a key insight from the post (not just the link)
2. Post in relevant communities: Indie Hackers, Dev.to, HackerNews (Show HN for launches)
3. Send to email list (even 50 subscribers builds early engagement signal)
4. Reply to Reddit/HN threads where the topic is relevant — link when genuinely helpful
5. Cross-post technical posts on Dev.to with canonical link back to your site

---

## Reference Links

- [Next.js 16 Release Notes](https://nextjs.org/blog/next-16)
- [Next.js 16.2 Release Notes](https://nextjs.org/blog/next-16-2)
- [Next.js Metadata API Reference](https://nextjs.org/docs/app/api-reference/file-conventions/metadata)
- [Next.js Version 16 Upgrade Guide](https://nextjs.org/docs/app/guides/upgrading/version-16)
- [Google Search Console](https://search.google.com/search-console)
- [PageSpeed Insights](https://pagespeed.web.dev)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Reference](https://schema.org)
- [schema-dts TypeScript types](https://github.com/google/schema-dts)
- [Core Web Vitals Overview](https://web.dev/vitals)

---

*Last updated: July 2026 · Next.js 16.2.10 · React 19.2*
