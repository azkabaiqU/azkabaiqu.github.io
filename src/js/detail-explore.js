// card blog
document.addEventListener('DOMContentLoaded', () => {
    const contentContainer = document.getElementById('contaioner-blog-card'); // container-card n ya

    const cardsData = {
        all: [
            
            {
            pfp: `https://i.pinimg.com/736x/6d/ff/a9/6dffa9ce67a37d383b7d4180047c4a27.jpg`,
            name: 'Lee Eun-hyuk',
            date: '12 september 2023',
            title: `I like going to Bali`,
            desc: `very beautiful, and comfortable, Bali is a paradise that captivates visitors with its stunning landscapes and rich cultural heritage. Known as the Island of the Gods,Bali offers a unique blend of natural beauty and vibrant traditions.
next time i'll invite lee eun-yu`,
            img: ``,
            like: '203.034',
            unlike: '0'
        },
        {
            pfp: `https://id-static.rti.org.tw/assets/thumbnails/2015/05/07/20150507000111M.jpg`,
            name: 'Teresa Teng',
            date: '08 Mei 2022',
            title: `Dieng Plateau`,
            desc: `this is my second i write a blog or talk about my story, u should go to Dieng Plateau,  `,
            img: ``,
            like: '1.002',
            unlike: '92'
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
             <a href="/src/html/blog.html"
                                        class="card | m-1.5 w-[500px] minh-[130px]  p-3 rounded-xl overflow-hidden bg-white/50">
                                        <div class="pfp | w-full flex items-center ">
                                            <div class="w-8 h-8 overflow-hidden rounded-full"><img
                                                    class="w-full h-full object-cover"
                                                    src="${cardData.pfp}"
                                                    alt=""></div>
                                            <div class="ml-2 ">
                                                <h1 class="sm:text-sm text-xs font-trip-m">${cardData.name}</h1>
                                                <p class="text-xs">${cardData.date}</p>
                                            </div>
                                        </div>
                                        <div class="comment-isi mt-2 ">
                                            <div>
                                                <h1 class="title | sm:text-lg text-base font-trip-m">${cardData.title}</h1>
                                            </div>
                                            <div class="desc | max-w-[800px] text-xs ">
                                                <p>${cardData.desc}</p>
                                            </div>
                                        </div>
                                         <div class="img mt-2">
                                            <div class="img | max-w-[700px]  max-h-[180px] overflow-hidden mt-3 rounded-xl">
                ${cardData.img}
                </div>
                                        </div>
            
                                    </a>
               
                `;
            contentContainer.insertAdjacentHTML('beforeend', cardHtml);
        });
    }
});

// perpindahan page dengan id
function formatTitleForFilename(title) {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
}

indow.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const cardsData = {
        all: [
            {
                // 1
                type:`Culture`,
                title: `beautiful indonesian countryside`,
                location: `almost every region has beautiful rice fields, and Indonesian people make this to plant rice, then the rice becomes rice,`,
                imageUrl: 'https://images.unsplash.com/photo-1559628233-100c798642d4?q=80&w=2540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                id: '13',
                date: 'Sunday, 01 january 2024',

                text1: `Almost every region in Indonesia is graced with beautiful rice fields, known as "sawah," which play a vital role in the country's agricultural landscape. These rice fields are not only a testament to the ingenuity and hard work of Indonesian farmers but also a reflection of the deep cultural connection that the people have with their land. One of the reasons Nasi Goreng remains a favorite among Indonesians is its ability to transform leftover rice into a flavorful and satisfying dish. This makes it not only a delicious option but also a practical one, minimizing food waste while maximizing taste. Whether served at a high-end restaurant or a humble street stall, Nasi Goreng continues to capture the hearts and taste buds of locals and tourists alike, embodying the rich and diverse culinary heritage of Indonesia.`,
                text2: ``,
                text3: ``,

                longTitle:`The Significance of Rice in Indonesian Culture`,
                longText:`Rice, or "beras," is the staple food for most Indonesians and is a central part of daily life, from simple family meals to elaborate ceremonial feasts. The process of growing rice is a labor-intensive endeavor that requires careful planning, dedication, and respect for nature. Rice fields are more than just agricultural plots; they are part of a complex system of water management and communal cooperation that has been perfected over centuries.

In regions like Bali, the rice terraces are particularly famous and have become iconic symbols of the island. The Subak system, an ancient cooperative water management system used in Bali, is a UNESCO World Heritage site. This system ensures that water is distributed fairly among all the farmers in a village, reflecting the Balinese philosophy of Tri Hita Karana, which emphasizes harmony between people, nature, and the spiritual world.`,

                titleNumber1: 'Types of Rice Fields in Indonesia',
                textNumber1: `Indonesia's rice fields vary widely in appearance and structure, depending on the topography and climate of the region. In the mountainous regions of Sumatra, Sulawesi, and Papua, you will find stunning terraced rice fields, carved into the slopes of hills and mountains. These terraces allow farmers to maximize arable land in hilly areas, creating breathtaking landscapes that have become popular tourist attractions.`,

                titleNumber2: '',
                textNumber2: 'In contrast, in the flat lowlands of Java, Bali, and parts of Kalimantan, you will find extensive paddy fields that stretch as far as the eye can see. These fields are usually irrigated using intricate canal systems, which are vital for ensuring that the rice plants receive enough water during the growing season.',

                titleNumber3: 'The Cycle of Rice Cultivation',
                textNumber3: `The cultivation of rice in Indonesia follows a cyclical pattern that is closely tied to the natural seasons. The process begins with the preparation of the land, where the soil is plowed and flooded to create a muddy field. Farmers then plant rice seedlings, which have been carefully grown in nurseries, into the flooded paddies.`,

                titleNumber4: '',
                textNumber4: 'Over the next few months, the rice plants grow and mature, their bright green stalks swaying in the breeze. During this period, farmers must carefully manage the water levels in the fields and protect the crops from pests and diseases. As the rice plants ripen, they turn a golden yellow, signaling that it is time for the harvest.',
            },
        ],
    };

    // Temukan data yang sesuai dengan id dari URL
    const card = cardsData.all.find(card => card.id === id);

    if (card) {
        // Tampilkan data
        // document.querySelector('#title').textContent = card.title;

    } else {
        // Tangani jika id tidak ditemukan
        console.error('Card not found');
        document.querySelector('#title').textContent = 'Data tidak ditemukan';
    }

});

const backButton = document.getElementById('btn-back');
backButton.addEventListener('click', () => {
    window.history.back();
});

// change img
function changeImg(imageSrc) {
    // Mengganti gambar utama
    document.getElementById('img1').src = imageSrc;
}

// mengubah menjadi blur
document.querySelectorAll('.click-btn-blur').forEach(button => {
    button.addEventListener('click', function () {
        // Hapus class blur dari semua tombol
        document.querySelectorAll('.click-btn-blur').forEach(btn => {
            btn.classList.remove('bg-white/20');
            btn.classList.remove('backdrop-blur-md');
            btn.classList.add('hover-opacity-img');
        });

        // Tambahkan class blur hanya pada tombol yang diklik
        this.classList.add('bg-white/20');
        this.classList.add('backdrop-blur-md');
        this.classList.remove('hover-opacity-img');
    });
});
