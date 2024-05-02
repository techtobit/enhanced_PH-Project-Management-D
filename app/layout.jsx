import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import ReactQueryProvider from './utils/Providers/ReactQueryProvider'
export const metadata = {
  title: "PMD",
  description: "Generated by create next app",
};

export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}