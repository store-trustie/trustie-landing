import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Trustflow - Collect, manage, and display reviews all in one place",
  description: "Efficiently manage your store's social proof, build trust with elegant widgets, and boost productivity.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FDFDFD] text-[#111111]">{children}</body>
    </html>
  );
}
