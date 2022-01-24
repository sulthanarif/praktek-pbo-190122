for(let i = 1; i <=100; i+=3) {
    if(i%2 === 0){
        console.log(`${i} - genap`);
    } if(i%2 != 0){
        console.log(`${i} - ganjil`);
    }
}
console.log('---------------')
for (i = 50; i <= 200; i += 5) {
    if (i % 3 === 0) {
        console.log('-' + i + ' faktor 3');
    } if(i % 3 !=0) {
        console.log('-' + i + ' gabisa dibagi 3');
    }
}
console.log('---------------')
for (i = 100; i <= 200; i += 7) {
    if (i % 8 === 0) {
        console.log('-' + i + ' faktor 8');
    } if(i % 3 !=0) {
        console.log('-' + i + ' gabisa dibagi 8');
    }
}