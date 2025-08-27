const express = require('express');


//Express aplicativo - configurando o acesso as funções
const app = express();


//registrar a viasualização da engenharia
//depois disso tive que mudar minhas extensões .html para .ejs
app.set('view engine', 'ejs')

//ouvindo as requisições na porta
app.listen(3001);

//acessando a rota
// app.get('/',(req,res)=>{
//     res.send('<p>Página inicial<p>');
// });

// app.get('/',(req,res)=>{   ANTES => usando também express PORÉM O ARQUIVO É .HTML
//     res.sendFile('./views/index.html', {root: __dirname});
// });
// O CÓDIGO ABAIXO SIMPLIFICA MAIS, USANDO EJS NOTE: A DIFERENÇA DE CIMA E DEBAIXO
// acima eu tive que passar o caminho ('./views/index.html', {root: __dirname});
// abaixo é só chamar o nome do index MAS, TIVER QUE MUDAR O NOME DO ARQUIVO
//PARA   index.js  De: .html Para: .js
// app.get('/',(req, res) => {
//     res.render('index');
// });

//aula 04 com passagem de parametro titulo  ==> ANTES DESSA FORMA SÓ PASSANDO PARAMETRO PARA O HEADER
// app.get('/',(req, res) => {
//     res.render('index', { titulo: 'Home'});
// });

//ABAIXO É PASSANDO PARAMETRO PARA O CORPO
app.get('/',(req, res) => {

    //passando parametro para o body
    const blogs = [
        {titulo: 'chamander', conteudo: 'A porta de seu rabo está constantemente em chamas e se for apagada pode resultar em sua morte.'},
        {titulo: 'Squirtle', conteudo: 'Seu casco resuz a resistência contrA a água fazendo com quE ele nade mais rápido.'},
        {titulo: 'Bulbasaur', conteudo: 'Ao evoluir o buldo começa a desabrochar até sE tornar uma grande flor na evolução final.'},
    ];
    res.render('index', { titulo: 'Home', blogs });
});

//nova rota
// app.get('/sobre',(req,res)=>{
//     res.send('<p>Página Sobre Nós<p>')
// });
// app.get('/sobre',(req,res)=>{
//     res.sendFile('./views/sobre.html', {root: __dirname});
// });

// app.get('/sobre',(req, res) => {
//     res.render('sobre');
// });

app.get('/sobre',(req, res) => {
    res.render('sobre', { titulo: 'sobre'});
});

//redirecionamento de página
app.get("/sobrenos",(req, res) => {
    res.redirect('/sobre')
});

// aula 04  rota da criação do conteúdo
// app.get('/blog/criar', (req, res) => {
//     res.render('criar');
// });
//acima é antes sem passagem de parametro
app.get('/blog/criar', (req, res) => {
    res.render('criar', { titulo:  'criar novo Blog'});
});

//erro 404
// app.use((req,res) =>{
//     res.status(404).sendFile('./views/404.html', {root: __dirname});
// });

// app.use((req,res) => {
//     res.status(404).render('404');
// });
//acima é antes sem passagem de parametro
app.use((req,res) => {
    res.status(404).render('404', { titulo: '404'});
});

// aula 04
//o que é parametro no nodejs?
// Em Node.js, parâmetros são valores que você passa para uma função ou método quando o chama