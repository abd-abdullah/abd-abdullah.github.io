"use strict";(self["webpackChunkvuejs_tailwindcss_portfolio"]=self["webpackChunkvuejs_tailwindcss_portfolio"]||[]).push([[443],{7590:function(t,e,n){n.r(e),n.d(e,{default:function(){return E}});var r=n(6252);const a={class:"container mx-auto"},i={class:"container mx-auto"};function s(t,e,n,s,o,u){const l=(0,r.up)("AboutMe"),m=(0,r.up)("AboutCounter"),d=(0,r.up)("AboutClients");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",a,[(0,r.Wm)(l)]),(0,r.Wm)(m),(0,r._)("div",i,[(0,r.Wm)(d)])])}var o=n(3577),u=n(158);const l={class:"block sm:flex sm:gap-10 mt-10 sm:mt-20"},m=(0,r._)("div",{class:"w-full sm:w-1/4 mb-7 sm:mb-0"},[(0,r._)("img",{src:u,class:"rounded-xl w-96",alt:""})],-1),d={class:"w-full sm:w-3/4 text-left"},c=(0,r.uE)('<p class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"><span class="block font-bold text-2xl"><strong>Md. Abdullah</strong></span><span class="block"><strong>Address:</strong> House-01, Road-08, Sector-09, Uttara, Dhaka 1230</span><span class="block"><strong>Contact No:</strong> +8801738-868597</span><span class="block"><strong>Email:</strong> abdullah001rti@gmail.com</span></p>',1);function h(t,e,n,a,i,s){return(0,r.wg)(),(0,r.iD)("div",l,[m,(0,r._)("div",d,[c,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.bios,(t=>((0,r.wg)(),(0,r.iD)("p",{key:t.id,class:"text-justify font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"},(0,o.zw)(t.bio),1)))),128))])])}var p={setup(){return{bios:[{id:1,bio:"I am a full-stack web developer, and have been working in one of the BIG 2 companies for four years"},{id:2,bio:"I'v four years of experienced in PHP Core, OOP, Codeigniter Framework, Laravel Framework. I have deep knowledge of different web technologies like Vue.js, jQuery, Ajax, HTML, CSS, Bootstrap, Tailwind css and MySql. During the last 4 years, I've already contributed to over a twenty projects and assisted with managing more than seven project for the clients. All the projects with description are listed in this portfolio site."}]}}},g=n(3744);const A=(0,g.Z)(p,[["render",h]]);var f=A;const b={class:"mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm"},x={class:"font-general-regular container mx-auto py-20 block sm:flex sm:justify-between sm:items-center"},w={class:"mb-20 sm:mb-0"},y={class:"block text-md text-ternary-dark dark:text-ternary-light"},k={class:"mb-20 sm:mb-0"},v={class:"block text-md text-ternary-dark dark:text-ternary-light"},S={class:"mb-20 sm:mb-0"},T={class:"block text-md text-ternary-dark dark:text-ternary-light"};function j(t,e,n,a,i,s){const u=(0,r.up)("counter");return(0,r.wg)(),(0,r.iD)("div",b,[(0,r._)("div",x,[(0,r._)("div",w,[(0,r.Wm)(u,{ref:"counter",startAmount:0,endAmount:3.5,duration:.5,autoinit:!0,class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2","aria-label":"About Status Counter"},null,8,["endAmount","duration"]),(0,r._)("span",y,(0,o.zw)(t.experienceTitle),1)]),(0,r._)("div",k,[(0,r.Wm)(u,{ref:"counter",startAmount:0,endAmount:15,duration:1,suffix:"",autoinit:!0,class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"},null,512),(0,r._)("span",v,(0,o.zw)(t.clientTitle),1)]),(0,r._)("div",S,[(0,r.Wm)(u,{ref:"counter",startAmount:0,endAmount:t.projectTotal,duration:1,autoinit:!0,class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"},null,8,["endAmount"]),(0,r._)("span",T,(0,o.zw)(t.projectsTitle),1)])])])}var D=(0,r.aZ)({name:"Vue3Autocounter",interval:null,props:{startAmount:{type:Number,default:0},endAmount:{type:Number,default:0,required:!0},duration:{type:Number,default:3,validator(t){return t>=1}},autoinit:{type:Boolean,default:!0},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimalSeparator:{type:String,default:"."},decimals:{type:Number,default:0,validator(t){return t>=0}}},data(){return{timestamp:0,startTimestamp:0,currentAmount:0,currentStartAmount:0,currentDuration:0,paused:!1,remaining:0,animationFrame:0}},mounted(){this.currentAmount=this.startAmount,this.currentStartAmount=this.startAmount,this.currentDuration=1e3*this.duration,this.remaining=1e3*this.duration,this.autoinit?this.start():this.paused=!0,this.$emit("mounted")},unmounted(){this.cancelAnimation()},watch:{startAmount(){this.reset()},endAmount(){this.reset()},duration(){this.reset()}},computed:{isCountingUp(){return this.endAmount>this.startAmount},displayedAmount(){return`${this.prefix}${this.formatedAmount}${this.suffix}`},formatedAmount(){const t=/(\d+)(\d{3})/;let e=this.currentAmount.toFixed(this.decimals);e+="";let n=e.split("."),r=n[0],a=n.length>1?this.decimalSeparator+n[1]:"",i=!isNaN(parseFloat(this.separator));if(this.separator&&!i)while(t.test(r))r=r.replace(t,"$1"+this.separator+"$2");return r+a}},methods:{start(){this.cancelAnimation(),this.currentStartAmount=this.startAmount,this.startTimestamp=null,this.currentDuration=1e3*this.duration,this.paused=!1,this.animationFrame=window.requestAnimationFrame(this.counting)},pause(){this.paused||(this.cancelAnimation(),this.paused=!0)},resume(){this.paused&&(this.startTimestamp=null,this.currentDuration=+this.remaining,this.currentStartAmount=+this.currentAmount,this.animationFrame=window.requestAnimationFrame(this.counting),this.paused=!1)},reset(){this.paused=!1,this.startTimestamp=null,this.cancelAnimation(),this.currentAmount=this.startAmount,this.autoinit?this.start():this.paused=!0},counting(t){this.timestamp=t,this.startTimestamp||(this.startTimestamp=t);let e=t-this.startTimestamp;this.remaining=this.currentDuration-e,this.isCountingUp?(this.currentAmount=this.currentStartAmount+(this.endAmount-this.currentStartAmount)*(e/this.currentDuration),this.currentAmount=this.currentAmount>this.endAmount?this.endAmount:this.currentAmount):(this.currentAmount=this.currentStartAmount-(this.currentStartAmount-this.endAmount)*(e/this.currentDuration),this.currentAmount=this.currentAmount<this.endAmount?this.endAmount:this.currentAmount),e<this.currentDuration?this.animationFrame=window.requestAnimationFrame(this.counting):setTimeout((()=>{this.$emit("finished")}),1e3)},cancelAnimation(){this.animationFrame&&window.cancelAnimationFrame(this.animationFrame)}}});function _(t,e,n,a,i,s){return(0,r.wg)(),(0,r.j4)("span",null,(0,o.zw)(t.displayedAmount),1)}D.render=_;var C=(()=>{const t=D;return t.install=e=>{e.component("Vue3Autocounter",t)},t})(),F=C,H=n(4259),M={components:{counter:F},data:()=>({experienceTitle:"Years of experience",clientTitle:"Worked with client",projectsTitle:"Projects completed",projectTotal:H.Z.length})};const z=(0,g.Z)(M,[["render",j]]);var N=z;const P={class:"mt-10 sm:mt-20"},W={class:"font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"},$={class:"gap-2 grid justify-items-center grid-cols:3 sm:grid-cols-7 mt-10 sm:mt-14"};function q(t,e,n,a,i,s){return(0,r.wg)(),(0,r.iD)("div",P,[(0,r._)("p",W,(0,o.zw)(t.skillsHeading),1),(0,r._)("div",$,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.skills,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t,class:"bg-gray-100 hover:text-indigo-500 border border-ternary-light cursor-pointer dark:bg-secondary-light dark:border-ternary-dark font-bold mb-3 md:w-24 lg:w-36 w-full py-5 rounded-lg shadow-sm text-gray-500"},(0,o.zw)(t),1)))),128))])])}var Z={data:()=>({skillsHeading:"My Technical Skills",skills:["PHP","JavaScript","Laravel","jQuery","Ajax","Vue.js","MySql","Bootstrap","Tailwind","HTML5","CSS","SCSS","Git","cPanel"]})};const I=(0,g.Z)(Z,[["render",q]]);var B=I,L=n(8508),V=n.n(L),U={name:"About",components:{AboutMe:f,AboutCounter:N,AboutClients:B},data:()=>({}),mounted(){V().replace()},updated(){V().replace()},methods:{}};const Y=(0,g.Z)(U,[["render",s]]);var E=Y}}]);
//# sourceMappingURL=about.73bc407b.js.map