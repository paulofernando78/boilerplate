### ⚙️ Vercel Configuration for SPA Routing

When deploying a **Single Page Application (SPA)** to **Vercel**, you need to rewrite all incoming routes to `index.html`.  
This ensures that your client-side router (like `router.js`) can handle navigation instead of the server returning a 404 error.

Add a file named **`vercel.json`** to the root of your project with the following content:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}