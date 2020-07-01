const quotes = [
   {
      name: 'Perceval',
      quote: 'On en a gros sire'
   },
   {
      name: 'Kadok',
      quote: 'Elle est où la poulette'
   },
   {
      name: 'Père Blaise',
      quote: 'Non, je suis désolé, moi je peux pas faire une légende avec un fakir qui enroule sa bite autour d\'un bâton. En plus je sais même pas comment ça se dit en latin.'
   },
   {
      name: 'Bohort',
      quote: 'J\'irai me coucher quand vous m\'aurez juré qu\'il n\'y a pas dans cette forêt d\'animal plus dangereux que le lapin adulte !'
   },
   {
      name: 'Breccan',
      quote: 'Ça vous dérange si… si j’mets ma p’tite griffe là ? Si y a un chef de clan qui vient poser ses miches par là devant et il trouve ça cossu. Ben le jour où il voudra faire un buffet ou un plumard sur mesure... il saura où m’trouver, quoi.'
   },
   {
      name: 'Cryda de Tintagel',
      quote: 'Ahhh, oui c\'est vrai, le mariage ! Oh dis donc c\'est magique hein, le mariage ! En trente seconde on passe de fille de fermier a reine de Bretagne.'
   },
   {
      name: 'Elias de Kellewic\'h',
      quote: 'Si j’échoue, je garde la butte aux Cerfs et je fais tomber une pluie de calamités sur le royaume par vengeance ! C’est pas pour rien qu’on m’appelle « le Fourbe ». Si je réussis, je garde la butte aux Cerfs, plus… Le tertre des Âmes…'
   },
   {
      name: 'Léodagan',
      quote: 'Vous parlez comme les bouquins. Bon, moi, c\'est l\'idée que j\'m\'en fais, j\'peux pas blairer d\'lire.'
   },
   {
      name: 'Loth',
      quote: 'Ave Cesar, rosae rosam, et spiritus rex ! Ah non, parce que là, j’en ai marre !'
   }
   
   
];


const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
   let number = Math.floor(Math.random() * quotes.length);
   quoteAuthor.innerHTML = quotes[number].name;
   quote.innerHTML = quotes[number].quote;
}