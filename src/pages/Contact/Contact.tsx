const Contact = () => {
	const name: string = 'Abinash'
	const phone: string = '+91 93456 42528'
	const email: string = 'abinashs2704@gmail.com'
	const github: string = 'https://github.com/AbiXnash/'
	const linkedin: string = 'https://in.linkedin.com/in/abinash-selvarasu'
	const instagram: string = 'https://www.instagram.com/_abixnash_/'
	return <>
		<h1>Contact</h1>
		<div>
			<div>
				<p>Name: {name}</p>
				<p>Phone: {phone}</p>
				<p>Email: <a href={`mailto:${email}`}>{email}</a></p>
			</div>
			<div>
				<p>GitHub: <a href={github} target="_blank" rel="noopener noreferrer">{github}</a></p>
				<p>LinkedIn: <a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a></p>
				<p>Instagram: <a href={instagram} target="_blank" rel="noopener noreferrer">{instagram}</a></p>
			</div>
		</div>
	</>
}

export default Contact
