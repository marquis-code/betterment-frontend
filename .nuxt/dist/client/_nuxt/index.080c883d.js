import{u as C,_ as $}from"./UpdateCryptoWalletModal.0d195876.js";import{n as M,u as U,z as k,r as u,o as n,c as r,a as t,F as m,E as h,x as _,b as A,M as g,t as s,d as a}from"./entry.8102741e.js";import{u as D}from"./useUserInfo.30fb6ddf.js";import{d as p}from"./assets.4e58672f.js";import"./user.655c7c7f.js";const B={class:"max-w-6xl bg-gray-800 rounded-xl shadow-lg p-6"},E=t("h1",{class:"text-white text-lg font-semibold mb-6"},"WITHDRAWAL",-1),I=t("div",{class:"flex justify-between items-center mb-4"},[t("div")],-1),N={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},O={class:"flex flex-col items-center mb-4"},T=["src"],R={class:"ml-3 text-lg font-bold"},V={class:"text-gray-700 text-sm mb-2"},z=t("strong",null,"Min. withdrawable:",-1),F={class:"text-gray-700 text-sm mb-2"},H=t("strong",null,"Max. withdrawable:",-1),L={class:"text-gray-700 text-sm mb-2"},P=t("strong",null,"Charges Amount:",-1),j={class:"text-gray-700 text-sm mb-4"},q=t("strong",null,"Duration:",-1),S={class:"container mx-auto p-6 border-[0.5px] border-gray-100 rounded-xl mt-6"},Y=t("h1",{class:"text-xl font-semibold mb-6"},"Your Crypto Wallets",-1),G={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},J={class:"text-lg"},K=t("strong",null,"Address:",-1),Q=["onClick"],ot=M({__name:"index",setup(X){C();const{userData:d,loading:Z}=D(),b=U(),x=[{title:"Bitcoin",minWithdrawable:"$100.00",maxWithdrawable:"$10,000,000.00",chargesAmount:"0.12%",duration:"Instant Payment",color:"green",icon:p("btc.png")},{title:"Ethereum",minWithdrawable:"$100.00",maxWithdrawable:"$10,000,000.00",chargesAmount:"0.12%",duration:"Instant Payment",color:"blue",icon:p("eth.png")}],w=k(()=>d.value?[{name:"Bitcoin Wallet",code:"btc",address:d.value.btc||"Nil",description:"Main BTC Wallet"},{name:"Ethereum Wallet",code:"eth",address:d.value.eth||"Nil",description:"Main ETH Wallet"}]:[]),l=u(!1),c=u(null),v=i=>{c.value={...i},l.value=!0},f=i=>{l.value=!1};return(i,o)=>{const W=$;return n(),r("main",null,[t("div",B,[E,I,t("div",N,[(n(),r(m,null,h(x,e=>t("div",{onClick:o[0]||(o[0]=y=>_(b).push("/dashboard/withdrawal/new-withdrawal")),key:e.title,class:"bg-white cursor-pointer rounded-lg shadow-md p-6"},[t("div",O,[t("div",{class:g(`p-2 bg-${e.color}-100 rounded-full`)},[t("img",{src:e.icon,alt:"option.title",class:"h-16 w-16"},null,8,T)],2),t("h2",R,s(e.title),1)]),t("p",V,[z,a(" "+s(e.minWithdrawable),1)]),t("p",F,[H,a(" "+s(e.maxWithdrawable),1)]),t("p",L,[P,a(" "+s(e.chargesAmount),1)]),t("p",j,[q,a(" "+s(e.duration),1)]),t("button",{class:g(`bg-${e.color}-500 text-white w-full text-sm py-3 rounded-lg hover:bg-${e.color}-600 transition duration-300`)}," + Request withdrawal ",2)])),64))])]),t("div",S,[Y,t("div",G,[(n(!0),r(m,null,h(_(w),e=>(n(),r("div",{key:e.address,class:"mb-4 p-4 space-y-3 bg-white shadow-sm border-[0.5px] text-sm rounded-lg"},[t("h2",J,s(e.name),1),t("p",null,[K,a(" "+s(e.address),1)]),t("p",null,s(e.description),1),t("button",{onClick:y=>v(e),class:"mt-2 text-sm px-4 py-2.5 bg-blue-500 text-white rounded-md hover:bg-blue-600"}," Update Wallet ",8,Q)]))),128))]),A(W,{isOpen:l.value,walletDetails:c.value,onClose:o[1]||(o[1]=e=>l.value=!1),onUpdate:f},null,8,["isOpen","walletDetails"])])])}}});export{ot as default};
