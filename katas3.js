const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function show(id, resultado){
	let destination = document.getElementById(id)
	destination.appendChild(resultado);

}


function kata1() {
    // implemente o código do kata 1 aqui
    for (let i = 1; i <= 25; i++){
    
        let li = document.createElement("li");
            li.className = "listNumber"
            li.innerHTML = i;
        show("kata1", li)
        }
      }
      
      kata1()

function kata2() {
    // implemente o código do kata 2 aqui
    for (let i = 25; i >= 1; i--){
    
        let li = document.createElement("li");
            li.className = "listNumber"
            li.innerHTML = i;
        show("kata2", li)
        }
      }
      
      kata2()

function kata3() {
    // implemente o código do kata 3 aqui
    for (let i = -1; i >= -25; i--){
    
        let li = document.createElement("li");
            li.className = "listNumber"
            li.innerHTML = i;
        show("kata3", li)
        }
      }
      
      kata3()


function kata4() {
    // implemente o código do kata 4 aqui
    for (let i = -25; i <= -1; i++){
    
        let li = document.createElement("li");
            li.className = "listNumber"
            li.innerHTML = i;
        show("kata4", li)
        }
      }
      
      kata4()



function kata5() {
    // implemente o código do kata 5 aqui
    for (let i = 25; i >= -25; i--){
        if (i%2 != 0 ) {
            let li = document.createElement("li");
            li.className = "listNumber"
            li.innerHTML = i;
        show("kata5", li)
            }
        }
      }
      
      kata5()


function kata6() {
    // implemente o código do kata 6 aqui
    for (let i = 3; i <= 100; i++){
        if (i%3 == 0 ) {
            let li = document.createElement("li");
            li.className = "listNumber"
            li.innerHTML = i;
            show("kata6", li)
            }
        }
      }
      
      kata6()


function kata7() {
    // implemente o código do kata 7 aqui
    for (let i = 7; i <= 100; i++){
        if (i%7 == 0 ) {
            let li = document.createElement("li");
            li.className = "listNumber"
            li.innerHTML = i;
            show("kata7", li)
            }
        }
      }
      
      kata7()

function kata8() {
    // implemente o código do kata 8 aqui
    for (let i = 100; i >= 1; i--){
        if (i % 3 == 0  || i % 7 == 0) {
            let li = document.createElement("li");
            li.className = "listNumber"
            li.innerHTML = i;
            show("kata8", li)
            }
        }
      }
      
      kata8()


function kata9() {
    // implemente o código do kata 9 aqui
    for (let i = 5; i <= 100; i++){
        if (i % 2 != 0  && i % 5 == 0) {
            let li = document.createElement("li");
            li.className = "listNumber"
            li.innerHTML = i;
            show("kata9", li)
            }
        }
      }
      
      kata9()


function kata10() {
    // implemente o código do kata 10 aqui
    for (let i = 0; i < sampleArray.length; i++){
    
            let li = document.createElement("li");
                li.className = "listNumber"
                li.innerHTML = sampleArray[i];
            show("kata10", li)
            }
      }
      
      kata10()


function kata11() {
    // implemente o código do kata 11 aqui
    for (let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] % 2 == 0){
            let li = document.createElement("li");
                li.className = "listNumber"
                li.innerHTML = sampleArray[i];
            show("kata11", li)
        }
    }
  }
  
  kata11()



function kata12() {
    // implemente o código do kata 12 aqui
    for (let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] % 2 != 0){
            let li = document.createElement("li");
                li.className = "listNumber"
                li.innerHTML = sampleArray[i];
            show("kata12", li)
        }
    }
  }
  
  kata12()

function kata13() {
    // implemente o código do kata 13 aqui
    for (let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] % 8 == 0 ){
            let li = document.createElement("li");
                li.className = "listNumber"
                li.innerHTML = sampleArray[i];
            show("kata13", li)
        }
    }
  }
  
  kata13()

function kata14() {
    // implemente o código do kata 14 aqui
    for (let i = 0; i < sampleArray.length; i++){
    
        let li = document.createElement("li");
            li.className = "listNumber"
            li.innerHTML = sampleArray[i] * sampleArray[i];
        show("kata14", li)
        }
  }
  
  kata14()

function kata15() {
    // implemente o código do kata 15 aqui
    let soma = 0
    for (let i = 1; i <= 20; i++){
        soma = soma + i 
        }
        
        let li = document.createElement("li");
        li.className = "listNumber"
        
        li.innerHTML = soma;
        show("kata15", li)
        
      }
      
      kata15()


function kata16() {
    // implemente o código do kata 16 aqui
    let soma = 0
    for (let i = 0; i < sampleArray.length; i++){
        soma = soma + sampleArray[i] 
        }
        
        let li = document.createElement("li");
        li.className = "listNumber"
        
        li.innerHTML = soma;
        show("kata16", li)
        
      }
      
      kata16()


function kata17() {
    let menorNumero = sampleArray[0]
    // implemente o código do kata 17 aqui
    for (let i = 1; i < sampleArray.length; i++){
        if (sampleArray[i] < menorNumero) {
            menorNumero = sampleArray[i]
        }
    }
        let li = document.createElement("li");
            li.className = "listNumber"
            li.innerHTML = menorNumero;
        show("kata17", li)
        }
      
      
      kata17()


function kata18() {
    let maiorNumero = sampleArray[0]
    // implemente o código do kata 17 aqui
    for (let i = 1; i < sampleArray.length; i++){
        if (sampleArray[i] > maiorNumero) {
            maiorNumero = sampleArray[i]
        }
    }
        let li = document.createElement("li");
            li.className = "listNumber"
            li.innerHTML = maiorNumero;
        show("kata18", li)
        }
      
      
      kata18()



/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
