const grid = document.querySelector('.grid'); //Daqui//

const pokemons = [
    '001' ,  
    '002' , 
    '003' , 
    '004' ,      
    '005' ,   
    '006' ,
    '007' ,
    '008' ,
    '009' ,
    '010' ,
];  


const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;


}

let firstCard='';
let secondCard='';


const checkCards = () =>  {
    const primeiroPokemon = firstCard.getAttribute('data-character');
    const segundoPokemon = secondCard.getAttribute('data-character');
  
    if (primeiroPokemon == segundoPokemon) {

    
    
    }else {

        setTimeout(() => {        
        
        firstCard.classList.remove('reveal-card');
        secondCard.classList.remove('reveal-card');
        treeCard.classList.remove('reveal-card');
        
        } ,500);        
    }
    

}
const revealCard = ({ target }) => { // + esse (A) gerão efeito de clicks nas cartas

    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }
    
    if (fristCard == '') {
        target.parentNode.classList.add('reveal-card');
        fristCard = target.parentNode;
    } else if (secondCard == '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;
    }else if (treeCard == '') {
        target.parentNode.classList.add('reveal-card');
        treeCard = target.parentNode;

        checkCards();
    }


    

}

const creatCard = (pokemon) =>  {
    const card = createElement('div' , 'card');
    const front = createElement('div' , 'face front');
    const back = createElement('div' , 'face back');

    front.style.backgroundImage = `url('../imagens/${pokemon}.png')`;

    card.appendChild(front);
    card.appendChild(back);
    card.addEventListener('click', revealCard); // esse (A)

    card.setAttribute('data-character', pokemon);

return card;

}

const loadGame = () => { // essa função carrega o jogo
    
    const shuffledArray = pokemons.sort(() => Math.random() - 0.15);
    
    pokemons.forEach((pokemon) => {
        const card = creatCard(pokemon);
        grid.appendChild(card);
    });

 } // ate aqui é basicamente pra criar e mecanizar um deck de cartas//

loadGame();