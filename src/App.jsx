import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Baby,
  BriefcaseBusiness,
  Building2,
  Crown,
  Droplets,
  Plane,
  Road,
  ShieldCheck,
  UserCheck,
  Wifi,
} from 'lucide-react'

const whatsappNumber = '87781556699'

const services = [
  {
    title: 'VIP Трансфер Аэропорт',
    price: 'от 15 000 ₸',
    description: 'Встреча с табличкой, помощь с багажом, комфортный трансфер до адреса.',
    icon: Plane,
  },
  {
    title: 'Развозка Smart Parents',
    price: 'от 300 000 ₸ / мес',
    description: 'Безопасная перевозка детей по графику: школа, секции, дом.',
    icon: Baby,
  },
  {
    title: 'Бизнес-сопровождение',
    price: 'от 10 000 ₸ / час',
    description: 'Персональный водитель для деловых встреч и плотного расписания.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Корпоративный B2B',
    price: 'Индивидуальный тариф',
    description: 'Регулярное транспортное обслуживание сотрудников и гостей компании.',
    icon: Building2,
  },
  {
    title: 'Премиальный Межгород',
    price: 'По запросу',
    description: 'Комфортные междугородние поездки с акцентом на приватность и сервис.',
    icon: Road,
  },
  {
    title: 'Трезвый водитель',
    price: 'от 15 000 ₸',
    description: 'Профессиональный водитель доставит вас и ваш автомобиль безопасно.',
    icon: UserCheck,
  },
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

const formatPhone = (value) => {
  const digits = value.replace(/\D/g, '')
  const normalized = digits.startsWith('8') ? `7${digits.slice(1)}` : digits
  const onlyKazakhPrefix = normalized.startsWith('7') ? normalized.slice(0, 11) : `7${normalized}`.slice(0, 11)

  const country = onlyKazakhPrefix.slice(0, 1)
  const area = onlyKazakhPrefix.slice(1, 4)
  const part1 = onlyKazakhPrefix.slice(4, 7)
  const part2 = onlyKazakhPrefix.slice(7, 9)
  const part3 = onlyKazakhPrefix.slice(9, 11)

  let formatted = `+${country}`
  if (area) formatted += ` (${area}`
  if (area.length === 3) formatted += ')'
  if (part1) formatted += ` ${part1}`
  if (part2) formatted += `-${part2}`
  if (part3) formatted += `-${part3}`

  return formatted
}

const cleanPhoneForWhatsapp = (value) => value.replace(/\D/g, '')

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+7',
    service: services[0].title,
    date: '',
  })

  const whatsappHref = useMemo(() => {
    const lines = [
      'Заявка TransferPro:',
      `Имя: ${formData.name || '-'}`,
      `Телефон: ${formData.phone || '-'}`,
      `Услуга: ${formData.service || '-'}`,
      `Дата: ${formData.date || '-'}`,
    ]
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`
  }, [formData])

  const updateField = (event) => {
    const { name, value } = event.target

    if (name === 'phone') {
      setFormData((prev) => ({ ...prev, phone: formatPhone(value) }))
      return
    }

    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const normalizedPhone = cleanPhoneForWhatsapp(formData.phone)
    if (normalizedPhone.length < 11) {
      return
    }

    window.open(whatsappHref, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="bg-base">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
          <a href="#top" className="font-serif text-lg tracking-[0.2em] text-accent">
            TRANSFER PRO
          </a>

          <nav className="hidden gap-5 text-sm md:flex">
            <a href="#services" className="transition hover:text-accent">Услуги</a>
            <a href="#standards" className="transition hover:text-accent">Стандарты</a>
            <a href="#price" className="transition hover:text-accent">Прайс</a>
            <a href="#booking" className="transition hover:text-accent">Заказать</a>
          </nav>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-black transition hover:scale-105 hover:shadow-glow md:text-sm"
          >
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
              Безопасность, пунктуальность и безупречный статус в каждой поездке. От деловых
              маршрутов до персонального сопровождения семьи.
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
                  <p className="mt-3 text-sm text-white/70">{service.description}</p>
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
            <p className="mt-2 text-sm text-white/70">
              После отправки откроется WhatsApp с готовым сообщением на номер {whatsappNumber}.
            </p>

            <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
              <input
                name="name"
                required
                placeholder="Ваше имя"
                value={formData.name}
                onChange={updateField}
                className="rounded-xl border border-white/20 bg-black/50 px-4 py-3 outline-none transition focus:border-accent"
              />
              <input
                name="phone"
                required
                placeholder="+7 (___) ___-__-__"
                value={formData.phone}
                onChange={updateField}
                className="rounded-xl border border-white/20 bg-black/50 px-4 py-3 outline-none transition focus:border-accent"
              />
              <select
                name="service"
                value={formData.service}
                onChange={updateField}
                className="rounded-xl border border-white/20 bg-black/50 px-4 py-3 outline-none transition focus:border-accent"
              >
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
              <input
                name="date"
                type="date"
                value={formData.date}
                onChange={updateField}
                className="rounded-xl border border-white/20 bg-black/50 px-4 py-3 outline-none transition focus:border-accent"
              />

              <button
                type="submit"
                className="mt-2 rounded-xl bg-accent px-4 py-3 text-center font-semibold text-black transition hover:scale-[1.02] hover:shadow-glow"
              >
                Отправить в WhatsApp
              </button>
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
