

function run(n) {
    for (let i = 0; i <= n.length; i++)
        if (n[i] > 0 && Number.isInteger(n[i])) return i + ' ' + n[i];
    return "No result";
}


const BaiTapjs2 = () => {
    let users = [
        { id: 'john', name: "John Smith", age: 20 },
        { id: 'ann', name: "Ann Smith", age: 24 },
        { id: 'pete', name: "Pete Peterson", age: 31 },
    ];

    function groupById(arr) {
        return arr.reduce((new_obj, value) => {
            new_obj[value.id] = value;
            return new_obj;
        }, {})
    }
    console.log(groupById(users))

}



let users = [
    { id: 'john', name: "John Smith", surname: "Ngu" },
    { id: 'ann', name: "Ann Smith", surname: "Ngu2" },
    { id: 'pete', name: "Pete Peterson", surname: "Ngu3" },
];

function name(users) {
    return usersMapped = users.map(user => ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id
    }));
}




let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare"
];
function unique(arr) {
  const res =  arr.filter((value, index) => arr.indexOf(value) === index);
    return res;
}
console.log(unique(values));










