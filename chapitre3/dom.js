const myDiv =document.querySelector("#myDiv")
const myH1 = document.createElement("h1")
myH1.textContent="H1 cree depuis js"
myDiv.append(myH1)
//myDiv.innerHTML="<h1>Exo depuis JS</h1>"

const btnA = document.querySelector("#dtPlat")
btnA.addEventListener("click",(event)=>{
    
    event.preventDefault()

    const plat = document.querySelector("#plat").value
    const plats = getData()
    plats.push({libelle:plat})
    setData(plats)
    document.querySelector("#listePlats").innerHTML+=`<li>${plat}</li>`
    document.querySelector("#plat").value=""
})

const CLE_SVG = "domPlats"
const getData = ()=>{
   try {
     return  JSON.parse(localStorage.getItem(CLE_SVG))  ?? []
   } catch (error) {
    
     return []
   }
}
const setData = (datas) => {
    localStorage.setItem(CLE_SVG,JSON.stringify(datas))
}