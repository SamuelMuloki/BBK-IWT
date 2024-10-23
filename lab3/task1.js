async function displayAuthors() {
    try {
        const response = await fetch('pods98.xml');
        const data = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');
        const authors = xmlDoc.getElementsByTagName('author');
        let output = '<ul>';
        for (const author of authors) {
            output += `<li>${author.innerHTML}</li>`;
        }
        document.getElementById('task1').innerHTML = `${output} </ul>`;
    } catch (error) {
        console.error('Error:', error);
    }
}