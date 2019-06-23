import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

class CommentDetailContent {
    author;
    timeStamp;
    text;
    avatarUrl;
    constructor (author, timeStamp, text, avatarUrl) {
        this.author = author;
        this.timeStamp = timeStamp;
        this.text = text;
        this.avatarUrl = avatarUrl;
    }
}

const App = () => {
    const commDetail1 = new CommentDetailContent(
                            faker.name.firstName(), 'Today at 6:00 PM',
                            'Nice blog post!!!!', faker.image.avatar()
                        );
    const commDetail2 = new CommentDetailContent(
                            faker.name.firstName(), 'Today at 8:00 PM',
                            'this is good!!!!', faker.image.avatar()
                        );
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail detail={commDetail1}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail detail={commDetail2}/>
            </ApprovalCard>
        </div>

    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
