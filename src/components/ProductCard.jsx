import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProductCard ({data}) {
  return (
    <Card className="card border-primary mb-3" >
      <Card.Img variant="top"
       src={data.images?.[0].url}
       style={{height: 200, objectFit : 'cover' }} />
      <Card.Body  >
        <Card.Title>{data.title}</Card.Title>
        <Card.Title>Price</Card.Title>
        <Card.Title> $ {data.price}</Card.Title>
        <Button variant="primary">COMPRAR</Button>
        <Button 
        variant="primary"
        as={Link}   
        to ={`/Product/${data.id}`}    
        >
          DETALLE
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;