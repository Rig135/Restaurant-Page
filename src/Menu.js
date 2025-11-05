export default function loadMenu() {

    let imageLinks = ["https://images.unsplash.com/photo-1641474551284-a897070e227e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxHcmlsbGVkJTIwU2VhJTIwQmFzcyUyMHdpdGglMjBMZW1vbiUyMEJ1dHRlciUyMCUyNiUyMENhcGVycyUyMHBsYXRlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", 'https://images.unsplash.com/photo-1599655345131-6eb73b81d8d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=686', 'https://images.unsplash.com/photo-1675377668870-baf9b35763f9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1333', 'https://images.unsplash.com/photo-1632389762435-8c53185e40ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1229', 'https://images.unsplash.com/photo-1710775694428-5f6e66ae6a4c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170', 'https://images.unsplash.com/photo-1676300184390-04ddf405d4f0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070'];
    let imageAlt = ["Grilled Sea Bass with Lemon Butter & Capers", "Garlic Butter Prawns", "Calamari Fritti with Lemon Aioli", "Lobster Risotto with Saffron Cream", "Mussel Marinara", "Mediterranean Seaside Salad"];
    let H2 = ['Grilled Sea Bass with Lemon Butter', 'Garlic Butter Prawns', 'Calamari Fritti with Lemon Aioli', 'Lobster Risotto with Saffron Cream', 'Mussel Marinara', 'Mediterranean Seaside Salad'];
    let paragraphs = ['Freshly caught sea bass, perfectly grilled to a crisp skin and tender center.Finished with a drizzle of lemon butter and a touch of sea salt for a bright, ocean-kissed flavor.', 'Succulent prawns sautéed in rich garlic butter and herbs.Served sizzling with toasted sourdough to soak up every golden drop.', 'Crispy, golden calamari rings lightly seasoned and fried to perfection.Paired with a smooth lemon aioli dip that balances zest and creaminess.', 'A luxurious risotto infused with saffron and topped with tender lobster pieces.Rich, creamy, and layered with the deep flavors of the sea.', 'Plump mussels steamed in a fragrant tomato, garlic, and white wine sauce.Served with warm bread — perfect for savoring every last drop of marinara.', 'A refreshing blend of shrimp, olives, feta, cucumber, and cherry tomatoes.Tossed in extra virgin olive oil and sea salt for a crisp coastal finish.']


    const MenuContent = document.querySelector('#content');
    MenuContent.innerHTML = "";
    MenuContent.classList.remove('fade-in');

    const menuDiv = document.createElement('div');
    menuDiv.id = 'menu';

    const span = document.createElement('span');
    span.id = 'menuText';
    span.innerText = "Our Menu";

    menuDiv.appendChild(span);
    MenuContent.appendChild(menuDiv);

    const gridContainer = document.createElement('div');
    gridContainer.classList.add('gridContainer');

    for (let i = 0; i < 6; i++) {
        const menuCard = document.createElement('div');
        menuCard.classList.add('menuCard');

        const image = document.createElement('img');
        image.src = imageLinks[i];
        image.alt = imageAlt[i];
        menuCard.appendChild(image);

        const h2 = document.createElement('h2');
        h2.innerText = H2[i];
        menuCard.appendChild(h2);

        const para = document.createElement('p');
        para.innerText = paragraphs[i];
        menuCard.appendChild(para);

        const anchorTag = document.createElement('a');
        anchorTag.innerText = 'Order now ➔';
        menuCard.appendChild(anchorTag);

        gridContainer.appendChild(menuCard);

    }
    MenuContent.appendChild(gridContainer);


    void MenuContent.offsetWidth;

    MenuContent.classList.add('fade-in');
}