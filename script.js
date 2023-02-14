let musicas = [
    { titulo: 'Let Her Go', artista: 'Fruits Release', src: 'music/Let Her Go [Lofi Fruits Release] (320 kbps).mp3', img: 'img/lofi1.gif' },
    { titulo: 'Soothing Breeze', artista: 'Asian', src: 'music/Soothing Breeze [asian lofi hip hop] lofi2.mp3', img: 'img/lofi2.gif' },
    { titulo: '5AM IN TOKYO', artista: 'Mellow Chill', src: 'music/5AM IN TOKYO -  Mellow chill  jazz hip hop beats (128 kbps).mp3', img: 'img/lofi3.gif' },
    { titulo: 'Missing You', artista: 'Desconhecido', src: 'music/Missing You (128 kbps).mp3', img: 'img/lofi4.gif' },
    { titulo: 'Dontcry x Glimlip', artista: 'Jiro Dreams', src: 'music/Dontcry x Glimlip - Jiro Dreams (128 kbps) lofi5.mp3', img: 'img/lofi5.gif' },
    { titulo: 'Afternoon Jazz', artista: 'Desconhecido', src: 'music/Afternoon Jazz  [lofi hip hop_study beats] lofi6(128 kbps).mp3', img: 'img/lofi6.gif' },
    { titulo: 'dryhope', artista: 'Whrite Oak', src: 'music/dryhope - White Oak [chill hip hop beats] (320 kbps).mp3', img: 'img/lofi7.gif' },
    { titulo: 'Lindecis', artista: 'Soulful', src: 'music/Lindecis - Soulful (128 kbps).mp3', img: 'img/lofi8.gif' },
    { titulo: 'Lofi nine', artista: 'Desconhecido', src: 'music/lofi9.mp3', img: 'img/lofi9.gif' },
    { titulo: 'lofi songs for slow days', artista: 'Songs', src: 'music/lofi songs for slow days (128 kbps).mp3', img: 'img/lofi10.gif' },

]

let musica = document.querySelector('audio');
let indexMusica = 0;
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeDaMusica = document.querySelector('.descricao h2');
let nomeDoArtista = document.querySelector('.descricao i');

mudarMusica(indexMusica);

document.querySelector('.botao-play').addEventListener('click', tocarMusica);
document.querySelector('.botao-pause').addEventListener('click', pausarMusica);
musica.addEventListener('timeupdate', atualizarBarra);
document.querySelector('.voltar').addEventListener('click', voltarMusica);

document.querySelector('.pular').addEventListener('click', proximaMusica);

function voltarMusica()  {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 10;
    }
    mudarMusica(indexMusica);
    corrigirBotaoVoltar();
}
function proximaMusica(){
        indexMusica++;
        if (indexMusica > 10) {
            indexMusica = 0;
        }
        mudarMusica(indexMusica);
        corrigirBotaoPular();
    
}


function corrigirBotaoVoltar() {
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.botao-pause').style.display = 'none';
}
function corrigirBotaoPular() {
    musica.play();
    document.querySelector('.botao-play').style.display = 'none';
    document.querySelector('.botao-pause').style.display = 'block';
}

function mudarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeDaMusica.textContent = musicas[index].titulo;
        nomeDoArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica() {
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
    continuarMusica();
}


function pausarMusica() {
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));

    if (musica.currentTime === musica.duration) {
        proximaMusica();
    }
}

function segundosParaMinutos(segundos) {
    let = campoMinutos = Math.floor(segundos / 60);
    let = campoSegundos = segundos % 60;

    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos + ':' + campoSegundos;
}