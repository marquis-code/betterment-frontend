import{u as m}from"./user.9a8d007b.js";import{r as u,q as y,z as n}from"./entry.0b1f59d1.js";const r=u([]);function w(){const{token:l}=m(),s=u(!1),o=async()=>{var a;s.value=!0;const t=`
    query {
      getUsersTransactions {
        id
        amount
        wallet
        transactionType
        transactionStatus
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
        proof
        timeAdded
      }
    }
  `;try{const e=await(await fetch("https://clone-better.onrender.com/graphql/query",{method:"POST",headers:{"content-type":"application/json",authorization:`Bearer ${l.value}`},body:JSON.stringify({query:t})})).json();e!=null&&e.errors?console.error(e.errors[0].message):r.value=(a=e==null?void 0:e.data)==null?void 0:a.getUsersTransactions}finally{s.value=!1}};y(()=>{o()});const i=n(()=>r.value.filter(t=>t.transactionType==="Deposit"&&t.transactionStatus==="Approved").reduce((t,a)=>t+a.amount,0)),c=n(()=>r.value.filter(t=>t.transactionType==="Withdrawal"&&t.transactionStatus==="Approved").reduce((t,a)=>t+a.amount,0)),p=n(()=>i.value-c.value),d=n(()=>r.value.filter(t=>t.transactionType==="Deposit")),f=n(()=>r.value.filter(t=>t.transactionType==="Withdrawal"));return{loading:s,transactionsList:r,fetchUserTransactions:o,totalAccountBalance:p,depositTransactions:d,withdrawalTransactions:f,totalDeposits:i,totalWithdrawals:c}}export{w as u};
