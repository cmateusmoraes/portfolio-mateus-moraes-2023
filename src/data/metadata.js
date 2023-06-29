const titleShare = "Mateus Moraes - Desenvolvedor Front-End";
const descriptionShare =
  "Desenvolvedor especialista front-end com mais de 20 anos de experiência | React, Javascript, Next.js, Typescript, HTML, CSS.";
const urlShare = "https://mateus-moraes.vercel.app";

export const metadataInfo = {
  title: titleShare,
  description: descriptionShare,
  openGraph: {
    title: titleShare,
    description: descriptionShare,
    url: urlShare,
    siteName: titleShare,
    images: [
      {
        url: `${urlShare}/image/img-share.jpg`,
        width: 800,
        height: 546,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: titleShare,
    description: descriptionShare,
    creator: "@cmateusmoraes",
    creatorId: "1467726470533754880",
    images: [`${urlShare}image/img-share.jpg`],
  },
};
