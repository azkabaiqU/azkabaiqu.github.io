function formatTitleForFilename(title) {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
}
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const cardsData = {
        all: [
            {
                // 1
                type:`Culture`,
                title: `beautiful indonesian countryside`,
                location: `almost every region has beautiful rice fields, and Indonesian people make this to plant rice, then the rice becomes rice,`,
                imageUrl: '/img/sawah.png',
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
            {
                // 1
                type:`Indonesia`,
                title: `Uncover the Magic of Indonesia`,
                location: `Indonesia is a very rich and diverse country, ranging from islands, customs, culture, etc.`,
                imageUrl: '/img/magic.png',
                id: '14',
                date: 'saturday, 03 january 2024',

                text1: `Indonesia is a very rich and diverse country, ranging from islands, customs, culture, and more. With over 17,000 islands, Indonesia is the largest archipelago in the world, offering a breathtaking array of landscapes, from lush rainforests and towering volcanoes to serene beaches and vibrant coral reefs. This geographical diversity is matched by the country's cultural richness, with over 300 distinct ethnic groups and more than 700 languages spoken across the archipelago.`,
                text2: ``,
                text3: ``,

                longTitle:`Cultural Diversity and Heritage`,
                longText:`Indonesia's cultural diversity is one of its most remarkable features. Each region has its own unique traditions, languages, and practices, creating a tapestry of cultures that coexist harmoniously. From the intricate dances of Bali and the majestic batik patterns of Java to the traditional music of Sumatra and the elaborate Torajan funerals in Sulawesi, Indonesia's cultural expressions are as varied as they are vibrant.

The country is also home to numerous UNESCO World Heritage sites, including the Borobudur Temple in Central Java, the largest Buddhist temple in the world, and the Prambanan Temple, a stunning Hindu temple complex. These ancient monuments stand as testaments to the rich historical and religious heritage of the Indonesian people.`,

                titleNumber1: 'Religious Pluralism',
                textNumber1: `Indonesia is also known for its religious diversity. While the majority of the population is Muslim, the country recognizes six official religions: Islam, Protestantism, Catholicism, Hinduism, Buddhism, and Confucianism. This pluralism is reflected in the many religious festivals, ceremonies, and places of worship found throughout the country, from the grand mosques of Jakarta to the sacred Hindu temples of Bali.`,

                titleNumber2: '',
                textNumber2: 'In contrast, in the flat lowlands of Java, Bali, and parts of Kalimantan, you will find extensive paddy fields that stretch as far as the eye can see. These fields are usually irrigated using intricate canal systems, which are vital for ensuring that the rice plants receive enough water during the growing season.',

                titleNumber3: 'Culinary Richness',
                textNumber3: `Indonesia's diversity is also evident in its culinary traditions. The country’s cuisine is a reflection of its varied cultures and histories, with each region offering its own distinctive flavors and dishes. From the spicy rendang of Padang and the savory satay of Java to the refreshing rujak of Bali and the sweet klepon of Central Java, Indonesian food is a rich blend of indigenous, Indian, Chinese, and Middle Eastern influences.`,

                titleNumber4: '',
                textNumber4: 'Rice is a staple in Indonesian cuisine, often served with a variety of side dishes such as sambal (a spicy chili paste), tempeh, and various meats and vegetables. The use of aromatic spices and herbs like lemongrass, turmeric, and galangal gives Indonesian food its characteristic depth of flavor.',
            },
            {
                // 1
                type:`Indonesia`,
                title: `The explanatory sentence reveals that Indonesia offers`,
                location: `The explanatory sentence reveals that Indonesia offers a unique experience by combining exciting adventures and rich cultural heritage. Explanation: "Explore the amazing Indonesia, where thrilling adventures meet rich culture.`,
                imageUrl: '/img/people-bali.png',
                id: '15',
                date: 'saturday, 05 agustust 2024',

                text1: `Explore the amazing Indonesia, where thrilling adventures meet rich culture" perfectly captures the essence of what this diverse archipelago has to offer. Whether you're trekking through the dense jungles of Sumatra in search of rare wildlife, diving in the crystal-clear waters of Raja Ampat, or surfing the world-class waves of Bali, every adventure in Indonesia is infused with a deep connection to the local culture.`,
                text2: ``,
                text3: ``,

                longTitle:`Cultural Immersion
`,
                longText:`But it's not just about the natural beauty—every adventure in Indonesia is an opportunity to immerse yourself in the local culture. Visit the traditional villages of Tana Toraja in Sulawesi, where you can witness elaborate funeral ceremonies and learn about the indigenous customs that have been preserved for centuries. In Yogyakarta, explore the ancient temples of Borobudur and Prambanan, where history and spirituality come alive through intricate stone carvings and sacred rituals.`,

                titleNumber1: 'Culinary Exploration',
                textNumber1: `No journey through Indonesia would be complete without indulging in its rich culinary heritage. As you explore the islands, you'll discover a culinary landscape as diverse as its geography. Taste the fiery spices of Padang cuisine, savor the sweetness of Balinese lawar, or enjoy the simple yet flavorful nasi goreng, a dish loved by locals and visitors alike. Every meal tells a story, connecting you to the traditions and flavors that define Indonesian culture.
`,

                titleNumber2: 'Adventure with a Purpose',
                textNumber2: `For those seeking more than just thrill and excitement, Indonesia offers the chance to engage in meaningful travel experiences. Participate in community-based tourism projects that support local livelihoods, or join conservation efforts to protect endangered species and preserve the natural environment. Whether it's volunteering in a sea turtle sanctuary or learning about sustainable farming practices in rural villages, these experiences allow travelers to give back while gaining a deeper understanding of Indonesia's challenges and triumphs.`,

                titleNumber3: 'Conclusion: An Unforgettable Experience',
                textNumber3: `Indonesia is more than just a destination—it's a journey that takes you through the heart of a country where adventure and culture are intertwined. Whether you're scaling the heights of its majestic mountains, diving into its vibrant marine life, or simply wandering through its bustling markets and quiet villages, Indonesia offers an experience like no other. It's a place where every corner reveals a new story, every encounter leaves a lasting impression, and every adventure brings you closer to the soul of this incredible nation.`,

                titleNumber4: '',
                textNumber4: '',
            },
            {
                // 1
                type:'Culinary',
                title: `Nasi Goreng: A Taste of the Archipelago on a Plate`,
                location: `Nasi Goreng is one of Indonesia's most popular street foods and a staple in homes across the country. This dish consists of fried rice mixed with seasonings such as sweet soy sauce, garlic, and chili, often accompanied by chicken, eggs, and vegetables.`,
                imageUrl: '/img/nasi-goreng.png',
                id: '1',
                date: 'Sunday, 07 january 2024',

                text1: `Nasi Goreng is not only a quick and easy meal but also a versatile dish that can be adapted to suit individual tastes. In various regions of Indonesia, you might find unique versions of Nasi Goreng, each reflecting the local flavors and ingredients. For example, Nasi Goreng Jawa is known for its use of terasi (shrimp paste), giving it a distinctive taste, while Nasi Goreng Kampung is typically spicier and simpler, often made with just garlic, chili, and shallots.

This beloved dish is often garnished with acar (pickled vegetables), krupuk (crackers), and slices of cucumber or tomato, adding a refreshing crunch to the meal. Nasi Goreng can be enjoyed at any time of the day, whether as a hearty breakfast, a quick lunch, or a comforting dinner.`,
                text2: `One of the reasons Nasi Goreng remains a favorite among Indonesians is its ability to transform leftover rice into a flavorful and satisfying dish. This makes it not only a delicious option but also a practical one, minimizing food waste while maximizing taste.`,
                text3: `Whether served at a high-end restaurant or a humble street stall, Nasi Goreng continues to capture the hearts and taste buds of locals and tourists alike, embodying the rich and diverse culinary heritage of Indonesia.`,

                longTitle:``,
                longText:``,

                titleNumber1: '',
                textNumber1: '',

                titleNumber2: '',
                textNumber2: '',

                titleNumber3: '',
                textNumber3: ``,

                titleNumber4: '',
                textNumber4: '',
            },
            {
                // 1
                type:'Custom Home',
                title: `3 Custom House From bali`,
                location: `When going on vacation to Bali, detikers will be treated to beautiful natural scenery and a variety of delicious culinary delights. But not only that, Bali is also known to have unique traditional houses.`,
                imageUrl: '/img/3-rumah.png',
                id: '11',
                date: 'Sunday, 10 agust 2024',

                text1: `Saat berlibur ke Bali, para wisatawan tidak hanya akan disuguhi oleh pemandangan alam yang indah dan beragam kuliner lezat, tetapi juga akan menemukan keunikan rumah adat Bali. Rumah-rumah tradisional ini mencerminkan kekayaan budaya dan filosofi masyarakat Bali, serta memiliki ciri khas yang membuatnya menonjol. Berikut adalah tiga jenis rumah adat Bali yang patut diketahui:`,
                text2: '',
                text3: '',

                longTitle:``,
                longText:``,

                titleNumber1: '1. Rumah Bale Daja',
                textNumber1: 'Bale Daja adalah salah satu jenis rumah adat Bali yang memiliki desain yang khas dan sering ditemukan di desa-desa Bali. Ciri utama dari Bale Daja adalah bentuk atapnya yang melengkung ke atas dan dibangun dengan menggunakan alang-alang, memberikan tampilan yang natural dan harmonis dengan lingkungan sekitar. Rumah ini umumnya terdiri dari beberapa bangunan kecil yang mengelilingi sebuah halaman terbuka, menciptakan ruang yang luas dan nyaman untuk kegiatan keluarga. Bale Daja juga sering kali dilengkapi dengan ukiran dan hiasan yang mencerminkan simbol-simbol spiritual dan budaya Bali.',

                titleNumber2: '2. Rumah Bale Agung',
                textNumber2: 'Bale Agung adalah rumah adat Bali yang sering digunakan sebagai pusat kegiatan keluarga dan upacara adat. Ciri khas dari Bale Agung adalah ukuran yang lebih besar dibandingkan dengan rumah adat lainnya, dengan struktur yang mengelilingi sebuah halaman utama. Atap Bale Agung dibuat dari alang-alang dan memiliki bentuk yang memanjang, melambangkan kekuatan dan keagungan. Rumah ini biasanya memiliki ruang terbuka di tengah yang digunakan untuk berkumpul dan melaksanakan upacara adat seperti perayaan hari raya dan upacara keagamaan.',

                titleNumber3: '3. Rumah Bale Kulkul',
                textNumber3: `Bale Kulkul adalah jenis rumah adat yang juga dikenal karena menara penghasil bunyi yang terletak di dekatnya, yaitu kulkul atau lonceng kayu yang digunakan untuk memanggil warga desa. Rumah ini biasanya memiliki desain yang sederhana namun fungsional, dengan struktur atap yang miring dan dinding dari bahan-bahan alami seperti bambu atau kayu. Bale Kulkul sering kali digunakan sebagai tempat berkumpul komunitas dan ruang untuk upacara adat. Menara kulkul memiliki peran penting dalam komunikasi dan pengaturan waktu, menandakan berbagai kegiatan komunitas.
`,
                titleNumber4: '',
                textNumber4: '',
            },

            {
                id: '3', // Pastikan ID ini unik di seluruh array
                type: 'Culinary',
                title: 'Rendang: The Iconic Dish from Minangkabau',
                date: 'Sunday, 11 May 2024',
                imageUrl: '/img/rendang.png',
                text1: `Rendang is one of the most famous dishes from Indonesia originating from Minangkabau, West Sumatra. This dish is widely known for its rich and complex flavors and its cooking process that requires a long time and special attention. Rendang, although often referred to as "beef curry", is actually a beef dish that is slowly cooked in a mixture of spices and coconut milk to produce a delicious and appetizing dish.

The history of rendang begins with the culinary tradition of the Minangkabau people, who are known for their rich spices and cooking techniques. The process of making rendang requires a lot of time and patience. The beef is cut into small pieces and cooked in coconut milk that has been seasoned with spices such as chili, shallots, garlic, ginger, turmeric, and galangal. This mixture is then slowly cooked for several hours, until the spices are perfectly absorbed into the meat and the coconut milk thickens to almost dry.

The specialty of rendang lies in its unique cooking method. The slow cooking process allows the meat to become very tender and the spices to penetrate well, creating a deep and rich flavor. This rendang can also last a long time and even tastes better after a few days, as the spices are absorbed and the flavors develop.
`,
                text2: 'Rendang is not only served in Indonesia, but has also been known internationally. This dish is often the main choice in various culinary festivals and international events, showing how deep the influence of Minangkabau cuisine is throughout the world. Rendang is often a favorite choice at special events and celebrations, and is a highly valued dish in the Indonesian culinary tradition.',
                text3: 'With all the deliciousness and richness of flavors it offers, rendang is one of the symbols of Indonesian cuisine that is worth being proud of. Its success in attracting international attention proves that the diversity of Indonesian cuisine, especially from the Minangkabau region, has a universal and unmatched appeal.',

                longTitle:``,
                longText:``,

                titleNumber1: '',
                textNumber1: '',
                titleNumber2: '',
                textNumber2: '',
                titleNumber3: '',
                textNumber3: '',
                titleNumber4: '',
                textNumber4: '',
            },
            {
                id: '2', // Pastikan ID ini unik di seluruh array
                type: 'Culinary',
                title: 'Satay: Diversity in Every Skewer',
                imageUrl: '/img/sate.png',
                date: 'Sunday, 22 August 2024',
                text1: `Sate, atau satay, adalah salah satu hidangan yang sangat populer di Indonesia dan dikenal dengan berbagai versi yang unik dari setiap daerah. Hidangan ini berupa potongan daging yang ditusuk pada tusukan bambu, lalu dipanggang atau dibakar dan disajikan dengan berbagai macam bumbu dan saus. Sate adalah contoh yang sempurna dari keragaman kuliner Indonesia yang kaya dan beraneka ragam.

Salah satu versi sate yang paling terkenal adalah Sate Madura. Terkenal dengan bumbu kacangnya yang gurih dan sedikit manis, Sate Madura menawarkan kombinasi rasa yang memikat. Bumbu kacang yang digunakan terbuat dari campuran kacang tanah yang dihaluskan, bawang putih, gula merah, dan rempah-rempah lainnya. Sate Madura biasanya menggunakan daging ayam, kambing, atau sapi yang dipotong kecil-kecil dan ditusuk pada tusukan bambu sebelum dipanggang hingga matang. Cita rasa bumbu kacangnya yang khas menjadikan sate ini sebagai favorit banyak orang.

`,
                text2: '',
                text3: '',

                longTitle:``,
                longText:`Di sisi lain, Sate Padang memiliki karakteristik yang sangat berbeda. Berasal dari Padang, Sumatra Barat, sate ini dikenal dengan sausnya yang kental dan pedas. Berbeda dengan bumbu kacang dari Sate Madura, Sate Padang menggunakan saus berbasis kari yang terdiri dari campuran rempah-rempah seperti kunyit, jahe, dan cabai. Saus ini memberikan rasa yang kaya dan pedas pada daging yang dipanggang. Daging yang digunakan untuk Sate Padang bisa berupa daging sapi atau jeroan, yang kemudian ditusuk dan dipanggang sebelum disiram dengan saus kental yang menggiurkan.`,

                titleNumber1: '',
                textNumber1: '',
                titleNumber2: '',
                textNumber2: '',
                titleNumber3: '',
                textNumber3: '',
                titleNumber4: '',
                textNumber4: '',
            },

        
            {
                // 1
                type:'Arts',
                id: '8',
                title: `Wayang Kulit: Exploring the Charm of Traditional Indonesian Leather Puppet Performing Arts`,
                location: `A traditional Balinese dance known as "Tari Cak". This dance involves a group of men sitting cross-legged,`,
                imageUrl: '/img/wayang.png',
                date: 'Sunday, 12 agust 2024',

                text1: `Wayang Kulit adalah bentuk seni pertunjukan tradisional Indonesia yang berasal dari Jawa dan Bali. Terkenal dengan boneka kulitnya yang diukir dengan detail yang rumit, Wayang Kulit merupakan salah satu warisan budaya yang paling berharga dan penuh warna dari Indonesia. Pertunjukan ini tidak hanya menawarkan hiburan, tetapi juga sarat dengan nilai-nilai budaya, moral, dan spiritual yang mendalam.

Secara harfiah, "wayang" berarti "bayangan" dalam bahasa Jawa, dan "kulit" merujuk pada bahan yang digunakan untuk membuat boneka. Boneka-boneka ini terbuat dari kulit sapi yang dipotong dan dipahat dengan cermat untuk menciptakan berbagai bentuk karakter. Setiap boneka memiliki desain yang unik dan penuh warna, sering dihiasi dengan hiasan berkilau dan detail yang mencerminkan kepribadian dan status karakter dalam cerita.`,
                text2: '',
                text3: '',

                longTitle:``,
                longText:``,

                titleNumber1: '',
                textNumber1: '',

                titleNumber2: '',
                textNumber2: '',

                titleNumber3: '',
                textNumber3: '',

                titleNumber4: '',
                textNumber4: '',
            },
            {
                // 1
                type:'Arts',
                id: '7',
                title: `Kecak Dance: Harmony of Sound and Movement in a Typical Balinese Performance`,
                location: `A leather puppet performance art originating from Java and Bali. The puppets are made of cowhide, carved in detail and performed behind a screen with light from oil lamps to create shadows.`,
                imageUrl: '/img/decak.png',
                date: 'Sunday, 10 agust 2024',

                text1: `Tari Kecak adalah salah satu bentuk seni pertunjukan yang paling dikenal dari Bali, Indonesia. Pertunjukan ini terkenal karena keunikannya yang memadukan gerakan, suara, dan cerita dalam sebuah penampilan yang memukau. Tari Kecak, sering disebut juga sebagai "Tari Cak," menggabungkan kekuatan suara manusia dan koreografi yang dinamis untuk menciptakan pengalaman yang mendalam dan mengesankan.

Asal-usul Tari Kecak dapat ditelusuri kembali ke tahun 1930-an, ketika seniman Bali, Wayan Limbak, bekerja sama dengan pelukis Jerman, Walter Spies, untuk mengembangkan bentuk tari ini. Kecak pada awalnya terinspirasi dari ritual keagamaan Bali yang disebut "Sanghyang," yang melibatkan tarian trance dan nyanyian tanpa alat musik. Dalam perkembangannya, Tari Kecak menjadi pertunjukan yang lebih terstruktur dengan penambahan elemen dramatis dan naratif.`,
                text2: '',
                text3: '',

                longTitle:``,
                longText:``,

                titleNumber1: '',
                textNumber1: '',

                titleNumber2: '',
                textNumber2: '',

                titleNumber3: '',
                textNumber3: '',

                titleNumber4: '',
                textNumber4: '',
            },
            {
                type:'Arts',
                title: `Saman Dance: The Beauty of Movement and Song from Aceh`,
                location: `Traditional dance from Aceh which is also known as "Saman Dance" or "Serampang Dance". This dance is performed with fast and synchronized body movements, accompanied by singing and hand clapping.`,
                imageUrl: '/img/saman.png',
                id: '6',
                date: 'Sunday, 10 agust 2024',

                text1: `Tari Saman, dikenal juga sebagai "Tari Saman," adalah salah satu tarian tradisional yang paling menonjol dan memukau dari Aceh, Sumatra. Tari ini dikenal karena ritme yang cepat, gerakan tubuh yang sinkron, dan vokal yang harmonis, menjadikannya sebagai salah satu bentuk ekspresi budaya yang paling berharga dan unik dari Indonesia. Tari Saman tidak hanya menarik perhatian karena keindahan visualnya tetapi juga karena kekuatan dan kekompakan yang ditampilkan oleh para penarinya.

Tari Saman awalnya dipertunjukkan dalam konteks ritual keagamaan dan perayaan adat. Tarian ini dilakukan oleh sekelompok pria yang duduk berbaris dan bergerak secara bersamaan, mengikuti irama lagu yang dinyanyikan dengan penuh semangat. Para penari mengenakan pakaian tradisional Aceh yang berwarna cerah, lengkap dengan topi khas yang disebut "blangkon," yang menambah kesan visual dari pertunjukan.

Salah satu elemen yang paling mencolok dari Tari Saman adalah gerakannya yang sangat terkoordinasi dan penuh energi. Penari Saman melakukan gerakan tangan, tubuh, dan kepala secara bersamaan dengan ritme lagu yang dinyanyikan. Gerakan ini melibatkan ketukan tangan, tepukan, dan pergeseran tubuh yang cepat, menciptakan efek visual yang dinamis dan memukau. Para penari juga sering mengubah formasi dengan cepat, menambah elemen kejutan dan keindahan pada pertunjukan.`,
                text2: '',
                text3: '',

                longTitle:``,
                longText:``,

                titleNumber1: '',
                textNumber1: '',

                titleNumber2: '',
                textNumber2: '',

                titleNumber3: '',
                textNumber3: '',

                titleNumber4: '',
                textNumber4: '',
            },

            {
                // 1
                type:'Arts',
                title: `The Timeless Art of Batik: Indonesia's Cultural Masterpiece`,
                location: `Batik, a traditional fabric from Indonesia, is more than just a textile—it's a cultural treasure that embodies the rich heritage and artistic ingenuity of the Indonesian people. With its intricate patterns and deep cultural significance, Batik has become a symbol of Indonesia’s identity and a testament to the nation's artistic prowess.`,
                imageUrl: '/img/model-batik.png',
                id: '5',
                date: 'Sunday, 10 agust 2024',

                text1: `Batik adalah kain tradisional dari Indonesia yang tidak hanya berfungsi sebagai tekstil tetapi juga merupakan harta budaya yang menggambarkan warisan dan kecerdasan artistik rakyat Indonesia. Dengan pola-pola yang rumit dan makna budaya yang mendalam, Batik telah menjadi simbol identitas Indonesia dan bukti kehebatan seni bangsa ini.

Asal-usul Batik dapat ditelusuri kembali ke ribuan tahun yang lalu, dengan teknik pewarnaan dan pembuatan kain yang telah diwariskan dari generasi ke generasi. Batik tradisional menggunakan teknik pewarnaan yang disebut "batik tulis," di mana desain digambar secara manual dengan menggunakan canting (alat untuk mencetak lilin cair) pada kain. Setelah desain digambar, kain direndam dalam pewarna, dan lilin kemudian dicairkan untuk meninggalkan pola yang diinginkan. Teknik ini memerlukan keterampilan dan kesabaran yang tinggi, serta pemahaman mendalam tentang bahan dan warna.`,
                text2: '',
                text3: '',

                longTitle:``,
                longText:``,

                titleNumber1: '',
                textNumber1: '',

                titleNumber2: '',
                textNumber2: '',

                titleNumber3: '',
                textNumber3: '',

                titleNumber4: '',
                textNumber4: '',
            },

            {
                // 1
                type:'Arts',
                title: `Songket: The Luxurious Woven Fabric`,
                location: `Songket is a traditional fabric characterized by its rich texture and metallic threads woven into intricate patterns.`,
                imageUrl: '/img/songket.png',
                id: '4',
                date: 'Sunday, 10 agust 2024',

                text1: `Songket adalah salah satu jenis kain tradisional yang sangat dihargai di Indonesia, terutama di wilayah Sumatra, Bali, dan beberapa daerah di Malaysia. Kain ini dikenal karena tekstur yang kaya dan pola yang rumit, dengan benang metalik yang ditenun dengan indah ke dalam kainnya, menciptakan efek yang berkilau dan mewah. Songket bukan hanya sebuah tekstil, tetapi juga merupakan simbol budaya dan keindahan seni tenun yang mendalam.

Asal-usul Songket dapat ditelusuri kembali ke abad ke-13, dengan pengaruh dari perdagangan dan pertukaran budaya antara Asia Tenggara dan wilayah lainnya. Songket awalnya digunakan oleh kalangan bangsawan dan elit masyarakat, dan sering dipakai dalam acara-acara resmi dan upacara adat. Benang metalik, yang biasanya terbuat dari emas atau perak, ditenun ke dalam kain untuk menambah kilauan dan keanggunan, menjadikannya sangat berharga dan diinginkan.`,
                text2: '',
                text3: '',

                longTitle:``,
                longText:``,

                titleNumber1: '',
                textNumber1: '',

                titleNumber2: '',
                textNumber2: '',

                titleNumber3: '',
                textNumber3: '',

                titleNumber4: '',
                textNumber4: '',
            },
            {
                // 1
                type:'artefacts',
                title: `The Keris: A Sacred Symbol of Indonesian Heritage`,
                location: `The Keris is not merely a weapon; it is a revered cultural artifact that embodies the spiritual and historical essence of Indonesia.`,
                imageUrl: '/img/keris.png',
                id: '10',
                date: 'Sunday, 10 agust 2024',

                text1: `Keris adalah salah satu artefak paling ikonik dan bermakna dalam budaya Indonesia. Senjata tradisional ini tidak hanya dikenal di Indonesia tetapi juga di Malaysia, Brunei, Thailand Selatan, dan Filipina Selatan. Dengan bilah yang sering kali berlekuk-lekuk, keris telah lama dianggap lebih dari sekadar senjata; ia adalah simbol status, kekuatan, spiritualitas, dan seni.
Sejarah keris diperkirakan telah ada sejak lebih dari seribu tahun yang lalu, dengan bukti paling awal ditemukan pada abad ke-9 di Jawa. Meskipun asal usul keris sering dikaitkan dengan pulau Jawa, pengaruh dan penggunaannya menyebar ke berbagai daerah di Nusantara. Pada masa kerajaan-kerajaan kuno seperti Majapahit, keris menjadi bagian penting dari tradisi kerajaan, dan setiap raja atau pemimpin memiliki keris sebagai simbol kekuasaan dan otoritas mereka.`,
                text2: ``,
                text3: '',
            
                longTitle:``,
                longText:`Keris dianggap sebagai bagian tak terpisahkan dari budaya Jawa, dan setiap keris yang dibuat memiliki cerita serta makna yang mendalam. Pembuat keris, yang disebut "empuh," tidak hanya pandai dalam teknik metalurgi tetapi juga dianggap memiliki pengetahuan spiritual yang tinggi. Proses pembuatan keris melibatkan ritual khusus, dan pembuatannya bisa memakan waktu berminggu-minggu hingga berbulan-bulan. Dalam tradisi Jawa, pembuatan keris melibatkan berbagai tahapan, mulai dari pemilihan bahan, penempaan, hingga penyucian bilah keris sebelum akhirnya diakui sebagai keris yang sakral.`,

                titleNumber1: 'Makna dan Simbolisme',
                textNumber1: 'Keris tidak hanya dilihat sebagai senjata fisik tetapi juga sebagai simbol spiritual dan mistik. Banyak yang percaya bahwa keris memiliki kekuatan magis yang bisa membawa keberuntungan, melindungi pemiliknya, atau bahkan mendatangkan malapetaka. Dalam budaya Jawa, keris sering dianggap memiliki "jiwa" atau "nyawa," dan oleh karena itu, keris harus diperlakukan dengan penuh hormat. Keris juga sering digunakan dalam berbagai upacara adat dan ritual, seperti upacara pernikahan, upacara kematian, dan upacara penobatan.',

                titleNumber2: '',
                textNumber2: 'Bilah keris biasanya memiliki lekukan yang disebut "luk," dan jumlah lekukan ini sering kali memiliki makna tersendiri. Keris dengan luk ganjil, seperti 3, 5, atau 7, dianggap memiliki kekuatan yang berbeda dengan keris yang memiliki luk genap. Selain itu, hiasan pada gagang dan sarung keris juga penuh dengan simbolisme, sering kali mencerminkan status sosial pemiliknya atau cerita tertentu dari budaya setempat.',

                titleNumber3: 'Teknik Pembuatan dan Material',
                textNumber3: 'Proses pembuatan keris adalah seni yang rumit dan melibatkan banyak langkah yang membutuhkan keahlian tinggi. Keris biasanya dibuat dari campuran besi, baja, dan logam lainnya seperti nikel atau perak. Salah satu teknik khas dalam pembuatan keris adalah "pamor," yaitu pola yang muncul di permukaan bilah keris akibat penggabungan berbagai logam. Pola pamor ini tidak hanya menambah keindahan keris tetapi juga dipercaya memiliki kekuatan magis.',

                titleNumber4: '',
                textNumber4: 'Setiap keris memiliki pamor yang unik, dan pola ini dapat mencerminkan nasib, kekuatan, dan karakteristik tertentu. Misalnya, pamor "Banyu Mili" yang menyerupai aliran air dianggap membawa kesejahteraan, sedangkan pamor "Udan Mas" yang menyerupai tetesan hujan emas dianggap membawa rezeki berlimpah.',
            },
            {
                // 1
                type:'artefacts',
                title: `Arfetak: The Unique and Enduring Craft of Indonesian Artistry`,
                location: `Arfetak is a term that signifies a special category of traditional Indonesian crafts, showcasing the nation's rich and diverse artistic heritage.`,
                imageUrl: '/img/artefak.png',
                id: '9',
                date: 'Sunday, 10 agust 2024',

                text1: `Arfetak adalah istilah yang merujuk pada kategori khusus kerajinan tradisional Indonesia, yang mencerminkan kekayaan dan keberagaman warisan artistik bangsa. Istilah ini menggambarkan beragam kerajinan tangan yang dibuat dengan keterampilan tinggi dan menggunakan teknik tradisional, mencerminkan nilai-nilai budaya dan estetika lokal yang mendalam.

Kerajinan Arfetak mencakup berbagai bentuk seni dan kerajinan tangan, mulai dari tekstil, ukiran, anyaman, hingga barang-barang logam dan keramik. Setiap jenis kerajinan dalam kategori ini memiliki ciri khas yang unik, tergantung pada wilayah, bahan, dan teknik yang digunakan. Keindahan dan kompleksitas dari kerajinan ini tidak hanya terletak pada hasil akhir, tetapi juga dalam proses pembuatannya yang sering kali melibatkan keterampilan dan tradisi yang telah diwariskan selama bertahun-tahun.`,
                text2: '',
                text3: '',

                longTitle:``,
                longText:``,

                titleNumber1: '1. Keris',
                textNumber1: 'Keris adalah senjata tradisional Indonesia yang dikenal dengan bentuk bilahnya yang berlekuk-lekuk. Keris bukan hanya berfungsi sebagai senjata, tetapi juga memiliki makna spiritual dan simbolis yang mendalam. Di beberapa daerah seperti Jawa, Bali, dan Sumatra, keris dianggap sebagai pusaka yang memiliki kekuatan magis. Keris sering digunakan dalam upacara adat, sebagai lambang kekuasaan, dan sebagai warisan yang diturunkan dari generasi ke generasi. Setiap keris dibuat dengan teknik dan detail yang sangat rumit, dan proses pembuatannya bisa memakan waktu berbulan-bulan.',

                titleNumber2: '2. Wayang Kulit',
                textNumber2: 'Wayang Kulit adalah seni pertunjukan boneka bayangan yang berasal dari pulau Jawa. Wayang Kulit terbuat dari kulit sapi atau kerbau yang diukir dengan detail dan dipoles dengan warna-warna cerah. Pertunjukan Wayang Kulit biasanya dimainkan oleh seorang dalang yang menggerakkan boneka-boneka tersebut di balik layar, dengan pencahayaan dari belakang untuk menciptakan bayangan yang terlihat oleh penonton. Cerita yang disampaikan dalam Wayang Kulit sering kali diambil dari epos-epos besar seperti Mahabharata dan Ramayana, serta mengandung pesan moral yang mendalam.',

                titleNumber3: '3. Batu Prasasti',
                textNumber3: 'Batu Prasasti adalah batu yang diukir dengan tulisan dan sering ditemukan di berbagai situs sejarah di Indonesia, seperti Candi Borobudur dan Candi Prambanan. Prasasti ini biasanya berisi inskripsi dalam bahasa Sanskerta atau Kawi, yang mencatat peristiwa penting, hukum, atau pengumuman yang dikeluarkan oleh raja atau pemimpin setempat. Batu Prasasti tidak hanya menjadi bukti sejarah penting dari masa lalu, tetapi juga memberikan wawasan tentang kehidupan, kepercayaan, dan sistem pemerintahan di masa kerajaan-kerajaan kuno di Indonesia.',

                titleNumber4: '4. Kain Tenun Ikat',
                textNumber4: 'Kain Tenun Ikat adalah kain tradisional Indonesia yang dibuat dengan teknik ikat, di mana benang-benang diwarnai sebelum ditenun menjadi kain. Setiap daerah di Indonesia memiliki motif dan teknik tenun yang berbeda-beda, seperti di Nusa Tenggara Timur, Bali, dan Sumatra. Kain Tenun Ikat sering digunakan dalam upacara adat, sebagai pakaian tradisional, dan sebagai simbol status sosial. Proses pembuatan kain tenun ini sangat kompleks dan membutuhkan keahlian tinggi, menjadikannya salah satu artefak budaya yang sangat bernilai di Indonesia.',
            },
            {
                // 1
                type:`Custom Home`,
                title: `Rumah Adat: The Traditional Houses of Indonesia`,
                location: `Indonesia, with its diverse cultural heritage, boasts an array of traditional houses, each reflecting the unique customs and architectural styles of its various ethnic groups. These traditional houses, or "Rumah Adat,"`,
                imageUrl: '/img/rumah-adat.png',
                id: '12',
                date: 'Sunday, 10 agust 2024',

                text1: `Indonesia, dengan warisan budaya yang sangat beragam, memiliki berbagai jenis rumah tradisional yang mencerminkan adat dan gaya arsitektur unik dari berbagai kelompok etnis. Rumah-rumah adat ini, atau yang dikenal sebagai "Rumah Adat," bukan hanya sekadar tempat tinggal, tetapi juga melambangkan identitas, tradisi, dan nilai-nilai masyarakat yang membangunnya. Setiap rumah adat memiliki ciri khas yang mencerminkan kekayaan budaya dan sejarah lokal, menawarkan pandangan mendalam tentang cara hidup dan kepercayaan masyarakat Indonesia.`,
                text2: '',
                text3: '',

                longTitle:``,
                longText:``,

                titleNumber1: '1. Rumah Gadang (Minangkabau)',
                textNumber1: 'Rumah Gadang adalah rumah adat dari suku Minangkabau di Sumatra Barat. Ciri khas utama dari Rumah Gadang adalah atapnya yang melengkung ke atas dengan bentuk seperti tanduk kerbau. Struktur ini tidak hanya memiliki fungsi estetika, tetapi juga simbolik, melambangkan kekuatan dan status sosial. Rumah Gadang biasanya dibangun dari kayu, dengan ruang tengah yang besar sebagai pusat kegiatan keluarga dan ruangan-ruangan di sekelilingnya untuk tidur dan penyimpanan.',

                titleNumber2: '2. Rumah Joglo (Jawa)',
                textNumber2: 'Rumah Joglo adalah rumah tradisional yang berasal dari Jawa Tengah dan Yogyakarta. Atap Joglo memiliki bentuk yang khas, dengan tiga tingkatan yang melambangkan kehidupan manusia dari dunia luar, dunia tengah, hingga dunia atas. Struktur ini juga sering dihiasi dengan ukiran kayu yang rumit dan simbolis, mencerminkan kehalusan seni dan adat istiadat Jawa. Rumah Joglo biasanya memiliki ruang terbuka di tengah yang digunakan untuk berkumpul dan melakukan berbagai kegiatan keluarga.',

                titleNumber3: '3. Rumah Bali (Bali)',
                textNumber3: 'Rumah adat Bali memiliki arsitektur yang sangat khas dengan elemen-elemen yang mencerminkan filosofi dan kepercayaan Hindu-Bali. Rumah Bali biasanya terdiri dari beberapa bangunan kecil yang dikelilingi oleh halaman terbuka, masing-masing berfungsi untuk tujuan tertentu seperti ruang tidur, ruang keluarga, dan tempat penyimpanan. Atap rumah Bali sering dibuat dari alang-alang, dan rumah ini dirancang untuk menciptakan harmoni dengan lingkungan sekitar.',

                titleNumber4: '4. Rumah Toraja (Sulawesi)',
                textNumber4: 'Rumah adat Toraja, atau yang dikenal dengan sebutan "Tongkonan," memiliki bentuk atap yang mirip dengan kapal, melambangkan perjalanan spiritual dan kehidupan setelah mati. Tongkonan biasanya dicat dengan warna-warna cerah dan dihiasi dengan ukiran yang menceritakan kisah sejarah dan mitologi Toraja. Struktur rumah ini sering digunakan sebagai tempat berkumpul keluarga, serta untuk upacara adat dan ritual.',
            },

        ],
    };

    // Temukan data yang sesuai dengan id dari URL
    const card = cardsData.all.find(card => card.id === id);

    if (card) {
        // Tampilkan data
        document.querySelector('#title').textContent = card.title;
        document.querySelector('#type').textContent = card.type;

        document.querySelector('#date').textContent = card.date;
        document.querySelector('#imageUrl').src = card.imageUrl;
        document.querySelector('#text1').textContent = card.text1;
        document.querySelector('#text2').textContent = card.text2;
        document.querySelector('#text3').textContent = card.text3;
        document.querySelector('#longTitle').textContent = card.longTitle;
        document.querySelector('#longText').textContent = card.longText;




        document.querySelector('#titleNumber1').textContent = card.titleNumber1;
        document.querySelector('#titleNumber2').textContent = card.titleNumber2;
        document.querySelector('#titleNumber3').textContent = card.titleNumber3;
        document.querySelector('#titleNumber4').textContent = card.titleNumber4;
        document.querySelector('#textNumber1').textContent = card.textNumber1;
        document.querySelector('#textNumber2').textContent = card.textNumber2;
        document.querySelector('#textNumber3').textContent = card.textNumber3;
        document.querySelector('#textNumber4').textContent = card.textNumber4;
    } else {
        // Tangani jika id tidak ditemukan
        console.error('Card not found');
        document.querySelector('#title').textContent = 'Data tidak ditemukan';
    }
    // Menangani tombol kembali
    backButton.addEventListener('click', () => {
        window.history.back();
    });
});
