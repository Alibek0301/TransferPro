import { useMemo, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BriefcaseBusiness, Droplets, Baby, Crown, Plane, Building2, UserCheck, Sparkles, Battery, Award, HelpCircle, MapPin, Trash2 } from 'lucide-react'

const whatsappNumber = '77781556699'

const translations = {
  ru: {
    home: 'Главная',
    services: 'Услуги',
    standards: 'Стандарты',
    contacts: 'Контакты',
    booking: 'Заказ',
    history: 'История',
    favorites: 'Избранное',
    saved: '✓ Сохранено',
  },
  kk: {
    home: 'Басты бет',
    services: 'Қызметтер',
    standards: 'Стандарттар',
    contacts: 'Байланыс',
    booking: 'Тапсырыс',
    history: 'Тарихы',
    favorites: 'Ұнайтқандар',
    saved: '✓ Сақталды',
  },
  en: {
    home: 'Home',
    services: 'Services',
    standards: 'Standards',
    contacts: 'Contacts',
    booking: 'Booking',
    history: 'History',
    favorites: 'Favorites',
    saved: '✓ Saved',
  },
}

const services = [
  {
    title: 'VIP Meeting — Аэропорт-Город',
    subtitle: 'Airport Transfer',
    price: 'от 15 000 ₸',
    icon: Plane,
    details: [
      'Встреча с именной табличкой у выхода зоны прилета',
      'Полная помощь с багажом и транспортировкой',
      'До 60 мин бесплатного ожидания при задержке рейса',
      'Охлаждённая вода, влажные салфетки',
      'Выбор музыки и температуры в салоне'
    ]
  },
  {
    title: 'Smart Parents — Развозка детей',
    subtitle: 'School Transfer',
    price: 'от 300 000 ₸ / мес',
    icon: Baby,
    details: [
      'Контроль от двери до двери с передачей из рук в руки',
      'Фотоотчёт родителю при посадке и высадке',
      'Современные детские кресла или бустеры',
      'Постоянный проверенный водитель',
      'Замена водителя/машины по предварительному согласованию'
    ]
  },
  {
    title: 'Бизнес-сопровождение',
    subtitle: 'Hourly Rental',
    price: 'от 10 000 ₸ / час',
    icon: BriefcaseBusiness,
    details: [
      'Любой класс автомобиля на выбор (седан, представительский, минивэн)',
      'Безлимитное ожидание — водитель всегда в часе езды',
      'Консьерж-функции: покупки, переговоры, записки',
      'Дресс-код по запросу (строгий костюм или Smart Casual)',
      'Плотный график встреч без суеты'
    ]
  },
  {
    title: 'Корпоративное обслуживание',
    subtitle: 'B2B Fleet',
    price: 'Индивидуальный тариф',
    icon: Building2,
    details: [
      'Фиксированный тариф без учёта пробок и праздничных наценок',
      'Полный электронный документооборот для бухгалтерии',
      'Подменный автомобиль в течение часа',
      'Персональный менеджер с круглосуточной поддержкой',
      'Приоритетное бронирование для компаний и посольств'
    ]
  },
  {
    title: 'Премиальный Межгород',
    subtitle: 'Travel Class',
    price: 'По запросу',
    icon: MapPin,
    details: [
      'Маршруты: Боровое, Щучинск, Караганда, Павлодар',
      'Wi-Fi и климат-контроль на протяжении всего пути',
      'Остановки по желанию на лучших локациях',
      'Техническая проверка перед каждым выездом',
      'Безопасность: соблюдение скоростного режима (110-120 км/ч)'
    ]
  },
  {
    title: 'Другое',
    subtitle: 'Custom Services',
    price: 'Уточняйте',
    icon: HelpCircle,
    details: [
      'Вам нужен нестандартный сервис?',
      'Специальные требования к маршруту?',
      'Особые пожелания к авто или водителю?',
      'Свяжитесь с нами напрямую в WhatsApp',
      'Мы найдём идеальное решение для вас'
    ]
  },
]

const standards = [
  { title: 'Идеальная чистота', icon: Sparkles, desc: 'Автомобиль подается после комплексной мойки и химчистки салона.' },
  { title: 'Дресс-код и этикет', icon: Crown, desc: 'Водители в строгих костюмах, соблюдение протокола тишины и профессиональная вежливость.' },
  { title: 'Напитки на борту', icon: Droplets, desc: 'Свежая питьевая вода в каждой поездке.' },
  { title: 'Энергия для гаджетов', icon: Battery, desc: 'Зарядные устройства для всех типов смартфонов (Type-C, Lightning).' },
  { title: 'Опытные водители', icon: UserCheck, desc: 'Профессиональный и безаварийный многолетний стаж.' },
  { title: 'Полная страховка', icon: Award, desc: 'Страховое покрытие пассажира, водителя и автомобиля.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileTab, setMobileTab] = useState('home')
  const [desktopTab, setDesktopTab] = useState('home')
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'ru')
  const [savedSince, setSavedSince] = useState('')
  const [orderHistory, setOrderHistory] = useState(() => JSON.parse(localStorage.getItem('orderHistory') || '[]'))
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites') || '[]'))
  
  const closeMobileMenu = () => setMobileMenuOpen(false)
  const t = translations[language]
  
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('formData')
    return saved ? JSON.parse(saved) : {
      name: '',
      phone: '+7',
      service: services[0].title,
      date: '',
      comment: '',
      address: '',
    }
  })

  // Сохранение языка
  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  useEffect(() => {
    document.documentElement.style.colorScheme = 'dark'
  }, [])

  // Автосохранение формы
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
    setSavedSince('just-now')
    const timer = setTimeout(() => setSavedSince(''), 2000)
    return () => clearTimeout(timer)
  }, [formData])

  const getTodayDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  const isValidPhone = (phone) => {
    const digitsOnly = phone.replace(/\D/g, '')
    return digitsOnly.length === 11 && digitsOnly.startsWith('7')
  }

  const canSubmit = formData.name.trim() && isValidPhone(formData.phone) && formData.date

  const addToHistory = () => {
    const newOrder = { ...formData, id: Date.now(), createdAt: new Date().toLocaleString() }
    setOrderHistory([newOrder, ...orderHistory.slice(0, 9)])
    localStorage.setItem('orderHistory', JSON.stringify([newOrder, ...orderHistory.slice(0, 9)]))
  }

  const repeatOrder = (order) => {
    setFormData({ name: order.name, phone: order.phone, service: order.service, date: getTodayDate(), comment: order.comment, address: order.address || '' })
    setMobileTab('booking')
  }

  const addFavorite = () => {
    if (formData.address && !favorites.find(f => f.address === formData.address)) {
      const newFav = { address: formData.address, name: `Адрес ${favorites.length + 1}`, id: Date.now() }
      setFavorites([...favorites, newFav])
      localStorage.setItem('favorites', JSON.stringify([...favorites, newFav]))
    }
  }

  const removeFavorite = (id) => {
    const updated = favorites.filter(f => f.id !== id)
    setFavorites(updated)
    localStorage.setItem('favorites', JSON.stringify(updated))
  }

  const whatsappHref = useMemo(() => {
    const message = [
      'Заявка TransferPro:',
      `Имя: ${formData.name || '-'}`,
      `Телефон: ${formData.phone || '-'}`,
      `Услуга: ${formData.service || '-'}`,
      `Дата: ${formData.date || '-'}`,
      `Адрес: ${formData.address || '-'}`,
    ].join('\n')
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
  }, [formData])

  const updateField = (event) => {
    const { name, value } = event.target
    if (name === 'phone') {
      const digits = value.replace(/\D/g, '').slice(0, 11)
      let normalized = digits
      if (digits.startsWith('8')) {
        normalized = `7${digits.slice(1)}`
      } else if (!digits.startsWith('7')) {
        normalized = `7${digits}`.slice(0, 11)
      }
      const formatted = `+${normalized}`
      setFormData((prev) => ({ ...prev, phone: formatted }))
      return
    }
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="dark">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
          <a href="#top" className="font-serif text-lg tracking-[0.2em] text-accent">TRANSFER PRO</a>
          
          <div className="hidden md:flex gap-5 items-center text-sm">
            <nav className="flex gap-5">
              <button onClick={() => setDesktopTab('services')} className="hover:text-accent transition">{t.services}</button>
              <button onClick={() => setDesktopTab('standards')} className="hover:text-accent transition">{t.standards}</button>
              <button onClick={() => setDesktopTab('booking')} className="hover:text-accent transition">Прайс</button>
              <button onClick={() => setDesktopTab('booking')} className="hover:text-accent transition">{t.booking}</button>
              <button onClick={() => setDesktopTab('contacts')} className="hover:text-accent transition">{t.contacts}</button>
            </nav>
            
            <div className="flex gap-2 border-l border-white/20 pl-5">
              <select value={language} onChange={(e) => setLanguage(e.target.value)} className="bg-white/5 border border-white/10 rounded px-2 py-1 text-xs cursor-pointer hover:border-accent transition">
                <option value="ru">РУ</option>
                <option value="kk">KK</option>
                <option value="en">EN</option>
              </select>
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-white/10 bg-black/95">
            <nav className="flex flex-col gap-2 px-4 py-4 text-sm">
              <button
                onClick={() => { setMobileMenuOpen(false); setMobileTab('services') }}
                className="w-full text-left py-3 px-3 rounded-lg bg-white/5 hover:bg-white/10 transition"
                aria-label="Открыть раздел услуги"
              >
                Услуги
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); setMobileTab('standards') }}
                className="w-full text-left py-3 px-3 rounded-lg bg-white/5 hover:bg-white/10 transition"
                aria-label="Открыть раздел стандарты"
              >
                Стандарты
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); setMobileTab('home') }}
                className="w-full text-left py-3 px-3 rounded-lg bg-white/5 hover:bg-white/10 transition"
                aria-label="Перейти на главную"
              >
                Главная
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); setMobileTab('contacts') }}
                className="w-full text-left py-3 px-3 rounded-lg bg-white/5 hover:bg-white/10 transition"
                aria-label="Контакты"
              >
                Контакты
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); setMobileTab('booking') }}
                className="w-full text-left py-3 px-3 rounded-lg bg-white/5 hover:bg-white/10 transition"
                aria-label="Открыть форму заказа"
              >
                Заказать
              </button>
              <div className="border-t border-white/10 my-2 pt-2">
                <button
                  onClick={() => { setMobileMenuOpen(false); setMobileTab('history') }}
                  className="w-full text-left py-2 px-3 rounded-lg bg-cyan-950/20 hover:bg-cyan-950/30 transition text-xs"
                >
                  📋 История ({orderHistory.length})
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); setMobileTab('favorites') }}
                  className="w-full text-left py-2 px-3 rounded-lg bg-pink-950/20 hover:bg-pink-950/30 transition text-xs mt-2"
                >
                  ❤️ Избранное ({favorites.length})
                </button>
              </div>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-2 w-full block py-3 text-center rounded-lg bg-accent text-black font-semibold">WhatsApp</a>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile single-screen tabbed view */}
      <div onPointerDown={closeMobileMenu} className="md:hidden min-h-[calc(100vh-120px)] w-full flex flex-col bg-gradient-to-b from-black to-black/90 pb-24">
        <div className="flex-1 flex flex-col justify-start items-start px-4 sm:px-5 py-6 sm:py-8 overflow-y-auto">
          {mobileTab === 'home' && (
            <motion.div className="w-full space-y-5 sm:space-y-6 bg-gradient-to-b from-black via-amber-950/20 to-black rounded-2xl sm:rounded-3xl p-6 sm:p-8" variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6 }}>
              <div className="border-l-3 border-accent pl-4 sm:pl-5">
                <p className="text-accent text-sm sm:text-base font-bold tracking-wide">Астана · Premium Transport Service</p>
              </div>
              
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight text-white">Ваш персональный автопарк в столице</h1>
              
              <div className="space-y-3 sm:space-y-4 text-white text-sm sm:text-base leading-relaxed font-light">
                <p>
                  Мы не просто предоставляем автомобиль с водителем — мы берем на себя <span className="text-accent font-semibold">полную ответственность</span> за ваш комфорт на дорогах столицы.
                </p>
                
                <p>
                  <span className="text-accent font-semibold">Transfer Pro</span> — это синергия профессионального этикета, пунктуальности и глубокого понимания потребностей VIP-клиентов.
                </p>
                
                <p>
                  Мы работаем для того, чтобы вы могли сосредоточиться на своих делах, пока мы обеспечиваем идеальный маршрут.
                </p>
              </div>
              
              <button
                onClick={() => setMobileTab('booking')}
                className="w-full mt-5 sm:mt-6 py-3.5 sm:py-4 rounded-xl bg-accent text-black font-bold text-base sm:text-lg hover:bg-accent/90 active:scale-95 transition shadow-lg"
              >
                Начать заказ
              </button>
            </motion.div>
          )}

          {mobileTab === 'services' && (
            <motion.div className="w-full space-y-4 sm:space-y-5 bg-gradient-to-b from-black via-blue-950/20 to-black rounded-2xl sm:rounded-3xl p-6 sm:p-8" variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6 }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-accent font-bold">Услуги</h2>
              
              <div className="space-y-3 sm:space-y-4 text-white/75">
                {services.map((service, idx) => {
                  const Icon = service.icon
                  return (
                    <button
                      key={service.title}
                      onClick={() => { setFormData(prev => ({ ...prev, service: service.title })); setMobileTab('booking') }}
                      className="w-full text-left p-4 sm:p-5 rounded-xl bg-gradient-to-r from-white/5 to-white/3 hover:from-white/10 hover:to-white/5 active:scale-95 transition border-l-4 border-accent shadow-md hover:shadow-lg"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <Icon className="text-accent flex-shrink-0 mt-0.5 w-5 h-5 sm:w-6 sm:h-6" />
                        <div className="flex-1">
                          <p className="font-bold text-accent text-base sm:text-lg">{service.title}</p>
                          <p className="text-xs sm:text-sm text-white/60 mt-0.5">{service.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-accent font-semibold mb-3 text-sm sm:text-base">{service.price}</p>
                      <ul className="text-xs sm:text-sm space-y-1.5 text-white/70">
                        {service.details.slice(0, 3).map((detail, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-accent mt-0.5 flex-shrink-0">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                        {service.details.length > 3 && (
                          <li className="text-accent/80 italic pt-1">+ {service.details.length - 3} ещё...</li>
                        )}
                      </ul>
                    </button>
                  )
                })}
              </div>
            </motion.div>
          )}

          {mobileTab === 'standards' && (
            <motion.div className="w-full space-y-4 sm:space-y-5 bg-gradient-to-b from-black via-purple-950/20 to-black rounded-2xl sm:rounded-3xl p-6 sm:p-8" variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6 }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-accent font-bold">Стандарты</h2>
              
              <div className="space-y-3 sm:space-y-4 text-white/75">
                {standards.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.title}
                      onClick={() => { setMobileTab('booking') }}
                      className="w-full text-left p-4 sm:p-5 rounded-xl bg-gradient-to-r from-white/5 to-white/3 hover:from-white/10 hover:to-white/5 active:scale-95 transition border-l-4 border-accent flex items-start gap-3 sm:gap-4 shadow-md"
                      aria-label={item.title}
                    >
                      <Icon className="text-accent flex-shrink-0 mt-0.5 w-6 h-6 sm:w-7 sm:h-7" />
                      <div className="flex-1">
                        <p className="font-bold text-accent mb-2 text-base sm:text-lg">{item.title}</p>
                        <p className="text-sm sm:text-base leading-relaxed">{item.desc}</p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </motion.div>
          )}

          {mobileTab === 'contacts' && (
            <motion.div className="w-full space-y-4 sm:space-y-5 bg-gradient-to-b from-black via-emerald-950/20 to-black rounded-2xl sm:rounded-3xl p-6 sm:p-8" variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6 }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-accent font-bold">Контакты</h2>
              <div className="space-y-3 sm:space-y-4 text-white/90">
                <a href="tel:+77781556699" className="block w-full p-4 sm:p-5 rounded-xl bg-gradient-to-r from-accent/20 to-accent/10 hover:from-accent/30 hover:to-accent/20 active:scale-95 transition border-l-4 border-accent text-base sm:text-lg font-semibold text-accent shadow-md">+7 778 155 6699</a>
                <a href="tel:+77089389145" className="block w-full p-4 sm:p-5 rounded-xl bg-gradient-to-r from-white/5 to-white/3 hover:from-white/10 hover:to-white/5 active:scale-95 transition border-l-4 border-accent text-base sm:text-lg font-semibold shadow-md">+7 708 938 9145</a>
                <a href="tel:+77771351387" className="block w-full p-4 sm:p-5 rounded-xl bg-gradient-to-r from-white/5 to-white/3 hover:from-white/10 hover:to-white/5 active:scale-95 transition border-l-4 border-accent text-base sm:text-lg font-semibold shadow-md">+7 777 135 1387</a>
              </div>
            </motion.div>
          )}

          {mobileTab === 'booking' && (
            <motion.div className="w-full space-y-4 sm:space-y-5 bg-gradient-to-b from-black via-rose-950/20 to-black rounded-2xl sm:rounded-3xl p-6 sm:p-8" variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6 }}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-serif text-accent font-bold">Готовы оценить новый уровень комфорта?</h2>
                  <p className="mt-3 text-white/70 text-sm sm:text-base leading-relaxed">Закажите разовый трансфер или оформите долгосрочный договор на обслуживание уже сегодня. Наш менеджер на связи 24/7.</p>
                </div>
                {savedSince && <span className="text-xs text-green-400 font-semibold whitespace-nowrap mt-1">✓ Сохранено</span>}
              </div>

              <div className="space-y-3.5 sm:space-y-4">
                <div>
                  <label htmlFor="name_mobile" className="block text-xs sm:text-sm font-bold text-white/90 mb-2">Ваше имя *</label>
                  <input 
                    id="name_mobile" 
                    name="name" 
                    placeholder="Например: Дархан" 
                    value={formData.name} 
                    onChange={updateField} 
                    onFocus={closeMobileMenu} 
                    className="w-full rounded-xl border-2 border-white/20 bg-black/60 px-4 sm:px-5 py-3 sm:py-3.5 text-base sm:text-lg font-medium outline-none focus:border-accent focus:bg-black/80 transition placeholder-white/40 shadow-md" 
                  />
                </div>

                <div>
                  <label htmlFor="phone_mobile" className="block text-xs sm:text-sm font-bold text-white/90 mb-2">Номер телефона *</label>
                  <input 
                    id="phone_mobile" 
                    name="phone" 
                    type="tel" 
                    inputMode="tel" 
                    pattern="\\+7[0-9]{10}" 
                    placeholder="+7 (___) ___-__-__" 
                    value={formData.phone} 
                    onChange={updateField} 
                    onFocus={closeMobileMenu} 
                    className={`w-full rounded-xl border-2 px-4 sm:px-5 py-3 sm:py-3.5 text-base sm:text-lg font-medium outline-none transition ${
                      formData.phone.length > 2 && !isValidPhone(formData.phone)
                        ? 'border-red-500/60 bg-red-500/10 focus:border-red-500/80 focus:bg-red-500/15'
                        : 'border-white/20 bg-black/60 focus:border-accent focus:bg-black/80'
                    } placeholder-white/40 shadow-md`}
                  />
                  {formData.phone.length > 2 && !isValidPhone(formData.phone) && (
                    <p className="mt-1.5 text-xs sm:text-sm text-red-400 font-medium">Введите корректный номер (+7XXXXXXXXXX)</p>
                  )}
                </div>

                <div>
                  <label htmlFor="service_mobile" className="block text-xs sm:text-sm font-bold text-white/90 mb-2">Выберите услугу *</label>
                  <select 
                    id="service_mobile"
                    name="service" 
                    value={formData.service} 
                    onChange={updateField} 
                    onFocus={closeMobileMenu} 
                    className="w-full rounded-xl border-2 border-white/20 bg-black/60 px-4 sm:px-5 py-3 sm:py-3.5 text-base sm:text-lg font-medium outline-none focus:border-accent focus:bg-black/80 transition shadow-md"
                  >
                    {services.map((service) => (
                      <option key={service.title} value={service.title}>{service.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="date_mobile" className="block text-xs sm:text-sm font-bold text-white/90 mb-2">Дата поездки *</label>
                  <input 
                    id="date_mobile"
                    name="date" 
                    type="date" 
                    min={getTodayDate()} 
                    value={formData.date} 
                    onChange={updateField} 
                    onFocus={closeMobileMenu} 
                    className="w-full rounded-xl border-2 border-white/20 bg-black/60 px-4 sm:px-5 py-3 sm:py-3.5 text-base sm:text-lg font-medium outline-none focus:border-accent focus:bg-black/80 transition shadow-md" 
                  />
                </div>

                <div>
                  <label htmlFor="address_mobile" className="block text-xs sm:text-sm font-bold text-white/90 mb-2">Адрес подачи</label>
                  <input
                    id="address_mobile"
                    name="address"
                    placeholder="Например: Астана, Кабанбай батыра 53"
                    value={formData.address}
                    onChange={updateField}
                    onFocus={closeMobileMenu}
                    className="w-full rounded-xl border-2 border-white/20 bg-black/60 px-4 sm:px-5 py-3 sm:py-3.5 text-base sm:text-lg font-medium outline-none focus:border-accent focus:bg-black/80 transition placeholder-white/40 shadow-md"
                  />
                  <button
                    type="button"
                    onClick={addFavorite}
                    disabled={!formData.address}
                    className={`mt-2 w-full rounded-lg px-3 py-2 text-sm font-semibold transition ${
                      formData.address ? 'bg-accent/20 text-accent hover:bg-accent/30' : 'bg-white/5 text-white/50 cursor-not-allowed'
                    }`}
                  >
                    Сохранить адрес в избранное
                  </button>
                </div>

                <div>
                  <label htmlFor="comment_mobile" className="block text-xs sm:text-sm font-bold text-white/90 mb-2">Дополнительные пожелания</label>
                  <textarea 
                    id="comment_mobile"
                    name="comment" 
                    placeholder="Поделитесь своими пожеланиями..." 
                    value={formData.comment} 
                    onChange={updateField} 
                    onFocus={closeMobileMenu} 
                    className="w-full rounded-xl border-2 border-white/20 bg-black/60 px-4 sm:px-5 py-3 sm:py-3.5 text-base sm:text-lg font-medium outline-none focus:border-accent focus:bg-black/80 transition resize-none placeholder-white/40 shadow-md" 
                    rows="4" 
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (canSubmit) {
                    addToHistory()
                    window.open(whatsappHref, '_blank')
                  }
                }}
                disabled={!canSubmit}
                className={`w-full rounded-xl px-4 sm:px-5 py-4 sm:py-4.5 font-bold text-lg sm:text-xl transition active:scale-95 shadow-lg ${
                  canSubmit
                    ? 'bg-gradient-to-r from-accent to-accent/90 text-black hover:from-accent/95 hover:to-accent/85 cursor-pointer'
                    : 'bg-accent/40 text-black/60 cursor-not-allowed'
                }`}
              >
                {canSubmit ? 'Заказать сейчас' : 'Заполните форму'}
              </button>
            </motion.div>
          )}

          {mobileTab === 'history' && (
            <motion.div className="w-full space-y-3 bg-gradient-to-b from-black via-cyan-950/20 to-black rounded-2xl sm:rounded-3xl p-6 sm:p-8" variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6 }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-accent font-bold">📋 История заказов</h2>
              {orderHistory.length === 0 ? (
                <p className="text-white/60 text-center py-8">Нет заказов</p>
              ) : (
                <div className="space-y-2">
                  {orderHistory.map((order) => (
                    <div key={order.id} className="p-3 bg-white/5 rounded-lg border-l-4 border-accent">
                      <p className="text-sm text-white/80">{order.service}</p>
                      <p className="text-xs text-white/60">{order.name} • {order.createdAt}</p>
                      <button onClick={() => repeatOrder(order)} className="text-xs mt-2 px-3 py-1 bg-accent/20 text-accent rounded hover:bg-accent/30 transition">
                        Повторить
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {mobileTab === 'favorites' && (
            <motion.div className="w-full space-y-3 bg-gradient-to-b from-black via-pink-950/20 to-black rounded-2xl sm:rounded-3xl p-6 sm:p-8" variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6 }}>
              <h2 className="text-2xl sm:text-3xl font-serif text-accent font-bold">❤️ Избранное</h2>
              {favorites.length === 0 ? (
                <p className="text-white/60 text-center py-8">Нет избранных адресов</p>
              ) : (
                <div className="space-y-2">
                  {favorites.map((fav) => (
                    <div key={fav.id} className="p-3 bg-white/5 rounded-lg border-l-4 border-accent flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-accent">{fav.name}</p>
                        <p className="text-xs text-white/60">{fav.address}</p>
                      </div>
                      <button onClick={() => removeFavorite(fav.id)} className="text-red-400 hover:text-red-500">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </div>

        <div className="border-t border-white/10 p-2 sm:p-3 bg-black/98 backdrop-blur fixed bottom-0 left-0 right-0 md:hidden">
          <div className="flex items-center justify-between gap-2 sm:gap-2.5 px-2">
            <div className="flex gap-1.5 sm:gap-2 w-full overflow-x-auto">
                <button onClick={() => setMobileTab('home')} className={`flex-1 text-center px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition active:scale-95 ${mobileTab === 'home' ? 'bg-accent text-black font-bold shadow-md' : 'bg-white/5 text-white/80 hover:bg-white/10'}`} aria-label="Главная">Главная</button>
                <button onClick={() => setMobileTab('services')} className={`flex-1 text-center px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition active:scale-95 ${mobileTab === 'services' ? 'bg-accent text-black font-bold shadow-md' : 'bg-white/5 text-white/80 hover:bg-white/10'}`} aria-label="Услуги">Услуги</button>
                <button onClick={() => setMobileTab('standards')} className={`flex-1 text-center px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition active:scale-95 ${mobileTab === 'standards' ? 'bg-accent text-black font-bold shadow-md' : 'bg-white/5 text-white/80 hover:bg-white/10'}`} aria-label="Стандарты">Стандарты</button>
                <button onClick={() => setMobileTab('contacts')} className={`flex-1 text-center px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition active:scale-95 ${mobileTab === 'contacts' ? 'bg-accent text-black font-bold shadow-md' : 'bg-white/5 text-white/80 hover:bg-white/10'}`} aria-label="Контакты">Контакты</button>
                <button onClick={() => setMobileTab('booking')} className={`flex-1 text-center px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition active:scale-95 ${mobileTab === 'booking' ? 'bg-accent text-black font-bold shadow-md' : 'bg-white/5 text-white/80 hover:bg-white/10'}`} aria-label="Заказ">Заказ</button>
              </div>
            <div className="flex gap-1.5 sm:gap-2">
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-accent text-black text-xs sm:text-sm font-bold whitespace-nowrap hover:bg-accent/90 active:scale-95 transition shadow-md">WA</a>
            </div>
          </div>
        </div>
      </div>

      <main id="top" className="hidden md:flex md:flex-col md:min-h-screen">
        {/* Desktop Tab Navigation */}
        <div className="sticky top-[60px] z-40 border-b border-white/10 bg-black/70 backdrop-blur py-3 px-8">
          <div className="mx-auto max-w-7xl flex gap-4">
            <button onClick={() => setDesktopTab('home')} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${desktopTab === 'home' ? 'bg-accent text-black' : 'bg-white/5 text-white/80 hover:bg-white/10'}`}>Главная</button>
            <button onClick={() => setDesktopTab('services')} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${desktopTab === 'services' ? 'bg-accent text-black' : 'bg-white/5 text-white/80 hover:bg-white/10'}`}>Услуги</button>
            <button onClick={() => setDesktopTab('standards')} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${desktopTab === 'standards' ? 'bg-accent text-black' : 'bg-white/5 text-white/80 hover:bg-white/10'}`}>Стандарты</button>
            <button onClick={() => setDesktopTab('contacts')} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${desktopTab === 'contacts' ? 'bg-accent text-black' : 'bg-white/5 text-white/80 hover:bg-white/10'}`}>Контакты</button>
            <button onClick={() => setDesktopTab('booking')} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${desktopTab === 'booking' ? 'bg-accent text-black' : 'bg-white/5 text-white/80 hover:bg-white/10'}`}>Заказ</button>
          </div>
        </div>

        {/* Desktop Content Area */}
        <div className="flex-1 flex items-center justify-center px-8 py-12">
          <div className="w-full max-w-6xl">
            {desktopTab === 'home' && (
              <motion.div className="space-y-6 bg-gradient-to-br from-black via-amber-950/30 to-black rounded-2xl p-12" variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6 }}>
                <div className="border-l-4 border-accent pl-6">
                  <p className="text-accent text-sm font-semibold">Астана · Premium Transport Service</p>
                </div>
                
                <h1 className="font-serif text-5xl leading-tight text-white max-w-3xl">Ваш персональный автопарк в столице</h1>
                
                <div className="space-y-4 text-white text-base leading-relaxed max-w-3xl">
                  <p>
                    Мы не просто предоставляем автомобиль с водителем — мы берем на себя <span className="text-accent font-semibold">полную ответственность</span> за ваш комфорт на дорогах столицы.
                  </p>
                  
                  <p>
                    <span className="text-accent font-semibold">Transfer Pro</span> — это синергия профессионального этикета, пунктуальности и глубокого понимания потребностей VIP-клиентов.
                  </p>
                  
                  <p>
                    Мы работаем для того, чтобы вы могли сосредоточиться на своих делах, пока мы обеспечиваем идеальный маршрут.
                  </p>
                </div>
                
                <button
                  onClick={() => setDesktopTab('booking')}
                  className="mt-6 px-8 py-3 rounded-lg bg-accent text-black font-semibold text-base hover:bg-accent/90 transition"
                >
                  Начать заказ
                </button>
              </motion.div>
            )}

            {desktopTab === 'services' && (
              <motion.div className="space-y-6 bg-gradient-to-br from-black via-blue-950/30 to-black rounded-2xl p-12" variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6 }}>
                <h2 className="section-title text-4xl text-accent">Услуги</h2>
                
                <div className="grid gap-6 grid-cols-2">
                  {services.map((service, idx) => {
                    const Icon = service.icon
                    return (
                      <motion.article
                        key={service.title}
                        className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-6 backdrop-blur transition duration-300 hover:border-accent/60 hover:bg-white/12 hover:shadow-lg hover:-translate-y-2 cursor-pointer"
                        onClick={() => { setFormData(prev => ({ ...prev, service: service.title })); setDesktopTab('booking') }}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.45, delay: idx * 0.08 }}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <Icon className="text-accent flex-shrink-0 w-8 h-8" />
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white">{service.title}</h3>
                            <p className="text-sm text-accent/80 font-semibold mt-1">{service.subtitle}</p>
                          </div>
                        </div>
                        
                        <p className="text-white/80 text-sm leading-relaxed mb-4">
                          {service.details[0]}
                        </p>
                        
                        <div className="space-y-2 mb-4 pb-4 border-b border-white/10">
                          {service.details.slice(1).map((detail, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-white/70">
                              <span className="text-accent mt-1 flex-shrink-0">✓</span>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                        
                        <p className="text-accent font-bold text-lg">{service.price}</p>
                      </motion.article>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {desktopTab === 'standards' && (
              <motion.div className="space-y-6 bg-gradient-to-br from-black via-purple-950/30 to-black rounded-2xl p-12" variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6 }}>
                <h2 className="section-title text-4xl text-accent">Standard of Excellence</h2>
                
                <div className="grid gap-4 grid-cols-3">
                  {standards.map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={item.title}
                        className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition duration-300 hover:border-accent/60 hover:-translate-y-1"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: idx * 0.06 }}
                      >
                        <Icon className="mx-auto mb-3 text-accent text-base" />
                        <p className="text-base text-center mb-3 text-white">{item.title}</p>
                        <p className="text-white/90 text-sm text-center">{item.desc}</p>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {desktopTab === 'contacts' && (
              <motion.div className="space-y-6 bg-gradient-to-br from-black via-emerald-950/30 to-black rounded-2xl p-12" variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6 }}>
                <h2 className="section-title text-4xl text-accent">Контакты</h2>
                <p className="text-white text-base mb-6">Позвоните или напишите в WhatsApp — мы на связи 24/7</p>
                <div className="flex gap-4 flex-wrap">
                  <a href="tel:+77781556699" className="px-6 py-3 rounded-lg bg-accent text-black font-semibold text-base hover:bg-accent/90 transition">+7 778 155 6699</a>
                  <a href="tel:+77089389145" className="px-6 py-3 rounded-lg bg-accent text-black font-semibold text-base hover:bg-accent/90 transition">+7 708 938 9145</a>
                  <a href="tel:+77771351387" className="px-6 py-3 rounded-lg bg-accent text-black font-semibold text-base hover:bg-accent/90 transition">+7 777 135 1387</a>
                </div>
              </motion.div>
            )}

            {desktopTab === 'booking' && (
              <motion.div
                className="rounded-2xl border border-accent/35 bg-gradient-to-br from-rose-950/20 via-black to-black p-8 max-w-2xl"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="section-title text-4xl text-accent">Заказ</h2>
                <p className="mt-3 text-white text-base mb-6">Закажите разовый трансфер или оформите долгосрочный договор на обслуживание уже сегодня.</p>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name_desktop" className="text-sm font-semibold text-white">Имя *</label>
                    <input id="name_desktop" name="name" required placeholder="Белгибаев Дархан" value={formData.name} onChange={updateField} className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-base font-medium text-white placeholder-white/60 outline-none transition focus:border-accent focus:bg-white/15" />
                  </div>
                  <div>
                    <label htmlFor="phone_desktop" className="text-sm font-semibold text-white">Телефон *</label>
                    <input id="phone_desktop" name="phone" type="tel" inputMode="tel" pattern="\+7[0-9]{10}" required placeholder="+7 (___) ___-__-__" value={formData.phone} onChange={updateField} className={`mt-1 w-full rounded-lg border px-4 py-2 text-base font-medium text-white placeholder-white/60 outline-none transition ${
                      formData.phone.length > 2 && !isValidPhone(formData.phone)
                        ? 'border-red-500/50 bg-red-500/10 focus:bg-red-500/15 focus:border-red-500'
                        : 'border-white/30 bg-white/10 focus:border-accent focus:bg-white/15'
                    }`} />
                  </div>
                  <div>
                    <label htmlFor="service_desktop" className="text-sm font-semibold text-white">Услуга *</label>
                    <select id="service_desktop" name="service" value={formData.service} onChange={updateField} className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-base font-medium text-white outline-none transition focus:border-accent focus:bg-white/15">
                      {services.map((service) => (
                        <option key={service.title} value={service.title} className="text-black">{service.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date_desktop" className="text-sm font-semibold text-white">Дата *</label>
                    <input id="date_desktop" name="date" type="date" required min={getTodayDate()} value={formData.date} onChange={updateField} className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-base font-medium text-white outline-none transition focus:border-accent focus:bg-white/15" />
                  </div>
                  <div>
                    <label htmlFor="address_desktop" className="text-sm font-semibold text-white">Адрес подачи</label>
                    <input id="address_desktop" name="address" placeholder="Астана, Кабанбай батыра 53" value={formData.address} onChange={updateField} className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-base font-medium text-white placeholder-white/60 outline-none transition focus:border-accent focus:bg-white/15" />
                    <button
                      type="button"
                      onClick={addFavorite}
                      disabled={!formData.address}
                      className={`mt-2 w-full rounded-lg px-4 py-2 text-sm font-semibold transition ${
                        formData.address ? 'bg-accent/20 text-accent hover:bg-accent/30' : 'bg-white/5 text-white/50 cursor-not-allowed'
                      }`}
                    >
                      Сохранить адрес в избранное
                    </button>
                  </div>
                  <div>
                    <label htmlFor="comment_desktop" className="text-sm font-semibold text-white">Комментарий</label>
                    <textarea id="comment_desktop" name="comment" placeholder="Дополнительные пожелания..." value={formData.comment} onChange={updateField} className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-base font-medium text-white placeholder-white/60 outline-none transition focus:border-accent focus:bg-white/15 resize-none" rows="3" />
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (canSubmit) {
                        addToHistory()
                        window.open(whatsappHref, '_blank')
                      }
                    }}
                    disabled={!canSubmit}
                    className={`w-full mt-4 px-4 py-3 rounded-lg text-base font-semibold transition ${
                      canSubmit
                        ? 'bg-accent text-black hover:bg-accent/90 cursor-pointer'
                        : 'bg-accent/40 text-black/60 cursor-not-allowed'
                    }`}
                  >
                    Отправить в WhatsApp
                  </button>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 px-4 py-6 text-center text-xs text-white/60 md:px-8 md:translate-y-0">
        © {new Date().getFullYear()} TransferPro · Premium transfer in Astana
      </footer>
    </div>
  )
}

export default App
