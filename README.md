LATECE — Laboratório de Tecnologia Assistiva
https://img.shields.io/badge/GitHub%2520Pages-Online-brightgreen
https://img.shields.io/badge/License-CC%2520BY--NC--SA%25204.0-blue
https://img.shields.io/badge/JavaScript-ES6%252B-yellow
https://img.shields.io/badge/HTML5-Semantic-orange
https://img.shields.io/badge/CSS3-Custom%2520Properties-blueviolet

Sobre o LATECE
O Laboratório de Tecnologia Assistiva do Centro de Educação (LATECE), vinculado ao Laboratório Interdisciplinar de Formação de Educadores (LIFE) da Universidade Federal do Rio Grande do Norte (UFRN), é um espaço de ensino, pesquisa e extensão dedicado à Tecnologia Assistiva.

A Tecnologia Assistiva compreende recursos, estratégias, serviços e práticas voltados à promoção da acessibilidade, autonomia e participação de pessoas com deficiência e com necessidades educacionais específicas. O LATECE atua em áreas como Comunicação Alternativa, acessibilidade ao computador, adequação postural, mobilidade, acessibilidade sensorial e produção de materiais pedagógicos acessíveis.

Fundado em 2017, o laboratório desenvolve pesquisas, ações formativas e projetos voltados à inclusão, mantendo parcerias com escolas, serviços especializados, setores da universidade e instituições de ensino superior (UERN, UERJ, UFRRJ). Parte das ações é viabilizada por editais do CNPq e da FINEP.

Sobre este projeto
Este repositório contém o website institucional do LATECE, desenvolvido para ser publicado no GitHub Pages em um subdiretório (/lateceufrn/). O site tem caráter público e informativo, com painel administrativo restrito.

O projeto foi convertido de uma arquitetura anterior baseada em Nuxt 3 + Vue.js + TypeScript para uma arquitetura deliberadamente simplificada, utilizando HTML5, CSS3, JavaScript Vanilla (ES Modules) e JSON, garantindo leveza, compatibilidade e facilidade de manutenção.

Objetivos do Website
Divulgar informações institucionais sobre o LATECE.

Apresentar a equipe de pesquisadores, colaboradores e estudantes.

Disponibilizar o catálogo de equipamentos de Tecnologia Assistiva.

Oferecer repositório de publicações científicas.

Publicar notícias, eventos e avisos.

Promover a acessibilidade e inclusão digital por meio de recursos de acessibilidade integrados.

Fornecer um canal de sugestões para a comunidade.

Disponibilizar um painel administrativo para gestão de conteúdo (em ambiente com backend).

Tecnologias utilizadas
Categoria	Tecnologias
Linguagens	HTML5, CSS3, JavaScript (ES Modules), JSON
Design System	CSS Custom Properties (variáveis), Layout modular, componentes reutilizáveis
Acessibilidade	ARIA, Skip links, Alto contraste, Ajuste de fonte, Redução de movimento
Internacionalização	i18n com JSON de traduções (pt/en), localStorage para persistência
Hospedagem	GitHub Pages (subdiretório /lateceufrn/)
Versionamento	Git
Arquitetura
O site segue uma arquitetura estática com componentes dinâmicos, onde:

As páginas são arquivos .html independentes.

O cabeçalho (header) e rodapé (footer) são injetados via JavaScript (components.js) em cada página.

Os dados (equipamentos, notícias, publicações, equipe) são carregados a partir de arquivos JSON locais, com fallback para casos de falha.

A navegação entre páginas é feita por links tradicionais (não SPA), exceto no painel administrativo, que utiliza roteamento SPA (router.js).

O sistema de internacionalização (i18n) carrega arquivos de tradução JSON e aplica dinamicamente os textos no DOM, sem modificar a URL.

O painel de acessibilidade oferece controles de contraste, fonte, espaçamento e temas, com persistência via localStorage.

Diagrama conceitual (Mermaid)

























Estrutura de diretórios
text
/
├── .nojekyll                          # Impede processamento Jekyll no GitHub Pages
├── 404.html                           # Página de erro personalizada
├── about.html                         # Página institucional
├── creditos.html                      # Créditos da equipe de desenvolvimento
├── equipment.html                     # Catálogo de equipamentos
├── index.html                         # Página inicial (Home)
├── login.html                         # Login para o painel administrativo
├── news-detail.html                   # Detalhe de uma notícia
├── news.html                          # Lista de notícias
├── politica-de-privacidade.html       # Política de privacidade
├── publications.html                  # Repositório de publicações
├── sugestoes.html                     # Formulário de sugestões
├── team.html                          # Página da equipe
├── termos-de-uso.html                 # Termos de uso
├── admin/
│   └── index.html                     # Painel administrativo (SPA)
├── assets/
│   ├── downloads/                     # Arquivos para download (APK, PDF, etc.)
│   ├── images/
│   │   ├── equipment/                 # Imagens dos equipamentos
│   │   ├── illustrations/             # Ilustrações e placeholders
│   │   ├── icons/                     # Ícones (Instagram, YouTube, etc.)
│   │   ├── logos/                     # Logotipos (LATECE, UFRN)
│   │   ├── news/                      # Imagens de notícias
│   │   └── team/                      # Fotos da equipe
├── css/
│   ├── accessibility.css              # Estilos do painel de acessibilidade
│   ├── admin.css                      # Estilos do painel administrativo
│   ├── base.css                       # Estilos base (tipografia, links)
│   ├── components.css                 # Estilos de componentes (cards, botões, etc.)
│   ├── layout.css                     # Estilos de layout (grid, container)
│   ├── reset.css                      # Reset CSS
│   ├── utilities.css                  # Classes utilitárias
│   └── variables.css                  # Variáveis CSS (design tokens)
├── data/
│   ├── equipment.json                 # Dados dos equipamentos
│   ├── news-fallback.json             # Notícias (fallback)
│   ├── publications.json              # Dados das publicações
│   └── team.json                      # Dados da equipe
├── js/
│   ├── accessibility.js               # Controles de acessibilidade
│   ├── admin.js                       # Lógica do painel administrativo
│   ├── auth.js                        # Autenticação (login/logout)
│   ├── components.js                  # Fábrica de componentes HTML
│   ├── data.js                        # Carregamento de dados JSON
│   ├── i18n.js                        # Internacionalização
│   ├── main.js                        # Ponto de entrada do site público
│   ├── news.js                        # Lógica específica de notícias
│   ├── path.js                        # Resolução de caminhos (BASE_PATH)
│   └── router.js                      # Roteamento SPA para admin
└── locales/
    ├── en.json                        # Traduções para inglês
    └── pt.json                        # Traduções para português
Como executar localmente
Pré-requisitos
Navegador moderno (Chrome, Firefox, Edge, Safari)

Servidor HTTP local (opcional, mas recomendado para simular o GitHub Pages)

Passos
Clone o repositório

bash
git clone https://github.com/polimatastudio/lateceufrn.git
cd lateceufrn
Sirva os arquivos localmente

Você pode usar qualquer servidor HTTP estático. Recomendamos:

Python 3:

bash
python -m http.server 8000
Node.js (serve):

bash
npx serve -l 8000
Acesse no navegador

Se estiver simulando o subdiretório /lateceufrn/, acesse http://localhost:8000/lateceufrn/.

Caso contrário, acesse http://localhost:8000/ (o site funcionará normalmente, com BASE_PATH vazio).

Navegue pelo site

Use o menu para acessar as páginas.

O carrossel da home exibirá notícias do arquivo news-fallback.json.

O painel de acessibilidade está disponível no ícone ♿ no canto inferior direito.

Como publicar no GitHub Pages
Configuração do repositório

O repositório deve estar no GitHub (ex: polimatastudio/lateceufrn).

Ative o GitHub Pages nas configurações do repositório:

Source: Deploy from a branch

Branch: main (ou master)

Pasta: / (root)

Verifique a estrutura

O arquivo .nojekyll deve existir na raiz (já criado).

Todos os caminhos internos devem usar ./ ou resolvePath().

Acesse a URL

O site estará disponível em https://polimatastudio.github.io/lateceufrn/.

Como adicionar/atualizar conteúdo
Equipe (data/team.json)
Adicione um novo membro seguindo a estrutura:

json
{
  "id": 28,
  "name": "Nome Completo",
  "role": "collaborator", // coordinator, collaborator, researcher, student, technician
  "roleLabel": "Cargo/Label",
  "photoUrl": "assets/images/team/nome.jpg",
  "lattesUrl": "http://lattes.cnpq.br/...",
  "email": "email@exemplo.com",
  "order": 25,
  "area": "Área de atuação",
  "bio": "Biografia resumida",
  "projects": ["Projeto 1", "Projeto 2"]
}
Equipamentos (data/equipment.json)
Adicione um novo equipamento:

json
{
  "id": 25,
  "name": "Nome do equipamento",
  "category": "CAA", // CAA, VidaDiaria, AcessibilidadeComputador, BaixaVisao, LivrosJogos
  "imageUrl": "assets/images/equipment/categoria/imagem.jpg",
  "description": "Descrição do equipamento",
  "order": 24,
  "download": {
    "type": "PDF",
    "url": "./assets/downloads/arquivo.pdf",
    "size": "2 MB",
    "version": "1.0",
    "platform": "Documentação",
    "license": "Acesso livre"
  }
}
Publicações (data/publications.json)
Adicione uma nova publicação:

json
{
  "id": 5,
  "title": "Título da publicação",
  "authors": "Autores",
  "abstract": "Resumo do trabalho",
  "type": "article", // article, book, dissertation, thesis, chapter, conference, other
  "year": 2026,
  "status": "published",
  "keywords": ["palavra1", "palavra2"],
  "doi": "10.xxxx/xxxx",
  "externalLink": "https://link.para.publicacao",
  "fileUrl": null // ou caminho para arquivo local
}
Notícias (data/news-fallback.json)
Adicione uma nova notícia (atualmente, as notícias são estáticas; no futuro, poderão vir de API):

json
{
  "id": 5,
  "title": "Título da notícia",
  "excerpt": "Resumo curto",
  "content": "<p>Conteúdo completo em HTML</p>",
  "category": "Notícia", // Evento, Notícia, Aviso, Workshop, Palestra, Pesquisa
  "createdAt": "2026-08-23T10:00:00",
  "updatedAt": "2026-08-23T10:00:00",
  "imageUrl": "assets/images/news/imagem.jpg",
  "status": "published",
  "authorId": 1,
  "isVideo": false,
  "videoUrl": null,
  "links": [
    { "label": "Link externo", "url": "https://..." }
  ]
}
Traduções (locales/pt.json e locales/en.json)
Adicione novas chaves de tradução seguindo a estrutura existente. Exemplo:

json
{
  "nav": {
    "novaPagina": "Nova Página"
  }
}
Em seguida, use data-i18n="nav.novaPagina" no elemento HTML correspondente.

Como manter a acessibilidade
O site já incorpora diversos recursos de acessibilidade:

Alto contraste: ative pelo painel de acessibilidade (♿) ou com atalho Alt+C.

Ajuste de fonte: aumente/diminua com Alt++ / Alt+- ou via painel.

Redução de movimento: ative no painel para desabilitar animações.

Espaçamento de texto: ajuste line-height e letter-spacing no painel.

Temas: escolha entre padrão, escuro e baixa visão.

Navegação por teclado: todos os elementos interativos são acessíveis via teclado.

Skip link: o primeiro link da página permite pular para o conteúdo principal.

ARIA: labels e atributos ARIA estão presentes nos componentes dinâmicos.

Ao adicionar novos componentes, certifique-se de incluir atributos ARIA apropriados e testar com leitores de tela.

Painel administrativo
O painel administrativo (/admin/) está disponível, mas sua funcionalidade plena depende de um backend ativo (API). Atualmente, no GitHub Pages, o painel opera em modo de leitura, exibindo dados estáticos e alertando sobre a indisponibilidade da API.

Login
Acesse /login.html.

Se a API estiver indisponível, use as credenciais de fallback:

Usuário: admin

Senha: admin123

Isso permitirá acessar o painel em modo de demonstração.

Funcionalidades disponíveis (com backend)
Gerenciamento de notícias (criar, editar, publicar, excluir).

Criação de usuários (apenas administradores).

Funcionalidades no GitHub Pages
Visualização estática de dados.

Navegação pelo painel.

Mensagem de indisponibilidade da API.

Resolução de problemas comuns
Problema	Causa provável	Solução
Página 404 em links internos	Caminho absoluto com / em vez de ./	Substitua por ./ ou use resolvePath() em JS.
Imagens que não carregam	Caminho incorreto ou arquivo ausente	Verifique se o arquivo existe em assets/images/ e o caminho está correto.
Carrossel vazio	JSON de notícias não carregado	Verifique se data/news-fallback.json está acessível e bem formatado.
Troca de idioma quebra URL	Sistema antigo com prefixo /en/ ou /pt/	O sistema atual não modifica a URL; verifique se está usando a versão corrigida.
Admin não carrega	API indisponível	É esperado; o admin exibe mensagem de modo de leitura.
Página 404 com link de volta errado	Caminho relativo ./ em subdiretório profundo	A página 404 usa resolvePath via script; verifique se path.js está carregado.
Erros de console	Caminhos absolutos em fetch ou import	Use resolvePath('data/arquivo.json') para fetch e caminhos relativos para imports.
Diretrizes para futuros desenvolvedores
Sempre use caminhos relativos com ./ para links e recursos em HTML.

Para fetch de dados JSON, use resolvePath('data/arquivo.json') (definido em js/path.js).

Para imports de módulos JS, use caminhos relativos a partir do arquivo atual (ex: import { ... } from './components.js').

Ao criar uma nova página, inclua <script src="./js/path.js"></script> antes de qualquer módulo.

Não use barras iniciais (/) para recursos internos – isso quebra o site no GitHub Pages (subdiretório).

Mantenha a estrutura de diretórios: HTML na raiz, CSS e JS em suas pastas, dados em data/, imagens em assets/.

Documente alterações significativas neste README.

Teste localmente com um servidor HTTP que simule o subdiretório (ex: python -m http.server e acesse localhost:8000/lateceufrn/).

Licença
Este projeto é de uso institucional do LATECE/UFRN. O código-fonte está disponível para fins educacionais e de pesquisa, sob os termos da licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0). Consulte o arquivo LICENSE para mais detalhes.

Contato
Instituição: LATECE — Laboratório de Tecnologia Assistiva do Centro de Educação / UFRN

E-mail: latece@ufrn.br

Telefone: (84) 3342-2270

Endereço: Campus Central UFRN — Av. Senador Salgado Filho, 3000, Lagoa Nova, Natal/RN — CEP 59078-900

Site: https://polimatastudio.github.io/lateceufrn/

Agradecimentos
FINEP – Financiadora de Estudos e Projetos, pelo fomento à pesquisa e desenvolvimento.

TecIncluir – Programa de apoio à pesquisa, desenvolvimento e inovação em Tecnologia Assistiva.

UFRN – Universidade Federal do Rio Grande do Norte.

UERN – Universidade do Estado do Rio Grande do Norte.

Equipe de desenvolvimento:

Maria Eduarda Ferreira de Lima – Desenvolvedora Web (Bolsista FINEP)

Artemisia Kimberlly Marques de Sousa – Bolsista de Iniciação Científica (FINEP)

Todos os colaboradores e pesquisadores do LATECE.

Última atualização: 23 de agosto de 2026