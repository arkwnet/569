import { createApp } from 'vue'
import App from './App.vue'
import VueGtag from 'vue-gtag'
import ScriptX from 'vue-scriptx'
import Ads from 'vue-google-adsense'
import './assets/main.css'

createApp(App)
  .use(VueGtag, {
    pageTrackerScreenviewEnabled: true,
    config: { id: import.meta.env.VITE_GTAG_ID }
  })
  .use(ScriptX)
  .use(Ads.Adsense)
  .use(Ads.InArticleAdsense)
  .use(Ads.InFeedAdsense)
  .mount('#app')
