import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })

    }

    return (
      <section id="resume">

      <div id='skill'  className="row work">
        <div className="three columns header-col">
           <h1><span>Skills</span></h1>
        </div>

        <div className="three columns">
          <h4 class="skills">Languages</h4>
          <br />
          <p class="skillicons">
          <i class="devicon-javascript-plain"></i>
          <i class="devicon-python-plain-wordmark"></i>
          <i class="devicon-ruby-plain-wordmark"></i>
          </p>
        </div>
        <div className="three columns">
          <h4 class="skills">Framework/Libraries</h4>
          <br />
          <p class="skillicons">
          <i class="devicon-react-original-wordmark"></i>
          <i class="devicon-rails-plain-wordmark"></i>
          <i class="devicon-bootstrap-plain-wordmark"></i>
          </p>
        </div>
        <div className="three columns">
          <h4 class="skills">Others</h4>
          <br />
          <p class="skillicons">
          <i class="devicon-html5-plain-wordmark"></i>
          <i class="devicon-css3-plain-wordmark"></i>
          <i class="devicon-postgresql-plain-wordmark"></i>
          </p>
        </div>
      </div>

      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>


    <div className="row education">
       <div className="three columns header-col">
          <h1><span>Education</span></h1>
       </div>

       <div className="nine columns main-col">
          <div className="row item">
             <div className="twelve columns">
               {education}
             </div>
          </div>
       </div>
    </div>

   </section>
    );
  }
}

export default Resume;
