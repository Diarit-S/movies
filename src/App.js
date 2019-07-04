import React, {Component} from 'react';
import Header from './components/header/Header';
import MovieList from './components/movie-list/MovieList';
import MovieDetails from './components/movie-details/MovieDetails';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      movies: [{
        title: 'The Godfather',
        img: 'https://www.lasicile.fr/wp-content/uploads/2018/11/tour-parrain-godfather.jpg',
        details: 'R | 175 min | Crime, Drama',
        description: 'En 1945, à New York, les Corleone sont une des 5 familles de la mafia. Don Vito Corleone, `parrain de cette famille, marie sa fille à un bookmaker. Sollozzo, `parrain de la famille Tattaglia, propose à Don Vito une association dans le trafic de drogue, mais celui-ci refuse. Sonny, un de ses fils, y est quant à lui favorable. Afin de traiter avec Sonny, Sollozzo tente de faire tuer Don Vito, mais celui-ci en réchappe.'
      },
      {
        title: 'The Gladiator',
        img: 'http://golem13.fr/wp-content/uploads/2018/11/Gladiator2-RidleyScott.jpg',
        details: 'A | 220 min | Action',
        description: 'Le général romain Maximus est le plus fidèle soutien de lempereur Marc Aurèle, quil a conduit de victoire en victoire. Jaloux du prestige de Maximus, et plus encore de lamour que lui voue lempereur, le fils de Marc Aurèle, Commode, sarroge brutalement le pouvoir, puis ordonne larrestation du général et son exécution. Maximus échappe à ses assassins, mais ne peut empêcher le massacre de sa famille. Capturé par un marchand desclaves, il devient gladiateur et prépare sa vengeance.'
      },
      {
        title: 'Avengers End Game',
        img: 'https://cdn.vox-cdn.com/thumbor/0pVHGAg4ouVXI3RO4n2gayhNahQ=/0x0:1920x1080/920x613/filters:focal(887x293:1193x599):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64224190/surprise_marvel_releases_a_new_full_trailer_and_poster_for_avengers_endgame_social.0.jpg',
        details: 'A | 220 min | Action, Super Hero',
        description: "Le Titan Thanos ayant réussi à s'approprier les six Pierres d'Infinité et à les réunir sur le Gantelet doré, il a pu réaliser son objectif de pulvériser la moitié de la population de l'Univers d'un claquement de doigts. Les quelques Avengers et Gardiens de la Galaxie ayant survécu, Captain America, Thor, Natasha Romanoff, Bruce Banner, War Machine, Nébula et Rocket, espèrent réparer le méfait de Thanos. Ils le retrouvent mais il s'avère que ce dernier a détruit les pierres et Thor le décapite."
      },
    ],
      selectedMovie: 0

    }
  }

  updateSelectedMovie = (title)=>{
    const index = this.state.movies.findIndex((m)=>{
      return title === m.title;
    })
    this.setState({
      selectedMovie: index
    })
  }

  render(){
    return (
      <div className="App d-flex flex-column">
        <Header />
        <div className="d-flex flex-row flex-fill pt-4 p-2">
          <MovieList movies={this.state.movies} updateSelectedMovie={this.updateSelectedMovie}/>
          <MovieDetails movie={this.state.movies[this.state.selectedMovie]}/>
        </div>
      </div>
    );
  }
}



export default App;
