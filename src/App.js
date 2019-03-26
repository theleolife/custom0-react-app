import React, { Component } from 'react'
import Layout from '~/components/Layout/Layout'
import Search from '~/components/Search/index'
import Company from '~/components/Company/Company'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Layout>
              <Search>
                <Company/>
               </Search>
              
          </Layout>          
      </div>
    );
  }
}

export default App;
