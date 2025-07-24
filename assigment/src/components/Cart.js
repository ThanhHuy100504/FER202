import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/cartSlice';
import { Table, Button } from 'react-bootstrap';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Helper để chuyển "11.990.000" => 11990000
  const parseCurrency = (str) => {
    if (typeof str === 'number') return str;
    return Number(str.toString().replace(/\./g, '').replace(/[^0-9]/g, ''));
  };

  const formatCurrency = (num) =>
    num?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) || '0 đ';

  const getItemTotal = (item) => {
    const price = parseCurrency(item.currentPrice);
    return price * item.quantity;
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + getItemTotal(item),
    0
  );

  return (
    <div className="container py-5">
      <h2 className="mb-4">Giỏ hàng của bạn</h2>
      {cartItems.length === 0 ? (
        <p>Không có sản phẩm nào trong giỏ hàng.</p>
      ) : (
        <>
          <Table bordered hover className="bg-white">
            <thead className="table-dark text-center align-middle">
              <tr>
                <th>Hình ảnh</th>
                <th>Tên</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody className="align-middle text-center">
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={`/images/${item.image}`}
                      alt={item.name}
                      width="100"
                      style={{ objectFit: 'cover' }}
                    />
                  </td>
                  <td className="text-start">{item.name}</td>
                  <td>{formatCurrency(parseCurrency(item.currentPrice))}</td>
                  <td>{item.quantity}</td>
                  <td className="text-danger fw-bold">
                    {formatCurrency(getItemTotal(item))}
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Xoá
                    </Button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="4" className="text-end fw-bold">Tổng cộng:</td>
                <td className="text-danger fw-bold fs-5">{formatCurrency(totalAmount)}</td>
                <td>
                  <Button variant="outline-secondary" size="sm" onClick={() => dispatch(clearCart())}>
                    Xoá tất cả
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
};

export default Cart;
