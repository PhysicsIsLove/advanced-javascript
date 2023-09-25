function a() {
    let name = "Abhishek";
    function b(){
        console.log("Name is ", name);
    }
    return b;
}

const c = a();
c();

function addTen(){
    let toAdd = 10;
    return function(b){
        return b + toAdd;
    }
}
const d = addTen();
const e = d(45);
console.log(e);

function x(x){
    function y(y){
        function z(z){
            return x + y + z;
        }
        return z;
    }
    return y;
}

const ans = x(10)(20)(30);
console.log(ans);


function p(x){
    return function q(y){
        return function r(z){
            return x + y + z;
        }
    }
}

const ans1 = p(10)(20)(40);
console.log(ans1);