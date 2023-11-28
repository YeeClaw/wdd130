// Script for the fun hero intros
var words;

// Customize words array based on the current page
if (window.location.pathname.includes("index.html")) {
    words = ['Hello there,', 'Welcome to my portfolio.'];
} else if (window.location.pathname.includes("programming.html")) {
    words = ['Programming.', 'Everything you need to know.'];
} else if (window.location.pathname.includes("music.html")) {
    words = ['Music.', 'A diverse world of experience.'];
} else if (window.location.pathname.includes("contact.html")) {
    words = ['Trying to reach me?', 'Fill out this quick form.'];
} else {
    // Default words array
    words = ['Default Words', 'Modify for this page'];
}

var part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;

var wordFlick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }

    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('#hero-text').text(part);
  },speed);
};

$(document).ready(function () {
  wordFlick();
});

// Typing animation for general overviews!
$(document).ready(function () {
  var words;

  if (window.location.pathname.includes("contact.html")) {
    words = ['If you have any questions or inquires regarding my skill set, please do not hesitate to reach out. I am more than willing to do anything that is already listed on this website and more. Just be sure to clearly state what you are wanting to get in touch about in the subject of the email.'];
  } else if (window.location.pathname.includes("programming.html")) {
      words = ['I am proficient in many languages in different areas. I am fluent with HTML, CSS, JavaScript, and I\'m proficient in Ruby on the web end. As far as OOP or more general purpose languages go, I am fluent in Python, Java, C# and others. I have also delved a little bit into the world of machine learning and I\'m versatile on just about any project you can think of.'];
  } else if (window.location.pathname.includes("music.html")) {
      words = ['Music has brought profound changes to my life in many different forms. It has allowed me to think about problems with a unique perspective, and have given me a greater appreciation for living in the moment. Additionally, it has been my best teacher for team work on just about any scale. Being able to work with a group of musicians is integral to any kind of performance.'];
  }

  var currentIndex = 0;
  var currentWord = words[currentIndex];
  var currentOffset = 0;
  var typingSpeed = 2; // Adjust the speed (lower value = faster)

  function typeText() {
      if (currentOffset <= currentWord.length) {
          var part = currentWord.substr(0, currentOffset);
          $('#overviewText').text(part);
          currentOffset++;
          setTimeout(typeText, typingSpeed);
      } else {
          // Move to the next word after a brief pause
          setTimeout(typeText, 500);
      }
  }

  // Start the typing effect
  typeText();
});

// Listener to change the logo image
$(document).ready(function () {
  var $logoLink = $('#logo-link');
  var initialLogoSrc = 'images/aclogo-white.png';
  var hoverLogoSrc = 'images/aclogo.png';

  $logoLink.hover(
      function () {
          $(this).find('img').attr('src', hoverLogoSrc);
      },
      function () {
          $(this).find('img').attr('src', initialLogoSrc);
      }
  );
});