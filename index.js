function novaPublicacao(id, titulo, descricao, link){
     this.id = id; 
     this.titulo = titulo; 
     this.descricao = descricao; 
     this.link = link; 
 }

 var postagem = [];

 const dialogNovoPost = document.querySelector('.dialog-novo-post');

//  Box Adicionar Novo Post - Neste comando, ao clicar no botão, abre o Dialog para inserir um Post.
 const boxNovoPost = document.querySelector('.box-adicionar-post'); 

 boxNovoPost.addEventListener('click', function() {
     dialogNovoPost.className = 'dialog-novo-post-show'; 
     
 });

 // Botão fechar a janela do Dialog - Neste comando, ao clicar no botão, a janela do Dialog irá se fechar
 const btnFecharDialog= document.querySelector('.btn-dialog-fechar');

 btnFecharDialog.addEventListener('click', function() {
    dialogNovoPost.className = 'dialog-novo-post';
 }); 

 // ------------------- ADICIONAR POST -----------------------
 const btnAdicionar = document.querySelector('.btn-dialog-adicionar');
 const inputTitulo = document.querySelector(".input-titulo");
 const inputDescricao = document.querySelector(".input-descricao");
 const inputImagem = document.querySelector(".input-link");
 const postagens = document.querySelector(".postagens");

 btnAdicionar.addEventListener('click', function() {
    
    let lista = document.querySelector('.row-post'); 
    let adicionarPublicacao = new novaPublicacao(localStorage.getItem('id'), inputTitulo.value, inputDescricao.value, inputImagem.value);

    postagem.push(adicionarPublicacao);

    let post = document.createElement("div"); 
    let tituloPost = document.createElement("h1");
    let descricaoPost = document.createElement("p"); 
    let imagemPost = document.createElement("img"); 
    let btnEditar = document.createElement("button"); 
    let btnExcluir = document.createElement("button");

    post.className = "publicacao"; 
    tituloPost.innerHTML = adicionarPublicacao.titulo; 
    descricaoPost.innerHTML = adicionarPublicacao.descricao;

    btnEditar.innerHTML = "Editar"; 
    btnEditar.className = "btn-editar-post";  
    btnExcluir.innerHTML = "Excluir";  
    btnExcluir.className = "btn-excluir-post";  
    imagemPost.src = adicionarPublicacao.link; 

    post.appendChild(tituloPost); 
    post.appendChild(descricaoPost); 
    post.appendChild(imagemPost); 
    post.appendChild(btnEditar); 
    post.appendChild(btnExcluir); 
    lista.appendChild(post)

 });


 // --------------------- EXCLUIR POST --------------------
 const botaoExcluirPostagem = document.querySelector('.btn-excluir-post')
 
 botaoExcluirPostagem.addEventListener('click', function() {
   
});

 const dialogEditarPost = document.querySelector('.dialog-editar-post');
 const btnFecharDialogEditar = document.querySelector('.btn-dialog-fechar-editar');

 const btnEditar = document.querySelector('.btn-dialog-editar');

 btnFecharDialogEditar.addEventListener('click', function(){
     dialogEditarPost.className = 'dialog-editar-post';
 }); 

