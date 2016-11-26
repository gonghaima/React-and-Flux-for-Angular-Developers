(function() {
    angular
        .module('Forum')
        .controller('AnswersController', AnswersController);

    AnswersController.$inject = ['AnswerService'];

    function AnswersController(AnswerService) {
        this.answers = AnswerService.answerData;

        this.newAnswerText = '';

        this.markAsCorrect = function(id) {
            for (key in this.answers) {
                this.answers[key].correct = false;
            }
            
            this.answers[id].correct = true;
        }

        this.addAnswer = function() {
            this.answers[Object.keys(this.answers).length + 1] = {
                body: this.newAnswerText,
                correct: false
            };
        }
    }
}());