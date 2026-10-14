import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Hassanain Abbas | AI Agent & Automation Architect',
  description: 'Clean light aesthetic portfolio of Hassanain Abbas — Senior AI Agent & Automation Architect specializing in Autonomous AI Agents, n8n Orchestrations, LangChain, RAG Systems, and Web Scraping.',
  keywords: [
    'AI Agent Development',
    'AI Automation',
    'n8n Integration',
    'LangChain',
    'OpenAI API',
    'RAG System',
    'Web Scraping',
    'Hassanain Abbas',
    'Automation Architect',
  ],
  authors: [{ name: 'Hassanain Abbas' }],
  creator: 'Hassanain Abbas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-[#F8FAFC] text-slate-800 min-h-screen selection:bg-[#FF6D5A]/20 selection:text-[#FF6D5A]`}>
        {children}
      </body>
    </html>
  );
}
