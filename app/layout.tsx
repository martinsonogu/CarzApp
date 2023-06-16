import { Footer, Navbar } from "./component";
import "./globals.css";

export const metadata = {
  title: "CarzApp",
  description: "Discover the best cars in Africa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
