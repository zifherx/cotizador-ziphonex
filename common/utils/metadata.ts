import { Metadata } from "next";

export const METADATA: Metadata = {
  title: {
    template: "%s | Ziphonex Tech",
    default: "Cotizador",
  },
  description: "",
  generator: "Ziphonex Tech",
  referrer: "origin-when-cross-origin",
  keywords:
    "transformación digital, desarrollo web, marketing digital, páginas web, e-commerce, SEO, Perú",
  authors: [{ name: "Ziphonex" }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Cotizador Ziphonex",
    description: "Generador de cotizaciones de componentes",
    type: "website",
    locale: "es_PE",
  },
};
