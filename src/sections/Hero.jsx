import FStar from "@/Components/UI/FStar";
import HeroEffectSvg from "@/Components/UI/HeroEffectSvg";
import QuoteIconSvg from "@/Components/UI/QuoteIconSvg";
import Image from "next/image";
import { SVGExpoterObject } from "@/Components/UI/SVGExpoter";

const Hero = () => {
  // const { clendar } = SVGExpoterObject;
  return (
    <section className=" max-w-[1490px] pt-8 md:pt-15 w-[90%] m-auto">
      <div className="effectDiv w-full gap-5.5 flex flex-col items-center justify-center relative">
        <HeroEffectSvg
          className={
            "centered-div absolute w-[842px] h-[842px] overflow-hidden z-[-1] md:w-[1342px] md:h-[1342px] "
          }
        />

        <div className="availabe flex items-center justify-center gap-1.5 pl-2 pr-2">
          <div className="activehol w-2.5 h-2.5 rounded-full bg-green-400"></div>
          <div className="italic font-light text-[.7rem] tracking-wider funnel-sans ">
            AVAILABLE FOR WORK.
          </div>
        </div>

        <h1 className="md:heroTitile absolute text-[72px] top-5 text-center text-white uppercase -z-10 funnel-sans md:text-[13rem] md:w-[61%]">
          jayed r.
        </h1>

        <Image
          alt="hero"
          src={"/img/hero.png"}
          width={323}
          height={249}
          className="w-[593px]"
        />

        <div className="leftEliment hidden  md:flex absolute w-[450px] flex-col text-white items-start justify-start gap-1 left-0 bottom-30">
          <QuoteIconSvg />
          <p className="capitalize w-full text-[.9rem] leading-[1.4rem] tracking-wide">
            Crafting bold, unforgettable brands and fresh, compelling visuals
            designing the future, one purposeful pixel at a time.
          </p>
        </div>

        <div className="rightEliment hidden md:flex absolute right-0 flex-col items-end gap-4 bottom-20 ">
          <div className="5star">
            <div className="stars flex text-amber-300 items-center gap-1">
              <FStar />
              <FStar />
              <FStar />
              <FStar />
              <FStar />
            </div>
          </div>
          <div className="txtDv  flex flex-col leading-[2.2rem] items-end">
            <span className="capitalize text-white text-[2.5rem] ">
              5 Years
            </span>
            <span className="capitalize text-white text-[1.2rem]">
              exprience
            </span>
          </div>

          <div className="btnDv bg-[#63FD88] text-[#1d1d1d] flex items-center gap-2 text-[1rem] p-[10px] rounded-[50px]">
            {SVGExpoterObject.clendar()}
            <button className="text-[#1d1d1d]">Schedule a consultation</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
