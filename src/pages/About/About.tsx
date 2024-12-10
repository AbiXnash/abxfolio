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
			<div className="circular_progress">
  <div className="responsive-container-block big-container">
    <div className="responsive-container-block container">
      <p className="text-blk section-headtext">
        Lorem ipsum dolor sit amet
      </p>
      <p className="text-blk section-subheadtext">
        Sit amet massa vitae tortor condimentum lacinia quis vel eros. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim.
      </p>
      <div className="responsive-container-block">
        <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12">
          <div className="card">
            <div className="circlechart circle-chart container-block" data-percentage="95">
            </div>
            <p className="text-blk card-head">
              Lorem ipsum
            </p>
            <p className="text-blk card-text">
              Lorem ipsum dolor sit amet, consectetur adip iscing elit,
            </p>
          </div>
        </div>
        <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12">
          <div className="card">
            <div className="circlechart circle-chart container-block" data-percentage="30">
            </div>
            <p className="text-blk card-head">
              Lorem ipsum
            </p>
            <p className="text-blk card-text">
              Lorem ipsum dolor sit amet, consectetur adip iscing elit,
            </p>
          </div>
        </div>
        <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12">
          <div className="card">
            <div className="circlechart circle-chart container-block" data-percentage="60">
            </div>
            <p className="text-blk card-head">
              Lorem ipsum
            </p>
            <p className="text-blk card-text">
              Lorem ipsum dolor sit amet, consectetur adip iscing elit,
            </p>
          </div>
        </div>
        <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12">
          <div className="card">
            <div className="circlechart circle-chart container-block" data-percentage="-50">
            </div>
            <p className="text-blk card-head">
              Lorem ipsum
            </p>
            <p className="text-blk card-text">
              Lorem ipsum dolor sit amet, consectetur adip iscing elit,
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
		</div>
	</section>
}
export default About
