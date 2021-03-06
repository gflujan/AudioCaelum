import { connect } from 'react-redux';
import { loginAC } from '../../actions/session_actions';
import {
  playSongAC,
  requestAllSongsAC
} from '../../actions/song_actions';
import SplashPage from './splash_page';

const mapStateToProps = ({ entities, session, errors }) => {
  return ({
    allSongs: Object.values(entities.songs),
    loggedIn: Boolean(session.id),
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    login: (user) => dispatch(loginAC(user)),
    requestAllSongs: () => dispatch(requestAllSongsAC()),
    playSong: (song) => dispatch(playSongAC(song)),
  });
};

const SplashPageContainer =
  connect(mapStateToProps, mapDispatchToProps)(SplashPage);

export default SplashPageContainer;
