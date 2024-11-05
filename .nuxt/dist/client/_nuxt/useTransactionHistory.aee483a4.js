import{r as u,z as n,q as m,B as h}from"./entry.fa9cac2e.js";import{u as T}from"./user.18d1d1bb.js";function w(){const o=u(!1),{token:l}=T(),e=u([]),{$toast:p}=h(),s=async()=>{o.value=!0;const t=`
      query {
        getTransactions {
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
    `;try{const a=await(await fetch("https://clone-better.onrender.com/graphql/query",{method:"POST",headers:{"content-type":"application/json",authorization:`Bearer ${l.value}`},body:JSON.stringify({query:t})})).json();a!=null&&a.errors?p(a.errors[0].message,{theme:"auto",type:"error",dangerouslyHTMLString:!0}):e.value=a.data.getTransactions}finally{o.value=!1}},i=n(()=>e.value.filter(t=>t.transactionType==="Deposit").reduce((t,r)=>t+r.amount,0)),c=n(()=>e.value.filter(t=>t.transactionType==="Withdrawal").reduce((t,r)=>t+r.amount,0)),d=n(()=>i.value-c.value),y=n(()=>e.value.filter(t=>t.transactionType==="Deposit")),f=n(()=>{if(e.value.length)return e.value.filter(t=>t.transactionType==="Withdrawal")});return m(()=>{s()}),{loading:o,transactionsList:e,fetchTransactionHistory:s,totalAccountBalance:d,depositTransactions:y,withdrawalTransactions:f,totalDeposits:i,totalWithdrawals:c}}export{w as u};
