document.getElementById('fetchButton').addEventListener('click', () => {
  fetch('https://api.example.com/data') // แก้ไข URL ตาม API ที่ต้องการ
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('dataDisplay').innerText = JSON.stringify(data);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
});
