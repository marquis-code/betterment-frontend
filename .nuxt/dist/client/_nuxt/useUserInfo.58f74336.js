import{u as a}from"./user.3a31c8fb.js";import{r as n,q as l}from"./entry.50b5a30e.js";const{token:c}=a();function p(){const r=n(!1),t=n(null),o=async()=>{r.value=!0;const s=`
      query {
        getUser {
          id
          name
          email
          Status
          PlanType
          accountBalance
          tradingBalance
          profit
          role
          eth
          btc
          timeAdded
        }
      }
    `;try{const e=await(await fetch("https://clone-better.onrender.com/graphql/query",{method:"POST",headers:{"content-type":"application/json",authorization:`Bearer ${c.value}`},body:JSON.stringify({query:s})})).json();e!=null&&e.errors?console.error(e.errors[0].message):t.value=e.data.getUser}finally{r.value=!1}};return l(()=>{o()}),{loading:r,userData:t,getUserInfo:o}}export{p as u};
