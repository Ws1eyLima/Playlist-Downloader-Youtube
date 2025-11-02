# 🎵 YouTube Playlist Downloader

Um projeto **educacional full stack** (HTML, CSS, JavaScript e Node.js) que permite listar vídeos de uma playlist do YouTube e realizar o download localmente — com foco em aprendizado sobre integração entre front e back-end.

> ⚠️ **Atenção:** este projeto é apenas para **fins educacionais**.  
> O YouTube proíbe o download de vídeos diretamente sem autorização.  
> O código aqui serve para aprendizado de consumo de APIs e manipulação de dados.

---

## 🧠 Visão Geral

O sistema possui duas partes principais:

| Parte | Descrição |
|-------|------------|
| **Front-end** | Interface visual criada com HTML, CSS e JS para listar vídeos e interagir com o usuário |
| **Back-end** | Servidor Node.js com Express e `ytdl-core`, responsável por processar e permitir downloads locais |

---

## 🧩 Funcionalidades

✅ Buscar vídeos de uma playlist do YouTube  
✅ Exibir miniatura, título e link de cada vídeo  
✅ Baixar vídeos localmente em formato `.mp4`  
✅ Proteger chaves de API com `.env`  
✅ Código simples e didático para estudos de integração front + back  

---

## 🗂️ Estrutura de Pastas

/projeto
├─ index.html
├─ style.css
├─ script.js
├─ server.js
├─ .env
├─ .gitignore
├─ package.json
├─ README.md
└─ /downloads

yaml
Copiar código

---

## ⚙️ Instalação e Execução

### 1️⃣ Clone o repositório

git clone https://github.com/SEU_USUARIO/youtube-playlist-downloader.git
cd youtube-playlist-downloader

2️⃣ Instale as dependências

npm install

3️⃣ Crie o arquivo .env

Crie um arquivo chamado .env na raiz do projeto e adicione sua chave da API do YouTube:
YOUTUBE_API_KEY=sua_chave_aqui
⚠️ Importante: nunca compartilhe este arquivo ou envie ele para o GitHub.

🚀 Executando o projeto

Inicie o servidor backend
node server.js
O servidor será iniciado em:
http://localhost:5000
Abra o front-end
Abra o arquivo index.html no seu navegador (duplo clique ou via Live Server no VS Code).

Cole o link de uma playlist do YouTube e clique em Buscar.
Você verá os vídeos listados com a opção Baixar.

🔒 Segurança e Boas Práticas
Adicione .env ao .gitignore (já configurado) para impedir o upload de chaves.
Se você acidentalmente subiu uma chave:
Revogue e gere uma nova no Google Cloud Console.
Em ambientes de produção (Heroku, Render, Vercel, etc):
Configure as variáveis de ambiente diretamente no painel do serviço.
Nunca coloque chaves no código do front-end.

🧰 Tecnologias Utilizadas

Front-end
HTML5
CSS3
JavaScript (Fetch API)
Back-end
Node.js
Express.js
ytdl-core
dotenv

💡 Próximos Passos (melhorias futuras)
 Adicionar opção de baixar apenas áudio (MP3) com ffmpeg
 Criar cache para playlists mais acessadas
 Exibir barra de progresso do download
 Hospedar o backend em Render ou Vercel

🧑‍💻 Contribuindo
Contribuições são bem-vindas! 🎉
Faça um fork do projeto
Crie uma nova branch:

git checkout -b feature/minha-feature
Faça suas alterações e commit:
git commit -m "Adiciona nova funcionalidade"
Envie para o seu fork:
git push origin feature/minha-feature
Abra um Pull Request para revisão

🪪 Licença
Este projeto é licenciado sob a MIT License.
Sinta-se livre para usar e modificar para fins educacionais.
Veja o arquivo LICENSE para mais detalhes.

📸 Prévia do Projeto
Adicione aqui uma imagem de exemplo do sistema em funcionamento:

