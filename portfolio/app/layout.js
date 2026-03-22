import "./globals.css";

export const metadata = {
  title: "Aditya | Full Stack Developer",
  description:
    "Portfolio of Ayush Shukla — Full Stack Web Developer specializing in React, Next.js, Node.js, Spring Boot, and AI-driven systems. Building scalable, high-performance web applications.",
  keywords: [
    "Ayush Shukla",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Spring Boot",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Ayush Shukla" }],
  openGraph: {
    title: "Ayush Shukla | Full Stack Developer",
    description:
      "Full Stack Developer crafting scalable web applications with modern technologies.",
    url: "https://ayushshukla.dev",
    siteName: "Ayush Shukla Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
