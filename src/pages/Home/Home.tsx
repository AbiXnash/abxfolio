import './Home.scss'
import profile from '../../assets/profile.png'

const Home = () => {
    return <section id="home" className='home'>
        <div className='container column'>
            <div className='profile-view'>
                <img src={profile} alt="Abinash Selvarasu" />
            </div>
            <div className='introduction'>
                <h1 className='hello-world'>
                    Hello World!
                </h1>
                <p className='welcome-text'>
                    Welcome to abxfolio,&nbsp;<span className='name'> I'm Abinash<span className='caret'></span></span>
                </p>
                <p>
                    [ Description: Full Stack Developer
                    <span> <a href='https://www.mindgate.solutions/' className='at-company'>@Mindgate</a> </span> — crafting clean code, scalable systems, and intelligent solutions for the real world.
                    I'm here to help you with your next project. ]
                </p>
                <p>
                    <span className='skill1'> Java </span>
                    <span className='skill2'> Spring Boot </span>
                    <span className='skill3'> Golang </span>
                    <span className='skill4'> PostgreSQL </span>
                </p>
            </div>
        </div>
    </section>
}

export default Home
