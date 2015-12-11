module.exports = function(TimeList) {

    TimeList.status = function(cb) {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var OPEN_HOUR = 6;
    var CLOSE_HOUR = 20;
    console.log('Current hour is ' + currentHour);
    var response;
    if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
      response = 'We are open for business.';
    } else {
      response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
    }
    cb(null, response);
  };
  TimeList.remoteMethod(
    'status',
    {
      http: {path: '/status', verb: 'get'},
      returns: {arg: 'status', type: 'string'}
    }
  );
  // TimeList.dataSources.mongodb.automigrate('timeList', function(err) {
  //   if (err) throw err;
 
  //   TimeList.models.timeList.create([
  //     {time: 'Bel Cafe'},
  //     {time: 'Three Bees Coffee House'},
  //     {time: 'Caffe Artigiano'},
  //   ], function(err, timeList) {
  //     if (err) throw err;
 
  //     console.log('Models created: \n', timeList);
  //   });
  // });
TimeList.getName = function(shopId, cb) {
    TimeList.findById( shopId, function (err, instance) {
        response = "Name of coffee shop is " + instance.name;
        cb(null, response);
        console.log(response);
    });
  }

  TimeList.remoteMethod (
        'getName',
        {
          http: {path: '/getname', verb: 'get'},
          accepts: {arg: 'id', type: 'number', http: { source: 'query' } },
          returns: {arg: 'name', type: 'string'}
        }
    );
};
