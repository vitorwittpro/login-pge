import './globals.css';

export const metadata = {
  title: 'Login Simulation',
  description: 'Simulação de login com Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
