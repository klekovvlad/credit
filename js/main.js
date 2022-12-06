const onlineName = document.querySelectorAll('.online-name');
const onlineNameList = [
      'Ив**ов И.Г.', 'Пет**ов Ж.П.', 'Игн**в Б.С.', 'Са***ва О.С.', 'Кл**ко С.В.', 'Ног**ус В.Н.', 'Яч**ва Е.А.', 'Су**ва Т.С.', 'Ще****ва К.Ф.', 'Исл**ов С.Е.', 'Рум**ов С.С.', 
      'Кл**ов А. М.', 'Г**шин Т. Г.', 'Ма***ов К. В.', 'Но**кова К. М.', 'Ни***ина Л. М.', 'Дь***нов В. М.', 'Иг***ьева С. А.', 'Я**н Р. В.', 'С***лев И. П.', 'Ко***в А. С.', 
      'Б***ров С. А.', 'П***в М. Э.', 'См***ов И. Д.', 'Н***итин В. А.', 'В***ова Е. В.'
];
const onlineMoney = document.querySelectorAll('.online-money');
const onlineMoneyList = [
  '20 000 руб.', '30 000 руб.', '10 000 руб.', '2 000 руб.', '15 000 руб.', '50 000 руб', '60 000 руб', '40 000 руб.',  '100 000 руб.', '90 000 руб.', 
];
const onlinePersent = document.querySelectorAll('.online-persent');
const onlineTariff = document.querySelectorAll('.online-tariff');
const onlineSteps = document.querySelectorAll('.online-steps');
const onliteStatus = document.querySelectorAll('.online-status');
onlineName.forEach(onlineNameItem => {
  let i = Math.floor((Math.random() * (25 - 0) + 0));
  onlineNameItem.innerHTML = onlineNameList[i];
});
onlineMoney.forEach(function(onlineMoneyItem, index) {
  let i = Math.floor((Math.random() * (9 - 0) + 0));
  onlineMoneyItem.innerHTML = onlineMoneyList[i];
  if(i <= 4) {
    onlinePersent[index].innerHTML = '0%';
    onlineTariff[index].innerHTML = 'Бесплатный';
  };
  if(4 < i && i <= 7) {
    onlinePersent[index].innerHTML = '0.25%';
    onlineTariff[index].innerHTML = 'Продвинутый';
  };
  if(i > 7) {
    onlinePersent[index].innerHTML = '0.5%';
    onlineTariff[index].innerHTML = 'Профессиональный';
  };
});
onlineSteps.forEach(function(onlineStepsItem, index) {
  let i = Math.floor((Math.random() * (5 - 1) + 1));
  for(let x = 0; x < i; x++) {
    const step = document.createElement('div');
    step.classList.add('online-step');
    onlineStepsItem.appendChild(step);
  };
  function addStep() {
    if(onlineStepsItem.childElementCount <= 5) {
      const step = document.createElement('div');
      step.classList.add('online-step');
      onlineStepsItem.appendChild(step);
    };
    addStatus();
  };
  function addStatus() {
    if(onlineStepsItem.childElementCount === 1) {
      onliteStatus[index].innerHTML = 'Анкета получена';
    };
    if(onlineStepsItem.childElementCount === 2) {
      onliteStatus[index].innerHTML = 'Принимаем решение';
    };
    if(onlineStepsItem.childElementCount === 3) {
      onliteStatus[index].innerHTML = 'Решение принято';
    };
    if(onlineStepsItem.childElementCount === 4) {
      onliteStatus[index].innerHTML = 'Подготовка документов';
    };
    if(onlineStepsItem.childElementCount === 5) {
      onliteStatus[index].innerHTML = 'Перевод денег';
    };
    if(onlineStepsItem.childElementCount === 6) {
      onliteStatus[index].innerHTML = 'Деньги получены';
    };
  }
  addStatus();
  setInterval(addStep, 10000);
});

let date = new Date();
const onlineDateSettings = {
    hour: 'numeric',
    minute: 'numeric',
    month: 'long',
    day: 'numeric',
};
const onlineDate = document.querySelector('.online-date-item');
onlineDate.innerHTML = date.toLocaleString("ru", onlineDateSettings);

const swiper = new Swiper('.swiper', {
    speed: 1500,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        728: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 50
        }
    }
});