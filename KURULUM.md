# aDay Demo - Kurulum Rehberi

## 📁 Klasör Yapısı

Projeyi localhost'unuza kaydetmek için aşağıdaki klasör yapısını oluşturun:

```
aday-demo/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── .gitignore
├── README.md
└── KURULUM.md
```

## 🚀 Hızlı Başlangıç

### 1. Klasör Oluşturma
```bash
# Masaüstünde veya istediğiniz yerde klasör oluşturun
mkdir aday-demo
cd aday-demo

# App klasörünü oluşturun
mkdir app
```

### 2. Dosyaları Kopyalama
Tüm dosyaları yukarıdaki klasör yapısına göre kopyalayın.

### 3. Bağımlılıkları Yükleme
```bash
# Proje klasöründe terminal açın
cd aday-demo

# Bağımlılıkları yükleyin
npm install
```

### 4. Projeyi Çalıştırma
```bash
# Geliştirme sunucusunu başlatın
npm run dev
```

### 5. Tarayıcıda Açma
- Tarayıcınızı açın
- `http://localhost:3000` adresine gidin
- aDay demo uygulamasını göreceksiniz!

## 🔧 Gereksinimler

- **Node.js**: 18.0.0 veya üzeri
- **npm**: 8.0.0 veya üzeri
- **Tarayıcı**: Chrome, Firefox, Safari, Edge

## 📱 Test Etme

### İş Arayan Modu:
1. "İş Arayan" butonuna tıklayın
2. Arama çubuğuna "kafe" yazın
3. Kategori filtrelerini deneyin
4. İş kartlarına tıklayın

### İşveren Modu:
1. "İşveren" butonuna tıklayın
2. İş ilanı formunu doldurun
3. "İlanı Yayınla" butonuna tıklayın

### Responsive Test:
1. Tarayıcı penceresini küçültün
2. Mobil görünümü test edin
3. Tablet görünümünü test edin

## 🐛 Sorun Giderme

### Port Zaten Kullanımda:
```bash
# Farklı port kullanın
npm run dev -- -p 3001
```

### Bağımlılık Hatası:
```bash
# node_modules'ü silin ve tekrar yükleyin
rm -rf node_modules
npm install
```

### TypeScript Hatası:
```bash
# TypeScript'i yeniden yükleyin
npm install typescript @types/node @types/react @types/react-dom
```

## 📊 Performans

- **İlk yükleme**: ~2-3 saniye
- **Hot reload**: ~1 saniye
- **Build süresi**: ~30-60 saniye

## 🎨 Özelleştirme

### Renk Değiştirme:
`tailwind.config.js` dosyasındaki renk paletini düzenleyin.

### İçerik Değiştirme:
`app/page.tsx` dosyasındaki mock data'yı düzenleyin.

### Stil Değiştirme:
`app/globals.css` dosyasındaki CSS'i düzenleyin.

## 📞 Destek

Herhangi bir sorun yaşarsanız:
1. README.md dosyasını kontrol edin
2. Terminal hatalarını kontrol edin
3. Node.js ve npm versiyonlarını kontrol edin

---

**Başarılı kurulum için tüm dosyaların doğru konumda olduğundan emin olun!**