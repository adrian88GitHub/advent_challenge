// reto 2
// function listGifts(letter) {
//   // ¡Tú puedes!
//   const letterWithoutSpacing = letter.trim().replace(/(\s{2,})/g, " ");
//   const letterArray = letterWithoutSpacing.split(" ");
//   const letterObject = letterArray.reduce((object, next) => {
//     return next.charAt(0) !== "_"
//       ? Object.keys(object).includes(next)
//         ? { ...object, [next]: object[next] + 1 }
//         : { ...object, [next]: 1 }
//       : object;
//   }, {});
//   return letterObject;
// }

// console.log(listGifts("bici coche balón _playstation bici coche peluche"));

//reto 3

// function isValid(letter) {
//   // ¡No dejes que el Grinch gane!
//   const letterJoined = letter.replace(/(\s)/g, "");
//   let subLetter = letterJoined.split("");
//   let bandExit = false;
//   let letterRigth = true;

//   while (!bandExit && !!subLetter.length) {
//     const firstIndex = subLetter.findIndex((value) => value === "(");
//     if (firstIndex !== -1) {
//       const secondIndex = subLetter.findIndex((value) => value === ")");
//       const stringToCheck = subLetter.slice(firstIndex, secondIndex + 1);
//       subLetter = subLetter.slice(secondIndex, subLetter.length - 1);
//       if (
//         stringToCheck.length < 3 ||
//         stringToCheck.indexOf("[") !== -1 ||
//         stringToCheck.indexOf("{") !== -1
//       ) {
//         letterRigth = false;
//         bandExit = true;
//       }
//     } else {
//       bandExit = true;
//     }
//   }
// }

// function isValid(letter) {
//   // ¡No dejes que el Grinch gane!
//   const letterSplited = letter.split(" ");
//   let letterRigth = true;
//   for (let index = 0; index < letterSplited.length; index++) {
//     const stringToCheck = checkPArentesis(letterSplited[index].split(""));
//     if (!stringToCheck) {
//       return (letterRigth = false);
//     }
//     if (
//       stringToCheck.indexOf("[") !== -1 ||
//       stringToCheck.indexOf("{") !== -1
//     ) {
//       return (letterRigth = false);
//     }
//   }

//   return letterRigth;
// }

// function checkPArentesis(arrayString) {
//   let pp = arrayString.indexOf("(");
//   let sp = arrayString.lastIndexOf(")");
//   if (pp !== -1 && sp === -1) return null;
//   if (pp === -1 && sp !== -1) return null;
//   if (pp === -1 && sp === -1) {
//     return arrayString.join("");
//   } else {
//     let arraySub = arrayString.slice(pp + 1, sp);
//     console.log(arraySub);
//     return checkPArentesis(arraySub);
//   }
// }
// const result = isValid("(()) bici");
// console.log({ result });

//reto4

function arbolito(height) {
  if (
    typeof height === "number" &&
    Number.isInteger(height) &&
    height >= 1 &&
    height <= 100
  ) {
    let tamanioRama = height * 2 - 1;
    let tronco = "";
    let arbol = "";
    for (let i = 0; i < height; i++) {
      let rama = "";
      let guionesBajoInicial = height - (i + 1);
      let guionesBajoFinal = tamanioRama - guionesBajoInicial;
      for (let j = 1; j <= tamanioRama; j++) {
        if (j <= guionesBajoInicial) {
          if (i === 0) {
            tronco += "_";
          }
          rama += "_";
        } else if (j > guionesBajoFinal) {
          rama += "_";
          if (i === 0) {
            tronco += "_";
          }
        } else {
          rama += "*";
          if (i === 0) {
            tronco += "#";
          }
        }
      }
      arbol = arbol + `<br> ${rama}`;
    }
    arbol += `<br> ${tronco}`;
    arbol += `<br> ${tronco}`;
    return arbol;
  } else {
    return "parametro no permitido";
  }
}

const pArbol = document.getElementById("arbol");
pArbol.innerHTML = arbolito(5);
// console.log(arbolito(101));
