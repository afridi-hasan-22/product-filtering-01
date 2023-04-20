let products = {
    data: [
        {
            productName: "Amezing Laptop",
            category: "Laptop",
            Price: "30",
            image: "laptop.jpg"
        },
        {
            productName: "Mans  Collection",
            category: "Man",
            Price: "30",
            image: "man.jpg"
        },
        {
            productName: "Womans  Collection",
            category: "Woman",
            Price: "30",
            image: "woman.jpg"
        },
        {
            productName: "Dress  Collection",
            category: "Dress",
            Price: "30",
            image: "dress.jpg"
        },
        {
            productName: "Dog  Collection",
            category: "Dog",
            Price: "30",
            image: "dog.jpg"
        }
    ]
};

for (let i of products.data){
    let card = document.createElement('div');
   card.classList.add('card', i.category) ;
   let imgContainer = document.createElement('div');
   imgContainer.classList.add('img-contaier')
   let image = document.createElement("img");
   image.setAttribute("src", i.image)
   imgContainer.appendChild(image);
   card.appendChild(imgContainer);

   document.getElementById('products').appendChild(card);
   
   let container = document.createElement('div');
   container.classList.add('container');
   let name = document.createElement('h5');
   name.classList.add('product-name');
   name.innerText = i.productName;
   container.appendChild(name);
   let price = document.createElement('h6');
   price.innerText = '$' + i.Price;
   container.appendChild(price)
   card.appendChild(container)
}