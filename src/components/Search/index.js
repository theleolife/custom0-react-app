import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'
import Aux from '~/hoc/Aux'
import { BASE_API } from '~/services/api'
// import company from '~/Company/Company'

class Search extends Component {
  state = {
    query: '',
    results: []
  }

componentDidMount () {
  axios.get(`${BASE_API}/company?q=${this.state.query}`)
    .then(({ data }) => {
      const results = data.data;
          this.setState({
               results,
               isLoading: false
            });
             console.log(data);
          })
    }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 3) {
        if (this.state.query.length % 2 === 0) {
          this.componentDidMount()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render () {
    const { error, query, results } = this.state;

    return (
        <Aux>
            <section className="hero is-info">
              <div className="hero-body">
                     <div className="content column is-8 is-offset-2">
                              <h1 className="title">
                                 Search and share your disappointment
                              </h1>
                                  <div className="control has-icons-left has-icons-right">
                                      <input
                                        className="input is-large"
                                        type="search"
                                        placeholder="Search for..."
                                        ref={input => this.search = input}
                                        onChange={this.handleInputChange}
                                      />
                                      <span className="icon is-medium is-left">
                                          <i className="fa fa-search"></i>
                                      </span>
                                  </div>
                  </div>
              </div>
            </section>

                { this.state.results ? this.state.results.map(result =>
       
                    <div className="">
                       <Link to={`/company/${result.id}`}>
                            <div className="column is-8 is-offset-2">
                                  <div className="box"
                                        key={result.id}
                                        value={result.id}
                                      >

                                    <article class="media">
                                      <figure class="media-left">
                                        <p class="image is-64x64">
                                                            <img className="image is-left"
                                                                  src={`https://logo.clearbit.com/${result.webSite}`}
                                                                  width="50" margin-top="2px"
                                                                  onError={ (e) => {e.target.onerror = null; e.target.src=`https://happyling.de/images/icon-company.svg`}}
                                                              />
                                        </p>
                                      </figure>
                                      <div class="media-content">
                                        <div class="content">
                                                            <a className="ext-link"
                                                                  target="_blank"
                                                                  href=""
                                                                  >
                                                                  {result.name}
                                                                </a>
                                              
                                                        
                                        </div>
                                        <div class="content">
                                    
                                              
                                                                <a className="ext-link"
                                                                  target="_blank"
                                                                  href=""
                                                                  >
                                                                  {result.webSite}
                                                                </a>
                                        </div>
                                    
                                      </div>
                                      <div class="media-right">
                                        <button class="button is-info">Complain</button>
                                      </div>
                                    </article>

                                      
                  
                                  </div>
                              </div>
                       </Link>
                    </div>
                                ) : null }
          
     
        
        </Aux>

    )
  }
}

export default Search;


