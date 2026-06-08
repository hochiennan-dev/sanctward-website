<template>
  <section class="band page-hero">
    <div class="container reveal">
      <span class="eyebrow">Contact · 聯絡我們</span>
      <h1>預約 Demo，或與我們聯絡</h1>
      <p>留下你的需求，我們會盡快與你聯繫；也歡迎直接來信。</p>
    </div>
  </section>

  <section class="band tight">
    <div class="container">
      <div class="contact-grid">
        <div class="cinfo reveal">
          <div class="ci-row"><svg class="ic" viewBox="0 0 24 24"><use href="#i-mail"/></svg><div><b>Email</b><span>gary.ho@sanctward.com</span></div></div>
          <div class="ci-row"><svg class="ic" viewBox="0 0 24 24"><use href="#i-phone"/></svg><div><b>電話</b><span>+886 (0)2 0000 0000</span></div></div>
          <div class="ci-row"><svg class="ic" viewBox="0 0 24 24"><use href="#i-pin"/></svg><div><b>地址</b><span>台灣（總部）· 日本 · 北美</span></div></div>
          <div class="ci-row"><svg class="ic" viewBox="0 0 24 24"><use href="#i-clock"/></svg><div><b>服務時間</b><span>週一至週五 09:00–18:00（GMT+8）</span></div></div>
        </div>

        <form class="cform reveal" @submit.prevent="submit">
          <label for="cf-name">姓名 *</label>
          <input id="cf-name" v-model="f.name" required />
          <label for="cf-company">公司 / 單位</label>
          <input id="cf-company" v-model="f.company" />
          <label for="cf-email">Email *</label>
          <input id="cf-email" type="email" v-model="f.email" required />
          <label for="cf-msg">需求說明</label>
          <textarea id="cf-msg" v-model="f.msg" placeholder="想了解的產品、環境或問題…"></textarea>
          <button class="btn btn-primary btn-lg" type="submit">送出（開啟郵件）</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
const MAIL = 'gary.ho@sanctward.com'
const f = reactive({ name: '', company: '', email: '', msg: '' })
function submit() {
  const subject = encodeURIComponent('[官網聯絡] ' + (f.company || f.name || '需求洽詢'))
  const body = encodeURIComponent(
    `姓名：${f.name}\n公司／單位：${f.company}\nEmail：${f.email}\n\n需求說明：\n${f.msg}`
  )
  window.location.href = `mailto:${MAIL}?subject=${subject}&body=${body}`
}
</script>
