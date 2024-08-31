import { Inter, Assistant } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const assistant = Assistant({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${assistant.className}`}>
        {children}
      </body>
    </html>
  );
}
