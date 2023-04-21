console.log('this works')

//size of the desert is measured in miles squared
const deserts = [
    {
        name: "Desert1",
        location: "DeathValley",
        size: 5270,
        image: 'https://drive.google.com/uc?id=1iS6BFUnReISgARHlENTEYPeHw86XorJs'
    },
    {
        name: "Desert2",
        location: "Atacama",
        size: 40441,
        image: 'https://drive.google.com/uc?id=1dLzd5MBeB-jpc52FHYPnnuQi9CWc031M'
    },
    {
        name: "Desert3",
        location: "DeathValley",
        size: 5270,
        image: 'https://drive.google.com/uc?id=1QljuAXmDr_cigiuFlf4JemHLRrBHqOUM'
    },
    {
        name: "Desert4",
        location: "Gobi",
        size: 500000,
        image: 'https://drive.google.com/uc?id=18vYsRxljS3YkGABIIOJY5EqOeLdzLcvP'
    },
    {
        name: "Desert5",
        location: "Namib",
        size: 31274,
        image: 'https://drive.google.com/uc?id=1l1zB57qyjtFQwUXNd__vnp76OTGij-KX'
    },
    {
        name: "Desert6",
        location: "Namib",
        size: 31274,
        image: 'https://drive.google.com/uc?id=1tmAZ_PlwUSBNgvUVFoadsHuh60BD1cvh'
    },
    {
        name: "Desert7",
        location: "Namib",
        size: 31274,
        image: 'https://drive.google.com/uc?id=1kHsNlETjun4Hzzm5LRleOpgYgq0quN5i'
    },
    {
        name: "Desert8",
        location: "DeathValley",
        size: 5270,
        image: 'https://drive.google.com/uc?id=17fVbmCHWEkYgg3ssI25aXVJT0c35_GkC'
    },
    {
        name: "Desert9",
        location: "Atacama",
        size: 40441,
        image: 'https://drive.google.com/uc?id=1eHE5xb2F3ZpxjjOJMDL2yG9lgnTzZFMs'
    },
    {
        name: "Desert10",
        location: "Agafay",
        size: 0.5,
        image: 'https://drive.google.com/uc?id=1Vk2CL-Ay6WK1xXbsNBigee2FWnrJoGZ4'
    },
    {
        name: "Desert11",
        location: "Agafay",
        size: 0.5,
        image: 'https://drive.google.com/uc?id=1JR09jkXyU7XB0OvyZKkN4UPyHjJ_zu5V'
    },
    {
        name: "Desert12",
        location: "Agafay",
        size: 0.5,
        image: 'https://drive.google.com/uc?id=1vJy3ze3EwUq-DI5UbgJsdd8jjDeru9Ni'
    },
    {
        name: "Desert13",
        location: "Agafay",
        size: 0.5,
        image: 'https://drive.google.com/uc?id=18GSlj9iiuGlPk989eB5vvpn0UkHq4FWA'
    },
    {
        name: "Desert14",
        location: "Agafay",
        size: 0.5,
        image: 'https://drive.google.com/uc?id=1a48Fii7q8nKWbSATGUc_0cvxOruXp3Bp'
    },
    {
        name: "Desert15",
        location: "Gobi",
        size: 500000,
        image: 'https://drive.google.com/uc?id=1ySUC95_dRuzzOhufAI0qETRDjqor2Z7d'
    },
    {
        name: "Desert16",
        location: "Namib",
        size: 31274,
        image: 'https://drive.google.com/uc?id=1VXl9G0KSlR1auIiu4PGVSE2Ho6SBKptK'
    },
    {
        name: "Desert17",
        location: "Sahara",
        size: 3552000,
        image: 'https://drive.google.com/uc?id=18PbTxaKATX7QSbJxB9C8KWJCi2TJi7CU'
    },
    {
        name: "Desert18",
        location: "Sahara",
        size: 3552000,
        image: 'https://drive.google.com/uc?id=1efXBZOUyve7kgrhQyr5DEbU9obvnyJ5p'
    },
    {
        name: "Desert19",
        location: "Sahara",
        size: 3552000,
        image: 'https://drive.google.com/uc?id=1704yh3SdsfMTRj99IuNhrIrv_7O0Ji96'
    },
    {
        name: "Desert20",
        location: "Sahara",
        size: 3552000,
        image: 'https://drive.google.com/uc?id=1FkpuVk_GL-A4n-zOnml4t4Lq5fPRyHcF'
    },
    {
        name: "Desert21",
        location: "CharaSands",
        size: 7,
        image: 'https://drive.google.com/uc?id=1aC3Pvbsrr2l5ogui4XkCkVmwy_tCEmM4'
    },
    {
        name: "Desert22",
        location: "CharaSands",
        size: 7,
        image: 'https://drive.google.com/uc?id=1lNkGAEbejrouPDuYXwSY5mL5JiTPOzru'
    },
    {
        name: "Desert23",
        location: "CharaSands",
        size: 7,
        image: 'https://drive.google.com/uc?id=1ur-y9ZIn5KtM9-RMSmqJGWDN7mgYu6Ax'
    },
    {
        name: "Desert24",
        location: "GreatKobukSandDunes",
        size: 25,
        image: 'https://drive.google.com/uc?id=11mr3LzE-6l6d84zPBzAJWlxtI_-re9cx'
    },
    {
        name: "Desert25",
        location: "GreatKobukSandDunes",
        size: 25,
        image: 'https://drive.google.com/uc?id=1Y8QfBYehw4Na53Y-0kYVD0djQkL51GZB'
    },
    {
        name: "Desert26",
        location: "Agafay",
        size: 0.5,
        image: 'https://drive.google.com/uc?id=11nxbWoNsInADq51bW-mrMOai8xI2r_Mu'
    },
    {
        name: "Desert27",
        location: "Agafay",
        size: 0.5,
        image: 'https://drive.google.com/uc?id=19MDMR_BzZ17lgCMk0u5GpIPSh3V6arYn'
    },
    {
        name: "Desert28",
        location: "Atacama",
        size: 40441,
        image: 'https://drive.google.com/uc?id=1r3On0Ef9yO3fbEiYpCisPAwxK5_aJRJ2'
    },
    {
        name: "Desert29",
        location: "Atacama",
        size: 40441,
        image: 'https://drive.google.com/uc?id=1L3KpzDMCl_yvhSCCbJSZ8py-ZKQe63BE'
    },
    {
        name: "Desert30",
        location: "Atacama",
        size: 40441,
        image: 'https://drive.google.com/uc?id=1bhpqvbrbbVd9q1S1Z61TVLHyZuBw_Pl7'
    },
    {
        name: "Desert31",
        location: "Atacama",
        size: 40441,
        image: 'https://drive.google.com/uc?id=1u_0zGPhkSs85Bo7Zn9jNoKtZOb7eFOjx'
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

//flipping the images to reveal their location
//var flipping = document.querySelector('.flipping');
//	flipping.addEventListener( 'click', function() {
// 		flipping.classList.toggle('is-flipped');
//	});


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
            deserts.sort(function(a, b){
                if(a.size > b.size){
                    return -1
                }
                if(a.size < b.size){
                    return 1
                }
                return 0
            })
            ul.innerHTML = ""
            renderDesertToPage(deserts)
        }
    }
}
filterBtns.addEventListener("click", sortingFn);

//FILTERING BY LOCATION OF THE DESERT


//Celeste's script exactly
  
let filterBtns1 = document.querySelector(".filtersdesert");
let cards1 = document.querySelectorAll(".card");
  
  function filterFn(event) {
    console.log(event.target)
    if(event.target.classList.contains('filter-btn-desert')){
      // select the current active button
      let activeBtn = filterBtns1.querySelector('.active-desert')
      activeBtn.classList.remove('active-desert')
  
      // apply the active class to the target
      event.target.classList.add('active-desert')
  
      const filterValue1 = event.target.getAttribute('data-filter') // yellow | red
  
      for(let i = 0; i < cards.length; i++){
        if(cards[i].classList.contains(filterValue1) || filterValue1 === 'all'){
          cards[i].classList.remove('hide')
          cards[i].classList.add('show')
        } else {
          cards[i].classList.remove('show')
          cards[i].classList.add('hide')
        }
  
      }
    }
  }
  filterBtns1.addEventListener("click", filterFn);


  //let filterBtns = document.querySelector(".filters");
//let cards = document.querySelectorAll(".card");

//let filterBtns1 = document.querySelector(".filters-desert");

//function filterFn(event) {
//  console.log(event.target)
 //   if(event.target.classList.contains('filter-btn-desert')){
 //       //select the current active button
 //       let activeBtn = filterBtns1.querySelector('.active-desert')
 //       activeBtn.classList.remove('active-desert')
//
        //apply the active class to the target
 //       event.target.classList.add('active-desert')

 //       const filterValue1 = event.target.getAttribute('data-filter') // name of the location

 //       for(let i = 0; i < cards.length; i++){
 //           if(cards[i].classList.contains(filterValue1) || filterValue1 === 'all'){
//                cards[i].classList.remove('hide')
 //               cards[i].classList.add('show')
 //           } else {
 //               cards[i].classList.remove('show')
 //               cards[i].classList.add('hide')
 //           }
 //           
 //       }
 //   }
//}

//filterBtns1.addEventListener("click", filterFn)

//what is wrong with the script?

//const saharaDesertImages =
//    deserts.filter(function(deserts) {
 //   return deserts.location == "Sahara";
//});