# 📋 TaskFlow Pro - Kurumsal Görev Yönetim Sistemi

<div align="center">

![TaskFlow Pro](https://img.shields.io/badge/TaskFlow-Pro-blueviolet?style=for-the-badge)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.3.5-brightgreen?style=for-the-badge&logo=spring)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)
![Java](https://img.shields.io/badge/Java-17-orange?style=for-the-badge&logo=java)
![License](https://img.shields.io/badge/Lisans-MIT-blue?style=for-the-badge)

**Modern ve görsel olarak etkileyici full-stack görev yönetim uygulaması**

[Canlı Demo](#) • [Özellikler](#-özellikler) • [Kurulum](#-kurulum) • [API Dokümantasyonu](#-api-dokümantasyonu)

</div>

---

## 📸 Ekran Görüntüleri

### 🎨 Ana Panel
<img width="1920" height="1027" alt="5" src="https://github.com/user-attachments/assets/c77e82d1-b19a-4485-94a9-e7d9f14c4041" />
*Glassmorphism tasarım ve gerçek zamanlı istatistikler*

### ✨ Görev Yönetimi
<img width="1920" height="1032" alt="2" src="https://github.com/user-attachments/assets/9a01dfd3-7d2a-4d0b-b84b-235e87b35e8f" />
*Öncelik göstergeleri ve akıcı animasyonlarla görev kartları*

### 📝 Görev Oluştur
<img width="1920" height="918" alt="3" src="https://github.com/user-attachments/assets/ac6ef301-8a44-4a2f-97ed-e73225f84d7b" />
*Validasyon özellikli kullanıcı dostu form*

### 🎯 Filtreleme
<img width="1920" height="617" alt="1" src="https://github.com/user-attachments/assets/01b0a5d2-224b-4d21-8f87-1cae9b217b77" />
*Akıllı filtreleme: Hepsi, Bekleyen, Tamamlanan*

---

## ✨ Özellikler

### 🎨 **Frontend (React + Vite)**
- ⚡ **Yıldırım hızı** performans (Vite ile)
- 🎭 **Akıcı animasyonlar** (Framer Motion)
- 💎 **Glassmorphism UI** ve gradient arka planlar
- 📱 **Tam responsive** tasarım
- 🎨 **Material-UI** bileşenleri
- 🔍 **Gerçek zamanlı arama** ve filtreleme
- 📊 **İnteraktif istatistik** kartları
- 🎯 **Öncelik bazlı** renk kodlaması
- ✅ **Micro-interaction** ve hover efektleri

### 🚀 **Backend (Spring Boot)**
- 🏗️ **RESTful API** mimarisi
- 🗄️ **PostgreSQL** veritabanı
- 🔄 **CRUD operasyonları** (Oluştur, Oku, Güncelle, Sil)
- 🏷️ **Kategori yönetimi**
- 🎚️ **Öncelik seviyeleri** (DÜŞÜK, ORTA, YÜKSEK)
- 📅 **Otomatik zaman damgaları**
- 🔍 **Arama fonksiyonu**
- 🎯 **Durum ve kategoriye göre filtreleme**
- ✅ **Tamamlanma durumu değiştirme**
- 📝 **Input validasyonu**
- 🚫 **Exception handling** (Hata yönetimi)

---

## 🛠️ Teknoloji Yığını

### **Frontend**
| Teknoloji | Kullanım Amacı |
|-----------|----------------|
| ![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react) | UI Framework |
| ![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite) | Build Tool |
| ![MUI](https://img.shields.io/badge/MUI-6.1-007FFF?logo=mui) | Bileşen Kütüphanesi |
| ![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11-FF0055?logo=framer) | Animasyonlar |
| ![Axios](https://img.shields.io/badge/Axios-1.7-5A29E4?logo=axios) | HTTP İstemcisi |
| ![React Router](https://img.shields.io/badge/React_Router-6.28-CA4245?logo=react-router) | Yönlendirme |

### **Backend**
| Teknoloji | Kullanım Amacı |
|-----------|----------------|
| ![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.3.5-6DB33F?logo=spring-boot) | Framework |
| ![Java](https://img.shields.io/badge/Java-17-ED8B00?logo=openjdk) | Programlama Dili |
| ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql) | Veritabanı |
| ![Maven](https://img.shields.io/badge/Maven-3.9-C71A36?logo=apache-maven) | Build Aracı |
| ![Lombok](https://img.shields.io/badge/Lombok-1.18-BC4521) | Kod Azaltma |

---

## 🚀 Başlangıç

### Gereksinimler

- **Java 17** veya üzeri
- **Node.js 18+** ve npm
- **PostgreSQL 12+**
- **Maven 3.6+**

### 📦 Kurulum

#### 1️⃣ Repository'yi klonla
```bash
git clone https://github.com/ismaildundar42/taskmanager.git
cd taskmanager
```

#### 2️⃣ Backend Kurulumu

```bash
# Proje ana dizinine git
cd taskmanager

# Veritabanı ayarlarını yap
# src/main/resources/application.properties
```

**application.properties:**
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/taskmanagerdb
spring.datasource.username=postgres
spring.datasource.password=sifreniz
spring.jpa.hibernate.ddl-auto=update
```

```bash
# Projeyi derle ve çalıştır
mvn clean install
mvn spring-boot:run
```

Backend çalışacak: **http://localhost:8080**

#### 3️⃣ Frontend Kurulumu

```bash
# Frontend dizinine git
cd frontend/task-manager-ui

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Frontend çalışacak: **http://localhost:5173**

---

## 📡 API Dokümantasyonu

### Base URL
```
http://localhost:8080/api
```

### Endpoint'ler

| Method | Endpoint | Açıklama |
|--------|----------|----------|
| `GET` | `/tasks` | Tüm görevleri getir |
| `GET` | `/tasks/{id}` | ID'ye göre görev getir |
| `POST` | `/tasks` | Yeni görev oluştur |
| `PUT` | `/tasks/{id}` | Görev güncelle |
| `DELETE` | `/tasks/{id}` | Görev sil |
| `PATCH` | `/tasks/{id}/toggle` | Tamamlanma durumunu değiştir |
| `GET` | `/tasks/category/{category}` | Kategoriye göre filtrele |
| `GET` | `/tasks/status?completed={true/false}` | Duruma göre filtrele |
| `GET` | `/tasks/search?keyword={anahtar}` | Görev ara |

### İstek Örneği

**POST /tasks**
```json
{
  "title": "Spring Boot Öğren",
  "description": "Spring Boot eğitimini tamamla",
  "priority": "HIGH",
  "category": "Eğitim",
  "completed": false
}
```

**Yanıt:**
```json
{
  "id": 1,
  "title": "Spring Boot Öğren",
  "description": "Spring Boot eğitimini tamamla",
  "priority": "HIGH",
  "category": "Eğitim",
  "completed": false,
  "createdAt": "2025-10-27T20:13:19",
  "updatedAt": "2025-10-27T20:13:19"
}
```

---

## 🗂️ Proje Yapısı

```
taskmanager/
├── src/main/java/com/example/taskmanager/
│   ├── controller/          # REST Controller'lar
│   ├── model/              # Entity Sınıfları
│   ├── repository/         # JPA Repository'ler
│   ├── service/            # İş Mantığı
│   └── TaskmanagerApplication.java
├── frontend/
│   └── task-manager-ui/
│       ├── src/
│       │   ├── components/     # React Bileşenleri
│       │   ├── pages/         # Sayfa Bileşenleri
│       │   ├── services/      # API Servisleri
│       │   ├── context/       # React Context
│       │   ├── utils/         # Yardımcı Fonksiyonlar
│       │   └── theme.js       # MUI Tema
│       └── public/
└── pom.xml
```

---

## 🎨 UI Bileşenleri

### Header (Üst Bar)
- Logo ve marka
- Arama çubuğu
- Filtre butonları (Hepsi, Bekleyen, Tamamlanan)
- Yeni Görev butonu

### İstatistik Kartları
- Toplam Görevler
- Tamamlanan Görevler
- Bekleyen Görevler
- İlerleme yüzdesi (görsel çubuklu)

### Görev Kartı
- Başlık ve açıklama
- Öncelik badge'i (renkli)
- Kategori badge'i
- Oluşturulma tarihi
- Tamamlama checkbox'ı
- Düzenle ve Sil butonları
- Akıcı hover animasyonları

### Görev Formu
- Başlık girişi (zorunlu)
- Açıklama textarea'sı
- Öncelik seçici (DÜŞÜK, ORTA, YÜKSEK)
- Kategori girişi
- Form validasyonu

---

## 🌈 Renk Paleti

```css
Ana Gradient:       linear-gradient(135deg, #667eea 0%, #764ba2 100%)
Yüksek Öncelik:     linear-gradient(135deg, #f093fb 0%, #f5576c 100%)
Orta Öncelik:       linear-gradient(135deg, #fa709a 0%, #fee140 100%)
Düşük Öncelik:      linear-gradient(135deg, #11998e 0%, #38ef7d 100%)
Arka Plan:          #F5F7FA
Ana Metin:          #1A202C
İkincil Metin:      #718096
```

---

## 🔮 Gelecek Geliştirmeler

- [ ] 🔐 Kullanıcı kimlik doğrulama (JWT)
- [ ] 👥 Çoklu kullanıcı desteği
- [ ] 🔔 Push bildirimleri
- [ ] 📅 Son tarihler ve hatırlatıcılar
- [ ] 📎 Dosya ekleri
- [ ] 🏷️ Etiket sistemi
- [ ] 📊 Gelişmiş analitik
- [ ] 🌙 Karanlık mod
- [ ] 🌐 Çoklu dil desteği
- [ ] 📱 Mobil uygulama (React Native)

---

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyorum! Lütfen şu adımları takip edin:

1. Repository'yi fork'layın
2. Feature branch'i oluşturun (`git checkout -b feature/HarikaOzellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Harika özellik eklendi'`)
4. Branch'inizi push'layın (`git push origin feature/HarikaOzellik`)
5. Pull Request açın

---

## 📝 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasına bakın.

---

## 👨‍💻 Geliştirici

**İsmail Dündar**

- GitHub: [@ismaildundar42](https://github.com/ismaildundar42)
- LinkedIn: [İsmail Dündar](https://www.linkedin.com/in/ismaildundar/)
- E-posta: ismail.dndr42@gmail.com

---

## 🙏 Teşekkürler

- [Spring Boot](https://spring.io/projects/spring-boot) - Backend framework
- [React](https://reactjs.org/) - Frontend kütüphanesi
- [Material-UI](https://mui.com/) - UI bileşenleri
- [Framer Motion](https://www.framer.com/motion/) - Animasyon kütüphanesi
- [Vite](https://vitejs.dev/) - Build aracı

---

<div align="center">

### ⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!

❤️ ile geliştirildi - İsmail Dündar

</div>
