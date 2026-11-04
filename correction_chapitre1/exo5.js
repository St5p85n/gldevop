const etudiantL2={
    id:104,
    prenom:"Aminata",
    nom:"Fall",
    notes: [13,16,12],
    filiere:"IAGE"
}
function extraireIdentite(etudiant){
    // destruc {nom,prenom,filiere}
    const {nom,filiere,prenom} = etudiant
    return {nom,prenom,filiere}
}
const extraireIdentite2 = etudiant => {
      const {nom,filiere,prenom} = etudiant
    return {nom,prenom,filiere}
}
//console.log(extraireIdentite2(etudiantL2))
const calculMoyenneNotes = (notes) =>{
   if(notes.length===0) return 0;
   let som=0
   notes.forEach(x => som+=x);
   return som/notes.length
}
let res = calculMoyenneNotes([12,14])
//console.log(res)
function ajouterNote(etudiant,nouvelleNote){
    // retourne un objet avec la nouvelle note ajoutee
    const e = structuredClone(etudiant)
    e.notes= [...e.notes,nouvelleNote]
    return e
}
//ajouterNote(etudiantL2,18)
const creerResume = (etudiant,...options)=>{
    // resume {identite,monyenne,options}
    return {
        identite:extraireIdentite(etudiant),
        moyenne:calculMoyenneNotes(etudiant.notes),
        options:options
    }
}
console.log(creerResume(etudiantL2,"Bourse Ent","Demi Bourse"))

//valeur1
//valeur2
//valeur3
//valeur4
//valeur5
//nom
//prenom
//verfier , creer une fonction qui prend (...valeurs)
// afficher les nombre premier du tableau (fonctions flechees)
// creer un objet avec une liste de note qui sont les valeurs




//tableaux(filter,map,)