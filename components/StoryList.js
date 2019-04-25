import {gray, blue} from '../lib/styles';
import Link from 'next/link';

const StoryList = props => {
    const {stories} = props;
    return (
        <div>
            {stories.map(story => {
                return (
                    <div className="story" key={story.id}>
                        <a href={story.url} target="_blank">
                            <h3 dangerouslySetInnerHTML={{__html: story.title}} />
                        </a>
                        <div className="story-details">
                            <p>{story.points || 0} Points</p>
                            <Link
                                as={`story/${story.id}/comments`}
                                href={`/story?id=${story.id}`}>
                                <a>{story.comments_count || 0} Comments</a>
                            </Link>
                        </div>
                    </div>
                );
            })}
            <style jsx>
                {`
                    h3 {
                        margin: 0 0 10px 0;
                    }
                    p {
                        margin: 0;
                    }

                    .story {
                        background: #fff;
                        color: ${gray(800)};
                        padding: 15px;
                        margin-bottom: 15px;
                        border: 1px solid ${gray(600)};
                    }
                    .story-details {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            </style>
        </div>
    );
};
export default StoryList;
