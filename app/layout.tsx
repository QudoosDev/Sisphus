import type {Metadata} from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css'; // Global styles

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Sisyphus Design Agency',
  description: 'Professional Design Agency',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        <link 
          rel="icon" 
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' fill='none'><circle cx='18' cy='24' r='8' stroke='%232563EB' stroke-width='5'/><circle cx='30' cy='24' r='8' stroke='%232563EB' stroke-width='5'/><line x1='12' y1='36' x2='36' y2='12' stroke='%232563EB' stroke-width='5' stroke-linecap='round'/></svg>"
        />
      </head>
      <body suppressHydrationWarning className="font-body antialiased text-[#111827] bg-[#FFFFFF]">
        {children}
      </body>
    </html>
  );
}
