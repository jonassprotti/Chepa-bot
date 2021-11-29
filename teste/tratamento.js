const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

var digitada =[]
var aceito =[], opPrato
    

const receita = function Combinacao(){

    for(let index_text =0; index_text < digitada.length; index_text++){
        if(digitada[index_text] === "cachaça" || digitada[index_text] === "caxaca" || digitada[index_text] === "caxaça" || digitada[index_text] === "cajaca" || digitada[index_text] === "cajaça" || digitada[index_text] === "cachasa" || digitada[index_text] === "cajasa" || digitada[index_text] === "caxasa"){
            digitada[index_text] = "cachaca"
        }

        else if(digitada[index_text] === "limão"){
            digitada[index_text] = "limao"
        }

        else if(digitada[index_text] === "açucar" || digitada[index_text] === "asucar" || digitada[index_text] === "acuca" || digitada[index_text] === "asuca" || digitada[index_text] === "açúcar"){
            digitada[index_text] = "acucar"
        }

        else if(digitada[index_text] === "leite moça" || digitada[index_text] === "leite moca"){
            digitada[index_text] = "leite condensado"
        }

        else if (digitada[index_text] === "manteiga" || digitada[index_text] === "mantega" || digitada[index_text] === "matega" || digitada[index_text] === "margarita"){
            digitada[index_text] = "margarina"
        }

        else if (digitada[index_text] === "sau" || digitada[index_text] === "çau" || digitada[index_text] === "çal"){
            digitada[index_text] = "sal"
        }

        else if (digitada[index_text] === "suco de limão" || digitada[index_text] === "limao" || digitada[index_text] === "limão"){
            digitada[index_text] = "suco de limao"
        }

        else if (digitada[index_text] === "pinga"){
            digitada[index_text] = "garrafa de pinga"
        }

        else if (digitada[index_text] === "chocolate de valsa" || digitada[index_text] === "valsa" || digitada[index_text] === "bombom de valsa" || digitada[index_text] === "bombom" || digitada[index_text] === "bonbon" || digitada[index_text] === "bonbon de valsa" || digitada[index_text] === "chocolate de vausa" || digitada[index_text] === "vausa" || digitada[index_text] === "bombom de vausa" || digitada[index_text] === "bombom" || digitada[index_text] === "bonbon" || digitada[index_text] === "bonbon de vausa"){
            digitada[index_text] = "bombons de valsa"
        }

        else if (digitada[index_text] === "água" || digitada[index_text] === "aqua"){
            digitada[index_text] = "agua"
        }

        else if (digitada[index_text] === "casca de limão"){
            digitada[index_text] = "casca de limao"
        }

        else if (digitada[index_text] === "maçã" || digitada[index_text] === "maça" || digitada[index_text] === "macã"){
            digitada[index_text] = "maca"
        }

        else if (digitada[index_text] === "chá de frutas vermelhas"){
            digitada[index_text] = "cha de frutas vermelhas"
        }

        else if (digitada[index_text] === "manteiga sem sal" || digitada[index_text] === "mantega sem sal" || digitada[index_text] === "matega sem sal" || digitada[index_text] === "margarita sem sal"){
            digitada[index_text] = "margarina sem sal"
        }

        else if (digitada[index_text] === "chocolate em pó" || digitada[index_text] === "tody" || digitada[index_text] === "nescal" || digitada[index_text] === "nescau"){
            digitada[index_text] = "achocolatado"
        }

        else if (digitada[index_text] === "coco"){
            digitada[index_text] = "coco fresco"
        }

        else if (digitada[index_text] === "acuca cristal" || digitada[index_text] === "açúcar cristal"){
            digitada[index_text] = "acucar cristal"
        }

        else if (digitada[index_text] === "suco em pó sabor morango" || digitada[index_text] === "tang de morango" || digitada[index_text] === "suco de morango" || digitada[index_text] === "suco de morango em pó"){
            digitada[index_text] = "suco em po sabor morango"
        }

        else if (digitada[index_text] === "ovo"){
            digitada[index_text] = "ovos"
        }

        else if (digitada[index_text] === "batata"){
            digitada[index_text] = "batatas"
        }

        else if (digitada[index_text] === "óleo de milho"){
            digitada[index_text] = "oleo de milho"
        }

        else if (digitada[index_text] === "Fermento químico em pó" || digitada[index_text] === "Fermento quimico em pó" || digitada[index_text] === "Fermento em po" || digitada[index_text] === "Fermento em pó"){
            digitada[index_text] = "Fermento quimico em po"
        }

        else if (digitada[index_text] === "orégano a gosto"){
            digitada[index_text] = "oregano a gosto"
        }

        else if (digitada[index_text] === "amido de melho"){
            digitada[index_text] = "amido de milho"
        }

        else if (digitada[index_text] === "cenoura"){
            digitada[index_text] = "cenouras"
        }

        else if (digitada[index_text] === "tomate"){
            digitada[index_text] = "tomates"
        }

        else if (digitada[index_text] === "queijo parmesão ralado"){
            digitada[index_text] = "queijo parmesao ralado"
        }

        else if (digitada[index_text] === "fubá"){
            digitada[index_text] = "fuba"
        }

        else if (digitada[index_text] === "óleo"){
            digitada[index_text] = "oleo"
        }

        else if (digitada[index_text] === "cheiro verde" || digitada[index_text] === "coentro"){
            digitada[index_text] = "cheiro-verde"
        }
    }

    digitada.sort()
    for (let i = 0; i < digitada.length; i++) {
        digitada[i] = digitada[i].toLowerCase();
        }

    //DRINKS------------------------------------------------------------------------------
    let caipirinha = ["acucar", "cachaca", "limao"],
    batidaSonhoValsa1 = ["bombons de valsa", "garrafa de pinga", "leite condensado", "refrigerante"],
    batidaSonhoValsa2 =["bombons de valsa", "garrafa de pinga", "leite condensado", "Vodka"],
    gin_TonicaChaFrutasVermelhas = ["gin", "cha de frutas vermelhas"],
    vitaminaBanana = ["banana", "leite", "acucar"]
    //DRINKS------------------------------------------------------------------------------
    //DOCE--------------------------------------------------------------------------------
    let mouseLimao = ["creme de leite", "leite condensado", "suco de limao"],
    brigadeiro =["leite condensado", "margarina sem sal", "achocolatado", "chocolate granulado"],
    danoninho = ["leite condensado", "creme de leite","iogurte natural", "suco em po sabor morango"],
    bolinhoChuva = ["farinha de trigo", "ovos", "acucar", "leite", "sal", "fermento em po"]
    //DOCE--------------------------------------------------------------------------------
    //SALADA-------------------------------------------------------------------------------
    let saladaMista = ["alface americano", "cenouras", "beterraba", "tomates", "cebola", "molho", "sal", "acucar", "azeite de oliva", "vinagre"]
    //SALADA-------------------------------------------------------------------------------
    let boloSimples = ["acucar", "farinha de trigo", "margarina","ovos", "leite", "fermento em po"],
    boloFuba = ["acucar", "farinha de trigo", "oleo", "leite", "fuba", "fermento em po", "ovos"],
    boloMilho = ["milho em conserva", "ovos", "fuba", "acucar", "leite", "oleo de milho", "fermento quimico em po"],
    bananaBolo = ["ovos", "acucar", "oleo", "leite", "farinha de trigo"]

    
    for(let index_i = 0; index_i< caipirinha.length; index_i++){
        //bebidas------------------------------------------------
        if(digitada[index_i] === caipirinha[index_i]){
            aceito = "Modo de preparo: 1 - Corte o limão ao meio e, depois, em fatias meia-lua finas. 2- Macere (esmague) levemente as fatias de limão com o açúcar em um copo baixo (macerar demais deixa o drinque amargo). 3- Encha o copo com gelo e coloque a cachaça. Misture e finalize com fatias de limão"
            return aceito
        }
        else if(digitada[index_i] === batidaSonhoValsa1[index_i] ||digitada[index_i] === batidaSonhoValsa2[index_i]){
            aceito = "- Modo de preparo: 1- Bater tudo no liquidificador, ficando os chocolates crocantes por cima, 2- Servir gelado,3- Dica: Pode usar vinho também no lugar da pinga."
            return aceito
        }
        else if(digitada[index_i] === gin_TonicaChaFrutasVermelhas[index_i]){
            aceito = "- Modo de preparo: Em uma taça larga, coloque o saquinho de chá. Encha com gelo e coloque o gin. Deixe infusionar por uns 2 minutos. Complete com água tônica."
            return aceito
        }
        else if(digitada[index_i] === vitaminaBanana[index_i]){
            aceito = "- Modo de preparo: Basta jogar a banana dentro de um liquitificador, jogar leite e o açúcar e batata tudo, caso fique muito denso você pode jogar água para deixar mais fino."
            return aceito
        }
        //DOCE--------------------------------------------------------------------------------
        else if(digitada[index_i] === mouseLimao[index_i]){
            aceito = "- Modo de preparo: 1- Coloque no liquidificador o creme de leite (com soro mesmo) e o leite condensado. 2- Bata um pouco e depois vá acrescentando o suco do limão, aos poucos. 3- Ele vai ficar bem consistente, leve à geladeira."
            return aceito
        }
        else if(digitada[index_i] === brigadeiro[index_i]){
            aceito = "- Modo de preparo: 1 - Em uma panela funda, acrescente o leite condensado, a margarina e o chocolate em pó. 2- Cozinhe em fogo médio e mexa até que o brigadeiro comece a desgrudar da panela. 3- Deixe esfriar e faça pequenas bolas com a mão passando a massa no chocolate granulado."
            return aceito
        }
        else if(digitada[index_i] === danoninho[index_i]){
            aceito = "- Modo de preparo : 1 - Em um liquidificador, bata todos os ingrediente até obter uma consistência cremosa. 2- Dispense a mistura em um recipiente e leve à geladeira até que esteja firme."
            return aceito
        }
        else if(digitada[index_i] === bolinhoChuva[index_i]){
            aceito = "- Modo de preparo : 1- Misture todos os ingredientes numa vasilha. 2- Frite as colheradas em óleo quente. 3- Polvilhe açúcar e canela."
            return aceito
        }
        //SALADA-------------------------------------------------------------------------------
        else if(digitada[index_i] === saladaMista[index_i]){
            aceito = "- Modo de Preparo: 1- Para fazer o molho, misture o coentro picado, o suco de limão, o azeite de oliva, o sal e a pimenta. 2- Coloque a alface, os tomates, a cebola e o abacate em uma vasilha grande. 3- Misture tudo e sirva."
            return aceito
        }
        //BOLO---------------------------------------------------------------------------------
        else if(digitada[index_i] === boloSimples[index_i]){
            aceito = "- Modo de Preparo: 1- Bata as claras em neve e reserve. 2- Misture as gemas, a margarina e o açúcar até obter uma massa homogênea. 3- Acrescente o leite e a farinha de trigo aos poucos, sem parar de bater. 4- Por último, adicione as claras em neve e o fermento. 5- Despeje a massa em uma forma grande de furo central untada e enfarinhada. 6- Asse em forno médio 180 °C, preaquecido, por aproximadamente 40 minutos ou ao furar o bolo com um garfo, este saia limpo."
            return aceito
        }
        else if(digitada[index_i] === boloFuba[index_i]){
            aceito = "- Modo de Preparo: Pré-aqueça o forno a 180°C. No liquidificador bata os ovos, o leite, o óleo e o açúcar por 2 minutos. Em um refratário grande misture a farinha, o fubá e o fermento. Junte os líquidos aos secos e misture bem. Despeje em uma forma já untada e enfarinhada e leve ao forno por cerca de 40 minutos"
            return aceito
        }
        else if(digitada[index_i] === boloMilho[index_i]){
            aceito = "- Modo de Preparo: 1. Bata todos os ingredientes no liquidificador e despeje numa fôrma redonda de 25 cm de diâmetro, untada e polvilhada. 2. Leve ao forno pré-aquecido à 180ºC por cerca de 50 minutos ou até que enfiando uma faca, esta saia sem resíduos."
            return aceito
        }
        else if(digitada[index_i] === bananaBolo[index_i]){
            aceito = "1 colher de sopa de fermento em pó, CARAMELO, 1 xícara de açúcar, ½ de xícara de água, banana prata a gosto, canela em pó a gosto - Modo de Preparo: 1- Em uma panela derreta o açúcar da calda até caramelizar, 2- Depois disso coloque os demais ingredientes (menos as bananas) e deixe ferver até que fique uma calda, 3- Forre uma forma com as bananas, 4- Depois derrame a calda de caramelo por cima, 5- Já para o bolo coloque todos os ingredientes no liquidificador menos o trigo e bata em velocidade alta até que se forme uma mistura homogênea. 6- Coloque o trigo e bata para misturar. 7- Passado isso com uma colher misture o fermento em pó. 8- Coloque a massa na forma. 9- E leve a massa para assar em forno bem quente a 200 graus por 20 minutos, depois abaixe a 180 até dourar."
            return aceito
        }
        else{
            aceito = "vou ficar te devendo essa! Não achei nada no meu livrinho de receitas..."
            return aceito
        }
    }
}
 
module.exports = {
    receita,
    digitada,
    opPrato
}