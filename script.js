document.querySelector('#generate').addEventListener('click', () => {
    generate();
});
// document.querySelectorAll('#back').addEventListener('click', () => {
//     generate();
// });

// document.getElementById('#next').addEventListener('click', () => {
//     next();
// })
;

generate = () => {
    let quotes = {
        "- walt Disney": '"ma name is john sina."',
        "- winston Churchill": '"i love you JS"',
        "- Will Rogers": '"JS strong"',
        "- Учиха Мадара": '"Пока Существует одно, всегда будет существовать и другое"',
        "- Учиха Мадара": '"В этом мире, везде где есть свет - всегда будет и тень"',
        "- Учиха Мадара": '"Пока в этом мире есть победители, будут и проигравшие"',
        "- Учиха Мадара": '"А эгоистичное желание мира всегда ведет к войне"',
        "- Учиха Мадара": '"Из желания защитить любимых людей рождается ненависть"',
        "- Учиха Мадара": '"Только люди способны проливать кровь, за мир во всем мире!"',
        "- Учиха Мадара": '"И одно без другого невозможно"',
        "- Учиха Мадара": '"Люди постоянно жертвуют чем либо, чтобы защитить что либо"',
        "- Учиха Мадара": '"Люди желают мира, и в то же время они постоянно в поисках конфликта. Таков человеческий разум"',
        "- Учиха Мадара": '"Очнись и взгляни на реальность, не всегда всё идёт по плану"',
        "- Учиха Мадара": '"чем дольше ты живешь, тем больше начинаешь понимать это"',
        "- С.А ": '"Хотите понять других, для начала пойми себя"',
    };
    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.length)];

    let quote = quotes[author];

    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;
};