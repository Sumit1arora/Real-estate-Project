(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    });
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });

    // Fetch and display property listings
    function fetchPropertyList(filters = {}) {
        const propertyContainer = $('#property-types-container'); // Adjust selector as needed

        // Build query parameters for filtering
        const queryParams = $.param(filters);

        $.ajax({
            url: `/api/properties?${queryParams}`, // Update with your backend API
            method: 'GET',
            dataType: 'json',
            success: function (response) {
                propertyContainer.empty(); // Clear existing content
                if (response.success && response.data.length > 0) {
                    response.data.forEach(property => {
                        const propertyHTML = `
                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="property-item rounded overflow-hidden">
                                    <img class="img-fluid" src="${property.image}" alt="${property.name}">
                                    <div class="bg-light p-4">
                                        <h5 class="text-primary mb-3">${property.price}</h5>
                                        <h6>${property.name}</h6>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>${property.location}</p>
                                        <div class="d-flex border-top pt-2">
                                            <small class="flex-fill"><i class="fa fa-bed text-primary me-2"></i>${property.bedrooms} Beds</small>
                                            <small class="flex-fill"><i class="fa fa-bath text-primary me-2"></i>${property.bathrooms} Baths</small>
                                            <small class="flex-fill"><i class="fa fa-expand text-primary me-2"></i>${property.area}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                        propertyContainer.append(propertyHTML);
                    });
                } else {
                    propertyContainer.html('<p class="text-center">No properties found.</p>');
                }
            },
            error: function (error) {
                console.error('Error fetching property list:', error);
                propertyContainer.html('<p class="text-center text-danger">Failed to load properties. Please try again later.</p>');
            }
        });
    }

    // Handle User Authentication
    function checkAuthState() {
        $.ajax({
            url: '/api/user', // Endpoint to fetch user data
            method: 'GET',
            success: function (user) {
                if (user) {
                    updateLoginButton(user);
                }
            },
            error: function () {
                console.log('User not logged in.');
            }
        });
    }

    function updateLoginButton(user) {
        const loginButton = $('.btn-primary.px-3.d-none.d-lg-flex'); // Selector for the Login/Signup button
        loginButton.replaceWith(`
            <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    ${user.name}
                </button>
                <ul class="dropdown-menu" aria-labelledby="userDropdown">
                    <li><a class="dropdown-item" href="/profile">Profile</a></li>
                    <li><a class="dropdown-item" href="#" id="logout">Logout</a></li>
                </ul>
            </div>
        `);

        // Logout functionality
        $('#logout').click(function (e) {
            e.preventDefault();
            $.ajax({
                url: '/api/logout', // Logout endpoint
                method: 'POST',
                success: function () {
                    location.reload();
                }
            });
        });
    }

    // Initialize property fetching and authentication check
    fetchPropertyList(); // Fetch all properties by default
    checkAuthState();

})(jQuery);
