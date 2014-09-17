function mandarMsg() {
    alert("Oi tudo bem?");
}

//Inserir ou substituir texto em um elemento
function inserirTexto(idElemento) {
    //se for um <p><h1><h2>... por exemplo
    document.getElementById().innerHTML = "Inserindo um texto dentro do Elemento usando JavaScript";
}

//Com o parâmetro ID do elemento passado trasforma em Maúsculo todo o texto
function letrasMaiusculas(idElemento) {
	var str = document.getElementById(idElemento).innerHTML;
	var res = str.toUpperCase();
	document.getElementById(idElemento).innerHTML = res;
}

//Com o parâmetro ID do elemento passado trasforma em Minúsculo todo o texto
function letrasMinusculas(idElemento) {
	var str = document.getElementById(idElemento).innerHTML;
	var res = str.toLowerCase();
	document.getElementById(idElemento).innerHTML = res;
}

//Oculta o Elemeto ou mostra novamente na página
function mostraEsconde(idElemento){
    var meuElemento = document.getElementById(idElemento);  
    if (meuElemento.style.display == "") {
    	meuElemento.style.display = "block";  
    }
    if(meuElemento.style.display == "block") {  
        meuElemento.style.display = "none";  
    } else {  
        meuElemento.style.display = "block";  
    }  
}
