# Checkpoint 6 — Vibecoding: Portfólio

## 1. Referências visuais

1. **Brittany Chiang (brittanychiang.com)** — fundo escuro e tipografia minimalista.
   Aproveitei a ideia de usar poucas cores (fundo escuro + um único tom de destaque)
   para a seção inicial (hero) e para os cards de projeto.
2. **Bruno Simon (bruno-simon.com)** — portfólio com identidade forte e foco em
   personalidade própria em vez de layout genérico. Usei como referência conceitual
   para fugir de um visual "padrão de template".
3. **Robby Leonardi (rleonardi.com)** — portfólio no estilo "jogo retrô", com
   personagem e cenário que reagem ao scroll. Não copiei a animação (está fora
   do nível deste projeto), mas usei a ideia de "ter uma seção com personalidade
   própria" na seção de topo (hero), em vez de um banner genérico.
4. **Josh Comeau (joshwcomeau.com)** — uso de bastante espaço em branco e
   transições suaves ao passar o mouse nos cards. Inspirou o espaçamento entre
   as seções e o efeito de hover nos links de contato da minha página.
5. **ByronDev03/developer-portfolio (GitHub)** — portfólio open-source com
   animações de "revelar ao rolar a página" (scroll reveal). Referência de
   comportamento: "os elementos aparecem conforme o scroll" — não implementei
   isso na primeira versão por simplicidade, mas é uma melhoria possível.

## 2. Decisões de identidade visual (IDV)

**Paleta de cores:**
| Cor | Hex | Papel |
|---|---|---|
| Preto suave | `#0F0F10` | Fundo |
| Branco gelo | `#F5F5F7` | Texto principal |
| Roxo elétrico | `#6C5CE7` | Destaque (links, títulos importantes) |
| Cinza médio | `#8A8A8E` | Texto secundário |

**Tipografia:** Inter (sans-serif, limpa, comum em produtos de tecnologia).

**Tom:** moderno, direto, sem floreios — texto curto e objetivo, nada de frases de efeito.

**Estrutura:** topo (nome + resumo) → sobre → projetos → skills → contato.

## 3. Prompts utilizados

**Prompt inicial:**
```
Crie uma landing page de portfólio em HTML/CSS/JS puro (sem frameworks),
estilo moderno e minimalista, para um estudante de Engenharia de Software
em transição de carreira para tecnologia, focado em automação e integrações.

Paleta: fundo #0F0F10, texto #F5F5F7, destaque #6C5CE7, texto secundário #8A8A8E.
Tipografia: Inter.
Seções: topo com nome e resumo curto, sobre, projetos (3 cards: CP3 - app CRUD
de lista de filmes em HTML/CSS/JS; CP4 - página com CSS Grid; CP5 - análise de
dados em Jupyter Notebook), skills, contato.
```

**Prompt de ajuste 1:**
```
Corrige o e-mail de contato para colasmoreira@gmail.com
```

**Prompt de ajuste 2:**
```
Separa o código em três arquivos (index.html, style.css, script.js) e
implementa a animação de "revelar ao rolar a página" nas seções.
```

## 4. Registro de correções

| Problema | Prompt de correção | Resultado | Aprendizado |
|---|---|---|---|
| E-mail de contato estava como placeholder genérico | "Corrige o e-mail de contato para colasmoreira@gmail.com" | Resolvido totalmente | No prompt inicial, já poderia ter informado o e-mail real para evitar essa correção depois |
| Código inteiro em um único arquivo .html, dificultando organização e manutenção | "Separa o código em três arquivos (index.html, style.css, script.js) e implementa a animação de revelar ao rolar a página" | Resolvido totalmente | No prompt inicial, já poderia ter pedido a separação em arquivos e a animação, evitando essa segunda rodada |

> *(adicione aqui outras rodadas de correção reais que você fizer  mude uma cor, peça uma seção nova, etc. Quanto mais específico o pedido, menos idas e vindas.)*

## 5. Resultado final

- Repositório: *(link do seu repositório no GitHub, após subir os arquivos)*
- Deploy: *(link gerado pelo GitHub Pages, em Settings → Pages, após ativar)*

**Reflexão:** A página ficou dentro do que eu planejei: visual escuro e minimalista,
com poucas cores e foco no conteúdo em vez de decoração. A animação de scroll
reveal que eu queria desde o início acabou saindo numa segunda rodada, junto
com a separação do código em html,css, js se eu tivesse pedido isso tudo no
prompt inicial, teria economizado uma correção.
