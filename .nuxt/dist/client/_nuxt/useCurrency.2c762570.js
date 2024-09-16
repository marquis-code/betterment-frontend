function o(){return{formatToDollar:r=>isNaN(r)?"$0.00":new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(r)}}export{o as u};
