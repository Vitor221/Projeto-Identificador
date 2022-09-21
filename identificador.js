function identificar() {
  let tnome = document.getElementById('tnome')
  let tsobre = document.getElementById('tsobre')
  let resul = document.querySelector('div#resul')
  let temail = document.querySelector('input#temail')
  let tano = document.getElementById('tano')
  let data = new Date()
  let ano = data.getFullYear()

  if (tnome.value.length == 0 || tsobre.value.length == 0 || temail.value.length == 0 || tano.value.length == 0){
    alert('Campo vazio!')
  } else {
    let idade = ano - Number(tano.value)
    let sexo = document.getElementsByName('sex')
    let genh = 'homem'
    let genf = 'mulher'

    if(sexo[0].checked) {
    resul.innerHTML = `Seu nome é ${tnome.value} ${tsobre.value}, tem ${idade} anos e é ${genh} <br> Seu email ${temail.value}`
  } else if (sexo[1].checked) {
    resul.innerHTML = `Seu nome é ${tnome.value} ${tsobre.value}, tem ${idade} anos e é ${genf} <br> Seu email ${temail.value}`
  }
  
  }

  

}