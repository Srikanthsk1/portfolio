# Alex AI | Data Scientist & Developer Portfolio

A stunning, high-performance portfolio for data scientists and AI developers. This project features glassmorphism design, interactive data visualizations with Recharts, and a built-in AI assistant powered by Google's Gemini Pro.

## 🚀 Features

- **AI Neural Interface**: A built-in chatbot powered by `gemini-3-flash-preview` that acts as Alex's digital twin.
- **AI Image Generation**: Projects feature a "Change Image with AI" button that uses `gemini-2.5-flash-image` to generate conceptual 3D renders.
- **Data-Driven Visuals**: Project cards include live sparklines/charts built with Recharts to visualize model performance.
- **Premium Aesthetics**: Glassmorphism, background neural grids, grain filters, and custom smooth animations.
- **Responsive Architecture**: Fully optimized for mobile, tablet, and ultra-wide desktop screens.

## 🛠️ Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI Model**: Google Gemini API (@google/genai)
- **Charts**: Recharts
- **Icons**: SVG + Emoji

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- A Google Gemini API Key. Get it for free at [Google AI Studio](https://aistudio.google.com/).

### Installation & Local Development

1. **Clone the repository**:
   ```bash
   git clone <your-repository-url>
   cd <project-folder>
   ```

2. **Setup your environment**:
   Create a `.env` file in the root directory:
   ```env
   # Replace with your actual Gemini API Key
   API_KEY=your_gemini_api_key_here
   ```

3. **Install dependencies**:
   This project is configured to use modern ESM modules. Using **Vite** is highly recommended for the best experience:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   # or if using vite directly
   npx vite
   ```

5. **Open the app**:
   Navigate to `http://localhost:5173` in your browser.

## 🌍 Deployment

### Vercel / Netlify (Recommended)

1. Connect your GitHub repository to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
2. During the setup, add an **Environment Variable**:
   - **Key**: `API_KEY`
   - **Value**: `your_actual_api_key`
3. Deploy. The platform will automatically handle the build process.

### Important Note on API Security
For production use, it is recommended to proxy your Gemini API calls through a backend to keep your API key hidden from the client-side code. This portfolio is currently configured for direct client-side calls for demonstration purposes.

## 📁 Project Structure

- `index.tsx`: Application entry point.
- `App.tsx`: Main routing and page layout.
- `components/`: Modular UI components (Hero, Skills, AIPlayground, etc.).
- `services/`: API integration logic (`geminiService.ts`).
- `constants.ts`: Centralized data store for projects, skills, and certifications.
- `types.ts`: TypeScript interfaces for the project.

## 📄 License

Built with ❤️ by Alex. Distributed under the MIT License.