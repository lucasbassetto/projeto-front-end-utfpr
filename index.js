function novaPublicacao(id, titulo, descricao, link){
     this.id = id; 
     this.titulo = titulo; 
     this.descricao = descricao; 
     this.link = link; 
 }

 const dialogNovoPost = document.querySelector('.dialog-novo-post');

//  Box Adicionar Novo Post - Neste comando, ao clicar no botão, abre o Dialog para inserir um Post.
 const boxNovoPost = document.querySelector('.box-adicionar-post'); 

 boxNovoPost.addEventListener('click', function() {
     dialogNovoPost.className = 'dialog-novo-post-show'; 
 });

 // Botão fechar a janela do Dialog - Neste comando, ao clicar no botão, a janela do Dialog irá se fechar
 const btnFecharDialog= document.querySelector('.btn-dialog-fechar');

 btnFecharDialog.addEventListener('click', function() {
     location.reload();
 }); 

 const btnAdicionar = document.querySelector('.btn-dialog-adicionar');

 btnAdicionar.addEventListener('click', function() {

 });

 const dialogEditarPost = document.querySelector('.dialog-editar-post');
 const btnFecharDialogEditar = document.querySelector('.btn-dialog-fechar-editar');

 const btnEditar = document.querySelector('.btn-dialog-editar');

 btnFecharDialogEditar.addEventListener('click', function(){
     dialogEditarPost.className = 'dialog-editar-post';
 }); 


