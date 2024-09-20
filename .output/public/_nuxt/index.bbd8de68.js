import{_ as P,a as V,b as M,c as O}from"./dash3.498b6b10.js";import{n as $,r as n,o as b,c as v,a as e,t as m,x as o,p as F,e as I,_ as j,A as S,J as N,b as x,y as B,d as U}from"./entry.0b1f59d1.js";import{u as A}from"./useUpdateUser.5c4e2519.js";import{u as D}from"./useUserInfo.602d2e00.js";import{u as K}from"./useCurrency.2c762570.js";import{u as L}from"./useGetUserTransactions.1324391a.js";import{u as Y}from"./user.9a8d007b.js";const T=l=>(F("data-v-55156755"),l=l(),I(),l),R={class:"rounded-lg"},E={class:"font-medium mb-2"},z={class:"text-gray-500 mb-4 text-sm"},H={key:0,class:"flex flex-col items-center justify-center text-center"},J=["src"],q=T(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",class:"w-8 h-8 text-gray-400 mb-2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 7v4a2 2 0 002 2h3v4a2 2 0 002 2h4a2 2 0 002-2v-4h3a2 2 0 002-2V7m-9 10V4m0 0L7 7m5-3l5 3"})],-1)),G=T(()=>e("p",{class:"text-gray-400"},"Upload Image",-1)),Q=$({__name:"FileUpload",props:{title:{type:String,default:""},description:{type:String,default:""}},emits:["file"],setup(l,{emit:d}){const c=n(null),a=n(null),r=n(null),f=()=>{var s;(s=c.value)==null||s.click()},w=s=>{const i=s.target;if(i.files&&i.files[0]){const y=i.files[0],h=new FileReader;h.onload=u=>{var p,_;a.value=(p=u.target)==null?void 0:p.result,r.value=(_=u.target)==null?void 0:_.result,d("file",r)},h.readAsDataURL(y)}};return(s,i)=>(b(),v("div",R,[e("h2",E,m(l.title),1),e("p",z,m(l.description),1),o(a)?(b(),v("div",H,[e("img",{src:o(a),alt:"File preview",class:"w-full h-40 object-cover rounded-lg shadow-md"},null,8,J),e("button",{type:"button",class:"mt-2 text-blue-500 underline",onClick:f},"Change Image")])):(b(),v("div",{key:1,class:"border-2 border-dashed border-gray-300 p-4 flex flex-col items-center justify-center rounded-lg text-center cursor-pointer",onClick:f},[e("input",{type:"file",onChange:w,class:"hidden",ref_key:"fileInput",ref:c,accept:"image/*"},null,544),q,G]))]))}});const W=j(Q,[["__scopeId","data-v-55156755"]]),X={key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},Z={class:"lg:w-4/12 max-w-3xl w-10/12"},ee={class:"bg-white w-full rounded-md border"},te=e("p",{class:"border-b text-sm font-semibold py-4 pl-6"}," Please upload your proof of identification ",-1),se=["onSubmit"],oe={class:"w-full pt-6 flex justify-between items-center gap-x-5"},le=["disabled"],ne=$({__name:"KYCModal",props:{isOpen:{type:Boolean}},emits:["close","update"],setup(l,{emit:d}){const{processing:c,updateUser:a}=A(),{loading:r,userData:f}=D();n(null),n(!1),S();const w=()=>{d("close")},s=n(""),i=n(""),y=n(""),h=()=>{const t={identification:i.value,passport:s.value};f.value&&a(f.value.id,t).then(()=>{w()})},u=t=>{console.log(t.value,"here"),s.value=t.value},p=t=>{i.value=t.value,console.log(t.value,"here")},_=t=>{y.value=t.value,console.log(t.value,"here")};return(t,C)=>{const k=W;return t.isOpen?(b(),v("div",X,[e("main",Z,[e("section",ee,[te,e("form",{class:"p-6 space-y-6",onSubmit:N(h,["prevent"])},[x(k,{title:"Passport",description:"please upload your identity passport",onFile:u}),x(k,{title:"Front drivers licence",description:"Please upload front of drivers licence",onFile:p}),x(k,{title:"Back drivers licence",description:"Please upload back of drivers licence ",onFile:_}),e("div",oe,[e("button",{type:"submit",disabled:o(c),class:"w-full text-white disabled:cursor-not-allowed disabled:opacity-25 bg-black py-3.5 px-3 rounded-md"},m(o(c)?"processing..":"Submit"),9,le),e("button",{onClick:w,class:"w-full text-white bg-gray-600 py-3.5 px-3 rounded-md"},"Close")])],40,se)])])])):B("",!0)}}}),g=l=>(F("data-v-d9d84558"),l=l(),I(),l),ae={class:"min-h-screen p-1 lg:p-8 space-y-8"},ie={class:"bg-blue-100 space-y-4 lg:space-y-0 rounded-lg p-4 lg:flex justify-between items-center shadow-lg"},ce={class:"text-blue-900 text-sm lg:text-lg font-semibold"},de={class:"font-bold"},re={class:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"},ue={class:"col-span-1 md:col-span-2 lg:col-span-2 bg-gray-800 rounded-lg p-6 shadow-lg"},pe=g(()=>e("h2",{class:"text-white text-lg font-semibold mb-4"},"Account balance",-1)),_e={class:"flex items-center justify-between"},me=g(()=>e("p",{class:"text-gray-400"},"Total earnings",-1)),ge={class:"text-white text-3xl font-bold mb-4"},fe={class:"bg-gray-800 rounded-lg p-6 shadow-lg flex justify-between"},he=g(()=>e("h3",{class:"text-white text-lg font-semibold mb-2"},"Trading Balance",-1)),be={class:"text-white text-2xl font-bold"},ve=g(()=>e("img",{src:M,class:"h-10 w-10 rounded-full"},null,-1)),xe={class:"bg-gray-800 rounded-lg p-6 shadow-lg flex justify-between"},we=g(()=>e("h3",{class:"text-white text-lg font-semibold mb-2"}," Profit ",-1)),ye={class:"text-white text-2xl font-bold"},ke=g(()=>e("img",{src:O,class:"h-10 w-10 rounded-full"},null,-1)),$e=g(()=>e("div",{class:"bg-gray-800 rounded-lg p-6 shadow-lg"},[e("h3",{class:"text-white text-lg font-semibold mb-4"}," Personal Trading Chart "),e("iframe",{src:"https://s.tradingview.com/widgetembed/?frameElementId=tradingview_68d44",width:"100%",height:"400",frameborder:"0",allowfullscreen:""})],-1)),Ce=$({__name:"index",setup(l){const d=n(!1),{user:c}=Y(),{formatToDollar:a}=K();n(!1),L();const{userData:r,loading:f}=D();return S(),(w,s)=>{var u,p,_,t;const i=P,y=V,h=ne;return b(),v("main",null,[e("div",ae,[x(i),e("div",ie,[e("p",ce,[U(" Hello "),e("span",de,m(((u=o(c))==null?void 0:u.name)??"Nil"),1),U(" 😊 we are super excited to have you here with us, our ultimate concern is to see a smile on your face. ")]),o(c).Status!=="Active"?(b(),v("button",{key:0,onClick:s[0]||(s[0]=C=>d.value=!0),class:"bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"}," Verify KYC ")):B("",!0)]),e("div",re,[e("div",ue,[pe,e("div",_e,[e("div",null,[me,e("p",ge,m(o(a)((p=o(r))==null?void 0:p.accountBalance)??"0.00"),1)])])]),e("div",fe,[e("div",null,[he,e("p",be,m(o(a)((_=o(r))==null?void 0:_.tradingBalance)??"0.00"),1)]),ve]),e("div",xe,[e("div",null,[we,e("p",ye,m(o(a)((t=o(r))==null?void 0:t.profit)??"0.00"),1)]),ke])]),$e,x(y)]),x(h,{isOpen:o(d),onClose:s[1]||(s[1]=C=>d.value=!1)},null,8,["isOpen"])])}}});const Te=j(Ce,[["__scopeId","data-v-d9d84558"]]);export{Te as default};
