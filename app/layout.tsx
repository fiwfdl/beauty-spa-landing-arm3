import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Serenity Spa | Return to yourself',
  description: 'Slow beauty rituals and restorative treatments in the heart of the city.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
