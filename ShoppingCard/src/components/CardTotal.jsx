import React from "react";

const taxRate = 0.18;
const shipping = 25;

const CardTotal = ({produkte}) => {

  const aratoplam= produkte.reduce((toplam,urun)=>toplam+urun.amount*urun.price*urun.dampingRate,0)
  
  
  
  return (
    <table className="table w-100">
      <tbody>
        <tr className="text-end">
          <th className="text-start">Subtotal</th>
          <td>
            $<span className="subtotal">{aratoplam}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Tax(18%)</th>
          <td>
            $<span className="tax">{aratoplam*taxRate}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Shipping</th>
          <td>
            $<span className="shipping">{shipping}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Total</th>
          <td>
            $
            <span className="total">{aratoplam+aratoplam*taxRate+shipping}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CardTotal;
