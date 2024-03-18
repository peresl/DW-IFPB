<!-- Meu Primeiro Estilo em CSS -->

## Objetivo

O objetivo desta atividade consiste em abordar os seguintes temas:

- Uso de CSS: Inline, Internal, External, Mixed
- Properties: color, font-size, text-align, background-color, font-style, font-weight
- Selectors: tipo (elementname), classe (.classname), id (#idname)

## Descrição

O objetivo desta atividade consiste em criar os primeiros passos com a linguagem de estilo CSS no HTML.

### CSS Local vs CSS Interno

Tomando como partida o código fonte do arquivo `exe0.html`, observe que o `<body>` possui a seguinte estrutura:

```html
<body>
  <h1 style="color: blue; font-size: 16px;">Linguagem de Marcação</h1>
  <p style="color: red; font-size: 12px;">Isto é um parágrafo.</p>
  <p style="color: red; font-size: 12px;">Isto é outro parágrafo</p>
</body>

Agora usando o arquivo exe1.html, que possui conteúdo semelhante ao exe0.html, tente fazer a mesma estilização só que de modo interno.
Seletor de Id

Algumas vezes, diante de inúmeras tags do mesmo tipo, é necessário estilizar algum tag específica. Então, considere o conteúdo do arquivo exe2.html:

<body>
  <h1>Linguagem de Marcação</h1>
  <p id="para" style="color: green;">Isto é um parágrafo.</p>
  <p>Isto é outro parágrafo</p>
</body>

CSS Externo e Seletor de Classe

O CSS Externo é uma ótima alternativa de reutilização de estilo entre várias páginas HTML. Então, para experimentar esta opção de configuração de estilo, crie uma pasta chamada css e nela gere o arquivo estilo.css para ser referenciado pelo arquivo exe3.html:

<head>
  <link rel="stylesheet" type="text/css" href="css/estilo.css">
</head>
<body>
  <h1 style="text-align: center; color: white; font-size: 16px; background-color: gray;">Linguagem de Marcação</h1>
  <p class="texto">Isto é um parágrafo.</p>
  <p class="texto italico">Isto também é um parágrafo</p>
</body>

Para estilizar a estrutura apresentada, o arquivo css deverá conter os seguintes estilos:

o texto do h1 estar centralizado (align center), na cor branca (color white), com font-size igual 16px e com background-color gray.
os elementos com a classe “texto” devem ter a color red.
os elementos com a classe “italico” devem estar em itálico (font-style italic).
Apenas na palavra “também”, mude sua color (blue) e o font-weight (bold). Use o elemento para isolar a palavra

