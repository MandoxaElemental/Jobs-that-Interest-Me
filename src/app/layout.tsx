import type { Metadata } from "next";
import "./globals.css";
import { NavbarComponent } from "./Components/NavbarComponent";

export const metadata: Metadata = {
  title: "Jobs that Interest Me",
  description: "Some Odd Jobs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavbarComponent/>
        {children}
      </body>
    </html>
  );
}
