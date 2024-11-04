import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import BuyTicket from "../pages/BuyTicket";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PaymentMethod from "../pages/PaymentMethod";
import CreditCardPayment from "../components/CreditCardPayment";
import PixPayment from "../components/PixPayment";
import PaymentOptions from "../components/PaymentOption";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ingresso",
    element: <BuyTicket />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Register />,
  },
  {
    path: "/escolher-pagamento",
    element: <PaymentMethod />,
    children: [
      { index: true, element: <PaymentOptions /> },  // Rota padrão
      { path: "cartao", element: <CreditCardPayment /> },  // Rota do pagamento com cartão
      { path: "pix", element: <PixPayment /> },         // Rota do pagamento via PIX
    ],
  }
]);

export default router;