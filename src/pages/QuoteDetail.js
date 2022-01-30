import { Fragment, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const QuoteDetail = () => {
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  const { quoteId } = useParams();

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote?.text) {
    return <p>No quote found.</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote?.text} author={loadedQuote?.author} />

      <Outlet />
    </Fragment>
  );
};

export default QuoteDetail;
