import {gray, blue} from '../lib/styles';
const Comments = ({comments}) => {
    return (
        <div>
            {comments.map(comment => {
                return (
                    <div key={comment.id} className="comment">
                        <div
                            dangerouslySetInnerHTML={{__html: comment.content}}
                            style={{padding: '5px 15px'}}
                        />
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
                    </div>
                );
            })}
            <style jsx>
                {`
                    .comment {
                        border: 1px solid ${gray()};
                        background: #fff;
                        margin: 10px 0;
                        font-size: 14px;
                        font-weight: normal;
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
