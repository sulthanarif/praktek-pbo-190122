let nama= 'sulton';
nilai = 75;

if(nilai >= 80 && nilai <= 100 ){
    console.log(`${nama} mendapat nilai A`);
} else if (nilai >= 65 && nilai <= 79){
    console.log(`${nama} mendapat nilai B`);
} else if (nilai >= 50 && nilai <= 64){
    console.log(`${nama} mendapat nilai C`);
} else if (nilai >= 35 && nilai <= 49){
    console.log(`${nama} mendapat nilai D`);
} else if (nilai >= 0 && nilai <= 34){
    console.log(`${nama} mendapat nilai E`);
}  
else{console.log('nilai invalid')}
