/**
 * Returns demographic raf value based on age, gender and coding model
 * @customfunction
 * @helpurl https://hccexplorer.com/support
 * @param {string[][]} name_array accepts array
 * @param {string[][]} memid_array accepts array
 * @param {string[][]} age_array accepts 
 * @param {string[][]} Gender_array accepts array
 * @param {string[][]} DOS_array accepts array
 * @param {string[][]} dx_array accepts array
 * @param {string[][]} model_array accepts array
 */

let name  = ['Erik', 'Erik', 'Bob', 'Bob', 'Bob', 'Tom', 'Mark', 'Jane'],
age = [65, 65, 42, 42, 41, 59, 74, 'np.nan'],
gender = ['M', 'M', 'M', 'M', 'M', 'F', 'M', 'F'],
memid = ['1', '1', '2', '2', '2', '3', '4', '5'],
chartid = ['11', '12', '21', '21', '23', '24', '31', '41'],
dos = ['2018', '2018', '2019', '2019', '2018', '2018', '2019', '2019'],
/* dos = ['Jan-2018', 'Feb-2018', 'Jan-2019', 'Mar-2019', 'Jun-2018', 'Mar-2018', 'Apr-2019', 'Jun-2019'], */
model = ['CNA', 'CNA', 'CPD', 'CPD', 'CPD', 'CFD', 'INS', 'CFA'],
dx = [['E119', 'i420', 'f330', 'd330'], ['E1151'], ['D330'], ['F330'], ['E119'], ['i420'], ['E119'], ['e119']];

memprofile(name, 
memid,
chartid,
age,
gender,
dos,
model,
dx);


function memprofile(name_array, memid_array, age_array, Gender_array, DOS_array, dx_array, model_array, hasheader = true) {
  for (var i = 0; i < name_array.length; i++) {
    for (var j = 0; j < name_array[i].length; j++) {
      temp_name_array = name_array;
    }
  }
  for (var i = 0; i < memid_array.length; i++) {
    for (var j = 0; j < memid_array[i].length; j++) {
      temp_memid_array = memid_array;
    }
  }
  for (var i = 0; i < age_array.length; i++) {
    for (var j = 0; j < age_array[i].length; j++) {
      temp_age_array = age_array;
    }
  }
  for (var i = 0; i < Gender_array.length; i++) {
    for (var j = 0; j < Gender_array[i].length; j++) {
      temp_Gender_array = Gender_array;
    }
  }
  for (var i = 0; i < DOS_array.length; i++) {
    for (var j = 0; j < DOS_array[i].length; j++) {
      temp_DOS_array = DOS_array;
    }
  }
  for (var i = 0; i < dx_array.length; i++) {
    for (var j = 0; j < dx_array[i].length; j++) {
      temp_dx_array = dx_array;
    }
  }
  for (var i = 0; i < model_array.length; i++) {
    for (var j = 0; j < model_array[i].length; j++) {
      temp_model_array = model_array;
    }
  }

  var groupby_col = ['name','memid'];
  
  var len = temp_age_array.length;
  var data = [];
  for (var i = 0; i < len ; i++) {
    var ele = {
      "name" : temp_name_array[i],
      "memid" : temp_memid_array[i],
      "age" : temp_age_array[i],
      "gender": temp_Gender_array[i],
      "dos": temp_DOS_array[i],
      "dx": temp_dx_array[i],
      "model": temp_model_array[i]
    };
    data.push(ele);
  }
  
  const groupBy = (data, keys) => { 
    return data.reduce((storage, item) => {
      const groupValues = keys.reduce((values, key) => {
        values[key] = item[key];
        return values;
      }, {});
      
      const group = Object.values(groupValues).join(' ');
      storage[group] = storage[group] || [];
      if (keys.every((key) => item[key] === groupValues[key])) {
          storage[group].push(item);
      }
      return storage; 
    }, {}); 
  };

  var result = groupBy(data, groupby_col);
  console.log(JSON.stringify(result));
  return JSON.stringify(result);
  // var result = memprofile(df, groupby_cols=groupby_array, hasheader = hasheader);
  // return result.toString();
}
/* {
  'Erik 1': [
    {
      name: 'Erik',
      memid: '1',
      age: '11',
      gender: 65,
      dos: 'M',
      dx: '2018',
      model: 'CNA'
    },
    {
      name: 'Erik',
      memid: '1',
      age: '12',
      gender: 65,
      dos: 'M',
      dx: '2018',
      model: 'CNA'
    }
  ],
  'Bob 2': [
    {
      name: 'Bob',
      memid: '2',
      age: '21',
      gender: 42,
      dos: 'M',
      dx: '2019',
      model: 'CPD'
    },
    {
      name: 'Bob',
      memid: '2',
      age: '21',
      gender: 42,
      dos: 'M',
      dx: '2019',
      model: 'CPD'
    },
    {
      name: 'Bob',
      memid: '2',
      age: '23',
      gender: 41,
      dos: 'M',
      dx: '2018',
      model: 'CPD'
    }
  ],
  'Tom 3': [
    {
      name: 'Tom',
      memid: '3',
      age: '24',
      gender: 59,
      dos: 'F',
      dx: '2018',
      model: 'CFD'
    }
  ],
  'Mark 4': [
    {
      name: 'Mark',
      memid: '4',
      age: '31',
      gender: 74,
      dos: 'M',
      dx: '2019',
      model: 'INS'
    }
  ],
  'Jane 5': [
    {
      name: 'Jane',
      memid: '5',
      age: '41',
      gender: 'np.nan',
      dos: 'F',
      dx: '2019',
      model: 'CFA'
    }
  ]
}
 */