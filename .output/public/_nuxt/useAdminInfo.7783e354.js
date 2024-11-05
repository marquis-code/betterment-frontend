import{u as i}from"./user.18d1d1bb.js";import{r as o,q as c}from"./entry.fa9cac2e.js";function d(){const n=o(!1),t=o(null),{token:r}=i(),a=async()=>{n.value=!0;const s=`
      query {
        getUser {
          id
          name
          email
          Status
          PlanType
          accountBalance
          tradingBalance
          eth
          btc
          profit
          timeAdded
          admin {
            name
            email
            btc
            eth
          }
        }
      }
    `;try{const e=await(await fetch("https://clone-better.onrender.com/graphql/query",{method:"POST",headers:{"content-type":"application/json",authorization:`Bearer ${r.value}`},body:JSON.stringify({query:s})})).json();e!=null&&e.errors?console.error(e.errors[0].message):t.value=e.data.getUser}finally{n.value=!1}};return c(()=>{a()}),{loadingAdminInfo:n,adminData:t,getAdminInfo:a}}export{d as u};
