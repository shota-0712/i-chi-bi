// This is a service worker for caching assets and enabling offline functionality

const CACHE_NAME = 'ichimi-cache-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo.svg'
];

// URLs to exclude from caching (analytics, etc.)
const EXCLUDE_FROM_CACHE = [
  'googletagmanager.com',
  'google-analytics.com',
  'analytics',
  'gtag',
  'gtm',
  'platform.twitter.com',
  'connect.facebook.net',
  'instagram.com/embed'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  // Activate immediately
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => {
            return cacheName !== CACHE_NAME;
          })
          .map((cacheName) => {
            return caches.delete(cacheName);
          })
      );
    })
  );
  // Take control of all clients
  event.waitUntil(clients.claim());
});

// Helper function to check if URL should be cached
function shouldCache(url) {
  // Don't cache third-party requests except for image CDNs we use
  if (!url.includes('i-chi-bi.com') && !url.includes('i.ibb.co')) {
    
    // Specifically check for analytics URLs to exclude
    for (const excludePattern of EXCLUDE_FROM_CACHE) {
      if (url.includes(excludePattern)) {
        return false;
      }
    }
  }
  
  return true;
}

// Fetch event - serve from cache if available, otherwise fetch from network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip analytics and tracking requests
  if (!shouldCache(event.request.url)) return;
  
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return the response from the cached version
      if (response) {
        return response;
      }

      // Not in cache - return the result from the live server
      return fetch(event.request).then((response) => {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // Clone the response since we need to use it in two places
        const responseToCache = response.clone();

        // Add the response to the cache
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      }).catch(() => {
        // If fetch fails (offline), try to return a cached fallback for HTML pages
        if (event.request.headers.get('Accept').includes('text/html')) {
          return caches.match('/');
        }
      });
    })
  );
});

// Handle push notifications (if needed in the future)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    
    const options = {
      body: data.body || 'お知らせがあります',
      icon: '/logo.svg',
      badge: '/logo.svg'
    };
    
    event.waitUntil(
      self.registration.showNotification('一期一美', options)
    );
  }
});
