const extraireIdentite2 = etudiant => {
      const {nom,filiere,prenom} = etudiant
    return {nom,prenom,filiere}
}
const calculMoyenneNotes = (notes) =>{
   if(notes.length===0) return 0;
   let som=0
   notes.forEach(x => som+=x);
   return som/notes.length
}
const additionner2 = (...nombre) => {
    let som =0 
    nombre.forEach(x => som+=x)
    return som
}
const etudiant ={
    id:1,
    nom:"",
    prenom:""
}
export {extraireIdentite2,calculMoyenneNotes,etudiant}