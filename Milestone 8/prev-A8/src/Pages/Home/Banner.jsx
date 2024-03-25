import { InputWithButton } from "./InputWithButton";

const Banner = () => {
  return (
    <div
      className="hero min-h-[80vh] rounded-2xl"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-90 rounded-2xl"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <InputWithButton/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
