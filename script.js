// Unsplash API
const count = 10;
const apiKey = `ghExX_J04v3zftksptAj2XpRzyeiIdb5uuHBHTpu9y0`;
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Get Photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch(error) {
        // Catch Error Here
    }
}

// On Load
getPhotos();