(function () {
  'use strict';

  angular
    .module('skiptrace.core')
    .directive('collectorCallStatistics', CollectorCallStatistics);

  CollectorCallStatistics.$inject = ['$q'];

  function CollectorCallStatistics($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: CollectorCallStatisticsController,
      controllerAs: 'vm',
      link: link,
      restrict: 'E',
      scope: {},
      templateUrl: 'app/dashboard/collector-call-statistics/collector-call-statistics.html'

    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function CollectorCallStatisticsController() {
    var vm = this;
    vm.title ='Call Effectiveness';


    vm.options = {
      chart: {
        type: 'pieChart',
        height: 500,
        x: function (d) {
          return d.key;
        },
        y: function (d) {
          return d.y;
        },
        showLabels: true,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
          margin: {
            top: 5,
            right: 35,
            bottom: 5,
            left: 0
          }
        }
      }
    };

    vm.data = [{
        key: "Ensurance",
        y: 5
      },
      {
        key: "Portal",
        y: 2
      },
      {
        key: "Three",
        y: 9
      },
      {
        key: "Four",
        y: 7
      },
      {
        key: "Five",
        y: 4
      },
      {
        key: "Six",
        y: 3
      },
      {
        key: "Seven",
        y: .5
      }
    ];

  }
})();
