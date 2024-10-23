function displayBookWinners() {
    fetch('booker.json', ).then((response) => response.json()).then((data) => {
        let output = '<ul>';
        for (const winner of data) {
            output += `<li>${winner.author} - ${winner.title} - ${winner.year}</li>`;
        }
        document.getElementById('task1').innerHTML = `${output} </ul>`;
    }).catch(error => console.error('Error:', error));
}