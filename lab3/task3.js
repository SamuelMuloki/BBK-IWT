// Use JQuery to display the authors of the articles in the XML file.

function displayAuthors() {
    $.ajax({
        url: 'pods98.xml',
        dataType: 'xml',
        success: function (data) {
            let output = '<ul>';
            $(data).find('author').each(function () {
                output += `<li>${$(this).text()}</li>`;
            });
            output += '</ul>';
            $('#task1').html(output);
        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
        }
    });
}