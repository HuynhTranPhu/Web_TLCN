import React from 'react';
import { useSelector } from 'react-redux';

const OrderStatus = () => {
    const viewHistoryOrder = useSelector(state => state.viewHistoryOrder);
    const {viewHistory, loading, error } = viewHistoryOrder;
    const formatDate = (date) => {
        if (date) {
          const d = new Date(date);
          return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
        }
        return "";
      };
    return (
        <div>
             {viewHistory.map((orderItem,index)=>(
                <div className="orderTrack">
                
                        
                        {orderItem.orderStatus.map((status) => (
                            <div
                            className={`orderStatus ${
                                status.isCompleted ? "active" : ""
                            }`}
                            >
                            <div
                                className={`point ${status.isCompleted ? "active" : ""}`}
                            ></div>
                            <div className="orderInfo">
                                <div className="status">{status.type}</div>
                                <div className="date">{formatDate(status.date)}</div>
                            </div>
                            </div>
                        ))}

                    
                
                </div>
            ))}
        </div>
    );
};

export default OrderStatus;