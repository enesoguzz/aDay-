# aDay - Günlük İş Platformu Demo

Bu proje, günlük işlerde hızlı eşleşme sağlayan basit bir platformun demo versiyonudur.

## 🚀 Özellikler

- **İş Arama**: Konum ve kategori bazlı iş arama
- **İş İlanı Oluşturma**: İşverenler için kolay ilan oluşturma
- **Rol Seçimi**: İş arayan veya işveren olarak giriş
- **Responsive Tasarım**: Mobil ve masaüstü uyumlu
- **Modern UI**: Tailwind CSS ile tasarlanmış

## 🛠️ Teknolojiler

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Next.js built-in

## 📦 Kurulum

1. **Bağımlılıkları yükleyin:**
```bash
npm install
```

2. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
```

3. **Tarayıcıda açın:**
```
http://localhost:3000
```

## 🎯 Kullanım

### İş Arayan Olarak:
1. "İş Arayan" butonuna tıklayın
2. Arama çubuğuna iş türü yazın
3. Kategori filtrelerini kullanın
4. İş kartlarından birine tıklayarak başvuru yapın

### İşveren Olarak:
1. "İşveren" butonuna tıklayın
2. "Yeni İş İlanı" formunu doldurun
3. İlanı yayınlayın

## 📱 Responsive Tasarım

- **Mobile**: 320px ve üzeri
- **Tablet**: 768px ve üzeri
- **Desktop**: 1024px ve üzeri

## 🎨 Tasarım Sistemi

### Renkler:
- **Primary**: Mavi (#3b82f6)
- **Secondary**: Sarı (#eab308)
- **Success**: Yeşil (#10b981)
- **Error**: Kırmızı (#ef4444)

### Bileşenler:
- Butonlar (Primary, Secondary, Outline)
- Kartlar (Job cards, Feature cards)
- Form elemanları
- Navigation

## 🔧 Geliştirme

### Proje Yapısı:
```
aday-demo/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

### Scripts:
- `npm run dev`: Geliştirme sunucusu
- `npm run build`: Production build
- `npm run start`: Production sunucusu
- `npm run lint`: ESLint kontrolü

## 📈 Gelecek Özellikler

- [ ] Kullanıcı kayıt/giriş sistemi
- [ ] Gerçek veritabanı entegrasyonu
- [ ] Mesajlaşma sistemi
- [ ] Profil yönetimi
- [ ] Bildirim sistemi
- [ ] Mobil uygulama (Flutter)

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

- **Proje**: aDay Demo
- **Geliştirici**: [Adınız]
- **Email**: [email@example.com]

---

**Not**: Bu bir demo projesidir. Gerçek kullanım için backend entegrasyonu ve güvenlik önlemleri gereklidir.