const items = [
  {name:'Honey Latte',category:'coffee',price:'$5.50',description:'Rich espresso, silky milk, and a touch of golden honey.',image:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80'},
  {name:'Classic Cappuccino',category:'coffee',price:'$4.75',description:'A timeless balance of espresso, steamed milk, and foam.',image:'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=80'},
  {name:'Iced Caramel Coffee',category:'cold',price:'$5.95',description:'Chilled espresso with milk and smooth caramel.',image:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80'},
  {name:'Cold Brew',category:'cold',price:'$4.95',description:'Slow-steeped for a naturally smooth, bold finish.',image:'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80'},
  {name:'Butter Croissant',category:'bakery',price:'$3.95',description:'Flaky, golden layers baked fresh for your morning.',image:'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80'},
  {name:'Chocolate Cookie',category:'bakery',price:'$3.50',description:'Soft in the middle, crisp at the edges, full of chocolate.',image:'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80'}
];
const grid=document.getElementById('menu-grid');
function renderMenu(category='all'){
  const filtered=items.filter(item=>category==='all'||item.category===category);
  grid.innerHTML=filtered.map(item=>`<article class="menu-card"><img src="${item.image}" alt="${item.name}" loading="lazy"><div class="menu-card-content"><div class="menu-card-top"><h3>${item.name}</h3><strong>${item.price}</strong></div><p>${item.description}</p></div></article>`).join('');
}
renderMenu();
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')});
  button.classList.add('active');button.setAttribute('aria-pressed','true');renderMenu(button.dataset.filter);
}));
const toggle=document.querySelector('.menu-toggle');const links=document.querySelector('.nav-links');
toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕':'☰'});
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}));
document.getElementById('year').textContent=new Date().getFullYear();
