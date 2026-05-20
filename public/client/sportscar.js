if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "/LogIn.html";
}

fetch('/server/data/sportscar.json')
    .then(response => response.json())
    .then(data => {
        const gridContainer = document.querySelector('.grid-container');
        const modal = document.getElementById('carModal');
        const closeModal = document.querySelector('.close');
        const modalLogo = document.getElementById('modalLogo');
        const modalBrand = document.getElementById('modalBrand');
        const modalName = document.getElementById('modalName');
        const modalImage = document.getElementById('modalImage');
        const detail1 = document.getElementById('detail1');
        const detail2 = document.getElementById('detail2');
        const detail3 = document.getElementById('detail3');
        const detail4 = document.getElementById('detail4');

        // Brand-Logo Mapping
        const brandMapping = {
            Ferrari: {
                logo: '/images/Brands/Ferrari.png',
                // details: "Ferrari is known for its luxury sports cars and Formula 1 racing."
            },
            Porsche: {
                logo: '/images/Brands/Porsche.png',
                // details: "Porsche is renowned for its high-performance sports cars and SUVs."
            },
            Lamborghini: {
                logo: '/images/Brands/Lamborghini.png',

            },
            Tesla: {
                logo: '/images/Brands/Tesla.png',

            },
            McLaren: {
                logo: '/images/Brands/McLaren.png',

            },
            Bugatti: {
                logo: '/images/Brands/Bugatti.png',

            },
            Koenigsegg: {
                logo: '/images/Brands/Koenigsegg.png',

            },
            Nissan: {
                logo: '/images/Brands/Nissan.png',

            },
            Toyota: {
                logo: '/images/Brands/Toyota.png',

            },
            Subaru: {
                logo: '/images/Brands/Subaru.png',

            },
            Mitsubishi: {
                logo: '/images/Brands/Mitsubishi.png',

            },
            Ford: {
                logo: '/images/Brands/Ford.png',

            },
            Chevrolet: {
                logo: '/images/Brands/Chevrolet.png',

            },
            Dodge: {
                logo: '/images/Brands/Dodge.png',

            },
            Audi: {
                logo: '/images/Brands/Audi.png',

            },
            BMW: {
                logo: '/images/Brands/BMW.png',

            },
            Mercedes: {
                logo: '/images/Brands/Mercedes.png',

            },
            Aston: {
                logo: '/images/Brands/Aston.png',

            },
            Bentley: {
                logo: '/images/Brands/Bentley.png',

            },
            Rolls: {
                logo: '/images/Brands/Rolls-Royce.png',

            },
            Pagani: {
                logo: '/images/Brands/Pagani.png',

            },
            Datsun: {
                logo: '/images/Brands/Datsun.png',

            },
            Mazda: {
                logo: '/images/Brands/Mazda.png',

            },
            Honda: {
                logo: '/images/Brands/Honda.png',

            },
            Lotus: {
                logo: '/images/Brands/Lotus.png',

            },
            Caterham: {
                logo: '/images/Brands/Caterham.png',

            },
            Ariel: {
                logo: '/images/Brands/Ariel.png',

            },
            Radical: {
                logo: '/images/Brands/Radical.png',

            }
        };

        data.forEach(car => {
            // Create car card
            const carDiv = document.createElement('div');
            carDiv.classList.add('car-card');
            carDiv.innerHTML = `
                <img src="${car.image}" alt="${car.name}" class="car-image">
                <h3>${car.name}</h3>
            `;
            gridContainer.appendChild(carDiv);

            // Add click event to open modal
            carDiv.addEventListener('click', () => {
                // Extract brand name from car name
                const brandName = Object.keys(brandMapping).find(brand =>
                    car.name.toLowerCase().includes(brand.toLowerCase())
                );

                if (brandName) {
                    modalLogo.src = brandMapping[brandName].logo || '/images/default-logo.png';
                    modalBrand.textContent = brandName;
                } else {
                    modalLogo.src = '/images/default-logo.png'; // Default logo
                    modalBrand.textContent = 'Unknown Brand';
                }

                modalName.textContent = car.name;
                modalImage.src = car.image;

                // Populate details
                detail1.textContent = car.detail1 || "No additional details provided.";
                detail2.textContent = car.detail2 || "No additional details provided.";
                detail3.textContent = car.detail3 || "No additional details provided.";
                detail4.textContent = car.detail4 || "No additional details provided.";
                // detail3.textContent =
                //     brandName && brandMapping[brandName].details
                //         ? brandMapping[brandName].details
                //         : "Brand-specific details not available.";

                modal.style.display = 'block';
            });
        });

        // Close modal when 'X' is clicked
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Close modal when clicking outside the modal content
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    })
    .catch(error => console.error('Error loading sports car data:', error));
