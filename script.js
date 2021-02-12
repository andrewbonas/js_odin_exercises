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

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i += 1) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
// Form Validation

function emailCheck(email, error) {
  if (email === '') {
    error.innerHTML = 'Please Provide an email.';
    return false;
  }
  if (!email.includes('@')) {
    error.innerHTML = 'Please provide a proper email';
    return false;
  }
  return true;
}

function countryCheck(country, error) {
  if (country === '') {
    error.innerHTML = 'Please provide a country';
    return false;
  }
  return true;
}

function zipCheck(zip, error) {
  if (zip === '' || zip.length < 3) {
    error.innerHTML = 'Please provide a valid zip code';
    return false;
  }
  return true;
}

function passwordCheck(password, passwordConf, error) {
  if (password === '' || passwordConf === '') {
    error.innerHTML = 'Please provide a password';
    return false;
  }
  if (password.length < 6) {
    error.innerHTML = 'Please provide a password greater than 6 digits';
    return false;
  }
  if (password !== passwordConf) {
    error.innerHTML = 'The passwords do not match';
    return false;
  }
  return true;
}

function validateForm() {
  const form = document.getElementsByTagName('form')[0];
  const email = document.form.email.value;
  const country = document.form.country.value;
  const zip = document.form.zip.value;
  const password = document.form.password.value;
  const passwordConf = document.form.password2.value;
  const error = document.getElementById('error');

  if (!emailCheck(email, error)) return;
  if (!countryCheck(country, error)) return;
  if (!zipCheck(zip, error)) return;
  if (!passwordCheck(password, passwordConf, error)) return;
  alert('Yaa you filled the form out correctly!');
  error.innerHTML = '';
  form.reset();
}

async function giphy() {
  const search = document.getElementById('ginput');
  const msg = document.getElementById('giphy-message');
  const img = document.querySelector('#giphy');
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=OMkxfL7EreAtBnW3c7yG8YIb8kXVODGB&s=${search.value}`, {
      mode: 'cors'
    });
    const gifData = await response.json();
    img.src = gifData.data.images.original.url;
    img.style.display = 'block';
    msg.innerHTML = '';
    search.value = '';
  } catch (text) {
    img.style.display = 'none';
    msg.innerHTML = 'Search GIFs here:';
    search.value = '';
  }
}
giphy();

function giphyButton() {
  giphy();
}
