
document.addEventListener('DOMContentLoaded', () => {
    const boxButtons = document.querySelectorAll('.navbar-btn-value');
    const contentContainer = document.getElementById('card-container');

    // Data card untuk setiap box
    const cardsData = {
        all: [
            {
                // 1
                title: `Rumah Adat: The Traditional Houses of Indonesia`,
                location: `Indonesia, with its diverse cultural heritage, boasts an array of traditional houses, each reflecting the unique customs and architectural styles of its various ethnic groups. These traditional houses, or "Rumah Adat,"`,
                imageUrl: '/img/rumah-adat.png',
                id: '12',
            },
            {
                // 1
                title: `The Keris: A Sacred Symbol of Indonesian Heritage`,
                location: `The Keris is not merely a weapon; it is a revered cultural artifact that embodies the spiritual and historical essence of Indonesia.`,
                imageUrl: '/img/keris.png',
                id: '10',
            },
            {
                // 1
                title: `Arfetak: The Unique and Enduring Craft of Indonesian Artistry`,
                location: `Arfetak is a term that signifies a special category of traditional Indonesian crafts, showcasing the nation's rich and diverse artistic heritage.`,
                imageUrl: '/img/artefak.png',
                id: '9',
            },
            {
                // 1
                title: `3 Custom House From bali`,
                location: `When going on vacation to Bali, detikers will be treated to beautiful natural scenery and a variety of delicious culinary delights. But not only that, Bali is also known to have unique traditional houses.`,
                imageUrl: '/img/3-rumah.png',
                id: '11',
            },
            {
                // 1
                title: 'Rendang: The Iconic Dish from Minangkabau',
                location: 'Rendang, one of Indonesia s most famous dishes, hails from Minangkabau, West Sumatra. This slow-cooked beef dish',
                imageUrl: '/img/rendang.png',
                id: '3',
    
            },
            {
                // 1
                title: `Songket: The Luxurious Woven Fabric`,
                location: `Songket is a traditional fabric characterized by its rich texture and metallic threads woven into intricate patterns.`,
                imageUrl: '/img/songket.png',
                id: '4',
            },
            {
                // 1
                title: 'Satay: Diversity in Every Skewer',
                location: `Satay is a popular dish across Indonesia, with each region offering its own unique version. From Madura's Satay with its savory peanut sauce to Padang's Satay with its spicy, thick gravy, satay showcases the rich diversity of Indonesian cuisine.`,
                imageUrl: '/img/sate.png',
                id: '2',
    
            },
            {
                // 1
                title: 'Nasi Goreng: A Taste of the Archipelago on a Plate',
                location: `Nasi Goreng is one of Indonesia's most popular street foods and a staple in homes across the country. This dish consists of fried rice mixed with seasonings such as sweet soy sauce, garlic, and chili, often accompanied by chicken, eggs, and vegetables. `,
                imageUrl: '/img/nasi-goreng.png',
                id: '1',
            },
            {
                // 1
                title: `Wayang Kulit: Exploring the Charm of Traditional Indonesian Leather Puppet Performing Arts`,
                location: `A traditional Balinese dance known as "Tari Cak". This dance involves a group of men sitting cross-legged,`,
                imageUrl: '/img/wayang.png',
                id: '8',
            },
            {
                // 1
                title: `beautiful indonesian countryside`,
                location: `almost every region has beautiful rice fields, and Indonesian people make this to plant rice, then the rice becomes rice,`,
                imageUrl: '/img/sawah.png',
                id: '13',
            },
            {
                // 1
                title: `Uncover the Magic of Indonesia`,
                location: `Indonesia is a very rich and diverse country, ranging from islands, customs, culture, etc.`,
                imageUrl: '/img/magic.png',
                id: '14',
            },
            {
                // 1
                title: `The explanatory sentence reveals that Indonesia offers`,
                location: `The explanatory sentence reveals that Indonesia offers a unique experience by combining exciting adventures and rich cultural heritage. Explanation: "Explore the amazing Indonesia, where thrilling adventures meet rich culture.`,
                imageUrl: '/img/people-bali.png',
                id: '15',
            },
            {
                // 1
                title: `Kecak Dance: Harmony of Sound and Movement in a Typical Balinese Performance`,
                location: `A leather puppet performance art originating from Java and Bali. The puppets are made of cowhide, carved in detail and performed behind a screen with light from oil lamps to create shadows.`,
                imageUrl: '/img/decak.png',
                id: '7',
            },
            {
                // 1
                title: `Saman Dance: The Beauty of Movement and Song from Aceh`,
                location: `Traditional dance from Aceh which is also known as "Saman Dance" or "Serampang Dance". This dance is performed with fast and synchronized body movements, accompanied by singing and hand clapping.`,
                imageUrl: '/img/saman.png',
                id: '6',
            },
    
            {
                // 1
                title: `The Timeless Art of Batik: Indonesia's Cultural Masterpiece`,
                location: `Batik, a traditional fabric from Indonesia, is more than just a textile—it's a cultural treasure that embodies the rich heritage and artistic ingenuity of the Indonesian people. With its intricate patterns and deep cultural significance, Batik has become a symbol of Indonesia’s identity and a testament to the nation's artistic prowess.`,
                imageUrl: '/img/model-batik.png',
                id: '5',
            },






            
        ],
        house: [
            {
                // 1
                title: `Rumah Adat: The Traditional Houses of Indonesia`,
                location: `Indonesia, with its diverse cultural heritage, boasts an array of traditional houses, each reflecting the unique customs and architectural styles of its various ethnic groups. These traditional houses, or "Rumah Adat,"`,
                imageUrl: '/img/rumah-adat.png',
                id: '12',
            },
            {
                // 1
                title: `3 Custom House From bali`,
                location: `When going on vacation to Bali, detikers will be treated to beautiful natural scenery and a variety of delicious culinary delights. But not only that, Bali is also known to have unique traditional houses.`,
                imageUrl: '/img/3-rumah.png',
                id: '11',
            },
            
    

        ],
        artefacts: [
            {
                // 1
                title: `The Keris: A Sacred Symbol of Indonesian Heritage`,
                location: `The Keris is not merely a weapon; it is a revered cultural artifact that embodies the spiritual and historical essence of Indonesia.`,
                imageUrl: '/img/keris.png',
                id: '10',
            },
            {
                // 1
                title: `Arfetak: The Unique and Enduring Craft of Indonesian Artistry`,
                location: `Arfetak is a term that signifies a special category of traditional Indonesian crafts, showcasing the nation's rich and diverse artistic heritage.`,
                imageUrl: '/img/artefak.png',
                id: '9',
            },

        ],
        art:[
            {
                // 1
                title: `Wayang Kulit: Exploring the Charm of Traditional Indonesian Leather Puppet Performing Arts`,
                location: `A traditional Balinese dance known as "Tari Cak". This dance involves a group of men sitting cross-legged,`,
                imageUrl: '/img/wayang.png',
                id: '8',
            },
            {
                // 1
                title: `Kecak Dance: Harmony of Sound and Movement in a Typical Balinese Performance`,
                location: `A leather puppet performance art originating from Java and Bali. The puppets are made of cowhide, carved in detail and performed behind a screen with light from oil lamps to create shadows.`,
                imageUrl: '/img/decak.png',
                id: '7',
            },
            {
                // 1
                title: `Saman Dance: The Beauty of Movement and Song from Aceh`,
                location: `Traditional dance from Aceh which is also known as "Saman Dance" or "Serampang Dance". This dance is performed with fast and synchronized body movements, accompanied by singing and hand clapping.`,
                imageUrl: '/img/saman.png',
                id: '6',
            },
    
            {
                // 1
                title: `The Timeless Art of Batik: Indonesia's Cultural Masterpiece`,
                location: `Batik, a traditional fabric from Indonesia, is more than just a textile—it's a cultural treasure that embodies the rich heritage and artistic ingenuity of the Indonesian people. With its intricate patterns and deep cultural significance, Batik has become a symbol of Indonesia’s identity and a testament to the nation's artistic prowess.`,
                imageUrl: '/img/model-batik.png',
                id: '5',
            },



            {
                // 1
                title: `Songket: The Luxurious Woven Fabric`,
                location: `Songket is a traditional fabric characterized by its rich texture and metallic threads woven into intricate patterns.`,
                imageUrl: '/img/songket.png',
                id: '4',
            },

    

        ],
        culinary: [
            {
            // 1
            title: 'Rendang: The Iconic Dish from Minangkabau',
            location: 'Rendang, one of Indonesia s most famous dishes, hails from Minangkabau, West Sumatra. This slow-cooked beef dish',
            imageUrl: '/img/rendang.png',
            id: '3',

        },
        {
            // 1
            title: 'Satay: Diversity in Every Skewer',
            location: `Satay is a popular dish across Indonesia, with each region offering its own unique version. From Madura's Satay with its savory peanut sauce to Padang's Satay with its spicy, thick gravy, satay showcases the rich diversity of Indonesian cuisine.`,
            imageUrl: '/img/sate.png',
            id: '2',

        },
        {
            // 1
            title: 'Nasi Goreng: A Taste of the Archipelago on a Plate',
            location: `Nasi Goreng is one of Indonesia's most popular street foods and a staple in homes across the country. This dish consists of fried rice mixed with seasonings such as sweet soy sauce, garlic, and chili, often accompanied by chicken, eggs, and vegetables. `,
            imageUrl: '/img/nasi-goreng.png',
            id: '1',
        },
     

    ],

    };

    boxButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');
            updateContent(target);
        });
    });

    function updateContent(boxId) {
        contentContainer.innerHTML = ''; // Clear previous content
        const cards = cardsData[boxId];
    
        cards.forEach(cardData => {
            const card = document.createElement('a');
            card.setAttribute('href', '#');
            card.setAttribute('class', 'sm:mx-2 mx-1 my-5 md:h-96 sm:h-80 h-56 md:w-72 sm:w-60 w-40 bg-white/30 hover:bg-white/50 overflow-hidden sm:rounded-2xl rounded-lg');
            card.setAttribute('data-id', cardData.id); // Set data-id attribute
            card.addEventListener('click', () => {
                // Mengarahkan pengguna ke halaman detail dengan query parameter ID
                window.location.href = `detail-article.html?id=${cardData.id}`;
            });
    
            const cardInnerHtml = `
                <div class="md:h-52 sm:h-40 h-36 overflow-hidden">
                    <img src="${cardData.imageUrl}" alt="gallery" class="w-full h-full object-cover">
                </div>
                <div class="px-5 font-trip-r">
                    <h1 class="md:text-lg sm:text-base text-sm mt-3 truncate">${cardData.title}</h1>
                    <p class="md:text-sm text-xs mt-2 md:line-clamp-6 sm:line-clamp-5 line-clamp-2">${cardData.location}</p>
                </div>
            `;
            card.innerHTML = cardInnerHtml;
            contentContainer.appendChild(card);
        });
    }
    updateContent('all');
});

// all 
document.getElementById('all-value').addEventListener('click', () => {
    // menganti title di img besar
    const titleElement = document.getElementById('title-text');
    titleElement.textContent = 'Culture';

    const titleElementDesc = document.getElementById('title-text-desc');
    titleElementDesc.textContent = 'Culture';

    const desc = document.getElementById('desc-of-place');
    desc.textContent = 'Indonesia is a rich country, in terms of, culture, country, nature, Indonesia is';
})
