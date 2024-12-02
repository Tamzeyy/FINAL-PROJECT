let currentIndex = 0;

function showSlide(index) {
    const slidesContainer = document.getElementById('slidesContainer');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Adjust index to stay within bounds
    currentIndex = (index + totalSlides) % totalSlides;

    // Update slide position
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Automatic Slide Transition
setInterval(() => {
    nextSlide();
}, 7000);

document.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('.scroll-section');

    sections.forEach(function(section) {
        var position = section.getBoundingClientRect().top;

       
        if (position < window.innerHeight - 150) {
            section.classList.add('active');
        }
    });
});

// Function to show department content
function showDepartment(department) {
    const departments = document.querySelectorAll('.faculty-directory');
    departments.forEach(dep => {
        dep.classList.remove('active');
    });

    const activeDepartment = document.getElementById(department);
    activeDepartment.classList.add('active');
}

// Function to show teacher profile in a modal
function showProfile(teacherId) {
    const modal = document.getElementById(teacherId);
    modal.style.display = "block";
}

// Function to close the teacher profile modal
function closeProfile(teacherId) {
    const modal = document.getElementById(teacherId);
    modal.style.display = "none";
}

// Close modal if clicked outside of it
window.onclick = function(event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}