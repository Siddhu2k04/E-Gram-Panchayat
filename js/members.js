const memberData = {
  ramesh: {
    name: "Shree Ramesh Patil",
    role: "Sarpanch",
    img: "img/ramesh.jpg",
    info: "Serving as the Sarpanch of Anurabad, dedicated to development and transparency."
  },
  meena: {
    name: "Smt. Meena Deshmukh",
    role: "Deputy Sarpanch",
    img: "img/meena.jpg",
    info: "Supporting local governance and social welfare programs."
  },
  ajay: {
    name: "Ajay Pawar",
    role: "Member",
    img: "img/ajay.jpg",
    info: "Focuses on infrastructure and youth engagement."
  },
  rekha: {
    name: "Rekha Shinde",
    role: "Member",
    img: "img/rekha.jpg",
    info: "Works for women's empowerment and education in the village."
  }
};

function openModal(id) {
  const data = memberData[id];
  document.getElementById("modal-img").src = data.img;
  document.getElementById("modal-name").textContent = data.name;
  document.getElementById("modal-role").textContent = data.role;
  document.getElementById("modal-info").textContent = data.info;
  document.getElementById("member-modal").style.display = "block";
}

function closeModal() {
  document.getElementById("member-modal").style.display = "none";
}
