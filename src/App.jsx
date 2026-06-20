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
  const Text = 'Увеличьте Видимость Вашего бизнеса на '
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
    <div className="  ">
      <div className="h-screen w-full snap-start scroll-smooth">
        <header className="py-10  ">
          <p className="text-white text-3xl">
            MetaGroupe ®
          </p>
        </header>
        {/* добавить блюр на изображение  */}
        <div className="flex items-start gap-4 w-full h-100 ">
          <div className="flex-1">
            <div className="w-163">
              <div className="w-163 flex">
                <p className="text-white text-7xl text-wrap">{output}</p>
              </div>
              <div className="mt-10 flex">
                <img src="Yandex.svg" alt="" />
                <p className="text-6xl text-white ml-5 font-bold"> Бизнес</p>
              </div>
            </div>
          </div>
          {/* <div className="flex-shrink-0 mt-[-90px] h-100 mr-20 p-0 w-150 ">
            <img className="w-150 absolute" src="Folder.svg" alt="" />
            <div className="flex-shrink-0 relative">
              <img className="ml-50 mt-50" src="loca.svg" alt="" />
              <div className="flex-shrink-0 justify-between w-100 relative">
                <div>
                  <img className="ml-40" src="galga.svg" alt="" />
                </div>
                <div className="flex justify-end">
                  <img className="mt-20" src="Vector.svg" alt="" />
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="">
        <div className="flex" >
          <p className="text-white text-7xl" >{increase}</p>
          <span className="animate-pulse h-10 w-0.5 bg-white ml-4 mt-5"> </span>
        </div>
        <p className="text-white text-7xl py-5">{Look}</p>
        <p className="text-white text-7xl">{Bisness}</p>
      </div> */}

        <div className="mt-15">
          <p className="text-3xl text-gray-400">Продвигайте компанию в Яндекс: Картах,</p>
          <p className="text-3xl mt-5 text-gray-400">Поиске и Навигаторе с помощью Яндекс Бизнеса</p>
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
      <div className="overflow-hidden whitespace-nowrap mt-10">
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

      </div>

      <div ref={SmoothScroll} className="flex mt-50 ">
        <div className="flex justify-between  px-15 h-screen w-full snap-start scroll-smooth mt-40 ">
          <div className="text-center mt-40 w-120 border rounded-2xl h-80  ">
            <p className="text-white text-3xl"> Проблема</p>
            <div className=" mt-3">
              <p className="text-white text-xl">Ваш бизнес может быть хорошим, <br /> но если профиль в Яндекс.Бизнесе оформлен слабо,  <br /> клиенты просто проходят мимо. <br /> В конкурентной выдаче выигрывают те, чья карточка заметнее, <br /> информативнее и вызывает больше доверия</p>
            </div>
          </div>
          <div className="text-center w-120 border rounded-2xl h-80  ">
            <div>
              <p className="text-white text-3xl">Почему мы  </p>
            </div>
            <div className="mt-3">
              <p className="text-white  text-xl">MetaGroup не просто заполняет профиль, <br /> а превращает Яндекс.Бизнес в рабочий инструмент продаж. <br /> Мы знаем, как оформить карточку так, <br /> чтобы она выглядела профессионально, <br />
                вызывала доверие и помогала клиенту выбрать именно вас.</p>
            </div>
          </div>
          <div className="text-center mt-40 w-120 border rounded-2xl h-80 ">
            <div>
              <p className="text-white text-3xl">Решение</p>
            </div>
            <div className=" mt-3">
              <p className="text-white  text-xl">MetaGroup превращает ваш профиль Яндекс.Бизнес  <br /> в эффективный канал привлечения клиентов. <br />
                Мы продумываем оформление, контент и SEO-настройку так, <br /> чтобы карточка вызывала доверие, привлекала внимание и <br /> помогала получать обращения.</p>
            </div>
          </div>
        </div>

      </div>
      <div className="mt-50">
        <Footer />
      </div>
    </div >
  );
}

export default App;