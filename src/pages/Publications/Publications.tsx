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
		link: string | null;
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
			title: "HGCNN-LSTM: A Data-Driven Approach for Cyber Attack Detection in Cyber-Physical Systems",
			first_author: "Abinash S",
			authors: ["Srivatvan N", "Hemachandran S K"],
			corresponding_author: "Priyanga S",
			year: "2024",
			publisher: "2024",
			status: ["Accepted"],
			link: null
		},
		{
			id: 3,
			title: "HyperCoar-DAM: A Robust Intrusion Detection System for Enhancing IIoT Networks Protection",
			first_author: "Priyanga S",
			authors: ["Abinash S", "Srivatvan N", "Hemachandran S K", "Kanan Krithivasan"],
			corresponding_author: "Shankar Sriram V S",
			year: "2024",
			publisher: "International Journal of Advances in Engineering and Applied Mathematics",
			status: ["Accepted"],
			link: null
		}
	];

	const getStatusClass = (status: string) => {
		switch (status) {
			case "Published":
				return "green";
			case "Accepted":
			case "Submitted":
				return "blue";
			default:
				return "grey";
		}
	};

	return <>
		<h1>Publications</h1>
		<table>
			<tbody>
				{publications.map((publication, index) => {
					return <tr key={index}>
						<td>[<em>{publication.id}</em>]</td>
						<td>
							{publication.first_author.includes("Abinash") ? <strong>{publication.first_author}</strong> : publication.first_author},&nbsp;
							{
								publication.authors.map((author, key) => {
									return <span key={key}>{author.includes("Abinash") ? <strong>{author}</strong> : author}, </span>
								})
							}
							<em>{publication.title}, </em>
							{publication.publisher}, &nbsp;
							{publication.year}. &nbsp;
							<span className={getStatusClass(publication.status[0])}>{publication.status}</span>
							{publication.link && <a href={publication.link} target="_blank" rel="noopener noreferrer"> [Link] </a>}
						</td>
					</tr>
				})}
			</tbody>
		</table>
	</>
}

export default Publications;
