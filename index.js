const telegramApi = require('node-telegram-bot-api')
const token = '5223300284:AAGr1kPhF848KMmzjoAfgtLnDFSeG1yNlPA'
const bot = new telegramApi(token, { polling: true })
var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
server.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});
// база данных
let bd = {
  kyiv: {
    farmacy: [],
    food: [],
    clothe: [],
    transport: [],
    military: [],
  },
  poltava: {
    farmacy: [],
    food: [],
    clothe: [],
    transport: [],
    military: [],
  },
  lviv: {
    farmacy: [],
    food: [],
    clothe: [],
    transport: [],
    military: [],
  },
  ivanfran: {
    farmacy: [],
    food: [],
    clothe: [],
    transport: [],
    military: [],
  },
  ternopil: {
    farmacy: [],
    food: [],
    clothe: [],
    transport: [],
    military: [],
  },
  vynycya: {
    farmacy: [],
    food: [],
    clothe: [],
    transport: [],
    military: [],
  },
  harkiv: {
    farmacy: [],
    food: [],
    clothe: [],
    transport: [],
    military: [],
  },
  rivne: {
    farmacy: [],
    food: [],
    clothe: [],
    transport: [],
    military: [],
  },
  luck: {
    farmacy: [],
    food: [],
    clothe: [],
    transport: [],
    military: [],
  },
  hmelnycky: {
    farmacy: [],
    food: [],
    clothe: [],
    transport: [],
    military: [],
  },
  dnipro: {
    farmacy: [],
    food: [],
    clothe: [],
    transport: [],
    military: [],
  },
  chernovcy: {
    farmacy: [],
    food: [],
    clothe: [],
    transport: [],
    military: [],
  },
  zaporizya: {
    farmacy: [],
    food: [],
    clothe: [],
    transport: [],
    military: [],
  },
  zytomyr: {
    farmacy: [],
    food: [],
    clothe: [],
    transport: [],
    military: [],
  },
  odesa: {
    farmacy: [],
    food: [],
    clothe: [],
    transport: [],
    military: [],
  },
  cherkasy: {
    farmacy: [],
    food: [],
    clothe: [],
    transport: [],
    military: [],
  },
  uzhorod: {
    farmacy: [],
    food: [],
    clothe: [],
    transport: [],
    military: [],
  },
  mykolayv: {
    farmacy: [],
    food: [],
    clothe: [],
    transport: [],
    military: [],
  },
  sumy: {
    farmacy: [],
    food: [],
    clothe: [],
    transport: [],
    military: [],
  },
  chernigiv: {
    farmacy: [],
    food: [],
    clothe: [],
    transport: [],
    military: [],
  },
  doneck: {
    farmacy: [],
    food: [],
    clothe: [],
    transport: [],
    military: [],
  },
  lugansk: {
    farmacy: [],
    food: [],
    clothe: [],
    transport: [],
    military: [],
  },
  symferopol: {
    farmacy: [],
    food: [],
    clothe: [],
    transport: [],
    military: [],
  },
}

// области
const areaBtn = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: 'Київ', callback_data: 'kyiv' },
        { text: 'Полтава', callback_data: 'poltava' },
        { text: 'Львів', callback_data: 'lviv' },
        { text: 'Івано-Франківськ', callback_data: 'ivanfran' },
      ],
      [
        { text: 'Тернопіль', callback_data: 'ternopil' },
        { text: 'Вінниця', callback_data: 'vynycya' },
        { text: 'Харків', callback_data: 'harkiv' },
        { text: 'Рівне', callback_data: 'rivne' },
      ],
      [
        { text: 'Луцьк', callback_data: 'luck' },
        { text: 'Хмельницький', callback_data: 'hmelnycky' },
        { text: 'Дніпро', callback_data: 'dnipro' },
        { text: 'Чернівці', callback_data: 'chernyvcy' },
      ],
      [
        { text: 'Запоріжжя', callback_data: 'zaporizya' },
        { text: 'Житомир', callback_data: 'zytomyr' },
        { text: 'Одеса', callback_data: 'odesa' },
        { text: 'Черкаси', callback_data: 'cherkasy' },
      ],
      [
        { text: 'Ужгород', callback_data: 'uzhorod' },
        { text: 'Кропивницький', callback_data: 'kropyvnycky' },
        { text: 'Миколаїв', callback_data: 'mykolayv' },
        { text: 'Суми', callback_data: 'sumy' },
      ],
      [
        { text: 'Чернігів', callback_data: 'chernigiv' },
        { text: 'Донецьк', callback_data: 'doneck' },
        { text: 'Луганськ', callback_data: 'lugansk' },
        { text: 'Сімферополь', callback_data: 'symferopol' },
      ],
    ],
  }),
}

// тип вещей
const stafBtn = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Ліки', callback_data: 'farmacy' }],
      [{ text: 'Харчі', callback_data: 'food' }],
      [{ text: 'Одяг', callback_data: 'clothe' }],
      [{ text: 'Транспорт', callback_data: 'transport' }],
      [{ text: 'Для ЗСУ', callback_data: 'military' }],
    ],
  }),
}

const stafNeedBtn = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Ліки', callback_data: 'nfarmacy' }],
      [{ text: 'Харчі', callback_data: 'nfood' }],
      [{ text: 'Одяг', callback_data: 'nclothe' }],
      [{ text: 'Транспорт', callback_data: 'ntransport' }],
      [{ text: 'Для ЗСУ', callback_data: 'nmilitary' }],
    ],
  }),
}

// тип помощи
const typeOfHelpBtn = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Мені необхідна допомога', callback_data: 'need' }],
      [{ text: 'Я хочу допмогти', callback_data: 'have' }],
    ],
  }),
}
// кнопки сохранить удалить
const confirmBtn = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Додати до бази', callback_data: 'save' }],
      [{ text: 'Я передумав', callback_data: 'unsave' }],
    ],
  }),
}

let area = ''
let typeOfStaf = ''
let tempMessage = ''
// обработка сообщений
bot.on('message', async (msg) => {
  const text = msg.text
  const chatId = msg.chat.id
  if (text === '/start') {
    await bot.sendMessage(chatId, 'Ласкаво просимо в нашу сім`ю!')
    await bot.sendMessage(
      chatId,
      'Цей бот створений для взаємної допомоги та пошуку необхідних речей. ',
    )
    await bot.sendMessage(
      chatId,
      'Що можливо? 1. Знайти необхідні речі, які доступні в даний момент(ліки,одяг,транспортну допомогу та інше). 2. Розповісти землякам якими речами можеш допомогти для подальшого пошуку в базі чат-боту.',
    )
    await bot.sendMessage(
      chatId,
      'Давай спробуємо! Обери необхідну область, в якій потрібно знайти чи додати повідомлення.',
      areaBtn,
    )
  }

  if (text.includes('Маю')) {
    tempMessage = text
    console.log(tempMessage)
    return bot.sendMessage(
      chatId,
      `Ми успішно підготували твоє повідомлення {${text}}.`,
      confirmBtn,
    )
  }
})
// обработка кнопок предоставить помощь
bot.on('callback_query', async (msg) => {
  const btnData = msg.data
  const chatId = msg.message.chat.id

  if (
    btnData === 'kyiv' ||
    btnData === 'poltava' ||
    btnData === 'lviv' ||
    btnData === 'ivanfran' ||
    btnData === 'ternopil' ||
    btnData === 'vynycya' ||
    btnData === 'harkiv' ||
    btnData === 'rivne' ||
    btnData === 'luck' ||
    btnData === 'hmelnycky' ||
    btnData === 'dnipro' ||
    btnData === 'chernovcy' ||
    btnData === 'zaporizya' ||
    btnData === 'zytomyr' ||
    btnData === 'odesa' ||
    btnData === 'cherkasy' ||
    btnData === 'uzhorod' ||
    btnData === 'mykolayv' ||
    btnData === 'sumy' ||
    btnData === 'chernigiv' ||
    btnData === 'doneck' ||
    btnData === 'lugansk' ||
    btnData === 'symferopol'
  ) {
    area = btnData
    await bot.sendMessage(chatId, `Вибір прийнято - (${btnData}).`)
    await bot.sendMessage(chatId, 'Що зараз тобі потрібно?', typeOfHelpBtn)
  }
  if (btnData === 'have') {
    await bot.sendMessage(chatId, 'Чим саме ти можеш допомогти?', stafBtn)
  }

  if (
    btnData === 'farmacy' ||
    btnData === 'food' ||
    btnData === 'clothe' ||
    btnData === 'transport' ||
    btnData === 'military'
  ) {
    typeOfStaf = btnData
    await bot.sendMessage(
      chatId,
      'Зараз потрібно залишити повідомлення для тих хто в пошуках. Старайся чітко та стисло описати подробиці.',
    )
    await bot.sendMessage(
      chatId,
      'Наприклад: Маю вуличні ліхатрі 20шт забрати на лівому березі Іван 0980980908',
    )
    await bot.sendMessage(
      chatId,
      'ОБОВ`ЯЗКОВО!!! Починай писати повідомлення словом Маю.',
    )
  }
  if (btnData === 'save') {
    await bd[area][typeOfStaf].push(tempMessage)
    console.log(bd)
    await bot.sendMessage(chatId, 'Готово!')
  }
  if (btnData === 'unsave') {
    await bot.sendMessage(chatId, 'Добре, наступного разу.')
  }
  //   блок поиска
  if (btnData === 'need') {
    await bot.sendMessage(chatId, 'Що саме тобі потрібно?', stafNeedBtn)
  }

  if (
    btnData === 'nfarmacy' ||
    btnData === 'nfood' ||
    btnData === 'nclothe' ||
    btnData === 'ntransport' ||
    btnData === 'nmilitary'
  ) {
    typeOfStaf = btnData.slice(1)
    await bot.sendMessage(
      chatId,
      '*зверни увагу, якщо список пустий, то нажаль нічого немає',
    )
    await bot.sendMessage(chatId, `Можливі варианти:${bd[area][typeOfStaf]}`)
  }
})
console.log(bd)
