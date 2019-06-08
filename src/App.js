import React from 'react';

import Layout from './Components/Layout/Layout';
import BurgerBuild from './Container/BurgerBuild/BurgerBuild';

class App extends React.Component {
  render(){
    return (
      <div>
        <Layout>
          <BurgerBuild />
        </Layout>
      </div>
    );
  };
}

export default App;
