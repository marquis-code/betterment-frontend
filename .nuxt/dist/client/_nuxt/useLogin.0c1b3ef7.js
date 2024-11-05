import{r as t,u as l,B as c}from"./entry.fa9cac2e.js";import{u as d}from"./user.18d1d1bb.js";const r=t({email:"",password:""});function y(){const{$toast:s}=c(),{createUser:o}=d(),a=t(!1),n=l();return{processing:a,handleLogin:async()=>{a.value=!0;const u=`
      mutation {
        userLogin(email: "${r.value.email}", password: "${r.value.password}") {
          jwt
          user {
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
      }
    `;try{const e=await(await fetch("https://clone-better.onrender.com/graphql/query",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({query:u,variables:{email:r.value.email,password:r.value.password}})})).json();e!=null&&e.errors?s(e.errors[0].message,{theme:"auto",type:"error",dangerouslyHTMLString:!0}):(console.log(e.data.userLogin),o(e.data.userLogin),s("Login success",{theme:"auto",type:"default",dangerouslyHTMLString:!0}),n.push("/dashboard"))}catch{s(data.errors[0].message,{theme:"auto",type:"error",dangerouslyHTMLString:!0})}finally{a.value=!1}},form:r}}export{y as u};
