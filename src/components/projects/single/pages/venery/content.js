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
  
  ![related and definitions][rnd]
  `,
};

const language = {
  caption:
    'employs Natural Lamguage Processing to avoid definitions with the answers',
  content: `### employs Natural Lamguage Processing to avoid definitions with the answers
~~~js
const hasWord = word => def => 
  nlp(def).normalize().match(forms(word)).found;

const colony = 'colony';
const sing = 'there was a colony of ant';
const plur = 'there were many colonies on other continents';

hasWord(colony)(sing) .... true
hasWord(colony)(plur) .... true

export const requestDef = word =>
  axios.get(WORDNIK_BASE/word/definitions)
  // retrieve the definitions
    ....
  // exclude those definitions which include
  // either the singular or plural versions of the word
    .then(filtBy(defLacksWord(word)))
    ...
~~~
  `,
};

export const slides = [ chains, async, language ];
