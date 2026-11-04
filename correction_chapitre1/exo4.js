//
function additionner(...nombres){
   // for(let i=0;i<nombres.length;i++)console.log(nombres[i])
   let som=0
   nombres.forEach(e => som+=e)
   return som
}
const additionner2 = (...nombre) => {
    let som =0 
    nombre.forEach(x => som+=x)
    return som
}
//let r = additionner2(23,20)
//console.log(`La somme donne ${r}`)
const afficherPremierEtAutre = (premier,...autre)=>{
    console.log(`Premier: ${premier}`)
    autre.forEach( x => console.log(x))
}
//afficherPremierEtAutre(12,445,5,6,7)
const creerFicher = (nom,filiere,...competences)=>{
    return {nom,filiere,competences}
}
//console.log(creerFicher("Diop","GL","Dev web","Design","Test"))
