---
description: How to deploy the Wet World website to Vercel
---

To deploy your Next.js site to Vercel, follow these steps:

### 1. Push to GitHub, GitLab, or Bitbucket
Ensure your code is pushed to a remote repository. Vercel integrates seamlessly with these platforms for automatic deployments.

### 2. Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in.
2. Click **"Add New"** -> **"Project"**.
3. Import your repository.

### 3. Configure Framework
Vercel will automatically detect **Next.js**. You usually don't need to change any build settings.

### 4. Deploy
Click **"Deploy"**. Vercel will build your project and provide a public URL.

### 5. Media Files (Important)
Since you added a `public/media` folder, make sure you've added your assets there before deploying. These files will be served statically by Vercel.

---
// turbo
### Quick Deploy via CLI (Optional)
If you have the Vercel CLI installed, you can run:
`npx vercel`
