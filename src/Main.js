import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Portfolio from "./Portfolio";
  import Contact from "./Contact";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div className = "wrapper">
                <div className="header">
                    <div className="title">
                        <h1>Hayden's Portfolio</h1>
                    </div>

                    <div className="nav">
                        <ul className = "navList">
                            <li className = "navListItem"><NavLink exact to="/">Home</NavLink></li>
                            <li className = "navListItem"><NavLink exact to="/portfolio">Portfolio</NavLink></li>
                            <li className = "navListItem"><NavLink exact to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>

                </div>

                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/portfolio" component={Portfolio}/>
                    <Route exact path="/contact" component={Contact}/>
                </div>

                {/* <footer>Hayden Cross 2020</footer> */}

            </div>
            
            <footer>Hayden Cross 2020</footer>

        </HashRouter>
    );
  }
}
 
export default Main;