/*!
 * oracle.js
 * MIT licensed
 *
 * Copyright (C) 2013 Mark Vilrokx
 */
var AddHeadersFooters = function (){
  var year = new Date().getFullYear();
  var copyright_date = document.getElementById("copyright-date");
  copyright_date.innerHTML = year;
};

var Header = function() {
  var header = document.createElement('header');
  header.className = "header";
  var headerBlock = document.createElement('div');
  headerBlock.className = "header-block";
  header.appendChild(headerBlock);
  return header;
};

var Footer = function() {
  var footer = document.createElement('footer');
  footer.className = "footer";

  var footerLine = document.createElement('div');
  footerLine.className = "footer-line";

  var logo = document.createElement('div');
  logo.className = "logo";

  var logoImg = document.createElement('img');
  logoImg.className = "log-img";
  logoImg.src = "img/O_signature_whtonred.gif";
  logoImg.alt = "Oracle Logo";

  logo.appendChild(logoImg);
  // footerLine.appendChild(logo);
  footer.appendChild(footerLine);

  var disclaimer = document.createElement('div');
  disclaimer.className = "disclaimer";
  disclaimer.innerHTML = 'Copyright &copy; ' + new Date().getFullYear() + ', Oracle and its affiliates. All rights reserved.';
  footer.appendChild(disclaimer);

  return footer;

};

function hasSubSlide (slide) {
  var subSlides = slide.childNodes;
  for (var i = 0; i < subSlides.length; ++i) {
    var subSlide = subSlides[i];
    // console.log(subSlide.dataset.markdown);
    if ((subSlide.tagName === "SECTION") && (!subSlide.hasAttribute("data-markdown"))) {
      console.log(i + ' = ' + subSlide.tagName);
      console.log(subSlide.attributes);
      return true;
    }
  }
  return false;
}

var AddHeaders = function() {
  var slides = document.getElementsByTagName('section');

  for (var i = 0; i < slides.length; ++i) {
    var slide = slides[i];
    if (!hasSubSlide(slide)) {
      slide.appendChild(new Header());
    }
  }
};

var AddFooters = function() {
  var slides = document.getElementsByTagName('section');

  for (var i = 0; i < slides.length; ++i) {
    var slide = slides[i];
    if (!hasSubSlide(slide)) {
      slide.appendChild(new Footer());
    }
  }
};

window.onload = new AddHeaders();
window.onload = new AddFooters();