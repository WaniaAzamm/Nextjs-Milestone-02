// import "./globals.css";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <div>
          <Navbar />
           {children}
            <Footer />
        </div>
      </body>
    </html>
  );
}
