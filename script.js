/* Desafio 1 - Array de elementos por repetições

Dentro do for, definindo o i como zero, fiz com que enquanto o i for menor que o tamanho escolhido, ele aumentará e irá adicionando o valor escolhido em uma lista vazia que será retornada, fazendo assim com que sempre retorne a quantidade de arrar (e a frase) definidos

*/

function criarArray(tamanho, valor){

    let lista = []

    for (let i = 0; i < tamanho; i++){
        lista[i] = valor
    }

    return lista;
}

console.log(criarArray(5, 'pizza'))

/* Desafio 2 - Inverter array 

Aqui eu defini a variável listaReversa como sendo uma lista vazia para ir adicionando os valores la dentro

Dentro do for, levando em consideração que uma lista sempre começa na posição 0, eu defini o I como sendo o tamanho da lista - 1, e para ir diminuindo enquanto for maio ou igual a zero, ou seja, independente do tamanho da lista, o i sempre irá percorrer da ultima posição da lista até a primeira, depois so fui adicionando os "i" dentro da "listaReversa"

*/

function inverterArray(lista){

    let listaReversa = []

    for (let i = lista.length - 1; i >= 0; i-- ){
        listaReversa.push(lista[i])
    }

    return listaReversa;
}

console.log(inverterArray([1, 2, 3, 4, 5]))


/* Desafio 3 - Limpar array

Fiz um for simples para percorrer toda a lista definida, defini uma variável item para ser um item da lista de cada vez e criei um if para validar se o item não era nenhuma informação inválida, se não fosse, o codigo adicionaria o item na lista que será retornada

*/

function limpaArray(lista){

    let listaArrayLimpa = []

    for ( let i = 0; i < lista.length; i++){
        let item = lista[i]

            if(item !== false && item !== undefined && item !== "" && item !== 0 && item !== null){
                listaArrayLimpa.push(item)
        }
    }
    
    return listaArrayLimpa
}

console.log(limpaArray([1, '', undefined, 0, 4, 'ola']))

/* Desafio 4 - Converter array em objeto 

Aqui fiz um for para percorrer a lista definida e armazenar cada item dentro de uma variavel e dentro fiz outro for para percorrer cada item, atribuindo o valor "0" como chave e o valor "1" como valor do objeto

*/

function converterArrayParaObjeto(lista){

    let objeto = {}


    for (let i = 0; i < lista.length; i++){
        let item = lista[i]

        for (let i = 0; i < item.length ; i++){
            let item_1 = item[0]
            let item_2 = item[1]

            objeto[item_1] = item_2
        }
    }

    return objeto
}

console.log(converterArrayParaObjeto([["c",2],["d",4]]))

/* Desafio 5 - Filtrar array 

Aqui eu criei um for para percorrer a lista definida e adicionei cada item da lista na variavel "item" a cada passada do loop, definindo uma variavel "itemPresente" como false, depois fiz um for dentro for para percorrer a lista de itens a serem remolvidos, se um item da lista estiver nos itens a serem removidos a variavel "itemPresente" assume true e com isso o item não passa a validação do ultimo if e não é adicionado na lista

*/

function filtrarArray(lista, itensAseremRemolvidos){

    let listaFiltrada = []

    for (let i = 0; i < lista.length; i++){
        let item = lista[i]
        let itemPresente = false

        for(let j = 0; j < itensAseremRemolvidos.length; j++){
            if (item === itensAseremRemolvidos[j]){
                itemPresente = true
                break
            }
        }

        if(!itemPresente){
            listaFiltrada.push(item)
        }
    }

    return listaFiltrada
}

console.log(filtrarArray([5, 4, 3, 2, 5], [5, 3]))

/* Desafio 6 - Novo array sem valores duplicados 

Aqui eu criei um for dentro de um for, seguindo a lógica utilizada para o desafio anterior, o primeiro for esta percorrendo a lista definida e armazenando cada item por passada de loop dentro da variável "item" e defini uma variavel "itemDuplicado" como false, no segundo for eu estou percorrendo a lista "listaSemDuplicados" se o item da vez do loop for encontrado nessa lista, a variavel "itemDuplicado" assume o valor de true e com isso não passa na validação do if e assim não entra na lista, caso o item do loop não seja encontrado na "listaSemDuplicados", a variavel "itemDuplicado" conitnue com o valor false, passa na validação e o item é adicionado na lista

*/

function filtrarDuplicados(lista){
    let listaSemDuplicados = [];

    for (let i = 0; i < lista.length; i++){
        let item = lista[i]
        let itemDuplicado = false

        for (let j in listaSemDuplicados){
            if (item === listaSemDuplicados[j]){
                itemDuplicado = true;
                break;
            }
        }

        if (!itemDuplicado){
            listaSemDuplicados.push(item)
        }
    }

    return listaSemDuplicados;
}

console.log(filtrarDuplicados([1, 2, 3, 3, 2, 4, 5, 4, 7, 3]))


/* Desafio 7 - Igualar arrays

Aqui eu fiz um for simples para percorrer a primeira lista definida, pegando os valores um por um e comparando com os valores definidos na segunda lista, se os valores forem diferentes, returna false, se os valores forem iguais, returna true

*/

function compararArrays(lista1, lista2){

    for (let i = 0; i <lista1.length; i++){
        if (lista1[i] !== lista2[i]){
            return false;
        }
    }

    return true; 
}

console.log("lista 1:",compararArrays([1, 2, 3, 4], [1, 2, 3, 4]), 
            "lista 2:",compararArrays([1, 2, 3, 4], [1, 2, 3, 5])); 


/* Desafio 8 - Remover aninhamentos de um array 

Aqui fiz um for para percorrer a lista, dentro deste for fiz um if para validar se o tipo do item é um objeto (um "subarray"), se for um subarray o for percorre os itens desse subarray, adicionando cada elemento na lista "listaLimpa", se não for um objeto(subarray) ele é adicionado na lista "listaLimpa" diretamente.

*/


function removerAninhamento(lista){
    
    let listaLimpa = []

    for (let i = 0; i < lista.length; i++){
        if(typeof lista[i] === 'object'){
            for (let j = 0; j < lista[i].length; j++){
                listaLimpa.push(lista[i][j]);
            }
        }else{
            listaLimpa.push(lista[i])
        }
    }

    return listaLimpa;
}

console.log(removerAninhamento([1, 2, [3], [4, 5]]))


/* Desafio 9 - Dividir array 

Aqui eu defini 2 listas, sendo uma geral e a secundária para ir armazenando os elementos de acordo com a quantidade

Tentei fazer com que o primeiro for percorresse a lista e fosse adicionando os itens na lista secundária, caso o tamanho da lista secundária fosse igual a quantidade definida a lista secundária seria adicionada na lista principal e zerada para um novo loop

*/


function dividirArray(lista, quantidade){

    let listaGeral = [];
    let listaSecundária = [];

    for (let i = 0; i < lista.length; i++){
        listaSecundária.push(lista[i]);

        if (listaSecundária.length === quantidade){
            listaGeral.push(listaSecundária);
            listaSecundária = [];
        }
    }

    return listaGeral;
}

console.log(dividirArray([1, 2, 3, 4, 5], 2))


/* Desafio 10 - Encontrar valores comuns de arrays 

Aqui fiz um for dentro do outro, o primeiro percorre a primeira lista e armazena os elementos na variavel item com o passar do loop, o segundo for percorre a segunda lista e dentro dele tem um if que valida se o valor da variavel item é igual a algum valor da segunda lista, se for, ele é adicionado na "listaDeDuplicados"

*/

function filtrarSomenteDuplicados(lista1, lista2){
    let listaDeDuplicados = [];

    for (let i = 0; i < lista1.length; i++){
        let item = lista1[i]

        for (let j = 0; j < lista2.length; j++){
            if(item === lista2[j]){
                listaDeDuplicados.push(item)
            }
        }
    }
   
    return listaDeDuplicados
}

console.log(filtrarSomenteDuplicados([6, 8], [8, 9]))

/* Desafio 11 - Encontrar a intersecção de múltiplos arrays 

Primeiro, fiz a função listaContem para verificar se certo valor entra dentro de alguma lista

Depois na função filtrarComuns eu fiz um for para percorrer a matriz(lista) principal e cada lista dentro dela, e uma variavel "isComum" como true, fazendo a verificação assim com a função listaContem para ver se algum valor está presente em todas as listas, se estiver não estiver em tdas as listas, a variavel "isComum" muda para false e não passa na ultima validação, caso o elemento esteja presente em todas as listas, ele passa a validação e é adicionado na "listaDeComuns"

*/

function listaContem(lista, item) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === item) {
        return true;
      }
    }
    return false;
  }

function filtrarComuns(lista) {
    let listaDeComuns = [];
  
    for (let i = 0; i < lista[0].length; i++) {
      let item = lista[0][i];
      let isComum = true;
  
      for (let j = 1; j < lista.length; j++) {
        if (!listaContem(lista[j], item)) {
          isComum = false;
          break;
        }
      }
  
      if (isComum) {
        listaDeComuns.push(item);
      }
    }
  
    return listaDeComuns;
  }
  

  
  console.log(filtrarComuns([[1, 2, 3], [2, 3, 4], [3, 4, 5]])); // [3]
  