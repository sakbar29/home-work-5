
const next = document.querySelector("#next");
const back = document.querySelector("#back");


let current = 0;

let quotes = {
    "- walt Disney": '"ma name is john sina."',
    "- winston Churchill": '"i love you JS"',
    "- Will Rogers": '"JS strong"',
    "- Учиха Мадара 1": '"Пока Существует одно, всегда будет существовать и другое"',
    "- Учиха Мадара 2": '"В этом мире, везде где есть свет - всегда будет и тень"',
    "- Учиха Мадара 3": '"Пока в этом мире есть победители, будут и проигравшие"',
    "- Учиха Мадара 4": '"А эгоистичное желание мира, всегда ведет к войне"',
    "- Учиха Мадара 5": '"Из желания защитить любимых людей рождается ненависть"',
    "- Учиха Мадара 6": '"Только люди способны проливать кровь, за мир во всем мире!"',
    "- Учиха Мадара 7": '"И одно без другого невозможно"',
    "- Учиха Мадара 8": '"Люди постоянно жертвуют чем либо, чтобы защитить что либо"',
    "- Учиха Мадара 9": '"Люди желают мира, и в то же время они постоянно в поисках конфликта. Таков человеческий разум"',
    "- Учиха Мадара 10": '"Очнись и взгляни на реальность, не всегда всё идёт по плану"',
    "- Учиха Мадара 11": '"чем дольше ты живешь, тем больше начинаешь понимать это"',
    "- С.А ": '"Хотите понять других, для начала пойми себя"',
};


const generate = () => {
    let authors = Object.keys(quotes);
    authors = authors[current];
    // console.log(authors)
    let quote = quotes[authors];

    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = authors;

}
const generateRandom=()=>{
    current = Math.floor(Math.random()*14)
   
    let authors = Object.keys(quotes);
    authors = authors[current];
    // console.log(authors)
    console.log(authors)
    let quote = quotes[authors];

    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = authors;
}

document.querySelector('#generate').addEventListener('click',generateRandom)


next.addEventListener("click", ()=> {
    current++; 
    if (current <= 14){
        generate();
    }else{
        current=0
        generate()
    }
});
back.addEventListener("click", () => {
    current--;
    if (current > 0){
        generate();
    }else{
        current=14
        generate()
    }
    
})

