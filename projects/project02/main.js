console.log('this works')

const deserts = [
    {
        name: "Desert1",
        location: "DeathValley",
        size: 1000,
        image: 'https://drive.google.com/uc?id=1iS6BFUnReISgARHlENTEYPeHw86XorJs'
    },
    {
        name: "Desert2",
        location: "Atacama",
        size: 500,
        image: 'https://drive.google.com/uc?id=1dLzd5MBeB-jpc52FHYPnnuQi9CWc031M'
    },
    {
        name: "Desert3",
        location: "DeathValley",
        size: 1000,
        image: 'https://drive.google.com/uc?id=1QljuAXmDr_cigiuFlf4JemHLRrBHqOUM'
    },
    {
        name: "Desert4",
        location: "Gobi",
        size: 700,
        image: 'https://drive.google.com/uc?id=18vYsRxljS3YkGABIIOJY5EqOeLdzLcvP'
    },

]

// Rendering Images from above to page
const ul = document.querySelector("ul");

function renderDesertToPage(results) {
    //iterating over data set
    for(let i = 0; i < results.length; i++){
        //creating the list item
        let listItem = document.createElement('li');
        //add a class to each item of the results
        listItem.classList.add('card', results[i].location) // 
        //add desert name
        let title = document.createElement('h3')
        title.textContent = results[i].name //
        //add desert location
        let location = document.createElement('p')
        location.classList.add(results[i].location)
        location.textContent = results[i].location

        //add desert image
        let image = document.createElement('img')
        image.setAttribute('src', results[i].image)

        ul.appendChild(listItem)
        listItem.appendChild(title)
        listItem.appendChild(location)
        listItem.appendChild(image)
    }
}

renderDesertToPage(deserts);

// Sorting Method
let filterBtns = document.querySelector(".filters");
let cards = document.querySelectorAll(".card");

function sortingFn(event) {
    if (event.target.classList.contains('filter-btn')) {
        const filterValue = event.target.getAttribute('data-filter');

        if(filterValue === 'from smaller to larger'){
            deserts.sort(function(a, b){
                if(a.size < b.size){
                    return -1
                }
                if(a.size > b.size){
                    return 1
                }
                return 0
            })
            ul.innerHTML = ""
            renderDesertToPage(deserts)
        } else if (filterValue === 'from larger to smaller'){

            ul.innerHTML = ""
            renderDesertToPage(deserts)
        }
    }
}
filterBtns.addEventListener("click", sortingFn);
