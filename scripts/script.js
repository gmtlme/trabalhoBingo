let buttonPreencherTabela = document.getElementById("preencher")
let buttonSortearNumero = document.getElementById("jogar")
let tabela = document.getElementById("table1")
let tbody1 = tabela.getElementsByTagName("tbody")[0]
let tabelaNumerosSorteados = document.getElementById("table2")
let tbody2 = tabelaNumerosSorteados.getElementsByTagName("tbody")[0]

tbody1.innerHTML = `<tr><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td></td><td></td><td></td><td></td><td></td></tr>`
tbody2.innerHTML = `<tr><td></td></tr>`                    

function preencherATabela(){
    buttonSortearNumero.style.visibility = "visible"
    buttonPreencherTabela.style.visibility = "hidden"
    let Numeros = new Array;

    var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
 				if (this.readyState == 4 && this.status == 200) {
                    
                    Numeros = JSON.parse(this.responseText);
                    tbody1.innerHTML = ' '
                    console.log(Numeros);
            
                
                    for(let i = 0; i <= 20; ){
                        
                        tbody1.innerHTML += `<tr> <td> ${Numeros[i]} </td> <td> ${Numeros[i+1]} </td> <td> ${Numeros[i+2]} </td> <td> ${Numeros[i+3]} </td> <td> ${Numeros[i+4]} </td>  </tr>`;
                        i = i + 5;
                    }   
                }
                
 				}
			
 			xhttp.open("GET", "dados.php", true);
             xhttp.send();
            }

let arrayNumerosSorteados = new Array;
arrayNumerosSorteados.push(9);

function sortearNumero(){

    let Numerosorteado;  
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            Numerosorteado = this.responseText;
            for(let i = 0; i<= arrayNumerosSorteados.length; i++){

                for(let j = 0; j <= i; j++){

                    while(Numerosorteado == arrayNumerosSorteados[j]){

                        Numerosorteado = Math.ceil(Math.random() * (50 - 10) + 10);
                        j = 0;
                    }
                }
            }
            arrayNumerosSorteados.push(Numerosorteado)          
            tbody2.innerHTML = `<tr><td>${Numerosorteado}</td></tr>`;
            const celulas = tabela.querySelectorAll("tbody td");
            for(let c of celulas){
                if(c.textContent.trim() == Numerosorteado){
                    c.classList.add("marcado");
                }
            }
            console.log(arrayNumerosSorteados);
            
            testarVitoria();
        }
   }
             xhttp.open("GET", "dados2.php", true);
             xhttp.send();

}

function testarVitoria(){
    const marcados = tabela.querySelectorAll("tbody td.marcado").length;

    if(arrayNumerosSorteados.length >= 35 && marcados < 25){
        alert('Você perdeu!')
        window.location.reload()
    }
    else if(marcados == 25){
        alert("Você ganhou!");
        window.location.reload()
    }

}