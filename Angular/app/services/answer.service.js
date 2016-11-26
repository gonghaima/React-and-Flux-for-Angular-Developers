(function() {
    angular
        .module('Forum')
        .service('AnswerService', AnswerService);

    function AnswerService() {
        var self = this;
        self.answerData = {
                "1": {
                    body: "Isn't that about time travel?",
                    correct: false
                },
                "2": {
                    body: "React and Flux are a tool and methodologies for building the front end of web applications.",
                    correct: false
                },
                "3": {
                    body: "React is a synonym for 'respond'",
                    correct: false
                }
        };
    }
}());