import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import menu1 from "../assets/images/menu1.jpg";
import menu2 from "../assets/images/menu2.jpg";
import menu3 from "../assets/images/menu3.jpg";
import menu4 from "../assets/images/menu4.jpg";

function CardComponent() {
  return (
    <div className="p-5">
    <div className="rounded-3 container p-5">
      <h1 className="text-black text-left p-3">Our Menu</h1>
      <div className="d-flex">
        <Card style={{ width: "18rem" }} className="mx-3">
          <Card.Img variant="top" src={menu1} />
          <Card.Body>
            <Card.Title>Margenrita Pizza</Card.Title>
            <Card.Text>Price: $19.99</Card.Text>
            <Button variant="dark" className="w-100 text-center">Buy</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mx-3">
          <Card.Img variant="top" src={menu2} />
          <Card.Body>
            <Card.Title>Mushroom Pizza</Card.Title>
            <Card.Text>Price: $19.99</Card.Text>
            <Button variant="dark" className="w-100 text-center">
              Buy
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mx-3">
          <Card.Img variant="top" src={menu3} />
          <Card.Body>
            <Card.Title>Hawaiian Pizza</Card.Title>
            <Card.Text>Price: $19.99</Card.Text>
            <Button variant="dark" className="w-100 text-center">
              Buy
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mx-3">
          <Card.Img variant="top" src={menu4} />
          <Card.Body>
            <Card.Title>Pesto Pizza</Card.Title>
            <Card.Text>Price: $19.99</Card.Text>
            <Button variant="dark" className="w-100 text-center">
              Buy
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div></div>
  );
}
export default CardComponent;