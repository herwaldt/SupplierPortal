import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReceipts } from '../../actions';

const OnTimeDelivery = () => {
  const dispatch = useDispatch();
  const receipts = useSelector((state) => state.receipts);

  useEffect(() => {
    dispatch(fetchReceipts());
  }, []);

  const { totalReceipts } = receipts;
  const { lates } = receipts;
  console.log(lates);

  return (
    <>
      <p>
        We received
        {' '}
        { totalReceipts }
        {' '}
        total receipts
      </p>
    </>
  );
};

export default OnTimeDelivery;
