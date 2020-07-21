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
age,
gender,
dos,
dx,
model);

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

  var groupby_col = ['name','memid', 'dos'];
  
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
      
      var group = Object.values(groupValues).join(' ');
      storage[group] = storage[group] || [];
      console.log(JSON.stringify(storage[group]));
      if (keys.every((key) => item[key] === groupValues[key])) {
        if(storage[group][0]) {
          storage[group][0]['dx'].concat(item['dx']);
        }
        else {
          storage[group].push(item);
        }
      }
      return storage; 
    }, {}); 
  };

  profile_df = groupBy(data, groupby_col);
  console.log(JSON.stringify(profile_df));
}


/* $ node p2
{
    "Erik 1 2018": [
        {
            "name": "Erik",
            "memid": "1",
            "age": 65,
            "gender": "M",
            "dos": "2018",
            "dx": [
                "E119",
                "i420",
                "f330",
                "d330"
            ],
            "model": "CNA"
        }
    ],
    "Bob\r\n2 2019": [
        {
            "name": "Bob",
            "memid": "2",
            "age": 42,
            "gender": "M",
            "dos": "2019",
            "dx": [
                "D330"
            ],
            "model": "CPD"
        }
    ],
    "Bob 2 2018": [
        {
            "name": "Bob",
            "memid\r\n": "2",
            "age": 41,
            "gender": "M",
            "dos": "2018",
            "dx": [
                "E119"
            ],
            "model": "CPD"
        }
    ],
    "Tom 3 2018": [
        {
            "name": "Tom",
            "memid": "3",
            "age": 59,
            "gender": "F",
            "\r\ndos": "2018",
            "dx": [
                "i420"
            ],
            "model": "CFD"
        }
    ],
    "Mark 4 2019": [
        {
            "name": "Mark",
            "memid": "4",
            "age": 74,
            "gender": "M",
            "dos": "2019",
            "dx": [
                "E119"
            ],
            "\r\nmodel": "INS"
        }
    ],
    "Jane 5 2019": [
        {
            "name": "Jane",
            "memid": "5",
            "age": "np.nan",
            "gender": "F",
            "dos": "2019",
            "dx": [
                "e119"
            ],
            "model": "CFA"
        }
    ]
}
 */