<template>
  <canvas id="net" ref="cv"></canvas>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
const cv = ref(null)
let raf = 0
onMounted(() => {
  const cvEl = cv.value, cx = cvEl.getContext('2d')
  let NW, NH, pts
  function nsize(){ const d=Math.min(window.devicePixelRatio||1,2); NW=innerWidth; NH=innerHeight; cvEl.width=NW*d; cvEl.height=NH*d; cx.setTransform(d,0,0,d,0,0) }
  function ninit(){ nsize(); const n=Math.min(90,Math.round(NW*NH/16000)); pts=[]; for(let i=0;i<n;i++) pts.push({x:Math.random()*NW,y:Math.random()*NH,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*2.4+1}) }
  const LINK=150
  function nstep(){ cx.clearRect(0,0,NW,NH)
    for(const p of pts){ p.x+=p.vx; p.y+=p.vy; if(p.x<-20)p.x=NW+20; if(p.x>NW+20)p.x=-20; if(p.y<-20)p.y=NH+20; if(p.y>NH+20)p.y=-20 }
    for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++){ const a=pts[i],b=pts[j],dx=a.x-b.x,dy=a.y-b.y,d=Math.hypot(dx,dy); if(d<LINK){ cx.strokeStyle='rgba(45,162,63,'+(.16*(1-d/LINK))+')'; cx.lineWidth=1; cx.beginPath(); cx.moveTo(a.x,a.y); cx.lineTo(b.x,b.y); cx.stroke() } }
    for(const p of pts){ cx.beginPath(); cx.fillStyle='rgba(45,162,63,.5)'; cx.arc(p.x,p.y,p.r,0,6.2832); cx.fill() }
    raf=requestAnimationFrame(nstep) }
  addEventListener('resize', ninit); ninit(); nstep()
})
onBeforeUnmount(() => cancelAnimationFrame(raf))
</script>
