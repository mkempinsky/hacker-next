import {gray, blue} from '../lib/styles';
import Comment from './Comment';
const Comments = ({comments}) => {
    return (
        <div className="comment-list">
            {comments.map(comment => {
                return (
                    <div className="comment" key={comment.id}>
                        <div className="comment-details">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: `<i class="fas fa-user" style="padding-right: 5px"></i> ${
                                        comment.user
                                    }`
                                }}
                            />
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: `<i class="fas fa-clock" style="padding-right: 5px"></i> ${
                                        comment.time_ago
                                    }`
                                }}
                            />
                        </div>
                        <Comment comment={comment} />
                    </div>
                );
            })}
            <style jsx>
                {`
                    .comment-list {
                        max-width: 100%;
                    }
                    .comment {
                        border: 1px solid ${gray(600)};
                        background: #fff;
                        margin: 10px 0;
                        font-size: 14px;
                        padding-bottom: 15px;
                        font-weight: normal;
                        word-wrap: break-word;
                    }
                    .comment-details {
                        background: ${blue()};
                        padding: 5px 15px;
                        color: #fff;
                        font-weight: bold;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            </style>
        </div>
    );
};

export default Comments;
