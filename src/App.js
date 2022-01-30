import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/layout/Layout';

import LoadingSpinner from './components/UI/LoadingSpinner';

const AllQuotes = lazy(() => import('./pages/AllQuotes'));
const NewQuote = lazy(() => import('./pages/NewQuote'));
const QuoteDetail = lazy(() => import('./pages/QuoteDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Comments = lazy(() => import('./components/comments/Comments'));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/quotes" />} />

          <Route path="/quotes" element={<AllQuotes />} />

          <Route path="/quotes/:quoteId/*" element={<QuoteDetail />}>
            <Route
              path=""
              element={
                <div className="centered">
                  <Link className="btn--flat" to={'comments'}>
                    Load Comments
                  </Link>
                </div>
              }
            ></Route>

            <Route path="comments" element={<Comments />} />
          </Route>

          <Route path="/new-quote" element={<NewQuote />} />

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
