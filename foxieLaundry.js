// Tulis Kode Kamu di bawah ini
let nama= 'foxie';
let jbt= 20;
let jbm= 0;

for(let i =1; i<=jbt; i++){
 if(jbm < jbt){
    jbm +=1
    console.log(jbm);
 };
 if(jbm === jbt){
    console.log('lampu nyala');
    console.log(`${nama} siap nyuci`);
    break
 }; 
};

