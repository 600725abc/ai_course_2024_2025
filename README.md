<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# NTU EMBA Generative AI Learning Record

This project records the learning milestones of the NTU EMBA Generative AI course.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env.local` file and add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

## 🛠️ Development

### Run Locally
```bash
npm run dev
```
The app will be available at `http://localhost:3000`.

### Build
To create a production build:
```bash
npm run build
```

## 📦 Deployment

This project is configured for direct deployment to **GitHub Pages** via GitHub Actions.
Any push to the `main` branch will automatically trigger the deployment workflow.
