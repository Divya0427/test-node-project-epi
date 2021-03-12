var claims_df = [
    {
      name: "Erik",
      age: "65",
      gender: "M",
      memid: "1",
      chartid: "11",
      dos: 1905,
      model: "CNA",
      dx: [
        "E119",
        "f330",
        "e330",
        "E119",
      ],
      ver: "",
      HCCs: "HCC19,HCC59",
      DemoRAF: "0.301",
      HCCRAF: "0.459",
      TotalRAF: 0.76,
    },
    {
      name: "Bob",
      age: "42",
      gender: "M",
      memid: "2",
      chartid: "21",
      dos: 2019,
      model: "CPD",
      dx: [
        "D330",
        "C770",
      ],
      ver: "v24",
      HCCs: "HCC12",
      DemoRAF: "0.282",
      HCCRAF: "0.181",
      TotalRAF: 0.46299999999999997,
    },
    {
      name: "Bob",
      age: "41",
      gender: "M",
      memid: "2",
      chartid: "23",
      dos: 2018,
      model: "CPD",
      dx: [
        "E119",
      ],
      ver: "v23",
      HCCs: "HCC19",
      DemoRAF: "0.258",
      HCCRAF: "0.125",
      TotalRAF: 0.383,
    },
    {
      name: "Tom",
      age: "59",
      gender: "F",
      memid: "3",
      chartid: "24",
      dos: 2018,
      model: "CFD",
      dx: [
        "i420",
      ],
      ver: "v23",
      HCCs: "HCC85",
      DemoRAF: "0.404",
      HCCRAF: "0.441",
      TotalRAF: 0.845,
    },
    {
      name: "Mark",
      age: "74",
      gender: "M",
      memid: "4",
      chartid: "31",
      dos: 2019,
      model: "INS",
      dx: [
        "E119",
      ],
      ver: "v24",
      HCCs: "HCC19",
      DemoRAF: "1.329",
      HCCRAF: "0.178",
      TotalRAF: 1.507,
    },
    {
      name: "Jane",
      age: "75",
      gender: "F",
      memid: "5",
      chartid: "41",
      dos: 2019,
      model: "CFA",
      dx: [
        "e119",
      ],
      ver: "v24",
      HCCs: "HCC19",
      DemoRAF: "0.593",
      HCCRAF: "0.107",
      TotalRAF: 0.7,
    },
  ];
  var coding_df = [
    {
      name: "Erik",
      age: "65",
      gender: "M",
      memid: "1",
      chartid: "11",
      dos: 1905,
      model: "CNA",
      dx: [
        "E119",
        "i420",
        "f330",
        "d330",
        "E119",
      ],
      ver: "",
      HCCs: "HCC12,HCC19,HCC59,HCC85,HCC85_gDiabetesMellit",
      DemoRAF: "0.301",
      HCCRAF: "1.074",
      TotalRAF: 1.375,
    },
    {
      name: "Bob",
      age: "42",
      gender: "M",
      memid: "2",
      chartid: "21",
      dos: 2019,
      model: "CPD",
      dx: [
        "D330",
        "C770",
      ],
      ver: "v24",
      HCCs: "HCC12",
      DemoRAF: "0.282",
      HCCRAF: "0.181",
      TotalRAF: 0.46299999999999997,
    },
    {
      name: "Bob",
      age: "41",
      gender: "M",
      memid: "2",
      chartid: "23",
      dos: 2018,
      model: "CPD",
      dx: [
        "E119",
      ],
      ver: "v23",
      HCCs: "HCC19",
      DemoRAF: "0.258",
      HCCRAF: "0.125",
      TotalRAF: 0.383,
    },
    {
      name: "Tom",
      age: "59",
      gender: "F",
      memid: "3",
      chartid: "24",
      dos: 2018,
      model: "CFD",
      dx: [
        "i420",
      ],
      ver: "v23",
      HCCs: "HCC85",
      DemoRAF: "0.404",
      HCCRAF: "0.441",
      TotalRAF: 0.845,
    },
    {
      name: "Mark",
      age: "74",
      gender: "M",
      memid: "4",
      chartid: "31",
      dos: 2019,
      model: "INS",
      dx: [
        "E119",
      ],
      ver: "v24",
      HCCs: "HCC19",
      DemoRAF: "1.329",
      HCCRAF: "0.178",
      TotalRAF: 1.507,
    },
    {
      name: "Jane",
      age: "75",
      gender: "F",
      memid: "5",
      chartid: "41",
      dos: 2019,
      model: "CFA",
      dx: [
        "e119"
      ],
      ver: "v24",
      HCCs: "HCC19",
      DemoRAF: "0.593",
      HCCRAF: "0.107",
      TotalRAF: 0.7
    }
  ]
var merge_cols_list = ['name', 'memid', 'ver'];
var compare_array = [];
var compare_obj = {};
var isEqual = [];
claims_df.map((claims_obj, index) => {
    isEqual.push(merge_cols_list.map((merge_col) => {
        if(claims_obj[merge_col] === coding_df[index][merge_col]) {
            console.log(`Equal ${claims_obj[merge_col]} ${coding_df[index][merge_col]}`);
            compare_obj[merge_col] = claims_obj[merge_col];
            //compare_array.push(compare_obj);
            return true;
        } else {
            console.log(`Not Equal ${claims_obj[merge_col]} ${coding_df[index][merge_col]}`);
            return false;
        }
    }));
});
isEqual = isEqual.every(res => res);

console.log(isEqual);
console.log(compare_array);
compare_array.push(compare_obj);
if(isEqual) {
    //compare_array.push()
} else {

}