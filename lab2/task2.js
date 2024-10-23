function displayBookWinners() {
    $.ajax({
        url: 'booker.json',
        dataType: 'json',
        success: function (data) {
            let output = '<ul>';
            $.each(data, function (index, winner) {
                output += `<li>${winner.author} - ${winner.title} - ${winner.year}</li>`;
            });
            output += '</ul>';
            $('#task1').html(output);
        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
        }
    });
}
