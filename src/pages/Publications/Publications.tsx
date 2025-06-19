import arrow from "../../assets/arrow.svg";
import './Publications.scss'

const Publications = () => {
    const publications: {
        id: number;
        title: string;
        year: string;
        publisher: string;
    }[] = [
            {
                id: 1,
                title: "HATT-MLPNN: A Hybrid Approach for Cyber-Attack Detection in Industrial Control Systems Using MLPNN and Attention Mechanisms",
                year: "2024",
                publisher: "International Conference on Applications and Technologies in Information Security",
            },
            {
                id: 2,
                title: "HGCNN-LSTM: A Data-Driven Approach for Cyber Attack Detection in Cyber-Physical Systems",
                year: "2024",
                publisher: "Springer Journals",
            },
            {
                id: 3,
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
                                <td className="publication-id">[<em>{publication.id}</em>]</td>
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
