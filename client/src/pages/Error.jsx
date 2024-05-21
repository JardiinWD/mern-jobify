import { Link, useRouteError } from "react-router-dom"

const Error = () => {
  // Get the error from the useRouteError hook and save it on error variable
  const getError = useRouteError()
  
  console.log(getError);
  
  return (
    <div>
        <h1>Error Page</h1>
        <Link to='/'>Go Back Home</Link>
    </div>
  )
}

export default Error
