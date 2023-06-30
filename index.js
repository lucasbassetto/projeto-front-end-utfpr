// --------------------------------------- ADICIONAR POST ---------------------------------------
const dialogNovoPost = document.querySelector('.dialog-novo-post');
const btnAdicionar = document.querySelector('.btn-dialog-adicionar');
const inputTitulo = document.querySelector(".input-titulo");
const inputDescricao = document.querySelector(".input-descricao");
const inputImagem = document.querySelector(".input-link");

// --------------------------------------- EDITAR POST ---------------------------------------
const dialogEditarPost = document.querySelector('.dialog-editar-post')
const botaoEditar = document.querySelector('.btn-dialog-editar');
const inputTituloEditar = document.querySelector('.tituloEditar');
const inputDescricaoEditar = document.querySelector('.descricaoEditar');
const inputLinkEditar = document.querySelector('.linkEditar');

//  Box Adicionar Novo Post - Neste comando, ao clicar no botão, abre o Dialog para inserir um Post.
const boxNovoPost = document.querySelector('.box-adicionar-post');

boxNovoPost.addEventListener('click', function () {
    dialogNovoPost.className = 'dialog-novo-post-show';

});

// Botão fechar a janela do Dialog - Neste comando, ao clicar no botão, a janela do Dialog irá se fechar
const btnFecharDialog = document.querySelector('.btn-dialog-fechar');

btnFecharDialog.addEventListener('click', function () {
    dialogNovoPost.className = 'dialog-novo-post';
});

// Botão fechar a janela do Dialog Editar - Neste comando, ao clicar no botão, a janela do Dialog irá se fechar
const btnFecharDialogEditar = document.querySelector('.btn-dialog-fechar-editar');

btnFecharDialogEditar.addEventListener('click', function () {
    dialogEditarPost.className = 'dialog-editar-post';
});

// Botão Pesquisa - Neste comando, ao clicar no botão, a barra de pesquisa irá aparecer
const pesquisar = document.querySelector('.pesquisar')

pesquisar.addEventListener('click', function () {
    dialogBuscar.className = 'buscar-show'
})

// Botão Cancelar - Neste comando, ao clicar no botão, a barra de pesquisa irá se fechar
const cancelarBuscar = document.querySelector('.cancelar-buscar')

cancelarBuscar.addEventListener('click', function () {
    dialogBuscar.className = 'buscar'
    inputBusca.value = ""; 
    for(let post of publicacao){
        post.style.display = "block"; 
    }
})

var postagem = [];

if (localStorage.posts) {
    postagem = JSON.parse(localStorage.posts)
    showContent();
}

function novaPublicacao(id, titulo, descricao, link) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.link = link;
}


class Implementacao {

    constructor() {

    }

    addPost() {

        const titulo = inputTitulo.value.trim();
        const descricao = inputDescricao.value.trim();
        const link = inputImagem.value.trim();

        if (titulo === '' || descricao === '' || link === '') {
            const aviso = document.querySelector('.aviso');
            aviso.textContent = 'Por favor, preencha todos os campos.';
            aviso.style.display = 'block';
            return;
        }

        let lista = document.querySelector('.row-post');
        let adicionarPublicacao = new novaPublicacao(localStorage.getItem('id'), titulo, descricao, link);

        if (localStorage.posts) {
            postagem = JSON.parse(localStorage.posts);
        }

        postagem.push(adicionarPublicacao);

        localStorage.posts = JSON.stringify(postagem);

        let post = document.createElement('div');
        let idPost = document.createElement('p');
        let tituloPost = document.createElement('h1');
        let descricaoPost = document.createElement('p');
        let imagemPost = document.createElement('img');
        let btnEditar = document.createElement('button');
        let btnExcluir = document.createElement('button');

        post.className = 'publicacao';
        idPost.innerHTML = adicionarPublicacao.id;
        tituloPost.innerHTML = adicionarPublicacao.titulo;
        descricaoPost.innerHTML = adicionarPublicacao.descricao;
        imagemPost.src = adicionarPublicacao.link;
        btnEditar.innerHTML = 'Editar';
        btnEditar.className = 'btn-editar-post';
        btnExcluir.innerHTML = 'Excluir';
        btnExcluir.className = 'btn-excluir-post';


        post.appendChild(idPost);
        post.appendChild(tituloPost);
        post.appendChild(imagemPost);
        post.appendChild(descricaoPost);
        post.appendChild(btnEditar);
        post.appendChild(btnExcluir);

        lista.appendChild(post);

        // Implementando a soma do ID nos posts
        let i = parseInt(localStorage.getItem('id'));
        i++;
        localStorage.setItem('id', i);

        location.reload();
    }

    editPost() {
        var i;

        const botoesEditar = document.querySelectorAll('.btn-editar-post');

        botoesEditar.forEach((botao, indice) => {
            botao.addEventListener('click', () => {
                i = indice;
                inputTituloEditar.value = postagem[i].titulo;
                inputDescricaoEditar.value = postagem[i].descricao;
                inputLinkEditar.value = postagem[i].link;
                dialogEditarPost.className = 'dialog-editar-post-show';
            });
        });

        botaoEditar.addEventListener('click', () => {
            postagem[i].titulo = inputTituloEditar.value;
            postagem[i].descricao = inputDescricaoEditar.value;
            postagem[i].link = inputLinkEditar.value;
            localStorage.posts = JSON.stringify(postagem);
            location.reload();
        });
    }

    deletePost() {
        const botoes = document.querySelectorAll('.btn-excluir-post');

        botoes.forEach((botao, indice) => {
            botao.addEventListener('click', () => {
                const id = postagem[indice].id;
                postagem = postagem.filter((p) => p.id !== id);
                localStorage.posts = JSON.stringify(postagem);
                document.querySelector('.row-post').removeChild(botao.parentElement);
                location.reload();
            });
        });
    }

    search() {
        const inputBusca = document.querySelector('.input-buscar');
        const publicacoes = document.querySelectorAll('.publicacao');
    
        const textoBusca = inputBusca.value.toLowerCase().trim();
    
        for (let publicacao of publicacoes) {
            const titulo = publicacao.querySelector('h1').textContent.toLowerCase();
    
            if (titulo.includes(textoBusca)) {
                publicacao.style.display = 'block';
            } else {
                publicacao.style.display = 'none';
            }
        }
    }
}

var implementacao = new Implementacao();

btnAdicionar.addEventListener('click', implementacao.addPost)
document.addEventListener('DOMContentLoaded', implementacao.editPost);
document.addEventListener('DOMContentLoaded', implementacao.deletePost);

// --------------------------------------- PESQUISAR POST ---------------------------------------
const dialogBuscar = document.querySelector('.buscar');
const inputBusca = document.querySelector('.input-buscar');
const publicacao = document.querySelectorAll('.publicacao')


inputBusca.addEventListener('input', implementacao.search)

function showContent() {
    for (let i = 0; i < postagem.length; i++) {

        let lista = document.querySelector('.row-post');
        let post = document.createElement("div");
        let idPost = document.createElement("p");
        let tituloPost = document.createElement("h1");
        let descricaoPost = document.createElement("p");
        let imagemPost = document.createElement("img");
        let btnEditar = document.createElement("button");
        let btnExcluir = document.createElement("button");

        post.className = "publicacao";
        idPost.innerHTML = postagem[i].id;
        tituloPost.innerHTML = postagem[i].titulo;
        descricaoPost.innerHTML = postagem[i].descricao;
        btnEditar.innerHTML = "Editar";
        btnEditar.className = "btn-editar-post";
        btnExcluir.innerHTML = "Excluir";
        btnExcluir.className = "btn-excluir-post";
        imagemPost.src = postagem[i].link;

        post.appendChild(idPost);
        post.appendChild(tituloPost);
        post.appendChild(imagemPost);
        post.appendChild(descricaoPost);
        post.appendChild(btnEditar);
        post.appendChild(btnExcluir);
        lista.appendChild(post)
    }
}
