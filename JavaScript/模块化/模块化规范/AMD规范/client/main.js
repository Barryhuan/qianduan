(function () {
  require.config({
    base : 'client/',
    paths : {
      'module1' : 'modules/module1',
      'module2' : 'modules/module2',
      'jquery' : 'libs/jquery-1.10.1',
      'angular' : 'libs/angular'
    },
    shim: {
      angular: {
        exports : 'angular'
      }
    }
  }),

  require(['module1', 'module2'], function (m1, m2) {
    console.log(m1.b())
    console.log(m1, m2)
  })
})()