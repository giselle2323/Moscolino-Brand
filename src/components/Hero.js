import HeroImg from "../images/hero.png";
const Hero = () => {
  return (
    <div className="relative">
      <img
        src={HeroImg}
        className="absolute inset-0 object-cover w-full h-full"
        alt="hero"
      />
      <div className="relative bg-dark_blue bg-opacity-95">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:py-20">
          <div className="flex flex-col justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="mb-6 font-sans text-8xl font-normal tracking-tight text-gold sm:leading-none pb-6 border-b border-gold" style={{width: 'fit-content'}}>
                The perfect design {''} <span className="font-bold"> for your brand.</span>
              </h2>
              <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                quae.
              </p>
              <button
                className="text-gold background-transparent font-bold uppercase  p-2 text-xs outline-none focus:outline-none mr-1 mb-1 border-4 border-gold"
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                Hit Me Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
