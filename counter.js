// Cash Machine
// O Problema
// Desenvolva uma aplicação que simule a entrega de notas quando um cliente efetuar um saque em um caixa eletrônico.

// Sua aplicação deve:

// Entregar sempre o menor número de notas possíveis
// Sacar valores apenas com as notas disponíveis
// Ter saldo do cliente infinito
// Ter quantidade de notas infinita
// Possuir apenas notas de R$ 100,00, R$ 50,00, R$ 20,00 e R$ 10,00
// Retornar mensagens de erro em caso de entradas inválidas
// Observação:

// Exemplos:
// Entrada: 30.00
// Resultado: [20.00, 10.00]

// Entrada: 80.00
// Resultado: [50.00, 20.00, 10.00]

// Entrada: 125.00
// Resultado: Erro de notas indisponíveis

// Entrada: -130.00
// Resultado: Erro de valor inválido

// Entrada: NULL
// Resultado: Erro de valor nulo

const btnClear = document.getElementById ('btn-clear');

const btnConfirm = document.getElementById ('btn-confirm');

const tecla0 = document.getElementById ('tecla0');

const tecla1 = document.getElementById ('tecla1');
  
const tecla2 = document.getElementById ('tecla2');

const tecla3 = document.getElementById('tecla3');
  
const tecla4 = document.getElementById ('tecla4');

const tecla5 = document.getElementById ('tecla5');
  
const tecla6 = document.getElementById ('tecla6');

const tecla7 = document.getElementById('tecla7');

const tecla8 = document.getElementById('tecla8');

const tecla9 = document.getElementById('tecla9');

const visor = document.getElementById('visor');

const notas = document.getElementById('notas');





btnClear.addEventListener('click', () =>{

    visor.value = null;
    notas.innerText = null;

})

tecla0.addEventListener('click',() =>{

    visor.value = visor.value + 0;

})
tecla1.addEventListener('click',() =>{

    visor.value = visor.value + 1;

})
tecla2.addEventListener('click',() =>{

    visor.value = visor.value + 2;

})
tecla3.addEventListener('click',() =>{

    visor.value = visor.value + 3;

})
tecla4.addEventListener('click',() =>{

    visor.value = visor.value + 4;

})
tecla5.addEventListener('click',() =>{

    visor.value = visor.value + 5;

})
tecla6.addEventListener('click',() =>{

    visor.value = visor.value + 6;

})
tecla7.addEventListener('click',() =>{

    visor.value = visor.value + 7;

})
tecla8.addEventListener('click',() =>{

    visor.value = visor.value + 8;

})
tecla9.addEventListener('click',() =>{

    visor.value = visor.value + 9;

})

btnConfirm.addEventListener('click', () =>{

    let valor = visor.value;

        if (valor%10>0) {

            alert ('Digite valores multiplos de 10!');

        } else {

        //debugger;

        while (valor>0) {

            if (valor>=100){

                notas.innerText = notas.innerText + '$ 100';
                valor = valor-100;

            }
            else if (valor>=50) {

                notas.innerText = notas.innerText + ' $ 50';
                valor = valor-50;

            }
            else if (valor>=20) {

                notas.innerText = notas.innerText + ' $ 20';
                valor = valor-20;

            }
            else if (valor>=10) {

                notas.innerText = notas.innerText + ' $ 10 ';
                valor = valor-10;

            }



        }
        //console.log (visor);

    }
})

