let saucao = function SaudacaoDiversa(){
    let SD;
    SD = Math.random();
    if(SD == 0|| SD<0.2){
        return 'olá';
    }
    else if(SD == 0.2|| SD<0.4){
        return 'oiii';
    }
    else if(SD == 0.4|| SD<0.8){
        return 'iae';
    }
    else{
        return 'Salve ✌️';
    }
}

let bebidas = function resBebidaDiversa() {
    let SD;
    SD = Math.random();
    if(SD == 0|| SD<0.2){
        return 'bebidas, entendi!';
    }
    else if(SD == 0.2|| SD<0.4){
        return 'pode deixar! Só vou colocar o celular no modo avião pra não dá merda ✈';
    }
    else if(SD == 0.4|| SD<0.8){
        return 'Ok, mas nada de ligar pra ex!';
    }
    else{
        return 'Receita pra bebida? Pra já! 🍻';
    }
}

let bolo = function resBoloDiversa() {
    let SD;
    SD = Math.random();
    if(SD == 0|| SD<0.2){
        return 'Hmmmmmm, de fato hj está perfeito para fazer um bolo! 🍰';
    }
    else if(SD == 0.2|| SD<0.4){
        return 'Só te passo a receita se eu poder comer um pouco da masa crua!😋';
    }
    else if(SD == 0.4|| SD<0.8){
        return 'Certo, vou pegar o livro de receitas da minha avó, ela manja dos bolos';
    }
    else{
        return 'Só não me deixa passando vontade! Adoro bolo';
    }
}

let doce = function resDoceDiversa() {
    let SD;
    SD = Math.random();
    if(SD == 0|| SD<0.2){
        return 'Ok, por vc sairei um pouco do regime, VAMOS DE DOCES!😆';
    }
    else if(SD == 0.2|| SD<0.4){
        return 'Vc lê mentes? Eu estava pensando agr em uns doces 🍫';
    }
    else if(SD == 0.4|| SD<0.8){
        return 'Doces são sempre bem vindos!';
    }
    else{
        return 'Ok, vamos falar de doces, só não conta pra minha nutricionista! 🤫';
    }
}

let pedirMais = function resEoqueMais() {
    let SD;
    SD = Math.random();
    if(SD == 0|| SD<0.2){
        return 'ok, e o que mais?';
    }
    else if(SD == 0.2|| SD<0.4){
        return 'sim... anotei aqui, e o que mais?';
    }
    else if(SD == 0.4|| SD<0.8){
        return 'unrrum... tem algum igrediente a mais?';
    }
    else{
        return 'Anotado, e oque mais?';
    }
}

module.exports = {
    saucao,
    bebidas,
    bolo,
    doce,
    pedirMais
}