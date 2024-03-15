import profile from "../../public/images/profile.png";
const Header = () => {
  return (
    <div className="flex justify-between container mx-auto mt-3 border-b-2 items-center">
      <h1 className="text-4xl">Knowledge</h1>
      <div>
        <img src={profile} alt="" srcSet="" />
      </div>
    </div>
  );
};

export default Header;
