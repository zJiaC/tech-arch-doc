import{ai as h,bd as m,V as i,a0 as s}from"./app-CgPki5_t.js";const t=class t extends h(HTMLElement,m){constructor(){super(...arguments),this.Wm=document.createElement("img")}onSetup(){this.$state.img.set(this.Wm)}onConnect(){const{src:r,alt:a,crossOrigin:o}=this.$state;this.Wm.parentNode!==this&&this.prepend(this.Wm),i(()=>{s(this.Wm,"alt",a()),s(this.Wm,"crossorigin",o()),s(this.Wm,"src",r()||"")}),i(()=>{const{loading:n,hidden:c}=this.$state;this.Wm.style.display=n()||c()?"none":""})}};t.tagName="media-poster",t.attrs={crossOrigin:"crossorigin"};let e=t;export{e as MediaPosterElement};
