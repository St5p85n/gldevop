const tab = [34,55,66,34]
const tabUser = [
    {id:1,nom:"Diop",prenom:"Maimouna",age:19},
    {id:2,nom:"Ba",prenom:"Aminata",age:22},
    {id:3,nom:"Ka",prenom:"Moussa",age:17},
    {id:4,nom:"Samba",prenom:"Fatima",age:25},
    {id:5,nom:"Fall",prenom:"Babacar",age:16}
]
const produits =[
    {id:1,libelle:"iphone",qtStock:2,prix:150000},
    {id:2,libelle:"samsung",qtStock:0,prix:50000},
    {id:3,libelle:"huawei",qtStock:3,prix:250000},
    {id:4,libelle:"itel",qtStock:1,prix:80000}
]
//console.log(tabUser)
//filter
//tabUser.forEach(e => console.log(e))
const userMineur = tabUser.filter(e => e.age<18)
//console.log(userMineur)
//le produits en stock
const prodStock = produits.filter(p => p.qtStock>0)
//console.log(prodStock)
//produist en stock dont le prix est cimpris 150000 et 200000
const prodStock150and200 = produits.filter(p => p.qtStock>0 && p.prix>=150000&&p.prix<=200000)
console.log(prodStock150and200)
//map
//reduce
//cominaisant de (filter,max,reduce)
//filterma