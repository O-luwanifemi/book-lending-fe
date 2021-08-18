import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHistoryAsync } from "../redux/actions/getHistoryAction";

const HistoryComponent = () => {
  const dispatch = useDispatch();
  const [history, setHistory] = useState([]);
  const historyData = useSelector((state) => state.historyReducer?.data); // Get the data to the reducer.

  useEffect(() => {
    dispatch(getHistoryAsync());
  }, [dispatch]);

  useEffect(() => {
    const retrievedHistory = historyData.data;
    if (retrievedHistory) {
      setHistory(retrievedHistory);
    }
  }, [historyData]);

  return (
    <>
      <div className="text-center">
        {history.map((list) => (
          <fieldset key={list._id}>
            <legend>{list.book.title}</legend>
            <p>
              <em>{list.book.description}</em> <br />
              Borrow Date: {list.createdAt} <br />
              Return Date: {list.borrowedDate} <br />
            </p>
          </fieldset>
        ))}
      </div>
    </>
  );
};
export default HistoryComponent;
