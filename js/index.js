const loadTree = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayTree(json.categories)
    );
};

const removeActive = () => {
    const treeButton = document.querySelectorAll(".card-btn")
    treeButton.forEach((clickBtn) => clickBtn.classList.remove("active"))
}



const loadTreeCard = (id) => {
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    // console.log(url);
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        const clickBtn = document.getElementById(`card-btn-${id}`)
        clickBtn.classList.add("active")

        displayTreeCard(data.plants)
    }
    )
};

const displayTreeCard = (cards) => {
    // console.log(cards);
    const cardContainer = document.getElementById("card-container")
    cardContainer.innerHTML = "";

    cards.forEach((card) => {
        console.log(card);
        const pCard = document.createElement("div")
        pCard.innerHTML = `
            <div class="bg-white h-full w-66 rounded-lg">
                  <div class="p-6">
                    <img class="rounded-lg" src="${card.image}" alt="">
                    <h1 class="font-bold text-2xl mt-2">${card.name}</h1>
                    <p class="font-semibold text-gray-600 mt-2">${card.description}</p>
                    <div class="mt-2 flex justify-between">
                      <button class="bg-green-200 text-green-700 border-none rounded-2xl w-30">${card.category}</button>
                      <h1 class="font-bold text-2xl">$${card.price}</h1>
                    </div>
                    <button class="border-none bg-green-600 text-white text-3xl w-full mt-2 justify-center rounded-xl">Add to Cart
                    </button>
                  </div>
            </div>
        `;
        cardContainer.append(pCard)
    })
};

const displayTree = (trees) => {
    // console.log(trees);
    const treeContainer = document.getElementById("tree-container");
        treeContainer.innerHTML = "";
    for(let tree of trees){
        console.log(tree);
        
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
            <button id="card-btn-${tree.id}" onclick = "loadTreeCard(${tree.id})" class="w-60 border-none bg-sky-100 text-gray-500 
            text-2xl mt-5 hover:bg-green-600 hover:text-white rounded-xl card-btn">
            ${tree.category_name}</button>

        `;

        treeContainer.append(btnDiv)
    }


    
};





loadTree();