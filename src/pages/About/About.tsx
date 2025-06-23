import './About.scss'

const About = () => {
    return <section className="about" id="about">
        <div className="container row">
            <h1>About</h1>
            <p>
                Hey there! I'm navigating life one line of code at a time — part-time realist, full-time dreamer.
                I specialize in AI/ML and full-stack development: teaching machines to think while I figure out how to adult.
                When I’m not debugging, I’m probably reading <em>The Alchemist</em> or experimenting in the kitchen with questionable confidence.
                If you’re here for brilliance — buckle up. If you’re here to hire me — I'm already flattered.
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
                        <div className="label">PostgreSQL</div>
                        <div className="bar mod-blue-skill aw">
                            <div className="label">80%</div>
                        </div>
                    </div>
                    <div className="part percent-70">
                        <div className="label">AI/ML</div>
                        <div className="bar purple-skill aw">
                            <div className="label">70%</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section >
}
export default About
