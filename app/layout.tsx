import NextTopLoader from "nextjs-toploader";
import { GlobalContext } from "@/context/Global-Context";
import { METADATA } from "@/common/utils/metadata";
import { geistMono, geistSans } from "@/common/fonts";

import "./globals.css";

export const metadata = METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalContext>
          <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          />
          {children}
        </GlobalContext>
      </body>
    </html>
  );
}
