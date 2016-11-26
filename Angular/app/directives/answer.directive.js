(function() {
    angular
        .module('Forum')
        .directive('answer', AnswerDirective);

    function AnswerDirective() {
        return { 
            templateUrl: 'app/directives/answer.directive.html',
            restrict: 'E'
        }
    }
}());