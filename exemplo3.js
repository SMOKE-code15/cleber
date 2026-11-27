function baixar(numero,cvv,senha){
    if(cvv.length==3){
return `Nº:${numero},CVV:${cvv},senha:${senha}`;
    }
return "Dados Inválidos"
}