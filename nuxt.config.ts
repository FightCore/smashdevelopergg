export default {
  env: {},
  head: {
    title: "smashdevelopergg",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "The resource for and from the Smash Bros Programming Community"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
    ]
  },
  loading: { color: "#3B8070" },
  css: ["~/assets/css/main.css"],
  build: {},
  plugins: [
    ],
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/vuetify",
    "nuxt-fontawesome"],
  axios: {},
  vuetify: {},
  fontawesome: {
    component: "fa",
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["faWrench", "faGlobe", "faMobileAlt", "faClock"]
      },
      {
        set: "@fortawesome/free-brands-svg-icons",
        icons: ["faGithub", "faTwitter", "faDiscord"]
      }
    ]
  }
};
