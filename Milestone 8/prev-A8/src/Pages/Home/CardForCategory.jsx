import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CardForCategory = ({ data }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg,
    card_bg,
    text_button_bg,
    description,
    price,
  } = data || {};
  return (
    <Link to={`/donation-details/${id}`}>
      <Card
        className="mt-6 cursor-pointer"
        style={{ backgroundColor: category_bg }}
      >
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button style={{ color: category_bg }}>{category}</Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CardForCategory;
