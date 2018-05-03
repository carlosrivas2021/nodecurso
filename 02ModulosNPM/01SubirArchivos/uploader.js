'use strict'

var http = require('http').createServer(serverUpload),
    util = require('util'),
    formidable = require('formidable'),
    fse = require('fs-extra')

function serverUpload(req, res){
    
    if(req.method.toLowerCase() == 'get' && req.url == '/'){
        let form = `
        <h1>Uploader de Archivos</h1>
            <form action="/upload" enctype="multipart/form-data" method="post">
                <div><input type="file" name="upload" required></div>
                <div><input type="submit" value="Subir archivo"></div>
            </form>`
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(form)
    }
    if(req.method.toLowerCase() == 'post' && req.url == '/upload'){
        let form = new formidable.IncomingForm
        var err2 = 0
        var a = ''
        form.parse(req, function (err, fields, files){
            
            //console.log(files.upload)
            a = util.inspect( {files : files} )
            
        })
        form.on('progress', function (bytesReceived, bytesExpected){
            let percentCompleted = ( bytesReceived / bytesExpected ) * 100
            console.log(percentCompleted.toFixed(2));
            
        })
        form.on('error', function (err){
            console.log(err);
            
        })
        form.on('end', function (fields, files){
            //Ubicacion temporal del archivo que se sube
            let tempPath = this.openedFiles[0].path
            //Nombre del archivo subido
            let fileName = this.openedFiles[0].name
            //Nueva ubicación
            let newLocation = './upload/' + fileName
            //console.log(this.openedFiles[0].type)
            if (this.openedFiles[0].type == 'image/gif'){
                fse.copy(tempPath, newLocation, function (err){
                    (err) ? console.log(err) : console.log('El archivo se subió con éxito')
                    fse.remove(tempPath, function (err){
                        return (err) ? console.log(err) : console.log('El archivo se borro con éxito de temporales')
                    })
                })
                
                res.writeHead(200, { 'Content-Type' : 'text/html' } )
                
                res.write( `<h1>Archivos Recibidos</h1><code>${a}</code><br><a href="/">Volver</a>`)
            
                res.end()
            }else{
                fse.remove(tempPath, function (err){
                    return (err) ? console.log(err) : console.log('El archivo se borro con éxito')
                })
                res.writeHead(200, { 'Content-Type' : 'text/html' } )
                let form2 = `
                <h1>Uploader de Archivos</h1>
            <form action="/upload" enctype="multipart/form-data" method="post">
                <div><input type="file" name="upload" required></div>
                <div><input type="submit" value="Subir archivo"></div>
                <h3>Error del archivo</h3>
            </form>
                `
                res.write( form2 )
            
                res.end()
            }
        })

        return 
        
    }
    
}

http.listen(3000)

console.log('Servidor corriendo en el puerto 3000');
