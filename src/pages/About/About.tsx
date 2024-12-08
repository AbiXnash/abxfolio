import './About.css'

const About = () => {
	return <section className="about" id="about">
		<div className="container row">
			<h1>About</h1>
			<p>
				Hey there! I'm a final-year student pretending to have my life together while juggling code, cofee and deadlines.
				I specialize in AI/ML and full stack developoment -- basically, I teach machines to be smart while I figure out life.
				While I'm not coding, I'm probably reading "The Alchemist" or convincing myself that I'm a good cook.
				If you're here looking for brilliance, welcome aboard! If you're here to hire me, I'm flattered.
			</p>
			<div className="skills row">
			<h1>Skillset</h1>
			<ul className="skills-list">
				<li>JavaScript - 90%</li>
				<li>React - 85%</li>
				<li>Node.js - 80%</li>
				<li>Python - 75%</li>
				<li>Machine Learning - 70%</li>
			</ul>
			</div>
		</div>
	</section>
}
export default About
