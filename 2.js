const qwe = {a:1, b:2,};
const rty = 'str';

function value (qwe, rty){
    return rty in qwe;
}
console.log(value(qwe, rty))