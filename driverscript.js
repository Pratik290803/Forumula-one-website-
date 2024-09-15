document.addEventListener('DOMContentLoaded', () => {
    const drivers = [
        { name: "Alexander ALBON", color: "#00AEEF", image: "images/albon.jpg" },
        { name: "Fernando ALONSO", color: "#006F62", image: "images/alonso.jpg" },
        { name: "Valtteri BOTTAS", color: "#41D3F8", image: "images/bottas.jpg" },
        { name: "Pierre GASLY", color: "#415CA9", image: "images/gasly.jpg" },
        { name: "Lewis HAMILTON", color: "#44D0DF", image: "images/hamilton.jpg" },
        { name: "Nico HULKENBERG", color: "#B0AC3D", image: "images/hulkenberg.jpg" },
        { name: "Sergio PEREZ", color: "#C92D3E", image: "images/perez.jpg" },
        { name: "Charles LECLERC", color: "#FF2800", image: "images/leclerc.jpg" },
        { name: "Kevin MAGNUSSEN", color: "#DC0000", image: "images/magnussen.jpg" },
        { name: "Lando NORRIS", color: "#FF8700", image: "images/norris.jpg" },
        { name: "Esteban OCON", color: "#EF1C2B", image: "images/ocon.jpg" },
        { name: "Oscar PIASTRI", color: "#FF7F0E", image: "images/piastri.jpg" },
        { name: "Daniel RICCIARDO", color: "#F88F01", image: "images/ricciardo.jpg" },
        { name: "George RUSSELL", color: "#00AEEF", image: "images/russell.jpg" },
        { name: "Carlos SAINZ", color: "#FF2800", image: "images/sainz.jpg" },
        { name: "Logan SARGEANT", color: "#005BAA", image: "images/sargeant.jpg" },
        { name: "Lance STROLL", color: "#006F62", image: "images/stroll.jpg" },
        { name: "Yuki TSUNODA", color: "#C62B2E", image: "images/tsunoda.jpg" },
        { name: "Max VERSTAPPEN", color: "#1E41FF", image: "images/verstappen.jpg" },
        { name: "Zhou GUANYU", color: "#900C3F", image: "images/zhou.jpg" }
    ];

    const driverList = document.querySelector('.driver-list');
    
    drivers.forEach(driver => {
        const driverDiv = document.createElement('div');
        driverDiv.classList.add('driver');
        driverDiv.innerHTML = `
            <a href="#">
                <div class="color-indicator" style="background-color: ${driver.color};"></div>
                ${driver.name}
            </a>
            <img src="${driver.image}" alt="${driver.name}">
        `;
        driverList.appendChild(driverDiv);
    });
});
