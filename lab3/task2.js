function displayAuthors() {
    fetch('pods98.xml',).then((response) => response.text()).then((data) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');
        const authors = xmlDoc.getElementsByTagName('author');
        let output = '<ul>';
        for (const author of authors) {
            output += `<li>${author.innerHTML}</li>`;
        }
        document.getElementById('task1').innerHTML = `${output} </ul>`;
    }).catch(error => console.error('Error:', error));
}