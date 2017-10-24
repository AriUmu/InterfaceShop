var appl = angular.module('trololo', []);

appl.controller('myCtrl', function($scope) {
    $scope.nameOfMag = 'Voque';
});

appl.controller('putData', function($scope) {
    $scope.sayHello = function() {
        console.log("access" + $scope.email + " " + $scope.password);
        // alert($scope.email + " "+ $scope.password);
    };
});
//обрисовка журналов
appl.controller('BookList', function($scope) {
    $scope.book = [{
            'name': 'Magazin1',
            'describe': 'The best book'
        },
        {
            'name': 'Magazin2',
            'describe': 'The werst book'
        },
        {
            'name': 'Magazin3',
            'describe': 'The amaizing book'
        },
        {
            'name': 'Magazin3',
            'describe': 'The simple book'
        }
    ];
});
//категории журналов
appl.controller('category', function($scope) {
    $scope.category = [{
            name: 'Здоровье',
            count: 11
        },
        {
            name: 'Красота',
            count: 3
        },
        {
            name: 'Дети',
            count: 5
        },
        {
            name: 'Медицина',
            count: 17
        },
        {
            name: 'Кулинария',
            count: 22
        }
    ];
});


//странички
appl.controller('pages', function($scope) {
  $scope.page = [{
    number: 1,
  },
  {
    number: 2,
  },
  {
    number: 3,
  },
  {
    number: 4,
  },
  {
    number: 5,
  }
];
});
