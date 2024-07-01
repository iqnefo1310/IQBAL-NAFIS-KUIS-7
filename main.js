const products = [

    {
        name: "kucing",
        image: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
        price: "Rp.999",
        desc: [
            "lucu",
            "teman",
            "hewan"
        ]

    },
    {
        name: "kucing",
        image: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
        price: "Rp.999",
        desc: [
            "lucu",
            "teman",
            "hewan"
        ]

    },
    {
        name: "kucing",
        image: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
        price: "Rp.999",
        desc: [
            "lucu",
            "teman",
            "hewan"
        ]

    },
    {
        name: "kucing",
        image: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
        price: "Rp.999",
        desc: [
            "lucu",
            "teman",
            "hewan"
        ]

    },
    {
        name: "kucing",
        image: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
        price: "Rp.999",
        desc: [
            "lucu",
            "teman",
            "hewan"
        ]

    },
    {
        name: "kucing",
        image: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
        price: "Rp.999",
        desc: [
            "lucu",
            "teman",
            "hewan"
        ]

    },
    {
        name: "kucing",
        image: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
        price: "Rp.999",
        desc: [
            "lucu",
            "teman",
            "hewan"
        ]

    },
    {
        name: "kucing",
        image: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
        price: "Rp.999",
        desc: [
            "lucu",
            "teman",
            "hewan"
        ]

    },
    {
        name: "kucing",
        image: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
        price: "Rp.999",
        desc: [
            "lucu",
            "teman",
            "hewan"
        ]

    },
    {
        name: "kucing",
        image: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
        price: "Rp.999",
        desc: [
            "lucu",
            "teman",
            "hewan"
        ]

    },
    {
        name: "kucing",
        image: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
        price: "Rp.999",
        desc: [
            "lucu",
            "teman",
            "hewan"
        ]

    },
]

function card(product) {
    let content = document.querySelector('.content');
    let figure = document.createElement('figure');
    let figcaption = document.createElement("figcaption");
    let img = document.createElement('img');
    let buy =document.createElement('button');
    buy.textContent = ("buy");
    let like =document.createElement('button');
    like.textContent = ("like");
    let coment =document.createElement('button');
    coment.textContent = ("coment");
    img.src = product.image;
    let h1 = document.createElement('h1');
    h1.textContent = product.name;
    let h2 = document.createElement('h2');
    h2.textContent = product.price;
    let ul = document.createElement('ul');
    product.desc.map((d) => {
        let li = document.createElement('li');
        li.textContent = d;
        ul.appendChild(li);
    })

    buy.addEventListener("click",()=> confirm("anda membeli product?"));
    like.addEventListener("click",()=> alert("anda menyukai product"));
    coment.addEventListener("click",()=> prompt("tulis komentar anda"));

    figcaption.appendChild(h1);
    figcaption.appendChild(ul);
    figcaption.appendChild(h2);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    figure.appendChild(buy);
    figure.appendChild(like);
    figure.appendChild(coment);
    content.appendChild(figure);
}

products.map((product) => {
    card(product);
});
