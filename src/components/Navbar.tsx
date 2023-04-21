import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

export function Navbar() {
    const { openCart, cartQuantity }: any = useShoppingCart();
    return (
        <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                {cartQuantity > 0 &&
                    <Button
                        onClick={openCart}
                        style={{ width: '3rem', height: '3rem', position: 'relative' }}
                        variant='outline-primary'
                        className='rounded-circle'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 64"
                        >
                            <g>
                                <path fill="#231F20" d="M27,24c-0.553,0-1,0.447-1,1v16c0,0.553,0.447,1,1,1s1-0.447,1-1V25C28,24.447,27.553,24,27,24z" />
                                <path fill="#231F20" d="M37,24c-0.553,0-1,0.447-1,1v16c0,0.553,0.447,1,1,1s1-0.447,1-1V25C38,24.447,37.553,24,37,24z" />
                                <path fill="#231F20" d="M47,24c-0.553,0-1,0.447-1,1v16c0,0.553,0.447,1,1,1s1-0.447,1-1V25C48,24.447,47.553,24,47,24z" />
                                <path fill="#231F20" d="M60.476,16H15.059L12,3c-0.438-1.75-1.614-3-3.271-3H3C1.343,0,0,1.343,0,3s1.343,3,3,3h3.723l3.371,14
                                l5.921,26l1.777,6.458C15.619,53.359,14.09,55.501,14.09,58c0,3.313,2.687,6,6,6c2.972,0,5.433-2.162,5.91-5h14.09
                                c0.478,2.838,2.938,5,5.91,5c3.313,0,6-2.687,6-6s-2.687-6-6-6c-2.972,0-5.433,2.164-5.91,5H26c-0.478-2.836-2.938-5-5.91-5
                                c-0.125,0-0.246,0.012-0.369,0.019l-0.642-2.258C19.507,49.904,19.972,50,20.505,50h32.969c2.625,0,3.908-1.904,4.5-4l5.933-26
                                C64.344,17.583,63.265,16,60.476,16z M46,57c0.553,0,1,0.447,1,1s-0.447,1-1,1s-1-0.447-1-1S45.447,57,46,57z M20,57
                                c0.553,0,1,0.447,1,1s-0.447,1-1,1s-1-0.447-1-1S19.447,57,20,57z M30,41c0,1.657-1.343,3-3,3s-3-1.343-3-3V25c0-1.657,1.343-3,3-3
                                s3,1.343,3,3V41z M40,41c0,1.657-1.343,3-3,3s-3-1.343-3-3V25c0-1.657,1.343-3,3-3s3,1.343,3,3V41z M50,41c0,1.657-1.343,3-3,3
                                s-3-1.343-3-3V25c0-1.657,1.343-3,3-3s3,1.343,3,3V41z"/>
                            </g>
                        </svg>
                        <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
                            style={{
                                color: 'white',
                                width: '1.5rem',
                                height: '1.5rem',
                                position: 'absolute',
                                bottom: '0',
                                right: '0',
                                transform: 'translate(25%, 25%)'
                            }}>
                            {cartQuantity}
                        </div>
                    </Button>
                }
            </Container>
        </NavbarBs >
    )
}