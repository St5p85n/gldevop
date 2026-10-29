function factoriel(val){
    let r = 1
    for(let i=1;i<=val;i++) r*=i
    return r
}
const facto = (val) =>{
    let r = 1
    for(let i=1;i<=val;i++) r*=i
    return r
}
//
const users = {
    id:1,
    nom:"Diop",
    login:"dioplog",
    password:"passer123",
    age:17,
    email:"msk@gmail.com"
}
const {password,id,...newUser} = users
//console.log(newUser)
//const pass = users.password
//const login = users.login
//const {password:pass,login,email="contact@massekaacademy.com"} = users
//console.log(email)




const tab = [12,3,4]
const [un,deux,trois] = tab
//console.log(un)
//Cas 1 Destructuring

const produit={
    id:1,
    libelle:"Thiep",
    prixU:2500,
    qte:3
}
const {libelle,qte:quantite} = produit
//console.log(`Le libelle est ${libelle} et la quantite ${quantite}`)
const table = [100,2,10]
const [v1,v2,v3] = table
//console.log(v1)
// degroupement(spread). et le regroupement(rest) restant
const tab1 =[100,30,40,200]
const tab2 =[18,100]
const tUnion = [1,...tab1,...tab2,1500]
//console.log(tUnion)
const et1 = {id:100,nom:"Diop"}
const et2 = {id:1,nom:"Ba",age:15}
const etuUnion = {...et1,...et2}
//console.log(etuUnion)
//Exemple 2 Destructuring
const delegationJOJ = {
    id:1,
    nomChef:"Diop",
    nbParticipant:20,
    pays:"Senegale"
}
//const ps = delegationJOJ.pays
//const nbParticipant = delegationJOJ.nbParticipant
const {nbParticipant,pays:ps} = delegationJOJ
console.log(ps)
console.log(nbParticipant)
console.log(delegationJOJ)