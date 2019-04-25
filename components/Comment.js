import {gray, blue} from '../lib/styles';

const Comment = ({comment}) => {
    return (
        <div key={comment.id} className="comment">
            <div
                dangerouslySetInnerHTML={{__html: comment.content}}
                style={{padding: '5px 15px'}}
            />
            {comment.comments && (
                <div className="nested-comments">
                    {comment.comments.map(nestedComment => {
                        return (
                            <>
                                <div
                                    className="user"
                                    dangerouslySetInnerHTML={{
                                        __html: `${nestedComment.user}:`
                                    }}
                                />

                                <Comment key={nestedComment.id} comment={nestedComment} />
                            </>
                        );
                    })}
                </div>
            )}

            <style jsx>
                {`
                    .nested-comments {
                        border-left: 1px solid ${gray(600)};
                        margin-left: 1em;
                        font-size: 12px;
                        word-wrap: break-word;
                    }
                    .user {
                        color: ${blue()};
                        margin-left: 5px;
                        font-weight: bold;
                    }
                `}
            </style>
        </div>
    );
};
export default Comment;
