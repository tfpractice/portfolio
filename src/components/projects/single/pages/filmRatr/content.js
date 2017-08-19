const sync = {
  caption: 'synchronizes remote and local databases',
  content: `### synchronizes remote and local databases
  [review]: /images/apps/filmratr/review.png
  <div class='images'>
    ![review][review]
  </div>`,
};

const routes = {
  caption: 'performs route based database aggregations',
  content: `### performs route based database aggregations
  [freq]: /images/apps/filmratr/freq.png
  <div class='images'>
    ![freq][freq]
  </div>`,
};

const serve = {
  caption: 'renders entirely from the server upon initial load',
  content: `### renders entirely from the server upon initial load
  [search]: /images/apps/filmratr/search.png
  <div class='images'>
    ![search][search]
  </div>
`,
};

export const slides = [ sync, routes, serve ];
export const content = `## Normalizing NoSQL
 Most likely a result of my obsession with graph theory, relational logic makes me very excited.  Through my adventures in programming, I learned more and more about database Normalization. It comes in various degrees ( or 'normal forms'), and is generally a good protocol for managing various types of data in a database Pets-to-owners, blogs-to-comments, CEOs-to-companies. I was interested in taking it as far as possible. And without a specific data set in mind, I decided to use someone else's data. 
 
 FilmRatr allows users to rate and write reviews for their favorite movies. The relevant part is that there is no 'Movies' table. All of the movies come from theMovieDB API, and the only local 'tables' are Users and Reviews. In terms of normalization, the entire application can be imagined as one big join table between my local data and that of theMovieDB. 
 
 This is where the metaphor somewhat disintegrates, because I decided to work with a mongoDB, which is NoSQL and therefore lacks tables of any sort. But conceptually it hits the exact mark I was going for.  Using axios and redux, a user can search movie titles and retrieve a list of movie results. Once they find their choice, they fill out a review form that stores the rating and content in a Reviews collection, along with the movie_id.
 
 This project employed express, react-router, and axios to successfully pull -off the difficult task of server rendering. It's an exceptionally complicated process, which gave me a lot of experience, and a deeper understanding of the node-ecosystem.
`;

const normal = {
  caption: `## Normalizing NoSQL`,
  content: `
   Most likely a result of my obsession with graph theory, relational logic makes me very excited.  Through my adventures in programming, I learned more and more about database Normalization. It comes in various degrees ( or 'normal forms'), and is generally a good protocol for managing various types of data in a database Pets-to-owners, blogs-to-comments, CEOs-to-companies. I was interested in taking it as far as possible. And without a specific data set in mind, I decided to use someone else's data. 
   
   FilmRatr allows users to rate and write reviews for their favorite movies. The relevant part is that there is no 'Movies' table. All of the movies come from theMovieDB API, and the only local 'tables' are Users and Reviews. In terms of normalization, the entire application can be imagined as one big join table between my local data and that of theMovieDB. 
   
   This is where the metaphor somewhat disintegrates, because I decided to work with a mongoDB, which is NoSQL and therefore lacks tables of any sort. But conceptually it hits the exact mark I was going for.  Using axios and redux, a user can search movie titles and retrieve a list of movie results. Once they find their choice, they fill out a review form that stores the rating and content in a Reviews collection, along with the movie_id.
   
   This project employed express, react-router, and axios to successfully pull -off the difficult task of server rendering. It's an exceptionally complicated process, which gave me a lot of experience, and a deeper understanding of the node-ecosystem.
  `,
};

export const sections = [ normal ];
