import "./App.css";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {


  // useEffect(() => {
  //   const container = containerRef.current;
  //   const circleElement = circleRef.current;

  //   if (!container || !circleElement) return;

  //   let bounds = container.getBoundingClientRect();

  //   const refreshBounds = () => {
  //     bounds = container.getBoundingClientRect();
  //   };
  //   const circle = createAnimatable(circleElement, {
  //     x: 20,
  //     y: 10,
  //     ease: "outExpo",
  //   });
  //   const onMouseMove = (e) => {
  //     const { width, height, left, top } = bounds;

  //     const hw = width / 2;
  //     const hh = height / 2;

  //     const x = utils.clamp(
  //       e.clientX - left - hw,
  //       -hw,
  //       hw
  //     );
  //     const y = utils.clamp(
  //       e.clientY - top - hh,
  //       -hh,
  //       hh
  //     );

  //     circle.x(x).y(y);
  //   };

  //   window.addEventListener("mousemove", onMouseMove);
  //   window.addEventListener("resize", refreshBounds);

  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //     window.removeEventListener("resize", refreshBounds);
  //   };
  // }, []);



  const [output, setOutput] = useState('')
  const Text = 'Увеличьте Видимость Вашего бизнеса на... '
  useEffect(() => {
    let position = 0
    let timeout;
    const getRandomInt = (min = 50, max = 250) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const TypeText = () => {
      const char = Text[position]
      if (char === undefined) return
      setOutput(prev => prev + char)
      position++
      timeout = setTimeout(TypeText, getRandomInt())
    }
    TypeText()
    return () => clearTimeout(timeout)
  }, [])

  const SmoothScroll = useRef(null)
  const ScrollHandler = () => {
    SmoothScroll.current?.scrollIntoView({ behavior: 'smooth' });
  }
  // h-screen w-full overflow-y-scroll snap-y snap-mandatory
  return (
    <div className=" px-3 h-screen w-full snap-start scroll-smooth lg:px-20">
      <div className="hidden lg:block">
        <Header />
      </div>
      <div className="">
        <header className="py-10  flex block lg:hidden  ">
          <div>
            <img className="w-7 mt-1" src="<img class="
              src="https://static.tildacdn.com/tild3833-6131-4738-a430-373834626263/Group_39903.svg" alt=""
              imgfield="tn_img_1748261949057" alt="" />
          </div>
          <p className="text-white text-3xl ml-4">
            MetaGroupe ®
          </p>
          <div className="px-4">
            <button className="w-40 h-10 border rounded-2xl  text-white hover:bg-[#1E3320] duration-300 hover:scale-105">Заказать услугу </button>
          </div>
        </header>
        {/* добавить блюр на изображение  */}
        {/* Start develop adaptation for mobile   */}
        <div className="flex items-start gap-4 w-full ">
          <div className="flex-1">
            <div className="w-163 lg:w-full">
              <div className="lg:grid grid-cols-2 flex justify-between ">

                {/* <div className="hidden lg:block">
                  <p className=" hidden lg:block text-5xl ">
                    Оформляем карточку компании в Яндекс.Бизнесе так, чтобы из десяти <br /> конкурентов рядом выбирали вас — с первого взгляда на карту и в поиске.
                  </p>
                </div> */}
              </div>

              <div className="mt-30 flex  py-10">
                <img className="w-10 lg:w-15" src="Yandex.svg" alt="" />
                <p className="text-4xl text-white ml-5 font-bold lg:text-5xl mt-1"> Бизнес</p>
              </div>
            </div>
            {/* <div className="w-100 flex lg:w-140 ">
              <p className="text-white text-2xl text-wrap lg:text-5xl ">{output}</p>
            </div> */}
            <div className="px-5 py-5 w-100 border rounded-2xl hover:bg-[#252525] duration-500">
              {/* text-[#FF6A3D]  */}
              <p className="text-3xl font-bold text-[#FFFFFF]">Пока ваш профиль молчит, <br /> клиенты  уходят к соседнему <br /> пину на карте</p>
            </div>
            {/* font-[Involve] */}
            <div className="mt-10  w-105  lg:flex justify-start w-auto ">
              <button className="w-80 active:bg-[#FF6A3D]  text-center h-15  border py-2  text-white rounded-3xl 
              lg:cursor-pointer lg:w-60 mt-5 lg:h-20 lg:text-2xl  lg:hover:bg-[#3D3D3D] lg:hover:text-white
              transition-all duration-500 ease-out lg:hover:scale-105 lg:hover:translate-y-1 lg:hover:shadow-lg ">
                Заказать оформление
              </button>
              <div className="ml-5 mt-5">
                <button className="text-white w-80  active:bg-[#5B1111] h-15 border text-center py-2 rounded-3xl  lg:w-60 lg:h-20 lg:text-2xl  lg:hover:bg-[#3D3D3D] sm:hover:text-white
              transition-all duration-500 ease-out lg:hover:scale-105 lg:hover:translate-y-1 text-[#3D3D3D] lg:hover:shadow-lg ">Подробнее</button>
              </div>
            </div>
          </div>
          <div className="hidden lg:block flex-1 mt-50 ">
            <div className="relative">
              <div className="w-[400px] h-[400px] bg-gradient-to-br from-[#1C1C1C] to-[#0A0A0A] rounded-3xl border border-[#2E2E2E] p-6">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto  rounded-3xl flex items-center justify-center mb-6">
                      <img src="Yandex.svg" alt="" />
                    </div>
                    <p className="text-white text-xl font-semibold">Ваш профиль</p>
                    <p className="text-gray-400 mt-2">на Яндекс.Картах</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* font-[Unbounded] */}
        <div className="lg:flex justify-center ">
          <hr className="hidden lg:mt-20 blcok" />
          <div className=" mt-10 lg:flex">
            <hr className="bg-white w-90 mt-2  block lg:hidden" />
            <div className="lg:border-r-2 border-gray-300 px-5">
              <p className="text-[#FFFFFF] text-3xl mt-2">90+ млн</p>
              <p className="text-gray-400">человек ежемесячно ищут услуги через Я. Карты</p>
            </div>
            <hr className="bg-white w-90 mt-2  block lg:hidden" />
            <div className="lg:border-r-2 border-gray-300 px-5">
              <p className="text-[#C8A85E] text-3xl mt-2">11</p>
              <p className="text-gray-400">Пунктов входит в полное оформление профиля</p>
            </div>
            <hr className="bg-white w-90 mt-2 block lg:hidden" />
            <div className="lg:ml-5">
              <p className=" text-[#4DB87A] text-3xl mt-2 ">~30</p>
              <p className="text-gray-400 text-xl">дней - средний срок выполнение работ </p>
            </div>
            <hr className="bg-white w-90 mt-2 block lg:hidden" />
          </div>
        </div>


      </div>

      <div className="mt-20 ">
        {/* <div className="w-full  ">
          <p className="text-3xl text-white ">Дело не в том, что у вас нет клиентов. Дело в том,  что они видят <p className="text-[#FF6A3D]">соседний пин</p>,а не ваш.</p>
        </div> */}
        {/* font-[Unbounded] */}
        <div className=" lg:flex  justify-center w-300 lg:w-full  ">
          <div className="mt-5 lg:w-128 mt-20 ">
            <div className="text-gray-400 text-2xl lg:text-3xl">
              <p className=" w-60 text-[#E0E0E0] lg:w-full ">Дело не в том, что у вас нет клиентов. Дело в том, что они видят соседний пин, а не ваш.</p>
            </div>
            <div className="w-70 lg:w-full">
              <p className="text-gray-400 text-2xl lg:text-3xl mt-10">
                <p className="text-[#E84040] font-bold">Без оформленного профиля </p>компания теряется среди конкурентов именно в тот момент, когда клиент уже готов прийти, — он просто выбирает того, чья карточка ответила первой</p>
            </div>
          </div>
          <div>
          </div>

          <div className="mt-10 lg:m-0 px-40 lg:mt-20">
            <div>
              <div className="w-full h-22 rounded-2xl  border lg:w-100 hover:border-[#E84040] hover:scale-105 duration-500" >
                <div className="flex">
                  <img className='w-3 ml-4' src="×.svg" alt="" />
                  <p className="text-white ml-6 mt-5">Профиль без фото и описания — мимо проходят, не открывая карточку</p>
                </div>
              </div>
              <div className="w-full h-22   rounded-2xl  border mt-10 lg:w-100  hover:border-[#E84040] hover:scale-105 duration-500" >
                <div className="flex">
                  <img className='w-3 ml-4' src="×.svg" alt="" />
                  <p className="text-white ml-6 mt-5">Нет ответов на отзывы - доверие ниже , чем у конкурентов рядом </p>
                </div>
              </div>
              <div className="w-full h-22   bg-none  rounded-2xl  border mt-10 lg:w-100  hover:border-[#E84040] hover:scale-105 duration-500" >
                <div className="flex">
                  <img className='w-3 ml-4' src="×.svg" alt="" />
                  <p className="text-white ml-6 mt-5">Карточка не продвигается - компанию не находят на карте  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20  block lg:hidden">
        <div className="w-full h-100 border rounded-2xl lg:w-120 h-110">
          <div>
            <p className="text-white text-xl mt-5 ml-10">Кофейня рядом · поиск</p>
          </div>
          <div className="mt-5 ml-5 w-90 border rounded-2xl py-3 h-20 lg:ml-15">

            <p className="text-xl ml-2">Кофейня Атлас - оформлен профль </p>
            <p className="text-xl ml-2">4.9 230 отзывов </p>
          </div>
          <div className=" mt-10 ml-5 w-90 border rounded-2xl py-3 h-20 lg:ml-15">

            <p className="text-xl ml-2">Ваша компания - без фото  </p>
            <p className="text-xl ml-2">3 отзыва </p>
          </div>
          <div className="  mt-10 ml-5 w-90 border rounded-2xl py-3 h-20 lg:ml-15">

            <p className="text-xl ml-2">Кофейня Луна - без описания  </p>
            <p className="text-xl ml-2">Не отвечает на отзывы  </p>
          </div>
        </div>
      </div>
      <div >
        <div className="w-70 text-2xl">
          <div>
            <p className=" text-xl mt-5 text-[#4A7FAA] lg:text-5xl mt-5 text-[#FFFFFF]"> Что мы предлогаем </p>
          </div>
          <div className="mt-5">
            <p className=" text-xl lg:text-2xl text-[#E0E0E0]"></p>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-3 w-full py-10 ">
        <div className="flex ">
          <p className="text-xl py-1"> 01 </p>
          <div>
            <p className="px-2 text-4xl">Что мы предлогаем </p>
          </div>
          <div>
            <p></p>
          </div>
        </div>
        <div className="w-152 px-2 ">
          <div>
            <div>
              <p className='py-2 px-2'>Геолокация и вход
                Корректное размещение точки на карте и привязка в оргазинацию</p>
            </div>
            <div>
              <p className='py-2 px-2'> • Шапка профиля
                Название, категория, график работы, контакты — всё, что видно первым.</p></div>
            <div><p className='py-2 px-2'> • Оформление профиля
              Обложка, логотип, карточки товаров — единый визуальный стиль.</p></div>
            <div><p сclassName='py-2 px-2'> • Фотографии по разделам
              Структурированная фотолента: интерьер, услуги, команда, результаты.</p></div>
            <div><p className='py-2 px-2'> • Внешние ссылки
              Сайт, соцсети и мессенджеры — все пути до вас в одном месте.</p></div>
            <div>
              <p className='py-2 px-2'> • Витрина товаров
                До 20 позиций товаров или услуг с ценами и описанием.</p></div>
            <div>
              <p className='py-2 px-2' >  • Новости и акции
                До 5 публикаций — повод вернуться и заметить вас снова.</p></div>
            <div>
              <p className='py-2 px-2'>• Работа с отзывами
                Ответы на отзывы и выстраивание репутации профиля.</p></div>
            <div>
              <p className='py-2 px-2'>QR-код профиля
                Код со ссылкой на карточку — для вывесок, меню, визиток.</p></div>
            <div>
              <p сlassName='py-2 px-2'> • Лента сторис
                Короткие визуальные обновления прямо в профиле компании.</p></div>
            <div>
              <p className='py-2 px-2'> • SEO-продвижение карточки
                Работа с ключевыми словами, чтобы карточку находили чаще.</p></div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="border w-40 h-10 rounded-3xl">Оформить</button>
        </div>

        <div>
          <div>
            <p>
              Наши преимущества
            </p>
          </div>
        </div>

        <div>
          <div>
            <p>Вас начинают видеть — Клиника появляется в локальном поиске, когда рядом ищут «стоматологию».</p>
            <p>Вам начинают доверять — Настоящие отзывы, фото кабинетов и ответы на вопросы формируют репутацию</p>
            <p>К вам идут сразу — Адрес, телефон, часы работы, сайт — вся информация в одной карточке.</p>
            <p>Вы обходите конкурентов — Конкуренты уже там. Оформленный профиль возвращает вам видимость.</p>
            <p>Вы продаёте фотографиями — Качественные снимки кабинетов и врачей создают первое впечатление.</p>
            <p>Вы видите статистику — Аналитика показывает, сколько людей смотрит профиль и что их интересует.</p>
            <p>Вы запускаете акции — Спецпредложения публикуются прямо в карточке и стимулируют записи.</p>
            <p>Вы встраиваетесь в экосистему — Профиль связан с Яндекс.Такси, Поиском и другими сервисами.</p>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="border w-40 h-10 rounded-3xl">Оформить</button>
        </div>
      </div>

      <div>
        <div>
          <p className="lg:text-3xl py-10 text-2xl" >Почему мы ? </p>
        </div>
        <div className="w-250">
          <p className="lg: text-7xl">
            Сертифицированный партнёр Яндекса, а не очередной фрилансер с обещаниями
          </p>
        </div>


        <div className="lg:mt-10">
          <div className="lg:w-130 h-15 py-4 flex px-5 border rounded-4xl bg-[#1C1C1C] hover:bg-[#252525] duration-500 hover:border-[#3D3D3D]  hover:scale-105">
            <div className="mt-2 px-5">
              <div className="lg:w-2 h-2 bg-yellow-300 border-amber-300 rounded-full border  ">
              </div>
            </div>
            <p>Официальная сертификация партнёрства с Яндексом</p>
          </div>


          <div>
            <div className=" lg:flex justify-center mt-10">
              <div>
                <div className="w-90 h-55 border rounded-l-3xl">
                  <p className="px-5 mt-5"> 01</p>
                  <div>
                    <p className="text-3xl py-3 px-5">Гарантии по договору</p>
                  </div>
                  <div>
                    <p className="px-5 text-lg text-[#888888]">
                      Сроки и состав работ закрепляем письменно, а не на словах.
                    </p>
                  </div>
                </div>
              </div>
              <div >
                <div className="w-90 h-55 border">
                  <p className="px-5 mt-5">02</p>
                  <div className="">
                    <p className="text-3xl px-5 py-3">Системный подход</p>
                  </div>
                  <div>
                    <p className="px-5 text-[#888888]" >
                      От геолокации до SEO-ключей — работаем по всем 11 пунктам, а не выборочно</p>
                  </div>
                </div>
              </div>
              <div >
                <div className="w-90 h-55 border">
                  <p className="px-5 mt-5">03</p>
                  <div>
                    <p className="px-5 text-3xl" >Опыт в локальном бизнесе</p>
                  </div>
                  <div>
                    <p className="px-5 text-lg text-[#888888] ">
                      Понимаем специфику малого и среднего бизнеса Ростова-на-Дону и области                    </p>
                  </div>
                </div>

              </div>
              <div >
                <div className="w-90 h-55 border rounded-r-3xl">
                  <p className="px-5 mt-5">04</p>
                  <div>
                    <p className="text-3xl  px-5">Полный цикл агентства</p>
                  </div>
                  <div>
                    <p className="px-5 text-lg text-[#888888]">
                      При необходимости подключаем дизайн, контент-съёмку и SMM из одних рук.                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="gird grid-cols-2 gap-5">

        <div className="w-60">
          <p className="text-2xl">Оставьте заявку - посчиатем стоимость оформления вашего профиля </p>
        </div>

        <div>
          <form action="">
            <div>
              <div>
                <p>Имя</p>
              </div>
              <input className="border" type="text" placeholder="Как к вам обращатся " />
              <div>
                <p>Телефон</p>
                <input type="text" />
              </div>
              <div>
                <p>Email</p>
                <div>
                  <input type="email" placeholder="Не обязательно" />
                </div>
              </div>
              <div>
                <p>Комментарий</p>
              </div>
              <div>
                <textarea className="border" name="" id=""></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className=" hidden mt-50 lg:block">
        <Footer />
      </div>
    </div>

  );
}
export default App;