document.addEventListener('DOMContentLoaded', () => {
    const boxButtons = document.querySelectorAll('.btn-img-nav');
    const contentContainer = document.getElementById('partner-container');

    // Data card untuk setiap box
    const imgsData = {
        plane: [{
                code: 'w-10 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493957610467-34a3aa473d36a3c0a52fe884b869d5af.png?tr=dpr-2,q-75,w-29',
            },
            {
                code: 'w-10 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493957701179-a9bd0b6c6abbf6f50623304b52ebdb6f.png?tr=dpr-2,q-75,w-29',
            },
            {
                code: 'w-10 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493958075012-354c11a0dd825316bb720afbf570bcc9.png?tr=dpr-2,q-75,w-29',
            },
            {
                code: 'w-10 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493957794281-5a44ce9c0fa8d98db4b4d1e24b26e9ca.png?tr=dpr-2,q-75,w-29',
            },
            {
                code: 'w-10 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493957495142-61a8f75a0c99cf3bf47265344f3add9a.png?tr=dpr-2,q-75,w-29',
            },
            {
                code: 'w-10 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2020/11/26/1606358981383-acbc6f04b67787a034b22e5b36510fca.png?tr=dpr-2,q-75,w-29',
            },
            {
                code: 'w-10 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493958739960-03aac17d3d10070c07bfb7f0693bcb22.png?tr=dpr-2,q-75,w-29',
            },
            {
                code: 'w-10 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493958043969-1a81b0619c5a5ec4d50ae98eab053a06.png?tr=dpr-2,q-75,w-29',
            },
            {
                code: 'w-10 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493958961356-d7cb4a1f4e99e2081c151ef8b23c8679.png?tr=dpr-2,q-75,w-29',
            },
            {
                code: 'w-10 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493958001312-a747194479c232b1a750c0d6e9c02571.png?tr=dpr-2,q-75,w-29',
            },
            {
                code: 'w-10 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493958120670-6c470b2ee5f038da54918c12c484b28b.png?tr=dpr-2,q-75,w-29',
            },
            {
                code: 'w-10 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2017/08/21/1503303925917-03d4d319777c17c1003f00e6d6b1e4ab.png?tr=dpr-2,q-75,w-29',
            },
            {
                code: 'w-10 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493958856185-8059b962540b4724a8a7153965664c42.png?tr=dpr-2,q-75,w-29',
            },
            {
                code: 'w-10 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493957453730-62b5144ed20a75dd9a749478ff97f308.png?tr=dpr-2,q-75,w-29',
            },
            {
                code: 'w-10 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493957672213-88f7cb44c943614fff87822402280fb5.png?tr=dpr-2,q-75,w-29',
            },
            {
                code: 'w-10 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493958326561-d11389d41d1c4ba66da12ac789dbb8dd.png?tr=dpr-2,q-75,w-29',
            },
            {
                code: 'w-10 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493958248045-7460100ed9c6f4207dec36b9041c3b1b.png?tr=dpr-2,q-75,w-29',
            },
            {
                code: 'w-10 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493957753635-de95987c2c66bb9f2c1253a5e062044e.png?tr=dpr-2,q-75,w-29',
            },
            {
                code: 'w-10 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493958614138-f813511220a59f6fa6909599018fbbd8.png?tr=dpr-2,q-75,w-29',
            },
            {
                code: 'w-10 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493958770177-6d095abcc56ef690a6f6c082c91b0a70.png?tr=dpr-2,q-75,w-29',
            },
            {
                code: 'w-10 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493957961846-4487b3b63a019904c0334f3d54242865.png?tr=dpr-2,q-75,w-29',
            },


        ],
        train: [{
                code: 'w-24 h-14',
                img: 'https://seeklogo.com/images/P/pt-kai-kereta-api-indonesia-2020-logo-C71614B016-seeklogo.com.png',
            },
            {
                code: 'w-24 h-14',
                img: 'https://www.contactcenterworld.com/images/company/Railink-600px-logo.png',
            },
        ],
        travel: [{
                code: 'w-24 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2020/07/08/1594198677974-36f76ce179eddd7b771cfe04413ea907.png?tr=q-75,w-70',
            },
            {
                code: 'w-24 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2018/03/26/1522072046164-c556e120ebdc901cd2f4928d176dc0f7.jpeg?tr=q-75,w-70',
            },
            {
                code: 'w-24 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2018/03/26/1522073558556-745ba6dc91773059f5529e6fde4c6964.jpeg?tr=q-75,w-70',
            },
            {
                code: 'w-24 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2019/06/28/1561693416612-461f3a541960f143e2b6a4d163e07c0f.jpeg?tr=q-75,w-70',
            },
            {
                code: 'w-24 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2018/03/26/1522072095947-c766757a2dd7d95471e5ce23c16dde27.jpeg?tr=q-75,w-70',
            },
            {
                code: 'w-24 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2018/03/26/1522072091761-fe75c2fd8078b811082ab8640cf42576.jpeg?tr=q-75,w-70',
            },
            {
                code: 'w-24 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2018/03/26/1522072138856-80316d57996250ebee8e8e1e7f3fdbac.jpeg?tr=q-75,w-700',
            },
            {
                code: 'w-24 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2018/03/26/1522072161490-986764a64d73b0826e23675824a6a227.jpeg?tr=q-75,w-70',
            },
            {
                code: 'w-24 h-14',
                img: 'https://ik.imagekit.io/tvlk/image/imageResource/2018/03/26/1522073572385-ba43e7b0d7da64e365836835e7ee2f65.jpeg?tr=q-75,w-70',
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
        const img = imgsData[boxId];

        img.forEach(imgData => {
            const cardHtml = ` 
                <img class=" object-contain ${imgData.code} mx-3 my-2" src="${imgData.img}" alt="img">
            `;
            contentContainer.insertAdjacentHTML('beforeend', cardHtml);
        });
    }

    updateContent('plane'); // Menampilkan gambar dari kategori 'plane' secara default
});


document.getElementById('plane').addEventListener('click', () => {
    let isi = document.getElementById('content-daftar');
    isi.innerHTML = `             <div>
                                <div class=" flex justify-between">
                                    <div class="mr-3">
                                        <p class="sm:text-sm text-xs ">From</p>
                                        <div class="flex items-cente border-b border-gray-500   md:w-full sm:w-[250px] w-[150px]">
                                            <p class="pl-2 text-center py-2 sm:text-xl text-lg">🛫</p>
                                            <input type="text" placeholder="Indonesia/Jakarta"
                                                class="placeholder-gray-500 py-2 sm:placeholder:text-base placeholder:text-sm pr-4 border-none font-trip-r bg-transparent text-black  sm:w-[300px] w-[140px] focus:ring-0 focus:ring-transparent" />
                                        </div>
                                    </div>
                                    <div class="">
                                        <p class="sm:text-sm text-xs">To</p>
                                        <div class="flex items-cente border-b border-gray-500    md:w-full sm:w-[250px] w-[150px] ">
                                            <p class="pl-2 text-center py-2 sm:text-xl text-lg">🛬</p>
                                            <input type="text" placeholder="Indonesia/Bandung"
                                                class="placeholder-gray-500 py-2 pr-4 sm:placeholder:text-base placeholder:text-sm  border-none font-trip-r bg-transparent text-black sm:w-[300px] w-[140px] focus:ring-0 focus:ring-transparent" />
                                        </div>
                                    </div>
                                </div>
                                <div class=" md:flex md:flex-row flex-col  mt-4">
                                    <div class="flex">
                                        <div class="mr-3">
                                            <p class="sm:text-sm text-xs ">Departure date</p>
                                            <div class="flex items-cente border-b border-gray-500   md:w-[200px] sm:w-[440px] w-[260px] ">
                                                <p class="pl-2 text-center py-2 text-xl">🗓️</p>
                                                <input type="date"
                                                    class=" py-2 pr-4 border-none font-trip-r bg-transparent text-gray-500   focus:ring-0 focus:ring-transparent" />
                                            </div>
                                        </div>
                                        <div class="mr-3 flex items-cente   w-[120px]">
                                            <input type="checkbox"
                                                class=" py-2 pr-4  font-trip-r bg-transparent text-gray-500   focus:ring-0 focus:ring-transparent" />
                                            <p class="sm:text-sm text-xs ml-2">Return Back</p>
                                        </div>

                                    </div>
      
                                    <div class="flex  md:mt-0 mt-4">
            
                                        <div class="md:w-[150px] sm:w-full w-[w-100px] mr-3">
                                            <p class="sm:text-sm text-xs">Adult</p>
                                            <div class="flex items-cente border-b border-gray-500     ">
                                                <p class="pl-2 text-center py-2 text-xl">👨🏻</p>
                                                <input type="number" placeholder="1"
                                                    class="placeholder-gray-500 sm:w-[150px] w-[135px] sm:placeholder:text-base placeholder:text-sm  py-2 pr-4 border-none font-trip-r bg-transparent text-black   focus:ring-0 focus:ring-transparent" />
                                            </div>
                                        </div>
                                        <div class="md:w-[150px] sm:w-full w-[w-100px]  ">
                                            <p class="sm:text-sm text-xs">Kids</p>
                                            <div class="flex items-cente border-b border-gray-500  ">
                                                <p class="pl-2 text-center py-2 text-xl">👶🏻</p>
                                                <input type="number" placeholder="0"
                                                    class="placeholder-gray-500 sm:w-[150px] w-[135px] sm:placeholder:text-base placeholder:text-sm  py-2 pr-4 border-none font-trip-r bg-transparent text-black  focus:ring-0 focus:ring-transparent" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class=" flex justify-between items-center mt-4">
                                    <div class="mr-3">
                                        <p class="text-sm ">Seat Class</p>
                                        <div class="flex items-center border-b border-gray-500 font-trip-r sm:w-full w-[140px]">
    <p class="pl-2 text-center py-2 text-xl mr-4">💺</p>
    <div class="relative">
        <select id="small"
            class="border-none bg-transparent focus:ring-0 focus:ring-transparent focus:outline-none text-gray-500 py-2 pr-4 rounded">
            <option value="E" selected>Ekonomi</option>
            <option value="PE">Premium Ekonomi</option>
            <option value="B">Business</option>
            <option value="FC">First Class</option>
        </select>
    </div>
</div>
                                    </div>
                                    <div class="mt-5" >
                                    <button class="rounded-lg py-2 px-10 w-[] bg-brown sm:text-base text-sm  text-white/80">🔍 Search Flight</button>
                                    </div>
                                </div>
        
                            </div>`
})

document.getElementById('train').addEventListener('click', () => {
    let isi = document.getElementById('content-daftar');
    isi.innerHTML = `
                             <div>
                                <div class=" flex justify-between">
                                    <div class="mr-3">
                                        <p class="sm:text-sm text-xs ">From</p>
                                        <div class="flex items-cente border-b border-gray-500   md:w-full sm:w-[250px] w-[150px]">
                                            <p class="pl-2 text-center py-2 sm:text-xl text-lg inline-block transform -scale-x-100">🚝</p>
                                            <input type="text" placeholder="Indonesia/Jakarta"
                                                class="placeholder-gray-500 py-2 sm:placeholder:text-base placeholder:text-sm pr-4 border-none font-trip-r bg-transparent text-black  sm:w-[300px] w-[140px] focus:ring-0 focus:ring-transparent" />
                                        </div>
                                    </div>
                                    <div class="">
                                        <p class="sm:text-sm text-xs">To</p>
                                        <div class="flex items-cente border-b border-gray-500    md:w-full sm:w-[250px] w-[150px] ">
                                            <p class="pl-2 text-center py-2 sm:text-xl text-lg">🚝</p>
                                            <input type="text" placeholder="Indonesia/Bandung"
                                                class="placeholder-gray-500 py-2 pr-4 sm:placeholder:text-base placeholder:text-sm  border-none font-trip-r bg-transparent text-black sm:w-[300px] w-[140px] focus:ring-0 focus:ring-transparent" />
                                        </div>
                                    </div>
                                </div>
                                <div class=" md:flex md:flex-row flex-col  mt-4">
                                    <div class="flex">
                                        <div class="mr-3">
                                            <p class="sm:text-sm text-xs ">Departure date</p>
                                            <div class="flex items-cente border-b border-gray-500   md:w-[200px] sm:w-[440px] w-[260px] ">
                                                <p class="pl-2 text-center py-2 text-xl">🗓️</p>
                                                <input type="date"
                                                    class=" py-2 pr-4 border-none font-trip-r bg-transparent text-gray-500   focus:ring-0 focus:ring-transparent" />
                                            </div>
                                        </div>
                                        <div class="mr-3 flex items-cente   w-[120px]">
                                            <input type="checkbox"
                                                class=" py-2 pr-4  font-trip-r bg-transparent text-gray-500   focus:ring-0 focus:ring-transparent" />
                                            <p class="sm:text-sm text-xs ml-2">Return Back</p>
                                        </div>

                                    </div>
      
                                    <div class="flex  md:mt-0 mt-4">
            
                                        <div class="md:w-[150px] sm:w-full w-[w-100px] mr-3">
                                            <p class="sm:text-sm text-xs">Adult</p>
                                            <div class="flex items-cente border-b border-gray-500     ">
                                                <p class="pl-2 text-center py-2 text-xl">👨🏻</p>
                                                <input type="number" placeholder="1"
                                                    class="placeholder-gray-500 sm:w-[150px] w-[135px] sm:placeholder:text-base placeholder:text-sm  py-2 pr-4 border-none font-trip-r bg-transparent text-black   focus:ring-0 focus:ring-transparent" />
                                            </div>
                                        </div>
                                        <div class="md:w-[150px] sm:w-full w-[w-100px]  ">
                                            <p class="sm:text-sm text-xs">Kids</p>
                                            <div class="flex items-cente border-b border-gray-500  ">
                                                <p class="pl-2 text-center py-2 text-xl">👶🏻</p>
                                                <input type="number" placeholder="0"
                                                    class="placeholder-gray-500 sm:w-[150px] w-[135px] sm:placeholder:text-base placeholder:text-sm  py-2 pr-4 border-none font-trip-r bg-transparent text-black  focus:ring-0 focus:ring-transparent" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class=" flex justify-between items-center mt-4">
                                    <div class="mr-3">
                                        <p class="text-sm ">Seat Class</p>
                                        <div class="flex items-center border-b border-gray-500 font-trip-r sm:w-full w-[140px]">
    <p class="pl-2 text-center py-2 text-xl mr-4">💺</p>
    <div class="relative">
        <select id="small"
            class="border-none bg-transparent focus:ring-0 focus:ring-transparent focus:outline-none text-gray-500 py-2 pr-4 rounded">
            <option value="E" selected>Ekonomi</option>
            <option value="PE">Premium Ekonomi</option>
            <option value="B">Business</option>
            <option value="FC">First Class</option>
        </select>
    </div>
</div>
                                    </div>
                                    <div class="mt-5" >
                                    <button class="rounded-lg py-2 px-10 w-[] bg-brown sm:text-base text-sm  text-white/80">🔍 Search Train</button>
                                    </div>
                                </div>
        
                            </div>
            `
})

document.getElementById('travel').addEventListener('click', () => {
    let isi = document.getElementById('content-daftar');
    isi.innerHTML = `    
                    <div>
                    <div class=" flex justify-between">
                        <div class="mr-3">
                            <p class="sm:text-sm text-xs ">From</p>
                            <div class="flex items-cente border-b border-gray-500   md:w-full sm:w-[250px] w-[150px]">
                                <p class="pl-2 text-center py-2 sm:text-xl text-lg inline-block transform -scale-x-100">🚌</p>
                                <input type="text" placeholder="Indonesia/Jakarta"
                                    class="placeholder-gray-500 py-2 sm:placeholder:text-base placeholder:text-sm pr-4 border-none font-trip-r bg-transparent text-black  sm:w-[300px] w-[140px] focus:ring-0 focus:ring-transparent" />
                            </div>
                        </div>
                        <div class="">
                            <p class="sm:text-sm text-xs">To</p>
                            <div class="flex items-cente border-b border-gray-500    md:w-full sm:w-[250px] w-[150px] ">
                                <p class="pl-2 text-center py-2 sm:text-xl text-lg ">🚌</p>
                                <input type="text" placeholder="Indonesia/Bandung"
                                    class="placeholder-gray-500 py-2 pr-4 sm:placeholder:text-base placeholder:text-sm  border-none font-trip-r bg-transparent text-black sm:w-[300px] w-[140px] focus:ring-0 focus:ring-transparent" />
                            </div>
                        </div>
                    </div>
                    <div class=" md:flex md:flex-row flex-col  mt-4">
                        <div class="flex">
                            <div class="mr-3">
                                <p class="sm:text-sm text-xs ">Departure date</p>
                                <div class="flex items-cente border-b border-gray-500   md:w-[200px] sm:w-[440px] w-[260px] ">
                                    <p class="pl-2 text-center py-2 text-xl">🗓️</p>
                                    <input type="date"
                                        class=" py-2 pr-4 border-none font-trip-r bg-transparent text-gray-500   focus:ring-0 focus:ring-transparent" />
                                </div>
                            </div>
                            <div class="mr-3 flex items-cente   w-[120px]">
                                <input type="checkbox"
                                    class=" py-2 pr-4  font-trip-r bg-transparent text-gray-500   focus:ring-0 focus:ring-transparent" />
                                <p class="sm:text-sm text-xs ml-2">Return Back</p>
                            </div>

                        </div>

                        <div class="flex  md:mt-0 mt-4">

                            <div class="md:w-[150px] sm:w-full w-[w-100px] mr-3">
                                <p class="sm:text-sm text-xs">Adult</p>
                                <div class="flex items-cente border-b border-gray-500     ">
                                    <p class="pl-2 text-center py-2 text-xl">👨🏻</p>
                                    <input type="number" placeholder="1"
                                        class="placeholder-gray-500 sm:w-[150px] w-[135px] sm:placeholder:text-base placeholder:text-sm  py-2 pr-4 border-none font-trip-r bg-transparent text-black   focus:ring-0 focus:ring-transparent" />
                                </div>
                            </div>
                            <div class="md:w-[150px] sm:w-full w-[w-100px]  ">
                                <p class="sm:text-sm text-xs">Kids</p>
                                <div class="flex items-cente border-b border-gray-500  ">
                                    <p class="pl-2 text-center py-2 text-xl">👶🏻</p>
                                    <input type="number" placeholder="0"
                                        class="placeholder-gray-500 sm:w-[150px] w-[135px] sm:placeholder:text-base placeholder:text-sm  py-2 pr-4 border-none font-trip-r bg-transparent text-black  focus:ring-0 focus:ring-transparent" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" flex justify-between items-center mt-4">
                        <div class="mr-3">
                            <p class="text-sm ">Seat Class</p>
                            <div class="flex items-center border-b border-gray-500 font-trip-r sm:w-full w-[140px]">
    <p class="pl-2 text-center py-2 text-xl mr-4">💺</p>
    <div class="relative">
        <select id="small"
            class="border-none bg-transparent focus:ring-0 focus:ring-transparent focus:outline-none text-gray-500 py-2 pr-4 rounded">
            <option value="E" selected>Ekonomi</option>
            <option value="PE">Premium Ekonomi</option>
            <option value="B">Business</option>
            <option value="FC">First Class</option>
        </select>
    </div>
</div>
                        </div>
                        <div class="mt-5" >
                        <button class="rounded-lg py-2 px-10 w-[] bg-brown sm:text-base text-sm  text-white/80">🔍 Search Travel</button>
                        </div>
                    </div>

                </div>
            `
})