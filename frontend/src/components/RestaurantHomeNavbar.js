import React from 'react'
import styles from "../components/styles/RestaurantHome.module.css"
import { Link, useNavigate } from 'react-router-dom'
import { Button, useToast } from '@chakra-ui/react'
import AddItem from '../components/AddItem'

export default function RestaurantHomeNavbar(props) {
    const navigate = useNavigate();
    const toast = useToast()
    const handleLogout = () =>{
        localStorage.removeItem('token');
        navigate('/Resto')
        toast({
            title: 'Logged Out Successfully',
            status: 'success',
            duration: 2000,
            position: 'top-right',
            isClosable: true,
          })
    }
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-black">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.name}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            
                        </ul>
                        <div className={styles.add}>
                        <AddItem/>
                        </div>

                        <div className={styles.order}>
                        <Button>
                            <Link to="/RestaurantOrder"> Orders</Link>
                        </Button>
                        </div>

                        <div>
                        <Button className="btn btn-primary" onClick={handleLogout}>Logout</Button>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}
