import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "BuiltBy Studio — We Build the Web. You Build the Business.",
  description:
    "BuiltBy Studio is a forward-thinking web development agency helping businesses of every size establish, strengthen, and grow their digital presence.",
  keywords:
    "web development, website design, e-commerce, branding, SEO, digital presence",
  icons: {
    icon: "/logo/logo.png",
  },
  openGraph: {
    title: "BuiltBy Studio",
    description: "We Build the Web. You Build the Business.",
    type: "website",
    url: "https://builtbystudio.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
