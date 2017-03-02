angular.module('wt-mobile.controllers', [])

    .controller('ProfileCtrl', function ($scope, $http) {
        this.isFetched = false;
        var ctrl = this;
        this.getUserProfile = function () {
            //                    $http.get("http://localhost:8888/profile?user="+$("#userProfileInput").val()).then(function(response){
            //                        ctrl.profile = response.data;
            //                        ctrl.isFetched = true;
            //                    });
            this.profile = {
                "userId": 29873662,
                "screenName": "MKBHD",
                "userName": "Marques Brownlee",
                "description": "Web Video Producer | ⋈",
                "location": "NYC",
                "createdDate": 1239238200000,
                "tweetCount": 36939,
                "friendsCount": 202,
                "followersCount": 1217116,
                "favoritesCount": 21908,
                "verified": true,
                "timeZone": "Eastern Time (US & Canada)",
                "utcOffset": -18000,
                "sidebarBorderColor": "000000",
                "sidebarFillColor": "C0DFEC",
                "backgroundColor": "EDECE9",
                "textColor": "333333",
                "linkColor": "6C4585",
                "backgroundImageUrl": "http://pbs.twimg.com/profile_background_images/378800000061582783/2a5ada827f010eeaeda7916e800bc394.png",
                "backgroundImageTiled": true,
                "profileImageUrl": "http://pbs.twimg.com/profile_images/818557354123870208/QRDP8wcd.jpg",
                "protected": false
            };
            ctrl.isFetched = true;
        };
    })

    .controller('ChatsCtrl', function ($scope, Chats) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        };
    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
