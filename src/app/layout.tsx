// import type { Metadata } from "next";
// import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
// import "./globals.css";
// import Script from "next/script";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const playfair_display = Playfair_Display({
//   variable: "--font-playfair_display",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Lycan International",
//   description: "Lycan International",
//   verification: {
//     google: "google3cbf70aa2534****",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} ${playfair_display.variable} antialiased`}
//       >
//         {children}
//         <Script id="tawk-to" strategy="afterInteractive">
//           {`
//             var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
//             (function(){
//               var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
//               s1.async=true;
//               s1.src='https://embed.tawk.to/68e3947a2243b71952956804/1j6sfo047';
//               s1.charset='UTF-8';
//               s1.setAttribute('crossorigin','*');
//               s0.parentNode.insertBefore(s1,s0);
//             })();
//           `}
//         </Script>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair_display = Playfair_Display({
  variable: "--font-playfair_display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lycan International",
  description:
    "Lycan International offers innovative solutions for global business growth, education, and community development.",
  keywords: [
    "Lycan International",
    "business growth",
    "digital transformation",
    "education",
    "community development",
  ],
  verification: {
    google: "google3cbf70aa2534b55b",
  },
  openGraph: {
    title: "Lycan International",
    description:
      "Innovative solutions for global business growth, education, and community development.",
    url: "https://www.lycaninternational.com",
    siteName: "Lycan International",
    images: [
      {
        url: "https://www.lycaninternational.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lycan International Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lycan International",
    description:
      "Innovative solutions for global business growth, education, and community development.",
    images: ["https://www.lycaninternational.com/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://www.lycaninternational.com",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Lycan International",
              url: "https://www.lycaninternational.com",
              logo: "https://www.lycaninternational.com/logo.png",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair_display.variable} antialiased`}
      >
        {children}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/68e3947a2243b71952956804/1j6sfo047';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}