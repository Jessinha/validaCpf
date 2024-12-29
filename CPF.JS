
const validaCPF = (cpf) => {

    cpf = cpf.replace(/\D/g, '')

    if (cpf.length !== 11) {
        console.error('CPF Invalido');
        return
    }

    const proximoDigitoVerificador = (cpfIncompleto) => {
        let somatoria = 0 
        
        for (let i = 0; i < cpfIncompleto.length; i++) {
            let digitoAtual = cpfIncompleto.charAt(i)
            
            let constante = (cpfIncompleto.length + 1 - i) 

            somatoria += Number(digitoAtual) * constante
            
            
        }
        const resto = somatoria % 11
       

        return resto < 2 ? "0" : (11 - resto).toString()
    }

    
      
    
      let primeiroDigitoVerificador = proximoDigitoVerificador(cpf.substring(0,9))
      let segundoDigitoVerificador = proximoDigitoVerificador(cpf.substring(0,9) + primeiroDigitoVerificador)
      

      let cpfcorreto  = cpf.substring(0,9) + primeiroDigitoVerificador + segundoDigitoVerificador

      if (cpf !== cpfcorreto) {
        console.error('CPF invalido.')
        return

      }

      console.log('CPF valido!')
      return true
    
}

validaCPF("043.820.861-75")