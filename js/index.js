// new id
function newId(id) {
  const news = document.getElementById(id);
  return news;
}
// heard icons handler
newId('card-container').addEventListener('click', function (e) {
  if (e.target.className.includes('heard')) {
    const targets = e.target;
    const heardBtn = newId('heards').innerText;
    const no1 = 1;
    const totale = Number(heardBtn) + no1;
    newId('heards').innerText = totale;
  }
})

// emergency numbers copy btn handler
newId('card-container').addEventListener('click', function (e) {
  if (e.target.closest('.copys')) {
    const targets = e.target;

    const number = targets.parentNode.parentNode.children[2].children[0].innerText;

    // acses the cpoy navber btn
    const copyBtn = newId('copy-btn').innerText;
    const no1 = 1;
    const totale = Number(copyBtn) + no1;
    newId('copy-btn').innerText = totale;
    Toastify({
      text: `Number copied successfully! `,
      duration: 3000,
      destination: "https://github.com/rayhan309/",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();
    // copy the number
    navigator.clipboard.writeText(number)
  }
})

// call btn handler
newId('card-container').addEventListener('click', function (e) {
  if (e.target.closest('.calls')) {
    const targets = e.target;
    const coin = newId('coins').innerText;
    const maines = 20;
    if (Number(coin) <= 0) {
      Toastify({
        text: `You dont have enough coins. You need at least 20 coins to make a call.`,
        duration: 3000,
        destination: "https://github.com/rayhan309/",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #be0637, #b60808)",
          color: 'red',
        }
      }).showToast();
      return;
    }
    const totale = coin - maines;
    newId('coins').innerText = totale;
    const title = targets.parentNode.parentNode.children[1].children[0].innerText;
    const number = targets.parentNode.parentNode.children[2].children[0].innerText;
    Toastify({
        text: `${title} ${number}......`,
        duration: 3000,
        destination: "https://github.com/rayhan309/",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
          color: '#f5fff6',
        }
      }).showToast();
    // histori
    const container = newId('history-container');
    const time = new Date().toLocaleTimeString();
    const createDiv = document.createElement('div');
    createDiv.innerHTML = `
        <div class="flex justify-between items-center bg-[#fafafa] mt-4">
          <div>
            <h1 class="text-[180x] font-semibold">${title}</h1>
            <p class="text-[180x] font-normal text-gray-500">${number}</p>
          </div>
            <p class="text-[14px] font-normal">${time}</p>
        </div>
    `
    container.appendChild(createDiv)
  }
})

newId('Clear-btn').addEventListener('click', function () {
  const container = newId('history-container');
  container.innerHTML = ''
})