import './Home.css'
import profile from '../../assets/profile.png'

const Home = () => {
	return <section id="#home">
		<div className='container'>
			<div className='profile-view'>
				<img src={profile} alt="Abinash Selvarasu" />
			</div>
			<div className='introduction'>
				<p className='hello-world'>
					Hello World!
				</p>
				<p>
					Welcome to abxfolio, <span className='name'> I'm Abinash</span><span className='caret'>|</span>
				</p>
				<p>
					[ Name: Abinash Selvarasu, ]
				</p>
				<p>
					[ Description: Welcome to abxfolio, folks! I'm a Full Stack Developer, Deep Learning Enthusiast
					and I'm here to help you with your next project. ]
				</p>
				<p>
					<span> Deep Learning </span>
					<span> Full Stack Development </span>
					<span> Python </span>
				</p>
			</div>
		</div>
	</section>
}

export default Home
