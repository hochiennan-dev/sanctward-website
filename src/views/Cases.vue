<template>
<section class="band" id="cases">
  <div class="container">
    <div class="shead reveal">
      <span class="eyebrow">Real-world Scenarios</span>
      <h2>{{ $t('k252') }}</h2>
      <p>{{ $t('k253') }}</p>
    </div>
    <div class="casewrap reveal">
      <div class="ctabs" id="ctabs">
        <button class="ctab on" data-c="0"><span class="k">Manufacturing</span><h4>{{ $t('k254') }}</h4></button>
        <button class="ctab" data-c="1"><span class="k">Banking</span><h4>{{ $t('k255') }}</h4></button>
        <button class="ctab" data-c="2"><span class="k">Zero Trust</span><h4>{{ $t('k256') }}</h4></button>
        <button class="ctab" data-c="3"><span class="k">MSP</span><h4>{{ $t('k257') }}</h4></button>
      </div>
      <div id="cpanes">
        <div class="cpane on">
          <div class="cbox">
            <span class="ctag">{{ $t('k258') }}</span>
            <h3>{{ $t('k259') }}</h3>
            <div class="c2">
              <div class="pain"><div class="h">{{ $t('k260') }}</div><ul>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>{{ $t('k261') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>{{ $t('k262') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>{{ $t('k263') }}</li>
              </ul></div>
              <div class="sol"><div class="h">{{ $t('k154') }}</div><ul>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k264') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k265') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k266') }}</li>
              </ul></div>
            </div>
            <div class="cres"><div><b>−80%</b><span>{{ $t('k267') }}</span></div><div><b>0</b><span>{{ $t('k268') }}</span></div></div>
          </div>
        </div>
        <div class="cpane">
          <div class="cbox">
            <span class="ctag">{{ $t('k269') }}</span>
            <h3>{{ $t('k63') }}</h3>
            <div class="c2">
              <div class="pain"><div class="h">{{ $t('k260') }}</div><ul>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>{{ $t('k270') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>{{ $t('k271') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>{{ $t('k272') }}</li>
              </ul></div>
              <div class="sol"><div class="h">{{ $t('k154') }}</div><ul>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k273') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k274') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k275') }}</li>
              </ul></div>
            </div>
            <div class="cres"><div><b>{{ $t('k276') }}</b><span>{{ $t('k277') }}</span></div><div><b>0</b><span>{{ $t('k278') }}</span></div></div>
          </div>
        </div>
        <div class="cpane">
          <div class="cbox">
            <span class="ctag">{{ $t('k279') }}</span>
            <h3>{{ $t('k280') }}</h3>
            <div class="c2">
              <div class="pain"><div class="h">{{ $t('k260') }}</div><ul>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>{{ $t('k281') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>{{ $t('k282') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>{{ $t('k283') }}</li>
              </ul></div>
              <div class="sol"><div class="h">{{ $t('k154') }}</div><ul>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k284') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k285') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k286') }}</li>
              </ul></div>
            </div>
            <div class="cres"><div><b>{{ $t('k287') }}</b><span>{{ $t('k288') }}</span></div><div><b>0</b><span>{{ $t('k289') }}</span></div></div>
          </div>
        </div>
        <div class="cpane">
          <div class="cbox">
            <span class="ctag">{{ $t('k290') }}</span>
            <h3>{{ $t('k291') }}</h3>
            <div class="c2">
              <div class="pain"><div class="h">{{ $t('k260') }}</div><ul>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>{{ $t('k292') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>{{ $t('k293') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-x"/></svg>{{ $t('k294') }}</li>
              </ul></div>
              <div class="sol"><div class="h">{{ $t('k154') }}</div><ul>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k295') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k296') }}</li>
                <li><svg class="ic" viewBox="0 0 24 24"><use href="#i-check"/></svg>{{ $t('k297') }}</li>
              </ul></div>
            </div>
            <div class="cres"><div><b>30+</b><span>{{ $t('k298') }}</span></div><div><b>{{ $t('k299') }}</b><span>{{ $t('k300') }}</span></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  const ctabs = [...document.querySelectorAll('#ctabs .ctab')]
  const cpanes = [...document.querySelectorAll('#cpanes .cpane')]
  ctabs.forEach((t) => t.addEventListener('click', () => {
    const i = +t.dataset.c
    ctabs.forEach((x) => x.classList.remove('on'))
    cpanes.forEach((x) => x.classList.remove('on'))
    t.classList.add('on'); cpanes[i].classList.add('on')
  }))
})
</script>
