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

function emailCheck(email) {
  if (email === '') {
    alert('Please provide an email');
    return false;
  } if (email.indexOf('@') === false) {
    alert('Please provide a proper email');
    return false;
  }
  return true;
}

function countryCheck(country) {
  if (country === '') {
    alert('Please provide a country');
    return false;
  }
  return true;
}

function zipCheck(zip) {
  if (zip === '' || zip.length < 3) {
    alert('Please provide a valid zip code');
    return false;
  }
  return true;
}

function passwordCheck(password, passwordConf) {
  if (password === '' || passwordConf === '') {
    alert('Please provide a password');
    return false;
  } if (password.length < 6) {
    alert('Please provide a password greater than 6 digits')
    return false;
  } if (password !== passwordConf) {
    alert('The passwords do not match');
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
  if (emailCheck(email) === false) {
    return
  } if (countryCheck(country) === false) {
    return
  } if (zipCheck(zip) === false) {
    return
  } if (passwordCheck(password, passwordConf) === false) {
  } else {
    alert('Yaa you filled the form out correctly!');
    form.reset();
  }
}
