const Footer = () => {
	return <>
		<footer>
			<div>
				All copyrights reserved &copy; | Abinash {new Date().getFullYear()}
			</div>
			<div>
				<button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top</button>
			</div>
		</footer>
	</>
}

export default Footer
