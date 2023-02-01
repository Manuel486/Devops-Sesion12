function empleadoSueldo(){
let sueldo, descuento, sueldoneto, sueldobruto
sueldo = parseFloat (document.empleadx.sueldo.value);
// sueldo = prompt("Ingresa el sueldo del empleado");

descuento = 0;
if(sueldo<=500)
    descuento=sueldo*0;
if(sueldo>=501&&sueldo<=1000)
    descuento=sueldo*0.02;
if(sueldo>=1001&&sueldo<=4000)
    descuento=sueldo*0.08;
if(sueldo>=4001&&sueldo<=8000)
    descuento=sueldo*0.15;
if(sueldo>=8001&&sueldo<=10000)
    descuento=sueldo*0.21;
if(sueldo>=10001)
    descuento=sueldo*0.30;
sueldoneto=sueldo-descuento;
sueldobruto=sueldo;

console.log("El sueldo bruto es: " + sueldobruto);
console.log("El descuento es: " + descuento);
console.log("El sueldo neto es: " + sueldoneto);

document.empleadx.sueldobruto.value = sueldobruto;
document.empleadx.descuento.value = descuento;
document.empleadx.sueldoneto.value = sueldoneto;
}