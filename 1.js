const qwe = {a:1, b:2}

function value (obj){
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key, obj[key]);
        }
    }
}
value(qwe);