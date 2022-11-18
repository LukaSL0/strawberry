const $input = document.getElementById('trocar-moeda');
const $moedap = document.getElementById('moeda-mes');
const $precop = document.getElementById('preco-mes');
const $moedam = document.getElementById('moeda-vida');
const $precom = document.getElementById('preco-vida');
const $moedae = document.getElementById('moeda-emp');
const $precoe = document.getElementById('preco-emp');

$input.addEventListener('change', trocando)

function trocando() {
  let value = this.value;

    if (value == "1"){
      reais();
    }else if (value == "2"){
      dollar();
    } else {
      alert('[ERRO] Desconhecido.');
    }
}

const reais = () => {
    $precop.innerHTML = '15';
    $moedap.innerHTML = 'R$'

    $moedap.classList.add('moeda');
    $moedap.classList.remove('valor');
    $precop.classList.add('valor');
    $precop.classList.remove('moeda');

    $precom.innerHTML = '50';
    $moedam.innerHTML = 'R$'

    $moedam.classList.add('moeda');
    $moedam.classList.remove('valor');
    $precom.classList.add('valor');
    $precom.classList.remove('moeda');

    $precoe.innerHTML = '70';
    $moedae.innerHTML = 'R$'

    $moedae.classList.add('moeda');
    $moedae.classList.remove('valor');
    $precoe.classList.add('valor');
    $precoe.classList.remove('moeda');
}

const dollar = () => {
    $precop.innerHTML = '$';
    $moedap.innerHTML = '5'

    $moedap.classList.remove('moeda');
    $moedap.classList.add('valor');
    $precop.classList.remove('valor');
    $precop.classList.add('moeda');

    $precom.innerHTML = '$';
    $moedam.innerHTML = '10'

    $moedam.classList.remove('moeda');
    $moedam.classList.add('valor');
    $precom.classList.remove('valor');
    $precom.classList.add('moeda');

    $precoe.innerHTML = '$';
    $moedae.innerHTML = '14'

    $moedae.classList.remove('moeda');
    $moedae.classList.add('valor');
    $precoe.classList.remove('valor');
    $precoe.classList.add('moeda');
}