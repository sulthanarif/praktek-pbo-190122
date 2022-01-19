let massa = 600;
let percepatan = 2;

function newtonLaw(m,a){
    return m*a;
}
let f = newtonLaw(massa,percepatan);
console.log(`f = ${f} N`);