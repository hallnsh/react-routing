import { Link } from "react-router-dom"

export default function ErrorPage() {
return (
    <>
        <h2>Ooops looks like you're lost</h2>
        <Link to='/'>Back to safety</Link>
    </>
    )
}