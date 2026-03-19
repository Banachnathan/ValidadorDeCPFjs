class ValidaCPFs{
    constructor(){
        this.cpfInput = document.getElementById('input-cpf')
        this.btnEnviar = document.getElementById('btn-enviar')


        this.iniciaValidador()
    }


    limpaCpf(cpf){
        let cpfLimpo = cpf.replace(/\D/g, '')
        if (cpfLimpo.length !== 11){
            return null
        }
        return cpfLimpo
    }

    primeiroDigito(cpfLimpo){
        let peso = 10
        let soma = 0
        let cpfNoveDigitos = cpfLimpo.slice(0, 9)
        for (let digito of cpfNoveDigitos){
            soma += Number(digito) * peso
            peso--
        }
        
        let resto = soma % 11
        let primeiroDigito = resto < 2 ? 0 : 11 - resto
        
        return primeiroDigito
    }

    
    iniciaValidador(){
        this.btnEnviar.addEventListener('click', (e) => {
            e.preventDefault()
            
            const cpf = this.cpfInput.value
            const cpfLimpo = this.limpaCpf(cpf)
            
            if (!cpfLimpo){
                console.log('CPF inválido')
                return
            }

            const primeiroDigito = this.primeiroDigito(cpfLimpo)
            console.log(cpfLimpo)
            console.log('primeiro digito: ', primeiroDigito)
            
        })
    }
}

let cpf1 = new ValidaCPFs()