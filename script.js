const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');

const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli',
                'Agustus', 'September', 'Oktober', 'November', 'Desember'];

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const day = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  const newTime = `${hours}:${minutes}:${seconds}`;
  const newDate = `${day}, ${date} ${month} ${year}`;

  if (timeEl.textContent !== newTime) {
    timeEl.classList.remove('fade');
    void timeEl.offsetWidth;
    timeEl.classList.add('fade');
  }

  if (dateEl.textContent !== newDate) {
    dateEl.classList.remove('fade');
    void dateEl.offsetWidth;
    dateEl.classList.add('fade');
  }

  timeEl.textContent = newTime;
  dateEl.textContent = newDate;
}

setInterval(updateClock, 1000);
updateClock();
