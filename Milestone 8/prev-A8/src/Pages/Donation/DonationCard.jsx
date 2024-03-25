import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const DonationCard = ({data}) => {
    const {
        
        title,
        category,
        category_bg,
        card_bg,
        text_button_bg,
        description,
        price,
      } = data;
  return (
    <Card className="mt-6 w-96" style={{backgroundColor:category_bg}}>
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
        <Typography>
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button style={{color:category_bg}}>Read More</Button>
      </CardFooter>
    </Card>
  );
};

export default DonationCard;
