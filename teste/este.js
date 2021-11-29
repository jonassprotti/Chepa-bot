const env = require('../.env')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const telegraf = require('telegraf')
const { markup } = require('telegraf/extra')
const { reply } = require('telegraf')

const bot = new Telegraf(env.token)
let opcao = undefined
const TTT = require('./tratamento.js')
const Vocabulario = require('./frases.js')
let lista = []
let digitar

//-------------------------------------------------------------
const lista_onj = () =>Extra.markup(
    Markup.inlineKeyboard(
        lista.map(item => Markup.callbackButton(item, `delete ${item}`))
    ),{columns: 3}
)

const pesquisar_btn = Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Procurar receitas', 'pesquisar')
    ]),{columns: 1}
)
//---------------------------------------------------------------------------
bot.start(async ctx => {
    const nome = ctx.update.message.from.first_name
    await ctx.reply(`${Vocabulario.saucao()} ${nome}`)
    await ctx.reply('Oque vc quer cozinhar hj???', Markup.keyboard(['algo doce', 'Bolo', 'Bebidas']).resize().oneTime().extra())
})

bot.hears([/oi/i,/olá/i,/ola/i,/iae/i,/Ola tudo bem?/i,/Olá tudo bem?/i,/Bom dia/i,/Boa tarde/i,/Boa noite/i,/Oi tudo bem?/i], async ctx => {
    const nome = ctx.update.message.from.first_name
    await ctx.reply(`${Vocabulario.saucao()} ${nome}`)
    await ctx.reply('Oque vc quer cozinhar hj???', Markup.keyboard(['algo doce', 'Bolo', 'Bebidas']).resize().oneTime().extra())
})

bot.hears(['algo doce',/Prato Doce/i, /Doce/i, /Algo Doce/i, /eu quero doce/i, /alguma coisa doce/i, /queria doce/i, /gostaria de uma receita de  doce/i, /Alguma receita de doce?/i, /Prato Bolo/i, /bolo,Algo bolo/i, /eu quero bolo/i, /alguma coisa bolo/i, /queria bolo/i, /Preciso de uma receita de Bolo/i],async (ctx, next) =>{
    if(opcao === undefined){
    TTT.opPrato = 0
    await ctx.reply(`${Vocabulario.doce()}`)
    await ctx.reply('Agora me escreva quais igredientes vc tem em casa')
    next()
    }
    else{
        next()
    }
})

bot.hears(['Bolo',/gostaria de uma receita de Salgado/i, /Prato Salgado/i, /Salgado/i, /Algo Salgado/i, /eu quero Salgado/i,/alguma coisa Salgado/i, /queria Salgado/i, /Alguma receita de Salgado?/i, /Preciso de uma receita de salgados/i], async (ctx, next) =>{
    if(opcao === undefined){
        TTT.opPrato = 1
        await ctx.reply(`${Vocabulario.bolo()}`)
        await ctx.reply('Agora me escreva quais igredientes vc tem em casa')
        next()
    }else{
        next()
    }
})

bot.hears(['Bebidas', /Prato Drinks/i, /Drinks/i, /Algo Drinks/i, /eu quero Drinks/i, /alguma coisa Drinks/i, /queria Drinks/i, /Alguma receita de  Drinks?/i,/gostaria de uma receita de Drinks/i, /Preciso de uma receita de Drinks/i], async (ctx, next) =>{
    if(opcao === undefined){
        TTT.opPrato =3
        await ctx.reply(`${Vocabulario.bebidas()}`)
        await ctx.reply('Agora me escreva quais igredientes vc tem em casa')
        next()
    }else{
        next()
    }
})

bot.on('text', async (ctx, next) => {
    await lista.push(ctx.update.message.text)
    await ctx.reply(`${ctx.update.message.text} ${Vocabulario.pedirMais()}`, lista_onj())
    await ctx.reply(`Procurar`, pesquisar_btn)
})

bot.action(/delete (.+)/, async ctx =>{
    lista = lista.filter(item => item !== ctx.match[1])
    await ctx.reply(`Entendi, ${ctx.match[1]} não tem`, lista_onj())
})

bot.action(/pesquisar/, async ctx =>{
    if(lista != undefined){
        for (let index = 0; index < lista.length; index++) {
            TTT.digitada[index] = lista[index]
        }
        await ctx.reply(`Com esses igredientes eu achei essa receita:`)
        await ctx.reply(TTT.receita())

    }else{
        await ctx.reply('Opa, você não digitou nada, escreva quais igredientes você tem em casa')
    }


})

bot.startPolling()