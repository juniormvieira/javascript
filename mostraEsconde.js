function mostraEsconde(idCod){
    var meuElemento = document.getElementById(idCod);  
    if (meuElemento.style.display == "") {
    	meuElemento.style.display = "block";  
    }
    if(meuElemento.style.display == "block") {  
        meuElemento.style.display = "none";  
    } else {  
        meuElemento.style.display = "block";  
    }  

}
