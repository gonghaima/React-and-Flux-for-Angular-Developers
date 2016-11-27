var React = require('react');
var ForumHeader = require('./ForumHeader.react');
var ForumQuestion = require('./ForumQuestion.react');
var ForumAnswers = require('./ForumAnswers.react');
var ForumAddAnswerBox = require('./ForumAddAnswerBox.react');
var ForumActions = require('../actions/ForumActions');
var ForumStore = require('../stores/ForumStore');

var Forum = React.createClass({

    getInitialState: function () {

        return {
            allAnswers: ForumStore.getAnswers()
        }

    },

    componentDidMount:function(){
        ForumStore.addChangeListener(this._onChange);
    },

    componentWillUnmount:function(){
        ForumStore.removeListener(this._onChange);
    },

    _onAddAnswer: function (answerText) {
        // ForumDispatcher.dispatch({
        //     actionType: 'FORUM_ANSWER_ADDED',
        //     newAnswer: answerText
        // });
        ForumActions.addNewAnswer(answerText);
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


module.exports = Forum;