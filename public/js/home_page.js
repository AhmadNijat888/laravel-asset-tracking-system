const featuresArr = [
    {
        title: "ساتنه",
        description: "د شتمنیو خوندیتوب"
    },
    {
        title: "راپورونه",
        description: "تحلیلی معلومات"
    },
    {
        title: "پلټل",
        description: "چټک لاسرسی"
    },
    {
        title: "QR کوډ",
        description: "اسانه سکین"
    }
];


function loadFeatures() {
    const container = document.getElementById('dynamicFeatures');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (const item of featuresArr) {
        const card = document.createElement('div');
        card.className = 'feature card-hover';
        
        const title = document.createElement('h3');
        title.textContent = item.title;
        
        const desc = document.createElement('p');
        desc.textContent = item.description;
        
        card.appendChild(title);
        card.appendChild(desc);
        container.appendChild(card);
    }
    console.log('Features loaded:', featuresArr.length, 'cards');
}


const statsArr = [
    {
        number: "1248",
        label: "فعالې شتمنۍ"
    },
    {
        number: "5420",
        label: "خوشحاله کاروونکي"
    },
    {
        number: "15280",
        label: "معاملې ترسره شوې"
    },
    {
        number: "12",
        label: "خدماتي څانګې"
    }
];

function loadStats() {
    const container = document.getElementById('dynamicStats');
    if (!container) return;
    
    container.innerHTML = '';
    
    const counterIds = ['counter1', 'counter2', 'counter3', 'counter4'];
    
    for (let i = 0; i < statsArr.length; i++) {
        const item = statsArr[i];
        
        const card = document.createElement('div');
        card.className = 'stat-card card-hover';
        
        const numberDiv = document.createElement('div');
        numberDiv.className = 'stat-number';
        numberDiv.id = counterIds[i];
        numberDiv.textContent = item.number;
        
        const labelDiv = document.createElement('div');
        labelDiv.className = 'stat-label';
        labelDiv.textContent = item.label;
        
        card.appendChild(numberDiv);
        card.appendChild(labelDiv);
        container.appendChild(card);
    }
    
    console.log('Statistics loaded:', statsArr.length, 'cards');

    startCounters();
}


const servicesArr = [
    {
        img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400",
        title: "د شتمنیو څارنه",
        description: "د شتمنیو د موقعیت او حالت دقیق تعقیب په ریښتیني وخت کې",
        link: "assets.html",
        linkText: "نور معلومات →"
    },
    {
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
        title: "تحلیلي راپورونه",
        description: "د شتمنیو کارونې تفصیلي تحلیلي راپورونه او احصایې",
        link: "reports.html",
        linkText: "نور معلومات →"
    },
    {
        img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400",
        title: "QR کوډ سکین",
        description: "د QR کوډ له لارې د شتمنیو چټک سکین او ثبتول",
        link: "search.html",
        linkText: "نور معلومات →"
    }
];


function loadServices() {
    const container = document.getElementById('dynamicServices');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (const item of servicesArr) {
        const card = document.createElement('div');
        card.className = 'service-card card-hover';
        
        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.title;
        img.className = 'service-img';
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'service-content';
        
        const title = document.createElement('h3');
        title.textContent = item.title;
        
        const desc = document.createElement('p');
        desc.textContent = item.description;
        
        const link = document.createElement('a');
        link.href = item.link;
        link.className = 'service-link';
        link.textContent = item.linkText;
        
        contentDiv.appendChild(title);
        contentDiv.appendChild(desc);
        contentDiv.appendChild(link);
        
        card.appendChild(img);
        card.appendChild(contentDiv);
        container.appendChild(card);
    }
    console.log('Services loaded:', servicesArr.length, 'cards');
}


// Testimonials section loaded from ONLINE API

// // API Function to load testimonials from online API
// async function loadTestimonials() {
//     const container = document.getElementById('dynamicTestimonials');
//     if (!container) return;
    
    
//     try {
//         console.log('Fetching testimonials from online API...');
        
//         // Using JSONPlaceholder API (free, no API key needed)
//         // This API returns comments that we can use as testimonials
//         const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=3');
        
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
        
//         const apiData = await response.json();
//         console.log('API Response received:', apiData);
        
//         // Clear container
//         container.innerHTML = '';
        
//         // Array of avatars for diversity
//         const images = [
//             "https://randomuser.me/api/portraits/men/1.jpg",
//             "https://randomuser.me/api/portraits/men/4.jpg",
//             "https://randomuser.me/api/portraits/men/6.jpg"
//         ];
        
//         // Array of names for testimonials
//         const names = [
//             "احمد نجات آغا",
//             " احمد",
//             "شریف الله کریمي"
//         ];
        
//         // Array of titles
//         const titles = [
//             "د IT رییس",
//             "مالي مدیر",
//             "اجرایوي رییس"
//         ];
        
//         // Loop through API data and create cards
//         for (let i = 0; i < apiData.length; i++) {
//             const apiItem = apiData[i];
            
//             // Create card div
//             const card = document.createElement('div');
//             card.className = 'testimonial-card card-hover';
            
//             // Create image element
//             const img = document.createElement('img');
//             img.src = images[i];
//             img.alt = names[i];
//             img.className = 'testimonial-avatar';
            
//             // Create text element (using API comment body, limited to 120 chars)
//             const text = document.createElement('p');
//             text.className = 'testimonial-text';
//             // API returns long comments, so we take first 120 characters
//             let commentText = apiItem.body;
//             if (commentText.length > 120) {
//                 commentText = commentText.substring(0, 120) + '...';
//             }
//             text.textContent = `"${commentText}"`;
            
//             // Create name element
//             const name = document.createElement('h4');
//             name.className = 'testimonial-name';
//             name.textContent = names[i];
            
//             // Create title element
//             const title = document.createElement('p');
//             title.className = 'testimonial-title';
//             title.textContent = titles[i];
            
//             // Create rating element (always 5 stars)
//             const rating = document.createElement('div');
//             rating.className = 'rating';
//             rating.textContent = '★★★★★';
            
//             // Append all to card
//             card.appendChild(img);
//             card.appendChild(text);
//             card.appendChild(name);
//             card.appendChild(title);
//             card.appendChild(rating);
            
//             // Add card to container
//             container.appendChild(card);
//         }
        
//         console.log('Testimonials loaded from API successfully!');
        
//     } catch (error) {

//         console.error('Error loading testimonials from API:', error);
//     }
// }



// Load testimonials from local JSON file (as API)
async function loadTestimonials() {
    const container = document.getElementById('dynamicTestimonials');
    if (!container) return;
    
    
    try {
        console.log('Fetching testimonials from local JSON file...');
        
        const response = await fetch('./assets/testimonials.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Local JSON loaded:', data);
        
        container.innerHTML = '';
        
        for (const item of data.testimonials) {
            const card = document.createElement('div');
            card.className = 'testimonial-card card-hover';
            
            const img = document.createElement('img');
            img.src = item.img;
            img.alt = item.name;
            img.className = 'testimonial-avatar';
            
            const text = document.createElement('p');
            text.className = 'testimonial-text';
            text.textContent = `"${item.text}"`;
            
            const name = document.createElement('h4');
            name.className = 'testimonial-name';
            name.textContent = item.name;
            
            const title = document.createElement('p');
            title.className = 'testimonial-title';
            title.textContent = item.title;
            
            const rating = document.createElement('div');
            rating.className = 'rating';
            rating.textContent = item.rating;
            
            card.appendChild(img);
            card.appendChild(text);
            card.appendChild(name);
            card.appendChild(title);
            card.appendChild(rating);
            container.appendChild(card);
        }
        
        console.log('Testimonials loaded from local JSON successfully!');
        
    } catch (error) {

        console.error('Error loading local JSON:', error);
    }
}


document.addEventListener('DOMContentLoaded', function() {
    console.log('Loading all dynamic sections...');
    
    loadFeatures();
    loadStats();
    loadServices();
    loadTestimonials();  
    
    console.log('All dynamic sections loaded successfully!');
});
    
    
function animateCounter(elementId, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    const element = document.getElementById(elementId);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.innerText = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.innerText = target;
        }
    }
    
    updateCounter();
}

// Start counters when page loads
function startCounters() {
    animateCounter('counter1', 1248, 2000);
    animateCounter('counter2', 5420, 2000);
    animateCounter('counter3', 15280, 2000);
    animateCounter('counter4', 12, 2000);
};