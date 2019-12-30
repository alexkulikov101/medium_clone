import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import ArticleForm from '../components/ArticleForm';
import useFetch from '../hooks/useFetch';
import { CurrentUSerContext, CurrentUserContext } from '../context/currentUser';

const CreateArticle = () => {
  const apiUrl = '/articles';
  const [{ response, error }, doFetch] = useFetch(apiUrl);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [currentUserState] = useContext(CurrentUserContext);

  const initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: []
  };

  const handleSubmit = article => {
    doFetch({
      method: 'post',
      data: {
        article
      }
    });
  };

  useEffect(() => {
    if (!response) return;
    setIsSuccessful(true);
  }, [response]);

  if (!currentUserState.isLoggedIn) {
    return <Redirect to='/' />;
  }

  if (isSuccessful) {
    return <Redirect to={`/articles/${response.article.slug}`} />;
  }

  return (
    <div>
      <ArticleForm
        errors={(error && error.errors) || {}}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default CreateArticle;
