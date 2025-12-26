import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [priceRange, setPriceRange] = useState([20000, 300000]);
  const [destination, setDestination] = useState('all');
  const [stars, setStars] = useState('all');

  const tours = [
    {
      id: 1,
      title: 'Мальдивы - Райский отпуск',
      destination: 'maldives',
      price: 120000,
      oldPrice: 150000,
      image: 'https://cdn.poehali.dev/projects/3d7f9d8b-a463-41ac-b993-4f72052fc1e6/files/2bf0e9db-3508-40e5-b1e6-7f4c0e5f0b23.jpg',
      nights: 7,
      stars: 5,
      departure: '15.01.2025'
    },
    {
      id: 2,
      title: 'Карибы - Пляжный рай',
      destination: 'caribbean',
      price: 95000,
      oldPrice: 125000,
      image: 'https://cdn.poehali.dev/projects/3d7f9d8b-a463-41ac-b993-4f72052fc1e6/files/f2a6daef-c30f-4e91-ba8d-3fcb2b362e09.jpg',
      nights: 10,
      stars: 4,
      departure: '20.01.2025'
    },
    {
      id: 3,
      title: 'Таиланд - Тропический отдых',
      destination: 'thailand',
      price: 65000,
      oldPrice: 85000,
      image: 'https://cdn.poehali.dev/projects/3d7f9d8b-a463-41ac-b993-4f72052fc1e6/files/ce5f119f-e58a-4632-b3dc-a01cc9111c79.jpg',
      nights: 12,
      stars: 5,
      departure: '18.01.2025'
    },
    {
      id: 4,
      title: 'Бали - Остров мечты',
      destination: 'bali',
      price: 78000,
      oldPrice: 98000,
      image: 'https://cdn.poehali.dev/projects/3d7f9d8b-a463-41ac-b993-4f72052fc1e6/files/ce5f119f-e58a-4632-b3dc-a01cc9111c79.jpg',
      nights: 9,
      stars: 4,
      departure: '22.01.2025'
    }
  ];

  const services = [
    {
      icon: 'Package',
      title: 'Пакетные туры «Всё включено»',
      description: 'Готовые туры с перелётом, отелем, питанием и трансфером'
    },
    {
      icon: 'Palmtree',
      title: 'Экзотические направления',
      description: 'Мальдивы, Карибы, Сейшелы, Бали и другие райские острова'
    },
    {
      icon: 'Map',
      title: 'Экскурсионные программы',
      description: 'Индивидуальные и групповые экскурсии по лучшим местам'
    },
    {
      icon: 'FileCheck',
      title: 'Оформление виз и страховок',
      description: 'Полное сопровождение: визы, страховки, документы'
    }
  ];

  const team = [
    {
      name: 'Анна Соколова',
      position: 'Генеральный директор',
      photo: 'https://cdn.poehali.dev/projects/3d7f9d8b-a463-41ac-b993-4f72052fc1e6/files/80777cb2-cbd8-416e-bcb6-a3cbbfcc23aa.jpg',
      description: '10 лет в туристической индустрии'
    },
    {
      name: 'Максим Волков',
      position: 'Менеджер по экзотическим направлениям',
      photo: 'https://cdn.poehali.dev/projects/3d7f9d8b-a463-41ac-b993-4f72052fc1e6/files/794ae530-f60d-46eb-9cae-ab7118fd652a.jpg',
      description: 'Знает 4 языка'
    },
    {
      name: 'Алиса Чен',
      position: 'Менеджер по визам и документам',
      photo: 'https://cdn.poehali.dev/projects/3d7f9d8b-a463-41ac-b993-4f72052fc1e6/files/749e9ef6-371f-49ef-875c-ee61a425ed64.jpg',
      description: 'Юрист, специалист по визам'
    }
  ];

  const filteredTours = tours.filter(tour => {
    const matchesDestination = destination === 'all' || tour.destination === destination;
    const matchesPrice = tour.price >= priceRange[0] && tour.price <= priceRange[1];
    const matchesStars = stars === 'all' || tour.stars === parseInt(stars);
    return matchesDestination && matchesPrice && matchesStars;
  });

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="https://cdn.poehali.dev/files/2025-12-25_20-07-32.png" alt="ОКЕАН ПУТЕШЕСТВИЙ" className="h-[120px]" />
              <h1 className="text-3xl font-bold text-primary">ОКЕАН ПУТЕШЕСТВИЙ</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#tours" className="text-foreground hover:text-primary transition-colors">Туры</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#team" className="text-foreground hover:text-primary transition-colors">Команда</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
              <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                <Icon name="Phone" size={16} className="mr-2" />
                Позвонить
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://cdn.poehali.dev/projects/3d7f9d8b-a463-41ac-b993-4f72052fc1e6/files/ce5f119f-e58a-4632-b3dc-a01cc9111c79.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Мечтаете об идеальном отпуске?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Откройте мир морского отдыха вместе с нами — райские пляжи, роскошные отели и незабываемые впечатления
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6">
            <Icon name="Compass" size={20} className="mr-2" />
            Подобрать тур
          </Button>
        </div>
      </section>

      <section id="tours" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-white">
              <Icon name="Flame" size={16} className="mr-1" />
              Горящие туры
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Лучшие предложения недели</h2>
            <p className="text-muted-foreground text-lg">Успейте забронировать тур по специальной цене</p>
          </div>

          <Card className="mb-8 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="SlidersHorizontal" size={24} />
                Фильтр туров
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <Label>Направление</Label>
                <Select value={destination} onValueChange={setDestination}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все направления</SelectItem>
                    <SelectItem value="maldives">Мальдивы</SelectItem>
                    <SelectItem value="caribbean">Карибы</SelectItem>
                    <SelectItem value="thailand">Таиланд</SelectItem>
                    <SelectItem value="bali">Бали</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Звёздность отеля</Label>
                <Select value={stars} onValueChange={setStars}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Любая</SelectItem>
                    <SelectItem value="3">3 звезды</SelectItem>
                    <SelectItem value="4">4 звезды</SelectItem>
                    <SelectItem value="5">5 звёзд</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-2">
                <Label>Цена: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} ₽</Label>
                <Slider
                  min={20000}
                  max={300000}
                  step={10000}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mt-2"
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover-scale group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-secondary text-white">
                      -{Math.round((1 - tour.price / tour.oldPrice) * 100)}%
                    </Badge>
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-white text-primary">
                      {'⭐'.repeat(tour.stars)}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{tour.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <Icon name="Calendar" size={16} />
                      <span>{tour.departure}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Icon name="Moon" size={16} />
                      <span>{tour.nights} ночей</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-3">
                  <div className="w-full">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-primary">{tour.price.toLocaleString()} ₽</span>
                      <span className="text-sm text-muted-foreground line-through">{tour.oldPrice.toLocaleString()} ₽</span>
                    </div>
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredTours.length === 0 && (
            <div className="text-center py-12">
              <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-lg text-muted-foreground">По выбранным фильтрам туры не найдены</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setDestination('all');
                  setStars('all');
                  setPriceRange([20000, 300000]);
                }}
              >
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg">Полный спектр туристических услуг для вашего комфорта</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover-scale">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наша команда</h2>
            <p className="text-muted-foreground text-lg">Профессионалы с многолетним опытом в туризме</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover-scale">
                <CardHeader>
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{member.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground text-lg">Свяжитесь с нами любым удобным способом</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" size={24} />
                  Наш офис
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Адрес:</p>
                    <p className="text-muted-foreground">г. Москва, ул. Портовая, 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Телефон:</p>
                    <p className="text-muted-foreground">+7 (495) 456-78-90</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p className="text-muted-foreground">info@ocean-travel.ru</p>
                  </div>
                </div>
                <div className="mt-6 rounded-lg overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/files/2025-12-27_00-35-42.png" 
                    alt="Карта офиса Океан Путешествий" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MessageSquare" size={24} />
                  Форма обратной связи
                </CardTitle>
                <CardDescription>Оставьте заявку и мы свяжемся с вами в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.ru" />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea id="message" placeholder="Расскажите о вашем идеальном отпуске..." rows={4} />
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/2025-12-25_20-07-32.png" 
                  alt="ОКЕАН ПУТЕШЕСТВИЙ" 
                  className="h-[120px]"
                  style={{ 
                    filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)'
                  }} 
                />
              </div>
              <p className="text-white/80">
                Туристическое агентство полного цикла, специализирующееся на морском и пляжном отдыхе
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Быстрые ссылки</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#tours" className="hover:text-white transition-colors">Горящие туры</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 456-78-90</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@ocean-travel.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>г. Москва, ул. Портовая, 15</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 text-center text-white/80">
            <p>&copy; 2025 ОКЕАН ПУТЕШЕСТВИЙ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;