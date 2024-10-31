const form = document.getElementById('form2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const word = document.getElementById('translate-word2').value;
    fetch(`/translate?word=${word}`).then((response) => response.text()).then((data) => {
        document.getElementById('result').innerHTML = data;
    }).catch(error => console.error('Error:', error));
});
