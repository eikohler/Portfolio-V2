import React from 'react';
import coverImage from "../../assets/cover/profile_pic.jpg";

function About() {
  return (
    <div>
      <section className="row">
        <div className="col-3">
          <img src={coverImage} alt="profile pic" />
        </div>
        <div className='col-9 d-flex align-items-center'>
          Hi 👋 my name is Eric! I am a full stack web developer from Ontario Canada. I am interested in specializing in front-end development as I enjoy making eye-catching and easy to use websites!
        </div>
      </section>
    </div>
  );
}

export default About;