//for the admin  pannel

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const loginSection = document.getElementById("loginSection");
  const adminPanel = document.getElementById("adminPanel");
  const loginError = document.getElementById("loginError");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (username === "admin" && password === "123") {
      loginSection.style.display = "none";
      adminPanel.style.display = "block";
    } else {
      loginError.style.display = "block";
    }
  });
});




// Handle dynamic notice uploads
const noticeForm = document.querySelector('#adminPanel form');
const noticeList = document.createElement('div');
noticeList.className = "notice-list";
document.getElementById('adminPanel').appendChild(noticeList);

noticeForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('noticeTitle').value;
    const file = document.getElementById('noticeFile').files[0];

    if (title && file) {
        const url = URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = url;
        link.download = file.name;
        link.textContent = `📄 ${title}`;
        noticeList.appendChild(link);

        document.getElementById('noticeTitle').value = '';
        document.getElementById('noticeFile').value = '';
    }
});





