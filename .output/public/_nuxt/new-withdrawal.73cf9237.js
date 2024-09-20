import{n as w,r as o,A as v,P as x,z as m,o as g,c as k,a as e,J as B,s as c,v as b,x as s,K as T,D as A,t as S}from"./entry.0b1f59d1.js";import{u as E}from"./useUserInfo.602d2e00.js";import{u as U}from"./useTransaction.fb0e2387.js";import"./user.9a8d007b.js";const D={class:"lg:flex justify-start items-start gap-x-10 space-y-10 lg:space-y-0"},V={class:"bg-white lg:w-5/12 rounded-md border"},W=e("p",{class:"border-b text-sm font-semibold py-4 pl-6"}," Enter amount and select your withdrawal wallet ",-1),j=["onSubmit"],M={class:"space-y-1"},N=e("label",{class:"text-xs text-gray-700 font-medium"},"Amount",-1),C={class:"space-y-4"},I=e("label",{class:"text-xs text-gray-700 font-medium"},"Crypto deposit type",-1),O=e("option",{value:"",disabled:""}," ---- Select deposit type ----- ",-1),R=e("option",{value:"bitcoin"}," Bitcoin ",-1),z=e("option",{value:"ethereum"}," Ethereum ",-1),F=e("option",{value:"bank"}," Bank Account ",-1),J=[O,R,z,F],K={class:"space-y-1"},P=e("label",{class:"text-xs text-gray-700 font-medium"},"Wallet address",-1),q={class:"w-full pt-6"},G=["disabled"],$=w({__name:"new-withdrawal",setup(H){const{loadingUserInfo:L,userData:a}=E(),{handleTransaction:h,form:i,setFormData:_,processing:p}=U();o(""),o(null),o(!1),o(null),o(null),o(null),o(null),o(!1);const y=v(),f=()=>{const l={amount:i.value.amount,wallet:r.value,type:"Withdrawal"};_(l),h().then(()=>{y.push("/dashboard/transactions")})},n=x({withdrawalType:""}),r=m(()=>n.withdrawalType==="bitcoin"?u.value[0].code:n.withdrawalType==="ethereum"?u.value[1].code:n.withdrawalType==="bank"?u.value[2].code:""),u=m(()=>{var l,t;return a!=null&&a.value&&Object.keys(a.value).length?[{name:"Bitcoin",code:((l=a.value)==null?void 0:l.btc)??"N/A"},{name:"Ethereum erc-20",code:((t=a.value)==null?void 0:t.eth)??"N/A"},{name:"Bank Account",code:"00907654378889"}]:[{name:"Bitcoin",code:""},{name:"Ethereum erc-20",code:""},{name:"Bank Account",code:""}]});return(l,t)=>(g(),k("main",D,[e("section",V,[W,e("form",{class:"p-6 space-y-6",onSubmit:B(f,["prevent"])},[e("div",M,[N,c(e("input",{"onUpdate:modelValue":t[0]||(t[0]=d=>s(i).amount=d),placeholder:"Enter amount in USD",type:"number",class:"py-3 border border-gray-600 text-sm rounded-md w-full outline-none pl-6"},null,512),[[b,s(i).amount]])]),e("div",C,[I,c(e("select",{"onUpdate:modelValue":t[1]||(t[1]=d=>s(n).withdrawalType=d),class:"py-3 border border-gray-600 text-sm rounded-md w-full outline-none pl-6"},J,512),[[T,s(n).withdrawalType]]),e("div",K,[P,c(e("input",{"onUpdate:modelValue":t[2]||(t[2]=d=>A(r)?r.value=d:null),class:"py-3 bg-gray-50 border disabled border-gray-600 text-sm rounded-md w-full outline-none pl-6"},null,512),[[b,s(r)]])])]),e("div",q,[e("button",{type:"submit",disabled:s(p),class:"w-full text-white disabled:cursor-not-allowed disabled:opacity-25 bg-black py-3 px-3 rounded-md"},S(s(p)?"processing..":"Submit"),9,G)])],40,j)])]))}});export{$ as default};
