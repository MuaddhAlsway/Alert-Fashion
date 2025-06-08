const JSCollection = [
    {
        index:0,
        img: 'imges/Over-Size Shirt.png',
        title:'Black Button-Down Shirt',
         titleColorChoose: 'color choose',
        titleAttribute:'Attributes',
        titleSize: 'size',
        Description:'The Black Button-Down Shirt is a classic, versatile piece featuring a clean collar, front pocket, and smooth fabric, perfect for both casual and formal looks.',
        colorChoose: 'black',
        Attribute1: 'Classic',
        Attribute2: 'Versatile',
        Attribute3: 'Minimal',
        Attribute4: 'Elegant',
        Size1:'S',
        Size2:'M',
        Size3:'L',
        Size4:'XL',
        price: '25.00',
        Button: 'Add to Cart'
    },
      {
        index:1,
        img: 'imges/Bomber-Jacket.png',
        title:'Bomber Jacket',
 titleColorChoose: 'color choose',
        titleAttribute:'Attributes',
        titleSize: 'size',
        Description: 'A timeless staple reimagined with modern cuts, the Bomber Jacket blends comfort, attitude, and everyday style.',
        colorChoose: 'black',
        Attribute1: 'Classic',
        Attribute2: 'Versatile',
        Attribute3: 'Minimal',
        Attribute4: 'Elegant',
        Size1:'S',
        Size2:'M',
        Size3:'L',
        Size4:'XL',
        price: '100.00',
        Button: 'Add to Cart'
    },
      {
        index:2,
        img: 'imges/Utitlty-Over-Size.png',
        title:'Utility Over-shirt',
 titleColorChoose: 'color choose',
        titleAttribute:'Attributes',
        titleSize: 'size',
        Description: 'The Utility Over-shirt is a comfy, easygoing layer you can throw on for any day.',
        colorChoose: 'black',
        Attribute1: 'Classic',
        Attribute2: 'Versatile',
        Attribute3: 'Minimal',
        Attribute4: 'Elegant',
        Size1:'S',
        Size2:'M',
        Size3:'L',
        Size4:'XL',
        price: '55.00',
        Button: 'Add to Cart'
    },
      {
        index:3,
        img: 'imges/White-Trousir fit.png',
        title:'Chino Pants',
         titleColorChoose: 'color choose',
        titleAttribute:'Attributes',
        titleSize: 'size',
        Description:'Chino pants are a casual, comfortable go-to for everyday style.',
        colorChoose: 'White',
        Attribute1: 'Classic',
        Attribute2: 'Versatile',
        Attribute3: 'Minimal',
        Attribute4: 'Elegant',
        Size1:'S',
        Size2:'M',
        Size3:'L',
        Size4:'XL',
        price: '35.00',
        Button: 'Add to Cart'
    },
      {
        index:4,
         img: 'imges/Relaxed fit Trousers.png',

        title:'Relaxed Fit Trousers',
         titleColorChoose: 'color choose',
        titleAttribute:'Attributes',
        titleSize: 'size',
        Description:'Relaxed fit trousers offer a laid-back, comfortable style perfect for any casual day.',
        colorChoose: 'black',
        Attribute1: 'Classic',
        Attribute2: 'Versatile',
        Attribute3: 'Minimal',
        Attribute4: 'Elegant',
        Size1:'S',
        Size2:'M',
        Size3:'L',
        Size4:'XL',
        price: '35.00',
        Button: 'Add to Cart'
    },
      {
        index:5,
        img:'imges/Cargo-Joggers.png' ,
        title:'Cargo Joggers',
        titleColorChoose: 'color choose',
        titleAttribute:'Attributes',
        titleSize: 'size',
        Description:'Cargo Joggers combine utility and  comfort with a modern edge, featuring multiple pockets, a relaxed fit, and a street-ready vibe.',
        colorChoose: 'black',
        Attribute1: 'Classic',
        Attribute2: 'Versatile',
        Attribute3: 'Minimal',
        Attribute4: 'Elegant',
        Size1:'S',
        Size2:'M',
        Size3:'L',
        Size4:'XL',
        price: '25.00',
        Button: 'Add to Cart'
    },
    

] 

const displayItems = (items) => {
    const rootElement = document.getElementById("root");
    rootElement.innerHTML = "";

    items.forEach((item) => {
        const {
            index, img, title, Description,
            Attribute1, Attribute2, Attribute3, Attribute4,
            Size1, Size2, Size3, Size4,
            price, Button, titleColorChoose, titleAttribute, titleSize
        } = item;

        const jList = document.createElement("div");
        jList.className = 'jList';
        jList.innerHTML = `
            <img src="${img}" alt="${title}">
            <h3 id="titleOfProduct">${title}</h3>
            <p id="DescriptionOfProduct">${Description}</p>
            <h3 id="titleColorChoose">${titleColorChoose}</h3>
            <div class="colorChoose">
                <button id="FirstButtonColor"></button>
                <button id="SecondButtonColor"></button>
                <button id="ThirdButtonColor"></button>
            </div>
            <div class="AttributeContainer">
            <div class="TitleAttributeContainer">
                <h3>${titleAttribute}</h3>

            </div
                <div class="ButtonAttributeContainer">
                    <button id="ButtonAtrribute">${Attribute1}</button>
                    <button  id="ButtonAtrributeBorder">${Attribute2}</button>
                    <button   id="ButtonAtrributeBorder"> ${Attribute3}</button>
                    <button   id="ButtonAtrributeBorder">${Attribute4}</button>
                </div>
            </div>
            <div class="SizeConteiner">
           <div class="TitleSizeContainer">
                <h3 >${titleSize}</h3>
            </div>
            <div class="ButtonSizeContainer">
                    <button id="button">${Size1}</button>
                    <button id="button">${Size2}</button>
                    <button id="button">${Size3}</button>
                    <button id="button">${Size4}</button>
            </div>
            </div>
            <div class="PriceContainer">
            <div class="PriceTitleContainer">
                <h4>${price}</h4>
            </div
                
                <div class="PriceButtonContainer">
                    <button class="Plus"><i class="fa-solid fa-plus"></i></button>
                    <h4 class="Cart">1</h4>
                    <button class="Minus"><i class="fa-solid fa-minus"></i></button>
                </div>
                <div class="ButtonContainer">
                    <button class="addToCart" data-index="${index}">${Button}</button>
                </div>
            </div>
        `;

        // Redirect on full card click
        jList.addEventListener('click', () => {
            window.location.href = `job-details.html?id=${index}`;
        });

        // Add to cart logic
        const addToCartBtn = jList.querySelector(".addToCart");
        addToCartBtn.addEventListener("click", (event) => {
            event.stopPropagation(); // prevent redirect
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            const exists = cart.find(product => product.index === item.index);
            if (!exists) {
                cart.push(item);
                localStorage.setItem("cart", JSON.stringify(cart));
                alert(`${item.title} added to cart!`);
            } else {
                alert(`${item.title} is already in your cart.`);
            }
        });

        rootElement.appendChild(jList);
    });
};

window.onload = () => {
    displayItems(JSCollection);
};
