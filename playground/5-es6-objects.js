// Object property shorthand

const name = "Andrew";
const userAge = 27;

const user = {
    name: name,
    age: userAge,
    location: "New York"
}

console.log(user);

// Object destructring

const product = {
    label: "Red notebook",
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const {label, stock} = product
// console.log(label);
// console.log(stock);

// const {label: productLable, stock, rating = 5} = product;
// console.log(productLable);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock);
}

// transaction("order", product);
transaction("order");