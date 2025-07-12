// Danh sách sản phẩm mẫu
const products = [
    {
        id: 1,
        name: "Laptop Dell Inspiron 15",
        price: 15000000,
        image: "./acssets/img/laptop-info/lap1.avif",
        info: {
            CPU: "Intel Core i5",
            RAM: "8GB",
            Storage: "SSD 256GB",
            Display: "15.6 inch Full HD",
            Battery: "41-54Wh",
            Weight: "1.8kg",
            OS: "Windows 11"

        }
    },
    {
        id: 2,
        name: "MacBook Air M2",
        price: 25000000,
        image: "./acssets/img/laptop-info/MacBookAirM2.jpg",
        info: {
            CPU: "Apple M2",
            RAM: "8GB",
            Storage: "SSD 256GB",
            Display: "13.6 inch Liquid Retina",
            Battery: "52.6Wh",
            OS: "macOS",
            Weight: "1.24 kg"

        }
    },
    {
        id: 3,
        name: "ASUS Vivobook 14",
        price: 12000000,
        image: "./acssets/img/laptop-info/asus1.jpg",
        info: {
            CPU: "Intel Core i5-1335U",
            RAM: "8GB",
            Storage: "SSD 512GB",
            Display: "14 inch Full HD",
            Battery: "42Wh",
            OS: "Windows 11",
            Weight: "1.40 kg"
        }
    },
    {
        id: 4,
        name: "HP Pavilion 14",
        price: 13500000,
        image: "./acssets/img/laptop-info/hp1.avif",
        info: {
            CPU: "Intel Core i5‑1235U",
            RAM: "8GB",
            Storage: "SSD 512GB",
            Display: "14 inch Full HD",
            Battery: "43Wh",
            OS: "Windows 11",
            Weight: "1.41 kg"
        }
    },
    {
        id: 5,
        name: "Laptop ASUS Vivobook S14",
        price: 20990000,
        image: "./acssets/img/laptop-info/asus2.png",
        info: {
            CPU: "Intel Core i5",
            RAM: "16GB",
            Storage: "SSD 512GB",
            Display: "14 inch Full HD",
            Battery: "70Wh",
            OS: "Windows 11",
            Weight: "1.4 kg"

        }

    },
    {
        id: 6,
        name: "Laptop ASUS ZenBook",
        price: 284000000,
        image: "./acssets/img/laptop-info/asus3.png",
        info: {
            CPU: "Intel Core i5‑1240P",
            RAM: "8GB",
            Storage: "SSD 512GB",
            Display: "14 inch OLED (2.8K)",
            Battery: "75Wh",
            OS: "Windows 11",
            Weight: "1.39 kg"

        }
    },
    {
        id: 7,
        name: "Laptop gaming Dell G15 ",
        price: 40490000,
        image: "./acssets/img/laptop-info/dell2.jpg",
        info: {
            CPU: "Intel Core i5‑13450HX",
            RAM: "8GB",
            Storage: "SSD 512GB",
            Display: "15.6 inch Full HD",
            Battery: "56Wh",
            OS: "Windows 11",
            Weight: "2.65 kg"
        }
    },
    {
        id: 8,
        name: "Laptop Dell Inspiron 14 ",
        price: 18290000,
        image: "./acssets/img/laptop-info/dell3.jpg",
        info: {
            CPU: "Intel Core i5‑1240P",
            RAM: "16GB",
            Storage: "SSD 512GB",
            Display: "14 inch Full HD+",
            Battery: "54Wh",
            OS: "Windows 11",
            Weight: "1.55 kg"

        }
    },
    {
        id: 9,
        name: "MacBook Pro 2024",
        price: 62900000,
        image: "./acssets/img/laptop-info/macbook-pro.jpeg",
        info: {
            CPU: "Apple M4",
            RAM: "16GB",
            Storage: "SSD 512GB",
            Display: "14.2 inch Liquid Retina XDR",
            Battery: "70Wh",
            OS: "macOS",
            Weight: "1.6 kg"
        }
    },
    {
        id: 10,
        name: "MacBook Air 2025",
        price: 30900000,
        image: "./acssets/img/laptop-info/macbookair2.jpeg",
        info: {
            CPU: "Apple M4",
            RAM: "16GB",
            Storage: "SSD 256GB",
            Display: "13.6 inch Liquid Retina",
            Battery: "~52.6Wh",
            OS: "macOS",
            Weight: "1.24 kg"
        }
    },
    {
        id: 11,
        name: "Laptop gaming HP OMEN 16",
        price: 54990000,
        image: "./acssets/img/laptop-info/hp2.png",
        info: {
            CPU: "Intel Core i5-14450HX",
            RAM: "16GB",
            Storage: "SSD 512GB",
            Display: "16.1 inch Full HD (144Hz)",
            Battery: "83Wh",
            OS: "Windows 11",
            Weight: "2.31 kg"
        }
    },
    {
        id: 12,
        name: "Laptop gaming HP Victus 16",
        price: 26990000,
        image: "./acssets/img/laptop-info/hp3.png",
        info: {
            CPU: "Intel Core i5‑13500H",
            RAM: "16GB",
            Storage: "SSD 512GB",
            Display: "16.1 inch Full HD",
            Battery: "70Wh",
            OS: "Windows 11",
            Weight: "2.33 kg"

        }
    }
];

const displayProducts = [
    {
        id: 1,
        name: "LG UltraGear 34GX90SA-W",
        manufacturer: "LG",
        price: 27990000,
        image: "./acssets/img/display/lg1.jpg",
        info: {
            size: "34 inch",
            resolution: "3440 x 1440",
            refreshRate: "240Hz",
            panelType: "OLED",
        }
    },
    {
        id: 2,
        name: "LG UltraGear 27G850A-B",
        manufacturer: "LG",
        price: 21500000,
        image: "./acssets/img/display/lg2.jpg",
        info: {
            size: "27 inch",
            resolution: "3840 x 2160",
            refreshRate: "240Hz (4K), 480Hz (FHD)",
            panelType: "Nano IPS Black",
        }
    },
    {
        id: 3,
        name: "LG 27UP850K-W",
        manufacturer: "LG",
        price: 15990000,
        image: "./acssets/img/display/lg3.jpg",
        info: {
            size: "27 inch",
            resolution: "3840 x 2160",
            refreshRate: "60Hz",
            panelType: "IPS",
        }
    },
    {
        id: 4,
        name: "LG 27UP600K-W",
        manufacturer: "LG",
        price: 5400000,
        image: "./acssets/img/display/lg4.jpg",
        info: {
            size: "27 inch",
            resolution: "3840 x 2160",
            refreshRate: "60Hz",
            panelType: "IPS",
        }
    }
    // Có thể thêm các sản phẩm màn hình khác ở đây
];
const cart = [];

// Thêm dữ liệu mẫu cho bàn phím, chuột, lót chuột, phụ kiện
const keyboardProducts = [
    { id: 1, name: "Logitech K380", manufacturer: "Logitech", price: 650000, image: "./acssets/img/keyboard/logitech1.png" },
    { id: 2, name: "Rapoo V500", manufacturer: "Rapoo", price: 790000, image: "./acssets/img/keyboard/rapoo1.png" },
    { id: 3, name: "Akko 3068", manufacturer: "Akko", price: 1200000, image: "./acssets/img/keyboard/akko1.png" },
    { id: 4, name: "DareU EK87", manufacturer: "DareU", price: 850000, image: "./acssets/img/keyboard/dareu1.png" },
    { id: 5, name: "Keychron K2", manufacturer: "Keychron", price: 1800000, image: "./acssets/img/keyboard/keychron1.png" }
];
const mouseProducts = [
    { id: 1, name: "Logitech G102", manufacturer: "Logitech", price: 350000, image: "./acssets/img/mouse/logitech_g102.jpg" },
    { id: 2, name: "Rapoo M300", manufacturer: "Rapoo", price: 250000, image: "./acssets/img/mouse/rapoo_m300.jpg" },
    { id: 3, name: "Razer Orochi", manufacturer: "Razer", price: 990000, image: "./acssets/img/mouse/razer_orochi.png" },
    { id: 4, name: "DareU EM911", manufacturer: "DareU", price: 320000, image: "./acssets/img/mouse/dareu_em911.jpg" },
    { id: 5, name: "ASUS ROG Gladius", manufacturer: "ASUS", price: 1450000, image: "./acssets/img/mouse/asus_rog.png" }
];
const mousepadProducts = [
    { id: 1, name: "Logitech G240", manufacturer: "Logitech", price: 250000, image: "./acssets/img/mousepad/logitech_g240.png" },
    { id: 2, name: "Razer Goliathus", manufacturer: "Razer", price: 390000, image: "./acssets/img/mousepad/razer_goliathus.jpg" },
    { id: 3, name: "Akko Deskmat", manufacturer: "Akko", price: 350000, image: "./acssets/img/mousepad/akko_deskmat.jpg" },
    { id: 4, name: "DareU ESP109", manufacturer: "DareU", price: 220000, image: "./acssets/img/mousepad/dareu_esp109.jpg" }
];
const accessoryProducts = [
    { id: 1, name: "Logitech Webcam C922", manufacturer: "Logitech", price: 22900000, image: "./acssets/img/accessory/logitech_c922.jpg" },
    { id: 2, name: "Rapoo H150", manufacturer: "Rapoo", price: 220000, image: "./acssets/img/accessory/rapoo_vh160.png" },
    { id: 3, name: "Akko Switch Lube", manufacturer: "Akko", price: 320000, image: "./acssets/img/accessory/akko_cablev2.jpg" },
    { id: 4, name: "DareU H101X Wireless Pink", manufacturer: "DareU", price: 180000, image: "./acssets/img/accessory/dareu_h101x.png" },
    { id: 5, name: "ASUS USB Hub", manufacturer: "ASUS", price: 350000, image: "./acssets/img/accessory/asus_usb.jpg" }
];
// Hiển thị sidebar hãng màn hình
function renderDisplaySidebar() {
    const sidebar = document.querySelector('.display-brand-sidebar');
    if (!sidebar) return;
    sidebar.innerHTML = `
        <h4>Hãng màn hình</h4>
        <ul>
            <li><a href="#display-brand-all" class="display-brand-link active">Tất cả</a></li>
            <li><a href="#display-brand-lg" class="display-brand-link">LG</a></li>
            <li><a href="#display-brand-asus" class="display-brand-link">ASUS</a></li>
            <li><a href="#display-brand-dell" class="display-brand-link">Dell</a></li>
            <li><a href="#display-brand-msi" class="display-brand-link">MSI</a></li>
            <li><a href="#display-brand-lenovo" class="display-brand-link">Lenovo</a></li>
        </ul>
    `;
    sidebar.style.display = '';
}

// Hiển thị sidebar hãng bàn phím
function renderKeyboardSidebar() {
    const sidebar = document.querySelector('.keyboard-brand-sidebar');
    if (!sidebar) return;
    sidebar.innerHTML = `
        <h4>Hãng bàn phím</h4>
        <ul>
            <li><a href="#keyboard-brand-all" class="keyboard-brand-link active">Tất cả</a></li>
            <li><a href="#keyboard-brand-logitech" class="keyboard-brand-link">Logitech</a></li>
            <li><a href="#keyboard-brand-rapoo" class="keyboard-brand-link">Rapoo</a></li>
            <li><a href="#keyboard-brand-akko" class="keyboard-brand-link">Akko</a></li>
            <li><a href="#keyboard-brand-dareu" class="keyboard-brand-link">DareU</a></li>
            <li><a href="#keyboard-brand-keychron" class="keyboard-brand-link">Keychron</a></li>
        </ul>
    `;
    sidebar.style.display = '';
}

// Hiển thị sidebar hãng chuột
function renderMouseSidebar() {
    const sidebar = document.querySelector('.mouse-brand-sidebar');
    if (!sidebar) return;
    sidebar.innerHTML = `
        <h4>Hãng chuột</h4>
        <ul>
            <li><a href="#mouse-brand-all" class="mouse-brand-link active">Tất cả</a></li>
            <li><a href="#mouse-brand-logitech" class="mouse-brand-link">Logitech</a></li>
            <li><a href="#mouse-brand-rapoo" class="mouse-brand-link">Rapoo</a></li>
            <li><a href="#mouse-brand-razor" class="mouse-brand-link">Razer</a></li>
            <li><a href="#mouse-brand-dareu" class="mouse-brand-link">DareU</a></li>
            <li><a href="#mouse-brand-asus" class="mouse-brand-link">ASUS</a></li>
        </ul>
    `;
    sidebar.style.display = '';
}

// Hiển thị sidebar hãng lót chuột
function renderMousepadSidebar() {
    const sidebar = document.querySelector('.mousepad-brand-sidebar');
    if (!sidebar) return;
    sidebar.innerHTML = `
        <h4>Hãng lót chuột</h4>
        <ul>
            <li><a href="#mousepad-brand-all" class="mousepad-brand-link active">Tất cả</a></li>
            <li><a href="#mousepad-brand-logitech" class="mousepad-brand-link">Logitech</a></li>
            <li><a href="#mousepad-brand-razor" class="mousepad-brand-link">Razer</a></li>
            <li><a href="#mousepad-brand-akko" class="mousepad-brand-link">Akko</a></li>
            <li><a href="#mousepad-brand-dareu" class="mousepad-brand-link">DareU</a></li>
        </ul>
    `;
    sidebar.style.display = '';
}

// Hiển thị sidebar hãng phụ kiện
function renderAccessorySidebar() {
    const sidebar = document.querySelector('.accessory-brand-sidebar');
    if (!sidebar) return;
    sidebar.innerHTML = `
        <h4>Hãng phụ kiện</h4>
        <ul>
            <li><a href="#accessory-brand-all" class="accessory-brand-link active">Tất cả</a></li>
            <li><a href="#accessory-brand-logitech" class="accessory-brand-link">Logitech</a></li>
            <li><a href="#accessory-brand-rapoo" class="accessory-brand-link">Rapoo</a></li>
            <li><a href="#accessory-brand-akko" class="accessory-brand-link">Akko</a></li>
            <li><a href="#accessory-brand-dareu" class="accessory-brand-link">DareU</a></li>
            <li><a href="#accessory-brand-asus" class="accessory-brand-link">ASUS</a></li>
        </ul>
    `;
    sidebar.style.display = '';
}

function renderProducts(category = null, brand = null) {
    const productsEl = document.getElementById('products');
    let filtered = [];
    if (category === 'laptop') {
        filtered = products;
        if (brand) {
            if (brand === 'dell') filtered = products.filter(p => p.name.toLowerCase().includes('dell'));
            else if (brand === 'apple') filtered = products.filter(p => p.name.toLowerCase().includes('macbook') || p.name.toLowerCase().includes('apple'));
            else if (brand === 'asus') filtered = products.filter(p => p.name.toLowerCase().includes('asus'));
            else if (brand === 'hp') filtered = products.filter(p => p.name.toLowerCase().includes('hp'));
            else if (brand === 'msi') filtered = products.filter(p => p.name.toLowerCase().includes('msi'));
            else if (brand === 'lenovo') filtered = products.filter(p => p.name.toLowerCase().includes('lenovo'));
        }

        productsEl.innerHTML = filtered.length ? filtered.map(product => `
            <div class="product" data-id="${product.id}" data-type="laptop">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <div class="price">${product.price.toLocaleString()} VND</div>
                <button onclick="addToCart(${product.id}, 'laptop')">Thêm vào giỏ</button>
                <button class="detail-btn" onclick="showDetail(${product.id}, 'laptop')">Xem chi tiết</button>
            </div>
        `).join('') : '<div style="width:100%;text-align:center;padding:40px 0;">Chưa có sản phẩm laptop!</div>';
    } else if (category === 'man-hinh') {
        filtered = displayProducts;
        if (brand) {
            if (brand === 'lg') filtered = displayProducts.filter(p => p.manufacturer.toLowerCase() === 'lg');
            else if (brand === 'asus') filtered = displayProducts.filter(p => p.manufacturer.toLowerCase() === 'asus');
            else if (brand === 'dell') filtered = displayProducts.filter(p => p.manufacturer.toLowerCase() === 'dell');
            else if (brand === 'msi') filtered = displayProducts.filter(p => p.manufacturer.toLowerCase() === 'msi');
            else if (brand === 'lenovo') filtered = displayProducts.filter(p => p.manufacturer.toLowerCase() === 'lenovo');
        }
        // Nếu có 4 sản phẩm, đưa sản phẩm thứ 4 lên đầu
        if (filtered.length === 4) {
            filtered = [filtered[3], filtered[0], filtered[1], filtered[2]];
        }
        productsEl.innerHTML = filtered.length ? filtered.map(product => `
            <div class="product" data-id="${product.id}" data-type="display">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <div class="price">${product.price.toLocaleString()} VND</div>
                <button onclick="addToCart(${product.id}, 'display')">Thêm vào giỏ</button>
                <button class="detail-btn" onclick="showDetail(${product.id}, 'display')">Xem chi tiết</button>
            </div>
        `).join('') : '<div style="width:100%;text-align:center;padding:40px 0;">Chưa có sản phẩm màn hình!</div>';
    } else if (category === 'ban-phim') {
        filtered = keyboardProducts;
        if (brand && brand !== 'all') filtered = keyboardProducts.filter(p => p.manufacturer.toLowerCase() === brand);
        productsEl.innerHTML = filtered.length ? filtered.map(product => `
            <div class="product" data-id="${product.id}" data-type="keyboard">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <div class="price">${product.price.toLocaleString()} VND</div>
                <button onclick="addToCart(${product.id}, 'keyboard')">Thêm vào giỏ</button>
            </div>
        `).join('') : '<div style="width:100%;text-align:center;padding:40px 0;">Chưa có sản phẩm bàn phím!</div>';
    } else if (category === 'chuot') {
        filtered = mouseProducts;
        if (brand && brand !== 'all') filtered = mouseProducts.filter(p => p.manufacturer.toLowerCase() === brand);
        productsEl.innerHTML = filtered.length ? filtered.map(product => `
            <div class="product" data-id="${product.id}" data-type="mouse">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <div class="price">${product.price.toLocaleString()} VND</div>
                <button onclick="addToCart(${product.id}, 'mouse')">Thêm vào giỏ</button>
            </div>
        `).join('') : '<div style="width:100%;text-align:center;padding:40px 0;">Chưa có sản phẩm chuột!</div>';
    } else if (category === 'lot-chuot') {
        filtered = mousepadProducts;
        if (brand && brand !== 'all') filtered = mousepadProducts.filter(p => p.manufacturer.toLowerCase() === brand);
        productsEl.innerHTML = filtered.length ? filtered.map(product => `
            <div class="product" data-id="${product.id}" data-type="mousepad">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <div class="price">${product.price.toLocaleString()} VND</div>
                <button onclick="addToCart(${product.id}, 'mousepad')">Thêm vào giỏ</button>
            </div>
        `).join('') : '<div style="width:100%;text-align:center;padding:40px 0;">Chưa có sản phẩm lót chuột!</div>';
    } else if (category === 'phu-kien') {
        filtered = accessoryProducts;
        if (brand && brand !== 'all') filtered = accessoryProducts.filter(p => p.manufacturer.toLowerCase() === brand);
        productsEl.innerHTML = filtered.length ? filtered.map(product => `
            <div class="product" data-id="${product.id}" data-type="accessory">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <div class="price">${product.price.toLocaleString()} VND</div>
                <button onclick="addToCart(${product.id}, 'accessory')">Thêm vào giỏ</button>
            </div>
        `).join('') : '<div style="width:100%;text-align:center;padding:40px 0;">Chưa có sản phẩm phụ kiện!</div>';
    } else {
        // Home hoặc mặc định
        productsEl.innerHTML = '';
    }
}

function addToCart(productId, type = 'laptop') {
    let product;
    if (type === 'laptop') product = products.find(p => p.id === productId);
    else if (type === 'display') product = displayProducts.find(p => p.id === productId);
    else if (type === 'keyboard') product = keyboardProducts.find(p => p.id === productId);
    else if (type === 'mouse') product = mouseProducts.find(p => p.id === productId);
    else if (type === 'mousepad') product = mousepadProducts.find(p => p.id === productId);
    else if (type === 'accessory') product = accessoryProducts.find(p => p.id === productId);
    if (!product) return;
    const key = `${type}-${productId}`;
    const item = cart.find(i => i.key === key);
    if (item) {
        item.qty++;
    } else {
        cart.push({ ...product, qty: 1, type, key });
    }
    updateCartCount();
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    if (cart.length === 0) {
        cartItems.innerHTML = '<li>Giỏ hàng trống</li>';
        document.getElementById('checkout-form').style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <li>
                <span>${item.name} x${item.qty}</span>
                <span>${(item.price * item.qty).toLocaleString()} VND <button onclick="removeFromCart('${item.key}')">Xóa</button></span>
            </li>
        `).join('');
        document.getElementById('checkout-form').style.display = 'block';
    }
    document.getElementById('cart-total').textContent = cart.reduce((sum, item) => sum + item.price * item.qty, 0).toLocaleString();
}

function removeFromCart(key) {
    const idx = cart.findIndex(i => i.key === key);
    if (idx > -1) {
        cart.splice(idx, 1);
        updateCartCount();
        renderCart();
    }
}

function showDetail(productId, type = 'laptop') {
    let product;
    if (type === 'laptop') product = products.find(p => p.id === productId);
    else if (type === 'display') product = displayProducts.find(p => p.id === productId);
    else if (type === 'keyboard') product = keyboardProducts.find(p => p.id === productId);
    else if (type === 'mouse') product = mouseProducts.find(p => p.id === productId);
    else if (type === 'mousepad') product = mousepadProducts.find(p => p.id === productId);
    else if (type === 'accessory') product = accessoryProducts.find(p => p.id === productId);
    if (!product) return;
    let detailHtml = '';
    if (type === 'laptop') {
        detailHtml = `
            <div class="product-detail-modal modal">
                <div class="modal-content">
                    <span class="close" id="close-detail">&times;</span>
                    <h2 style="text-align:center;">${product.name}</h2>
                    <img src="${product.image}" alt="${product.name}" style="width:220px;max-width:90vw;display:block;margin:0 auto 16px;">
                    <div class="price" style="font-size:1.3rem;margin-bottom:12px;text-align:center;">${product.price.toLocaleString()} VND</div>
                    <p><b>Thông số kỹ thuật:</b></p>
                    <ul style="text-align:left;max-width:350px;margin:0 auto 18px;">
                        <li>CPU: ${product.info.CPU}</li>
                        <li>RAM: ${product.info.RAM}</li>
                        <li>Ổ cứng: ${product.info.Storage}</li>
                        <li>Màn hình: ${product.info.Display}</li>
                        <li>Pin: ${product.info.Battery}</li>
                        <li>Trọng lượng: ${product.info.Weight}</li>
                        <li>Hệ điều hành: ${product.info.OS}</li>
                    </ul>
                    <div style="display:flex;justify-content:center;">
                      <button onclick="addToCart(${product.id}, 'laptop')">Thêm vào giỏ</button>
                    </div>
                </div>
            </div>
        `;
    } else if (type === 'display') {
        detailHtml = `
            <div class="product-detail-modal modal">
                <div class="modal-content">
                    <span class="close" id="close-detail">&times;</span>
                    <h2 style="text-align:center;">${product.name}</h2>
                    <img src="${product.image}" alt="${product.name}" style="width:220px;max-width:90vw;display:block;margin:0 auto 16px;">
                    <div class="price" style="font-size:1.3rem;margin-bottom:12px;text-align:center;">${product.price.toLocaleString()} VND</div>
                    <p><b>Thông số kỹ thuật:</b></p>
                    <ul style="text-align:left;max-width:350px;margin:0 auto 18px;">
                        <li>Kích thước: ${product.info.size}</li>
                        <li>Độ phân giải: ${product.info.resolution}</li>
                        <li>Tần số quét: ${product.info.refreshRate}</li>
                        <li>Tấm nền: ${product.info.panelType}</li>
                    </ul>
                    <div style="display:flex;justify-content:center;">
                      <button onclick="addToCart(${product.id}, 'display')">Thêm vào giỏ</button>
                    </div>
                </div>
            </div>
        `;
    } else if (type === 'keyboard') {
        detailHtml = `
            <div class="product-detail-modal modal">
                <div class="modal-content">
                    <span class="close" id="close-detail">&times;</span>
                    <h2 style="text-align:center;">${product.name}</h2>
                    <img src="${product.image}" alt="${product.name}" style="width:220px;max-width:90vw;display:block;margin:0 auto 16px;">
                    <div class="price" style="font-size:1.3rem;margin-bottom:12px;text-align:center;">${product.price.toLocaleString()} VND</div>
                    <p><b>Thông số kỹ thuật:</b></p>
                    <ul style="text-align:left;max-width:350px;margin:0 auto 18px;">
                        <li>Hãng: ${product.manufacturer}</li>
                    </ul>
                    <div style="display:flex;justify-content:center;">
                      <button onclick="addToCart(${product.id}, 'keyboard')">Thêm vào giỏ</button>
                    </div>
                </div>
            </div>
        `;
    } else if (type === 'mouse') {
        detailHtml = `
            <div class="product-detail-modal modal">
                <div class="modal-content">
                    <span class="close" id="close-detail">&times;</span>
                    <h2 style="text-align:center;">${product.name}</h2>
                    <img src="${product.image}" alt="${product.name}" style="width:220px;max-width:90vw;display:block;margin:0 auto 16px;">
                    <div class="price" style="font-size:1.3rem;margin-bottom:12px;text-align:center;">${product.price.toLocaleString()} VND</div>
                    <p><b>Thông số kỹ thuật:</b></p>
                    <ul style="text-align:left;max-width:350px;margin:0 auto 18px;">
                        <li>Hãng: ${product.manufacturer}</li>
                    </ul>
                    <div style="display:flex;justify-content:center;">
                      <button onclick="addToCart(${product.id}, 'mouse')">Thêm vào giỏ</button>
                    </div>
                </div>
            </div>
        `;
    } else if (type === 'mousepad') {
        detailHtml = `
            <div class="product-detail-modal modal">
                <div class="modal-content">
                    <span class="close" id="close-detail">&times;</span>
                    <h2 style="text-align:center;">${product.name}</h2>
                    <img src="${product.image}" alt="${product.name}" style="width:220px;max-width:90vw;display:block;margin:0 auto 16px;">
                    <div class="price" style="font-size:1.3rem;margin-bottom:12px;text-align:center;">${product.price.toLocaleString()} VND</div>
                    <p><b>Thông số kỹ thuật:</b></p>
                    <ul style="text-align:left;max-width:350px;margin:0 auto 18px;">
                        <li>Hãng: ${product.manufacturer}</li>
                    </ul>
                    <div style="display:flex;justify-content:center;">
                      <button onclick="addToCart(${product.id}, 'mousepad')">Thêm vào giỏ</button>
                    </div>
                </div>
            </div>
        `;
    } else if (type === 'accessory') {
        detailHtml = `
            <div class="product-detail-modal modal">
                <div class="modal-content">
                    <span class="close" id="close-detail">&times;</span>
                    <h2 style="text-align:center;">${product.name}</h2>
                    <img src="${product.image}" alt="${product.name}" style="width:220px;max-width:90vw;display:block;margin:0 auto 16px;">
                    <div class="price" style="font-size:1.3rem;margin-bottom:12px;text-align:center;">${product.price.toLocaleString()} VND</div>
                    <p><b>Thông số kỹ thuật:</b></p>
                    <ul style="text-align:left;max-width:350px;margin:0 auto 18px;">
                        <li>Hãng: ${product.manufacturer}</li>
                    </ul>
                    <div style="display:flex;justify-content:center;">
                      <button onclick="addToCart(${product.id}, 'accessory')">Thêm vào giỏ</button>
                    </div>
                </div>
            </div>
        `;
    }
    const temp = document.createElement('div');
    temp.innerHTML = detailHtml;
    document.body.appendChild(temp.firstElementChild);
    document.getElementById('close-detail').onclick = function () {
        document.querySelector('.product-detail-modal').remove();
    };
}

// Thêm sự kiện cho nav laptop
window.addEventListener('DOMContentLoaded', function () {
    // Sự kiện cho nút 'Xem sản phẩm' ở trang home
    const xemSanPhamBtn = document.querySelector('.banner-btn');
    if (xemSanPhamBtn) {
        xemSanPhamBtn.addEventListener('click', function (e) {
            e.preventDefault();
            // Tìm nav-link Laptop và click
            const laptopNav = Array.from(document.querySelectorAll('.nav-link')).find(l => l.getAttribute('href') === '#laptop');
            if (laptopNav) laptopNav.click();
        });
    }
    const navLinks = document.querySelectorAll('.nav-link');
    const homeBanner = document.getElementById('home-banner');
    const brandSidebar = document.querySelector('.brand-sidebar');
    const displayBrandSidebar = document.querySelector('.display-brand-sidebar');
    const productsSection = document.getElementById('products');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = link.getAttribute('href');
            // Ẩn tất cả sidebar dọc trước khi hiển thị sidebar mới
            const allSidebars = [
                document.querySelector('.brand-sidebar'),
                document.querySelector('.display-brand-sidebar'),
                document.querySelector('.keyboard-brand-sidebar'),
                document.querySelector('.mouse-brand-sidebar'),
                document.querySelector('.mousepad-brand-sidebar'),
                document.querySelector('.accessory-brand-sidebar')
            ];
            allSidebars.forEach(sb => { if (sb) sb.style.display = 'none'; });

            if (href === 'contact.html') {
                e.preventDefault();
                window.location.href = 'contact.html';
                return;
            }
            if (href === '#laptop') {
                e.preventDefault();
                if (homeBanner) homeBanner.style.display = 'none';
                if (brandSidebar) brandSidebar.style.display = '';
                if (productsSection) productsSection.style.display = '';
                renderProducts('laptop');
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            } else if (href === '#man-hinh') {
                e.preventDefault();
                if (homeBanner) homeBanner.style.display = 'none';
                if (displayBrandSidebar) {
                    renderDisplaySidebar();
                    displayBrandSidebar.style.display = '';
                }
                if (productsSection) productsSection.style.display = '';
                renderProducts('man-hinh');
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            } else if (href === '#ban-phim') {
                e.preventDefault();
                if (homeBanner) homeBanner.style.display = 'none';
                document.querySelector('.keyboard-brand-sidebar').style.display = '';
                if (productsSection) productsSection.style.display = '';
                renderKeyboardSidebar();
                renderProducts('ban-phim');
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            } else if (href === '#chuot') {
                e.preventDefault();
                if (homeBanner) homeBanner.style.display = 'none';
                document.querySelector('.mouse-brand-sidebar').style.display = '';
                if (productsSection) productsSection.style.display = '';
                renderMouseSidebar();
                renderProducts('chuot');
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            } else if (href === '#lot-chuot') {
                e.preventDefault();
                if (homeBanner) homeBanner.style.display = 'none';
                document.querySelector('.mousepad-brand-sidebar').style.display = '';
                if (productsSection) productsSection.style.display = '';
                renderMousepadSidebar();
                renderProducts('lot-chuot');
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            } else if (href === '#phu-kien') {
                e.preventDefault();
                if (homeBanner) homeBanner.style.display = 'none';
                document.querySelector('.accessory-brand-sidebar').style.display = '';
                if (productsSection) productsSection.style.display = '';
                renderAccessorySidebar();
                renderProducts('phu-kien');
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            } else if (href === '#') {
                e.preventDefault();
                if (homeBanner) homeBanner.style.display = '';
                if (productsSection) productsSection.style.display = 'none';
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
            if (productsSection) productsSection.classList.add('with-margin');
        });
    });

    // Sự kiện cho nav dọc hãng laptop
    const brandLinks = document.querySelectorAll('.brand-link');
    brandLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            brandLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            let brand = link.getAttribute('href');
            let brandKey = '';
            if (brand === '#brand-dell') brandKey = 'dell';
            else if (brand === '#brand-apple') brandKey = 'apple';
            else if (brand === '#brand-asus') brandKey = 'asus';
            else if (brand === '#brand-hp') brandKey = 'hp';
            else if (brand === '#brand-msi') brandKey = 'msi';
            else if (brand === '#brand-lenovo') brandKey = 'lenovo';
            renderProducts('laptop', brandKey);
        });
    });

    // Sự kiện cho nav dọc hãng màn hình
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('display-brand-link')) {
            e.preventDefault();
            const links = document.querySelectorAll('.display-brand-link');
            links.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
            let brand = e.target.getAttribute('href');
            let brandKey = '';
            if (brand === '#display-brand-lg') brandKey = 'lg';
            else if (brand === '#display-brand-asus') brandKey = 'asus';
            else if (brand === '#display-brand-dell') brandKey = 'dell';
            else if (brand === '#display-brand-msi') brandKey = 'msi';
            else if (brand === '#display-brand-lenovo') brandKey = 'lenovo';
            renderProducts('man-hinh', brandKey);
        }
    });

    // Sự kiện cho nav dọc hãng bàn phím
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('keyboard-brand-link')) {
            e.preventDefault();
            const links = document.querySelectorAll('.keyboard-brand-link');
            links.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
            let brand = e.target.getAttribute('href');
            let brandKey = 'all';
            if (brand === '#keyboard-brand-logitech') brandKey = 'logitech';
            else if (brand === '#keyboard-brand-rapoo') brandKey = 'rapoo';
            else if (brand === '#keyboard-brand-akko') brandKey = 'akko';
            else if (brand === '#keyboard-brand-dareu') brandKey = 'dareu';
            else if (brand === '#keyboard-brand-keychron') brandKey = 'keychron';
            renderProducts('ban-phim', brandKey);
        }
        // Sự kiện cho nav dọc hãng chuột
        if (e.target.classList.contains('mouse-brand-link')) {
            e.preventDefault();
            const links = document.querySelectorAll('.mouse-brand-link');
            links.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
            let brand = e.target.getAttribute('href');
            let brandKey = 'all';
            if (brand === '#mouse-brand-logitech') brandKey = 'logitech';
            else if (brand === '#mouse-brand-rapoo') brandKey = 'rapoo';
            else if (brand === '#mouse-brand-razor') brandKey = 'razer';
            else if (brand === '#mouse-brand-dareu') brandKey = 'dareu';
            else if (brand === '#mouse-brand-asus') brandKey = 'asus';
            renderProducts('chuot', brandKey);
        }
        // Sự kiện cho nav dọc hãng lót chuột
        if (e.target.classList.contains('mousepad-brand-link')) {
            e.preventDefault();
            const links = document.querySelectorAll('.mousepad-brand-link');
            links.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
            let brand = e.target.getAttribute('href');
            let brandKey = 'all';
            if (brand === '#mousepad-brand-logitech') brandKey = 'logitech';
            else if (brand === '#mousepad-brand-razor') brandKey = 'razer';
            else if (brand === '#mousepad-brand-akko') brandKey = 'akko';
            else if (brand === '#mousepad-brand-dareu') brandKey = 'dareu';
            renderProducts('lot-chuot', brandKey);
        }
        // Sự kiện cho nav dọc hãng phụ kiện
        if (e.target.classList.contains('accessory-brand-link')) {
            e.preventDefault();
            const links = document.querySelectorAll('.accessory-brand-link');
            links.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
            let brand = e.target.getAttribute('href');
            let brandKey = 'all';
            if (brand === '#accessory-brand-logitech') brandKey = 'logitech';
            else if (brand === '#accessory-brand-rapoo') brandKey = 'rapoo';
            else if (brand === '#accessory-brand-akko') brandKey = 'akko';
            else if (brand === '#accessory-brand-dareu') brandKey = 'dareu';
            else if (brand === '#accessory-brand-asus') brandKey = 'asus';
            renderProducts('phu-kien', brandKey);
        }
    });
});

// Hiển thị/ẩn modal giỏ hàng
window.addEventListener('DOMContentLoaded', function () {
    var cartBtn = document.getElementById('cart-btn');
    var cartModal = document.getElementById('cart-modal');
    var closeCart = document.getElementById('close-cart');
    if (cartBtn && cartModal) {
        cartBtn.addEventListener('click', function () {
            cartModal.classList.remove('hidden');
            renderCart();
        });
    }
    if (closeCart && cartModal) {
        closeCart.addEventListener('click', function () {
            cartModal.classList.add('hidden');
        });
    }
});

// Khởi tạo
renderProducts();
updateCartCount();

// Luôn chuyển hướng sang trang đăng nhập khi nhấn nút thanh toán
window.addEventListener('DOMContentLoaded', function () {
    var checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function (e) {
            e.preventDefault();
            window.location.href = 'login.html';
        });
    }
});
