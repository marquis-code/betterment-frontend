import{r as a,q as i,B as l}from"./entry.d021d1c2.js";import{u as p}from"./user.d31346c8.js";function g(){const{$toast:n}=l(),r=a(!1),t=a([]),{token:c}=p(),s=async()=>{r.value=!0;const u=`
      query {
        getUsers {
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
    `;try{const e=await(await fetch("https://clone-better.onrender.com/graphql/query",{method:"POST",headers:{"content-type":"application/json",authorization:`Bearer ${c.value}`},body:JSON.stringify({query:u})})).json();e!=null&&e.errors?(n(e.errors[0].message,{theme:"auto",type:"error",dangerouslyHTMLString:!0}),console.error(e.errors[0].message)):t.value=e.data.getUsers}catch(o){console.log(o,"caught error")}finally{r.value=!1}};return i(()=>{s()}),{loading:r,usersList:t,fetchUsers:s}}export{g as u};