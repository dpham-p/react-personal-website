import React from 'react'

const AboutSection = () => {
    return (
        <span className="anchor" id="about"></span>
        <section className="story">
          <div className="card">
            <div className="story-description">
              <h1>Hello, I'm Donald!</h1>
              <p>
                I was born and raised in Lincoln, Nebraska. I graduated from the
                University of Nebraska - Lincoln with a degree in Electrical
                Engineering. Worked as a controls engineer for about 3 years
                programming PLCs (Programmable Logic Controllers) and designing
                control systems.
              </p>
              <p>
                I have always enjoyed learning how things worked and solving
                problems as a controls engineer but I did not enjoy the
                traveling that it required of me. This drove me to want to
                pursue a career in software development. I am currently
                self-learning through online courses and creating projects.
              </p>
              <p>
                In my free time, I enjoy some physical activities such as
                running and playing tennis. Currently, I have ran 4 half marathons and 1 full marathon.
              </p>
            </div>
            <div className="profile">
              <img src="./img/me.JPG" alt="Donald" />
            </div>
          </div>
        </section>
    )
}

export default AboutSection
