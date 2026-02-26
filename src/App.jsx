import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { BriefcaseBusiness, Droplets, ShieldCheck, Wifi, Baby, Crown, Plane, Building2, Car, UserCheck, Sparkles, Battery, Award } from 'lucide-react'

const whatsappNumber = '77781556699'

const services = [
  { title: 'VIP Трансфер Аэропорт', price: 'от 15 000 ₸', icon: Plane },
  { title: 'Развозка Smart Parents', price: 'от 300 000 ₸ / мес', icon: Baby },
  { title: 'Бизнес-сопровождение', price: 'от 10 000 ₸ / час', icon: BriefcaseBusiness },
  { title: 'Корпоративный B2B', price: 'Индивидуальный тариф', icon: Building2 },
  { title: 'Премиальный Межгород', price: 'По запросу', icon: Car },
  { title: 'Трезвый водитель', price: 'от 15 000 ₸', icon: UserCheck },
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
  const closeMobileMenu = () => setMobileMenuOpen(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '+7',
    service: services[0].title,
    date: '',
    comment: '',
  })

  const getTodayDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  const isValidPhone = (phone) => {
    const digitsOnly = phone.replace(/\D/g, '')
    return digitsOnly.length === 11 && digitsOnly.startsWith('7')
  }

  const canSubmit = formData.name.trim() && isValidPhone(formData.phone) && formData.date

  const whatsappHref = useMemo(() => {
    const message = [
      'Заявка TransferPro:',
      `Имя: ${formData.name || '-'}`,
      `Телефон: ${formData.phone || '-'}`,
      `Услуга: ${formData.service || '-'}`,
      `Дата: ${formData.date || '-'}`,
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
    <div className="bg-base">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
          <a href="#top" className="font-serif text-lg tracking-[0.2em] text-accent">TRANSFER PRO</a>
          <nav className="hidden gap-5 text-sm md:flex">
            <a href="#services" className="hover:text-accent transition">Услуги</a>
            <a href="#standards" className="hover:text-accent transition">Стандарты</a>
            <a href="#price" className="hover:text-accent transition">Прайс</a>
            <a href="#booking" className="hover:text-accent transition">Заказать</a>
            <a href="#contacts" className="hover:text-accent transition">Контакты</a>
          </nav>
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
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-2 w-full block py-3 text-center rounded-lg bg-accent text-black font-semibold">WhatsApp</a>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile single-screen tabbed view */}
      <div onPointerDown={closeMobileMenu} className="md:hidden h-screen w-full flex flex-col bg-gradient-to-b from-black to-black/90">
        <div className="flex-1 flex flex-col justify-center items-start px-3 sm:px-4 md:px-6">
          {mobileTab === 'home' && (
            <motion.div className="w-full space-y-3 sm:space-y-4 bg-gradient-to-b from-black via-amber-950/20 to-black rounded-xl p-4 sm:p-5 md:p-6" variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6 }}>
              <div className="border-l-2 border-accent pl-3">
                <p className="text-accent text-xs sm:text-sm font-semibold">Астана · Premium Transport Service</p>
              </div>
              
              <h1 className="font-serif text-xl sm:text-2xl md:text-3xl leading-tight text-white">Ваш персональный автопарк в столице</h1>
              
              <div className="space-y-2 sm:space-y-3 text-white text-xs sm:text-sm md:text-base leading-relaxed">
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
                className="w-full mt-3 sm:mt-4 py-2 sm:py-3 rounded-lg bg-accent text-black font-semibold text-xs sm:text-sm md:text-base hover:bg-accent/90 transition"
              >
                Начать заказ
              </button>
            </motion.div>
          )}

          {mobileTab === 'services' && (
            <motion.div className="w-full space-y-2 sm:space-y-3 bg-gradient-to-b from-black via-blue-950/20 to-black rounded-xl p-4 sm:p-5 md:p-6" variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6 }}>
              <h2 className="section-title text-base sm:text-lg md:text-xl">Услуги</h2>
              
              <div className="space-y-2 sm:space-y-3 text-white/75 text-xs sm:text-sm leading-relaxed">
                <button
                  onClick={() => { setFormData(prev => ({ ...prev, service: services[0].title })); setMobileTab('booking') }}
                  className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/8 transition border-l-2 border-accent"
                >
                  <p className="font-semibold text-accent mb-1">VIP Трансфер (Аэропорт — Город)</p>
                  <p>Встреча в зоне прилета с именной табличкой, полная помощь с багажом и 60 минут бесплатного ожидания при задержке рейса.</p>
                </button>

                <button
                  onClick={() => { setFormData(prev => ({ ...prev, service: services[1].title })); setMobileTab('booking') }}
                  className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/8 transition border-l-2 border-accent"
                >
                  <p className="font-semibold text-accent mb-1">Smart Parents (Развозка детей)</p>
                  <p>Безопасный маршрут «Дом — Школа — Секция» с передачей ребенка из рук в руки представителю заведения и обязательным фотоотчетом родителям.</p>
                </button>

                <button
                  onClick={() => { setFormData(prev => ({ ...prev, service: services[2].title })); setMobileTab('booking') }}
                  className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/8 transition border-l-2 border-accent"
                >
                  <p className="font-semibold text-accent mb-1">Бизнес-сопровождение</p>
                  <p>Почасовая аренда автомобиля с водителем для плотного графика встреч. Водитель готов к выполнению консьерж-поручений, пока вы находитесь на переговорах.</p>
                </button>

                <button
                  onClick={() => { setFormData(prev => ({ ...prev, service: services[3].title })); setMobileTab('booking') }}
                  className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/8 transition border-l-2 border-accent"
                >
                  <p className="font-semibold text-accent mb-1">Корпоративный аутсорсинг</p>
                  <p>Комплексное транспортное обслуживание компаний, посольств и делегаций с полной бухгалтерской отчетностью (ЭДО).</p>
                </button>

                <button
                  onClick={() => { setFormData(prev => ({ ...prev, service: services[5].title })); setMobileTab('booking') }}
                  className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/8 transition border-l-2 border-accent"
                >
                  <p className="font-semibold text-accent mb-1">Трезвый водитель (VIP Service)</p>
                  <p>Безопасная доставка клиента на его собственном автомобиле. Мы гарантируем бережное управление техникой любого класса и полную конфиденциальность.</p>
                </button>
              </div>
            </motion.div>
          )}

          {mobileTab === 'standards' && (
            <motion.div className="w-full space-y-2 sm:space-y-3 bg-gradient-to-b from-black via-purple-950/20 to-black rounded-xl p-4 sm:p-5 md:p-6" variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6 }}>
              <h2 className="section-title text-base sm:text-lg md:text-xl">Стандарты</h2>
              
              <div className="space-y-2 sm:space-y-3 text-white/75 text-xs sm:text-sm leading-relaxed">
                {standards.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.title}
                      onClick={() => { setMobileTab('booking') }}
                      className="w-full text-left p-2 sm:p-3 md:p-4 rounded-lg bg-white/5 hover:bg-white/8 transition border-l-2 border-accent flex items-start gap-2 sm:gap-3"
                      aria-label={item.title}
                    >
                      <Icon className="text-accent flex-shrink-0 mt-0.5" size={20} />
                      <div className="flex-1">
                        <p className="font-semibold text-accent mb-1">{item.title}</p>
                        <p>{item.desc}</p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </motion.div>
          )}

          {mobileTab === 'contacts' && (
            <motion.div className="w-full space-y-2 sm:space-y-3 bg-gradient-to-b from-black via-emerald-950/20 to-black rounded-xl p-4 sm:p-5 md:p-6" variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6 }}>
              <h2 className="section-title text-base sm:text-lg md:text-xl">Контакты</h2>
              <div className="space-y-2 text-white/90 text-xs sm:text-sm md:text-base">
                <a href="tel:+77781556699" className="block w-full p-2 sm:p-3 rounded-lg bg-white/5 hover:bg-white/8 transition text-xs sm:text-sm md:text-base">+7 778 155 6699</a>
                <a href="tel:+77089389145" className="block w-full p-2 sm:p-3 rounded-lg bg-white/5 hover:bg-white/8 transition text-xs sm:text-sm md:text-base">+7 708 938 9145</a>
                <a href="tel:+77771351387" className="block w-full p-2 sm:p-3 rounded-lg bg-white/5 hover:bg-white/8 transition text-xs sm:text-sm md:text-base">+7 777 135 1387</a>
              </div>
            </motion.div>
          )}

          {mobileTab === 'booking' && (
            <motion.div className="w-full space-y-2 sm:space-y-3 bg-gradient-to-b from-black via-rose-950/20 to-black rounded-xl p-4 sm:p-5 md:p-6" variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6 }}>
              <div>
                <h2 className="section-title text-base sm:text-lg md:text-xl">Готовы оценить новый уровень комфорта?</h2>
                <p className="mt-2 text-white/70 text-xs sm:text-sm leading-relaxed">Закажите разовый трансфер или оформите долгосрочный договор на обслуживание уже сегодня. Наш менеджер на связи 24/7.</p>
              </div>

              <div className="space-y-2 text-xs sm:text-sm md:text-base">
                <input id="name_mobile" name="name" placeholder="Белгибаев Дархан" value={formData.name} onChange={updateField} onFocus={closeMobileMenu} className="w-full rounded-lg border border-white/20 bg-black/50 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm outline-none focus:border-accent transition" />
                <input id="phone_mobile" name="phone" type="tel" inputMode="tel" pattern="\\+7[0-9]{10}" placeholder="+7 (___) ___-__-__" value={formData.phone} onChange={updateField} onFocus={closeMobileMenu} className="w-full rounded-lg border border-white/20 bg-black/50 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm outline-none focus:border-accent transition" />
                <select name="service" value={formData.service} onChange={updateField} onFocus={closeMobileMenu} className="w-full rounded-lg border border-white/20 bg-black/50 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm outline-none focus:border-accent transition">
                  {services.map((service) => (
                    <option key={service.title} value={service.title}>{service.title}</option>
                  ))}
                </select>
                <input name="date" type="date" min={getTodayDate()} value={formData.date} onChange={updateField} onFocus={closeMobileMenu} className="w-full rounded-lg border border-white/20 bg-black/50 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm outline-none focus:border-accent transition" />
                <textarea name="comment" placeholder="Дополнительные пожелания и комментарии..." value={formData.comment} onChange={updateField} onFocus={closeMobileMenu} className="w-full rounded-lg border border-white/20 bg-black/50 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm outline-none focus:border-accent transition resize-none" rows="3" />
              </div>

              <button
                type="button"
                onClick={() => {
                  if (canSubmit) {
                    window.open(whatsappHref, '_blank')
                  }
                }}
                disabled={!canSubmit}
                className={`w-full rounded-lg px-3 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-sm transition ${
                  canSubmit
                    ? 'bg-accent text-black hover:bg-accent/90 cursor-pointer'
                    : 'bg-accent/40 text-black/60 cursor-not-allowed'
                }`}}
              >
                Заказать сейчас
              </button>
            </motion.div>
          )}
        </div>

        <div className="border-t border-white/10 p-1 sm:p-2 bg-black/95">
          <div className="flex items-center justify-between gap-1 sm:gap-2">
            <div className="flex gap-1 sm:gap-2 w-full overflow-x-auto">
                <button onClick={() => setMobileTab('home')} className={`flex-1 text-center px-1 sm:px-2 py-1.5 sm:py-2 rounded-lg text-xs whitespace-nowrap ${mobileTab === 'home' ? 'bg-accent text-black' : 'bg-white/5 text-white/80'}`} aria-label="Главная">Главная</button>
                <button onClick={() => setMobileTab('services')} className={`flex-1 text-center px-1 sm:px-2 py-1.5 sm:py-2 rounded-lg text-xs whitespace-nowrap ${mobileTab === 'services' ? 'bg-accent text-black' : 'bg-white/5 text-white/80'}`} aria-label="Услуги">Услуги</button>
                <button onClick={() => setMobileTab('standards')} className={`flex-1 text-center px-1 sm:px-2 py-1.5 sm:py-2 rounded-lg text-xs whitespace-nowrap ${mobileTab === 'standards' ? 'bg-accent text-black' : 'bg-white/5 text-white/80'}`} aria-label="Стандарты">Стандарты</button>
                <button onClick={() => setMobileTab('contacts')} className={`flex-1 text-center px-1 sm:px-2 py-1.5 sm:py-2 rounded-lg text-xs whitespace-nowrap ${mobileTab === 'contacts' ? 'bg-accent text-black' : 'bg-white/5 text-white/80'}`} aria-label="Контакты">Контакты</button>
                <button onClick={() => setMobileTab('booking')} className={`flex-1 text-center px-1 sm:px-2 py-1.5 sm:py-2 rounded-lg text-xs whitespace-nowrap ${mobileTab === 'booking' ? 'bg-accent text-black' : 'bg-white/5 text-white/80'}`} aria-label="Заказ">Заказ</button>
              </div>
            <div className="flex gap-1 sm:gap-2">
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-accent text-black text-xs whitespace-nowrap">WA</a>
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
                
                <div className="grid gap-4 grid-cols-3">
                  {services.map((service, idx) => {
                    const Icon = service.icon
                    return (
                      <motion.article
                        key={service.title}
                        className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition duration-300 hover:border-accent/60 hover:-translate-y-1"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.45, delay: idx * 0.05 }}
                      >
                        <Icon className="mb-4 text-accent text-base" />
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                        <p className="mt-2 text-white text-base font-semibold">{service.price}</p>
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
                    <label htmlFor="comment_desktop" className="text-sm font-semibold text-white">Комментарий</label>
                    <textarea id="comment_desktop" name="comment" placeholder="Дополнительные пожелания..." value={formData.comment} onChange={updateField} className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-base font-medium text-white placeholder-white/60 outline-none transition focus:border-accent focus:bg-white/15 resize-none" rows="3" />
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (canSubmit) {
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

      <a
        href="#booking"
        className="fixed bottom-2 left-1/2 z-40 w-[calc(100%-1rem)] -translate-x-1/2 rounded-lg bg-accent px-3 py-2 text-center font-semibold text-black shadow-glow transition hover:scale-[1.02] md:hidden text-xs"
        onClick={(e) => { e.preventDefault(); setMobileTab('booking') }}
      >
        Заказать
      </a>

      <footer className="border-t border-white/10 px-4 py-6 text-center text-xs text-white/60 md:px-8">
        © {new Date().getFullYear()} TransferPro · Premium transfer in Astana
      </footer>
    </div>
  )
}

export default App
