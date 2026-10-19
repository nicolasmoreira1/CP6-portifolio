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
   comportamento: os elementos sobem alguns pixels e surgem conforme entram na
   tela. Implementei esse comportamento nas seções sobre, projetos, skills e
   contato — o hero fica de fora de propósito, porque ele já está visível quando
   a página abre e animar algo que o usuário ainda nem rolou não faz sentido.

## 2. Decisões de identidade visual (IDV)

**Paleta de cores:**

| Cor | Hex | Papel |
|---|---|---|
| Preto suave | `#0F0F10` | Fundo |
| Branco gelo | `#F5F5F7` | Texto principal |
| Roxo elétrico | `#6C5CE7` | Destaque (links, títulos importantes) |
| Cinza médio | `#8A8A8E` | Texto secundário |
| Cinza linha | `#26262B` | Bordas e divisórias |

**Por que essas cores combinam com o conceito:** o conceito é "foco no conteúdo,
não em decoração" — quem lê um portfólio de alguém em transição de carreira
precisa chegar rápido nos projetos, não se distrair com o layout. Por isso a base
é monocromática (preto suave, branco gelo e dois cinzas): ela não compete com o
texto. O roxo elétrico é a única cor saturada da página e aparece em pouquíssimos
lugares — a tag do topo, a stack de cada projeto e o hover dos links. Como ele é
raro, funciona como sinalização: onde tem roxo, tem algo em que vale prestar
atenção. O preto não é `#000000` puro e o branco não é `#FFFFFF` puro de
propósito: o contraste máximo cansa a vista em tela escura.

**Tipografia:** Inter (sans-serif, limpa, comum em produtos de tecnologia).
Queria a sensação de "ferramenta", não de "peça de design": letras neutras, alta
legibilidade em tamanho pequeno, nada de fonte com personalidade própria
disputando atenção com o conteúdo.

**Tom:** moderno, direto, sem floreios — texto curto e objetivo, nada de frases
de efeito. Isso aparece no layout pela quantidade de espaço vazio e pela ausência
de ícones, ilustrações e sombras; e aparece no texto por frases afirmativas e
curtas ("Construindo automações e integrações com código.").

**Estrutura:** topo (nome + resumo) → sobre → projetos → skills → contato.
A ordem segue a sequência de perguntas que o leitor faz: quem é, o que já fez,
o que sabe, como falar com ele.

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

**Prompt de ajuste 3:**
```
A fonte Inter não está sendo aplicada: o CSS declara font-family 'Inter'
mas nada carrega a fonte, então o navegador cai no system-ui. Adiciona o
carregamento da Inter pelo Google Fonts no head, com preconnect e display=swap.
```

**Prompt de ajuste 4:**
```
Com o JavaScript desativado a página fica totalmente em branco, porque a
classe .reveal começa com opacity: 0 e nada nunca adiciona .visible.
Faz o CSS só esconder as seções depois que o JS confirmar que rodou.
```

**Prompt de ajuste 5:**
```
Não existe nenhuma forma de navegar entre as seções: para chegar no contato
é preciso rolar a página inteira. Adiciona um menu fixo no topo com links
âncora para sobre, projetos, skills e contato.
```

**Prompt de ajuste 6:**
```
Ao clicar num link do menu, o título da seção fica escondido atrás do menu
fixo. Resolve com scroll-margin-top nas seções, sem mexer no padding.
```

**Prompt de ajuste 7:**
```
Revisa a semântica e a acessibilidade do HTML: a lista de projetos, de skills
e de contatos são listas e estão como div e <br>; o link externo do GitHub
está com target="_blank" sem rel="noopener noreferrer"; e não há indicação
visual de foco para quem navega pelo teclado.
```

## 4. Registro de correções

| Problema | Prompt de correção | Resultado | Aprendizado |
|---|---|---|---|
| E-mail de contato estava como placeholder genérico | "Corrige o e-mail de contato para colasmoreira@gmail.com" | Resolvido totalmente | No prompt inicial, já poderia ter informado o e-mail real para evitar essa correção depois |
| Código inteiro em um único arquivo .html, dificultando organização e manutenção | "Separa o código em três arquivos (index.html, style.css, script.js) e implementa a animação de revelar ao rolar a página" | Resolvido totalmente | Misturei dois pedidos no mesmo prompt. Funcionou, mas se tivesse dado errado eu não saberia qual dos dois quebrou — o certo era um problema por vez |
| A fonte Inter nunca carregava: o CSS pedia `font-family: 'Inter'` mas não havia `<link>` nem `@font-face`, então a página renderizava em `system-ui`. Parecia certo no meu PC e errado em outras máquinas, por isso demorei a perceber | "Adiciona o carregamento da Inter pelo Google Fonts no head, com preconnect e display=swap" | Resolvido totalmente | Pedir uma fonte pelo nome não faz a IA carregar a fonte. No prompt inicial eu deveria ter escrito "use Inter **carregada do Google Fonts**" em vez de só "Tipografia: Inter" |
| Com o JavaScript desativado (ou se o `script.js` falhar ao carregar), a página abria **completamente em branco** abaixo do topo. Causa: `.reveal { opacity: 0 }` vinha do CSS e só o JS adicionava `.visible` | "Faz o CSS só esconder as seções depois que o JS confirmar que rodou" | Resolvido totalmente | Toda animação de entrada precisa de um estado padrão seguro: conteúdo visível é o padrão, esconder é o caso especial. Eu devia ter pedido a animação já com a ressalva "a página precisa continuar legível sem JS" |
| Não havia navegação nenhuma: para chegar no contato era preciso rolar a página toda. No celular isso são várias telas de scroll | "Adiciona um menu fixo no topo com links âncora para sobre, projetos, skills e contato" | Resolvido totalmente | Listei as seções no prompt inicial, mas não disse como o usuário anda entre elas. Descrever conteúdo não é descrever navegação — são duas coisas diferentes |
| Depois de criar o menu, clicar em "Projetos" levava à seção certa mas com o título escondido atrás do menu fixo — o menu fica por cima e a âncora para exatamente no topo do elemento | "Resolve com `scroll-margin-top` nas seções, sem mexer no padding" | Resolvido totalmente | Uma correção criou um problema novo. Testar de novo **depois** de cada ajuste não é opcional: o menu só existia há uma rodada e já tinha quebrado a navegação que ele mesmo criou |
| Problemas encontrados no QA: listas feitas com `div` e `<br>`, link externo com `target="_blank"` sem `rel="noopener noreferrer"` (risco de segurança) e nenhum indicador de foco para navegação por teclado | "Revisa a semântica e a acessibilidade do HTML: listas como `ul`/`li`, `rel="noopener noreferrer"` no link externo e `:focus-visible` nos links" | Resolvido totalmente | A IA entrega o que **parece** certo na tela; semântica e acessibilidade não aparecem no visual, então ela não prioriza sozinha. Se eu não pedir explicitamente, não vem |

### O que foi testado no QA

- Abri a página em desktop (1440px), tablet (768px) e celular (375px): layout em
  coluna única em todas, sem scroll horizontal.
- Cliquei em todos os links — os dois do contato e os quatro do menu. Foi aqui
  que apareceu o problema do menu fixo cobrindo o título da seção.
- Naveguei só pelo teclado (Tab): foi aí que percebi que não dava para ver onde
  o foco estava.
- Desativei o JavaScript no navegador: foi aí que apareceu o bug da página em branco.
- Liguei "reduzir movimento" no sistema: as animações são desligadas como esperado.

### O que ficou de fora (e por quê)

- **Links nos cards de projeto.** Cada card descreve um projeto mas não leva a
  lugar nenhum. É a melhoria mais óbvia que falta; não entrou porque os
  repositórios dos CPs anteriores ainda não estão organizados para serem mostrados.
- **Modo claro.** A identidade foi pensada como escura desde o começo; oferecer
  os dois dobraria o trabalho de IDV sem ganho para o conceito.

## 5. Resultado final

- Repositório: github.com/nicolasmoreira1/CP6-portifolio
- Deploy: https://nicolasmoreira1.github.io/CP6-portifolio/

**Reflexão:** A página ficou dentro do que eu planejei: visual escuro e minimalista,
com poucas cores e foco no conteúdo em vez de decoração. O que mais me surpreendeu
não foi o visual — foi quanta coisa **não** aparece na tela. A fonte que eu achava
aplicada nunca carregou, a página quebrava sem JavaScript e o HTML estava
semanticamente errado, e nada disso dava para ver olhando. Avaliar só pelo visual
me enganou três vezes seguidas.

Se eu refizesse, o prompt inicial já diria: carregue a fonte do Google Fonts, use
HTML semântico, mantenha a página legível sem JavaScript e inclua navegação entre
as seções. São quatro frases que teriam eliminado quatro rodadas de correção.
O que eu ainda mudaria: colocar link e print em cada card de projeto, porque hoje
o portfólio fala dos projetos sem mostrar nenhum.
