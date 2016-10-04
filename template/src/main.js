{{#if_eq build "runtime"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import {sync} from 'vuex-router-sync'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import store from './store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
sync(store, router){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
const app = new Vue({
  router,
  store,
  ...App{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
})

app.$mount('#app'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
