import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { BriefcaseBusiness, Droplets, ShieldCheck, Wifi, Baby, Crown, Plane, Building2, Car, UserCheck } from 'lucide-react'

const whatsappNumber = '77000000000'

const services = [
  { title: 'VIP Трансфер Аэропорт', price: 'от 15 000 ₸', icon: Plane },
  { title: 'Развозка Smart Parents', price: 'от 300 000 ₸ / мес', icon: Baby },
  { title: 'Бизнес-сопровождение', price: 'от 10 000 ₸ / час', icon: BriefcaseBusiness },
  { title: 'Корпоративный B2B', price: 'Индивидуальный тариф', icon: Building2 },
  { title: 'Премиальный Межгород', price: 'По запросу', icon: Car },
  { title: 'Трезвый водитель', price: 'от 15 000 ₸', icon: UserCheck },
]

const standards = [
  { title: 'Wi‑Fi в дороге', icon: Wifi },
  { title: 'Премиальная вода', icon: Droplets },
  { title: 'Профессиональный этикет', icon: Crown },
  { title: 'Безопасность и детские кресла', icon: ShieldCheck },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+7',
    service: services[0].title,
    date: '',
  })

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
            <a href="#services" className="hover:text-accent">Услуги</a>
            <a href="#standards" className="hover:text-accent">Стандарты</a>
            <a href="#price" className="hover:text-accent">Прайс</a>
            <a href="#booking" className="hover:text-accent">Заказать</a>
          </nav>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-black transition hover:scale-105 hover:shadow-glow md:text-sm">
            WhatsApp
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative min-h-[85vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1800&q=80"
            alt="Премиальный автомобиль"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <motion.div
            className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-4 py-24 md:px-8"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-accent">Астана · Premium Transport Service</p>
            <h1 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              Ваш персональный автопарк в столице
            </h1>
            <p className="mt-5 max-w-2xl text-white/80 md:text-lg">
              Безопасность, пунктуальность и безупречный статус в каждой поездке. От деловых маршрутов до персонального сопровождения семьи.
            </p>
            <a
              href="#booking"
              className="mt-8 w-fit rounded-full border border-accent bg-accent px-6 py-3 font-semibold text-black transition hover:scale-105 hover:shadow-glow"
            >
              Забронировать поездку
            </a>
          </motion.div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-4 py-16 md:px-8">
          <h2 className="section-title">Услуги</h2>
          <div id="price" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <motion.article
                  key={service.title}
                  className="card"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                >
                  <Icon className="mb-4 text-accent" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-accent">{service.price}</p>
                </motion.article>
              )
            })}
          </div>
        </section>

        <section id="standards" className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-16">
          <h2 className="section-title">Standard of Excellence</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {standards.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  className="card text-center"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                >
                  <Icon className="mx-auto mb-3 text-accent" />
                  <p>{item.title}</p>
                </motion.div>
              )
            })}
          </div>
        </section>

        <section id="booking" className="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16">
          <motion.div
            className="rounded-2xl border border-accent/35 bg-white/5 p-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="section-title">Оформить заказ</h2>
            <form className="mt-6 grid gap-4" onSubmit={(event) => event.preventDefault()}>
              <input name="name" required placeholder="Ваше имя" value={formData.name} onChange={updateField} className="rounded-xl border border-white/20 bg-black/50 px-4 py-3 outline-none transition focus:border-accent" />
              <input name="phone" required placeholder="+7 (___) ___-__-__" value={formData.phone} onChange={updateField} className="rounded-xl border border-white/20 bg-black/50 px-4 py-3 outline-none transition focus:border-accent" />
              <select name="service" value={formData.service} onChange={updateField} className="rounded-xl border border-white/20 bg-black/50 px-4 py-3 outline-none transition focus:border-accent">
                {services.map((service) => (
                  <option key={service.title} value={service.title}>{service.title}</option>
                ))}
              </select>
              <input name="date" type="date" value={formData.date} onChange={updateField} className="rounded-xl border border-white/20 bg-black/50 px-4 py-3 outline-none transition focus:border-accent" />

              <a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-2 rounded-xl bg-accent px-4 py-3 text-center font-semibold text-black transition hover:scale-[1.02] hover:shadow-glow">
                Отправить в WhatsApp
              </a>
            </form>
          </motion.div>
        </section>
      </main>

      <a
        href="#booking"
        className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] -translate-x-1/2 rounded-full bg-accent px-4 py-3 text-center font-semibold text-black shadow-glow transition hover:scale-[1.02] md:hidden"
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
