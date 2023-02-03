//menu left 
step = document.querySelectorAll('.number-step');
step.forEach(function (el) {
  el.addEventListener('click', function () {
    step.forEach(function (el) {
      el.classList.remove('hide');
    });
    this.classList.add('hide');
  });
}
);
//menu right change steps
page1 = document.querySelector('.right-menu-step1');
page2 = document.querySelector('.right-menu-step2');
page3 = document.querySelector('.right-menu-step3');
page4 = document.querySelector('.right-menu-step4');

const allPages = [page1, page2, page3, page4];
  //change steps
  const gotostep2 = () => {
    page2.classList.remove('active');
    page1.classList.add('active');
    page3.classList.add('active')
    return true;
  };

  const gotostep3 = () => { 
    page3.classList.remove('active');
    page1.classList.add('active');
    page2.classList.add('active');
    return true;
  }
  const gotostep4 = () => {
    page4.classList.remove('active');
    page1.classList.add('active');
    page2.classList.add('active');
    page3.classList.add('active');
    return true;
  }
  
//back steps
  const backtostep1 = () => {
    page1.classList.remove('active');
    page2.classList.add('active');
    page3.classList.add('active');
  return true;
};
  const backtostep2 = () => {
    page2.classList.remove('active');
    page1.classList.add('active');
    page3.classList.add('active');
    return true;
};
  const backtostep3 = () => {
    page3.classList.remove('active');
    page1.classList.add('active');
    page2.classList.add('active');
    page4.classList.add('active');
    return true;
};

//toggle radio step2
const toggle = document.getElementById('toggleP');
const month = document.querySelectorAll('.monthsfree');

// cardPrice DINAMICO

// switch toggle 
//change price
   toggle.addEventListener('click', function () {
    const changedPrice = document.querySelectorAll('.price');
    const priceYear = document.querySelectorAll('.numberYear');
    const styledMonth = document.querySelectorAll('.styledMonth');
    const styledYear = document.querySelectorAll('.styledYear');

    changedPrice.forEach(function (el) {
      el.innerText = 'yr';
      priceYear.forEach(function (al) {
        al.innerText = '0/'
      });
      styledMonth.forEach(function (al) {
        al.classList.remove('lit');
      });
      styledYear.forEach(function (al) {
        al.classList.add('lit');
      });
    });
      month.forEach(function (mostrar) {
      mostrar.classList.toggle('active');
      if (mostrar.classList.contains('active')) {
        changedPrice.forEach(function (el) {
          el.innerText = 'mo';
          
             if
              (el.innerText == 'mo') {
              priceYear.forEach(function (al) {
                al.innerText = '/'
              });
            }
            styledMonth.forEach(function (al) {
              al.classList.add('lit');
            });
            styledYear.forEach(function (al) {
              al.classList.remove('lit');
            });
            
            ;
        });  
      } 
   }); 
   const showZero = document.querySelectorAll('.showZero');
   if(toggle.checked){
     showZero.forEach(function (el) {
       el.classList.remove('active');
     });
   }
   else{
     showZero.forEach(function (el) {
       el.classList.add('active');
     });
   }
 
  });
   
   //input required && change step
   const login = document.getElementById('Name');
   const email = document.getElementById('Email');
   const phone = document.getElementById('Phone');
   const array = [login, email, phone];
   const alerta = () => {
    array.map(input => {
      if (
        login.value == '' || login.value == null        
        ){
        container = document.createElement('div');
        container.classList.add('alert');
        container.innerHTML = 'Preencha o campo corretamente';
        login.after(container);

        login.style.border = '1px solid red';
        return false;
        }
      if(
        email.value.indexOf('@')==-1 ||
        email.value.indexOf('.')==-1 
      ){
        container = document.createElement('div');
        container.classList.add('alert');
        container.innerHTML = 'Preencha o campo corretamente';
        email.after(container);
        email.style.border = '1px solid red';
        return false;
        }
      if(
        phone.value.length < 11 || phone.value.length > 11 
        
      ){
        container = document.createElement('div');
        container.classList.add('alert');
        container.innerHTML = 'Preencha o campo corretamente';
        phone.after(container);
        phone.style.border = '1px solid red';
        return false;
      }
      else{
        var elemento = document.querySelector('.alert');
        if(elemento){
          elemento.remove();
      }
      input.style.border = '1px solid green'
        }  
        gotostep2();
        return true;
      }
      )
    };
    goToStep2.addEventListener('click', function () {
      window.onload = alerta();
      }
    );
  // select cards
  const card1 = document.querySelector('.card1');
  const card2 = document.querySelector('.card2');
  const card3 = document.querySelector('.card3');
  const allCardsArray = [card1, card2, card3];
  const price = document.querySelectorAll('.pricePage3');
  const cardTitle1 = document.getElementById('cardTitle1');
  const cardTitle2 = document.getElementById('cardTitle2');
  const cardTitle3 = document.getElementById('cardTitle3');
  const cardTitleArray = [cardTitle1, cardTitle2, cardTitle3];
  allCardsArray.forEach(function (el) {
    el.addEventListener('click', function () {
      el.classList.add('cardSelected');
      allCardsArray.forEach(function (al) {
        if (al != el) {
          al.classList.remove('cardSelected');
        }
      });
    });
  }
  );

  //pick title of card
  const selectedPlan = document.getElementById('selectedPlan');
  const setDate = document.getElementById('selectedDate');
  const cardPrice1 = document.getElementById('cardPrice1');
  const cardPrice2 = document.getElementById('cardPrice2');
  const cardPrice3 = document.getElementById('cardPrice3');
  const cardPrice = [cardPrice1, cardPrice2, cardPrice3];
  const finalPrice = document.getElementById('finalPrice');
  for(let i = 0; i < allCardsArray.length; i++){
    allCardsArray[i].addEventListener('click', function () {
      if(allCardsArray[i].classList.contains('cardSelected')){
        console.log(cardTitleArray[i].innerText);
        console.log(cardPrice[i].innerText)
        selectedPlan.innerText = cardTitleArray[i].innerText;
        finalPrice.innerText = cardPrice[i].innerText;
        changeValue();
      }
    });
  }
  const changeValue = () => {
    if(toggle.checked){
      setDate.innerText = 'Anual';
    }
    else{
      setDate.innerText = 'Mensal';
    }
  }
  // pick items
  item1 = document.getElementById('item1');
  item2 = document.getElementById('item2');
  item3 = document.getElementById('item3');
  input = document.querySelectorAll('.inputRadio')
  const allItemsArray = [item1, item2, item3];
  for(let i = 0; i < allItemsArray.length; i++){
    allItemsArray[i].addEventListener('click', function () {
      allItemsArray[i].classList.toggle('itemSelected');
      if(allItemsArray[i].classList.contains('itemSelected')){
        input[i].checked = true;
      }
      else{
        input[i].checked = false;
      }
    });
  }


  
  