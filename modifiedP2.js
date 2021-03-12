var name_array = [
  [""], [""], [
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
  [
    "Bob",
  ],
  [
    "Tom",
  ],
  [
    "Mark",
  ],
  [
    "Jane",
  ]
];

var chartid = [['ChartId'], ['11'], ['12'], ['21'], ['21'], ['23'], ['24'], ['31'], ['41']];

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
  ['CPD',],
  ['CFD'],
  ['INS'],
  ['CFA']
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
  [
    "2",
  ],
  [
    "3",
  ],
  [
    "4",
  ],
  [
    "5",
  ]
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
  [
    "41",
  ],
  [
    "59",
  ],
  [
    "74",
  ],
  [
    '66'
  ]
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
  ]
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
  [
    "E119",
    "",
    "",
    "",
  ],
  [
    "i420",
    "",
    "",
    "",
  ],
  [
    "E119",
    "",
    "",
    "",
  ],
  [
    "e119",
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
  [
    "M",
  ],
  [
    "F",
  ],
  [
    "M",
  ],
  [
    "F",
  ],
];

var groupby_array = [
  [
    [
      "MemberName",
    ],
    [
      "ErikKK",
    ],
    [
      "ErikKK",
    ],
    [
      "Bob",
    ],
    [
      "Bob",
    ],
    [
      "Bob",
    ],
    [
      "Tom",
    ],
    [
      "Mark",
    ],
    [
      "Jane",
    ]
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
    [
      "2",
    ],
    [
      "3",
    ],
    [
      "4",
    ],
    [
      "5",
    ]
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
    ]
  ],
];
  
const formatData = (data) => {
  let formattedData = data.map((item) => {
      return item[0];
  });
  return formattedData.filter(Boolean);
}
memprofile(name_array, memid_array, age_array, Gender_array, DOS_array, dx_array, model_array, true, groupby_array);

function getJsDateFromExcel(excelDate) { 
  var obj = new Date((excelDate - (25567 + 1))*86400*1000);
  return obj.getFullYear();
}

/**
 * Takes a positive integer and returns the corresponding column name.
 */
function toColumnName(num) {
  for (var ret = "", a = 1, b = 26; (num -= a) >= 0; a = b, b *= 26) {
    ret = String.fromCharCode(parseInt((num % b) / a) + 65) + ret;
  }
  return ret;
}

function memprofile(
    name_array,
    memid_array,
    age_array,
    Gender_array,
    DOS_array,
    dx_array,
    model_array,
    hasHeader = true,
    groupby_array
  ) {
    /* New code starts here */
    var grp_by_cols = [];
    //groupByData holds the array of objects relevant to groupByCols
    var groupByData = {};
    headerMap = {
      MemberName: "name",
      MID: "memid",
      DOS: "dos",
      Age: "age",
      Gender: "gender",
      Model: "model",
      ChartId: "CID",
      DOB: "dob",
      Dxs: "dx"
    };
  
    //groupByArray holds the array of objects relevant to groupByCols
    var groupByArray = [];
    //colHeaders holds the headers relevant to groupByCols
    var colHeaders = [];
    var userDataByCols = [];
    var DOS = [];
    groupby_array.map((arr, index) => {
      var formattedData = formatData(arr);
      if(formattedData[0] === 'DOS') {
        
        formattedData.map(item => {
          if(item !== 'DOS') {
            DOS.push(getJsDateFromExcel(item));
          } else {
            DOS.push(item);
          }
        });
        if(hasHeader) {
          DOS.shift();
        }
        userDataByCols.push(DOS);
      }
      groupByArray.push(groupByData);
      colHeaders.push(formattedData[0]);
      if(hasHeader) {
        formattedData.shift();
      }
      userDataByCols.push(formattedData);
      groupByData[headerMap[colHeaders[index]]] = userDataByCols[index];
    });
  
    var formattedNames = formatData(name_array);
    var formattedMemIds = formatData(memid_array);
    var formattedAges = formatData(age_array);
    var formattedGenders = formatData(Gender_array);
    var formattedDos = formatData(DOS_array);
    var formattedModels = formatData(model_array);
    var formattedDx = dx_array.map(dxArray => {
      return dxArray.filter(Boolean);
      //return dxArray.filter(dx => dx);
    });
    // formattedDos.map(item => {
    //   if (item !== "DOS") {
    //     DOS.push(getJsDateFromExcel(item));
    //   } else {
    //     DOS.push(item);
    //   }
    // });
    //const headers = [];
    if (hasHeader) {
      //headers.push(formattedNames[0], formattedMemIds[0], formattedAges[0], formattedGenders[0], DOS[0], 'DXs', formattedModels[0], 'HCCs', 'DemoRAF', 'HCC RAF', 'Total RAF');
      formattedNames.shift();
      formattedMemIds.shift();
      formattedAges.shift();
      formattedGenders.shift();
      formattedDos.shift();
      formattedModels.shift();
      formattedDx.shift();
    } else {
      //D: Headers for output, right? If yes, grp_by_cols should be in sync with below headers.
      //headers = ["MemberName","MID","DOS","Dxs","HCCs","DemoRAF","HCC RAF","Total RAF"];
    }
  
    headerMap = {
      MemberName: "name",
      MID: "memid",
      DOS: "dos",
      Age: "age",
      Gender: "gender",
      Model: "model",
      ChartId: "CID",
      DOB: "dob",
      Dxs: "dx"
    };
    grp_by_cols = [];
    if (hasHeader) {
      groupby_array.map(arr => {
        grp_by_cols.push(headerMap[arr[0][0]]);
      });
    } else {
      console.log("No HEADEr");
      // TODO
    }
    grp_by_cols = grp_by_cols || ["name", "memid", "age", "gender", "model", "dos"];
  
    /*     hasHeader ? 
    headers.push(formattedNames[0], formattedMemIds[0], formattedAges[0], formattedGenders[0], formattedDos[0], 'DXs', formattedModels[0], 'HCCs', 'DemoRAF', 'HCC RAF', 'Total RAF')
    : headers = ["MemberName","MID","DOS","Dxs","HCCs","DemoRAF","HCC RAF","Total RAF"];
  */
    var object = {
      name: formattedNames,
      age: formattedAges,
      gender: formattedGenders,
      memid: formattedMemIds,
      dos: DOS,
      model: formattedModels,
      dx: formattedDx,
      ...groupByData
    };
  
    var result = Object.keys(object).reduce(function(acc, cur) {
      object[cur].map(function(prop, i) {
        acc[i] = acc[i] || {};
        acc[i][cur] = prop;
      });
      return acc;
    }, []);
    
    result.map(obj => {
      var dos = obj.dos;
      //Assign version
      if (dos === 2017) {
        obj.ver = "v22";
      } else if (dos === 2018) {
        obj.ver = "v23";
      } else if (dos === 2019 || dos === 2020) {
        obj.ver = "v24";
      } else {
        obj.ver = "";
      }
      //Add default values of Model, age, gender
      if (!obj.model) {
        obj.model = "CNA";
      }
      if (!obj.age) {
        obj.age = 65;
      }
      if (!obj.gender) {
        obj.gender = "M";
      }
      //Calculate HCC, Demo_RAF, HCC_RAF, Total_RAF
      /* obj.HCCs = dx2cc(obj.dx, (age = obj.age), (ver = obj.ver), (model = obj.model));
      obj.DemoRAF = demo_raf(
        (condition_list = ""),
        (age = obj.age),
        (sex = obj.gender),
        (model = obj.model),
        (orec = "0"),
        (ver = obj.ver),
        (baserate = 0.0)
      );
      obj.HCCRAF = cc_raf(
        obj.HCCs,
        (ver = obj.ver),
        (model = obj.model),
        (disabl = false),
        (age = obj.age),
        (never_trump = 0),
        (baserate = 0.0)
      );
      obj.TotalRAF = parseFloat(obj.DemoRAF) + parseFloat(obj.HCCRAF); */
      return obj;
    });
  
    _.mixin({
      groupByComposite: (collection, keys, delimiter = "-") =>
        _.groupBy(collection, item => {
          const compositeKey = [];
          _.each(keys, key => compositeKey.push(item[key]));
          return compositeKey.join(delimiter);
        })
    });
    const groupedResult = _.groupByComposite(result, grp_by_cols);
  
    var finalResult = Object.values(groupedResult);
    var consolidatedOutput = [];
    var output = [];
    
    var fResult = finalResult.map((array) => {
      var mergedObj = array.reduce((acc, obj) => {
        acc[obj] ? (acc[obj].dx = acc[obj].dx.concat(obj.dx)) : (acc[obj] = obj);
        return acc;
      }, {});
      for (var prop in mergedObj) {
        output.push(mergedObj[prop]);
      }
    });
    consolidatedOutput.push(output);
  
    var myOp = consolidatedOutput.map((arr, idx) => {
      return arr.map((item, index) => {
        return grp_by_cols.concat("dx").map((col, index) => {
          return item[col];
        });
      });
    });
  
    //var my_groupby_col = ['name', 'gender'];
    var mainArrList = [];
    Object.values(consolidatedOutput)[0].map(item => {
      console.log(item);
      var arrList = [];
      grp_by_cols.map(col => {
        item[col];
        arrList.push(item[col]);
        delete item[col];
      });
      arrList.push(item.name, item.memid, item.dos, item.dx);
      //arrList.push(item.name, item.memid, item.dos, item.dx, item.HCCs, item.DemoRAF, item.HCCRAF, item.TotalRAF);
      mainArrList.push(arrList.filter(Boolean));
    });
  
    var default_header_value = ["dx", "HCCs", "DemoRAF", "HCCRAF", "TotalRAF"];
    var final_header_value = grp_by_cols.concat(default_header_value);
    var parentarraylist = [];
    parentarraylist.push(final_header_value);
    var col_len = parentarraylist[0].length;
    var col_end = toColumnName(col_len);
    var memPro = Object.keys(mainArrList);
    for (i = 0; i < memPro.length; i++) {
      var arrayList = [];
      var proarray = mainArrList[memPro[i]][0];
      for (j = 0; j < col_len; j++) {
        arrayList.push(proarray[parentarraylist[0][j]].toString());
      }
      parentarraylist.push(arrayList);
    }
  }