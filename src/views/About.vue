<template>
  <section class="band page-hero">
    <div class="container reveal">
      <span class="eyebrow">{{ $t('k324') }}</span>
      <h1>{{ $t('k325') }}<br>{{ $t('k326') }}</h1>
      <p>{{ $t('k327') }}</p>
    </div>
  </section>

  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">Mission &amp; Vision</span><h2>{{ $t('k328') }}</h2></div>
      <div class="val-grid reveal">
        <div class="val-card"><div class="vi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-shield"/></svg></div><h3>{{ $t('k329') }}</h3><p>{{ $t('k330') }}</p></div>
        <div class="val-card"><div class="vi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-bolt"/></svg></div><h3>{{ $t('k331') }}</h3><p>{{ $t('k332') }}</p></div>
        <div class="val-card"><div class="vi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-layers"/></svg></div><h3>{{ $t('k333') }}</h3><p>{{ $t('k334') }}</p></div>
      </div>
    </div>
  </section>

  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">Platform</span><h2>{{ $t('k335') }}</h2><p>{{ $t('k336') }}</p></div>
      <div class="cap5 reveal">
        <div class="val-card"><div class="vi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-id"/></svg></div><span class="k">IAM / SSO</span><h3>{{ $t('k76') }}</h3><p>{{ $t('k77') }}</p></div>
        <div class="val-card"><div class="vi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-key"/></svg></div><span class="k">PAM</span><h3>{{ $t('k78') }}</h3><p>{{ $t('k79') }}</p></div>
        <div class="val-card"><div class="vi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-scan"/></svg></div><span class="k">ZTA</span><h3>{{ $t('k80') }}</h3><p>{{ $t('k81') }}</p></div>
        <div class="val-card"><div class="vi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-server"/></svg></div><span class="k">Endpoint</span><h3>{{ $t('k82') }}</h3><p>{{ $t('k83') }}</p></div>
        <div class="val-card"><div class="vi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-doc"/></svg></div><span class="k">Compliance</span><h3>{{ $t('k84') }}</h3><p>{{ $t('k85') }}</p></div>
      </div>
      <div class="reveal" style="text-align:center;margin-top:28px">
        <router-link class="btn btn-ghost btn-lg" to="/#platform">{{ $t('k337') }}<svg class="ic" viewBox="0 0 24 24"><use href="#i-arrow"/></svg></router-link>
      </div>
    </div>
  </section>

  <section class="band tight">
    <div class="container">
      <div class="shead reveal"><span class="eyebrow">Core Values</span><h2>{{ $t('k338') }}</h2></div>
      <div class="val-grid reveal">
        <div class="val-card"><div class="vi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-server"/></svg></div><h3>{{ $t('k313') }}</h3><p>{{ $t('k339') }}</p></div>
        <div class="val-card"><div class="vi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-doc"/></svg></div><h3>{{ $t('k340') }}</h3><p>{{ $t('k341') }}</p></div>
        <div class="val-card"><div class="vi"><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg></div><h3>{{ $t('k342') }}</h3><p>{{ $t('k343') }}</p></div>
      </div>
    </div>
  </section>

  <section class="cta">
    <div class="container">
      <div class="cta-in reveal">
        <h2>{{ $t('k344') }}</h2>
        <p>{{ $t('k345') }}</p>
        <div class="hs-cta">
          <router-link class="btn btn-primary btn-lg" to="/contact">{{ $t('k6') }}</router-link>
          <router-link class="btn btn-ghost btn-lg" to="/#platform">{{ $t('k25') }}</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
