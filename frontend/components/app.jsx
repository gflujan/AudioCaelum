import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavbarContainer from './navbar/navbar_container';
import PlayerContainer from './player/player_container';
import SplashPageContainer from './splash_page/splash_page_container';
import DiscoverPageContainer from './discover_page/discover_page_container';
import UploadPageContainer from './upload_page/upload_page_container';

const mapStateToProps = (state) => {
  return ({
    loggedIn: Boolean(state.session.id),
  });
};
const App = () => {
  let renderPlayer;
  // if (playerIsActive) {
  //   renderPlayer = <PlayerContainer />;
  // }

  return (
    <div>
      <Switch>
        <ProtectedRoute path="/discover" component={DiscoverPageContainer} />
        <ProtectedRoute path="/upload" component={UploadPageContainer} />
        {/*<ProtectedRoute path="/you" component={YouPageContainer} />*/}
        <AuthRoute path="/" component={SplashPageContainer} />
      </Switch>
      {/*renderPlayer*/}
    </div>
  );
};

const AppConnected = connect(mapStateToProps)(App);
export default AppConnected;
