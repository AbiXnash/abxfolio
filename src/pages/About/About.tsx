import './About.scss'

const About = () => {
    return <section className="about" id="about">
        <div className="container row">
            <h1>About</h1>
            <p>
                Hey there! I'm a final-year student pretending to have my life together while juggling code, reading and deadlines.
                I specialize in AI/ML and full stack developoment -- basically, I teach machines to be smart while I figure out life.
                While I'm not coding, I'm probably reading "The Alchemist" or convincing myself that I'm a good cook.
                If you're here looking for brilliance, welcome aboard! If you're here to hire me, I'm flattered.
            </p>
            <div className="skill-container">
                <hr />
                <div className="chart">
                    <div className="part percent-95">
                        <div className="label">Java</div>
                        <div className="bar red-skill aw">
                            <div className="label">95%</div>
                        </div>
                    </div>
                    <div className="part percent-90">
                        <div className="label">Springboot</div>
                        <div className="bar green-skill aw">
                            <div className="label">90%</div>
                        </div>
                    </div>
                    <div className="part percent-85">
                        <div className="label">Golang</div>
                        <div className="bar blue-skill aw">
                            <div className="label">85%</div>
                        </div>
                    </div>
                    <div className="part percent-80">
                        <div className="label">AI/ML</div>
                        <div className="bar purple-skill aw">
                            <div className="label">90%</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
}
export default About
