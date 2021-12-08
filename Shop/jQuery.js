
$('#btn1').click(() => {
    $('#list').slideToggle("slow")
    $('#btn1').text("Mostrar/Ocultar")
    
})

$('#btnAgregar').click(() => {
    $('#alert').remove()
    
    $('#container-form').append(
        '<div id="alert" class="mt-4 text-center alert alert-success" role="alert"> ¡Compra realizada con exito!</div>');
        
    $('#alert').fadeIn('slow').delay(2000).fadeOut('slow');
        
        
})

