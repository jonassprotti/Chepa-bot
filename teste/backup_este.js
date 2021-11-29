const env = require('../.env')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const telegraf = require('telegraf')
const { markup } = require('telegraf/extra')
const { reply } = require('telegraf')

const bot = new Telegraf(env.token)
let opcao = undefined
const D = require('./tratamento.js')
let lista = []
let digitar

//-------------------------------------------------------------
const lista_onj = () =>Extra.markup(
    Markup.inlineKeyboard(
        lista.map(item => Markup.callbackButton(item, `delete ${item}`))
       // Markup.callbackButton('Apenas isso', `pesquisar`)
    ),{columns: 3}
)

const pesquisar_btn = Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Procurar receitas', 'pesquisar')
    ]),{columns: 1}
)

let saucao = function getRandom(){
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
        return 'opah, oi';
    }
}
//---------------------------------------------------------------------------
bot.start(async ctx => {
    const nome = ctx.update.message.from.first_name
    await ctx.reply(`${saucao()} ${nome}`)
    await ctx.reply('Oque vc quer cozinhar hj???', Markup.keyboard(['algo doce', 'algo salgado']).resize().oneTime().extra())
})

bot.hears([/oi/i,/olá/i,/ola/i,/iae/i,/Ola tudo bem?/i,/Olá tudo bem?/i,/Bom dia/i,/Boa tarde/i,/Boa noite/i,/Oi tudo bem?/i], async ctx => {
    const nome = ctx.update.message.from.first_name
    await ctx.reply(`${saucao()} ${nome}`)
    await ctx.reply('Oque vc quer cozinhar hj???', Markup.keyboard(['algo doce', 'algo salgado', 'pratos rápidos', 'Saladas']).resize().oneTime().extra())
})

bot.hears(['algo doce',/Prato Doce/i, /Doce/i, /Algo Doce/i, /eu quero doce/i, /alguma coisa doce/i, /queria doce/i, /gostaria de uma receita de  doce/i, /Alguma receita de doce?/i, /Prato Bolo/i, /bolo,Algo bolo/i, /eu quero bolo/i, /alguma coisa bolo/i, /queria bolo/i, /Preciso de uma receita de Bolo/i],async (ctx, next) =>{
    if(opcao === undefined){
    opcao = 0
    await ctx.reply(`Doce, ok!`)
    await ctx.reply('Agora me escreva quais igredientes vc tem em casa')
    next()
    }
    else{
        next()
    }
})

bot.hears(['algo salgado',/gostaria de uma receita de Salgado/i, /Prato Salgado/i, /Salgado/i, /Algo Salgado/i, /eu quero Salgado/i,/alguma coisa Salgado/i, /queria Salgado/i, /Alguma receita de Salgado?/i, /Preciso de uma receita de salgados/i], async (ctx, next) =>{
    if(opcao === undefined){
    opcao = 1
    await ctx.reply(`Salgado, ok!}`)
    await ctx.reply('Agora me escreva quais igredientes vc tem em casa')
    next()
    }else{
        next()
    }
})

bot.hears(['pratos rápidos', /Prato Rápido/i, /Rápido/i, /Algo Rápido/i, /eu quero Rápido/i, /alguma coisa Rápido/i, /queria Rápido/i, /Prato Aperitivos/i, /Aperitivos/i, /Algo Aperitivos/i, /eu quero Aperitivos/i, /alguma coisa Aperitivos/i, /queria Aperitivos/i, /Alguma Receita rapida?/i, /gostaria de uma Receita rapida/i, /gostaria de uma receita de Aperitivos/i,], async (ctx, next) =>{
    if(opcao === undefined){
    opcao = 2
    D.op2 = opcao
    await ctx.reply(`Pratos rápidos, ok! ${D.op2}`)
    await ctx.reply('Agora me escreva quais igredientes vc tem em casa')
    next()
    }else{
        next()
    }
})

bot.hears(['Saladas', /Prato Salada/i,/Salada/i,/Algo Salada/i,/eu quero Salada/i,/alguma coisa Salada/i, /queria Salada/i, /tipo de salada/i, /gostaria de uma receita de Saladas/i, /Alguma receita de  Saladas?/i, /Preciso de uma receita de Saladas/i], async (ctx, next) =>{
    if(opcao === undefined){
    opcao = 3
    D.op2 = opcao
    await ctx.reply(`Saladas, ok! ${D.op2}`)
    await ctx.reply('Agora me escreva quais igredientes vc tem em casa')
    next()
    }else{
        next()
    }
})

bot.hears(['Bebidas', /Prato Drinks/i, /Drinks/i, /Algo Drinks/i, /eu quero Drinks/i, /alguma coisa Drinks/i, /queria Drinks/i, /Alguma receita de  Drinks?/i,/gostaria de uma receita de Drinks/i, /Preciso de uma receita de Drinks/i], async (ctx, next) =>{
    if(opcao === undefined){
    opcao = 4
    D.op2 = opcao
    await ctx.reply(`Saladas, ok! ${D.op2}`)
    await ctx.reply('Agora me escreva quais igredientes vc tem em casa')
    next()
    }else{
        next()
    }
})

bot.on('text', async (ctx, next) => {
    await lista.push(ctx.update.message.text)
    await ctx.reply(`${ctx.update.message.text} certo, e oque mais?`, lista_onj())
    await ctx.reply(`Procurar`, pesquisar_btn)
    console.log(lista)
})

bot.action(/delete (.+)/, async ctx =>{
    lista = lista.filter(item => item !== ctx.match[1])
    await ctx.reply(`Entendi, ${ctx.match[1]} não tem`, lista_onj())
})

bot.action(/pesquisar/, async ctx =>{
    if(lista != undefined){
    lista.sort()
    for (let i = 0; i < lista.length; i++) {
        lista[i] = lista[i].toLowerCase();
        console.log(lista)
        }

    for (let index = 0; index < lista.length; index++) {
        D.digitada[index] = lista[index]
        }

    await ctx.reply(D.receita())
        }else{
        await ctx.reply('Opa, você não digitou nada, escreva quais igredientes você tem em casa')
    }
})

bot.startPolling()