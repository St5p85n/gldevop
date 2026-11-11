import { produits } from "./data.js";
//const prodInfo = produits.filter(p => p.categorie==="informatique" && p.prix>=50000 && p.prix<=500000)
//console.log(prodInfo)
//const prodNamePrice = produits.map(p => `<li>${p.nom} - ${p.categorie} - ${p.prix}</li>`)
//console.log(prodNamePrice)
//const totalPrice = produits.reduce( (total,p) =>total+p.prix,0)
//const maxPrice = produits.reduce( (max,p) => p.prix>max.prix? p: max,{})
//console.log(maxPrice)
//const prod5 = produits.find(p=>p.id===5);
//console.log(prod5)
//let note = 19
//let status = note>=10? "Admin":"Echoue";
//console.log(status)
const prodInfo = produits.filter(p => p.categorie==="informatique")
                        .map(x => ({name:x.nom,prixU:x.prix}))
                        .reduce((total,e) => total+e.prixU,0)
                        
const totalPrice = produits.reduce( (total,p) =>total+p.prix,0)

console.log(prodInfo)