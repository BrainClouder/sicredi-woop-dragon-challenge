import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './pages/Home';
// import Profile from './pages/Profile';
// import Settings from './pages/Settings';
// import About from './pages/About';
import Login from './pages/Login';

interface IApp {
  routes: string[];
  logged: boolean;
}

const App: React.FC<IApp> = ({ routes, logged }) => {
  const pages = [<Home />, <Login />];
  return (<>
    <div style={{
      background: '#473b3f',
      height: '100vh',
      width: '100vw',
      position: 'fixed'
    }}>      
    </div>
    <div style={{position: 'absolute', width: '98vw'}}>
      <div style={{position: 'relative', margin: '0 auto'}}>
        <Router>
          <Switch>
            {routes.map((e: string, index: any) => <Route key={e}
              path={e} component={() => <div>{pages[index]}</div>}
            />)}
            {/* <Route path='/' component={() => <Redirect to={logged ? routes[0] : routes[routes.length - 1]} />} /> */}
          </Switch>
        </Router>
        </div>
      </div>

    </>
  );
}

const mapStateToProps = (state: any) => {
  const t = state;
  return {
    routes: t.routes,
    logged: t.logged,
  }
}



export default connect(mapStateToProps)(App);
