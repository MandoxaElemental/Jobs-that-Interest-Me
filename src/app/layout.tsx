import type { Metadata } from "next";
import "./globals.css";
import { NavbarComponent } from "./Components/NavbarComponent";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
