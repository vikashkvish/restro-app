import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Restro",
  description: "Order food, tea and coffee online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-stone-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}