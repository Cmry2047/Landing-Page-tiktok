const setupItems = [
            { name: "HP Victus 15 FA1094TX (2024)", category: "Laptop", price: 11500000, image: "https://els.id/wp-content/uploads/2023/09/HP-Victus-15-Mica-Silver-3.png" },
            { name: "Monitor Lenovo LOQ 24-10", category: "Monitor", price: 1719900, image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/28ed03f9727149c0a9b01ae527d2394e~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15582&t=555f072d&ps=933b5bde&shp=c940a200&shcp=9b759fb9&idc=my&from=3376456192", buyLink: "https://vt.tokopedia.com/t/ZS9PPav5FT551-UNFFo/" },
            { name: "Laptop Stand Dreamland", category: "Aksesori", price: 169000, image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/f7d9f8d229f04d579e96e7b2e09531c6~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15582&t=555f072d&ps=933b5bde&shp=c940a200&shcp=9b759fb9&idc=my&from=3376456192", buyLink: "https://vt.tokopedia.com/t/ZS9PPanaAwFaR-EoJwv/" },
            { name: "Mic Maono PD100W", category: "Audio", price: 1090000, image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/f28d392aa93143628c5c1c27c79832f6~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15582&t=555f072d&ps=933b5bde&shp=c940a200&shcp=9b759fb9&idc=my&from=3376456192", buyLink: "https://vt.tokopedia.com/t/ZS9PPaTraBfsU-3qh40/" },
            { name: "Mic Arm Taffstudio", category: "Aksesori audio", price: 93873, image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/19a57b9c5b7d46899eac1dbcbce2ec5d~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15582&t=555f072d&ps=933b5bde&shp=c940a200&shcp=9b759fb9&idc=my&from=3376456192", buyLink: "https://vt.tokopedia.com/t/ZS9PPaEN7xK25-fBuoV/" },
            { name: "Keyboard Noir N1/X", category: "Periferal", price: 1139000, image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/be46f8a4fa2b4030b74ee2f994f64f56~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15582&t=555f072d&ps=933b5bde&shp=c940a200&shcp=9b759fb9&idc=my&from=3376456192", buyLink: "https://vt.tokopedia.com/t/ZS9PPmJgQCMme-75gnp/" },
            { name: "Wristpad Sades Sobi XC2", category: "Periferal", price: 158000, image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/01aa3ca774e342b7926f7944e1b861d6~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15582&t=555f072d&ps=933b5bde&shp=c940a200&shcp=9b759fb9&idc=my&from=3376456192", buyLink: "https://vt.tokopedia.com/t/ZS9PPuYh6Q9Su-GZU5i/" },
            { name: "Mouse Pressplay Spirit", category: "Periferal", price: 339000, image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/92981b495c984cc19b4f44ca336636a7~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15582&t=555f072d&ps=933b5bde&shp=c940a200&shcp=9b759fb9&idc=my&from=3376456192", buyLink: "https://vt.tokopedia.com/t/ZS9PPmdG2HGJa-olL5s/" },
            { name: "Deskmat Rexus KVLAR T10", category: "Periferal", price: 75000, image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/cf2c89b2601a4dd5826fe09512460577~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15582&t=555f072d&ps=933b5bde&shp=c940a200&shcp=9b759fb9&idc=my&from=3376456192", buyLink: "https://vt.tokopedia.com/t/ZS9PPmh6tTC5E-r5U88/" },
            { name: "Controller Fantech WGP13S", category: "Periferal", price: 329000, image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/faf873cf16524fa2a0b1e38ce5151356~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15582&t=555f072d&ps=933b5bde&shp=c940a200&shcp=9b759fb9&idc=my&from=3376456192", buyLink: "https://vt.tokopedia.com/t/ZS9PPmF5AMLaD-nXAJJ/" },
            { name: "Webcam Emeet C60E", category: "Webcam", price: 764100, image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/277fe7ca0a714ddcaaacdd4ff0654a62~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15582&t=555f072d&ps=933b5bde&shp=c940a200&shcp=9b759fb9&idc=my&from=3376456192", buyLink: "https://vt.tokopedia.com/t/ZS9PPm2mSgBLc-YJ0R8/" },
            { name: "Speaker Vivan S2", category: "Audio", price: 295000, image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/fcd53a471ba448d49f4df42d5b75b2a3~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15582&t=555f072d&ps=933b5bde&shp=c940a200&shcp=9b759fb9&idc=my&from=3376456192", buyLink: "https://vt.tokopedia.com/t/ZS9PPud7BrEtK-SOvVq/" },
            { name: "Deskshelf", category: "Meja & penyimpanan", price: 39600, pricePrefix: "Mulai ", priceNote: "Harga pada link untuk variasi 30 x 20 cm.", image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/b2fcf8f135434f29aba2f8a2d88c7055~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15582&t=555f072d&ps=933b5bde&shp=c940a200&shcp=9b759fb9&idc=my&from=3376456192", buyLink: "https://vt.tokopedia.com/t/ZS9PPmy7AgbWn-tkrRt/" },
            { name: "Meja Lesehan 100 x 50 cm", category: "Furnitur", price: 199999, image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/41c1ce3b24124fc684d4af7603cea1e8~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15582&t=555f072d&ps=933b5bde&shp=c940a200&shcp=9b759fb9&idc=my&from=3376456192", buyLink: "https://vt.tokopedia.com/t/ZS9PPmafqWbye-s6vcF/" },
            { name: "Kursi Lesehan GOTO Jumbo", category: "Furnitur", price: 177600, pricePrefix: "Mulai ", priceNote: "Harga pada link untuk ukuran Small; ukuran Jumbo bisa berbeda.", image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/c863165fea7e435897ccbb141201f956~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15582&t=555f072d&ps=933b5bde&shp=c940a200&shcp=9b759fb9&idc=my&from=3376456192", buyLink: "https://vt.tokopedia.com/t/ZS9PPm9PALTqJ-B0PUV/" },
            { name: "Standee Zeta", category: "Dekorasi", price: 14580, image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/9fe02129028b456984b48f4f68b7146c~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15582&t=555f072d&ps=933b5bde&shp=c940a200&shcp=9b759fb9&idc=my&from=3376456192", buyLink: "https://vt.tokopedia.com/t/ZS9PPmCrdvRTP-2PsM7/" },
            { name: "Wallpanel PVC", category: "Dekorasi", price: 24900, priceNote: "Tipe yang aku pakai: A13-167", image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/cf0c92b0ac784c95b2a075a4431af14a~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15582&t=555f072d&ps=933b5bde&shp=c940a200&shcp=9b759fb9&idc=my&from=3376456192", buyLink: "https://vt.tokopedia.com/t/ZS9PPmcj5R8v8-fip5C/" },
            { name: "USB Hub PX UCA50S", category: "Aksesori", price: 131000, image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/b9fdf70cd7be47b5a1c8adbeb1bc7793~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15582&t=555f072d&ps=933b5bde&shp=c940a200&shcp=9b759fb9&idc=my&from=3376456192", buyLink: "https://vt.tokopedia.com/t/ZS9PPms7t9QgQ-p2zcp/" },
            { name: "Amino USB Hub", category: "Aksesori", price: 39800, image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/5178d3791f0a4a93a24d961af84eefe4~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15582&t=555f072d&ps=933b5bde&shp=c940a200&shcp=9b759fb9&idc=my&from=3376456192", buyLink: "https://vt.tokopedia.com/t/ZS9PPmGDRbAeD-wNRvj/" },
            { name: "Lighting TNW", category: "Pencahayaan", price: 129800, image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/4718cb46f2704794951a5d9b8dd58bda~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15582&t=555f072d&ps=933b5bde&shp=c940a200&shcp=9b759fb9&idc=my&from=3376456192", buyLink: "https://vt.tokopedia.com/t/ZS9PPmKMwY1Aw-Bct3P/" },
            { name: "LED Backlight", category: "Pencahayaan", price: 39800, image: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/c19f6d9ca0604422b7bd875f1298f1ce~tplv-aphluv4xwc-resize-webp:800:800.webp?dr=15582&t=555f072d&ps=933b5bde&shp=c940a200&shcp=9b759fb9&idc=my&from=3376456192", buyLink: "https://vt.tokopedia.com/t/ZS9PPuVJwBMQV-F407u/" }
        ];

        
        const gearGrid = document.getElementById('gear-grid');
        gearGrid.innerHTML = setupItems.map((item) => `
            <article class="gear-card rounded-3xl overflow-hidden">
                <img src="${item.image}" alt="${item.name}" class="gear-image w-full" loading="lazy">
                <div class="p-3 sm:p-4">
                    <p class="text-[10px] uppercase tracking-[0.2em] text-[#5082c4] font-semibold">${item.category}</p>
                    <h3 class="font-bold text-sm text-gray-800 mt-1">${item.name}</h3>
                    <p class="text-sm font-semibold text-gray-700 mt-2">${item.pricePrefix || ''}Rp ${item.price.toLocaleString('id-ID')}</p>
                    ${item.priceNote ? `<p class="text-[10px] text-gray-500 mt-1">${item.priceNote}</p>` : ''}
                    ${item.buyLink ? `
                        <a href="${item.buyLink}" target="_blank" rel="noopener noreferrer"
                           class="mt-3 sm:mt-4 flex w-full min-w-0 items-center justify-center gap-1.5 rounded-2xl bg-[#5082c4] px-2 py-2.5 text-center text-xs font-semibold leading-tight text-white whitespace-normal transition-colors sm:py-3">
                            <i class="fas fa-bag-shopping shrink-0" aria-hidden="true"></i>
                            <span class="min-w-0">Lihat link pembelian</span>
                        </a>
                    ` : '<p class="mt-4 text-center text-xs text-gray-400">Link pembelian belum tersedia</p>'}
                </div>
            </article>
        `).join('');

        const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if ('IntersectionObserver' in window && !prefersReducedMotion) {
            gearGrid.classList.add('reveal-enabled');
            const productCards = Array.from(gearGrid.querySelectorAll('.gear-card'));
            const revealQueue = [];
            let revealTimeout = null;

            const revealNextCard = () => {
                revealTimeout = null;
                const card = revealQueue.shift();
                if (!card) return;

                card.classList.add('is-visible');
                if (revealQueue.length) {
                    revealTimeout = window.setTimeout(revealNextCard, 110);
                }
            };

            const productObserver = new IntersectionObserver((entries, observer) => {
                entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => productCards.indexOf(a.target) - productCards.indexOf(b.target))
                    .forEach((entry) => {
                        observer.unobserve(entry.target);
                        revealQueue.push(entry.target);
                    });

                revealQueue.sort((a, b) => productCards.indexOf(a) - productCards.indexOf(b));
                if (revealTimeout === null) revealNextCard();
            }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });

            productCards.forEach((card) => {
                productObserver.observe(card);
            });
        }

        window.onload = function() {
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }, 600);
        };
