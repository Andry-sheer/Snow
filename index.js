const but1 = document.querySelector('.button1');
const but2 = document.querySelector('.button2');
const cont = document.querySelector('.container');
// const cont2 = document.querySelector('.cont2');

but1.addEventListener('click', ()=> {
  but1.style.display = 'none';
  but2.style.display = 'block';
  document.querySelector('.cont2').style.display = 'block';
})

but2.addEventListener('click', ()=> {
  but1.style.display = 'block';
  but2.style.display = 'none';
  document.querySelector('.cont2').style.display = 'none';
})

fetch('http://api.openweathermap.org/data/2.5/weather?q=KHARKIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
  .then(response => response.json())
  .then(weather => {
    weather.forEach((elem, valu) => {
      const cont2 = document.createElement("p").classList.add('par')
      par.textContent = '123';
      cont2.append(par);











    })

    // const city = `city: ${weather.name.toUpperCase()}`;
    // cont2.append(city);

    // const temp = `temp: ${weather.temp}`;
    // cont2.append(temp);

    console.log(weather)
  })