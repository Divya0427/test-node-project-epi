(() => {
    let obj1 = [
        {
            id: 1,
            product: "Oven"
        },
        {
            id: 2,
            product: "Oven"
        },
        {
            id: 3,
            product: "Oven"
        },
        {
            id: 4,
            product: "TV"
        },
        {
            id: 5,
            product: "TV"
        },
        {
            id: 6,
            product: "TV"
        }
    ];
    let obj2 = [
        {
            id: 2,
            state: "California"
        },
        {
            id: 4,
            state: "California"
        },
        {
            id: 6,
            state: "Texas"
        },
        {
            id: 7,
            state: "Newyork"
        },
        {
            id: 8,
            state: "Indiana"
        },
    ]
    var mergedArray = [...obj1, ...obj2];
    var resultArray = [];
    var clonedObj = {};
    var mergedObj = {};
    mergedArray.map((obj, index, arr) => {
            console.log(obj);
            arr.map((item) => {
                if(obj.id === item.id) {
                    clonedObj = { ...obj };
                    mergedObj = { ...obj, ...item };
                }
            });
            //Loop through all the objects in an array with which this id matches and merge the props into a new prop and delete those objects from both the arrays to amke sure we ont duplicate it
            console.log(clonedObj);
            console.log(mergedObj);
    });
    console.log(mergedArray);

    /* onst clonedObj = { ...obj1 };
    const mergedObj = { ...obj1, ...obj2 };
    console.log(mergedObj); */
    const ob1 = { foo: 'bar', x: 42 };
    const ob2 = { foo: 'baz', y: 13 };

    const clonedOb = { ...ob1 };
    // Object { foo: "bar", x: 42 }

    const mergedOb = { ...ob1, ...ob2 };
    console.log(mergedOb);
    // Object { foo: "baz", x: 42, y: 13 }

    //Trial 3
    var result1 = [
        {id:1, name:'Sandra', type:'user', username:'sandra'},
        {id:2, name:'John', type:'admin', username:'johnny2'},
        {id:3, name:'Peter', type:'user', username:'pete'},
        {id:4, name:'Bobby', type:'user', username:'be_bob'}
    ];
    var result2 = [
        {id:2, name:'John', email:'johnny@example.com'},
        {id:4, name:'Bobby', email:'bobby@example.com'}
    ];
    var props = ['id', 'name'];
    var result = result1.filter(function(o1){
        // filter out (!) items in result2
        return result2.some(function(o2){
            return o1.id === o2.id;          // assumes unique id
        });
    }).map(function(o){
        // use reduce to make objects with only the required properties
        // and map to apply this to the filtered array as a whole
        return props.reduce(function(newo, name){
            newo[name] = o[name];
            return newo;
        }, {});
    });
    console.log(result);
})();

/* {
    id: 1,
    product: "Oven",
    state: NaN,
},
{
    id: 2,
    product: "Oven",
    state: "California",
},
{
    id: 3,
    product: "Oven",
    state: NaN,
},
{
    id: 4,
    product: "TV",
    state: "California"
},
{
    id: 5,
    product: "TV",
    state: NaN,
},
{
    id: 6,
    product: "TV",
    state: "Texas"
},
{
    id: 7,
    product: NaN,
    state: "Newyork"
},
{
    id: 8,
    product: NaN,
    state: "Indiana"
} */