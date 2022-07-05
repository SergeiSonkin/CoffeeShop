const shopOverlay = document.querySelector(".shop-overlay");
const itemDescription = document.querySelectorAll(".item__description")
const shop = document.querySelector(".shop");

let menuItems = [
    {
        id: 1,
        category: "drinks",
        name: "mocha",
        price: 5.99,
        img: "https://res.cloudinary.com/dojufipq9/image/upload/v1654474802/CoffeeShop/assets/images/Mocha_nifk5f.jpg",
        description: "Mocha is a high quality type of coffee made from a specific coffee bean. It's easily confused with the flavored drink also called a mocha, which combines coffee and chocolate.",
        calories: "197",
        fat: "9.14g",
        carbs: "66.97g",
        protein: "10.94g"
    },
    {
        id: 2,
        category: "drinks",
        name: "cappuccino",
        price: 4.55,
        img: "https://res.cloudinary.com/dojufipq9/image/upload/v1654474756/CoffeeShop/assets/images/Cappuccino_o3uowr.jpg",
        description: "Cappuccino is the perfect balance of espresso, steamed milk and foam. This coffee is all about the structure and the even splitting of all elements into equal thirds.",
        calories: "74",
        fat: "3.98g",
        carbs: "5.81g",
        protein: "4.08g"
    },
    {
        id: 3,
        category: "drinks",
        name: "espresso",
        price: 7.99,
        img: "https://res.cloudinary.com/dojufipq9/image/upload/v1654474697/CoffeeShop/assets/images/Espresso_vcoki9.jpg",
        description: "Espresso is a concentrated form of coffee served in small, strong shots and is the base for many coffee drinks.",
        calories: "1",
        fat: "0.11g",
        carbs: "0g",
        protein: "0.07g"
    },
    {
        id: 4,
        category: "drinks",
        name: "macchiato",
        price: 9.99,
        img: "https://res.cloudinary.com/dojufipq9/image/upload/v1654474664/CoffeeShop/assets/images/Macchiato_gskalh.jpg",
        description: "Macchiato is an espresso coffee drink with a small amount of milk, usually foamed. It has has the highest ratio of espresso to milk of any drink made with those ingredients. ",
        calories: "10",
        fat: "0.56g",
        carbs: "0.67g",
        protein: "0.53g"
    },

]

window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menuItems)
    displayOverlay(menuItems)
    showPrice();
    cartFunction();
})

const displayMenuItems = (menuItems) => {
    let displayMenu = menuItems.map((item) => {
        return `
        <article class="shop-item">
            <header class="shop-item__left">
                <img class="shop-item__item-image" src=${item.img}  />
            </header>
            <div class="shop-item__right">
                <div class="shop-item__item-info">
                    <h4 class="shop-item__item-title">${item.name}</h4>
                    <span class="shop-item__item-price">$${item.price}</span>
                    <p class="shop-item__item-description">${item.description}</p>
                </div>
                <div class="shop-item__buttons">
                    <button class="btn btn-buy">Buy</button>
                    <button class="btn btn-details">Details</button>
                </div>
            </div>
        </article>
        `
    })
    displayMenu = displayMenu.join("");

    shop.innerHTML = displayMenu;
}

const showPrice = () => {
    const btnBuy = document.getElementsByClassName("btn-buy");

    for (let i = 0; i < btnBuy.length; i++) {
        btnBuy[i].addEventListener("mouseover", () => {
            btnBuy[i].innerHTML = `$${menuItems[i].price}`;
        });
        btnBuy[i].addEventListener("mouseout", () => {
            btnBuy[i].innerHTML = "Buy";
        });
    }
}

const displayOverlay = (menuItems) => {
    const btnDetails = document.querySelectorAll(".btn-details");

    let displayOverlay = menuItems.map((item) => {
        return `
        <div class="shop-overlay__item">
                <img src=${item.img} alt="img" class="shop-overlay__image" />
                <div class="shop-overlay__info">
                    <div class="shop-overlay__header">
                        <h4>${item.name}</h4>
                    </div>
                    <ul>
                        <li>
                            Calories: <span style=color:green>${item.calories}</span>
                        </li>
                        <li>
                            Fat: <span style=color:green>${item.fat}</span>
                        </li>
                        <li>
                            Carbs: <span style=color:green>${item.carbs}</span>
                        </li>
                        <li>
                            Protein:
                            <span style=color:green>${item.protein}</span>
                        </li>
                        <li>
                            Price:
                            <span style=color:yellow>$${item.price}</span>
                        </li>
                    </ul>
                </div>
            </div>
        `
    })

    for (let i = 0; i < btnDetails.length; i++) {
        btnDetails[i].addEventListener("click", () => {
            shopOverlay.innerHTML = displayOverlay[i];
            shopOverlay.style.visibility = "visible";
        })
        shopOverlay.addEventListener("click", () => {
            shopOverlay.style.visibility = "hidden";
        })
    }
}

const showError = () => {
    let error = document.querySelector(".show-error");
    error.style.display = "grid";
    setTimeout( () => {
        error.style.display = "none";
    }, 1000)
}

const cartFunction = () => {
    let removeCartItemButtons = document.getElementsByClassName("btn-danger");
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    let quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

    let addToCartButtons = document.getElementsByClassName('btn-buy');
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
}

const purchaseClicked = () => {
    alert("Thank you for your purchase");
    let cartItems = document.getElementsByClassName('cart-items')[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal();
}

const removeCartItem = (event) => {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

const quantityChanged = (event) => {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal()
}

const addToCartClicked = (event) => {
    let button = event.target;
    let shopItem = button.parentElement.parentElement;
    let title = shopItem.getElementsByClassName('shop-item__item-title')[0].innerText;
    let price = shopItem.getElementsByClassName('shop-item__item-price')[0].innerText;
    let imageSrc = shopItem.parentElement.getElementsByClassName('shop-item__item-image')[0].src;
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
}

const addItemToCart = (title, price, imageSrc) => {
    let cartRow = document.createElement('div');
    cartRow.classList.add('content-section__cart-row');
    let cartItems = document.getElementsByClassName('cart-items')[0];
    let cartItemNames = cartItems.getElementsByClassName('cart-item-title');

    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            showError();
            // alert('This item is already added to the cart');
            return 0;
        }
    }
    let cartRowContents = `
                    <div class="cart-item cart-column">
                        <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
                        <span class="cart-item-title">${title}</span>
                    </div>
                    <span class="cart-price cart-column">${price}</span>
                    <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" type="number" value="1">
                        <button class="btn btn-danger" type="button">REMOVE</button>
                    </div>`;

    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
}

const updateCartTotal = () => {
    let cartItemContainer = document.getElementsByClassName('cart-items')[0];
    let cartRows = cartItemContainer.getElementsByClassName('content-section__cart-row')
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName('cart-price')[0];
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        let price = parseFloat(priceElement.innerText.replace('$', ''));
        let quantity = quantityElement.value;
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}

