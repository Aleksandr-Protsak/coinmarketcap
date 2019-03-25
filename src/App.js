import React, {Component} from 'react';
import './css/style.css';

import Header from './components/app-header/header';
import Sidebar from './components/app-sidebar/sidebar';
import Routerviews from './Routerviews';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <div className="main">
          <Routerviews />
        </div>
      </div>
    );
  }
}

export default App;
