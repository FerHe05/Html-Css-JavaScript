function consultaEnderecos() {
    let cep = document.querySelector('#cep').value
    //let url = 'https://viacep.com.br/ws/' + cep + '/json/'

    //se o cep não tiver 8 números
    if (cep.length !== 8) {
        alert('Cep inválido')
        return
    }

    //url da api
    let url = `https://viacep.com.br/ws/${cep}/json/`

    fetch(url).then(function (response) {
        response.json().then(mostrarEnderecos)
    })
    //fetch consome a API
    //then é um promisse ele espera uma função
}

function mostrarEnderecos(dados){
    let resultado = document.querySelector('#resultado')
    /*
    if(dados.erro){
        resultado.innerHTML = 'Não foi possível localizar endereço'
    }else{
        resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
        <p>Complemento: ${dados.complemento}</p>
        <p>Bairro: ${dados.bairro}</p>
        <p>Cidade: ${dados.cidade} - ${dados.uf}</p>`
    }
    */

    if(dados.erro){
        resultado.innerHTML = 'Não foi possível localizar o endereço!'
    }else{
        const endereco = dados.logradouro ? `<p>Endereço: ${dados.logradouro}</p>` : 'Não localizado'
        //Aqui acontece o seguinte:
        //Crio uma constante endereço 
        //E defino uma condição: 'dados.logradouro ?', isso quer dizer: Dados logradouro exite? Ou poderia ser dados.logradouro !== 'undefined'
        //Então se isso é verdadeiro eu escrevo: `<p>Endereço: ${dados.logradouro}</p>`
        //Senão (else) ':', meu retorno será:  'não localizado'
        const complemento = dados.complemento ? `<p>Complemento: ${dados.complemento}</p>` : '';
        const bairro = dados.bairro ? `<p>Bairro: ${dados.bairro}</p>` : '';
        const cidadeUF = dados.localidade && dados.uf ? `<p>Cidade: ${dados.localidade} - ${dados.uf}</p>` : '';
    
        const conteudo = endereco + complemento + bairro + cidadeUF;

        // Atualiza o conteúdo do resultado
        resultado.innerHTML = conteudo;
    }
          
}
