<template>
  <div>
    <div class="header">
      <div class="wrapper">
        <h1>語録チェッカー</h1>
      </div>
    </div>
    <div class="main">
      <div class="wrapper">
        <div class="input">
          <textarea placeholder="ここにテキストを入力" v-model="base"></textarea>
        </div>
        <p class="center"><img src="./assets/arrow.png" /></p>
        <div class="output" v-html="result"></div>
      </div>
    </div>
    <div class="wrapper">
      語録チェッカーは、文章中の「語録」を強調表示するウェブアプリです。<br />
      所謂「淫夢営業」の回避など、様々な用途にご活用いただけます。<br />
      <span class="high">赤色</span>：危険 (直接的な語録表現)<br />
      <span class="mid">橙色</span>：注意 (語録を思わせる表現)
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
      list: list[0],
      adClient: import.meta.env.VITE_AD_CLIENT,
      adSlot: import.meta.env.VITE_AD_SLOT,
      version: import.meta.env.PACKAGE_VERSION
    }
  },
  mounted() {
    this.$gtag.pageview('/')
  },
  computed: {
    result() {
      let result = this.base
      for (let i = 0; i < this.list.high.length; i++) {
        let template = ''
        for (let j = 0; j < this.list.high[i].length; j++) {
          template += '<span class="high">' + this.list.high[i].charAt(j) + '</span>'
        }
        result = result.replaceAll(this.list.high[i], template)
      }
      for (let i = 0; i < this.list.mid.length; i++) {
        let template = ''
        for (let j = 0; j < this.list.mid[i].length; j++) {
          template += '<span class="mid">' + this.list.mid[i].charAt(j) + '</span>'
        }
        result = result.replaceAll(this.list.mid[i], template)
      }
      return result
    }
  }
}
</script>
