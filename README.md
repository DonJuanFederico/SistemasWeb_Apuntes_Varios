









me hace falta con lo ultimo que te he papasado, qque te lo voy a volver a pasar aqui, las consultas.
apartado 1: indicar el titulo y el numero de premios de la pelicula con mas premios (wins dentro de awaRard

db.movies.find(
  { "awards.wins": { $exists: true } },
  { title: 1, "awards.wins": 1 }
).sort({ "awards.wins": -1 }).limit(1);



papartado 2.  en la coleccion movies. mostrar un listado con las diferrentes clasificaciones de edad que existen (rated). para cada una de ellos muestre el numero de documentos que tienen esa clasificacion y ordenelos de mas documetnos a menos.


db.movies.aggregate([
  { $group: { _id: "$rated", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
]);


apartado 3: en la coleccion movies, muestre el num umuestre un listado con los diferentes generos de peliculas que existen (genres.
ap 4: en la coleccion movies indicar el numero de peliculas que hay entre los años 1970 y 1985 (incluidos) amobs extremos.


db.movies.aggregate([
  { $unwind: "$genres" },
  { $group: { _id: "$genres", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
]);

Si solo quieres los nombres de géneros sin contar, reemplaza el group por:

{ $group: { _id: "$genres" } }


Número de películas entre los años 1970 y 1985 (incluidos):
db.movies.countDocuments({
  year: { $gte: 1970, $lte: 1985 }
});




))





sw2> db.movies.find();
[
  {
    _id: ObjectId('573a1390f29313caabcd4323'),
    plot: 'A young boy, opressed by his mother, goes on an outing in the country with a social welfare group where he dares to dream of a land where the cares of his ordinary life fade.',
    genres: [ 'Short', 'Drama', 'Fantasy' ],
    runtime: 14,
    rated: 'UNRATED',
    cast: [
      'Martin Fuller',
      'Mrs. William Bechtel',
      'Walter Edwin',
      'Ethel Jewett'
    ],
    num_mflix_comments: 1,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTMzMDcxMjgyNl5BMl5BanBnXkFtZTcwOTgxNjg4Mg@@._V1_SY1000_SX677_AL_.jpg',
    title: 'The Land Beyond the Sunset',
    fullplot: "Thanks to the Fresh Air Fund, a slum child escapes his drunken mother for a day's outing in the country. Upon arriving, he and the other children are told a story about a mythical land of no pain. Rather then return to the slum at day's end, the lad seeks to journey to that beautiful land beyond the sunset.",
    languages: [ 'English' ],
    released: ISODate('1912-10-28T00:00:00.000Z'),
    directors: [ 'Harold M. Shaw' ],
    writers: [ 'Dorothy G. Shore' ],
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-08-29 00:27:45.437000000',
    year: 1912,
    imdb: { rating: 7.1, votes: 448, id: 488 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.7, numReviews: 53, meter: 67 },
      lastUpdated: ISODate('2015-04-27T19:06:35.000Z')
    }
  },
  {
    _id: ObjectId('573a1390f29313caabcd4135'),
    plot: 'Three men hammer on an anvil and pass a bottle of beer around.',
    genres: [ 'Short' ],
    runtime: 1,
    cast: [ 'Charles Kayser', 'John Ott' ],
    num_mflix_comments: 0,
    title: 'Blacksmith Scene',
    fullplot: 'A stationary camera looks at a large anvil with a blacksmith behind it and one on either side. The smith in the middle draws a heated metal rod from the fire, places it on the anvil, and all three begin a rhythmic hammering. After several blows, the metal goes back in the fire. One smith pulls out a bottle of beer, and they each take a swig. Then, out comes the glowing metal and the hammering resumes.',
    countries: [ 'USA' ],
    released: ISODate('1893-05-09T00:00:00.000Z'),
    directors: [ 'William K.L. Dickson' ],
    rated: 'UNRATED',
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-08-26 00:03:50.133000000',
    year: 1893,
    imdb: { rating: 6.2, votes: 1189, id: 5 },
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3, numReviews: 184, meter: 32 },
      lastUpdated: ISODate('2015-06-28T18:34:09.000Z')
    }
  },
  {
    _id: ObjectId('573a1390f29313caabcd50e5'),
    plot: 'The cartoonist, Winsor McCay, brings the Dinosaurus back to life in the figure of his latest creation, Gertie the Dinosaur.',
    genres: [ 'Animation', 'Short', 'Comedy' ],
    runtime: 12,
    cast: [ 'Winsor McCay', 'George McManus', 'Roy L. McCardell' ],
    num_mflix_comments: 0,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTQxNzI4ODQ3NF5BMl5BanBnXkFtZTgwNzY5NzMwMjE@._V1_SY1000_SX677_AL_.jpg',
    title: 'Gertie the Dinosaur',
    fullplot: 'Winsor Z. McCay bets another cartoonist that he can animate a dinosaur. So he draws a big friendly herbivore called Gertie. Then he get into his own picture. Gertie walks through the picture, eats a tree, meets her creator, and takes him carefully on her back for a ride.',
    languages: [ 'English' ],
    released: ISODate('1914-09-15T00:00:00.000Z'),
    directors: [ 'Winsor McCay' ],
    writers: [ 'Winsor McCay' ],
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-08-18 01:03:15.313000000',
    year: 1914,
    imdb: { rating: 7.3, votes: 1837, id: 4008 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.7, numReviews: 29 },
      lastUpdated: ISODate('2015-08-10T19:20:03.000Z')
    }
  },
  {
    _id: ObjectId('573a1390f29313caabcd5293'),
    plot: "Young Pauline is left a lot of money when her wealthy uncle dies. However, her uncle's secretary has been named as her guardian until she marries, at which time she will officially take ...",
    genres: [ 'Action' ],
    runtime: 199,
    cast: [ 'Pearl White', 'Crane Wilbur', 'Paul Panzer', 'Edward Josè' ],
    num_mflix_comments: 0,
    poster: 'https://m.media-amazon.com/images/M/MV5BMzgxODk1Mzk2Ml5BMl5BanBnXkFtZTgwMDg0NzkwMjE@._V1_SY1000_SX677_AL_.jpg',
    title: 'The Perils of Pauline',
    fullplot: `Young Pauline is left a lot of money when her wealthy uncle dies. However, her uncle's secretary has been named as her guardian until she marries, at which time she will officially take possession of her inheritance. Meanwhile, her "guardian" and his confederates constantly come up with schemes to get rid of Pauline so that he can get his hands on the money himself.`,
    languages: [ 'English' ],
    released: ISODate('1914-03-23T00:00:00.000Z'),
    directors: [ 'Louis J. Gasnier', 'Donald MacKenzie' ],
    writers: [
      'Charles W. Goddard (screenplay)',
      'Basil Dickey (screenplay)',
      'Charles W. Goddard (novel)',
      'George B. Seitz',
      'Bertram Millhauser'
    ],
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-09-12 00:01:18.647000000',
    year: 1914,
    imdb: { rating: 7.6, votes: 744, id: 4465 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 2.8, numReviews: 9 },
      production: 'Pathè Frères',
      lastUpdated: ISODate('2015-09-11T17:46:19.000Z')
    }
  },
  {
    _id: ObjectId('573a1390f29313caabcd4803'),
    plot: 'Cartoon figures announce, via comic strip balloons, that they will move - and move they do, in a wildly exaggerated style.',
    genres: [ 'Animation', 'Short', 'Comedy' ],
    runtime: 7,
    cast: [ 'Winsor McCay' ],
    num_mflix_comments: 0,
    poster: 'https://m.media-amazon.com/images/M/MV5BYzg2NjNhNTctMjUxMi00ZWU4LWI3ZjYtNTI0NTQxNThjZTk2XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SY1000_SX677_AL_.jpg',
    title: 'Winsor McCay, the Famous Cartoonist of the N.Y. Herald and His Moving Comics',
    fullplot: 'Cartoonist Winsor McCay agrees to create a large set of drawings that will be photographed and made into a motion picture. The job requires plenty of drawing supplies, and the cartoonist must also overcome some mishaps caused by an assistant. Finally, the work is done, and everyone can see the resulting animated picture.',
    languages: [ 'English' ],
    released: ISODate('1911-04-08T00:00:00.000Z'),
    directors: [ 'Winsor McCay', 'J. Stuart Blackton' ],
    writers: [
      'Winsor McCay (comic strip "Little Nemo in Slumberland")',
      'Winsor McCay (screenplay)'
    ],
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-08-29 01:09:03.030000000',
    year: 1911,
    imdb: { rating: 7.3, votes: 1034, id: 1737 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.4, numReviews: 89, meter: 47 },
      lastUpdated: ISODate('2015-08-20T18:51:24.000Z')
    }
  },
  {
    _id: ObjectId('573a1390f29313caabcd5c0f'),
    plot: 'The story of a poor young woman, separated by prejudice from her husband and baby, is interwoven with tales of intolerance from throughout history.',
    genres: [ 'Drama', 'History' ],
    runtime: 197,
    rated: 'NOT RATED',
    cast: [
      'Lillian Gish',
      'Spottiswoode Aitken',
      'Mary Alden',
      'Frank Bennett'
    ],
    num_mflix_comments: 0,
    poster: 'https://m.media-amazon.com/images/M/MV5BZTc0YjA1ZjctOTFlZi00NWRiLWE2MTAtZDE1MWY1YTgzOTJjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_SX677_AL_.jpg',
    title: "Intolerance: Love's Struggle Throughout the Ages",
    fullplot: "Intolerance and its terrible effects are examined in four historical eras. In ancient Babylon, a mountain girl is caught up in the religious rivalry that leads to the city's downfall. In Judea, the hypocritical Pharisees condemn Jesus Christ. In 1572 Paris, unaware of the impending St. Bartholomew's Day Massacre, two young Huguenots prepare for marriage. Finally, in modern America, social reformers destroy the lives of a young woman and her beloved.",
    countries: [ 'USA' ],
    released: ISODate('1916-09-05T00:00:00.000Z'),
    directors: [ 'D.W. Griffith' ],
    writers: [ 'D.W. Griffith (scenario)', 'Anita Loos (titles)' ],
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-09-05 00:01:19.580000000',
    year: 1916,
    imdb: { rating: 8, votes: 9880, id: 6864 },
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.8, numReviews: 4718, meter: 78 },
      dvd: ISODate('2002-12-10T00:00:00.000Z'),
      critic: { rating: 8.1, numReviews: 32, meter: 97 },
      lastUpdated: ISODate('2015-09-15T17:02:34.000Z'),
      consensus: "A pioneering classic and one of the most influential films ever made, D.W. Griffith's Intolerance stands as the crowning jewel in an incredible filmography.",
      rotten: 1,
      production: 'Cohen Media Group',
      fresh: 31
    }
  },
  {
    _id: ObjectId('573a1390f29313caabcd5ea4'),
    plot: "A District Attorney's outspoken stand on abortion gets him in trouble with the local community.",
    genres: [ 'Drama' ],
    runtime: 62,
    rated: 'APPROVED',
    cast: [
      'Tyrone Power Sr.',
      'Helen Riaume',
      'Marie Walcamp',
      'Cora Drew'
    ],
    title: 'Where Are My Children?',
    fullplot: 'While prosecuting a physician for the death of a client after an abortion, the district attorney discovers that his wife helped her society friends and the daughter of her maid obtain and pay for abortions from the physician (and was perhaps herself also a client.)',
    languages: [ 'English' ],
    released: ISODate('1916-05-01T00:00:00.000Z'),
    directors: [ 'Phillips Smalley', 'Lois Weber' ],
    writers: [
      'Lucy Payton (from the story by)',
      'Franklin Hall (from the story by)',
      'Lois Weber',
      'Phillips Smalley'
    ],
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-09-07 00:51:32.560000000',
    year: 1916,
    imdb: { rating: 5.9, votes: 247, id: 7558 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.1, numReviews: 34, meter: 50 },
      production: 'MCA/Universal Pictures',
      lastUpdated: ISODate('2015-08-06T19:49:17.000Z')
    },
    num_mflix_comments: 0
  },
  {
    _id: ObjectId('573a1390f29313caabcd446f'),
    plot: "A greedy tycoon decides, on a whim, to corner the world market in wheat. This doubles the price of bread, forcing the grain's producers into charity lines and further into poverty. The film...",
    genres: [ 'Short', 'Drama' ],
    runtime: 14,
    cast: [
      'Frank Powell',
      'Grace Henderson',
      'James Kirkwood',
      'Linda Arvidson'
    ],
    num_mflix_comments: 1,
    title: 'A Corner in Wheat',
    fullplot: "A greedy tycoon decides, on a whim, to corner the world market in wheat. This doubles the price of bread, forcing the grain's producers into charity lines and further into poverty. The film continues to contrast the ironic differences between the lives of those who work to grow the wheat and the life of the man who dabbles in its sale for profit.",
    languages: [ 'English' ],
    released: ISODate('1909-12-13T00:00:00.000Z'),
    directors: [ 'D.W. Griffith' ],
    rated: 'G',
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-08-13 00:46:30.660000000',
    year: 1909,
    imdb: { rating: 6.6, votes: 1375, id: 832 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.6, numReviews: 109, meter: 73 },
      lastUpdated: ISODate('2015-05-11T18:36:53.000Z')
    }
  },
  {
    _id: ObjectId('573a1390f29313caabcd60e4'),
    plot: 'Charlie is an immigrant who endures a challenging voyage and gets into trouble as soon as he arrives in America.',
    genres: [ 'Short', 'Comedy', 'Drama' ],
    runtime: 30,
    cast: [
      'Charles Chaplin',
      'Edna Purviance',
      'Eric Campbell',
      'Albert Austin'
    ],
    num_mflix_comments: 0,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTNkYWU5YjMtMjY2My00MDI4LTlmYzQtNTFkNTFjM2E1MTVlXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SY1000_SX677_AL_.jpg',
    title: 'The Immigrant',
    fullplot: "Charlie is on his way to the USA. He wins in a card game, puts the money in Edna's bag (she and her sick mother have been robbed of everything). When he retrieves a little for himself he is accused of being a thief. Edna clears his name. Later, broke, Charlie finds a coin and goes into a restaurant. There he finds Edna, whose mother has died, and asks her to join him. When he reaches for the coin to pay for their meals it is missing (it has fallen through a hole in his pocket).",
    languages: [ 'English' ],
    released: ISODate('1917-06-17T00:00:00.000Z'),
    directors: [ 'Charles Chaplin' ],
    rated: 'UNRATED',
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-09-17 04:52:02.293000000',
    year: 1917,
    imdb: { rating: 7.8, votes: 4680, id: 8133 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 4.1, numReviews: 636, meter: 90 },
      dvd: ISODate('2001-04-12T00:00:00.000Z'),
      lastUpdated: ISODate('2015-09-12T17:16:45.000Z')
    }
  },
  {
    _id: ObjectId('573a1390f29313caabcd6223'),
    plot: "Gwen's family is rich, but her parents ignore her and most of the servants push her around, so she is lonely and unhappy. Her father is concerned only with making money, and her mother ...",
    genres: [ 'Comedy', 'Drama', 'Family' ],
    runtime: 65,
    cast: [
      'Mary Pickford',
      'Madlaine Traverse',
      'Charles Wellesley',
      'Gladys Fairbanks'
    ],
    title: 'The Poor Little Rich Girl',
    fullplot: "Gwen's family is rich, but her parents ignore her and most of the servants push her around, so she is lonely and unhappy. Her father is concerned only with making money, and her mother cares only about her social position. But one day a servant's irresponsibility creates a crisis that causes everyone to rethink what is important to them.",
    languages: [ 'English' ],
    released: ISODate('1917-03-05T00:00:00.000Z'),
    directors: [ 'Maurice Tourneur' ],
    writers: [ 'Eleanor Gates (play)', 'Frances Marion (scenario)' ],
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-07-27 00:11:31.387000000',
    year: 1917,
    imdb: { rating: 6.9, votes: 884, id: 8443 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.9, numReviews: 137, meter: 77 },
      production: 'Artcraft',
      lastUpdated: ISODate('2015-08-21T18:00:25.000Z')
    },
    num_mflix_comments: 0
  },
  {
    _id: ObjectId('573a1390f29313caabcd6377'),
    plot: `A rich young Easterner who has always wanted to live in "the Wild West" plans to move to a Western town. Unknown to him, the town's "wild" days are long gone, and it is an orderly, ...`,
    genres: [ 'Comedy', 'Western', 'Romance' ],
    runtime: 72,
    cast: [
      'Douglas Fairbanks',
      'Eileen Percy',
      'Calvert Carter',
      'Charles Stevens'
    ],
    title: 'Wild and Woolly',
    fullplot: `A rich young Easterner who has always wanted to live in "the Wild West" plans to move to a Western town. Unknown to him, the town's "wild" days are long gone, and it is an orderly, civilized place now. The townsmen, not wanting to lose a rich potential resident, contrive to make over the town to suit the young man's fantasy.`,
    languages: [ 'English' ],
    released: ISODate('1917-06-24T00:00:00.000Z'),
    directors: [ 'John Emerson' ],
    writers: [ 'Horace B. Carpenter (story)', 'John Emerson', 'Anita Loos' ],
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-06-05 00:40:35.137000000',
    year: 1917,
    imdb: { rating: 6.9, votes: 388, id: 8775 },
    countries: [ 'USA' ],
    type: 'movie',
    num_mflix_comments: 0
  },
  {
    _id: ObjectId('573a1390f29313caabcd63d6'),
    plot: 'Two peasant children, Mytyl and Tyltyl, are led by Berylune, a fairy, to search for the Blue Bird of Happiness. Berylune gives Tyltyl a cap with a diamond setting, and when Tyltyl turns the...',
    genres: [ 'Fantasy' ],
    runtime: 75,
    cast: [ 'Tula Belle', 'Robin Macdougall', 'Edwin E. Reed', 'Emma Lowry' ],
    num_mflix_comments: 0,
    poster: 'https://m.media-amazon.com/images/M/MV5BMjNlMThmNzItMTZlMS00YzJkLTk1MzktYzIyMzllOGFmZmRlXkEyXkFqcGdeQXVyMzE0MjY5ODA@._V1_SY1000_SX677_AL_.jpg',
    title: 'The Blue Bird',
    fullplot: 'Two peasant children, Mytyl and Tyltyl, are led by Berylune, a fairy, to search for the Blue Bird of Happiness. Berylune gives Tyltyl a cap with a diamond setting, and when Tyltyl turns the diamond, the children become aware of and conversant with the souls of a Dog and Cat, as well as of Fire, Water, Bread, Light, and other presumably inanimate things. The troupe thus sets off to find the elusive Blue Bird of Happiness.',
    languages: [ 'English' ],
    released: ISODate('1918-03-31T00:00:00.000Z'),
    directors: [ 'Maurice Tourneur' ],
    writers: [ 'Maurice Maeterlinck (play)', 'Charles Maigne' ],
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-07-20 00:32:04.810000000',
    year: 1918,
    imdb: { rating: 6.6, votes: 446, id: 8891 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.6, numReviews: 607, meter: 60 },
      dvd: ISODate('2005-09-06T00:00:00.000Z'),
      lastUpdated: ISODate('2015-08-21T18:10:22.000Z')
    }
  },
  {
    _id: ObjectId('573a1391f29313caabcd6e2a'),
    plot: "A newly wedded couple attempt to build a house with a prefabricated kit, unaware that a rival sabotaged the kit's component numbering.",
    genres: [ 'Short', 'Comedy' ],
    runtime: 25,
    cast: [ 'Buster Keaton', 'Sybil Seely' ],
    num_mflix_comments: 0,
    title: 'One Week',
    fullplot: "Buster and Sybil exit a chapel as newlyweds. Among the gifts is a portable house you easily put together in one week. It doesn't help that Buster's rival for Sybil switches the numbers on the crates containing the house parts.",
    languages: [ 'English' ],
    released: ISODate('1920-09-01T00:00:00.000Z'),
    directors: [ 'Edward F. Cline', 'Buster Keaton' ],
    rated: 'TV-G',
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-05-07 01:07:01.633000000',
    year: 1920,
    imdb: { rating: 8.3, votes: 3942, id: 11541 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 4.3, numReviews: 752, meter: 91 },
      lastUpdated: ISODate('2015-09-13T18:22:19.000Z')
    }
  },
  {
    _id: ObjectId('573a1391f29313caabcd68d0'),
    plot: 'A penniless young man tries to save an heiress from kidnappers and help her secure her inheritance.',
    genres: [ 'Comedy', 'Short', 'Action' ],
    runtime: 22,
    rated: 'TV-G',
    cast: [
      'Harold Lloyd',
      'Mildred Davis',
      "'Snub' Pollard",
      'Peggy Cartwright'
    ],
    poster: 'https://m.media-amazon.com/images/M/MV5BNzE1OWRlNDgtMTllNi00NTZiLWIyNTktYTk0MDY1ZWUwYTc5XkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_SY1000_SX677_AL_.jpg',
    title: 'From Hand to Mouth',
    fullplot: "As a penniless man worries about how he will manage to eat, he is joined by a young waif and her dog, who are in the same predicament. Meanwhile, across town a dishonest lawyer is working with a gang of criminals, trying to swindle an innocent young heiress out of her inheritance. As the heiress is on her way home from the lawyer's office, she notices the young man and the waif in the midst of their latest problem with the authorities, and she rescues them. Later on, the young man will have an unexpected opportunity to repay her for her kindness.",
    languages: [ 'English' ],
    released: ISODate('1919-12-28T00:00:00.000Z'),
    directors: [ 'Alfred J. Goulding', 'Hal Roach' ],
    writers: [ 'H.M. Walker (titles)' ],
    awards: { wins: 0, nominations: 1, text: '1 nomination.' },
    lastupdated: '2015-04-17 00:16:14.220000000',
    year: 1919,
    imdb: { rating: 7, votes: 639, id: 10146 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.3, numReviews: 71, meter: 55 },
      production: 'Pathè Exchange',
      lastUpdated: ISODate('2015-08-21T18:45:11.000Z')
    },
    num_mflix_comments: 0
  },
  {
    _id: ObjectId('573a1391f29313caabcd6d90'),
    plot: 'As Alice and Cora Munro attempt to find their father, a British officer in the French and Indian War, they are set upon by French soldiers and their cohorts, Huron tribesmen led by the evil...',
    genres: [ 'Adventure', 'Drama' ],
    runtime: 73,
    rated: 'NOT RATED',
    cast: [
      'Wallace Beery',
      'Barbara Bedford',
      'Alan Roscoe',
      'Lillian Hall'
    ],
    poster: 'https://m.media-amazon.com/images/M/MV5BZmJkZDU2N2ItMGNiYy00MTBmLTliOTYtNDU5NTdmMjEyMDFmXkEyXkFqcGdeQXVyNzMwOTY2NTI@._V1_SY1000_SX677_AL_.jpg',
    title: 'The Last of the Mohicans',
    fullplot: 'As Alice and Cora Munro attempt to find their father, a British officer in the French and Indian War, they are set upon by French soldiers and their cohorts, Huron tribesmen led by the evil Magua. Fighting to rescue the women are Chingachgook and his son Uncas, the last of the Mohican tribe, and their white ally, the frontiersman Natty Bumppo, known as Hawkeye.',
    languages: [ 'English' ],
    released: ISODate('1920-11-21T00:00:00.000Z'),
    directors: [ 'Clarence Brown', 'Maurice Tourneur' ],
    writers: [ 'James Fenimore Cooper (novel)', 'Robert Dillon (scenario)' ],
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-07-19 00:12:27.010000000',
    year: 1920,
    imdb: { rating: 6.9, votes: 773, id: 11387 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.5, numReviews: 306, meter: 63 },
      dvd: ISODate('2000-05-09T00:00:00.000Z'),
      lastUpdated: ISODate('2015-08-05T18:26:29.000Z')
    },
    num_mflix_comments: 0
  },
  {
    _id: ObjectId('573a1390f29313caabcd680a'),
    plot: "A frail waif, abused by her brutal boxer father in London's seedy Limehouse District, is befriended by a sensitive Chinese immigrant with tragic consequences.",
    genres: [ 'Drama', 'Romance' ],
    runtime: 90,
    rated: 'NOT RATED',
    cast: [
      'Lillian Gish',
      'Richard Barthelmess',
      'Donald Crisp',
      'Arthur Howard'
    ],
    num_mflix_comments: 1,
    poster: 'https://m.media-amazon.com/images/M/MV5BNTY0ODRmZDktMzM2MC00NThmLWEyMDMtODQzNWEyMjMxYTYzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_SX677_AL_.jpg',
    title: 'Broken Blossoms or The Yellow Man and the Girl',
    fullplot: 'Cheng Huan is a missionary whose goal is to bring the teachings of peace by Buddha to the civilized Anglo-Saxons. Upon landing in England, he is quickly disillusioned by the intolerance and apathy of the country. He becomes a storekeeper of a small shop. Out his window, he sees the young Lucy Burrows. She is regularly beaten by her prizefighter father, underfed and wears ragged clothes. Even in this deplorable condition, Cheng can see that she is a priceless beauty and he falls in love with her from afar. On the day that she passes out in front of his store, he takes her in and cares for her. With nothing but love in his heart, he dresses her in silks and provides food for her. Still weak, she stays in his shop that night and all that Cheng does is watch over her. The peace and happiness that he sees last only until Battling Burrows finds out that his daughter is with a foreigner.',
    countries: [ 'USA' ],
    released: ISODate('1919-10-20T00:00:00.000Z'),
    directors: [ 'D.W. Griffith' ],
    writers: [ 'Thomas Burke (adapted from a story by)', 'D.W. Griffith' ],
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-08-21 00:06:48.907000000',
    year: 1919,
    imdb: { rating: 7.7, votes: 6610, id: 9968 },
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.7, numReviews: 3717, meter: 72 },
      dvd: ISODate('1999-05-11T00:00:00.000Z'),
      critic: { rating: 8.2, numReviews: 21, meter: 95 },
      lastUpdated: ISODate('2015-08-21T18:30:26.000Z'),
      consensus: "Thought-provoking and beautifully filmed, D.W. Griffith's Broken Blossoms presents a master at the top of his form.",
      rotten: 1,
      production: 'Kino on Video',
      fresh: 20
    }
  },
  {
    _id: ObjectId('573a1391f29313caabcd6d40'),
    plot: 'A tipsy doctor encounters his patient sleepwalking on a building ledge, high above the street.',
    genres: [ 'Comedy', 'Short' ],
    runtime: 26,
    rated: 'PASSED',
    cast: [ 'Harold Lloyd', 'Roy Brooks', 'Mildred Davis', 'Wallace Howe' ],
    num_mflix_comments: 1,
    poster: 'https://m.media-amazon.com/images/M/MV5BODliMjc3ODctYjhlOC00MDM5LTgzNmUtMjQ1MmViNDQ0NzlhXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SY1000_SX677_AL_.jpg',
    title: 'High and Dizzy',
    fullplot: 'After a long wait, a young doctor finally has a patient come to his office. She is a young woman whose father has brought her to be treated for sleep-walking, but the father becomes annoyed with the doctor, and takes his daughter away. Soon afterward, the young doctor shares in a drinking binge with another doctor who has built a still in his office. After a series of misadventures, the two of them wind up in the same hotel where the daughter and her father are staying, leading to some hazardous predicaments.',
    languages: [ 'English' ],
    released: ISODate('1920-07-11T00:00:00.000Z'),
    directors: [ 'Hal Roach' ],
    writers: [ 'Frank Terry (story)', 'H.M. Walker (titles)' ],
    awards: { wins: 0, nominations: 1, text: '1 nomination.' },
    lastupdated: '2015-08-11 00:35:33.717000000',
    year: 1920,
    imdb: { rating: 7, votes: 646, id: 11293 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.4, numReviews: 30, meter: 70 },
      lastUpdated: ISODate('2015-06-27T19:17:10.000Z')
    }
  },
  {
    _id: ObjectId('573a1391f29313caabcd71f5'),
    plot: 'A young man, unaccustomed to children, must accompany a young girl on a train trip.',
    genres: [ 'Comedy', 'Short' ],
    runtime: 35,
    rated: 'PASSED',
    cast: [ 'Harold Lloyd', 'Mildred Davis', 'Anna Mae Bilson' ],
    poster: 'https://m.media-amazon.com/images/M/MV5BYjgzYzY1NjEtYWQxZS00ZjA4LWJlYmQtYzRjNTg3NjUwNDRlXkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_SY1000_SX677_AL_.jpg',
    title: 'Now or Never',
    fullplot: "Mary is looking after a young child whose parents have little time for her. So, when Mary travels home to meet her childhood sweetheart, she takes the child with her. Meanwhile, her boyfriend has a mishap on the road, and is tricked out of his money by a tramp. When the tramp then hitches a ride on a train, the boyfriend does so as well. At the station, he meets Mary and the child, and they plan to re-board the train together. But difficulties arise when Mary sees her boss boarding the same train - and there is also the problem that her boyfriend doesn't have a ticket.",
    languages: [ 'English' ],
    released: ISODate('1921-03-27T00:00:00.000Z'),
    directors: [ 'Fred C. Newmeyer', 'Hal Roach' ],
    writers: [ 'H.M. Walker (titles)', 'Sam Taylor (scenario)' ],
    awards: { wins: 0, nominations: 1, text: '1 nomination.' },
    lastupdated: '2015-06-25 00:02:16.613000000',
    year: 1921,
    imdb: { rating: 6.8, votes: 489, id: 12512 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.8, numReviews: 3 },
      lastUpdated: ISODate('2015-07-16T17:59:55.000Z')
    },
    num_mflix_comments: 0
  },
  {
    _id: ObjectId('573a1391f29313caabcd6f98'),
    plot: 'A romantic rivalry among members of a secret society becomes even tenser when one of the men is assigned to carry out an assassination.',
    genres: [ 'Crime', 'Drama', 'Mystery' ],
    runtime: 75,
    rated: 'PASSED',
    cast: [ 'Lon Chaney', 'Leatrice Joy', 'John Bowers', 'Hardee Kirkland' ],
    num_mflix_comments: 1,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTkwOTUyNDk1N15BMl5BanBnXkFtZTYwODI3MzI3._V1_SY1000_SX677_AL_.jpg',
    title: 'The Ace of Hearts',
    fullplot: "A secret society holds a meeting to determine what to do about a powerful and dangerous man whom they have been studying closely for the past three months. They all agree that he deserves to die. Two of the members, Farallone and Forrest, are both in love with Lilith, the group's only female member. But Lilith accepts neither of them, preferring to devote herself to the group's cause. When the group meets again and deals cards to all the members, Forrest draws the ace of hearts, meaning that he will be the one to carry out the assassination. Lilith then suddenly agrees to marry him, in order to give him courage. But after their first night together, both of them begin to feel differently about what they have planned.",
    countries: [ 'USA' ],
    released: ISODate('1924-04-04T00:00:00.000Z'),
    directors: [ 'Wallace Worsley' ],
    writers: [ 'Gouverneur Morris (by)', 'Ruth Wightman (scenario)' ],
    awards: { wins: 0, nominations: 2, text: '2 nominations.' },
    lastupdated: '2015-07-20 00:01:29.560000000',
    year: 1921,
    imdb: { rating: 7, votes: 798, id: 11904 },
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.5, numReviews: 377, meter: 68 },
      lastUpdated: ISODate('2015-04-28T19:29:23.000Z')
    }
  },
  {
    _id: ObjectId('573a1390f29313caabcd42e8'),
    plot: 'A group of bandits stage a brazen train hold-up, only to find a determined posse hot on their heels.',
    genres: [ 'Short', 'Western' ],
    runtime: 11,
    cast: [
      'A.C. Abadie',
      "Gilbert M. 'Broncho Billy' Anderson",
      'George Barnes',
      'Justus D. Barnes'
    ],
    poster: 'https://m.media-amazon.com/images/M/MV5BMTU3NjE5NzYtYTYyNS00MDVmLWIwYjgtMmYwYWIxZDYyNzU2XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SY1000_SX677_AL_.jpg',
    title: 'The Great Train Robbery',
    fullplot: "Among the earliest existing films in American cinema - notable as the first film that presented a narrative story to tell - it depicts a group of cowboy outlaws who hold up a train and rob the passengers. They are then pursued by a Sheriff's posse. Several scenes have color included - all hand tinted.",
    languages: [ 'English' ],
    released: ISODate('1903-12-01T00:00:00.000Z'),
    directors: [ 'Edwin S. Porter' ],
    rated: 'TV-G',
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-08-13 00:27:59.177000000',
    year: 1903,
    imdb: { rating: 7.4, votes: 9847, id: 439 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.7, numReviews: 2559, meter: 75 },
      fresh: 6,
      critic: { rating: 7.6, numReviews: 6, meter: 100 },
      rotten: 0,
      lastUpdated: ISODate('2015-08-08T19:16:10.000Z')
    },
    num_mflix_comments: 0
  }
]
Type "it" for more
sw2> 

















w2> db.movies.find();
[
  {
    _id: ObjectId('573a1390f29313caabcd4323'),
    plot: 'A young boy, opressed by his mother, goes on an outing in the country with a social welfare group where he dares to dream of a land where the cares of his ordinary life fade.',
    genres: [ 'Short', 'Drama', 'Fantasy' ],
    runtime: 14,
    rated: 'UNRATED',
    cast: [
      'Martin Fuller',
      'Mrs. William Bechtel',
      'Walter Edwin',
      'Ethel Jewett'
    ],
    num_mflix_comments: 1,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTMzMDcxMjgyNl5BMl5BanBnXkFtZTcwOTgxNjg4Mg@@._V1_SY1000_SX677_AL_.jpg',
    title: 'The Land Beyond the Sunset',
    fullplot: "Thanks to the Fresh Air Fund, a slum child escapes his drunken mother for a day's outing in the country. Upon arriving, he and the other children are told a story about a mythical land of no pain. Rather then return to the slum at day's end, the lad seeks to journey to that beautiful land beyond the sunset.",
    languages: [ 'English' ],
    released: ISODate('1912-10-28T00:00:00.000Z'),
    directors: [ 'Harold M. Shaw' ],
    writers: [ 'Dorothy G. Shore' ],
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-08-29 00:27:45.437000000',
    year: 1912,
    imdb: { rating: 7.1, votes: 448, id: 488 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.7, numReviews: 53, meter: 67 },
      lastUpdated: ISODate('2015-04-27T19:06:35.000Z')
    }
  },
  {
    _id: ObjectId('573a1390f29313caabcd4135'),
    plot: 'Three men hammer on an anvil and pass a bottle of beer around.',
    genres: [ 'Short' ],
    runtime: 1,
    cast: [ 'Charles Kayser', 'John Ott' ],
    num_mflix_comments: 0,
    title: 'Blacksmith Scene',
    fullplot: 'A stationary camera looks at a large anvil with a blacksmith behind it and one on either side. The smith in the middle draws a heated metal rod from the fire, places it on the anvil, and all three begin a rhythmic hammering. After several blows, the metal goes back in the fire. One smith pulls out a bottle of beer, and they each take a swig. Then, out comes the glowing metal and the hammering resumes.',
    countries: [ 'USA' ],
    released: ISODate('1893-05-09T00:00:00.000Z'),
    directors: [ 'William K.L. Dickson' ],
    rated: 'UNRATED',
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-08-26 00:03:50.133000000',
    year: 1893,
    imdb: { rating: 6.2, votes: 1189, id: 5 },
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3, numReviews: 184, meter: 32 },
      lastUpdated: ISODate('2015-06-28T18:34:09.000Z')
    }
  },
  {
    _id: ObjectId('573a1390f29313caabcd50e5'),
    plot: 'The cartoonist, Winsor McCay, brings the Dinosaurus back to life in the figure of his latest creation, Gertie the Dinosaur.',
    genres: [ 'Animation', 'Short', 'Comedy' ],
    runtime: 12,
    cast: [ 'Winsor McCay', 'George McManus', 'Roy L. McCardell' ],
    num_mflix_comments: 0,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTQxNzI4ODQ3NF5BMl5BanBnXkFtZTgwNzY5NzMwMjE@._V1_SY1000_SX677_AL_.jpg',
    title: 'Gertie the Dinosaur',
    fullplot: 'Winsor Z. McCay bets another cartoonist that he can animate a dinosaur. So he draws a big friendly herbivore called Gertie. Then he get into his own picture. Gertie walks through the picture, eats a tree, meets her creator, and takes him carefully on her back for a ride.',
    languages: [ 'English' ],
    released: ISODate('1914-09-15T00:00:00.000Z'),
    directors: [ 'Winsor McCay' ],
    writers: [ 'Winsor McCay' ],
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-08-18 01:03:15.313000000',
    year: 1914,
    imdb: { rating: 7.3, votes: 1837, id: 4008 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.7, numReviews: 29 },
      lastUpdated: ISODate('2015-08-10T19:20:03.000Z')
    }
  },
  {
    _id: ObjectId('573a1390f29313caabcd5293'),
    plot: "Young Pauline is left a lot of money when her wealthy uncle dies. However, her uncle's secretary has been named as her guardian until she marries, at which time she will officially take ...",
    genres: [ 'Action' ],
    runtime: 199,
    cast: [ 'Pearl White', 'Crane Wilbur', 'Paul Panzer', 'Edward Josè' ],
    num_mflix_comments: 0,
    poster: 'https://m.media-amazon.com/images/M/MV5BMzgxODk1Mzk2Ml5BMl5BanBnXkFtZTgwMDg0NzkwMjE@._V1_SY1000_SX677_AL_.jpg',
    title: 'The Perils of Pauline',
    fullplot: `Young Pauline is left a lot of money when her wealthy uncle dies. However, her uncle's secretary has been named as her guardian until she marries, at which time she will officially take possession of her inheritance. Meanwhile, her "guardian" and his confederates constantly come up with schemes to get rid of Pauline so that he can get his hands on the money himself.`,
    languages: [ 'English' ],
    released: ISODate('1914-03-23T00:00:00.000Z'),
    directors: [ 'Louis J. Gasnier', 'Donald MacKenzie' ],
    writers: [
      'Charles W. Goddard (screenplay)',
      'Basil Dickey (screenplay)',
      'Charles W. Goddard (novel)',
      'George B. Seitz',
      'Bertram Millhauser'
    ],
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-09-12 00:01:18.647000000',
    year: 1914,
    imdb: { rating: 7.6, votes: 744, id: 4465 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 2.8, numReviews: 9 },
      production: 'Pathè Frères',
      lastUpdated: ISODate('2015-09-11T17:46:19.000Z')
    }
  },
  {
    _id: ObjectId('573a1390f29313caabcd4803'),
    plot: 'Cartoon figures announce, via comic strip balloons, that they will move - and move they do, in a wildly exaggerated style.',
    genres: [ 'Animation', 'Short', 'Comedy' ],
    runtime: 7,
    cast: [ 'Winsor McCay' ],
    num_mflix_comments: 0,
    poster: 'https://m.media-amazon.com/images/M/MV5BYzg2NjNhNTctMjUxMi00ZWU4LWI3ZjYtNTI0NTQxNThjZTk2XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SY1000_SX677_AL_.jpg',
    title: 'Winsor McCay, the Famous Cartoonist of the N.Y. Herald and His Moving Comics',
    fullplot: 'Cartoonist Winsor McCay agrees to create a large set of drawings that will be photographed and made into a motion picture. The job requires plenty of drawing supplies, and the cartoonist must also overcome some mishaps caused by an assistant. Finally, the work is done, and everyone can see the resulting animated picture.',
    languages: [ 'English' ],
    released: ISODate('1911-04-08T00:00:00.000Z'),
    directors: [ 'Winsor McCay', 'J. Stuart Blackton' ],
    writers: [
      'Winsor McCay (comic strip "Little Nemo in Slumberland")',
      'Winsor McCay (screenplay)'
    ],
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-08-29 01:09:03.030000000',
    year: 1911,
    imdb: { rating: 7.3, votes: 1034, id: 1737 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.4, numReviews: 89, meter: 47 },
      lastUpdated: ISODate('2015-08-20T18:51:24.000Z')
    }
  },
  {
    _id: ObjectId('573a1390f29313caabcd5c0f'),
    plot: 'The story of a poor young woman, separated by prejudice from her husband and baby, is interwoven with tales of intolerance from throughout history.',
    genres: [ 'Drama', 'History' ],
    runtime: 197,
    rated: 'NOT RATED',
    cast: [
      'Lillian Gish',
      'Spottiswoode Aitken',
      'Mary Alden',
      'Frank Bennett'
    ],
    num_mflix_comments: 0,
    poster: 'https://m.media-amazon.com/images/M/MV5BZTc0YjA1ZjctOTFlZi00NWRiLWE2MTAtZDE1MWY1YTgzOTJjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_SX677_AL_.jpg',
    title: "Intolerance: Love's Struggle Throughout the Ages",
    fullplot: "Intolerance and its terrible effects are examined in four historical eras. In ancient Babylon, a mountain girl is caught up in the religious rivalry that leads to the city's downfall. In Judea, the hypocritical Pharisees condemn Jesus Christ. In 1572 Paris, unaware of the impending St. Bartholomew's Day Massacre, two young Huguenots prepare for marriage. Finally, in modern America, social reformers destroy the lives of a young woman and her beloved.",
    countries: [ 'USA' ],
    released: ISODate('1916-09-05T00:00:00.000Z'),
    directors: [ 'D.W. Griffith' ],
    writers: [ 'D.W. Griffith (scenario)', 'Anita Loos (titles)' ],
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-09-05 00:01:19.580000000',
    year: 1916,
    imdb: { rating: 8, votes: 9880, id: 6864 },
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.8, numReviews: 4718, meter: 78 },
      dvd: ISODate('2002-12-10T00:00:00.000Z'),
      critic: { rating: 8.1, numReviews: 32, meter: 97 },
      lastUpdated: ISODate('2015-09-15T17:02:34.000Z'),
      consensus: "A pioneering classic and one of the most influential films ever made, D.W. Griffith's Intolerance stands as the crowning jewel in an incredible filmography.",
      rotten: 1,
      production: 'Cohen Media Group',
      fresh: 31
    }
  },
  {
    _id: ObjectId('573a1390f29313caabcd5ea4'),
    plot: "A District Attorney's outspoken stand on abortion gets him in trouble with the local community.",
    genres: [ 'Drama' ],
    runtime: 62,
    rated: 'APPROVED',
    cast: [
      'Tyrone Power Sr.',
      'Helen Riaume',
      'Marie Walcamp',
      'Cora Drew'
    ],
    title: 'Where Are My Children?',
    fullplot: 'While prosecuting a physician for the death of a client after an abortion, the district attorney discovers that his wife helped her society friends and the daughter of her maid obtain and pay for abortions from the physician (and was perhaps herself also a client.)',
    languages: [ 'English' ],
    released: ISODate('1916-05-01T00:00:00.000Z'),
    directors: [ 'Phillips Smalley', 'Lois Weber' ],
    writers: [
      'Lucy Payton (from the story by)',
      'Franklin Hall (from the story by)',
      'Lois Weber',
      'Phillips Smalley'
    ],
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-09-07 00:51:32.560000000',
    year: 1916,
    imdb: { rating: 5.9, votes: 247, id: 7558 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.1, numReviews: 34, meter: 50 },
      production: 'MCA/Universal Pictures',
      lastUpdated: ISODate('2015-08-06T19:49:17.000Z')
    },
    num_mflix_comments: 0
  },
  {
    _id: ObjectId('573a1390f29313caabcd446f'),
    plot: "A greedy tycoon decides, on a whim, to corner the world market in wheat. This doubles the price of bread, forcing the grain's producers into charity lines and further into poverty. The film...",
    genres: [ 'Short', 'Drama' ],
    runtime: 14,
    cast: [
      'Frank Powell',
      'Grace Henderson',
      'James Kirkwood',
      'Linda Arvidson'
    ],
    num_mflix_comments: 1,
    title: 'A Corner in Wheat',
    fullplot: "A greedy tycoon decides, on a whim, to corner the world market in wheat. This doubles the price of bread, forcing the grain's producers into charity lines and further into poverty. The film continues to contrast the ironic differences between the lives of those who work to grow the wheat and the life of the man who dabbles in its sale for profit.",
    languages: [ 'English' ],
    released: ISODate('1909-12-13T00:00:00.000Z'),
    directors: [ 'D.W. Griffith' ],
    rated: 'G',
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-08-13 00:46:30.660000000',
    year: 1909,
    imdb: { rating: 6.6, votes: 1375, id: 832 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.6, numReviews: 109, meter: 73 },
      lastUpdated: ISODate('2015-05-11T18:36:53.000Z')
    }
  },
  {
    _id: ObjectId('573a1390f29313caabcd60e4'),
    plot: 'Charlie is an immigrant who endures a challenging voyage and gets into trouble as soon as he arrives in America.',
    genres: [ 'Short', 'Comedy', 'Drama' ],
    runtime: 30,
    cast: [
      'Charles Chaplin',
      'Edna Purviance',
      'Eric Campbell',
      'Albert Austin'
    ],
    num_mflix_comments: 0,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTNkYWU5YjMtMjY2My00MDI4LTlmYzQtNTFkNTFjM2E1MTVlXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SY1000_SX677_AL_.jpg',
    title: 'The Immigrant',
    fullplot: "Charlie is on his way to the USA. He wins in a card game, puts the money in Edna's bag (she and her sick mother have been robbed of everything). When he retrieves a little for himself he is accused of being a thief. Edna clears his name. Later, broke, Charlie finds a coin and goes into a restaurant. There he finds Edna, whose mother has died, and asks her to join him. When he reaches for the coin to pay for their meals it is missing (it has fallen through a hole in his pocket).",
    languages: [ 'English' ],
    released: ISODate('1917-06-17T00:00:00.000Z'),
    directors: [ 'Charles Chaplin' ],
    rated: 'UNRATED',
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-09-17 04:52:02.293000000',
    year: 1917,
    imdb: { rating: 7.8, votes: 4680, id: 8133 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 4.1, numReviews: 636, meter: 90 },
      dvd: ISODate('2001-04-12T00:00:00.000Z'),
      lastUpdated: ISODate('2015-09-12T17:16:45.000Z')
    }
  },
  {
    _id: ObjectId('573a1390f29313caabcd6223'),
    plot: "Gwen's family is rich, but her parents ignore her and most of the servants push her around, so she is lonely and unhappy. Her father is concerned only with making money, and her mother ...",
    genres: [ 'Comedy', 'Drama', 'Family' ],
    runtime: 65,
    cast: [
      'Mary Pickford',
      'Madlaine Traverse',
      'Charles Wellesley',
      'Gladys Fairbanks'
    ],
    title: 'The Poor Little Rich Girl',
    fullplot: "Gwen's family is rich, but her parents ignore her and most of the servants push her around, so she is lonely and unhappy. Her father is concerned only with making money, and her mother cares only about her social position. But one day a servant's irresponsibility creates a crisis that causes everyone to rethink what is important to them.",
    languages: [ 'English' ],
    released: ISODate('1917-03-05T00:00:00.000Z'),
    directors: [ 'Maurice Tourneur' ],
    writers: [ 'Eleanor Gates (play)', 'Frances Marion (scenario)' ],
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-07-27 00:11:31.387000000',
    year: 1917,
    imdb: { rating: 6.9, votes: 884, id: 8443 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.9, numReviews: 137, meter: 77 },
      production: 'Artcraft',
      lastUpdated: ISODate('2015-08-21T18:00:25.000Z')
    },
    num_mflix_comments: 0
  },
  {
    _id: ObjectId('573a1390f29313caabcd6377'),
    plot: `A rich young Easterner who has always wanted to live in "the Wild West" plans to move to a Western town. Unknown to him, the town's "wild" days are long gone, and it is an orderly, ...`,
    genres: [ 'Comedy', 'Western', 'Romance' ],
    runtime: 72,
    cast: [
      'Douglas Fairbanks',
      'Eileen Percy',
      'Calvert Carter',
      'Charles Stevens'
    ],
    title: 'Wild and Woolly',
    fullplot: `A rich young Easterner who has always wanted to live in "the Wild West" plans to move to a Western town. Unknown to him, the town's "wild" days are long gone, and it is an orderly, civilized place now. The townsmen, not wanting to lose a rich potential resident, contrive to make over the town to suit the young man's fantasy.`,
    languages: [ 'English' ],
    released: ISODate('1917-06-24T00:00:00.000Z'),
    directors: [ 'John Emerson' ],
    writers: [ 'Horace B. Carpenter (story)', 'John Emerson', 'Anita Loos' ],
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-06-05 00:40:35.137000000',
    year: 1917,
    imdb: { rating: 6.9, votes: 388, id: 8775 },
    countries: [ 'USA' ],
    type: 'movie',
    num_mflix_comments: 0
  },
  {
    _id: ObjectId('573a1390f29313caabcd63d6'),
    plot: 'Two peasant children, Mytyl and Tyltyl, are led by Berylune, a fairy, to search for the Blue Bird of Happiness. Berylune gives Tyltyl a cap with a diamond setting, and when Tyltyl turns the...',
    genres: [ 'Fantasy' ],
    runtime: 75,
    cast: [ 'Tula Belle', 'Robin Macdougall', 'Edwin E. Reed', 'Emma Lowry' ],
    num_mflix_comments: 0,
    poster: 'https://m.media-amazon.com/images/M/MV5BMjNlMThmNzItMTZlMS00YzJkLTk1MzktYzIyMzllOGFmZmRlXkEyXkFqcGdeQXVyMzE0MjY5ODA@._V1_SY1000_SX677_AL_.jpg',
    title: 'The Blue Bird',
    fullplot: 'Two peasant children, Mytyl and Tyltyl, are led by Berylune, a fairy, to search for the Blue Bird of Happiness. Berylune gives Tyltyl a cap with a diamond setting, and when Tyltyl turns the diamond, the children become aware of and conversant with the souls of a Dog and Cat, as well as of Fire, Water, Bread, Light, and other presumably inanimate things. The troupe thus sets off to find the elusive Blue Bird of Happiness.',
    languages: [ 'English' ],
    released: ISODate('1918-03-31T00:00:00.000Z'),
    directors: [ 'Maurice Tourneur' ],
    writers: [ 'Maurice Maeterlinck (play)', 'Charles Maigne' ],
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-07-20 00:32:04.810000000',
    year: 1918,
    imdb: { rating: 6.6, votes: 446, id: 8891 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.6, numReviews: 607, meter: 60 },
      dvd: ISODate('2005-09-06T00:00:00.000Z'),
      lastUpdated: ISODate('2015-08-21T18:10:22.000Z')
    }
  },
  {
    _id: ObjectId('573a1391f29313caabcd6e2a'),
    plot: "A newly wedded couple attempt to build a house with a prefabricated kit, unaware that a rival sabotaged the kit's component numbering.",
    genres: [ 'Short', 'Comedy' ],
    runtime: 25,
    cast: [ 'Buster Keaton', 'Sybil Seely' ],
    num_mflix_comments: 0,
    title: 'One Week',
    fullplot: "Buster and Sybil exit a chapel as newlyweds. Among the gifts is a portable house you easily put together in one week. It doesn't help that Buster's rival for Sybil switches the numbers on the crates containing the house parts.",
    languages: [ 'English' ],
    released: ISODate('1920-09-01T00:00:00.000Z'),
    directors: [ 'Edward F. Cline', 'Buster Keaton' ],
    rated: 'TV-G',
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-05-07 01:07:01.633000000',
    year: 1920,
    imdb: { rating: 8.3, votes: 3942, id: 11541 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 4.3, numReviews: 752, meter: 91 },
      lastUpdated: ISODate('2015-09-13T18:22:19.000Z')
    }
  },
  {
    _id: ObjectId('573a1391f29313caabcd68d0'),
    plot: 'A penniless young man tries to save an heiress from kidnappers and help her secure her inheritance.',
    genres: [ 'Comedy', 'Short', 'Action' ],
    runtime: 22,
    rated: 'TV-G',
    cast: [
      'Harold Lloyd',
      'Mildred Davis',
      "'Snub' Pollard",
      'Peggy Cartwright'
    ],
    poster: 'https://m.media-amazon.com/images/M/MV5BNzE1OWRlNDgtMTllNi00NTZiLWIyNTktYTk0MDY1ZWUwYTc5XkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_SY1000_SX677_AL_.jpg',
    title: 'From Hand to Mouth',
    fullplot: "As a penniless man worries about how he will manage to eat, he is joined by a young waif and her dog, who are in the same predicament. Meanwhile, across town a dishonest lawyer is working with a gang of criminals, trying to swindle an innocent young heiress out of her inheritance. As the heiress is on her way home from the lawyer's office, she notices the young man and the waif in the midst of their latest problem with the authorities, and she rescues them. Later on, the young man will have an unexpected opportunity to repay her for her kindness.",
    languages: [ 'English' ],
    released: ISODate('1919-12-28T00:00:00.000Z'),
    directors: [ 'Alfred J. Goulding', 'Hal Roach' ],
    writers: [ 'H.M. Walker (titles)' ],
    awards: { wins: 0, nominations: 1, text: '1 nomination.' },
    lastupdated: '2015-04-17 00:16:14.220000000',
    year: 1919,
    imdb: { rating: 7, votes: 639, id: 10146 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.3, numReviews: 71, meter: 55 },
      production: 'Pathè Exchange',
      lastUpdated: ISODate('2015-08-21T18:45:11.000Z')
    },
    num_mflix_comments: 0
  },
  {
    _id: ObjectId('573a1391f29313caabcd6d90'),
    plot: 'As Alice and Cora Munro attempt to find their father, a British officer in the French and Indian War, they are set upon by French soldiers and their cohorts, Huron tribesmen led by the evil...',
    genres: [ 'Adventure', 'Drama' ],
    runtime: 73,
    rated: 'NOT RATED',
    cast: [
      'Wallace Beery',
      'Barbara Bedford',
      'Alan Roscoe',
      'Lillian Hall'
    ],
    poster: 'https://m.media-amazon.com/images/M/MV5BZmJkZDU2N2ItMGNiYy00MTBmLTliOTYtNDU5NTdmMjEyMDFmXkEyXkFqcGdeQXVyNzMwOTY2NTI@._V1_SY1000_SX677_AL_.jpg',
    title: 'The Last of the Mohicans',
    fullplot: 'As Alice and Cora Munro attempt to find their father, a British officer in the French and Indian War, they are set upon by French soldiers and their cohorts, Huron tribesmen led by the evil Magua. Fighting to rescue the women are Chingachgook and his son Uncas, the last of the Mohican tribe, and their white ally, the frontiersman Natty Bumppo, known as Hawkeye.',
    languages: [ 'English' ],
    released: ISODate('1920-11-21T00:00:00.000Z'),
    directors: [ 'Clarence Brown', 'Maurice Tourneur' ],
    writers: [ 'James Fenimore Cooper (novel)', 'Robert Dillon (scenario)' ],
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-07-19 00:12:27.010000000',
    year: 1920,
    imdb: { rating: 6.9, votes: 773, id: 11387 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.5, numReviews: 306, meter: 63 },
      dvd: ISODate('2000-05-09T00:00:00.000Z'),
      lastUpdated: ISODate('2015-08-05T18:26:29.000Z')
    },
    num_mflix_comments: 0
  },
  {
    _id: ObjectId('573a1390f29313caabcd680a'),
    plot: "A frail waif, abused by her brutal boxer father in London's seedy Limehouse District, is befriended by a sensitive Chinese immigrant with tragic consequences.",
    genres: [ 'Drama', 'Romance' ],
    runtime: 90,
    rated: 'NOT RATED',
    cast: [
      'Lillian Gish',
      'Richard Barthelmess',
      'Donald Crisp',
      'Arthur Howard'
    ],
    num_mflix_comments: 1,
    poster: 'https://m.media-amazon.com/images/M/MV5BNTY0ODRmZDktMzM2MC00NThmLWEyMDMtODQzNWEyMjMxYTYzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_SX677_AL_.jpg',
    title: 'Broken Blossoms or The Yellow Man and the Girl',
    fullplot: 'Cheng Huan is a missionary whose goal is to bring the teachings of peace by Buddha to the civilized Anglo-Saxons. Upon landing in England, he is quickly disillusioned by the intolerance and apathy of the country. He becomes a storekeeper of a small shop. Out his window, he sees the young Lucy Burrows. She is regularly beaten by her prizefighter father, underfed and wears ragged clothes. Even in this deplorable condition, Cheng can see that she is a priceless beauty and he falls in love with her from afar. On the day that she passes out in front of his store, he takes her in and cares for her. With nothing but love in his heart, he dresses her in silks and provides food for her. Still weak, she stays in his shop that night and all that Cheng does is watch over her. The peace and happiness that he sees last only until Battling Burrows finds out that his daughter is with a foreigner.',
    countries: [ 'USA' ],
    released: ISODate('1919-10-20T00:00:00.000Z'),
    directors: [ 'D.W. Griffith' ],
    writers: [ 'Thomas Burke (adapted from a story by)', 'D.W. Griffith' ],
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-08-21 00:06:48.907000000',
    year: 1919,
    imdb: { rating: 7.7, votes: 6610, id: 9968 },
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.7, numReviews: 3717, meter: 72 },
      dvd: ISODate('1999-05-11T00:00:00.000Z'),
      critic: { rating: 8.2, numReviews: 21, meter: 95 },
      lastUpdated: ISODate('2015-08-21T18:30:26.000Z'),
      consensus: "Thought-provoking and beautifully filmed, D.W. Griffith's Broken Blossoms presents a master at the top of his form.",
      rotten: 1,
      production: 'Kino on Video',
      fresh: 20
    }
  },
  {
    _id: ObjectId('573a1391f29313caabcd6d40'),
    plot: 'A tipsy doctor encounters his patient sleepwalking on a building ledge, high above the street.',
    genres: [ 'Comedy', 'Short' ],
    runtime: 26,
    rated: 'PASSED',
    cast: [ 'Harold Lloyd', 'Roy Brooks', 'Mildred Davis', 'Wallace Howe' ],
    num_mflix_comments: 1,
    poster: 'https://m.media-amazon.com/images/M/MV5BODliMjc3ODctYjhlOC00MDM5LTgzNmUtMjQ1MmViNDQ0NzlhXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SY1000_SX677_AL_.jpg',
    title: 'High and Dizzy',
    fullplot: 'After a long wait, a young doctor finally has a patient come to his office. She is a young woman whose father has brought her to be treated for sleep-walking, but the father becomes annoyed with the doctor, and takes his daughter away. Soon afterward, the young doctor shares in a drinking binge with another doctor who has built a still in his office. After a series of misadventures, the two of them wind up in the same hotel where the daughter and her father are staying, leading to some hazardous predicaments.',
    languages: [ 'English' ],
    released: ISODate('1920-07-11T00:00:00.000Z'),
    directors: [ 'Hal Roach' ],
    writers: [ 'Frank Terry (story)', 'H.M. Walker (titles)' ],
    awards: { wins: 0, nominations: 1, text: '1 nomination.' },
    lastupdated: '2015-08-11 00:35:33.717000000',
    year: 1920,
    imdb: { rating: 7, votes: 646, id: 11293 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.4, numReviews: 30, meter: 70 },
      lastUpdated: ISODate('2015-06-27T19:17:10.000Z')
    }
  },
  {
    _id: ObjectId('573a1391f29313caabcd71f5'),
    plot: 'A young man, unaccustomed to children, must accompany a young girl on a train trip.',
    genres: [ 'Comedy', 'Short' ],
    runtime: 35,
    rated: 'PASSED',
    cast: [ 'Harold Lloyd', 'Mildred Davis', 'Anna Mae Bilson' ],
    poster: 'https://m.media-amazon.com/images/M/MV5BYjgzYzY1NjEtYWQxZS00ZjA4LWJlYmQtYzRjNTg3NjUwNDRlXkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_SY1000_SX677_AL_.jpg',
    title: 'Now or Never',
    fullplot: "Mary is looking after a young child whose parents have little time for her. So, when Mary travels home to meet her childhood sweetheart, she takes the child with her. Meanwhile, her boyfriend has a mishap on the road, and is tricked out of his money by a tramp. When the tramp then hitches a ride on a train, the boyfriend does so as well. At the station, he meets Mary and the child, and they plan to re-board the train together. But difficulties arise when Mary sees her boss boarding the same train - and there is also the problem that her boyfriend doesn't have a ticket.",
    languages: [ 'English' ],
    released: ISODate('1921-03-27T00:00:00.000Z'),
    directors: [ 'Fred C. Newmeyer', 'Hal Roach' ],
    writers: [ 'H.M. Walker (titles)', 'Sam Taylor (scenario)' ],
    awards: { wins: 0, nominations: 1, text: '1 nomination.' },
    lastupdated: '2015-06-25 00:02:16.613000000',
    year: 1921,
    imdb: { rating: 6.8, votes: 489, id: 12512 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.8, numReviews: 3 },
      lastUpdated: ISODate('2015-07-16T17:59:55.000Z')
    },
    num_mflix_comments: 0
  },
  {
    _id: ObjectId('573a1391f29313caabcd6f98'),
    plot: 'A romantic rivalry among members of a secret society becomes even tenser when one of the men is assigned to carry out an assassination.',
    genres: [ 'Crime', 'Drama', 'Mystery' ],
    runtime: 75,
    rated: 'PASSED',
    cast: [ 'Lon Chaney', 'Leatrice Joy', 'John Bowers', 'Hardee Kirkland' ],
    num_mflix_comments: 1,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTkwOTUyNDk1N15BMl5BanBnXkFtZTYwODI3MzI3._V1_SY1000_SX677_AL_.jpg',
    title: 'The Ace of Hearts',
    fullplot: "A secret society holds a meeting to determine what to do about a powerful and dangerous man whom they have been studying closely for the past three months. They all agree that he deserves to die. Two of the members, Farallone and Forrest, are both in love with Lilith, the group's only female member. But Lilith accepts neither of them, preferring to devote herself to the group's cause. When the group meets again and deals cards to all the members, Forrest draws the ace of hearts, meaning that he will be the one to carry out the assassination. Lilith then suddenly agrees to marry him, in order to give him courage. But after their first night together, both of them begin to feel differently about what they have planned.",
    countries: [ 'USA' ],
    released: ISODate('1924-04-04T00:00:00.000Z'),
    directors: [ 'Wallace Worsley' ],
    writers: [ 'Gouverneur Morris (by)', 'Ruth Wightman (scenario)' ],
    awards: { wins: 0, nominations: 2, text: '2 nominations.' },
    lastupdated: '2015-07-20 00:01:29.560000000',
    year: 1921,
    imdb: { rating: 7, votes: 798, id: 11904 },
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.5, numReviews: 377, meter: 68 },
      lastUpdated: ISODate('2015-04-28T19:29:23.000Z')
    }
  },
  {
    _id: ObjectId('573a1390f29313caabcd42e8'),
    plot: 'A group of bandits stage a brazen train hold-up, only to find a determined posse hot on their heels.',
    genres: [ 'Short', 'Western' ],
    runtime: 11,
    cast: [
      'A.C. Abadie',
      "Gilbert M. 'Broncho Billy' Anderson",
      'George Barnes',
      'Justus D. Barnes'
    ],
    poster: 'https://m.media-amazon.com/images/M/MV5BMTU3NjE5NzYtYTYyNS00MDVmLWIwYjgtMmYwYWIxZDYyNzU2XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SY1000_SX677_AL_.jpg',
    title: 'The Great Train Robbery',
    fullplot: "Among the earliest existing films in American cinema - notable as the first film that presented a narrative story to tell - it depicts a group of cowboy outlaws who hold up a train and rob the passengers. They are then pursued by a Sheriff's posse. Several scenes have color included - all hand tinted.",
    languages: [ 'English' ],
    released: ISODate('1903-12-01T00:00:00.000Z'),
    directors: [ 'Edwin S. Porter' ],
    rated: 'TV-G',
    awards: { wins: 1, nominations: 0, text: '1 win.' },
    lastupdated: '2015-08-13 00:27:59.177000000',
    year: 1903,
    imdb: { rating: 7.4, votes: 9847, id: 439 },
    countries: [ 'USA' ],
    type: 'movie',
    tomatoes: {
      viewer: { rating: 3.7, numReviews: 2559, meter: 75 },
      fresh: 6,
      critic: { rating: 7.6, numReviews: 6, meter: 100 },
      rotten: 0,
      lastUpdated: ISODate('2015-08-08T19:16:10.000Z')
    },
    num_mflix_comments: 0
  }
]
Type "it" for more
sw2> 











1111111
index: 

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;






movie.js:

const express = require('express');
const router = express.Router();
const dbo = require('../db/conn');
const ObjectId = require('mongodb').ObjectId;
const MAX_RESULTS = parseInt(process.env.MAX_RESULTS);
const COLLECTION = 'movies';

//getMovies
router.get('/', async (req, res) => {
  let limit = MAX_RESULTS;
  if (req.query.limit){
    limit = Math.min(parseInt(req.query.limit), MAX_RESULTS);
  }
  let next = req.query.next;
  let query = {}
  if (next){
    query = {_id: {$lt: new ObjectId(next)}}
  }
  const dbConnect = dbo.getDb();
  let results = await dbConnect
    .collection(COLLECTION)
    .find(query)
    .sort({_id: -1})
    .project({title:1,plot:1})
    .limit(limit)
    .toArray()
    .catch(err => res.status(400).send('Error searching for movies'));
  next = results.length == limit ? results[results.length - 1]._id : null;
  res.json({results, next}).status(200);
});

//getMovieById
router.get('/:id', async (req, res) => {
  const dbConnect = dbo.getDb();
  let query = {_id: new ObjectId(req.params.id)};
  let result = await dbConnect
    .collection(COLLECTION)
    .findOne(query);
  if (!result){
    res.send("Not found").status(404);
  } else {
    res.status(200).send(result);
  }
});

//addMovie
router.post('/', async (req, res) => {
  const dbConnect = dbo.getDb();
  console.log(req.body);
  res.send({});
});

//deleteMovieById
router.delete('/:id', async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const dbConnect = dbo.getDb();
  let result = await dbConnect
    .collection(COLLECTION)
    .deleteOne(query);
  res.status(200).send(result);
});

module.exports = router;









appendFile.test.js:

const jestOpenAPI = require('jest-openapi').default;
const axios = require('axios').default;
const BASE_URL = "http://localhost:3000/api/v1";
const SCHEMA = "../schema/cine.schema.yaml";
const path = require('path');
const PELICULA = {
  "titulo" : "Italian Spiderman",
  "directores" : [{"nombre":"Dario", "apellidos": "Russo"}],
  "actores" : [ {
    "nombre" : "David",
    "apellidos" : "Ashby"
  }, {
    "nombre" : "Chris",
    "apellidos" : "Asimos"
  } ],
  "resumen" : "When an otherworldly substance with amazing cloning properties falls into the hands of the evil criminal mastermind, Captain Maximum, only the extreme powers of the Italian Spiderman can save the world.",
  "duracion" : 40,
  "rating": 7.9,
  "genero": ["comedia"]
};

// Load an OpenAPI file (YAML or JSON) into this plugin
jestOpenAPI(path.join(__dirname, SCHEMA));

describe('POST /peliculas', () => {
    it('should satisfy OpenAPI spec', async () => {
      const res = await axios.post(BASE_URL + '/peliculas', PELICULA);
      expect(res.status).toEqual(201);
      expect(res).toSatisfyApiSpec();
    });
});

// Write your test
describe('GET /peliculas', () => {
  it('should satisfy OpenAPI spec', async () => {
    const res = await axios.get(BASE_URL + '/peliculas');
    expect(res.status).toEqual(200);
    // Assert that the HTTP response satisfies the OpenAPI spec
    expect(res).toSatisfyApiSpec();
  });
});





yamal:

openapi: 3.0.3
info:
  description: |-
    My Movies documentation
  version: 1.0.0
  title: Movies
tags:
  - name: movie
    description: Everything about your Movies
paths:
  /movie:
    get:
      tags:
        - movie
      summary: GET all movies
      description: GET all movies
      responses:
        "200":
          description: "OK"
          content:
             application/json:
              schema: 
                $ref: '#/components/schemas/Movies'
    post:
      tags:
        - movie
      summary: Add a new movie
      description: Add a new movie
      operationId: addMovie
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Movie'
        '405':
          description: Invalid input
      requestBody:
        description: Add a new movie
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Movie'
  /movie/{movieId}:
    parameters:
      - $ref: '#/components/parameters/ID'
    get:
      tags:
        - movie
      summary: Find movie by ID
      description: Returns a single movie
      operationId: getMovieById
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Movie'
        '400':
          description: Invalid ID supplied
        '404':
          description: Movie not found
    delete:
      tags:
        - movie
      summary: Deletes a movie
      description: Deletes a movie
      operationId: deleteMovie
      responses:
        '200':
          description: Successful operation
        '400':
          description: Invalid movie ID
    #TODO /movie/find
components:
  parameters:
    ID:
      description: Movie ID
      name: movieId
      in: path
      required: true
      schema:
        $ref: "#/components/schemas/ID"
  schemas:
    Movies:
      type: object
      properties:
        results:
          $ref: "#/components/schemas/MoviesArray"
        next:
          type: string
          description: Movie next ID for pagination search
      required:
        - results
        - next
    MoviesArray:
      type: array
      items:
        $ref: "#/components/schemas/MovieMin"
    MovieMin:
      type: object
      properties:
        _id:
          $ref: "#/components/schemas/ID"
        title:
          type: string
          description: Movie title
        year:
          type: integer
          description: Movie year
      required:
        - _id
        - title
        - year
    Movie:
      # TODO
    ID:
      type: string
      description: Movie Object ID obtained from the database
      example: 6463448ae7684d03f44af30f
servers:
  - url: localhost:3000/api
