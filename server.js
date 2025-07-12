// API đăng ký tài khoản: gửi mã xác nhận về email
app.post('/api/register-user', async (req, res) => {
    const { username, password, email, phone, address } = req.body;
    if (users.find(u => u.username === username)) {
        return res.status(400).json({ message: 'Username already exists' });
    }
    if (pendingVerifications.find(u => u.username === username)) {
        return res.status(400).json({ message: 'A verification code has already been sent to this username. Please check your email.' });
    }
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    pendingVerifications.push({ username, password, email, phone, address, code, createdAt: Date.now() });

    // Gửi email mã xác nhận
    try {
        await transporter.sendMail({
            from: 'your_email@gmail.com',
            to: email,
            subject: 'Mã xác nhận đăng ký tài khoản',
            text: `Mã xác nhận của bạn là: ${code}`
        });
        res.json({ message: 'Verification code sent to email. Please check your email and enter the code to complete registration.', status: 'verify_required' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to send email', error: err });
    }
});
// Thanh toán thật với Stripe
const Stripe = require('stripe');
const stripe = Stripe('sk_test_your_secret_key'); // Thay bằng Stripe Secret Key của bạn

// API tạo phiên thanh toán Stripe Checkout
app.post('/api/create-checkout-session', async (req, res) => {
    const { cartItems, email } = req.body;
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: cartItems.map(item => ({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.name,
                    },
                    unit_amount: item.price * 100, // đơn vị cent
                },
                quantity: item.quantity,
            })),
            mode: 'payment',
            customer_email: email,
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
        });
        res.json({ url: session.url });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
const nodemailer = require('nodemailer');
// Lưu tạm thông tin đăng ký và mã xác nhận
let pendingVerifications = [];

// Cấu hình transporter gửi email (dùng Gmail demo, nên dùng app password)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hungtran112002@gmail.com', // Thay bằng email của bạn
        pass: 'hungtran112002'     // Thay bằng app password
    }
});
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Dữ liệu tạm thời (demo)
let products = [];
let users = [];

app.use(cors());
app.use(express.json());

// Lấy danh sách sản phẩm
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Thêm sản phẩm mới
app.post('/api/products', (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).json(product);
});

// Gửi mã xác nhận khi người dùng gửi form đăng ký
app.post('/api/send-verify', async (req, res) => {
    const { username, password, email, phone, address } = req.body;
    if (users.find(u => u.username === username)) {
        return res.status(400).json({ message: 'Username already exists' });
    }
    if (pendingVerifications.find(u => u.username === username)) {
        return res.status(400).json({ message: 'A verification code has already been sent to this username. Please check your email.' });
    }
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    pendingVerifications.push({ username, password, email, phone, address, code, createdAt: Date.now() });

    // Gửi email mã xác nhận
    try {
        await transporter.sendMail({
            from: 'your_email@gmail.com',
            to: email,
            subject: 'Mã xác nhận đăng ký tài khoản',
            text: `Mã xác nhận của bạn là: ${code}`
        });
        res.json({ message: 'Verification code sent to email. Please check your email and enter the code to complete registration.', status: 'verify_required' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to send email', error: err });
    }
});

// Xác nhận mã và tạo tài khoản khi người dùng nhập đúng mã xác nhận
app.post('/api/verify', (req, res) => {
    const { username, code } = req.body;
    const pending = pendingVerifications.find(u => u.username === username && u.code === code);
    if (!pending) {
        return res.status(400).json({ message: 'Invalid code or username' });
    }
    // Tạo tài khoản chính thức
    const newUser = {
        id: users.length + 1,
        username: pending.username,
        password: pending.password,
        email: pending.email,
        phone: pending.phone,
        address: pending.address,
        createdAt: new Date()
    };
    users.push(newUser);
    // Xóa khỏi pending
    pendingVerifications = pendingVerifications.filter(u => u.username !== username);
    res.json({ message: 'Account created successfully', status: 'success' });
});

// Đăng nhập
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    // Không trả về password cho client
    const { password: pw, ...userSafe } = user;
    res.json({ message: 'Login success', user: userSafe });
});
// API cho admin lấy danh sách user (ẩn password)
app.get('/api/users', (req, res) => {
    const safeUsers = users.map(({ password, ...rest }) => rest);
    res.json(safeUsers);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
