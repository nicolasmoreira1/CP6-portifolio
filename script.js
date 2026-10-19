
document.body.classList.add('js-ativo');

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (!entrada.isIntersecting) return;

    entrada.target.classList.add('visible');
        observador.unobserve(entrada.target);
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((secao) => {
  observador.observe(secao);
});
