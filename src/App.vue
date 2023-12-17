<template>
  <div>
    <div class="header">
      <div class="wrapper">
        <h1>語録チェッカー</h1>
      </div>
    </div>
    <div class="main">
      <div class="wrapper">
        <div class="input"><textarea v-model="base" @input="check"></textarea></div>
        <p class="center"><img src="./assets/arrow.png" /></p>
        <div class="output" v-html="result"></div>
      </div>
    </div>
    <br />
    <div class="wrapper">
      <Adsense :data-ad-client="adClient" :data-ad-slot="adSlot"> </Adsense>
    </div>
    <div class="footer">
      <div class="wrapper">
        <p>Version {{ version }}</p>
        <p>
          Copyright (c) 2023 <a href="https://arkw.net/">Sora Arakawa</a><br />Licensed under the
          MIT License
        </p>
        <p><a href="https://github.com/arkwnet/569">GitHub Repository</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import list from './assets/list.json'
export default {
  name: 'App',
  data() {
    return {
      base: '',
      result: '',
      list: list[0],
      adClient: import.meta.env.VITE_AD_CLIENT,
      adSlot: import.meta.env.VITE_AD_SLOT,
      version: import.meta.env.PACKAGE_VERSION
    }
  },
  mounted() {
    this.$gtag.pageview('/')
  },
  methods: {
    check() {
      let result = this.base
      for (let i = 0; i < this.list.high.length; i++) {
        result = result.replaceAll(
          this.list.high[i],
          '<span class="high">' + this.list.high[i] + '</span>'
        )
      }
      for (let i = 0; i < this.list.mid.length; i++) {
        result = result.replaceAll(
          this.list.mid[i],
          '<span class="mid">' + this.list.mid[i] + '</span>'
        )
      }
      this.result = result
    }
  }
}
</script>
