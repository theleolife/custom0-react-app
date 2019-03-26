import React, { Component } from 'react';
import axios from 'axios'
import Aux from '~/hoc/Aux'
import { BASE_API } from '~/services/api'

class Company extends Component {
    state = {
        company: null
      }

    //   componentDidMount () {
    //     const { match: { id } } = this.props;
    //     axios.get(`${BASE_API}/company/${id}`)
    //       .then(({ data }) => {
    //         const company = data.data;
    //             this.setState({
    //                  company,
    //                  isLoading: false
    //               });
    //                console.log(data);
    //             })
    //       }
    
    //  componentDidMount() {
    //     // const { match: { params } } = this.props;
    //     const company = (await axios.get(`${BASE_API}/company/`)).data;
    //     this.setState({
    //         company,
    //     });
    //   }

      render() {
        return (
        <Aux>
        <div className="container">
            <div className="hero">
              <div className="jumbotron col-12">
                <h1 className="display-3">{Company.name}</h1>
                <p className="lead">{Company.website}</p>
                
              </div>
            </div>
          </div>
        </Aux>
          
        )
      }

}


export default Company;

