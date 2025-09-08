const loadTree = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayTree(json.categories)
    );
};

const loadTreeCard = (id) => {
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    // console.log(url);
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayTreeCard(data.plants)
    )
};

const displayTreeCard = (cards) => {
    // console.log(cards);
    const cardContainer = document.getElementById("card-container")
    // cardContainer.innerHTML = "";

    cards.forEach((card) => {
        console.log(card);
        const pCard = document.createElement("div")
        pCard.innerHTML = `
            <p>ok</p>
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
            <button onclick = "loadTreeCard(${tree.id})" class="w-60 border-none bg-sky-100 text-gray-500 text-2xl mt-5
             hover:bg-green-600 hover:text-white rounded-xl">
            ${tree.category_name}</button>

        `;

        treeContainer.append(btnDiv)
    }


    
};





loadTree();