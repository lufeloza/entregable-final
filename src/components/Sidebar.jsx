import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getFavoritesThunk } from '../store/slice/favorites';
import { purchasesCartThunk } from '../store/slice/favorites';
function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const favorites = useSelector (state => state.favorites)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getFavoritesThunk)
  }, [])
  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <i className='bx bx-cart-alt' ></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement ='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Productos Favoritos</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <ul>
                {
                    favorites.map (products => (
                        <li key ={products.id}>
                            <h2>{products.product?.title}</h2>
                            <h2>{products.product?.quantity}</h2>
                            <img src={products.product?.images[0].url} style={{width: 150, height: 200, objectFit:'contain' }} />
                        </li>
                    ))
                }
            </ul>
            <Button onClick={() => useDispatch(purchasesCartThunk())}>Checkout</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;