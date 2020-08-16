/**
 * This is the main.js file. Import global CSS and scripts here.
 * Learn more: gridsome.org/docs/client-api
 */

/**
 * Global css imports
 */
require('~/main.css');

/**
 * Font Awesome import
 */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';
import { faGithub, faTwitter, faDev } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faTwitter, faDev);

/**
 * Layout imports
 */
import DefaultLayout from '~/layouts/Default.vue';

/**
 * Client API contructor
 */
const client = (Vue) => {
  Vue.component('Layout', DefaultLayout);
  Vue.component('font-awesome-icon', FontAwesomeIcon);
  Vue.component('font-awesome-layers', FontAwesomeLayers);
  Vue.component('font-awesome-layers-text', FontAwesomeLayersText);
  // head.title = "My Awesome Gridsome Project";
};

export default client;
