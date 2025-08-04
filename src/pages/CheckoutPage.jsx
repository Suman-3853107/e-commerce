import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import OrderSuccess from "../components/OrderSuccess";
import { toast } from "react-toastify";

const CheckoutPage = () => {
  const { id } = useParams();
  const { cart, clearCart } = useCart();

  const [product, setProduct] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  const [address, setAddress] = useState({
    doorNo: "",
    street: "",
    city: "",
    pinCode: "",
  });

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        if (id) {
          const found = data.find((p) => p.id === parseInt(id));
          setProduct(found);
        }
      });
  }, [id]);

  const itemsToShow = id
    ? product
      ? [{ ...product, quantity: 1 }]
      : []
    : cart;

  const total = itemsToShow.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleConfirm = () => {
    const { doorNo, street, city, pinCode } = address;

    if (!doorNo || !street || !city || !pinCode) {
      toast.error("Please complete all address fields.");
      return;
    }

   
    const fullAddress = `${doorNo}, ${street}, ${city} - ${pinCode}`;
    console.log("Full Address:", fullAddress);

    setShowSuccess(true);
    clearCart();
  };

  if (showSuccess) return <OrderSuccess />;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">Checkout</h2>

      {itemsToShow.map((item) => (
        <div key={item.id} className="flex gap-4 mb-6 border-b pb-4">
          <img src={item.thumbnail} className="w-24 h-24 object-contain" alt={item.title} />
          <div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm text-muted capitalize">{item.category}</p>
            <p className="text-primary font-medium">${item.price}</p>
          </div>
        </div>
      ))}

     
      <div className="mb-6">
        <label className="block font-medium mb-2">Delivery Address</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Door No"
            value={address.doorNo}
            onChange={(e) => setAddress({ ...address, doorNo: e.target.value })}
            className="border rounded p-3 w-full"
          />
          <input
            type="text"
            placeholder="Street"
            value={address.street}
            onChange={(e) => setAddress({ ...address, street: e.target.value })}
            className="border rounded p-3 w-full"
          />
          <input
            type="text"
            placeholder="City"
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
            className="border rounded p-3 w-full"
          />
          <input
            type="text"
            placeholder="Pin Code"
            value={address.pinCode}
            onChange={(e) => setAddress({ ...address, pinCode: e.target.value })}
            className="border rounded p-3 w-full"
          />
        </div>
      </div>

      
      <div className="mb-6">
        <label className="block font-medium mb-2">Payment Method</label>
        <div className="flex items-center gap-2">
          <input type="radio" checked readOnly />
          <span>Cash on Delivery</span>
        </div>
      </div>

 
      <div className="text-right font-semibold mb-6 text-xl text-primary">
        Total: ${total.toFixed(2)}
      </div>

      
      <button
        onClick={handleConfirm}
        className="w-full bg-primary text-white py-3 rounded hover:bg-primary/90 transition"
      >
        Confirm Order
      </button>
    </div>
  );
};

export default CheckoutPage;
