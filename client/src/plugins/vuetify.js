import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
      iconfont: "mdiSvg"
    },
    theme: {
      themes: {
        light: {
          primary: '#00244a',
          secondary: '#ffdbb5',
          accent: '#8c9eff',
          error: '#b71c1c',
        },
      },
    }
  });
