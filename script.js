async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById("erro")
    mensagemErro.innerHTML=""
    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPconvertido = await consultaCEP.json()
        if(consultaCEPconvertido.erro) {
            throw Error("CEP inválido")
        }

        var endereco = document.getElementById("endereco")
        var cidade = document.getElementById("cidade")
        var estado = document.getElementById("estado")

        endereco.value = consultaCEPconvertido.logradouro
        cidade.value = consultaCEPconvertido.localidade
        estado.value = consultaCEPconvertido.uf

        console.log(consultaCEPconvertido)
        return consultaCEPconvertido
    }   catch (erro) {

        if(erro == "Error: CEP inválido") {
            mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente! </p>`
        } else {
            mensagemErro.innerHTML = `<p>Número de dígitos do CEP inválido </p>`
        }
        console.log(erro)
    }
}

let cep = document.getElementById('cep')
cep.addEventListener ("focusout", () => buscaEndereco(cep.value))

let endereco = document.getElementById("endereco")
let cidade = document.getElementById("cidade")
let estado = document.getElementById("estado")