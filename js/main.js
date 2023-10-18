$(document).ready(function(){
    $('#carousel-imagens').slick({autoplay: true})

    $('.menu-hamburger').click(function(){
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }, 
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        },

        messages: {
            nome: 'Por favor, insira o nome'
        },

        submitHandler: function(form){
            console.log(form)
        },

        invalidHandler: function(evento, validador){
            var camposIncorretos = validador.numberOfInvalids()
            //O validador retorna o número de campos incorretos
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato')

        const nomeVeiculo = $(this).parent().find('h3').text()
        $('#veiculo-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

    //Levando o usuário para a seção desejada
    $('#link-sobre').click(function(){
        $('html').animate({scrollTop: $('#sobre-a-loja').offset().top}, 1000)
    })

    $('#link-destaque').click(function(){
        $('html').animate({scrollTop: $('#em-destaque').offset().top}, 1000)
    })

    $('#link-promocoes').click(function(){
        $('html').animate({scrollTop: $('#promocoes').offset().top}, 1000)
    })

    $('#link-contato').click(function(){
        $('html').animate({scrollTop: $('#contact').offset().top}, 1000)
    })
})