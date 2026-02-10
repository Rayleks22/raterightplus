export const metadata = {
    title: 'RateRightPlus – Freelance Rate Calculator',
    description: 'Calculate your freelance rates accurately with RateRightPlus. Data-driven tools, city adjustments, and global pricing insights.'
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body style={{ margin: 0, fontFamily: 'system-ui' }}>
          {children}
        </body>
      </html>
    );
  }
  