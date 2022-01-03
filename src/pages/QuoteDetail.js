import { Fragment } from 'react';
import { Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'John', text: 'Learning react is fun' },
  { id: 'q2', author: 'Kelvin', text: 'Learning react is great' },
];

const QuoteDetail = () => {
  const { quoteId } = useParams();

  const quote = DUMMY_QUOTES.find(({ id }) => id === quoteId);

  if (!quote) {
    return <p>No quote found.</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote?.text} author={quote?.author} />

      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
