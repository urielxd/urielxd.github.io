document.addEventListener('DOMContentLoaded', () => {
  const getBeardButton = document.getElementById('get-beard-btn');
  const beardImageElement = document.getElementById('beard-image');

  getBeardButton.addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search?category_ids=14')
      .then(response => response.json())
      .then(data => {
        const imageUrl = data[0].url;
        
        const beardImageHTML = `
          <img src="${imageUrl}" alt="Imagen de Barba" class="img-fluid">
        `;

        beardImageElement.innerHTML = beardImageHTML;
      })
      .catch(error => {
        console.error('Error al obtener imagen de barba:', error);
      });
  });
});