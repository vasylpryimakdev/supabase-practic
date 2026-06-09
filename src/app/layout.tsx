import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import CustomLayout from "@/custom-layout";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Shey-Fit-Gym (Dev)",
  description: "A gym and fitness website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <CustomLayout>{children}</CustomLayout>
          <Toaster position="top-center" reverseOrder={false} />
        </body>
      </html>
    </ClerkProvider>
  );
}
