import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Amazon V2",
  description: "Modern ECommerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          {children}
          <footer className="footer-center p-4 bg-base-300 text-base-content">
            <p>Copyright &copy; 2024 - All right reserved by Amazon</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
