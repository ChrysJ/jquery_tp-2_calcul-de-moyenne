$(document).ready(function () {
    $('#button-style').click(function () {
        var note1 = parseFloat($('#note-1').val());
        var note2 = parseFloat($('#note-2').val());
        var note3 = parseFloat($('#note-3').val());
        var note4 = parseFloat($('#note-4').val());
        var note5 = parseFloat($('#note-5').val());
        var result = (note1 + note2 + note3 + note4 + note5) / 5;
        if (note1 >= 0 && note1 <= 20 && note2 >= 0 && note2 <= 20 && note3 >= 0 && note3 <= 20 && note4 >= 0 && note4 <= 20 && note5 >= 0 && note5 <= 20) {
        if (result >= 0 && result <=10){
            alert('En dessous la moyenne est : ' + result);
        } else if ( result >= 10 && result <=13){
            alert('Moyenne la moyenne est : ' + result);
        } else if (result >=13 && result <=16){
            alert('Bien la moyenne est : ' + result);
        } else if (result <=16 && result <=20){
            alert('Trés bien la moyenne est : ' + result);
        } else if (result == 20){
            alert('Excellent la moyenne est : ' + result);
        }} else  { alert('attention, note invalide')}
    })
        
});