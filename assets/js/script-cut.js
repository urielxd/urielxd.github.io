document.addEventListener('DOMContentLoaded', () => {
  const apiKey = 'GMCQwTGbs7koodZBTK8jXs5aJBohZbwEETrR0Fr5tsdtQ7DxX4HQA694'; // Reemplaza con tu clave de API de Pexels
  const getHaircutButton = document.getElementById('get-haircut-btn');
  const haircutImageElement = document.getElementById('haircut-image');

  getHaircutButton.addEventListener('click', () => {
    const apiUrl = `https://api.pexels.com/v1/search?query=haircut&per_page=1`;
    
    fetch(apiUrl, {
      headers: {
        Authorization: apiKey
      }
    })
      .then(response => response.json())
      .then(data => {
        const imageUrl = data.photos[0].src.medium;
        
        const haircutImageHTML = `
          <img src="${imageUrl}" alt="Imagen de Corte de Cabello" class="img-fluid">
        `;

        haircutImageElement.innerHTML = haircutImageHTML;
      })
      .catch(error => {
        console.error('Error al obtener imagen de corte de cabello:', error);
      });
  });
});
