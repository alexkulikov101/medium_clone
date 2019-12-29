import React, { useEffect } from 'react';
import { stringify } from 'query-string';
import Feed from '../components/Feed';
import PopularTags from '../components/PopularTags';
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { getPaginator, limit } from '../utils/range';

import useFetch from '../hooks/useFetch';

const GlodalFeed = ({ location, match }) => {
  const { offset, currentPage } = getPaginator(location.search);
  const stringifiedParams = stringify({
    limit,
    offset
  });
  const apiUrl = `/articles?${stringifiedParams}`;
  const url = match.url;
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    doFetch();
  }, [doFetch, currentPage]);
  return (
    <div className='home-page'>
      <div className='banner'>
        <div className='container'>
          <h1>Medium clone</h1>
          <p>A place to share knowledge</p>
        </div>
      </div>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-9'>
            {isLoading && <Loading />}
            {error && <ErrorMessage />}
            {!isLoading && response && (
              <>
                <Feed articles={response.articles} />
                <Pagination
                  total={response.articlesCount}
                  limit={limit}
                  url={url}
                  currentPage={currentPage}
                />
              </>
            )}
          </div>
          <div className='col-md-3'>
            <PopularTags />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlodalFeed;
