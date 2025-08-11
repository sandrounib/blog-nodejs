const express = require('express');


//Express aplicatino - configurando o acesso as funções
const app = express();


//registrar a viausalização da engenharia
//depois disse tive que mudar minhas extensões .html para .ejs
app.set('view engine','ejs')

//ouvindo as requisições na porta
app.listen(3001);

//acessando a rota
// app.get('/',(req,res)=>{
//     res.send('<p>Página inicial<p>');
// });

// app.get('/',(req,res)=>{   ANTES
//     res.sendFile('./views/index.html', {root: __dirname});
// });
// O CÓDIGO ABAIXO SIMPLIFICA MAIS, USANDO EJS NOTE A DIFERENÇA DE CIMA E DEBAIXO
// acima eu tive que passar o caminho ('./views/index.html', {root: __dirname});
// abaixo é só chamar o nome do index
app.get('/',(req,res)=>{
    res.render('index');
});
//nova rota
// app.get('/sobre',(req,res)=>{
//     res.send('<p>Página Sobre Nós<p>')
// });
// app.get('/sobre',(req,res)=>{
//     res.sendFile('./views/sobre.html', {root: __dirname});
// });

app.get('/sobre',(req,res)=>{
    res.render('sobre');
});

//redirecionamento de página
app.get("/sobrenos",(req,res)=>{
    res.redirect('/sobre')
});

//erro 404
// app.use((req,res) =>{
//     res.status(404).sendFile('./views/404.html', {root: __dirname});
// });

app.use((req,res) =>{
    res.status(404).render('404');
});