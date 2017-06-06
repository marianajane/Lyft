 $('#splash').ready() {
        $('#main').load('file.html');
        setTimeout(function() {
            $('#main').ready(function() {
                $('#splash').remove();
                window.location.href = "file.html";
            });
        }, 2000);
    }