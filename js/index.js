const loadTree = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayTree(json.categories)
    );
};

const displayTree = (trees) => {
    // console.log(trees);
    const treeContainer = document.getElementById("tree-container");
        treeContainer.innerHTML = "";
    for(let tree of trees){
        console.log(tree);
        
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
                <button class="w-60 border-none bg-sky-100 text-gray-500 text-2xl mt-5">${tree.category_name}</button>

        `;

        treeContainer.append(btnDiv)
    }


    
};





loadTree();