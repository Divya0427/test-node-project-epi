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
    var res = arr1.map((obj1) => {
        return arr2.map((obj2) => {
            return obj1.id === obj2.id;
        });
    });
    console.log(res);
})();