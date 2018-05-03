(function (d, io, $){
    'use strict'

    var io = io()
    $('#chat-form').on('submit', function (e){
        e.preventDefault()
        io.emit('new message', $('#message-text').val())
        $('#message-text').val(null)
        return false
    })
    io.on('new user', function(newUser){
        console.log(newUser.message);
        $('#chat').append('<li>'+newUser.message+'</li>')
    })

    io.on('user says', function(userSays){
        console.log(userSays);
        $('#chat').append('<li>'+userSays+'</li>')
    })

    io.on('bye bye user', function(byeByeUser){
        console.log(byeByeUser.message);
        $('#chat').append('<li>'+byeByeUser.message+'</li>')
    })
})(document, io, jQuery)