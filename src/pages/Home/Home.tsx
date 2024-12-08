import './Home.css'
import profile from '../../assets/profile.png'

const Home = () => {
	return <section id="#home" className='home'>
		<div className='container column'>
			<div className='profile-view'>
				<img src={profile} alt="Abinash Selvarasu" />
			</div>
			<div className='introduction'>
				<p className='hello-world'>
					Hello World!
				</p>
				<p className='welcome-text'>
					Welcome to abxfolio,&nbsp;<span className='name'> I'm Abinash<span className='caret'></span></span>
				</p>
				<p>
					[ Name: Abinash Selvarasu, ]
				</p>
				<p>
					[ Description: Welcome to my abxfolio, folks! I'm a Full Stack Developer, Deep Learning Enthusiast
					and I'm here to help you with your next project. ]
				</p>
				<p>
					<span className='skill1'> Deep Learning </span>
					<span className='skill2'> Full Stack Development </span>
					<span className='skill3'> Python </span>
				</p>
			</div>
		</div>
	</section>
}

export default Home
