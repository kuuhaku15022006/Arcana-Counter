const arcanaData = {
    3: [
        { name: "0 'Fool'", count: 0 },
        { name: "XIII 'Death'", count: 0 },
        { name: "XX 'Judgement'", count: 0 },
        { name: "VI 'Lovers'", count: 0 },
        { name: "I 'Magician'", count: 0 },
        { name: "XVII 'Star'", count: 0 },
        { name: "XX 'Aeon'", count: 0 },
        { name: "III 'Empress'", count: 0 },
        { name: "XI 'Strength'", count: 0 },
        { name: "VIII 'Justice'", count: 0 },
        { name: "XVIII 'Moon'", count: 0 },
        { name: "II 'Priestess'", count: 0 },
        { name: "X 'Fortune'", count: 0 },
        { name: "XIX 'Sun'", count: 0 },
    ],
    4: [
        { name: "Fool", count: 0 },
        { name: "Magician", count: 0 },
        { name: "Priestess", count: 0 }
    ],
    5: [
        { name: "Fool", count: 0 },
        { name: "Magician", count: 0 },
        { name: "Priestess", count: 0 }
    ]
};  

let currentPersona = 3;
document.body.classList.add("p3")

function changeSerie(number) {
    currentPersona = number;
    document.body.classList.remove(
        "p3",
        "p4",
        "p5"
    );

    document.body.classList.add(`p${number}`);
    renderArcana();
}


function renderArcana() {
    const main = document.getElementById("arcana_list");
    main.innerHTML = "";

    arcanaData[currentPersona].forEach((arcana, index) => {
        // Dòng chứa một Arcana
        const row = document.createElement("div");
        row.classList.add("arcana-row");

        // Tên Arcana
        const name = document.createElement("span");
        name.classList.add("arcana-name");
        name.textContent = arcana.name;

        // Nút giảm
        const decrease = document.createElement("button");
        decrease.textContent = "-";
        decrease.classList.add("counter-btn");
        decrease.onclick = () => updateCount(index, -1);

        // Số lượng
        const count = document.createElement("span");
        count.classList.add("arcana-count");
        count.textContent = arcana.count;

        // Nút tăng
        const increase = document.createElement("button");
        increase.textContent = "+";
        increase.classList.add("counter-btn");
        increase.onclick = () => updateCount(index, 1);

        row.append(name, decrease, count, increase);
        main.appendChild(row);
    });
}

function updateCount(index, amount) {
    const arcana = arcanaData[currentPersona][index];

    arcana.count = Math.max(0, arcana.count + amount);

    renderArcana();
}

function resetCounter() {
    arcanaData[currentPersona].forEach((arcana) => {
        arcana.count = 0
    })
    renderArcana();
}

document.getElementById("resetCounter").addEventListener('click', resetCounter);
renderArcana();