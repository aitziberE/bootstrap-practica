//window.onload = function() {};
//recoger nfo localstorage en array, recorrer, crear tantas cartas y meterle los atributos

const main=document.querySelector(".main")

/* main.appendChild.innerHTML(` <div class="card" style="width: 18rem;">
<img src="./assets/images/avatar-thinking-svgrepo-com.svg" class="card-img-top" alt="avatar">
<div class="card-body">
  <h5 class="card-title">set name</h5>
  <p class="card-text">set mail</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`) */

const elemento = document.createElement('p')
main.appendChild(elemento)

    
main.lastElementChild.innerHTML = ` <div class="card" style="width: 18rem;">
    <img src="./assets/images/avatar-thinking-svgrepo-com.svg" class="card-img-top" alt="avatar">
    <div class="card-body">
      <h5 class="card-title">set name</h5>
      <p class="card-text">set mail</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>`
