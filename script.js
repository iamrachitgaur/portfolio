        // Sample project data
        const projects = [
            {
                title: "E-commerce Website",
                description: "A fully responsive e-commerce website built with HTML, CSS, and JavaScript.",
                image: "https://images.pexels.com/photos/6167446/pexels-photo-6167446.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=1"
            },
            {
                title: "Weather App",
                description: "A weather application that fetches real-time data from an API using JavaScript.",
                image: "https://images.pexels.com/photos/373481/pexels-photo-373481.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=1"
            },
            {
                title: "Portfolio Website",
                description: "A personal portfolio website showcasing my skills and projects.",
                image: "https://images.pexels.com/photos/17485352/pexels-photo-17485352/free-photo-of-biurko-z-laptopem-na-ktorym-otwarty-jest-edytor-graficzny-sklepu-internetowego-na-platformie-shoper.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=1"
            }
        ];

        // Dynamically add projects to the page
        const projectsContainer = document.getElementById('projectsContainer');
        projects.forEach(project => {
            const projectCard = `
                <div class="col-md-4 mb-4">
                    <div class="card project-card">
                        <img src="${project.image}" class="card-img-top" alt="${project.title}">
                        <div class="card-body">
                            <h5 class="card-title">${project.title}</h5>
                            <p class="card-text">${project.description}</p>
                            <a href="#" class="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            `;
            projectsContainer.innerHTML += projectCard;
        });

        // Form submission handling
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
