import{be as i}from"./app-CUJPFFrd.js";import{H as r,a as s}from"./vidstack-Dgd3Tj9x-CMDLXJJS.js";import"./vidstack-Ccp8mxka-Cx8P4ld5.js";class u extends r{constructor(t,e){super(t,e),this.$$PROVIDER_TYPE="AUDIO",i(()=>{this.airPlay=new s(this.media,e)},this.scope)}get type(){return"audio"}setup(){super.setup(),this.type==="audio"&&this.b.delegate.c("provider-setup",this)}get audio(){return this.a}}export{u as AudioProvider};