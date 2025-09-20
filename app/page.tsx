'use client'

import { useState } from 'react'
import { Search, MapPin, Clock, Users, Star, MessageCircle, Briefcase } from 'lucide-react'

// Mock data
const mockJobs = [
  {
    id: 1,
    title: 'Kafe Personeli',
    company: 'Starbucks',
    location: 'Kadıköy, İstanbul',
    pay: '150₺/saat',
    duration: '8 saat',
    category: 'Hizmet',
    description: 'Kafe personeli aranıyor. Deneyim tercih edilir.',
    postedAt: '2 saat önce'
  },
  {
    id: 2,
    title: 'Temizlik Elemanı',
    company: 'Temizlik Şirketi',
    location: 'Beşiktaş, İstanbul',
    pay: '120₺/saat',
    duration: '6 saat',
    category: 'Temizlik',
    description: 'Ofis temizliği için personel aranıyor.',
    postedAt: '4 saat önce'
  },
  {
    id: 3,
    title: 'Garson',
    company: 'Restoran XYZ',
    location: 'Şişli, İstanbul',
    pay: '180₺/saat',
    duration: '10 saat',
    category: 'Hizmet',
    description: 'Deneyimli garson aranıyor.',
    postedAt: '6 saat önce'
  },
  {
    id: 4,
    title: 'Güvenlik Görevlisi',
    company: 'Güvenlik A.Ş.',
    location: 'Beyoğlu, İstanbul',
    pay: '200₺/saat',
    duration: '12 saat',
    category: 'Güvenlik',
    description: 'Gece vardiyası güvenlik görevlisi aranıyor.',
    postedAt: '8 saat önce'
  },
  {
    id: 5,
    title: 'Nakliyat Elemanı',
    company: 'Hızlı Nakliyat',
    location: 'Ümraniye, İstanbul',
    pay: '160₺/saat',
    duration: '9 saat',
    category: 'Nakliyat',
    description: 'Eşya taşıma işleri için personel aranıyor.',
    postedAt: '10 saat önce'
  },
  {
    id: 6,
    title: 'Satış Temsilcisi',
    company: 'Mağaza ABC',
    location: 'Bakırköy, İstanbul',
    pay: '140₺/saat',
    duration: '7 saat',
    category: 'Satış',
    description: 'Part-time satış temsilcisi aranıyor.',
    postedAt: '12 saat önce'
  }
]

const mockCategories = ['Tümü', 'Hizmet', 'Temizlik', 'Güvenlik', 'Nakliyat', 'Satış', 'Diğer']

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Tümü')
  const [userRole, setUserRole] = useState<'job_seeker' | 'employer' | null>(null)

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Tümü' || job.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">a</span>
            </div>
            <span className="text-xl font-bold text-gray-800">aDay</span>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setUserRole('job_seeker')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                userRole === 'job_seeker' 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              İş Arayan
            </button>
            <button 
              onClick={() => setUserRole('employer')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                userRole === 'employer' 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              İşveren
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Her gün yeni fırsatlar
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Günlük işlerde hızlı ve güvenli eşleşme. 
            İş arayanlar ve işverenler için basit platform.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="İş ara... (örn: kafe personeli, temizlik)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {mockCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Neden aDay?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hızlı Arama</h3>
              <p className="text-gray-600">Konum bazlı hızlı iş arama</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kolay İletişim</h3>
              <p className="text-gray-600">Basit mesajlaşma sistemi</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Yakın İşler</h3>
              <p className="text-gray-600">En yakın iş fırsatları</p>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {userRole === 'employer' ? 'İş İlanı Oluştur' : 'Mevcut İşler'}
          </h2>
          
          {userRole === 'employer' ? (
            <div className="max-w-2xl mx-auto">
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Yeni İş İlanı</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      İş Başlığı
                    </label>
                    <input
                      type="text"
                      placeholder="Örn: Kafe Personeli"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Şirket Adı
                    </label>
                    <input
                      type="text"
                      placeholder="Örn: Starbucks"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Açıklama
                    </label>
                    <textarea
                      placeholder="İş detaylarını yazın..."
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Ücret (₺/saat)
                      </label>
                      <input
                        type="number"
                        placeholder="150"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Süre (saat)
                      </label>
                      <input
                        type="number"
                        placeholder="8"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Kategori
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                      <option value="">Kategori seçin</option>
                      <option value="Hizmet">Hizmet</option>
                      <option value="Temizlik">Temizlik</option>
                      <option value="Güvenlik">Güvenlik</option>
                      <option value="Nakliyat">Nakliyat</option>
                      <option value="Satış">Satış</option>
                      <option value="Diğer">Diğer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Konum
                    </label>
                    <input
                      type="text"
                      placeholder="Örn: Kadıköy, İstanbul"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <button className="w-full btn btn-primary">
                    İlanı Yayınla
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <div key={job.id} className="card hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                      <p className="text-sm text-gray-600">{job.company}</p>
                    </div>
                    <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full">
                      {job.category}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {job.duration}
                    </div>
                    <div className="flex items-center text-sm font-medium text-green-600">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {job.pay}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{job.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{job.postedAt}</span>
                    <button className="btn btn-primary text-sm">
                      Başvur
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary-500">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hemen Başla
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Binlerce iş fırsatı seni bekliyor
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn bg-white text-primary-500 hover:bg-gray-100">
              Ücretsiz Kayıt Ol
            </button>
            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-500">
              Daha Fazla Bilgi
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">a</span>
                </div>
                <span className="text-xl font-bold">aDay</span>
              </div>
              <p className="text-gray-400">
                Her gün yeni fırsatlar. Günlük işlerde hızlı ve güvenli eşleşme.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">İş Arayanlar</h3>
              <ul className="space-y-2 text-gray-400">
                <li>İş Ara</li>
                <li>Profil Oluştur</li>
                <li>Başvuru Yap</li>
                <li>Mesajlaş</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">İşverenler</h3>
              <ul className="space-y-2 text-gray-400">
                <li>İlan Ver</li>
                <li>Personel Bul</li>
                <li>Değerlendir</li>
                <li>Yönet</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Destek</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Yardım Merkezi</li>
                <li>İletişim</li>
                <li>Gizlilik</li>
                <li>Şartlar</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 aDay. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}