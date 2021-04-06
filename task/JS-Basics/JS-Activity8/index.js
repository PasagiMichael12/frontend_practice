const dishes = {
    column: [{ code: 'Code', name: 'Dish', item_description: 'Item Description', type: 'Main Dish' }],
    data: [
        {
            name: "Adobo",
            code: "#01ADB",
            item_description: "Adobo refers to a method of marinating and stewing for any cut of meat or fish in a briny mixture of vinegar, soy sauce, and spices",
            type: "Main Dish"
        },
        {
            name: "Sinigang",
            code: "#02SNG",
            item_description: "Sinigang is a Filipino soup or stew characterized by its sour and savoury taste.",
            type: "Main Dish"
        },
        {
            name: "Bulalo",
            code: "#03BLO",
            item_description: "Bulalo is a beef dish from the Philippines. It is a light colored soup that is made by cooking beef shanks and marrow bones until the collagen and fat has melted into the clear broth.",
            type: "Main Dish"
        },
        {
            name: "Kare-kare",
            code: "#04KRE",
            item_description: "Kare-kare is a Philippine stew complimented with a thick savory peanut sauce. It is made from a base of stewed oxtail (sometimes this is the only meat used), pork hocks, calves feet, pig feet, beef stew meat, and occasionally offal or tripe.",
            type: "Main Dish"
        },
        {
            name: "Menudo",
            code: "#05MNO",
            item_description: "Menudo, also known as ginamay in Cebuano is a traditional stew from the Philippines made with pork and sliced liver in tomato sauce with carrots and potatoes.",
            type: "Main Dish"
        },
        {
            name: "Mechado",
            code: "#06MHO",
            item_description: "Beef Mechado is a Filipino-style beef stew made of larded beef chunks braised in tomato sauce with potatoes and carrots.",
            type: "Main Dish"
        },
        {
            name: "Afritada",
            code: "#07ATA",
            item_description: "Afritada is a Philippine dish consisting of chicken, beef, or pork braised in tomato sauce with carrots, potatoes, and red and green bell peppers.",
            type: "Main Dish"
        },
        // {
        //     name: "Bulalo",
        //     code: "#08BLO",
        //     item_description: "Beef stew with potatoes, corns and other vegetables",
        //     type: "Main Dish"
        // }
    ]
}
//Displaying Table from objects
const tableId = document.querySelector('#dish');
const user = prompt('Enter your Name');

const generateColumn = () => {
    const dishesColumns = dishes.column.map(dish => {
        return `<thead style = 'background-color:black; color:white;'><tr><th>${dish.code}</th>\n<th> ${dish.name}</th>\n<th> ${dish.item_description} </th>\n<th> ${dish.type} </th></tr><thead>`;
    })
    tableId.innerHTML = dishesColumns;
}
generateColumn();
const tbody = document.createElement('tbody');
tableId.append(tbody);
const generateData = () => {
    const dishesRow = dishes.data.map(dish => {
        return `<tr><td><a onclick="linkCode(this)">${dish.code}</a></td><td>${dish.name}</td><td>${dish.item_description}</td><td>${dish.type}</td></tr>`;
    })
    tbody.innerHTML = dishesRow.join('');
}
generateData();
//Displaying Table from objects

//////////////////////////////////////////////////////////////
const linkCode = (e) => {
    const getDish = document.querySelector('#dishCode');
    getDish.value = e.innerText.toString();
    const dish = dishes.data.filter(food => {
        return food.code === getDish.value ? food.name : false;
    });
    main_dish.value = dish[0].name;
}

const main_dish = document.querySelector('#mainDish');
const getCode = (code) => {
    const dish = dishes.data.filter(food => {
        return food.code === code.value ? food.name : false;
    });
    main_dish.value = dish[0].name;
}
//Displaying receipt
const getReceipt = () => {
    const customer = user;
    const getDish = document.querySelector('#dishCode');
    const dish = dishes.data.filter(food => {
        return food.code === getDish.value ? food.name : false;
    });
    let getRice = document.querySelector('#rice').options[document.querySelector('#rice').selectedIndex].value;
    let getDrinks = document.querySelector('#drinks').options[document.querySelector('#drinks').selectedIndex].value;

    const receipt = document.querySelector('#receipt');
    alert(`Name:${customer}\nMain Dish: ${dish[0].name}\nRice: ${getRice}\nDrinks: ${getDrinks}`);
    receipt.innerHTML = `<p>Name: ${customer}</p>\n<p>Main Dish:${dish[0].name}</p>\n<p>Rice: ${getRice}</p>\n<p>Drinks: ${getDrinks}</p>`;

}


