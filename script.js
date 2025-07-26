
function goTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

// Start with welcome page visible
document.getElementById('welcome').classList.add('active');
    