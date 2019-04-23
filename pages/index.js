import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import StoryList from '../components/StoryList';
import Layout from '../components/Layout';
import Link from 'next/link';
class Index extends React.Component {
    static async getInitialProps({res, req, query}) {
        let data;
        let page;
        try {
            page = Number(query.page) || 1;
            const response = await fetch(
                `https://node-hnapi.herokuapp.com/news?page=${page}`
            );
            data = await response.json();
        } catch (e) {
            console.warn(e);
            data = [];
        }

        return {data, page};
    }
    render() {
        const {data, page} = this.props;
        if (data.length === 0) return <Error statusCode={503} />;
        return (
            <Layout title="Hacker News">
                <div className="stories">
                    <StoryList stories={data} />
                </div>
                <div className="pagination">
                    {page > 1 && (
                        <Link as="/" href={`/?page=${page - 1}`}>
                            <a>
                                <i className="fas fa-arrow-circle-left" /> Previous Page
                            </a>
                        </Link>
                    )}
                    <h3>{page}</h3>
                    <Link as="/" href={`/?page=${page + 1}`}>
                        <a>
                            Next Page <i className="fas fa-arrow-circle-right" />
                        </a>
                    </Link>
                </div>

                <style jsx>
                    {`
                        .stories {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                        .pagination {
                            display: flex;
                            align-items: center;
                            justify-content: space-around;
                        }
                    `}
                </style>
            </Layout>
        );
    }
}
export default Index;
