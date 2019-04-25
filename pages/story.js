import Layout from '../components/Layout';
import {gray} from '../lib/styles';
import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Comments from '../components/Comments';
class Story extends React.Component {
    static async getInitialProps({req, res, query}) {
        let story;
        const storyId = query.id;
        try {
            const response = await fetch(
                `https://node-hnapi.herokuapp.com/item/${storyId}`
            );
            story = await response.json();
        } catch (err) {
            console.warn(err);
            story = null;
        }

        return {story};
    }
    render() {
        const {story} = this.props;
        if (!story) return <Error />;
        console.log(story);
        return (
            <Layout>
                <a href={story.url} target="_blank">
                    <h2>{story.title}</h2>
                </a>
                <div className="story-details">
                    <div>{story.points} points</div>
                    <div>{story.comments_count} comments</div>
                    <div>{story.time_ago}</div>
                </div>
                {story.comments && Array.isArray(story.comments) ? (
                    <Comments comments={story.comments} />
                ) : (
                    <div>
                        <h3>No Comments</h3>
                    </div>
                )}
                <style jsx>{`
                    .story-details {
                        display: flex;
                        justify-content: flex-start;
                        border-bottom: 2px solid ${gray(600)};
                    }
                    .story-details > div {
                        margin-right: 15px;
                        padding: 5px 0;
                        font-size: 14px;
                        color: ${gray(800)};
                    }
                `}</style>
            </Layout>
        );
    }
}
export default Story;
