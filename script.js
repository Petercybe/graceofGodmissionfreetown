
        // Mobile menu toggle
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('nav').classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', function() {
                document.querySelector('nav').classList.remove('active');
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Set current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();

        // Show ministry content function
        function showMinistry(ministry) {
            // Hide all ministry content
            document.querySelectorAll('.min-content').forEach(content => {
                content.classList.add('hidden');
            });
            
            // Show selected ministry
            document.getElementById(ministry).classList.remove('hidden');
            
            // Set active tab styling
            document.querySelectorAll('.min-tab').forEach(tab => {
                tab.classList.remove('active-tab');
            });
            
            // Highlight active tab
            // event.target might not be available if called directly, so we find the button
            const clickedButton = document.querySelector(`.min-tab[onclick="showMinistry('${ministry}')"]`);
            if (clickedButton) {
                clickedButton.classList.add('active-tab');
            }
        }

        // Show youth ministry by default
        document.addEventListener('DOMContentLoaded', () => {
            showMinistry('youth');
            // Manually set the active class for the default tab
            document.querySelector('.min-tab[onclick="showMinistry(\'youth\')"]').classList.add('active-tab');
        });
    