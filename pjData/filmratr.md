## Normalizing NoSQL
 Most likely a result of my obsession with graph theory, relational logic makes me very excited.  Through my adventures in programming, I learned more and more about database Normalization. It comes in various degrees ( or 'normal forms'), and is generally a good protocol for managing various types of data in a database Pets-to-owners, blogs-to-comments, CEOs-to-companies. I was interested in taking it as far as possible. And without a specific data set in mind, I decided to use someone else's data. 
 
 FilmRatr allows users to rate and write reviews for their favorite movies. The relevant part is that there is no 'Movies' table. All of the movies come from theMovieDB API, and the only local 'tables' are Users and Reviews. In terms of normalization, the entire application can be imagined as one big join table between my local data and that of theMovieDB. 
 
 This is where the metaphor somewhat disintegrates, because I decided to work with a mongoDB, which is NoSQL and therefore lacks tables of any sort. But conceptually it hits the exact mark I was going for. 

## server rendering
When I first discovered react, I was very excited by the notion of server rendering. Rendering the entire app on on page load seemed both difficult and impressive, and the word 'isomorphic' kept being thrown around in the literatute. I didnt have any deep technical for my excitement, but I was determined to pull it off. I did, but I wouldn't do it again.

## the Datase 
