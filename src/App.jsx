import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { BriefcaseBusiness, Droplets, ShieldCheck, Wifi, Baby, Crown, Plane, Building2, Car, UserCheck } from 'lucide-react'

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
  { title: 'Премиальная вода', icon: Droplets },
  { title: 'Профессиональный этикет', icon: Crown },
  { title: 'Безопасность и детские кресла', icon: ShieldCheck },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '+7',
    service: services[0].title,
    date: '',
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
          </nav>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Menu"
          >
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="hidden md:block rounded-full bg-accent px-4 py-2 text-xs font-semibold text-black transition hover:scale-105 hover:shadow-glow md:text-sm">
            WhatsApp
          </a>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/95">
            <nav className="flex flex-col gap-0 px-4 py-4 text-sm">
              <a href="#services" className="py-2 hover:text-accent transition" onClick={() => setMobileMenuOpen(false)}>Услуги</a>
              <a href="#standards" className="py-2 hover:text-accent transition" onClick={() => setMobileMenuOpen(false)}>Стандарты</a>
              <a href="#price" className="py-2 hover:text-accent transition" onClick={() => setMobileMenuOpen(false)}>Прайс</a>
              <a href="#booking" className="py-2 hover:text-accent transition" onClick={() => setMobileMenuOpen(false)}>Заказать</a>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-4 rounded-lg bg-accent px-4 py-2 text-center font-semibold text-black transition hover:scale-105 block">
                WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative min-h-screen md:min-h-[85vh] overflow-hidden bg-gradient-to-b from-black to-black/90 flex items-center">
          <motion.div
            className="relative mx-auto flex min-h-screen md:min-h-[85vh] max-w-6xl flex-col justify-center px-3 py-8 md:py-24 md:px-8 w-full"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7 }}
          >
            <p className="mb-2 text-accent text-xs md:text-base">Астана · Premium Transport Service</p>
            <h1 className="max-w-3xl font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight">
              Ваш персональный автопарк в столице
            </h1>
            <p className="mt-3 md:mt-5 max-w-2xl text-white/80 text-xs md:text-base lg:text-lg leading-relaxed">
              Безопасность, пунктуальность и безупречный статус в каждой поездке. От деловых маршрутов до персонального сопровождения семьи.
            </p>
            <a
              href="#booking"
              className="mt-4 md:mt-8 w-fit rounded-full border border-accent bg-accent px-4 md:px-6 py-2 md:py-3 text-xs md:text-base font-semibold text-black transition hover:scale-105 hover:shadow-glow"
            >
              Забронировать поездку
            </a>
          </motion.div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-3 py-6 md:py-16 md:px-8">
          <h2 className="section-title text-lg md:text-3xl lg:text-4xl">Услуги</h2>
          <div id="price" className="mt-4 md:mt-8 grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <motion.article
                  key={service.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-3 md:p-5 backdrop-blur transition duration-300 hover:border-accent/60 hover:-translate-y-1"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                >
                  <Icon className="mb-2 md:mb-4 text-accent text-sm md:text-base" />
                  <h3 className="text-xs md:text-xl font-semibold">{service.title}</h3>
                  <p className="mt-1 md:mt-2 text-accent text-xs md:text-base">{service.price}</p>
                </motion.article>
              )
            })}
          </div>
        </section>

        <section id="standards" className="mx-auto max-w-6xl px-3 py-6 md:py-16 md:px-8">
          <h2 className="section-title text-lg md:text-3xl lg:text-4xl">Standard of Excellence</h2>
          <div className="mt-4 md:mt-8 grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {standards.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-3 md:p-5 backdrop-blur transition duration-300 hover:border-accent/60 hover:-translate-y-1 text-center"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                >
                  <Icon className="mx-auto mb-2 md:mb-3 text-accent text-sm md:text-base" />
                  <p className="text-xs md:text-base">{item.title}</p>
                </motion.div>
              )
            })}
          </div>
        </section>

        <section id="booking" className="mx-auto max-w-3xl px-3 py-6 md:py-16 md:px-8 w-full">
          <motion.div
            className="rounded-2xl border border-accent/35 bg-white/5 p-4 md:p-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="section-title text-lg md:text-3xl">Заказ</h2>
            <form className="mt-3 md:mt-6 grid gap-2 md:gap-4">
              <div>
                <label htmlFor="name" className="text-xs text-white/60">Имя *</label>
                <input id="name" name="name" required placeholder="Белгибаев Дархан" value={formData.name} onChange={updateField} className="mt-1 w-full rounded-lg border border-white/20 bg-black/50 px-3 py-2 text-xs md:text-base outline-none transition focus:border-accent" />
              </div>
              <div>
                <label htmlFor="phone" className="text-xs text-white/60">Телефон *</label>
                <input id="phone" name="phone" required placeholder="+7" value={formData.phone} onChange={updateField} className={`mt-1 w-full rounded-lg border bg-black/50 px-3 py-2 text-xs md:text-base outline-none transition ${
                  formData.phone.length > 2 && !isValidPhone(formData.phone)
                    ? 'border-red-500/50 focus:border-red-500'
                    : 'border-white/20 focus:border-accent'
                }`} />
              </div>
              <div>
                <label htmlFor="service" className="text-xs text-white/60">Услуга *</label>
                <select id="service" name="service" value={formData.service} onChange={updateField} className="mt-1 w-full rounded-lg border border-white/20 bg-black/50 px-3 py-2 text-xs md:text-base outline-none transition focus:border-accent">
                  {services.map((service) => (
                    <option key={service.title} value={service.title} className="text-black">{service.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="date" className="text-xs text-white/60">Дата *</label>
                <input id="date" name="date" type="date" required min={getTodayDate()} value={formData.date} onChange={updateField} className="mt-1 w-full rounded-lg border border-white/20 bg-black/50 px-3 py-2 text-xs md:text-base outline-none transition focus:border-accent" />
              </div>

              <button
                type="button"
                onClick={() => {
                  if (canSubmit) {
                    window.open(whatsappHref, '_blank')
                  }
                }}
                disabled={!canSubmit}
                className={`mt-2 rounded-lg px-3 py-2 text-xs md:text-base font-semibold transition ${
                  canSubmit
                    ? 'bg-accent text-black hover:scale-[1.02] hover:shadow-glow cursor-pointer'
                    : 'bg-accent/40 text-black/60 cursor-not-allowed'
                }`}
              >
                WhatsApp
              </button>
            </form>
          </motion.div>
        </section>
      </main>

      <a
        href="#booking"
        className="fixed bottom-2 left-1/2 z-40 w-[calc(100%-1rem)] -translate-x-1/2 rounded-lg bg-accent px-3 py-2 text-center font-semibold text-black shadow-glow transition hover:scale-[1.02] md:hidden text-xs"
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
