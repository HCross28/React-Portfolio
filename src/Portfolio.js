import React, { Component } from "react";
import Kitchen from "./images/eclecticKitchen.png";
import Quiz from "./images/CodeQuiz.png";
import Weather from "./images/Weather.png";
import Planner from "./images/DayPlanner.png";
import "./Portfolio.css";
 
class Portfolio extends Component {
  render() {
    return (
        <div>
            <h2>Portfolio</h2>
                <section>
                    <div className = "card">
                        <div className ="projects">
                            <img src={Kitchen} className="kitchen" /> 
                            <h3><a href= "https://fguzmanrs.github.io/eclecticKitchen/" target = "_blank">Eclectic Kitchen </a></h3>
                            <a href="https://github.com/fguzmanrs/eclecticKitchen" target = "_blank">Github Repository</a>
                        </div>
                    </div> 

                    <div class = "card">
                        <div class="projects">
                            <img src={Quiz} className="quiz" />
                            <h3><a href= "https://hcross28.github.io/Unit-04-Code-Quiz/" target = "_blank">Code Quiz</a></h3>
                            <a href="https://github.com/HCross28/Unit-04-Code-Quiz" target = "_blank">Github Repository</a>
                        </div>
                    </div>    


                    <div class = "card">
                        <div class="projects">
                            <img src={Weather} className="quiz" /> 
                            <h3><a href= "https://hcross28.github.io/Unit-6-Weather/" target = "_blank">Weather API</a></h3>
                            <a href="https://github.com/HCross28/Unit-6-Weather" target = "_blank">Github Repository</a>
                        </div>
                    </div>

                    <div class = "card">
                        <div class="projects">
                            <img src={Planner} className="quiz" />
                            <h3><a href= "https://hcross28.github.io/Unit-5-Day-Planner/" target = "_blank">Day Planner</a></h3>
                            <a href="https://github.com/HCross28/Unit-5-Day-Planner" target = "_blank">Github Repository</a>
                        </div>
                    </div>
                </section>



        </div>
    );
  }
}
 
export default Portfolio;