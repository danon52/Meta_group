import "./App.css";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Footer from "./components/Footer";

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
    <div className="scroll-smooth ">
      <div className="h-screen w-full snap-start scroll-smooth">
        <header className="py-10  ml-10 ">
          <p className="text-white text-3xl">
            MetaGroupe ®
          </p>
        </header>
        {/* добавить блюр на изображение  */}
        {/* Start develop adaptation for mobile   */}
        <div className="flex items-start gap-4 w-full h-100 ">
          <div className="flex-1">
            <div className="w-163">
              <div className="w-100 flex sm:w-70 ">
                <p className="text-white text-2xl text-wrap lg:text-3xl">{output}</p>
              </div>
              <div className="mt-5 flex ">
                <img className="w-10 sm:w-15" src="Yandex.svg" alt="" />
                <p className="text-4xl text-white ml-5 font-bold sm:text-5xl mt-1"> Бизнес</p>
              </div>
            </div>
            <div className="mt-10 flex justify-center w-105 sm:w-full sm:flex justify-start">
              <button className="w-45 text-center h-15  border py-2  text-white rounded-3xl 
              shadow-white  sm:w-60 sm:h-20 sm:text-2xl  sm:hover:bg-[#151414] sm:hover:text-white
              transition-all duration-500 ease-out sm:hover:scale-105 sm:hover:translate-y-1 sm:hover:shadow-lg ">
                Заказать оформление
              </button>
              <div className="ml-5">
                <button className="text-white w-45 h-15 border text-center py-2 rounded-2xl  sm:w-60 sm:h-20 sm:text-2xl  sm:hover:bg-[#151414] sm:hover:text-white
              transition-all duration-500 ease-out sm:hover:scale-105 sm:hover:translate-y-1 sm:hover:shadow-lg ">Подробнее</button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-5xl text-white">Продвигайте компанию <br /> в Яндекс: Картах,</p>
          <p className="text-4xl  py-3 text-[#D14A0B]">Поиске и Навигаторе с  <br />помощью Яндекс Бизнеса</p>
          <p className="text-3xl text-gray-400">Пока ваш профиль молчит, клиенты <br /> уходят к соседнему пину на карте</p>
        </div>
        <div className="mt-20 ">
          <div className="flex justify-center">
            <p className="text-white text-4xl">Вниз</p>
          </div>
          <div className="flex justify-center mt-5" >
            <button onClick={ScrollHandler} className="cursor-pointer">
              <img src="iconbut.svg" alt="" />
            </button>
          </div>
        </div>
        <div>
        </div>
      </div>
      {/* <div className="overflow-hidden whitespace-nowrap mt-10">
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex animate-marquee">
            <li className="flex items-center whitespace-nowrap">
              <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
              <img className='px-10' src="/Yandex.svg" alt="Yandex" />
            </li>
            <li className="flex items-center whitespace-nowrap">
              <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
              <img className='px-10' src="/Yandex.svg" alt="Yandex" />
            </li>
            <li className="flex items-center whitespace-nowrap">
              <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
              <img className='px-10' src="/Yandex.svg" alt="Yandex" />
            </li>
            <li className="flex items-center whitespace-nowrap">
              <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
              <img className='px-10' src="/Yandex.svg" alt="Yandex" />
            </li>
            <li className="flex items-center whitespace-nowrap">
              <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
              <img className='px-10' src="/Yandex.svg" alt="Yandex" />
            </li>
            <li className="flex items-center whitespace-nowrap">
              <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
              <img className='px-10' src="/Yandex.svg" alt="Yandex" />
            </li>
            <li className="flex items-center whitespace-nowrap">
              <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
              <img className='px-10' src="/Yandex.svg" alt="Yandex" />
            </li>
          </ul>
          <ul className="flex animate-marquee">
            <li className="flex items-center whitespace-nowrap">
              <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
              <img className='px-10' src="/Yandex.svg" alt="Yandex" />
            </li><li className="flex items-center whitespace-nowrap">
              <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
              <img className='px-10' src="/Yandex.svg" alt="Yandex" />
            </li><li className="flex items-center whitespace-nowrap">
              <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
              <img className='px-10' src="/Yandex.svg" alt="Yandex" />
            </li><li className="flex items-center whitespace-nowrap">
              <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
              <img className='px-10' src="/Yandex.svg" alt="Yandex" />
            </li><li className="flex items-center whitespace-nowrap">
              <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
              <img className='px-10' src="/Yandex.svg" alt="Yandex" />
            </li><li className="flex items-center whitespace-nowrap">
              <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
              <img className='px-10' src="/Yandex.svg" alt="Yandex" />
            </li>
          </ul>
          <ul className="flex items-center gap-8">
            <li className="flex items-center whitespace-nowrap">
              <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
              <img className='px-10' src="/Yandex.svg" alt="Yandex" />
            </li>
            <li className="flex items-center whitespace-nowrap">
              <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
              <img className='px-10' src="/Yandex.svg" alt="Yandex" />
            </li>
            <li className="flex items-center whitespace-nowrap">
              <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
              <img className='px-10' src="/Yandex.svg" alt="Yandex" />
            </li>
            <li className="flex items-center whitespace-nowrap">
              <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
              <img className='px-10' src="/Yandex.svg" alt="Yandex" />
            </li>
            <li className="flex items-center whitespace-nowrap">
              <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
              <img className='px-10' src="/Yandex.svg" alt="Yandex" />
            </li>
            <li className="flex items-center whitespace-nowrap">
              <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
              <img className='px-10' src="/Yandex.svg" alt="Yandex" />
            </li>
            <li className="flex items-center whitespace-nowrap">
              <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
              <img className='px-10' src="/Yandex.svg" alt="Yandex" />
            </li>
            <li className="flex items-center whitespace-nowrap">
              <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
              <img className='px-10' src="/Yandex.svg" alt="Yandex" />
            </li>

            <li className="flex items-center whitespace-nowrap">
              <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
              <img className='px-10' src="/Yandex.svg" alt="Yandex" />
            </li>
            <li className="flex items-center whitespace-nowrap">
              <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
              <img className='px-10' src="/Yandex.svg" alt="Yandex" />
            </li>
            <li className="flex items-center whitespace-nowrap">
              <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
              <img className='px-10' src="/Yandex.svg" alt="Yandex" />
            </li>
            <li className="flex items-center whitespace-nowrap">
              <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
              <img className='px-10' src="/Yandex.svg" alt="Yandex" />
            </li>
          </ul>
        </div>

      </div> */}

      {/* <div ref={SmoothScroll} className="flex mt-50 ">
        <div className="flex justify-between  px-15 h-screen w-full snap-start scroll-smooth mt-40  ">
          <div className="text-center mt-40 w-120 border rounded-2xl h-80 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-lg ">
            <p className="text-white text-5xl mt-5"> Проблема</p>
            <div className=" mt-3">
              <p className="text-white text-xl">Ваш бизнес может быть хорошим, <br /> но если профиль в Яндекс.Бизнесе оформлен слабо,  <br /> клиенты просто проходят мимо. <br /> В конкурентной выдаче выигрывают те, чья карточка заметнее, <br /> информативнее и вызывает больше доверия</p>
            </div>
          </div>
          <div className="text-center w-120 border rounded-2xl h-80 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-lg ">
            <div>
              <p className="text-white text-5xl mt-5">Почему мы  </p>
            </div>
            <div className="mt-3">
              <p className="text-white  text-xl">MetaGroup не просто заполняет профиль, <br /> а превращает Яндекс.Бизнес в рабочий инструмент продаж. <br /> Мы знаем, как оформить карточку так, <br /> чтобы она выглядела профессионально, <br />
                вызывала доверие и помогала клиенту выбрать именно вас.</p>
            </div>
          </div>
          <div className="text-center mt-40 w-120 border rounded-2xl h-80  transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-lg">
            <div>
              <p className="text-white text-5xl mt-5">Решение</p>
            </div>
            <div className=" mt-3">
              <p className="text-white  text-xl">MetaGroup превращает ваш профиль Яндекс.Бизнес  <br /> в эффективный канал привлечения клиентов. <br />
                Мы продумываем оформление, контент и SEO-настройку так, <br /> чтобы карточка вызывала доверие, привлекала внимание и <br /> помогала получать обращения.</p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="mt-50">
        {/* <Footer /> */}
      </div>
    </div >
  );
}
export default App;