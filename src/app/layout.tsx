import type { Metadata } from "next";
import { Hammersmith_One } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const fontPrimary = Hammersmith_One({
  weight: ["400"],
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "Eliseu Miguel | Dev",
  description:
    "Este é o meu projeto de criação de portfólio pessoal. Criado com o interesse de me apresentar ao DEV e um local onde você possa acessar meus posts, projetos e contatos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${fontPrimary.className}`}>{children}</body>
    </html>
  );
}
