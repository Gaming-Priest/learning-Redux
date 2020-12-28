import React from "react";
import Header from './components/display/header'
import Layout from './components/display/layout'
import Items from './components/display/items'

function App() {

  return (
    <React.Fragment>
      <Layout>
        <Header />
        <Items />
      </Layout>
    </React.Fragment>
  );
}

export default App;