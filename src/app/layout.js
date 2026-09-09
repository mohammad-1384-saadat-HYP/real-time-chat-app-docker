import { Geist, Geist_Mono } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { Slide, ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "chat room",
  description: "real time chat application",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="size-full bg-background text-foreground relative" dir="rtl">
        <ToastContainer
          position="top-left"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />
        {children}
      </body>
    </html>
  );
}
