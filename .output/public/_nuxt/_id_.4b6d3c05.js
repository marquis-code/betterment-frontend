import{n as C,r as a,P as F,z as v,o as p,c as m,a as e,J as U,s as h,v as x,x as l,K as S,t as E}from"./entry.50b5a30e.js";import{u as V}from"./useAdminInfo.05f9d30b.js";import{u as M}from"./useTransaction.c91e8401.js";import"./user.3a31c8fb.js";const I={class:"lg:flex justify-start items-start gap-x-10 space-y-10 lg:space-y-0"},N={class:"bg-white lg:w-5/12 rounded-md border"},P=e("p",{class:"border-b text-sm font-semibold py-4 pl-6"}," Enter amount and upload proof of payment ",-1),R=["onSubmit"],W={class:"space-y-1"},L=e("label",{class:"text-xs text-gray-700 font-medium"},"Amount",-1),O={class:"space-y-4"},z=e("label",{class:"text-xs text-gray-700 font-medium"},"Crypto deposit type",-1),J=e("option",{value:"",disabled:""}," ---- Select deposit type ----- ",-1),K=e("option",{value:"bitcoin"}," Bitcoin ",-1),$=e("option",{value:"ethereum"}," Ethereum ",-1),q=e("option",{value:"bank"}," Bank Account ",-1),G=[J,K,$,q],H={class:"space-y-1"},Q=e("label",{class:"text-xs text-gray-700 font-medium"},"Wallet address",-1),X={class:"bg-gray-800 p-6 rounded-lg shadow-md"},Y=e("h2",{class:"text-white font-medium mb-2"},"Withdraw",-1),Z=e("p",{class:"text-gray-400 mb-4 text-sm"}," During this process, we will likely not accept any unclear screenshots or an upload that is not in line with your transaction. ",-1),ee={key:0,class:"flex flex-col items-center justify-center text-center"},te=e("p",{class:"text-gray-300 mb-2"},"File Preview:",-1),oe=["src"],se={key:1,class:"border-2 border-dashed border-gray-600 p-10 flex flex-col items-center justify-center rounded-lg text-center"},le=e("label",{for:"file-upload",class:"cursor-pointer flex justify-center items-center flex-col"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",class:"w-12 h-12 text-white mb-2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 7v4a2 2 0 002 2h3v4a2 2 0 002 2h4a2 2 0 002-2v-4h3a2 2 0 002-2V7m-9 10V4m0 0L7 7m5-3l5 3"})]),e("p",{class:"text-gray-300"},"Click the icon above to upload file")],-1),ae={class:"w-full pt-6"},ne=["disabled"],me=C({__name:"[id]",setup(ie){const{loadingAdminInfo:re,adminData:d}=V(),{handleTransaction:k,form:n,setFormData:B,processing:f}=M();a(""),a(null),a(!1);const b=a(null);a(null);const c=a(null),w=a(null),A=a(!1),D=()=>{var s;(s=b.value)==null||s.click()},T=()=>{const s={amount:n.value.amount,wallet:n.value.wallet,proof:w.value};B(s),k()},j=s=>{const t=s.target;if(t.files&&t.files[0]){const o=t.files[0],r=new FileReader;r.onload=y=>{var _,g;c.value=(_=y.target)==null?void 0:_.result,w.value=(g=y.target)==null?void 0:g.result},r.readAsDataURL(o)}},i=F({withdrawalType:""});v(()=>i.withdrawalType==="bitcoin"?u.value[0].code:i.withdrawalType==="ethereum"?u.value[1].code:i.withdrawalType==="bank"?u.value[2].code:"");const u=v(()=>{var s,t,o,r;return Object.keys(d.value).length?[{name:"Bitcoin",code:((t=(s=d.value)==null?void 0:s.admin)==null?void 0:t.btc)??"N/A"},{name:"Ethereum erc-20",code:((r=(o=d.value)==null?void 0:o.admin)==null?void 0:r.eth)??"N/A"},{name:"Bank Account",code:"00907654378889"}]:[{name:"Bitcoin",code:""},{name:"Ethereum erc-20",code:""},{name:"Bank Account",code:""}]});return(s,t)=>(p(),m("main",I,[e("section",N,[P,e("form",{class:"p-6 space-y-6",onSubmit:U(T,["prevent"])},[e("div",W,[L,h(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>l(n).amount=o),placeholder:"Enter amount in USD",type:"number",class:"py-3 border border-gray-600 text-sm rounded-md w-full outline-none pl-6"},null,512),[[x,l(n).amount]])]),e("div",O,[z,h(e("select",{"onUpdate:modelValue":t[1]||(t[1]=o=>l(i).withdrawalType=o),class:"py-3 border border-gray-600 text-sm rounded-md w-full outline-none pl-6"},G,512),[[S,l(i).withdrawalType]]),e("div",H,[Q,h(e("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>l(n).wallet=o),class:"py-3 bg-gray-50 border border-gray-600 text-sm rounded-md w-full outline-none pl-6"},null,512),[[x,l(n).wallet]])])]),e("div",X,[Y,Z,l(c)?(p(),m("div",ee,[te,e("img",{src:l(c),alt:"File preview",class:"w-full h-64 object-cover rounded-lg shadow-md"},null,8,oe),e("button",{class:"mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-400",onClick:t[3]||(t[3]=o=>A.value=!0)},"Change Receipt")])):(p(),m("div",se,[e("input",{type:"file",onChange:j,class:"hidden",ref_key:"fileInput",ref:b,accept:"image/*"},null,544),le,e("button",{class:"mt-4 text-white bg-blue-500 hover:bg-blue-400 text-sm py-2 px-4 rounded-md",onClick:D},"Upload File")]))]),e("div",ae,[e("button",{type:"submit",disabled:l(f),class:"w-full text-white disabled:cursor-not-allowed disabled:opacity-25 bg-black py-3 px-3 rounded-md"},E(l(f)?"processing..":"Submit"),9,ne)])],40,R)])]))}});export{me as default};