const main=document.querySelector(".main")

window.onload = function() {
  if(localStorage.length!==0){
    for(let i=0; i<localStorage.length; i++) {
      const data = JSON.parse(localStorage.getItem(localStorage.key(i)));

      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.style.width = '18rem';
      
      cardElement.innerHTML = `
        <img src="./assets/images/avatar-thinking-svgrepo-com.svg" class="card-img-top" alt="avatar">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">${data.mail}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      `;

      main.appendChild(cardElement);
    }
  }
}
