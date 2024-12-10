import './About.scss'

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
			<div className="skill-container">
				<h1>Skill Chart</h1>
				<div className="chart">
					<div className="part percent-95">
						<div className="label">Python</div>
						<div className="bar red-skill aw">
								<div className="label">95%</div>
						</div>
					</div>
					<div className="part percent-85">
						<div className="label">JavaScript</div>
						<div className="bar blue-skill aw">
								<div className="label">85%</div>
						</div>
					</div>
					<div className="part percent-90">
						<div className="label">AI/ML</div>
						<div className="bar purple-skill aw">
								<div className="label">90%</div>
						</div>
					</div>
					<div className="part percent-85">
						<div className="label">DSA</div>
						<div className="bar green-skill aw">
								<div className="label">85%</div>
						</div>
					</div>
					<div className="part percent-75">
						<div className="label">NodeJS</div>
						<div className="bar red-skill aw">
								<div className="label">75%</div>
						</div>
					</div>
					<div className="part percent-85">
						<div className="label">ReactJS</div>
						<div className="bar blue-skill aw">
								<div className="label">85%</div>
						</div>
					</div>
					<div className="part percent-70">
						<div className="label">MongoDB</div>
						<div className="bar green-skill aw">
								<div className="label">70%</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</section>
}
export default About
