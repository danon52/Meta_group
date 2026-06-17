import "./App.css";
import { useEffect, useRef } from "react";
import { createAnimatable, text, utils } from "animejs";
import { useState } from "react";

function App() {
  const containerRef = useRef(null);
  const circleRef = useRef(null);

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
  const Text = 'Увеличьте  Видимость   Вашего бизнеса на'
  useEffect(() => {
    let position = 0
    let timeout;
    const getRandomInt = (min = 10, max = 250) => {
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
  return (
    <div className="">
      <header className="py-10  ">
        <p className="text-white text-3xl">
          MetaGroupe ®
        </p>
      </header>
      <div>
        <div className="w-163 flex">
          <p className="text-white text-7xl text-wrap ">{output}</p>

        </div>
      </div>
      {/* <div className="">
        <div className="flex" >
          <p className="text-white text-7xl" >{increase}</p>
          <span className="animate-pulse h-10 w-0.5 bg-white ml-4 mt-5"> </span>
        </div>

        <p className="text-white text-7xl py-5">{Look}</p>
        <p className="text-white text-7xl">{Bisness}</p>
      </div> */}
      <div className="mt-20 flex">
        <img src="Vector.svg" alt="" />
        <p className="text-6xl text-white ml-5 font-bold"> Бизнес</p>
      </div>
      <div className="mt-20">
        <p className="text-3xl text-gray-400">Продвигайте компанию в Яндекс: Картах,</p>
        <p className="text-3xl mt-5 text-gray-400">Поиске и Навигаторе с помощью Яндекс Бизнеса</p>
      </div>


      <div className="mt-20 ">
        <div className="flex justify-center">
          <p className="text-white text-4xl">Вниз</p>
        </div>
        <div className="flex justify-center mt-5" >
          <img src="iconbut.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;