import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import QuoteDetail from './pages/QuoteDetail';
import Comments from './components/comments/Comments';

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
