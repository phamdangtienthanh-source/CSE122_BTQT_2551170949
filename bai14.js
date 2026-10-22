const wonders = [
  { id: 1, title: "1. Vịnh Hạ Long", desc: "Gần 2.000 đảo đá vôi...", imgSrc: "1-vinh-ha-long.jpg" },
  { id: 2, title: "2. Hang Sơn Đoòng", desc: "Hang động tự nhiên...", imgSrc: "2-son-doong.jpg" },
  { id: 3, title: "3. Thác Bản Giốc", desc: "Thác nước đẹp...", imgSrc: "3-thac-ban-gioc.jpg" },
  { id: 4, title: "4. Fansipan", desc: "“Mái nhà Đông Dương”...", imgSrc: "4-fansipan.jpg" },
  { id: 5, title: "5. Đồng bằng sông Cửu Long", desc: "Vựa lúa, miệt vườn...", imgSrc: "5-mekong.jpg" },
  { id: 6, title: "6. Động Phong Nha", desc: "Hệ thống hang động...", imgSrc: "6-phong-nha.jpg" }
];
const container = document.getElementById("wonders-container");
function renderWonders() {
  wonders.forEach((wonder) => {
    const cardHTML = `
      <article class="card">
        <img src="${wonder.imgSrc}" alt="${wonder.title}">
        <div class="card-content">
          <h3>${wonder.title}</h3>
          <p>${wonder.desc}</p>
        </div>
      </article>
    `;
    container.innerHTML += cardHTML;
  });
}

window.onload = renderWonders;
