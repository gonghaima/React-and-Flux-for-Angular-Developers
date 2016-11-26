var Forum = React.createClass({

    getInitialState: function () {

        return {
            allAnswers: ForumStore.getAnswers()
        }

    },

    componentDidMount:function(){
        ForumStore.addChangeListener(this._onChange);
    },

    componentWillMount:function(){
        ForumStore.removeListener(this._onChange);
    },

    _onAddAnswer: function (answerText) {
        ForumDispatcher.dispatch({
            actionType: 'FORUM_ANSWER_ADDED',
            newAnswer: answerText
        });
    },

    _onChange: function () {
        this.setState({
            allAnswers: ForumStore.getAnswers()
        });
    },

    render: function () {
        return (
            <div>
                <ForumHeader />

                <div className="container">
                    <ForumQuestion />
                    <hr />
                    <ForumAnswers allAnswers={this.state.allAnswers} />
                    <hr />
                    <h4>Add an answer</h4>
                    <ForumAddAnswerBox onAddAnswer={this._onAddAnswer} />
                </div>
            </div>
        )
    }

});