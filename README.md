{
  👇 "rewrites" tells Vercel to redirect all incoming requests
  to a specific file — in this case, the main SPA entry point (index.html)
  "rewrites": [
    { 
      👇 This matches ANY route (e.g. /, /about, /contact, /aaa, etc.)
      "source": "/(.*)",

      👇 Instead of showing a 404 error, Vercel will serve index.html
      so that your JavaScript router (router.js) can decide what to show.
      "destination": "/index.html"
    }
  ]
}