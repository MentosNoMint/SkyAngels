let token = true;
let checkSelect = [];
let clickMoment = 0;

let current = 'mainPage'

function changeScreen(open) {
  let page = {};


  page['RacePageOpen'] = "RegisterRacePage"
  page['MainPageOpen'] = "mainPage"
  page['accountOpen'] = "accountPage"
  page['btnYellow'] = "buyticketPage"
  page['PlaceCheckOpen'] = "placeCheckPage"
  page['SelecePlaceOpen'] = "SelectPlacePage"



  if (page[open] != 'accountPage') {

    document.getElementById(page[open]).style.display = 'flex'
    document.getElementById(current).style.display = 'none'
    console.log("Готово " + current)
    current = page[open];


    if (page[open] == 'SelectPlacePage') {

      document.addEventListener('click', async function (e) {
        let targetElement = e.target;
        let current = targetElement.id;
        clickMoment += 1
        if (clickMoment <= 20) {
          console.log(current)
          e.target.style.borderColor = e.target.style.borderColor === 'blue' ? '' : 'blue';

        }
      })
    }

  }

  if (!token && page[open] == 'accountPage') {
    document.getElementById('accountOpen').addEventListener('click', function () {
      document.getElementById('loginPage').style.display = 'flex';
      document.getElementById('mainPage').style.display = 'none';
      console.log("рег")

    });
  } else {
    document.getElementById('accountOpen').addEventListener('click', function () {
      document.getElementById('mainPage').style.display = 'none';
      document.getElementById('accountPage').style.display = 'flex';
      console.log("аккаунт")

    });
  }


}

