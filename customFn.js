/* function memprofile(profile_df, groupby_cols='', hasheader='') {
  let groupby_cols = groupby_cols || ['name', 'memid', 'age', 'gender', 'model', 'dos'];
}

 */


( () => {
    console.log("HELLO");
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
        result = Object.keys(object).reduce(function (r, k) {
            object[k].forEach(function (a, i) {
                r[i] = r[i] || {};
                r[i][k] = a;
            });
            return r;
        }, []);

    _.mixin({
      groupByComposite: (collection, keys, delimiter = '-') =>
        _.groupBy(collection, (item) => {
          const compositeKey = [];
          _.each(keys, key => compositeKey.push(item[key]));
          return compositeKey.join(delimiter);
        }),
    });
    const groupedResult = _.groupByComposite(result, ['name', 'memid', 'dos']);    
    //const groupedResult = _.groupByComposite(result, ['name', 'gender']);
    console.log('groupedResult::');
    console.log(groupedResult);
    var finalResult = Object.values(groupedResult);    
    console.log(`finalResult after manipulations:: ${finalResult}`);
    console.log(finalResult);

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
    console.log(output);
    });
    
  console.log(consolidatedOutput.push(output));
})();