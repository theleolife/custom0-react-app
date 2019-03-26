import React from 'react'

const InputBar = (props) => {
  return (
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
                              ref={props.ref}
                              change={props.change}
                            />
                            <span className="icon is-medium is-left">
                                <i className="fa fa-search"></i>
                            </span>
                  </div>
        </div>
    </div>
  </section>

  );
}

export default InputBar