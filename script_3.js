// Exercice 2.2.2 Pyramide de Mario
let nb = 0;
while(nb == 0) {
  nb = prompt(`Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?`);
} 

nb = parseInt(nb);
let espace = "";
let brique = "";

console.log(`Voici la pyramide test BIS:`);

for(let i = 1; i <=nb; i++){
  espace = ""
  brique = ""

  for (let j = 0; j <=(nb-i); j++){
    espace +="  ";
  }
  for (let k = 0; k <=i-1; k++){
    brique += "#";
  }
  console.log(`${espace}${brique}`);
}
    

