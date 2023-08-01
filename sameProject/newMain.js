const products = [
  {
    name: 'Intel Core i7-13700K 5.4GHz Socket 1700 Boxed - Procesador',
    price: 19.80,
    stars: 5,
    reviews: 315,
    Proyecto: 'dom2',
    seller: 'pcComponents',
    image: 'https://www.coolmod.com/images/product/large/PROD-021839_1.jpg'
  },
  {
    name: 'Cooler Master GA241 23.8" VA FHD 100Hz FreeSync - Monitor',
    price: 99.95,
    stars: 5,
    reviews: 20,
    Proyecto: 'dom2',
    seller: 'coolMod',
    image: 'https://www.coolmod.com/images/product/large/PROD-024558_1.jpg',
  },
  {
    name: 'Asus VG248Q1B 24" FHD 165Hz FreeSync Premium - Monitor',
    price: 179.95,
    stars: 4,
    reviews: 80,
    Proyecto: 'dom2',
    seller: 'appInformatica',
    image: 'https://www.coolmod.com/images/product/large/PROD-021592_1.jpg'
  },
  {
    name: 'Gigabyte G27QC A 27" 165Hz QHD HDR Ready Curvo - Monitor',
    price: 268.95,
    stars: 3,
    reviews: 75,
    Proyecto: 'dom2',
    seller: 'coolMod',
    image: 'https://www.coolmod.com/images/product/large/PROD-012940_3.jpg',
  },
  {
    name: 'AMD Radeon RX 6950 XT 16GB GDDR6 - Tarjeta Gráfica',
    price: 679.95,
    stars: 4,
    reviews: 110,
    Proyecto: 'dom2',
    seller: 'pcMontajes',
    image: 'https://www.coolmod.com/images/product/large/PROD-024984_1.jpg',
  },
  {
    name: 'Asus VivoBook 15 F1500EA-EJ3023 i7-1156G7 8GB 512GB 15.6" - Portátil',
    price: 539.95,
    stars: 5,
    reviews: 54,
    Proyecto: 'dom2',
    seller: 'coolMod',
    image: 'https://www.coolmod.com/images/product/large/PROD-024596_1.jpg',
  },
  {
    name: 'Asus VivoBook F515EA-BQ3013W i5-1135G7 8GB 512GB 15.6" W11H - Portátil',
    price: 549.95,
    stars: 4,
    reviews: 86,
    Proyecto: 'dom2',
    seller: 'coolMod',
    image: 'https://www.coolmod.com/images/product/large/PROD-022856_1.jpg',
  },
  {
    name: 'HP 15S-FQ4019NS i5-1155G7 8GB 512GB 15.6" W11H - Portátil',
    price: 565.95,
    stars: 3.5,
    reviews: 72,
    Proyecto: 'dom2',
    seller: 'coolMod',
    image: 'https://www.coolmod.com/images/product/large/PROD-022898_1.jpg',
  },
  {
    name: 'Medion Akoya E16401 i5-1135G7 8GB 512GB 16.1" - Portátil',
    price: 499.95,
    stars: 4,
    reviews: 53,
    Proyecto: 'dom2',
    seller: 'appInformatica',
    image: 'https://www.coolmod.com/images/product/large/PROD-021410_1.jpg',
  },
  {
    name: 'Asus TUF506HC-HN088 i5-11400H RTX 3050 16GB 512GB 15" - Portátil',
    price: 798.95,
    stars: 3.5,
    reviews: 46,
    Proyecto: 'dom2',
    seller: 'pcMontajes',
    image: 'https://www.coolmod.com/images/product/large/PROD-020321_1.jpg',
  }
  // Añade aquí al menos 9 productos más para tener un total de 10 productos
  // puedes cambiar los campos de cada objeto si es necesario para tu diseño...
];

const productsContainer = document.querySelector('#products-container');

const getProductsTemplate = (image, name, price) => {
  return `<ul class="products-list">
  <li> 
    <img src = "${image}" alt= "${name}" />
    <p class="name"> ${name}</p>
    <p class="price"> ${price} euros </p>
  </li>
  </ul>`
};

for (let i = 0; i < products.length; i++) {

  const product = products[i];
  productsContainer.innerHTML += getProductsTemplate(
    product.image,
    product.name,
    product.price,
  )
};

onButtonClicked = () => {
  const searchTerm = document.querySelector('.search-product').value;
  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  document.querySelector('.search-product').value = '';
  const productsContainer = document.querySelector('#products-container');
  productsContainer.innerHTML = '';
  filteredProducts.forEach(product => {
    productsContainer.innerHTML += getProductsTemplate(product.image, product.name, product.price);
  });
  console.log('el botón de búsqueda está siendo clickado');
};

// onInputChanged = (event) => {
//   const searchTerm = document.querySelector('.search-product').value;
//   const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
//   filteredProducts.forEach(product => {
//     productsContainer.innerHTML += getProductsTemplate(product.image, product.name, product.price);
//   });
//   console.log(`el valor de mi input es: ${event.target.value}`);
// };

const buttonSearchBar = document.querySelector('.search-button')
buttonSearchBar.addEventListener('click', onButtonClicked)

// const inputSearchBar = document.querySelector('.search-product')
// inputSearchBar.addEventListener('input', onInputChanged)

const sellers = [];

for (let i = 0; i < products.length; i++) {
  const product = products[i];
  const seller = product.seller;

  if (!sellers.includes(seller)) {
    sellers.push(seller);
  }
};

sellers.forEach((seller) => {
  const sellerSelection = document.querySelector('#sellerFilter')
  const option = document.createElement('option')
  option.value = seller;
  option.textContent = seller;
  sellerSelection.appendChild(option);
});

const sellerFiltered = () => {
  const optionSeller = document.querySelector('option')
  const sellerSelected = products.filter(product => product.seller === optionSeller.value);
  document.querySelector('option').value = '';
  const productsContainer = document.querySelector('#products-container');
  productsContainer.innerHTML = '';
  sellerSelected.forEach(product => {
    productsContainer.innerHTML += getProductsTemplate(product.image, product.name, product.price);
  });
};


const sellerSelection = document.querySelector('#sellerFilter')
sellerSelection.addEventListener('change', sellerFiltered)

const priceFilter = document.querySelector('#priceFilter')