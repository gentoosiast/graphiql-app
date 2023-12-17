import { useRouteError } from 'react-router-dom';
export default function ErrorPage(): JSX.Element | undefined {
  const error = useRouteError();
  console.error(error);
  if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  }
}
