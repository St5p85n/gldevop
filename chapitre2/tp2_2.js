import { produits,clients,commandes } from "./data.js";

const totalLigne = (lignes)=>lignes.reduce( (total,l)=>total+l.prixUnitaire*l.quantite,0)
const chifreCmdLivre = commandes.filter(cmd =>cmd.statut==="livree")
                                .reduce((total,cmd)=>total+totalLigne(cmd.lignes),0)
const cmsStatus = commandes.reduce((acc,cmd)=>{
    acc[cmd.statut] = (acc[cmd.statut] ?? 0)+1
    return acc;
} , {})

const vparCategorie = produits.reduce((acc,p)=>{
    acc[p.categorie] = (acc[p.categorie] ?? 0)+p.prix*p.stock;
    return acc;
},{})
const genererTableauDeBord = (produits, commandes)=>{
    const tLivre = commandes.filter(cmd =>cmd.statut==="livree").length
    const panier =tLivre ? Math.round(chifreCmdLivre/tLivre):0
    return {
        nbCommandes:commandes.length,
        nbCommandesParStatut: cmsStatus,
        chiffreAffairesLivre: chifreCmdLivre,
        panierMoyen:panier,
        produitsEnRupture:produits.filter(p=>p.stock===0).map(p=>p.nom),
        valeurStockParCategorie:vparCategorie
    }
}

console.log(genererTableauDeBord(produits,commandes))