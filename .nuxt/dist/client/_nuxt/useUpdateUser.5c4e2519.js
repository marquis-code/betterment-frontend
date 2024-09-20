import{r,B as o}from"./entry.0b1f59d1.js";import{u as i}from"./user.9a8d007b.js";function U(){const{user:p,token:u}=i(),t=r({}),s=r(!1);return{processing:s,updateUser:async(e,l)=>{var n;s.value=!0;const c=`
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
    `;try{const a=await(await fetch("https://clone-better.onrender.com/graphql/query",{method:"POST",headers:{"content-type":"application/json",authorization:`Bearer ${u.value}`},body:JSON.stringify({query:c,variables:{userId:e,input:l}})})).json();console.log(a,"datta jere"),(n=a==null?void 0:a.errors)!=null&&n.length&&o().$toast.success("Something went wrong",{autoClose:5e3,dangerouslyHTMLString:!0}),a.data&&o().$toast.success("User status was updated successfully",{autoClose:5e3,dangerouslyHTMLString:!0})}finally{s.value=!1}},payload:t,setPayload:e=>{t.value.name=e.name,t.value.email=e.email,t.value.profit=e.profit,t.value.tradingBalance=e.tradingBalance,t.value.accountBalance=e.accountBalance}}}export{U as u};
