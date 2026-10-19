// Só esconde as seções se o JS rodou. Sem isso, com JS desligado ou
// quebrado a página ficaria em branco, porque o CSS deixa .reveal invisível.
document.body.classList.add('js-ativo');

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (!entrada.isIntersecting) return;

    entrada.target.classList.add('visible');
    // Para de observar: a seção já apareceu e não precisa animar de novo.
    observador.unobserve(entrada.target);
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((secao) => {
  observador.observe(secao);
});
