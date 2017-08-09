const chains = {
  caption:
    'combines redux reducer and promise chains to manage aplication state',
  content: `### combines redux reducer and promise chains to manage aplication state
    
~~~js
    
export const resetWord = word => dispatch =>
  Promise.resolve(setWord(word))
    .then(dispatch)
    .then(() => 
    // get the definitions and the synonyms for the new word, 
    Promise.all([
    getDefinitions(word), getSynonyms(word), ].map(dispatch)
  ))
    .catch(console.error);
~~~
  `,
};

const async = {
  caption: 'provides synonyms and definitions for guessed words',
  content: `### provides synonyms and definitions for guessed words
  [rnd]: /images/apps/venery/rnd.jpg
  [definitions]: /images/apps/venery/definitions.png
  [related]: /images/apps/venery/related.png
  
  ![related and definitions][related]
  ![related and definitions][definitions]
  


  `,
};

const language = {
  caption:
    'employs Natural Lamguage Processing to avoid definitions with the answers',
  content: `### employs Natural Lamguage Processing to avoid definitions with the answers
    
~~~js
export const hasWord = word => def => nlp(def).normalize().match(forms(word)).found;
export const defLacksWord = word => ({ text, }) => !hasWord(word)(text);


export const requestDef = word =>
  axios.get(WORDNIK_BASE/word/definitions)
    .then(getData)
    .then(filtBy(defLacksWord(word)))
    .then(mapTo(defData));
    
    ~~~
  `,
};

export const slides = [ chains, async, language ];
