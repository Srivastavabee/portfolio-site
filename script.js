
// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});
// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal, .card, .stat');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if(en.isIntersecting){ en.target.classList.add('show'); io.unobserve(en.target); }
  });
},{threshold:0.12});
revealEls.forEach(el=>io.observe(el));
