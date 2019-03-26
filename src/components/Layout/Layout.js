import React from 'react';
import Aux from '~/hoc/Aux';
import Style from './Layout.css';
import Header from './Header.js';
import Footer from './Footer.js';


const layout = ( props ) => (
    <Aux>
       <Header/>
        <main className="">
            {props.children}
        </main>
      <Footer/>
    </Aux>
);

export default layout;
