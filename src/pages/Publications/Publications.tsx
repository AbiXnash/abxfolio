import './Publications.scss'

const Publications = () => {
    const publications: {
        title: string;
        year: string;
        publisher: string;
    }[] = [
            {
                title: "HATT-MLPNN: A Hybrid Approach for Cyber-Attack Detection in Industrial Control Systems Using MLPNN and Attention Mechanisms",
                year: "2024",
                publisher: "International Conference on Applications and Technologies in Information Security",
            },
            {
                title: "HG-GENAPT: A Novel Hypergraph based Genetic Programming Approach for Multi-Stage Advanced Persistent Threat Detection",
                year: "2024",
                publisher: "Journal of Transformative Technologies and Sustainable Development",
            },
            {
                title: "HGCNN-LSTM: A Data-Driven Approach for Cyber Attack Detection in Cyber-Physical Systems",
                year: "2024",
                publisher: "Springer Journals",
            },
            {
                title: "HyGAN-AD: A Hypergraph-based GAN Framework for Cyberattack Detection in Critical Infrastructures",
                year: "2024",
                publisher: "Springer LNNS Journals",
            },
            {
                title: "HyperCoar-DAM: A Robust Intrusion Detection System for Enhancing IIoT Networks Protection",
                year: "2024",
                publisher: "International Journal of Advances in Engineering and Applied Mathematics",
            }
        ];

    return <section className="publications" id='publications'>
        <div className="container row">
            <h1 className="title">Publications</h1>
            <table className="publications-table">
                <tbody>
                    {publications.map((publication, index) => {
                        return (
                            <tr key={index} className="publication-row">
                                <td className="publication-id">[<em>{index + 1}</em>]</td>
                                <td className="publication-details">
                                    <em>{publication.title}, </em>
                                    {publication.publisher}, &nbsp;
                                    {publication.year}. &nbsp;
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    </section>
}

export default Publications;
