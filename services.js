document.addEventListener("DOMContentLoaded", () => {
  const serviceHeadings = document.querySelectorAll(".servicesoffered h2");

  serviceHeadings.forEach(h2 => {
    const parentDiv = h2.parentElement;
    const paragraph = parentDiv.querySelector("p");

    h2.addEventListener("mouseenter", () => {
      h2.style.fontSize = "2.5rem";
      h2.style.margin = "2.5rem";
      h2.style.color = "rgb(167, 193, 167)";
      h2.style.position = "relative";
      h2.style.left = "1rem";
      if (paragraph) {
        paragraph.style.opacity = "1";
      }
    });

    h2.addEventListener("mouseleave", () => {
      h2.style.fontSize = "";
      h2.style.margin = "";
      h2.style.color = "";
      h2.style.left = "";
      h2.style.position = "";
      if (paragraph) {
        paragraph.style.opacity = "0";
      }
    });
  });
});

// Testimonial Carousel Logic
document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial-card");
  const nextBtn = document.getElementById("nextTestimonial");
  const prevBtn = document.getElementById("prevTestimonial");
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach(card => card.classList.remove("active"));
    testimonials[index].classList.add("active");
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  });

  // Optional: Auto slide every 6 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }, 6000);
});
