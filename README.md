# Discoteta

O projeto foi desenvolvido com o objetivo de permitir aos usuários criar listas de reprodução e associar músicas a essas listas. Algumas das principais funcionalidades incluem:

1. **Criação de Listas de Reprodução:**
  - Os usuários podem criar novas listas de reprodução, fornecendo um nome e uma descrição.

2. **Cadastro de Músicas:**
  - Adição de novas músicas à base de dados, especificando título, artista, ano, gênero, álbum e associando a uma lista de reprodução existente.

3. **Visualização de Listas de Reprodução:**
  - Visualização de todas as listas de reprodução cadastradas, exibindo seus detalhes como nome e descrição.

4. **Gerenciamento de Músicas:**
- Os usuários podem visualizar e gerenciar músicas associadas a cada lista de reprodução.

## Instalação

1. Clone o repositório: `git clone https://github.com/MessiasViana/discoteca`
2. Entre no diretório: `cd seu-projeto`
3. Instale as dependências: `npm install`


## Execução

Para iniciar o servidor de desenvolvimento, use o comando:

```bash
ng serve
```

O aplicativo estará disponível em http://localhost:4200/.

## Estrutura do Projeto

- `src/`: Contém o código-fonte do projeto.
  - `app/`: Código-fonte específico do aplicativo.
    - `components/`: Componentes reutilizáveis.
    - `models/`: Modelos de dados.
    - `services/`: Serviços para interação com a API ou lógica de negócios.
  - `environments/`: Configurações específicas de ambiente.

## Componentes

### Header Component

Este componente é responsável por exibir o cabeçalho do aplicativo.

### Home Component

O componente Home exibe todas as playlists cadastradas. É a página principal do aplicativo onde os usuários podem criar novas playlists e visualizar as existentes.

### ItemPlaylist Component

O ItemPlaylist Component exibe detalhes de uma playlist específica, incluindo todas as músicas associadas a ela. Pode ser usado para mostrar informações detalhadas de uma playlist quando o usuário seleciona uma playlist na página Home.

### Musics Component

O Musics Component exibe todas as músicas cadastradas no sistema. Pode ser usado para gerenciar e visualizar todas as músicas, independentemente da playlist à qual estão associadas.


## Tecnologias

- Angular
- TypeScript
- Bootstrap
