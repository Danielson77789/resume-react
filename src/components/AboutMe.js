import './AboutMe.css';

function AboutMe() {
  return (
  <div className="about-card">
    <div className='title-cont'>
      <p className='title'>About me</p>
    </div>
    <div className='info-cont'>
      <div className='test-cont'>
        <p class="about-p">
          Hello my name is Daniel Peterson, I have been writing <br/> code for two years before starting college in 2018.<br/> Since then I have managed to
          learn a lot of<br/> different languages. Some from class some on my<br/> own, I have enjoyed all the work I have put in <br/>so far and I am looking to expand
          to a new goal soon and I feel a job in web development will be the perfect adventure for me at this time. 
        </p>
        <div className='test'>
          
        </div> 
      </div>
      <p class="bottom-p">
        After my High School graduation from Dishman Hills Highschool I had already been applied to and prepared for the transition to Spokane Community College,
        I have been attending Spokane Community College since, I plan to be done with my Associative Arts degree by the end of the winter quarter of 2021.
        Next fall I plan on transferring to Eastern Washington University where I will secure my<br/> Bachelor's Degree in Computer Science. 
      </p> 
    </div>
  </div>
  );
}

export default AboutMe;
