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

window.addEventListener('scroll', () => {
  let windowCenter = window.innerHeight * 0.75;
  const animateUp = document.querySelectorAll('.animate-up');
  const amimateDown = document.querySelectorAll('.animate-down');
  animateUp.forEach(el => {
    let position = el.getBoundingClientRect().top - windowCenter;
    if (position <= 0) {
      el.classList.add('animate');
    };
  });
  amimateDown.forEach(el => {
    let position = el.getBoundingClientRect().top - windowCenter;
    if (position <= 0) {
      el.classList.add('animate');
    };
  })
});

function sideAnimation() {
  const animateLeft = document.querySelectorAll('.animate-left');
  animateLeft.forEach(el => {
    el.classList.add('animate');
  })
};

sideAnimation();

const mainMoney = document.querySelector('.main-form-money');
const mainTariff = document.querySelector('.main-form-tariff');
const errorMessage = document.querySelector('.error-message');
mainMoney.addEventListener('keyup', () => {
  mainMoney.value = mainMoney.value.replace(/[^\d]/g,'');
  
  if(mainMoney.value <= 30000) {
    mainTariff.innerHTML = 'Бесплатный';
  }
  if(30001 <= mainMoney.value && mainMoney.value <= 60000) {
    mainTariff.innerHTML = 'Продвинутый';
  }
  if(mainMoney.value > 60000) {
    mainTariff.innerHTML = 'Профессиональный';
  }
  if(mainMoney.value > 100001) {
    mainMoney.value = '';
    mainTariff.innerHTML = '';
    mainMoney.classList.add('input-error');
    errorMessage.innerHTML = 'до 100 000 руб.'
  }
});
mainMoney.addEventListener('click', () => {
  mainMoney.classList.remove('input-error');
  errorMessage.innerHTML = ''
});
mainMoney.addEventListener('blur', () => {
  if(mainMoney.value < 5000) {
    mainMoney.value = '';
    mainTariff.innerHTML = '';
    mainMoney.classList.add('input-error');
    errorMessage.innerHTML = 'от 5 000 руб.'
  }
})

const hour = {
  hour: 'numeric'
};
const min = {
  minute: 'numeric'
};
const currentTime = document.querySelector('.speed__item-current');
const resolTime = document.querySelector('.speed__item-agree');
const moneyTime = document.querySelector('.speed__item-money');

function createTimes() {
  currentHour = document.createElement('span');
  currentMin = document.createElement('span');
  currentTime.append(currentHour, ':', currentMin);
  resolHour = document.createElement('span');
  resolMin = document.createElement('span');
  resolTime.append(resolHour, ':', resolMin);
  moneyHour = document.createElement('span');
  moneyMin = document.createElement('span');
  moneyTime.append(moneyHour, ':', moneyMin);
};
function updateTimes() {
  let t = new Date();
  let minute = Number(t.toLocaleString('ru',min));
  currentHour.innerHTML = Number(t.toLocaleString('ru',hour));
  currentMin.innerHTML = minute;
  resolHour.innerHTML = Number(t.toLocaleString('ru',hour));
  resolMin.innerHTML = minute + 5;
  moneyHour.innerHTML = Number(t.toLocaleString('ru',hour));
  moneyMin.innerHTML = minute + 10;
  if ((minute + 5) >= 60) {
    resolHour.innerHTML = Number(t.toLocaleString('ru',hour)) + 1;
    resolMin.innerHTML = '05';
  };
  if ((minute + 10) >= 60) {
    moneyHour.innerHTML = Number(t.toLocaleString('ru',hour)) + 1;
    moneyMin.innerHTML = '08';
  };
  if (resolHour.innerHTML === '24') {
    resolHour.innerHTML = '00'
  };
  if (moneyHour.innerHTML === '24') {
    moneyHour.innerHTML = '00'
  };
  if (minute < 10) {
    currentMin.innerHTML = '0' + minute;
  };
  if ((minute + 5) < 10) {
    resolMin.innerHTML = '0' + (minute + 5);
  };
  if ((minute + 10) < 10) {
    moneyMin.innerHTML = '0' + (minute + 8);
  };
};
createTimes();
updateTimes();
setInterval(updateTimes, 1000);