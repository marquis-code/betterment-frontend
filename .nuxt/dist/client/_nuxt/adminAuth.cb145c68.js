import{u as t}from"./user.9a8d007b.js";import{a6 as a,W as i}from"./entry.0b1f59d1.js";const n=a((o,r)=>{const{user:e}=t();if(!e.value.isAuthenticated||!e.value.isAdmin)return i("/admin/login")});export{n as default};