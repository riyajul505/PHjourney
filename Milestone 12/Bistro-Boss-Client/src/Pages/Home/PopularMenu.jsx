import MenuItem from "../../Components/MenuItem";
import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category == 'popular');
  // const [popular, setPopular] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const filter = data.filter((item) => item.category == "popular");
  //       setPopular(filter);
  //     });
  // }, []);
  return (
    <div className="mb-14">
      <SectionTitle heading="Popular Menu" subHeading="Check it Out" />
      <div className="grid md:grid-cols-2 gap-5">
        {popular.map((i) => (
          <MenuItem key={i._id} item={i}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;