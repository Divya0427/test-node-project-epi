( () => {
    console.log("HELLO");
    groupByCols = ['name', 'memid', 'dos'];
    //groupByCols = ['dos'];
    //groupByCols = ['chartid'];
    //groupByCols = ['name', 'gender'];

    let name  = ['Erik', 'Erik', 'Bob', 'Bob', 'Bob', 'Tom', 'Mark', 'Jane'],
      age = [65, 65, 42, 42, 41, 59, 74, 'np.nan'],
      gender = ['M', 'M', 'M', 'M', 'M', 'F', 'M', 'F'],
      memid = ['1', '1', '2', '2', '2', '3', '4', '5'],
      chartid = ['11', '12', '21', '21', '23', '24', '31', '41'],
      dos = ['2018', '2018', '2019', '2019', '2018', '2018', '2019', '2019'],
      /* dos = ['Jan-2018', 'Feb-2018', 'Jan-2019', 'Mar-2019', 'Jun-2018', 'Mar-2018', 'Apr-2019', 'Jun-2019'], */
      model = ['CNA', 'CNA', 'CPD', 'CPD', 'CPD', 'CFD', 'INS', 'CFA'],
      dx = [['E119', 'i420', 'f330', 'd330'], ['E1151'], ['D330'], ['F330'], ['E119'], ['i420'], ['E119'], ['e119']],        
      object = { name, age, gender, memid, chartid, dos, model, dx },
      result = Object.keys(object).reduce(function (acc, cur) {
          object[cur].map(function (prop, i) {
              acc[i] = acc[i] || {};
              acc[i][cur] = prop;
          });
          return acc;
      }, []);

    _.mixin({
      groupByComposite: (collection, keys, delimiter = '-') =>
        _.groupBy(collection, (item) => {
          const compositeKey = [];
          _.each(keys, key => compositeKey.push(item[key]));
          return compositeKey.join(delimiter);
        }),
    });

  const groupedResult = _.groupByComposite(result, groupByCols);
  console.log('groupedResult::');
  console.log(groupedResult);
  var finalResult = Object.values(groupedResult);    
  var consolidatedOutput = [];
  var output = [];
  
  var fResult = finalResult.map((array) => {
    var mergedObj = array.reduce((acc, obj) => {
      acc[obj] ? (acc[obj].dx = acc[obj].dx.concat(obj.dx)) : acc[obj] = obj;
      return acc;
  }, {});
  
  for (let prop in mergedObj) {
    output.push(mergedObj[prop]) 
  }
  });
  consolidatedOutput.push(output);
  console.log(consolidatedOutput);

  var myOp = consolidatedOutput.map((arr, idx) => {
    return arr.map((item, index) => {
      return groupByCols.concat('dx').map((col, index) => {
        return item[col];
      });
    });
  });
  console.log(myOp);
})();