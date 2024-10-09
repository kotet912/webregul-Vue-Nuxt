// server/api/about.js
export default defineEventHandler(async () => {
  const agents = await $fetch('/api/agents')

  return {
    img: '/assets/images/company.png',
    name: 'Наследие',
    title: 'О компании',
    description:
      'Копкой занимаемся 15 лет. Все началось с хобби и плавно переросло в любимую работу. Работаем с\nпрофессиональной техникой.',
    time: ['Режим работы', 'Сегодня с 8:00 до 23:00'],
    geo: ['Местоположение', 'Ростов на Дону, Воронежская ул., 42А корп. 1'],
    map: '/assets/images/map.png',
    document: true,
    rating: 4.7,
    reviewCount: 19,
    buttons: [
      { name: 'Товары и услуги', route: '/' },
      { name: `Агенты ${agents.length}`, route: '/agentsPage' },
      { name: 'О компании', route: '/aboutPage' },
    ],
  }
})
