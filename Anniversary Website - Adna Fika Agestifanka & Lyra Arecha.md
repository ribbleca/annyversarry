# Anniversary Website - Adna Fika Agestifanka & Lyra Arecha

Website anniversary ke-2 tahun yang sangat lengkap dan romantis untuk merayakan perjalanan cinta Adna dan Lyra.

## 🎉 Fitur Lengkap

### ✨ Fitur Utama
- **Countdown Timer** - Hitung mundur ke tanggal anniversary 8 Juli 2025
- **Galeri Foto** - 27+ foto kenangan dengan lightbox yang elegan
- **Music Player** - 3 lagu romantis dengan lirik otomatis
- **Surat Cinta** - Envelope animasi dengan fireworks
- **Quiz Interaktif** - Kuis tentang relationship Adna & Lyra
- **Timeline Kenangan** - Perjalanan cinta dari awal hingga sekarang
- **Guestbook** - Wall of love untuk ucapan dari teman-teman
- **Balasan Lyra** - Fitur khusus untuk Lyra membalas Adna

### 🎨 Fitur Premium
- **Dark Mode** - Toggle tema gelap/terang
- **Color Theme Picker** - Pilihan warna: Pink, Purple, Blue, Red
- **Bokeh Background** - Efek background yang indah
- **Confetti Hearts** - Animasi hati berjatuhan
- **Parallax Scrolling** - Efek paralaks saat scroll
- **Progress Bar** - Indikator progress scroll di atas
- **Animated Typing** - Efek mengetik pada judul
- **Statistics Counter** - Animasi counter statistik

### 🚀 Fitur Spesial
- **Voice Message** - Modal pesan suara dari Adna
- **Love Reminder** - Pengingat cinta random
- **AI Poem Generator** - Generator puisi otomatis
- **Love Challenge** - Tantangan lucu harian
- **Memory Map** - Peta lokasi kenangan
- **Time Capsule** - Pesan untuk masa depan
- **Greeting Card Maker** - Pembuat kartu ucapan custom

### 📱 Responsive Design
- **Mobile Friendly** - Optimized untuk HP, tablet, dan desktop
- **Touch Gestures** - Swipe untuk navigasi galeri di mobile
- **Keyboard Shortcuts** - ESC, Space, Arrow keys
- **Performance Optimized** - Debounced scroll events

## 🛠️ Cara Menjalankan

### Opsi 1: Langsung di Browser
1. Download semua file
2. Buka file `index.html` di browser
3. Website siap digunakan!

### Opsi 2: Di Replit
1. Buat project baru di [Replit](https://replit.com)
2. Pilih template "HTML, CSS, JS"
3. Upload semua file ke project:
   ```
   anniversary-website/
   ├── index.html
   ├── assets/
   │   ├── css/
   │   │   └── style.css
   │   └── js/
   │       └── script.js
   └── README.md
   ```
4. Klik tombol "Run" di Replit
5. Website akan terbuka di tab baru

### Opsi 3: Local Server
1. Install Python (jika belum ada)
2. Buka terminal/command prompt
3. Navigate ke folder project:
   ```bash
   cd anniversary-website
   ```
4. Jalankan local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
5. Buka browser dan kunjungi: `http://localhost:8000`

## 📁 Struktur File

```
anniversary-website/
├── index.html              # File HTML utama
├── assets/
│   ├── css/
│   │   └── style.css       # Styling lengkap dengan responsive design
│   ├── js/
│   │   └── script.js       # JavaScript untuk semua interaktivitas
│   ├── images/             # Folder untuk gambar lokal (opsional)
│   └── audio/              # Folder untuk audio lokal (opsional)
├── README.md               # Dokumentasi ini
└── todo.md                 # Checklist development
```

## 🎵 Audio Files

Website menggunakan audio dari GitHub repository:
- **Threesixty - Sampai Nanti**
- **Nadhif Basalamah - Penjaga Hati**  
- **Denny Caknan - Cundamani**

Audio akan di-stream langsung dari URL, tidak perlu download manual.

## 🖼️ Gallery Images

Website menggunakan 27 foto dari Imgur:
- Semua foto akan dimuat langsung dari URL
- Lightbox dengan navigasi prev/next
- Responsive grid layout
- Lazy loading untuk performance

## 💾 Data Storage

Website menggunakan localStorage untuk menyimpan:
- **Guestbook messages** - Pesan dari pengunjung
- **Lyra's reply** - Balasan dari Lyra
- **Theme preferences** - Dark mode dan color theme
- **Time capsules** - Pesan untuk masa depan

Data akan tersimpan di browser dan tidak hilang saat refresh.

## 🎨 Customization

### Mengubah Warna Tema
Edit variabel CSS di `style.css`:
```css
:root {
    --primary-color: #ff69b4;    /* Warna utama */
    --secondary-color: #ff1493;  /* Warna sekunder */
    --accent-color: #ffc0cb;     /* Warna aksen */
}
```

### Menambah Lagu
Edit array `songs` di `script.js`:
```javascript
const songs = [
    {
        title: "Judul Lagu",
        url: "URL_AUDIO_FILE",
        lyrics: "Lirik lagu..."
    }
];
```

### Menambah Foto
Edit array `imageUrls` di function `loadGallery()` di `script.js`.

### Mengubah Tanggal Anniversary
Edit di function `startCountdown()` di `script.js`:
```javascript
const targetDate = new Date('2025-07-08T00:00:00').getTime();
```

## 🌟 Fitur Khusus

### Keyboard Shortcuts
- **ESC** - Tutup modal/lightbox
- **Space** - Play/pause musik
- **Arrow Left/Right** - Navigasi foto di lightbox

### Touch Gestures (Mobile)
- **Swipe Left** - Foto berikutnya
- **Swipe Right** - Foto sebelumnya

### Auto Features
- **Confetti hearts** - Muncul otomatis setiap 3 detik
- **Bokeh animation** - Background bergerak otomatis
- **Progress bar** - Update otomatis saat scroll
- **Statistics counter** - Animasi otomatis saat terlihat

## 🎯 Browser Support

Website kompatibel dengan:
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 📱 Mobile Optimization

- Responsive design untuk semua ukuran layar
- Touch-friendly buttons dan controls
- Optimized image loading
- Mobile-specific CSS media queries
- Gesture support untuk navigasi

## 🔧 Troubleshooting

### Audio tidak bisa diputar
- Pastikan koneksi internet stabil
- Beberapa browser memerlukan user interaction sebelum autoplay
- Coba klik tombol play manual

### Foto tidak muncul
- Periksa koneksi internet
- Imgur mungkin memblokir akses dari beberapa region
- Coba refresh halaman

### Website lambat
- Gunakan koneksi internet yang stabil
- Tutup tab browser lain yang tidak perlu
- Clear cache browser

## 💕 Pesan Khusus

Website ini dibuat dengan penuh cinta untuk merayakan anniversary ke-2 Adna Fika Agestifanka dan Lyra Arecha. Semoga cinta kalian semakin kuat dan bahagia selamanya!

**Selamat Anniversary! 🎉💕**

---

*Dibuat dengan ❤️ untuk Adna & Lyra*

