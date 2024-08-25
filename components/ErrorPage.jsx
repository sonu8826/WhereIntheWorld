import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const err = useRouteError();
    console.log(err)
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{err.status || err.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
