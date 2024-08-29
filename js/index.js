$(document).ready(function() {
  $(window).on('scroll', function() {
      var serviceSectionTop = $('#Service').offset().top;
      var windowTop = $(window).scrollTop();

      if (windowTop >= serviceSectionTop) {
          $('body').addClass('bg-service');
      } else {
          $('body').removeClass('bg-service');
      }
  });
});
$(document).ready(function() {

  var $backToTop = $('.bi-arrow-up-circle-fill');

  $(window).on('scroll', function() {
    
    var scrollTop = $(window).scrollTop();
    
    if(scrollTop > $(window).height()/2) {
      $backToTop.removeClass('hide'); 
    } else {
      $backToTop.addClass('hide');
    }

  });

});


$(document).ready(function() {
  const observerOptions = {
    rootMargin: "-10% 0px -90% 0px"
  };
  

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetId = $(entry.target).attr('id');
        $('nav ul li a').each(function() {
          const linkTarget = $(this).attr('href').substring(1);
          if (linkTarget === targetId) {
            $(this).addClass('active');
          } else {
            $(this).removeClass('active');
          }
        });
      }
    });
  }, observerOptions);

  $('section').each(function() {
    observer.observe(this);
  });
});



$(document).ready(function () {
  $('#languageDropdown').click(function () {
    $('.dropdown-menu').toggleClass('hide');
  });
});
$(document).ready(function () {
  function updateItemsContainerVisibility() {
    if ($(window).width() <= 991) {
      $('.items-container').addClass('hide');
      $('.items-container').removeClass('show');
      $('.nav-links').click(function () {
        $('.items-container').toggleClass('hide show');
      });
    } else {
      $('.items-container').addClass('show');
      $('.items-container').removeClass('hide');
    }
  }

  // Initial check
  updateItemsContainerVisibility();

  // Update on window resize
  $(window).resize(function () {
    updateItemsContainerVisibility();
  });

});

// ###########################change files####################################

$('.dropdown-item').click(function () {
  var selectedValue = $(this).attr('data-value');

  if (selectedValue === 'Dubai') {
    window.location.href = './index_es.html';
  } else if (selectedValue === 'United State') {
    window.location.href = './index.html';
  }
});
// ################################### Navbar #############################
$(document).ready(function() {
  // Select the navigation bar element
  var $navbar = $('#nav');
  let $text = $('a,i,.USA');
  let imageElement = $("#nav-image");
  let oldElement = imageElement.attr("src");
  let newImageSrc = "../image/newlogo.webp";
  
  
  // Get the initial scroll position
  var scrollPos = $(window).scrollTop();
  
  // Apply the appropriate background class based on the initial scroll position
  if (scrollPos > 0) {
    $navbar.addClass('bg-white');
    $(".items-container").addClass("bg-white");
    $text.addClass("text");
      $('.navbar-icons').addClass("border-r-text");
    $('.arrow-container a ,.arrow-container i,.service-logo i').removeClass("text");
    imageElement.attr("src", newImageSrc);
  } else {
    $navbar.removeClass('bg-white');
    $(".items-container").removeClass("bg-white");
    $text.removeClass("text");
      $('.navbar-icons').removeClass("border-r-text");
    imageElement.attr("src", oldElement);
  }
  
  // Listen for scroll events
  $(window).on('scroll', function() {
    // Get the updated scroll position
    var newScrollPos = $(this).scrollTop();

    if (newScrollPos > 0 && scrollPos <= 0) {
      $navbar.addClass('bg-white');
      $(".items-container").addClass("bg-white");
      $text.addClass("text");
      $('.navbar-icons').addClass("border-r-text");
      $('.arrow-container a,.arrow-container i,.service-logo i').removeClass("text");
    imageElement.attr("src", newImageSrc);
    } else if (newScrollPos <= 0 && scrollPos > 0) {
      $navbar.removeClass('bg-white');
      $(".items-container").removeClass("bg-white");
      $text.removeClass("text");
      $('.navbar-icons').removeClass("border-r-text");
    imageElement.attr("src", oldElement);
    }
    scrollPos = newScrollPos;
  });
});

$(document).ready(function() {
  var $navbar = $('#nav');
  var isScrolling = 0;
  var scrollTimeout;

  $(window).on('scroll', function() {
    clearTimeout(scrollTimeout);
    var scrollPos = window.scrollY;
    
    // Show the navbar when scrolling starts
    if (scrollPos == 0) {
      $navbar.removeClass('hide');
      isScrolling=0;
    }
    if(scrollPos>0){
      if (isScrolling == 0) {
        $navbar.removeClass('hide');
        isScrolling = 1; 
      }
    }
    
    if (isScrolling==1) {
      scrollTimeout = setTimeout(function() {
        $navbar.addClass('hide');
        isScrolling = 0; 
      }, 5000);
    }
  });
  
});
// ##########################################smooth scrolling ######################
$(document).ready(function() {
  $("a[href^='#']").on("click", function(e) {
    e.preventDefault();

    var target = $(this.getAttribute("href"));
    if (target.length) {
      $("html, body").animate({
        scrollTop: target.offset().top
      }, 1000); // Animation duration in milliseconds
    }
  });
});



$(".bi-list").on("click",()=>{
  console.log("hello");
  $(".items-container").toggleClass('show hide');
})



// ##########################height to item###########################################
$(document).ready(function() {
  // Function to set the height of flex items based on the tallest item
  function setHeightToTallestItem() {
    let maxHeight = 0;
    $('.item').height('auto'); // Reset heights to auto

    // Find the maximum height among all '.flex-item' elements
    $('.item').each(function() {
      let itemHeight = $(this).height();
      if (itemHeight > maxHeight) {
        maxHeight = itemHeight;
      }
    });

    // Set the maximum height to all '.flex-item' elements
    $('.item').height(maxHeight);
  }

  // Call the function initially
  setHeightToTallestItem();

  // Attach the function to the window's resize event
  $(window).on('resize', setHeightToTallestItem);
});

// ##########################height to item###########################################
$(document).ready(function() {
  // Function to set the height of flex items based on the tallest item
  function setHeightToTallestItem() {
    let maxHeight = 0;
    $('.about-para').height('auto'); // Reset heights to auto

    // Find the maximum height among all '.flex-item' elements
    $('.about-para').each(function() {
      let itemHeight = $(this).height();
      if (itemHeight > maxHeight) {
        maxHeight = itemHeight;
      }
    });

    // Set the maximum height to all '.flex-item' elements
    $('.about-para').height(maxHeight);
  }

  // Call the function initially
  setHeightToTallestItem();

  // Attach the function to the window's resize event
  $(window).on('resize', setHeightToTallestItem);
});

// #################3contact ################################33
$(document).ready(function() {
  // Function to set the height of flex items based on the tallest item
  function setHeightToTallestItems() {
    let maxHeight = 0;
    $('.contact-details1 .content-item').height('auto'); // Reset heights to auto

    // Find the maximum height among all '.flex-item' elements
    $('.contact-details1 .content-item').each(function() {
      let itemHeight = $(this).height();
      console.log(itemHeight)
      if (itemHeight > maxHeight) {
        maxHeight = itemHeight;
      }
    });

    // Set the maximum height to all '.flex-item' elements
    $('.contact-details1 .content-item').height(maxHeight);
  }

  // Call the function initially
  setHeightToTallestItems();

  // Attach the function to the window's resize event
  $(window).on('resize', setHeightToTallestItems);
});

// ###########################scroll top#############################################
$(document).ready(function () {
  // Scroll to the top of the page when the page is loaded or refreshed
  $(window).on('beforeunload', function () {
    $(window).scrollTop(0);
  });
});



