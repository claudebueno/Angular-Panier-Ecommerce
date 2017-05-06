/* 
 Created on : 16 mars 2017, 15:53:53
 Author     : claude BUENO
 URL        : www.claudebueno.com
 */

var app = angular.module("app", []);

app.controller("BillCtrl", function ($scope) {
    $scope.articles = [
        {
            "name": "EarPods (connecteur Lightning)",
            "quantity": 0,
            "price": "49.00"
        },
        {
            "name": "Kit avec câble USB de charge",
            "quantity": 0,
            "price": "39.00"
        },
        {
            "name": "Film de protection",
            "quantity": 0,
            "price": "9.00"
        },
        {
            "name": "Etui de protection à rabat",
            "quantity": 0,
            "price": "19.00"
        }
    ];
    $scope.total = function () {
        var total = 0;
        for (var i = 0; i < $scope.articles.length; i++) {
            total += $scope.articles[i].price * $scope.articles[i].quantity;
        }
        return total;
    };
    function calculateDiscount(newValue, oldValue, scope) {
        $scope.discount = (newValue > 100) ? newValue * 0.10 : 0;
    };

    $scope.finalTotal = function () {
        return $scope.total() - $scope.discount;
    };

    $scope.$watch($scope.total, calculateDiscount);
});

