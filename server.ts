import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json());

  // API Endpoint to query Gemini about Tanisk Sahu
  app.post('/api/gemini/chat', async (req, res) => {
    try {
      const { prompt } = req.body;
      if (!prompt || typeof prompt !== 'string') {
        return res.status(400).json({ error: 'Prompt is required' });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      
      const systemInstruction = `You are "Tanisk AI", an ultra-smart executive career assistant and portfolio chatbot representing Tanisk Sahu.
      
Key Background & Highlights of Tanisk Sahu:
- Name: Tanisk Sahu
- Headline: Business Analytics Student | AI Product Innovator | Data & Brand Strategist | Canva Power Creator
- Education: Bachelor's in Business Analytics & Technology (CGPA: 9.2 / 10.0, Top 5%)
- Contact: Email: tanisk.sahu@example.com | Phone: +91 98765 43210 | Location: India (Open to Relocation & Remote)
- Social Profiles:
  * Instagram: https://instagram.com/tanishk._sh
  * LinkedIn: https://linkedin.com/in/tanisksahu
  * GitHub: https://github.com/tanisksahu
- Primary Technical & Business Skills:
  * Business Intelligence: Power BI, DAX, Tableau, SQL Data Modeling, Financial Dashboards
  * Programming & AI: Python (Pandas, NumPy, Scikit-Learn), Prompt Engineering, Gemini API, LLM Fine-tuning
  * Visual & Brand Design: Canva Pro Master (40+ Corporate Decks, Pitch Decks, Annual Reports)
  * Management: Agile/Scrum, Product Strategy, Market Research, Client Communication
- Key Featured Projects:
  1. StudyNex - AI-Powered Academic Companion (Full-stack AI platform with automated flashcard generation, active recall quizzing)
  2. Enterprise Retail Analytics Dashboard (Power BI & SQL suite analyzing $12M revenue across 45 stores with customer lifetime value prediction)
  3. Executive Pitch Decks & Brand Kits (Canva Master Portfolio with 40+ high-converting decks)
  4. FinTech Algorithmic Risk Assessor (Python ML model predicting loan defaults with 94.2% accuracy)
- Testimonials & Endorsements: Praise from Professors, Internship Directors, and Hackathon Judges highlighting analytical rigor, 3D design flair, and leadership.

Instructions:
Respond in a friendly, crisp, highly impressive, and professional tone. Highlight specific metrics (e.g. 9.2 CGPA, 40+ Canva decks, 94.2% ML accuracy) where relevant. Keep answers under 3-4 bullet points or 150 words unless asked for a detailed pitch.`;

      if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
        const ai = new GoogleGenAI({ apiKey });
        const model = 'gemini-2.5-flash';
        
        const response = await ai.models.generateContent({
          model,
          contents: [
            { role: 'user', parts: [{ text: `${systemInstruction}\n\nUser Question: ${prompt}` }] }
          ]
        });

        const text = response.text || 'Tanisk Sahu is an exceptional candidate specializing in Business Analytics, AI Product Development, and Canva Visual Strategy. Please contact him at tanisk.sahu@example.com!';
        return res.json({ answer: text });
      } else {
        // High-quality smart offline fallback based on keywords
        const lower = prompt.toLowerCase();
        let fallbackText = '';

        if (lower.includes('hire') || lower.includes('why') || lower.includes('deloitte') || lower.includes('pwc') || lower.includes('recruiter')) {
          fallbackText = "⚡ **Why Hire Tanisk Sahu?**\n• **Academic Distinction**: 7.5 / 10 CGPA in Business Analytics (Top 5% of class).\n• **Dual Power**: Blends deep analytical modeling (Power BI, SQL, Python ML) with high-impact visual storytelling (40+ Canva pitch decks).\n• **AI Innovation**: Built StudyNex AI and enterprise predictive models with 94%+ accuracy.\n• **Ready to Deliver**: Immediate availability for internships and full-time analyst/product roles!";
        } else if (lower.includes('skill') || lower.includes('tech') || lower.includes('tools')) {
          fallbackText = "🛠 **Tanisk's Core Tech Stack:**\n• **Analytics & BI**: Power BI, DAX, Tableau, SQL, Excel Advanced Financial Modeling\n• **AI & Code**: Python (Pandas, Scikit-learn), Gemini API, Prompt Engineering\n• **Visual Design**: Canva Pro Master, Figma, Brand System Architecture\n• **Soft Skills**: Executive Presentation, Stakeholder Management, Agile Methods";
        } else if (lower.includes('canva') || lower.includes('design') || lower.includes('pitch')) {
          fallbackText = "🎨 **Canva & Visual Design Mastery:**\nTanisk has authored over 40+ corporate pitch decks, investor presentations, and annual reports on Canva. His designs have helped startups raise capital and executives communicate complex data effortlessly!";
        } else if (lower.includes('contact') || lower.includes('email') || lower.includes('instagram') || lower.includes('reach')) {
          fallbackText = "📬 **Contact Tanisk Sahu:**\n• Email: tanisksahud@gmail.com • Instagram: https://instagram.com/tanishk._sh\n• LinkedIn: https://linkedin.com/in/tanisksahu\n• Location: India (Open to Remote & Relocation)";
        } else {
          fallbackText = `🤖 **Tanisk AI Overview:**\nTanisk Sahu is a high-achieving Business Analytics & AI Innovator (7.5 CGPA). He combines SQL, Power BI, Python Machine Learning, and Canva visual branding to turn complex data into actionable business strategy. Reach out via email or LinkedIn to connect!`;
        }

        return res.json({ answer: fallbackText });
      }
    } catch (err: any) {
      console.error('Gemini API Error:', err);
      res.status(500).json({ 
        answer: "Tanisk Sahu is a top-tier Business Analytics & AI specialist (9.2 CGPA). Feel free to reach out directly via email at tanisk.sahu@example.com or connect on LinkedIn!" 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
