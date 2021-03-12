//https://jozef.io/r006-merge/
//https://stackoverflow.com/questions/17880476/joins-in-javascript
//https://stackoverflow.com/questions/37355766/javascript-merge-to-array-of-objects-sql-style-join

(() => {
    let arr1 = [
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
    let arr2 = [
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
    var arr3 = [
        {
            id: 1,
            name: 'Alice',
            city: 'city1',
            designation: 'des1'
        },
        {
            id: 2,
            name: 'Bob',
            city: 'city2',
            designation: 'des2'
        },
        {
            id: 3,
            name: 'Chris',
            city: 'city3',
            designation: 'des3'
        },
        {
            id: 4,
            name: 'Daniel',
            city: 'city4',
            designation: 'des4'
        },
        {
            id: 5,
            name: 'Erik',
            city: 'city1',
            designation: 'des1'
        }
    ];
    var arr4 = [
        {
            id: 1,
            name: 'Alice',
            department: 'city1',
            depId: 'des1'
        },
        {
            id: 2,
            name: 'Bob',
            department: 'city2',
            depId: 'des2'
        },
        {
            id: 3,
            name: 'Chris',
            department: 'city3',
            depId: 'des3'
        },
        {
            id: 4,
            name: 'Daniel',
            department: 'city4',
            depId: 'des4'
        },
        {
            id: 5,
            name: 'Erik',
            department: 'city1',
            depId: 'des1'
        }
    ]
    var props = ['id'];
    var mergedOb = {},
    clonedOb = {};
    var resultArr = [];
    //var props = ['id', 'name'];
    var res = arr1.map((obj1) => {
        return arr2.map((obj2) => {
            if(obj1.id === obj2.id) {
                clonedOb = { ...obj1 };
                mergedOb = { ...obj1, ...obj2 };
                resultArr.push(mergedOb);
                console.log(mergedOb);
            }
        });
    });
    console.log(resultArr);
    //Trial 2
    var removeByAttr = function(arr, attr, value){
        var i = arr.length;
        while(i--){
           if( arr[i] 
               && arr[i].hasOwnProperty(attr) 
               && (arguments.length > 2 && arr[i][attr] === value ) ){ 
    
               arr.splice(i,1);
    
           }
        }
        return arr;
    }
    var arr = [{id:1,name:'serdar'}, {id:2,name:'alfalfa'},{id:3,name:'joe'}];
    removeByAttr(arr, 'id', 1);   
    // [{id:2,name:'alfalfa'}, {id:3,name:'joe'}]

    removeByAttr(arr, 'name', 'joe');
    // [{id:2,name:'alfalfa'}]
    //Trial 3
    function fullOuterJoin(left, right, on) {
        const
            getV = o => o[on],
            getMap = (m, o) => m.set(getV(o), Object.assign(m.get(getV(o)) || {}, o));
    
        return Array
            .from(left.reduce(getMap, right.reduce(getMap, new Map)).values())
            .sort((a, b) => getV(a).localeCompare(getV(b)));
    }
    
    var left = [{ source: 'b', foo: 'bar' }, { source:'d', foo: 'baz' }],
        source = ['b', 'c', 'e'],
        right = source.map(source => ({ source, foo: 'someDefaultValue' })),
        result = fullOuterJoin(left, right, 'source');
    
    console.log(result);
    //Trial 4
    function innerjoinData(primaryTable, foreignTable, primaryKey, foreignKey, selectColumns) {
        var primaryIndex = mapFromArray(primaryTable, primaryKey),
            foreignIndex = mapFromArray(foreignTable, foreignKey),
            resultSet = [];
    
    
        // Look for misses and matches from the left
        for (var i = 0; i < primaryTable.length; i++) {
            var primaryRow = primaryTable[i];
            var match = foreignIndex[primaryRow[primaryKey]];
            resultSet.push(selectColumns(primaryRow,  match || {}));
            
        }
        
        // Look for just misses from the right
        for (var i = 0; i < foreignTable.length; i++) {
            var foreignRow = foreignTable[i];
            if (!primaryIndex.hasOwnProperty( foreignRow[foreignKey] )) {
                resultSet.push(selectColumns({}, foreignRow))
            }        
        }
        
    
        return resultSet;
    
        function mapFromArray(list, keyByProp) {
            var map = {};
            for (var i = 0, item; item = list[i]; i++) {
                map[item[keyByProp]] = item;
            }
            return map;
        };
    }
    
    var revenueTestData = [{
        "YEAR": "2006",
            "MONTH": "1",
            "CUSTOMER": "Customer1",
            "REVENUE": "1938.49488391425"
    }, {
        "YEAR": "2007",
            "MONTH": "1",
            "CUSTOMER": "Customer2",
            "REVENUE": "75.9142774343491"
    }, {
        "YEAR": "2008",
            "MONTH": "2",
            "CUSTOMER": "Customer2",
            "REVENUE": "99.3456067931875"
    }];
    
    
    var costTestData = [{
        "YEAR": "2007",
            "MONTH": "1",
            "CUSTOMER": "Customer4",
            "COST": "14425"
    }, {
        "YEAR": "2008",
            "MONTH": "1",
            "CUSTOMER": "Customer4",
            "COST": "7591"
    }, {
        "YEAR": "2009",
            "MONTH": "2",
            "CUSTOMER": "Customer5",
            "COST": "31875"
    }];
    
    
    var testChartData = innerjoinData(costTestData, revenueTestData, "YEAR", "YEAR", function (primaryRow, foreignRow) {
        return {
            Year: foreignRow.YEAR || primaryRow.YEAR,
            Cost: primaryRow.COST,
            Revenue: foreignRow.REVENUE,
            Customer:foreignRow.CUSTOMER
        };
    });
    console.log(testChartData);
    //document.getElementById('pre').innerHTML = JSON.stringify(testChartData, null, 4)
})();