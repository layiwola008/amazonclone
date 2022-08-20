import React, { useEffect, useState } from 'react';
import './Orders.css'
import {collection, query, where, getDocs, documentId} from 'firebase/firestore';
import { db } from './firebase';
import { useStateValue } from './StateProvider';
import Order from './Order'; 

const Orders = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([])

    useEffect(() => {
        function getMyOrders () {
            const ordersCollectionRef = collection(db, "orders");
            const q = query(ordersCollectionRef, where(documentId(), '==', `${user?.uid}`))
            getDocs(q).then(response => {
                // console.log("MY DB ORDERS >>>", response.docs)
                const ords = response.docs.map(doc => ({data: doc.data(), id: doc.id}))
                setOrders(ords)
            }).catch(error => console.log(error.message))
        }
        getMyOrders()
    }, [user])

  return (
    <div className='orders'>
        <h1>My Orders</h1>       
        <div className='orders_order'>
            {orders?.map(order => (
                <Order order={order} />
            ))}
        </div>
    </div>
  )
}

export default Orders