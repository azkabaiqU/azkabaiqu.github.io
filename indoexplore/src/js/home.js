// card blog
document.addEventListener('DOMContentLoaded', () => {
    const contentContainer = document.getElementById('container-travel-card'); // container-card n ya

    const cardsData = {
        all: [{
                title: 'Hotel Tentrem Yogyakarta ',
                location: 'Yogyakarta',
                imageUrl: 'https://d2ile4x3f22snf.cloudfront.net/wp-content/uploads/sites/210/2017/11/26090747/2200-1200-Pool-21.jpg',
                highlight: 'Hotel • Swimming Pool',
            },
            {
                title: 'Inna Parapat Hotel',
                location: 'Parapat, Sumatra Utara',
                imageUrl: 'https://asset-2.tstatic.net/medan/foto/bank/images/inna-parapat-hotel-dan-resort-asa.jpg',
                highlight: 'Hotel • Garden ',
            },
            {
                title: 'Taman Mini Indonesia Indah',
                location: 'Jakarta, DKI Jakarta',
                imageUrl: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcT85LvYfmWMMV3f6RLn281pNC65F_QRJoJRkGZyayz80vgKULbs-ZxIeWSU9aoP1naIAaFif4vbvLMvf2SCe7KvXq-TFccEHaLFUm-szQ',
                highlight: 'Park • Culture',
            },
            {
                title: 'Museum Angkut ',
                location: 'Batu, Jawa Timur',
                imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipOMwhWEaPJDECWnre_xgKTJ2CbR2ND1u129AawP=w864-h499-n-k-no',
                highlight: 'Museum • Classic Car',
            },
            {
                title: 'Warung Kopi Asiang',
                location: 'Pontianak, Kalimantan Barat',
                imageUrl: 'https://cdn.antaranews.com/cache/1200x800/2023/08/30/WhatsApp-Image-2023-08-30-at-09.25.09.jpeg',
                highlight: 'Coffe',
            },
            // Anda bisa menambahkan lebih banyak data card di sini.
        ],
    };

    // Panggil fungsi updateContent dengan 'all' secara otomatis setelah halaman dimuat
    updateContent('all');

    // Fungsi untuk memperbarui konten
    function updateContent(boxId) {
        contentContainer.innerHTML = ''; // Kosongkan konten sebelumnya
        const cards = cardsData[boxId];

        cards.forEach(cardData => {
            const cardHtml = `
             <a href="/src/html/detail-explore.html"
 <div class="card-loop sm:mx-2 mx-1 my-5 md:h-80 sm:h-72 h-60 md:w-72 sm:w-60 w-40 bg-white/30 hover:bg-white/50 overflow-hidden sm:rounded-2xl rounded-lg">
            <div class="md:h-52 sm:h-40 h-36 overflow-hidden">
                <img src="${cardData.imageUrl}" alt="gallery" class="w-full h-full object-cover">
            </div>
            <div class="px-5 font-trip-r">
                <h1 class="md:text-lg sm:text-base text-sm mt-3 truncate ">${cardData.title}</h1>
                <p class="md:text-sm text-xs truncate mt-2"><i class="fa-solid fa-location-dot fa-sm"></i> ${cardData.location}</p>
                <p class="md:text-sm text-xs" style="color:#707070;"># ${cardData.highlight}</p>
            </div>
        </div>
                                    </a>
               
                `;
            contentContainer.insertAdjacentHTML('beforeend', cardHtml);
        });
    }
});

// card blog
document.addEventListener('DOMContentLoaded', () => {
    const contentContainer = document.getElementById('container-article-card'); // container-card n ya

    const cardsData = {
        all: [{
                // 1
                title: `Rumah Adat: The Traditional Houses of Indonesia`,
                location: `Indonesia, with its diverse cultural heritage, boasts an array of traditional houses, each reflecting the unique customs and architectural styles of its various ethnic groups. These traditional houses, or "Rumah Adat,"`,
                imageUrl: 'https://images.unsplash.com/photo-1526976903781-bd8f0d705506?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                id: '12',
            },
            {
                // 1
                title: `Arfetak: The Unique and Enduring Craft of Indonesian Artistry`,
                location: `Arfetak is a term that signifies a special category of traditional Indonesian crafts, showcasing the nation's rich and diverse artistic heritage.`,
                imageUrl: 'https://asset-2.tstatic.net/jateng/foto/bank/images/Harta-Karun-Lombok-Perhiasan-diambil-pada-tahun-1894-sebagai-jarahan-perang-dari.jpg',
                id: '9',
            },
            {
                // 1
                title: `3 Custom House From bali`,
                location: `When going on vacation to Bali, detikers will be treated to beautiful natural scenery and a variety of delicious culinary delights. But not only that, Bali is also known to have unique traditional houses.`,
                imageUrl: 'https://akcdn.detik.net.id/community/media/visual/2022/07/10/rumah-adat-bali_169.jpeg?w=700&q=90',
                id: '11',
            },
            {
                // 1
                title: `Songket: The Luxurious Woven Fabric`,
                location: `Songket is a traditional fabric characterized by its rich texture and metallic threads woven into intricate patterns.`,
                imageUrl: 'https://pariwisataindonesia.id/wp-content/uploads/2023/08/PariwisataIndonesia-Foto-Aneka-Motif-Songket-Palembang.png',
                id: '4',
            },
            {
                // 1
                title: 'Satay: Diversity in Every Skewer',
                location: `Satay is a popular dish across Indonesia, with each region offering its own unique version. From Madura's Satay with its savory peanut sauce to Padang's Satay with its spicy, thick gravy, satay showcases the rich diversity of Indonesian cuisine.`,
                imageUrl: 'https://asianinspirations.com.au/wp-content/uploads/2020/04/R02533_Indonesian_Chicken_Satay.jpg',
                id: '2',

            },
            // Anda bisa menambahkan lebih banyak data card di sini.
        ],
    };

    // Panggil fungsi updateContent dengan 'all' secara otomatis setelah halaman dimuat
    updateContent('all');

    // Fungsi untuk memperbarui konten
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
                    <p class="md:text-sm text-xs mt-2 sm:line-clamp-3 line-clamp-2">${cardData.location}</p>
                </div>
            `;
            card.innerHTML = cardInnerHtml;
            contentContainer.appendChild(card);
        });
    }
    updateContent('all');
});

// ganti gambar saat meng click img lain
function changeContent(imageSrc, titleText, descriptionText, ) {
    // Mengganti gambar utama
    document.getElementById('main-image').src = imageSrc;

    // Mengganti judul
    document.getElementById('title-text-desc').textContent = titleText;

    // Mengganti deskripsi
    document.getElementById('desc-of-place').textContent = descriptionText;
}
// ganti gambar saat meng click img lain
function changeImg(imageSrc) {
    // Mengganti gambar utama
    document.getElementById('com-main').src = imageSrc;
}

function goToPage() {
    window.location.href = "/src/html/explore.html";
  }