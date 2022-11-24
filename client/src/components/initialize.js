import Data from './Data.js';

const initialize = () => {
  const baseData = [
    {title: 'Mean Girls',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Hackers',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'The Grey',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Sunshine',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Ex Machina',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Lord of The Rings',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Star Wars',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'The Gray Man',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Bullet Train',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Watcher',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'All Quiet',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Descendant',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'The Good Nurse',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Ticket to Paradise',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Cars',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Carter',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Super Pets',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Dr.Strange',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Day Shift',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Ambulance',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Massive Talent',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Elvis',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Sell/Buy/Data',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Policeman',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Orphan: First Kill',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Unhuman',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Scream',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Halloween Ends',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Fresh',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'The Lost City',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Rise',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Luckiest Girl Alive',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Thirteen Lives',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Father Stu',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'The Outfit',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Hustle',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'The Northman',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Black Crab',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Morbius',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Prey',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Uncharted',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Luck',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'The Bad Guys',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Cheaper By The Dozen',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'Sonic 2',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

    {title: 'LightYear',
    source: 'given',
    year: '1995',
    runtime: '107 min',
    metascore: '46',
    imdbRating: '6.2',
    watched: false,
    details: false,
    source: 'local'
    },

  ];
  const movieData = new Data(baseData);
  movieData.initializeData(baseData);
  return movieData;
}

export default initialize;