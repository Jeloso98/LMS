import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Página de inicio",
  description: "Página que va mostrar el contenido de la app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main>{children}</main>
      </div>
    </ClerkProvider>
  );
}
