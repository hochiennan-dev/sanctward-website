<template>
  <section class="band page-hero">
    <div class="container reveal">
      <span class="eyebrow">{{ $t('k346') }}</span>
      <h1>{{ $t('k347') }}</h1>
      <p>{{ $t('k348') }}</p>
    </div>
  </section>

  <section class="band tight">
    <div class="container">
      <div class="contact-grid">
        <div class="cinfo reveal">
          <div class="ci-row"><svg class="ic" viewBox="0 0 24 24"><use href="#i-mail"/></svg><div><b>Email</b><span>gary.ho@sanctward.com</span></div></div>
          <div class="ci-row"><svg class="ic" viewBox="0 0 24 24"><use href="#i-phone"/></svg><div><b>{{ $t('k349') }}</b><span>+886 (0)2 0000 0000</span></div></div>
          <div class="ci-row"><svg class="ic" viewBox="0 0 24 24"><use href="#i-pin"/></svg><div><b>{{ $t('k350') }}</b><span>{{ $t('k351') }}</span></div></div>
          <div class="ci-row"><svg class="ic" viewBox="0 0 24 24"><use href="#i-clock"/></svg><div><b>{{ $t('k352') }}</b><span>{{ $t('k353') }}</span></div></div>
        </div>

        <form class="cform reveal" @submit.prevent="submit">
          <label for="cf-name">{{ $t('k354') }}</label>
          <input id="cf-name" v-model="f.name" required />
          <label for="cf-company">{{ $t('k355') }}</label>
          <input id="cf-company" v-model="f.company" />
          <label for="cf-email">Email *</label>
          <input id="cf-email" type="email" v-model="f.email" required />
          <label for="cf-msg">{{ $t('k356') }}</label>
          <textarea id="cf-msg" v-model="f.msg" :placeholder="$t('k358')"></textarea>
          <button class="btn btn-primary btn-lg" type="submit">{{ $t('k357') }}</button>
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
