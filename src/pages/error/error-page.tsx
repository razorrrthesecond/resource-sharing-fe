import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div>
      <h1>404! Page not found </h1>
      <p>
        The page you are looking for does not exist. Please check the URL or go
        back to the <Link to="/">home page.</Link>
      </p>
    </div>
  );
}
