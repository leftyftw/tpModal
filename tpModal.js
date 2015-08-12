/**
 * Created by jaime on 8/12/15.
 */
angular.module('torresPub', ['ui.bootstrap']);
angular.module('torresPub').controller('tpModalInstanceController', function ($scope, $modalInstance, modalContent, modalTitle, showCancel, okayLabel, cancelLabel) {

    $scope.modalContent = modalContent;
    $scope.modalTitle = modalTitle;
    $scope.showCancel = showCancel;
    $scope.okayLabel = okayLabel;
    $scope.cancelLabel = cancelLabel;
    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss();
    }
});

angular.module('torresPub').factory('tpModal', function ($modal) {

    var showModal = function (options) {
        if (!options) return;

        if (typeof options === 'string') {
            options = {message: options};
        }

        var modalInstance = $modal.open({
            animation: true,
            template: '<div ng-show="modalTitle" class="modal-header"><h3 class="modal-title">{{modalTitle}}</h3></div><div class="modal-body">{{modalContent}}</div><div class="modal-footer"><button class="btn btn-primary" type="button" ng-click="ok()">{{::okayLabel}}</button><button ng-show="showCancel" class="btn btn-warning" type="button" ng-click="cancel()">{{::cancelLabel}}</button></div>',
            controller: 'tpModalInstanceController',
            size: options.modalSize || 'sm',
            resolve: {
                modalContent: function () {
                    return options.message;
                },
                modalTitle: function () {
                    return options.title;
                },
                showCancel: function () {
                    return options.cancelCallback && typeof(options.cancelCallback === 'function');
                },
                okayLabel: function () {
                    return options.okayLabel || 'OK';
                },
                cancelLabel: function () {
                    return options.cancelLabel || 'Cancel';
                }
            }
        });

        modalInstance.result.then(function () {
            if (options.okayCallback && typeof(options.okayCallback === 'function')) {
                options.okayCallback();
            }
        }, function () {
            if (options.cancelCallback && typeof(options.cancelCallback === 'function')) {
                options.cancelCallback();
            }
        })
    };

    return {
        show: showModal
    }
});

