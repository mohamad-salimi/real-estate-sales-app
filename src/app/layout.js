import Layout from "@/layout/Layout";
import "./globals.css";
import { yekan } from "@/utils/fonts";
import NextAuthProvider from "@/providers/NextAuthProvider";

export const metadata = {
  title: "املاک | پروژه خرید و فروش املاک",
  description:
    "این سایت برای نمونه کار من (محمد سلیمی) است و برای خرید و فروش املاک استفاده میشود.",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
