var ForumDispatcher = require('../dispatcher/ForumDispatcher');
var ForumConstants = require('../constants/ForumConstants');
var ForumActions={
    markAnswerCorrect:function (id) {
        ForumDispatcher.dispatch({
            actionType:ForumConstants.FORUM_ANSWER_MARKED_CORRECT,
            id:id
        });
    },
    addNewAnswer:function (answerText) {
        ForumDispatcher.dispatch({
            actionType:ForumConstants.FORUM_ANSWER_ADDED,
            newAnswer:answerText
        });
    }
}

module.exports = ForumActions;