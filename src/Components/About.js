import React, { Component } from 'react'
import resume from './Resume.pdf'

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="four columns">
            <img id="profile_pic" src={profilepic} alt="Haizhou Guo Pic" />
         </div>
         <div className="eight columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <a href={resume} download="Haizhou Guo Resume">
                     <button type="button" class="btn btn-primary btn-lg">
                        Download Resume
                     </button>
                  </a>
               </div>

            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
