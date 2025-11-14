const baseUrl = `/images`;
const iconUrl = `https://img.icons8.com`;

export const images = {
  brand: {
    icon: {
      light: `${baseUrl}/brand/icon/light.png`,
      dark: `${baseUrl}/brand/icon/dark.png`,
    },
  },

  me: `${baseUrl}/me.png`,
  banner: `${baseUrl}/banner.webp`,

  card: {
    dark: {
      landscape: `${baseUrl}/card/dark.webp`,
      potrait: `${baseUrl}/card/dark-potrait.webp`,
    },
    light: {
      landscape: `${baseUrl}/card/light.webp`,
      potrait: `${baseUrl}/card/light-potrait.webp`,
    },
  },

  cv: {
    dark: {
      landscape: `${baseUrl}/cv/dark.webp`,
      potrait: `${baseUrl}/cv/dark-potrait.webp`,
    },
    light: {
      landscape: `${baseUrl}/cv/light.webp`,
      potrait: `${baseUrl}/cv/light-potrait.webp`,
    },
  },

  background: {
    image3lv7ey: `${baseUrl}/background/3lv7ey.webp`,
    image9dvkw8: `${baseUrl}/background/9dvkw8.webp`,
    imagegprzyd: `${baseUrl}/background/gprzyd.webp`,
    imagegprzydBlur: `${baseUrl}/background/gprzyd-blur.png`,
    imagejx29gq: `${baseUrl}/background/jx29gq.webp`,
    imageyx17dk: `${baseUrl}/background/yx17dk.webp`,
    noise: `${baseUrl}/background/noise.png`,
  },

  icons: {
    social: {
      facebook: `${iconUrl}/fluency/96/facebook.png`,
      instagram: `${iconUrl}/fluency/96/instagram-new.png`,
      twitterx: `${iconUrl}/color/96/twitterx--v1.png`,
      linkedin: `${iconUrl}/fluency/96/linkedin.png`,
      whatsapp: `${iconUrl}/color/96/whatsapp--v1.png`,
    },

    google: `${iconUrl}/fluency/96/google-logo.png`,
    credentials: `${iconUrl}/material-rounded/96/mail.png`,
    nextjs: `${iconUrl}/fluency/48/nextjs.png`,
  },
};
