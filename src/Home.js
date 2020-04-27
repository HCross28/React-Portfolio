import React, { Component } from "react";
import "./Home.css";
import NFC from "./images/NFC.jpg";

 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>A little bit about me...</h2>

        <div className = "aboutMe">

        <p>
            My name is Hayden Cross and I'm currently working on becoming a Full-Stack Web Developer.
            I've lived most of my life here in Southern California and enjoy various hobbies such as 
            Hiking, Backpacking, Music, Video Games and Sports. 
        </p>

        <p>
            For the past 12 years I have been working as an EMT and Paramedic. After a long career 
            in EMS full of many adventures and stories that I can now tell, it's become time to move on. 
        </p>

        <p>
            I'm currently working for a small firm as an Internet Content Manager. At this company I handle various tasks such as:
        </p>

        <div>
           <ol>
                <li>Editing podcast episodes</li>
                <li>Post those podcasts through various platforms</li> 
                <li>Compose emails to customers and prospective customers</li> 
                <li>Assist in managing social media presence</li> 
                <li>Build out classes full of video lectures</li>
                <li>Design company logos</li> 
                <li>And manage all wordpress pages/sites the company maintains</li>
            </ol>
        </div>
 
        <p>
            I have just recently completed the full-stack coding bootcamp from UCR and am continuing to 
            hone my newly acquired craft. 
        </p>

        <p>
            Please take a moment of your time to check out my projects. All of which are currently a work 
            in progress but any feedback, pointers or recommendations are welcome. 
        </p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        
       
    
        


        </div>

        <div className = "profilePic">
            <img src={NFC} className="NFCpicture" />
        </div>


      </div>
    );
  }
}
 
export default Home;