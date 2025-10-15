document.addEventListener('DOMContentLoaded',function(){
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  toggle && toggle.addEventListener('click',()=>{
    links.style.display = links.style.display === 'flex' ? '' : 'flex';
    links.style.flexDirection = 'column';
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',function(e){
      const href = this.getAttribute('href');
      if(href.startsWith('#')){
        const el = document.querySelector(href);
        if(el){
          e.preventDefault();
          el.scrollIntoView({behavior:'smooth'});
          // hide mobile menu
          if(window.innerWidth<=600){links.style.display=''}
        }
      }
    })
  });

  // IntersectionObserver reveals
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    })
  },{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // Back to top
  const btt = document.querySelector('.back-to-top');
  window.addEventListener('scroll',()=>{
    if(window.scrollY>300){btt.style.display='block'}else{btt.style.display='none'}
  });
  btt.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
});
