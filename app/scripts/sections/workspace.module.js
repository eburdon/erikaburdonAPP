'use strict';

angular.module('workspace', [])
.config(function ($stateProvider) {
    $stateProvider
    .state('eb.workspace', {
        url: 'workspace',
        templateUrl: 'scripts/sections/workspace/workspace.html',
        controller: 'EbWorkspaceController'
    });
});
