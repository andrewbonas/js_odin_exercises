function showDropDown() {
  document.getElementById('drop-down').classList.toggle('show');
}

window.onclick = function(event) {
  if (!event.target.matches('.nav-button')) {
    const dropdowns = document.getElementsByClassName('drop-down-content');
    let i;
    for (i = 0; i < dropdowns.length; i += 1) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
