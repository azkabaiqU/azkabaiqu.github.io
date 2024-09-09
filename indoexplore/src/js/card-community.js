document.addEventListener('DOMContentLoaded', () => {
    const boxButtons = document.querySelectorAll('.navbar-btn'); // tombol navnya(1++)
    const contentContainer = document.getElementById('container-card'); // container-card n ya

    // Data card untuk setiap box
    const cardsData = {
        all: [{
                pfp: `https://id-static.rti.org.tw/assets/thumbnails/2015/05/07/20150507000111M.jpg`,
                name: 'Teresa Teng',
                date: '08 Mei 2022',
                title: `u need sleep for your healty`,
                desc: `honestly im not her, i just her fans, btw i like her song hehe, oh and i dont want talk about accommodation, cz its too nice for talk about it `,
                img: ``,
                like: '823.232',
                unlike: '92'
            },


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
                pfp: 'https://i.pinimg.com/736x/75/1a/44/751a4438fd104e2681a5c8b2db89e026.jpg',
                name: 'No Ae Seol',
                date: '15 July 2023',
                title: 'Yum Yum',
                desc: `As a tourist from Korea, I just had an amazing culinary adventure in Indonesia. One of the most memorable experiences was when I tried seblak for the first time. It was so mouth-watering, with its spicy seasoning and unique texture. I literally couldn’t stop eating it! Although I was hesitant at first, seblak turned out to be so delicious that I finished a lot of portions. This is one of those foods that I will always miss to anyone and I highly recommend it to anyone visiting Indonesia. Seblak has stolen my heart!`,
                img: ``,
                like: '129.232',
                unlike: '0'
            },
            {
                pfp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLZFEyDclnDIi6dpnFvLdUrqTlMpeb5wBPrw&s',
                name: 'Lee Su-ung',
                date: '11 August 2022',
                title: 'eat a lot to be strong!',
                desc: `eat a lot to be strong, and be strong so you can help other people, btw what I like the most is rib soup`,
                img: `<img class="w-full h-full object-cover" src="https://cdn0-production-images-kly.akamaized.net/PuPtBEpsRO8Ex1TqnAk4JzsRs3g=/1200x675/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3126596/original/024930300_1589347291-masakan-indonesia-featured-212892.jpg" alt="img">`,

                like: '2.032',
                unlike: '34'
            },
            {
                pfp: `https://imgsrv2.voi.id/IXwZh5jo9hpisM62-kz6q4gwJHw2KpC4LGwbLGSFe5Y/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8zOTM1NjYvMjAyNDA2MjcxMjMwLW1haW4uY3JvcHBlZF8xNzE5NDY2MjYwLmpwZWc.jpg`,
                name: 'Dept',
                date: '11 September 2022',
                title: `sleep for dream, dream for new idea, idea for my job :D`,
                desc: `when i do consert in jakarta, i need sleep, and i find a hotel the name is Hotel Tentrem Yogyakarta, u should try :D `,
                img: `<img class="w-full h-full object-cover" src="https://images.trvl-media.com/lodging/7000000/6180000/6171600/6171593/433f8469.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill" alt="img">`,

                like: '907',
                unlike: '4'
            },
            {
                pfp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTr03Him0IKQopTxoSiFyIFqgG_WzizRU8nM8vyMr_Yr-Wt3iWEoFWMFw&s=10',
                name: 'Park Yu-ri',
                date: '11 August 2022',
                title: 'ahhh i really like satay, you guys should try it when you travel to indonesia!',
                desc: `Satay is one of those delicacies that always makes me smile, even on the simplest of days. With its rich flavors and unique way of serving, satay is always my first choice. Every skewer brings nostalgia and simple happiness. Through this blog, I want to share my love for satay, exploring the different variations and the best places to enjoy it. Hopefully you can feel the same pleasure and find your own favorite satay.`,
                img: `<img class="w-full h-full object-cover" src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/these-3-juicy-indonesian-satay-recipes-will-comfort-your-palate/i2.jpg" alt="img">`,

                like: '2.032',
                unlike: '34'
            },

   
            {
                pfp: `https://d6ehjqrqtzoun.cloudfront.net/3c6eec45-ebc3-4b52-931b-2e07060c9195.png`,
                name: 'Seo Ah Yi',
                date: '12 september 2023',
                title: `Love for Bandung`,
                desc: `Bandung does have an attraction that makes the heart always want to come back. From the cool atmosphere, the view of the mountains that spoil the eyes, to the delicious culinary that is addictive, all of them make Bandung never boring. I should have invited Cha Hyun Soo, and Seo Yi-kyeong`,
                img: ``,
                like: '199.999',
                unlike: '0'
            },

            {
                pfp: 'data:image/webp;base64,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',
                name: 'Pyeon Sang Wook',
                date: '12 september 2022',
                title: `hmmm nice ig`,
                desc: `after do my task, i need entertainment `,
                img: ``,
                like: '907',
                unlike: '4'
            },
            {
                pfp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7l4FwfiDdM4qZrhi2od2RDirVhfhDFm87g&s',
                name: 'Kim Yeong-su',
                date: '12 september 2022',
                title: `very fun`,
                desc: `i hope i can play with my sister :)`,
                img: ``,

                like: '10.231',
                unlike: '0'
            },
            {
                pfp: 'data:image/webp;base64,UklGRjgFAABXRUJQVlA4ICwFAAAwJACdASqFAJsAPoU8mUelI6KhLNcaYKAQiWUG+IaUMYQAIIOKXD91yY93veQB2+9gSivxG5q6qudf/8WFIIImz66G1ezcdgc5nPdEL/f75GR28j2G6Q6NI5SoF0rfTd8bFNtqrj/tkWAex3TwCKneGH8Ed2Hz+MG4NnHzbqvWwE8ho8aC82MM3AuHxD0lBgt6sXk/8573Q4hBq2tB1ipdwnbdk6gR90XSVdTq4st0FGi/rakFJGF+Pb/s2zxMfLBSt8VGdQKZSE/ew4SfYJvDgDn7lspxi3aDTLaDtOfhv3R/KCxuYqLFdY7VO/ZmYmH62o+Y0nGBTFysKmmAcCRfY2cpVIbup2C/t0EdNLe/+JgHYWdrp3m7c3tYCogUUSyt1mykA8WIphEAAP76iOa9e7+LjuhYBJ53xaY2WOGAvh0l080aXZutxGgz+e15bc2ZfnsmZekn4b2hVLX9xu9uh7h8NSonDjZM1p1slAI2W8XjgqrdQutNUbh4ySagjS+4Qj7Zj5umXUOWVhvB9SWx0jpC8Z9vLFfoPqUiG0RWxDvBVMn3HOxKprNO5tMwbKxwMcGZNEdMkuEf5MMZjSxQaw7c/SxDHnVEfICScM3uE9Mtt/slnKnmfDgr7hKil2NF/hc0FpHnikbDSjv57BGD0hgPmaNTKMwB6efxfMZBc9EqppVdm+jIxnHOxX9k+hllAX/iabR/GytWqGjhnWTDnE86vOMda0zzMZY6h1CUQODEQYhw2oEtFjc86cmgqluccYlnWSwoEqyY64bgjS9bwC+AuZ0lnHycbZ5FLT7iqo/NF/vTuGpDIaiGb6awGb2NJmebAKk6wwJssmGyKHxXp0cutPio5/C4k2B8BPTp5/qsO78i0Ke6EQbhh9/U8nnERWs5WvWEtHSSYsvjz3D7DCKiQOLe6TiQnmwdL8WjrOj94vSJKL6xOrpyS0AwMyvOWUy2KovbxctTuTd2jJ7+Z27MZ81aIOFV4CBIKFaRABr3F0Po8RPmJ4H56f15Ou3wBmQ/QUrjYeTCkm6fBRcNTu55OjZeLkaqBXcx2MMcNmJunXvHvOwD942J5yqXoM/wwtBmMn4PaCgipEfZb1bpJ85wV0MhHz58pkhSAjJ3KTJBwYmjssOTXN80VG0/+68iYXYGAcpabl+DD1QEfpkvoU4zodtjS8awzuWC60YBh/6gk3KboLjACMtIcUb1BK75FeZImCzu9tvsjkYVOmTeYd9tRnQQo42OKfCK5i0Ee8qITOUhYbez7PuR107Ev+dwva852nYlpZiYuF9cj/gB92eGrnBm5Bm+Zikb0juRkUew7Cw/Ka9NyK8Qb07QFIrPYsprVhj+bYfLmkD3io9hY/x1gEAomvyDi59r30Ad9+MZZXNE6u/2UqNLhBrcPhmpzBlnEdtoYhbJVrUPCRoWlQjwOq+XgM6wKXjMmhDnSOCr63B+6IG8xqVOieCXaPj7qV6UN9ssxruYS++ylDZIgMr6qTdJEx9qPGg2XvRloa0jHh2913FZnSimKUenj1QAUUD1eGaguojY2CKcugDXRiTCnCCVT9uFC0ncE51S+HxrFKAd4NVdydwnCPxxtzjusr/NRc2kEnasCCC2xmtf4JbW3uWPeG03rLQAC/hv+ZapoIwWsM3tygHBCm0Mdg6ail7IaAz7g90QI3lcicVmOBZ8bjqiCmnxKLUIoiq94H0+rnhHvB56Cu97jtcMjrxyYG3tnoY+bzntiDZMGws4Azq8u46lSWET0AAA',
                name: 'Cha Hyun Soo',
                date: '03 maret 2022',
                title: `it's so cold here`,
                desc: `I did Adventure Time in Central Sulawesi, at first I was confused about what to do in Indonesia, then I found a website for travel, and I looked at the travel section and accidentally clicked on buy tickets for entertainment Adventure Time in Central Sulawesi, at first I panicked, OMGG!!, okay I came to the place because I had already bought the ticket, huhu, even though I didn't want to go there, but..., eh it turns out it's fun here, even though it's very cold 🥶🥶🥶`,
                img: ``,

                like: '1.002',
                unlike: '20'
            },
            {
                pfp: `https://d6ehjqrqtzoun.cloudfront.net/3c6eec45-ebc3-4b52-931b-2e07060c9195.png`,
                name: 'Seo Ah Yi',
                date: '12 september 2023',
                title: `Love for Bandung`,
                desc: `Bandung does have an attraction that makes the heart always want to come back. From the cool atmosphere, the view of the mountains that spoil the eyes, to the delicious culinary that is addictive, all of them make Bandung never boring. I should have invited Cha Hyun Soo, and Seo Yi-kyeong`,
                img: ``,
                like: '199.999',
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
        ],
        destination: [{
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

        ],
        accommodation: [{
                pfp: `https://id-static.rti.org.tw/assets/thumbnails/2015/05/07/20150507000111M.jpg`,
                name: 'Teresa Teng',
                date: '08 Mei 2022',
                title: `u need sleep for your healty`,
                desc: `honestly im not her, i just her fans, btw i like her song hehe, oh and i dont want talk about accommodation, cz its too nice for talk about it `,
                img: ``,
                like: '9.512',
                unlike: '92'
            },
            {
                pfp: `https://imgsrv2.voi.id/IXwZh5jo9hpisM62-kz6q4gwJHw2KpC4LGwbLGSFe5Y/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8zOTM1NjYvMjAyNDA2MjcxMjMwLW1haW4uY3JvcHBlZF8xNzE5NDY2MjYwLmpwZWc.jpg`,
                name: 'Dept',
                date: '11 September 2022',
                title: `sleep for dream, dream for new idea, idea for my job :D`,
                desc: `when i do consert in jakarta, i need sleep, and i find a hotel the name is Hotel Tentrem Yogyakarta, u should try :D `,
                img: `<img class="w-full h-full object-cover" src="https://images.trvl-media.com/lodging/7000000/6180000/6171600/6171593/433f8469.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill" alt="img">`,

                like: '907',
                unlike: '4'
            },

        ],
        entertainment: [{
                pfp: 'data:image/webp;base64,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',
                name: 'Pyeon Sang Wook',
                date: '12 september 2022',
                title: `hmmm nice ig`,
                desc: `after do my task, i need entertainment `,
                img: ``,
                like: '907',
                unlike: '4'
            },
            {
                pfp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7l4FwfiDdM4qZrhi2od2RDirVhfhDFm87g&s',
                name: 'Kim Yeong-su',
                date: '12 september 2022',
                title: `very fun`,
                desc: `i hope i can play with my sister :)`,
                img: ``,

                like: '10.231',
                unlike: '0'
            },
            {
                pfp: 'data:image/webp;base64,UklGRjgFAABXRUJQVlA4ICwFAAAwJACdASqFAJsAPoU8mUelI6KhLNcaYKAQiWUG+IaUMYQAIIOKXD91yY93veQB2+9gSivxG5q6qudf/8WFIIImz66G1ezcdgc5nPdEL/f75GR28j2G6Q6NI5SoF0rfTd8bFNtqrj/tkWAex3TwCKneGH8Ed2Hz+MG4NnHzbqvWwE8ho8aC82MM3AuHxD0lBgt6sXk/8573Q4hBq2tB1ipdwnbdk6gR90XSVdTq4st0FGi/rakFJGF+Pb/s2zxMfLBSt8VGdQKZSE/ew4SfYJvDgDn7lspxi3aDTLaDtOfhv3R/KCxuYqLFdY7VO/ZmYmH62o+Y0nGBTFysKmmAcCRfY2cpVIbup2C/t0EdNLe/+JgHYWdrp3m7c3tYCogUUSyt1mykA8WIphEAAP76iOa9e7+LjuhYBJ53xaY2WOGAvh0l080aXZutxGgz+e15bc2ZfnsmZekn4b2hVLX9xu9uh7h8NSonDjZM1p1slAI2W8XjgqrdQutNUbh4ySagjS+4Qj7Zj5umXUOWVhvB9SWx0jpC8Z9vLFfoPqUiG0RWxDvBVMn3HOxKprNO5tMwbKxwMcGZNEdMkuEf5MMZjSxQaw7c/SxDHnVEfICScM3uE9Mtt/slnKnmfDgr7hKil2NF/hc0FpHnikbDSjv57BGD0hgPmaNTKMwB6efxfMZBc9EqppVdm+jIxnHOxX9k+hllAX/iabR/GytWqGjhnWTDnE86vOMda0zzMZY6h1CUQODEQYhw2oEtFjc86cmgqluccYlnWSwoEqyY64bgjS9bwC+AuZ0lnHycbZ5FLT7iqo/NF/vTuGpDIaiGb6awGb2NJmebAKk6wwJssmGyKHxXp0cutPio5/C4k2B8BPTp5/qsO78i0Ke6EQbhh9/U8nnERWs5WvWEtHSSYsvjz3D7DCKiQOLe6TiQnmwdL8WjrOj94vSJKL6xOrpyS0AwMyvOWUy2KovbxctTuTd2jJ7+Z27MZ81aIOFV4CBIKFaRABr3F0Po8RPmJ4H56f15Ou3wBmQ/QUrjYeTCkm6fBRcNTu55OjZeLkaqBXcx2MMcNmJunXvHvOwD942J5yqXoM/wwtBmMn4PaCgipEfZb1bpJ85wV0MhHz58pkhSAjJ3KTJBwYmjssOTXN80VG0/+68iYXYGAcpabl+DD1QEfpkvoU4zodtjS8awzuWC60YBh/6gk3KboLjACMtIcUb1BK75FeZImCzu9tvsjkYVOmTeYd9tRnQQo42OKfCK5i0Ee8qITOUhYbez7PuR107Ev+dwva852nYlpZiYuF9cj/gB92eGrnBm5Bm+Zikb0juRkUew7Cw/Ka9NyK8Qb07QFIrPYsprVhj+bYfLmkD3io9hY/x1gEAomvyDi59r30Ad9+MZZXNE6u/2UqNLhBrcPhmpzBlnEdtoYhbJVrUPCRoWlQjwOq+XgM6wKXjMmhDnSOCr63B+6IG8xqVOieCXaPj7qV6UN9ssxruYS++ylDZIgMr6qTdJEx9qPGg2XvRloa0jHh2913FZnSimKUenj1QAUUD1eGaguojY2CKcugDXRiTCnCCVT9uFC0ncE51S+HxrFKAd4NVdydwnCPxxtzjusr/NRc2kEnasCCC2xmtf4JbW3uWPeG03rLQAC/hv+ZapoIwWsM3tygHBCm0Mdg6ail7IaAz7g90QI3lcicVmOBZ8bjqiCmnxKLUIoiq94H0+rnhHvB56Cu97jtcMjrxyYG3tnoY+bzntiDZMGws4Azq8u46lSWET0AAA',
                name: 'Cha Hyun Soo',
                date: '03 maret 2022',
                title: `it's so cold here`,
                desc: `I did Adventure Time in Central Sulawesi, at first I was confused about what to do in Indonesia, then I found a website for travel, and I looked at the travel section and accidentally clicked on buy tickets for entertainment Adventure Time in Central Sulawesi, at first I panicked, OMGG!!, okay I came to the place because I had already bought the ticket, huhu, even though I didn't want to go there, but..., eh it turns out it's fun here, even though it's very cold 🥶🥶🥶`,
                img: ``,

                like: '1.002',
                unlike: '20'
            },
        ],
        food: [{
                pfp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTr03Him0IKQopTxoSiFyIFqgG_WzizRU8nM8vyMr_Yr-Wt3iWEoFWMFw&s=10',
                name: 'Park Yu-ri',
                date: '11 August 2022',
                title: 'ahhh i really like satay, you guys should try it when you travel to indonesia!',
                desc: `Satay is one of those delicacies that always makes me smile, even on the simplest of days. With its rich flavors and unique way of serving, satay is always my first choice. Every skewer brings nostalgia and simple happiness. Through this blog, I want to share my love for satay, exploring the different variations and the best places to enjoy it. Hopefully you can feel the same pleasure and find your own favorite satay.`,
                img: `<img class="w-full h-full object-cover" src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/these-3-juicy-indonesian-satay-recipes-will-comfort-your-palate/i2.jpg" alt="img">`,

                like: '2.032',
                unlike: '34'
            },
            {
                pfp: 'https://i.pinimg.com/736x/75/1a/44/751a4438fd104e2681a5c8b2db89e026.jpg',
                name: 'No Ae Seol',
                date: '15 July 2023',
                title: 'Yum Yum',
                desc: `As a tourist from Korea, I just had an amazing culinary adventure in Indonesia. One of the most memorable experiences was when I tried seblak for the first time. It was so mouth-watering, with its spicy seasoning and unique texture. I literally couldn’t stop eating it! Although I was hesitant at first, seblak turned out to be so delicious that I finished a lot of portions. This is one of those foods that I will always miss to anyone and I highly recommend it to anyone visiting Indonesia. Seblak has stolen my heart!`,
                img: ``,
                like: '129.232',
                unlike: '0'
            },
            {
                pfp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLZFEyDclnDIi6dpnFvLdUrqTlMpeb5wBPrw&s',
                name: 'Lee Su-ung',
                date: '11 August 2022',
                title: 'eat a lot to be strong!',
                desc: `eat a lot to be strong, and be strong so you can help other people, btw what I like the most is rib soup`,
                img: `<img class="w-full h-full object-cover" src="https://cdn0-production-images-kly.akamaized.net/PuPtBEpsRO8Ex1TqnAk4JzsRs3g=/1200x675/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3126596/original/024930300_1589347291-masakan-indonesia-featured-212892.jpg" alt="img">`,

                like: '2.032',
                unlike: '34'
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
            const cardHtml = `

            <div  class="comment-group mt-1.5 bg-white/30 p-5 font-trip-r py-5 rounded-2xl  backdrop-blur-2xl  min-w-[300px]">
            <div class="pfp | w-full flex items-center ">
                <div class="w-8 h-8 overflow-hidden rounded-full"><img
                        class="w-full h-full object-cover"
                        src="${cardData.pfp}"
                        alt=""></div>
                <div class="ml-2 ">
                    <h1 class="text-sm font-trip-m">${cardData.name}</h1>
                    <p class="text-xs">${cardData.date} • Posted </p>
                </div>
            </div>
            <div class="comment-isi mt-4">
                <div>
                    <h1 class="title | text-lg font-trip-m">${cardData.title}</h1>
                </div>
                <div class="desc | max-w-[700px] text-xs ">
                    <p>${cardData.desc}</p>
                </div>
                <div class="img | max-w-[700px] h-full max-h-[350px] overflow-hidden mt-3 rounded-2xl">
                ${cardData.img}
                </div>
            </div>


            <div class="like-unlike | mt-2 w-full">
                <div class="flex space-x-1">
                    <button id=""
                        class=" likeButton | flex items-center space-x-2 px-2 rounded-xl duration-200 text-gray-600 focus:outline-none">
                        <i class="fa fa-thumbs-up fa-2xs"></i>
                        <span id="" class="likeCount text-xs">${cardData.like}</span>
                    </button>

                    <button id=""
                        class=" dislikeButton | flex items-center space-x-2 px-2 rounded-xl duration-200 text-gray-600 focus:outline-none">
                        <i class="fa fa-thumbs-down fa-2xs"></i>
                        <span id="" class="dislikeCount text-xs">${cardData.unlike}</span>
                    </button>
                </div>
            </div>
        </div>
               
                `;
            contentContainer.insertAdjacentHTML('beforeend', cardHtml);
        });
    }
    updateContent('all');
});
// Like and Unlike Buttons
const likeButtons = document.getElementsByClassName('likeButton');
const dislikeButtons = document.getElementsByClassName('dislikeButton');
const likeCounts = document.getElementsByClassName('likeCount');
const dislikeCounts = document.getElementsByClassName('dislikeCount');

// Mengubah angka menjadi nilai integer (menghilangkan koma dan titik)
const parseCount = (count) => parseInt(count.replace(/\./g, ''));

// Menambahkan titik setiap 3 digit untuk format ribuan
const formatCount = (count) => count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


Array.from(likeButtons).forEach((likeButton, index) => {
    let liked = false;
    let disliked = false;

    const dislikeButton = dislikeButtons[index];
    const likeCount = likeCounts[index];
    const dislikeCount = dislikeCounts[index];

    likeButton.addEventListener('click', () => {
        if (liked) {
            liked = false;
            likeButton.classList.remove('text-blue-500');
            likeButton.classList.add('bg-white/100');
            likeButton.classList.remove('bg-blue-200/60');
            likeCount.innerText = formatCount(parseCount(likeCount.innerText) - 1);
        } else {
            liked = true;
            likeButton.classList.add('text-blue-500');
            likeButton.classList.add('bg-blue-200/60');
            likeButton.classList.remove('bg-white/100');
            likeCount.innerText = formatCount(parseCount(likeCount.innerText) + 1);

            if (disliked) {
                disliked = false;
                dislikeButton.classList.remove('text-red-500');
                dislikeButton.classList.remove('bg-red-200/60');
                dislikeCount.innerText = parseInt(dislikeCount.innerText) - 1;
            }
        }
    });

    dislikeButton.addEventListener('click', () => {
        if (disliked) {
            disliked = false;
            dislikeButton.classList.remove('text-red-500');
            dislikeButton.classList.add('bg-white/100');
            dislikeButton.classList.remove('bg-red-200/60');
            dislikeCount.innerText = parseInt(dislikeCount.innerText) - 1;
        } else {
            disliked = true;
            dislikeButton.classList.add('text-red-500');
            dislikeButton.classList.add('bg-red-200/60');
            dislikeButton.classList.remove('bg-white/100');
            dislikeCount.innerText = parseInt(dislikeCount.innerText) + 1;

            if (liked) {
                liked = false;
                likeButton.classList.remove('text-blue-500');
                likeButton.classList.remove('bg-blue-200/60');
                likeCount.innerText = formatCount(parseCount(likeCount.innerText) - 1);
            }
        }
    });
});