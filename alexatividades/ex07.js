// Escreva um programa em JavaScript que utilize a biblioteca convert para converter dias em minutos e gigabytes em bytes.


import convert from 'convert'

function diasEmMinutos(dias){
    return  convert(dias, "days").to('minutes');
}

function gigabytesemBytes(gigabytes){
    return convert (gigabytes, "gibibytes").to('bytes');
}

const dias = Number(15);
const gigabytes = Number (5);

console.log(`${dias} dias são em ${diasEmMinutos(dias)}minutos`);
console.log(`${gigabytes} gigabytes são em ${gigabytesemBytes(gigabytes)} bytes.`)