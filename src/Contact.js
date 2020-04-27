import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact Information</h2>
        <ol>
            <li><b>Phone: </b> (562) 706-4345</li>
            <li><b>LinkedIn: </b> <a href= "https://www.linkedin.com/in/hayden-cross-86803a19a/" target = "_blank"> Profile Page</a> </li> 
            <li><b>GitHub: </b><a href= "https://github.com/HCross28" target = "_blank"> HCross28</a></li>
            <li><b>email: </b><a href="mailto:email@example.com">HaydenLCross@gmail.com</a></li>
        </ol>
      </div>
    );
  }
}
 
export default Contact;