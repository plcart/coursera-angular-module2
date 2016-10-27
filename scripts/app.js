
(function () {
    'use strict';

    angular.module("ShoppingListCheckOff", [])
        .controller('ToBuyController', ['ShoppingListCheckOffService', function (shoppingService) {
            this.items = function () {
                return shoppingService.toBuyItems;
            }
            this.buyItem = function (item) {
                shoppingService.buyItem(item);
            }

        }])
        .controller('AlreadyBoughtController', ['ShoppingListCheckOffService', function (shoppingService) {
            this.items = function () {
                return shoppingService.boughtItems;
            }
        }])
        .service('ShoppingListCheckOffService', [function () {
            this.toBuyItems = [
                { name: "Jägermeister Bottle", quantity: 1 },
                { name: "Sparkling water", quantity: 2 },
                { name: "Mint", quantity: 10 },
                { name: "Lemon", quantity: 10 },
                { name: "Ice", quantity: 2 },
                { name: "Sugar", quantity: 1 }
            ];
            this.boughtItems = [];
            this.buyItem = function (item) {
                var index = this.toBuyItems.indexOf(item);
                this.toBuyItems.splice(index,1);
                this.boughtItems.push(item);
            };
        }]);

})();