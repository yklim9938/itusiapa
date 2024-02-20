// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/alert.css'
  ],
  app: {
    head: {
      link: [
        { rel: "icon", hid: "icon", type: "image/png", href: `https://itusiapa.web.app/favicon-32x32.png` },
        { rel: "apple-touch-icon", hid: "icon_1", sizes: "57x57", href: `https://itusiapa.web.app/apple-icon-57x57.png` },
        { rel: "apple-touch-icon", hid: "icon_2", sizes: "60x60", href: `https://itusiapa.web.app/apple-icon-60x60.png` },
        { rel: "apple-touch-icon", hid: "icon_3", sizes: "72x72", href: `https://itusiapa.web.app/apple-icon-72x72.png` },
        { rel: "apple-touch-icon", hid: "icon_4", sizes: "76x76", href: `https://itusiapa.web.app/apple-icon-76x76.png` },
        { rel: "apple-touch-icon", hid: "icon_5", sizes: "114x114", href: `https://itusiapa.web.app/apple-icon-114x114.png` },
        { rel: "apple-touch-icon", hid: "icon_6", sizes: "120x120", href: `https://itusiapa.web.app/apple-icon-120x120.png` },
        { rel: "apple-touch-icon", hid: "icon_7", sizes: "144x144", href: `https://itusiapa.web.app/apple-icon-144x144.png` },
        { rel: "apple-touch-icon", hid: "icon_8", sizes: "152x152", href: `https://itusiapa.web.app/apple-icon-152x152.png` },
        { rel: "apple-touch-icon", hid: "icon_9", sizes: "180x180", href: `https://itusiapa.web.app/apple-icon-180x180.png` },
        { rel: "icon", type: "image/png", hid: "icon_11", sizes: "192x192", href: `https://itusiapa.web.app/android-icon-192x192.png` },
        { rel: "icon", type: "image/png", hid: "icon_12", sizes: "32x32", href: `https://itusiapa.web.app/favicon-32x32.png` },
        { rel: "icon", type: "image/png", hid: "icon_13", sizes: "96x96", href: `https://itusiapa.web.app/favicon-96x96.png` },
        { rel: "icon", type: "image/png", hid: "icon_14", sizes: "16x16", href: `https://itusiapa.web.app/favicon-16x16.png` },
        /* { name: "msapplication-TileColor", content: "#ffffff" },
        { name: "msapplication-TileImage", hid: "icon_15", content: `/ms-icon-144x144.png` },
        { name: "theme-color", content: "#ffffff" }, */
        // { rel: "manifest", hid: "manifest", href: `/manifest.json` }, // pwa module will generate manifest
    ],
    }
  }
})
