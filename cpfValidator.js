class ValidaCPFs {
    constructor(){
        this.inputCPF = document.getElementById('input-cpf')
        this.btnEnviar = document.getElementById('btn-enviar')
        this.campoCPF = document.getElementById('campo-cpf')
        this.btnEnviar.addEventListener('click', (e) => {
            e.preventDefault()
            let cpf = this.inputCPF.value
            return this.mostrarCPFvalido(cpf)
        })
    }

    cpfLimpo(cpf){
        let cpfLimpo = cpf.replace(/\D/g, '')
        return cpfLimpo
    }

    normalizaCpf(cpf){
        let cpfLimpo = this.cpfLimpo(cpf)
        let cpfNoveDigitos = cpfLimpo.slice(0, 9)
        return cpfNoveDigitos
    }

    primeiroDigito(cpf){
        let cpfLimpo = this.normalizaCpf(cpf)
        let peso = 10;
        let soma = 0
        for (let numero of cpfLimpo){
            soma += Number(numero) * peso
            peso--
        }
        

        let resto = soma % 11
        let decimoDigito = resto < 2 ? 0 : 11 - resto

        return decimoDigito
    }

    segundoDigito(cpf){
        let cpfLimpo = this.normalizaCpf(cpf) + this.primeiroDigito(cpf)
        let peso = 11;
        let soma = 0;
        for (let numero of cpfLimpo){
            soma += Number(numero) * peso
            peso --
        }

        let resto = soma % 11
        let ultimoDigito = resto < 2 ? 0: 11 - resto

        return ultimoDigito
    }

    cpfCorreto(cpf){
        let cpfCorreto = this.normalizaCpf(cpf) + this.primeiroDigito(cpf) + this.segundoDigito(cpf)
        console.log(cpfCorreto)
        return cpfCorreto
    }

    
    sequencia(cpf) {
        return /^(\d)\1+$/.test(cpf)
    }
    
    
    
    valida(cpf){
        let cpfLimpo = this.cpfLimpo(cpf)
    
        if (cpfLimpo.length !== 11) return false
        if (this.sequencia(cpfLimpo)) return false
    
        if (this.cpfCorreto(cpf) === cpfLimpo){
            return true
        } 
        
        return false
    }

    mostrarCPFvalido(cpf){
        let campo = this.campoCPF
        campo.innerHTML = `CPF: ${cpf} é ${this.valida(cpf) ? '<span class = "span1"> Válido </span>' : '<span class = "span2"> Inválido </span>'}`
    }
}  

let cpf1 = new ValidaCPFs()