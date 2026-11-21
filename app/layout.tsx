import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import { profile } from "@/lib/data";
import "./globals.css";

const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: { default: "John Earl Flores | IT Student & Web Developer", template: "%s | John Earl Flores" },
  description:
    "Portfolio of John Earl Flores, a 2nd year Information Technology student building web apps with Next.js and TypeScript.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Nav />
        {children}
        <footer className="site-footer">
          <div className="wrap">
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <span>
              <a href={profile.github}>GitHub</a>
              <a href={profile.linkedin}>LinkedIn</a>
              <a href={`mailto:${profile.email}`}>Email</a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
