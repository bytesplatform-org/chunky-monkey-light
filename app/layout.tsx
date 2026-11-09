import type { Metadata } from "next";
import {
  Big_Shoulders,
  Bricolage_Grotesque,
  Dela_Gothic_One,
  Silkscreen,
} from "next/font/google";
import "./globals.css";

const dela = Dela_Gothic_One({ weight: "400", subsets: ["latin"], variable: "--font-dela" });
const shoulders = Big_Shoulders({ subsets: ["latin"], variable: "--font-shoulders" });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });
const silkscreen = Silkscreen({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-silkscreen" });

const description =
  "Rides, arcade games and unforgettable moments at Chunky Monkey amusement parks at DHA Phase IV and Saima Jinnah Icon Mall, Karachi. Open Monday to Sunday, 4PM to midnight.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://chunkymonkey.com.pk"),
  title: "Chunky Monkey | Insert Fun. Press Start.",
  description,
  openGraph: {
    title: "Chunky Monkey | Insert Fun. Press Start.",
    description,
    images: [{ url: "/media/park/front.jpg", width: 2000, height: 925, alt: "The Chunky Monkey building and entrance" }],
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dela.variable} ${shoulders.variable} ${bricolage.variable} ${silkscreen.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
