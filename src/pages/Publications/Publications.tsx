const Publications = () => {
	const publications: {
		id: number;
		title: string;
		first_author: string;
		authors: string[];
		corresponding_author: string;
		year: string;
		publisher: string;
		status: ["Published" | "Accepted" | "Submitted" | "In Preparation"];
    link: string;
	}[] = [
			{
				id: 1,
				title: "HATT-MLPNN: A Hybrid Approach for Cyber-Attack Detection in Industrial Control Systems Using MLPNN and Attention Mechanisms",
				first_author: "Abinash S",
				authors: ["Shankar Sriram V S", "Kannan Krithivasan"],
				corresponding_author: "Priyanga S",
			year: "2024",
				publisher: "International Conference on Applications and Technologies in Information Security",
				status: ["Published"],
				link: "https://example.com"
			},
			{
				id: 2,
				title: "HATT-MLPNN: A Hybrid Approach for Cyber-Attack Detection in Industrial Control Systems Using MLPNN and Attention Mechanisms",
				first_author: "Abinash S",
				authors: ["Abinash S", "Saravanan S", "Saravanan S"],
				corresponding_author: "Abinash S",
				year: "2021",
				publisher: "IEEE",
				status: ["Published"],
				link: "https://example.com"
			}
	]
	return <>
		<h1>Publications</h1>
		<table>
			<tbody>
				{publications.map((publication, index) => {
					return <tr key={index}>
						<td>[<em>{publication.id}</em>]</td>
						<td>
							{ publication.first_author },
							{
								publication.authors.map((author, key) => {
									return <span key={key}>{author},</span>
								})
							},
							<em> <q>{ publication.title }</q> </em>

						</td>
					</tr>
				})}
			</tbody>
		</table>
		{/* {publications.map((publication, index) => {
			return <div key={index}>
				<p>{publication.title}</p>
				<p>Authors: {publication.authors}</p>
				<p>Year: {publication.year}</p>
				<a href={publication.link}>Link</a>
			</div>
		})} */}
	</>
}

export default Publications
