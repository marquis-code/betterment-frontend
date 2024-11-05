import{r,B as u}from"./entry.fa9cac2e.js";import{u as c}from"./user.18d1d1bb.js";function U(){const{user:p,token:o}=c(),t=r({}),s=r(!1);return{processing:s,updateUser:async(e,i)=>{var n;s.value=!0;const l=`
      mutation updateUser($userId: String!, $input: UpdateUser!) {
        updateUser(userId: $userId, input: $input) {
          id
          name
          email
          Status
          PlanType
          accountBalance
          tradingBalance
          eth
          btc
          timeAdded
        }
      }
    `;try{const a=await(await fetch("https://clone-better.onrender.com/graphql/query",{method:"POST",headers:{"content-type":"application/json",authorization:`Bearer ${o.value}`},body:JSON.stringify({query:l,variables:{userId:e,input:i}})})).json();(n=a==null?void 0:a.errors)!=null&&n.length&&u().$toast.success("Something went wrong",{autoClose:5e3,dangerouslyHTMLString:!0}),a.data&&u().$toast.success("User status was updated successfully",{autoClose:5e3,dangerouslyHTMLString:!0})}finally{s.value=!1}},payload:t,setPayload:e=>{t.value.name=e.name,t.value.email=e.email,t.value.profit=e.profit,t.value.tradingBalance=e.tradingBalance,t.value.accountBalance=e.accountBalance}}}export{U as u};
