import './Footer.css'

const Footer = () => {
	return <>
		<footer>
			<div>
				All copyrights reserved &copy; | Abinash {new Date().getFullYear()}
			</div>
			<div>
				<button className="top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>^</button>
			</div>
		</footer>
	</>
}

export default Footer
