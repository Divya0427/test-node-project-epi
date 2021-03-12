var name_array = [
  
  [
    "MemberName",
  ],
  [
    "Erik",
  ],
  [
    "Erik",
  ],
  [
    "Bob",
  ],
  [
    "Bob",
  ],
];

var model_array = [
 
  [
    "Model",
  ],
  [
    "CNA",
  ],
  [
    "CNA",
  ],
  [
    "CPD",
  ],
  [
    "CPD",
  ],
];

var memid_array = 
[
  
  [
    "MID",
  ],
  [
    "1",
  ],
  [
    "1",
  ],
  [
    "2",
  ],
  [
    "2",
  ],
];

var age_array = [
 
  [
    "Age",
  ],
  [
    "65",
  ],
  [
    "65",
  ],
  [
    "42",
  ],
  [
    "42",
  ],
];

var DOS_array = [
  
  [
    "DOS",
  ],
  [
    "43101",
  ],
  [
    "43101",
  ],
  [
    "43466",
  ],
  [
    "43525",
  ],
];

var dx_array = [
  
  [
    "DX1",
    "DX2",
    "DX3",
    "DX4",
  ],
  [
    "e119",
    "i420",
    "f330",
    "d330",
  ],
  [
    "E1151",
    "",
    "",
    "",
  ],
  [
    "D330",
    "",
    "",
    "",
  ],
  [
    "F330",
    "",
    "",
    "",
  ],
];

var Gender_array = [
  
  [
    "Gender",
  ],
  [
    "M",
  ],
  [
    "M",
  ],
  [
    "M",
  ],
  [
    "M",
  ],
];

var groupby_array = [
  [
    
    [
      "MemberName",
    ],
    [
      "Erik",
    ],
    [
      "Erik",
    ],
    [
      "Bob",
    ],
    [
      "Bob",
    ],
  ],
  [
    
    [
      "MID",
    ],
    [
      "1",
    ],
    [
      "1",
    ],
    [
      "2",
    ],
    [
      "2",
    ],
  ],
  [
    
    [
      "DOS",
    ],
    [
      "43101",
    ],
    [
      "43101",
    ],
    [
      "43466",
    ],
    [
      "43525",
    ],
  ],
];

memprofile(name_array, memid_array, age_array, Gender_array, DOS_array, dx_array, model_array, true, groupby_array);

function getJsDateFromExcel(excelDate) { 
  var obj = new Date((excelDate - (25567 + 1))*86400*1000);
  return obj.getFullYear();
}

function arr_diff (a1, a2) {
  var a = [], diff = [];
  for (var i = 0; i < a1.length; i++) {
      a[a1[i]] = true;
  }
  for (var i = 0; i < a2.length; i++) {
      if (a[a2[i]]) {
          delete a[a2[i]];
      } else {
          a[a2[i]] = true;
      }
  }
  for (var k in a) {
      diff.push(k);
  }
  return diff;
}

async function memprofile(name_array, memid_array, age_array, Gender_array, DOS_array, dx_array, model_array, hasheader = true, groupby_array) {
  var temp_name_array = [],
  temp_memid_array = [],
  temp_model_array = [],
  temp_groupby_array = [],
  temp_Gender_array = [],
  temp_dx_array = [],
  temp_age_array = [],
  temp_DOS_array = [];
for (i =0; i < name_array.length; i++) {
    name_array[i] = name_array[i].filter(item => item);
    if (name_array[i].length > 0) {
      temp_name_array.push(name_array[i]);
    }
  }
  for (i =0; i < memid_array.length; i++) {
    memid_array[i] = memid_array[i].filter(item => item);
    if (memid_array[i].length > 0) {
      temp_memid_array.push(memid_array[i]);
    }
  }
  for (i =0; i < age_array.length; i++) {
    age_array[i] = age_array[i].filter(item => item);
    if (age_array[i].length > 0) {
      temp_age_array.push(age_array[i]);
    }
  }
  for (i =0; i < Gender_array.length; i++) {
    Gender_array[i] = Gender_array[i].filter(item => item);
    if (Gender_array[i].length > 0) {
      temp_Gender_array.push(Gender_array[i]);
    }
  }
  for (i =0; i < DOS_array.length; i++) {
    DOS_array[i] = DOS_array[i].filter(item => item);
    if (DOS_array[i].length > 0) {
      temp_DOS_array.push(DOS_array[i]);
    }
  }
  for (i =0; i < dx_array.length; i++) {
    dx_array[i] = dx_array[i].filter(item => item);
    if (dx_array[i].length > 0) {
      temp_dx_array.push(dx_array[i]);
    }
  }
  for (i =0; i < model_array.length; i++) {
    model_array[i] = model_array[i].filter(item => item);
    if (model_array[i].length > 0) {
      temp_model_array.push(model_array[i]);
    }
  }
    var header_value = [];
    if (hasheader == true) {
      header_value.push(name_array[0][0]);
      header_value.push(memid_array[0][0]);
      header_value.push(DOS_array[0][0]);
      header_value.push('DXs');
      header_value.push('HCCs');
      header_value.push('DemoRAF');
      header_value.push('HCC RAF');
      header_value.push('Total RAF');
      
      name_array.shift();
      memid_array.shift();
      age_array.shift();
      Gender_array.shift();
      DOS_array.shift();
      dx_array.shift();
      model_array.shift();    
    }
    else {
      header_value = ["MemberName","MID","DOS","Dxs","HCCs","DemoRAF","HCC RAF","Total RAF"];
    }
    console.log("header_value::::");
    console.log(header_value);
    headers_map = {"MemberName": "name","MID": "memid","DOS": "dos", "Age": "age", "Gender": "gender", "Model": "model", "ChartId": "id", "DOB": "dob", "Dxs": "dx"};
    
    var groupby_array_check = groupby_array.map(item => item[0]);
  
    var temp_groupby_array = groupby_array.map(item => item[0][0]);
  
    temp_groupby_array = temp_groupby_array.map(item => headers_map[item]);
  
    var groupby_col = temp_groupby_array || ['name', 'memid', 'age', 'gender', 'model', 'dos'];
    console.log("groupby_array:::::");
    console.log(groupby_array);
    console.log("groupby_array_check::::")
    console.log(groupby_array_check);
    console.log("temp_groupby_array:::");
    console.log(temp_groupby_array);
    console.log("groupby_col:::");
    console.log(groupby_col);
    console.log("dx_array::");
    console.log(dx_array);
  
    for (i =0; i < dx_array.length; i++) {
     dx_array[i] = dx_array[i].filter(item => item);
    } 
    console.log("dx_array after loop::");
    console.log(dx_array);

    DOS_array = DOS_array.map(item => getJsDateFromExcel(item));
    console.log("DOS_array:::");
    console.log(DOS_array);
    var len = name_array.length;
    var data = [];
    var ele = {};
    for (var i = 0; i < len ; i++) {
      ele = {
        "name" : name_array[i][0],
        "memid" : memid_array[i][0],
        "age" : age_array[i][0],
        "gender": Gender_array[i][0],
        "dos": DOS_array[i],
        "dx": dx_array[i],
        "model": model_array[i][0]
      };
      if (!(temp_groupby_array[0] in ele)) {
        ele[temp_groupby_array[0]] = groupby_array[0][i+1][0];
      }
      data.push(ele);
    }
    //D: Data is having name and memids as arrays
    console.log("data:::");
    console.log(data);
    //D: If we add breakpoint here the 1st object in data array getting only 4 dxs which is eexpected otherwise 5
    var all_keys = Object.keys(ele);
    console.log("all_keys:::");
    console.log(all_keys);
    // Getting a grouped df
    const groupBy = (data, keys) => { 
      return data.reduce((storage, item) => {
        const groupValues = keys.reduce((values, key) => {
          values[key] = item[key];
          return values;
        }, {});
        
        var group = Object.values(groupValues).join(' ');
        storage[group] = storage[group] || [];
        if (keys.every((key) => item[key] === groupValues[key])) {
          if(storage[group][0]) {
            storage[group][0]['dx'] = storage[group][0]['dx'].concat(item['dx']);
          }
          else {
            var req_keys = Object.keys(groupValues);
            var del_keys = arr_diff(req_keys, all_keys);
            del_keys.splice (del_keys.indexOf("dx"), 1);
            for (i = 0; i < del_keys.length; i++) {
              delete item[del_keys[i]];
            }
            storage[group].push(item);
          }
        }
        return storage; 
      }, {}); 
    };
  
    // Assigning version acc to DOS_Year
    profile_df = groupBy(data, groupby_col);    
    console.log("profile_df:::");
    console.log(profile_df);
    var x = Object.keys(profile_df);
    for (i = 0; i < x.length; i++) {
      for (x[i] in profile_df) {
        var s = profile_df[x[i]]['dos'];
        if (profile_df[x[i]]['dos'] === 2017) {
          profile_df[x[i]]['ver'] = "v22";
        }
        else if (profile_df[x[i]]['dos'] === 2018) {
          profile_df[x[i]]['ver'] = "v23";
        }
        else if (profile_df[x[i]]['dos'] === 2019) {
          profile_df[x[i]]['ver'] = "v24";
        }
        else if (profile_df[x[i]]['dos'] === 2020) {
          profile_df[x[i]]['ver'] = "v24";
        } else {
          profile_df[x[i]]['ver'] = "";
        }
      }
    }
    console.log("profile_df after adding versions:::");
    console.log(profile_df);
  // Filling default values in case columns are missing
  for (i = 0; i < x.length; i++) {
    for (x[i] in profile_df) {
      if (!(profile_df[x[i]][0]['model'])) {
        profile_df[x[i]][0]['model'] = 'CNA';
      }
      if (!(profile_df[x[i]][0]['age'])) {
        profile_df[x[i]][0]['age'] = 65;
      }
      if (!(profile_df[x[i]][0]['gender'])) {
        profile_df[x[i]][0]['gender'] = 'M';
      }
    }
  }
  console.log("profile_df after adding default model, age, gender:::");
  console.log(profile_df);
  for (i = 0; i < x.length; i++) {
    for (x[i] in profile_df) {
      // Dx 2 HCC
      /* profile_df[x[i]][0]['HCC'] = dx2cc(profile_df[x[i]][0]['dx'], age=profile_df[x[i]][0]['age'], ver = profile_df[x[i]][0]['ver'], model=profile_df[x[i]][0]['model']);
      // Dx 2 RAF
      profile_df[x[i]][0]['Demo_RAF'] = demo_raf(condition_list='',age=profile_df[x[i]][0]['age'], sex = profile_df[x[i]][0]['gender'], model=profile_df[x[i]][0]['model'], orec = "0", ver = profile_df[x[i]][0]['ver'], baserate = 0.0);
      profile_df[x[i]][0]['HCC_RAF'] = cc_raf(profile_df[x[i]][0]['HCC'], ver = profile_df[x[i]][0]['ver'], model=profile_df[x[i]][0]['model'], disabl = false, age=profile_df[x[i]][0]['age'], never_trump = 0, baserate = 0.0);
      profile_df[x[i]][0]['Total_RAF'] = parseFloat(profile_df[x[i]][0]['Demo_RAF']) + parseFloat(profile_df[x[i]][0]['HCC_RAF']); */
    }
  }
  console.log("profile_df after adding HCC, Demo RAF, HCC RAF, Total RAF:::");
  console.log(profile_df);

  var parentarraylist=[]
  parentarraylist.push(header_value);
  var memPro = Object.keys(profile_df);
  for(i=0;i<memPro.length;i++)
  {
    var arrayList=[];
    var proarray= profile_df[memPro[i]][0];
    arrayList.push(proarray["name"].toString());
    arrayList.push(proarray["memid"].toString());
    arrayList.push(proarray["dos"].toString());
    arrayList.push(proarray["dx"].toString());
    /* arrayList.push(proarray["HCC"].toString());
    arrayList.push(proarray["Demo_RAF"].toString());
    arrayList.push(proarray["HCC_RAF"].toString());
    arrayList.push(proarray["Total_RAF"].toString()); */
    
    parentarraylist.push(arrayList);
  }
  console.log("parentarraylist:::");
  console.log(parentarraylist);
}