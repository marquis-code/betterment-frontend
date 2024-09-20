import{_ as w}from"./EmailInput.vue.eaeb26a7.js";import{_ as b}from"./nuxt-link.462c6968.js";import{r as g,u as v,B as L,n as S,z as C,o as k,c as T,a as e,J as j,b as p,s as B,Q as M,x as t,t as N,w as _,d as y}from"./entry.0b1f59d1.js";import{_ as P}from"./logo.2439d788.js";import{u as D}from"./user.9a8d007b.js";import{e as E,a as V}from"./eye-close.8840656d.js";const r=g({email:"",password:""});function O(){const{$toast:i}=L(),{createUser:l}=D(),o=g(!1),a=v();return{processing:o,handleLogin:async()=>{o.value=!0;const c=`
      mutation {
        adminLogin(email: "${r.value.email}", password: "${r.value.password}") {
          jwt
          user {
            id
            name
            email
            Status
            PlanType
            accountBalance
            tradingBalance
            profit
            eth
            btc
            timeAdded
          }
        }
      }
    `;try{const s=await(await fetch("https://clone-better.onrender.com/graphql/query",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({query:c,variables:{email:r.value.email,password:r.value.password}})})).json();s!=null&&s.errors?i(s.errors[0].message,{theme:"auto",type:"error",dangerouslyHTMLString:!0}):(console.log(s.data.userLogin),l(s.data.adminLogin),i("Login success",{theme:"auto",type:"default",dangerouslyHTMLString:!0}),a.push("/admin/dashboard"))}catch{i(data.errors[0].message,{theme:"auto",type:"error",dangerouslyHTMLString:!0})}finally{o.value=!1}},form:r}}const U={class:"flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8"},$={class:"mt-10 sm:mx-auto sm:w-full sm:max-w-[580px]"},q=e("img",{class:"h-10 w-auto pl-9",src:P,alt:"Your Company"},null,-1),H={class:"bg-white px-6 py-12 sm:px-12"},A=e("label",{for:"email",class:"block text-sm font-medium leading-6 text-[#0D0C22]"},"Email",-1),J=e("label",{for:"password",class:"block text-sm font-medium leading-6 text-[#0D0C22]"},"Password",-1),z={class:"mt-0.5 relative"},F=["type"],I=["src"],Q=["disabled"],R={class:"mt-10 text-center text-sm text-gray-500 flex justify-between items-center"},ee=S({__name:"index",setup(i){const{handleLogin:l,processing:o,form:a}=O(),n=g(!1),c=C(()=>n.value?V:E),m=()=>{n.value=!n.value},s=f=>{a.value.email=f};return(f,d)=>{const x=w,h=b;return k(),T("div",U,[e("div",$,[q,e("div",H,[e("form",{onSubmit:d[1]||(d[1]=j((...u)=>t(l)&&t(l)(...u),["prevent"])),class:"space-y-6",action:"#",method:"POST"},[e("div",null,[A,p(x,{onCompleted:s})]),e("div",null,[J,e("div",z,[B(e("input",{name:"password",id:"password",type:t(n)?"text":"password","onUpdate:modelValue":d[0]||(d[0]=u=>t(a).password=u),class:"block w-full rounded-md border border-gray-100 p-3 py-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 placeholder:font-light outline-none",placeholder:"Enter your password"},null,8,F),[[M,t(a).password]]),e("img",{src:t(c),onClick:m,alt:"",class:"absolute right-4 top-4 h-6 w-6 cursor-pointer"},null,8,I)])]),e("div",null,[e("button",{disabled:t(o),type:"submit",class:"flex disabled:cursor-not-allowed disabled:opacity-25 w-full justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm"},N(t(o)?"processing...":"Login"),9,Q)])],32),e("p",R,[p(h,{to:"/s",class:"font-semibold leading-6 text-indigo-600 hover:text-indigo-500"},{default:_(()=>[y("Forgot password?")]),_:1}),p(h,{to:"/signup",class:"font-semibold leading-6 text-indigo-600 hover:text-indigo-500"},{default:_(()=>[y("Sign Up")]),_:1})])])])])}}});export{ee as default};
