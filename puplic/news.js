
let  sreachCountry = document.getElementById("search")
 let COUNTRY_Form = document.getElementById("form")

COUNTRY_Form.addEventListener("submit",(e)=>{
    e.preventDefault()
    window.open(`http://localhost:3000/?${sreachCountry.value}`,"_self")
})