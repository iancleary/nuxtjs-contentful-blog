import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter, faDev} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

config.autoAddCss = false;

library.add(faGithub, faTwitter, faDev);

Vue.component('fa', FontAwesomeIcon);
