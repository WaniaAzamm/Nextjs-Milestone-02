// import "./globals.css";

import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
