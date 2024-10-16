
import "./globals.css";
// import Navbar from "../../components/Header";
// import Footer from "../../components/Footer";
import React from "react";

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html>
        <head></head>
        <body>
  

        {children}
      
       </body> 
      </html>
  );
}
