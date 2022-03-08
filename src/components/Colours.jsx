import {useState} from 'react';
import {Link} from 'react-router-dom'

export default function Colours() {
    const initialState = ['gold', 'salmon', 'green', 'purple'];
    const [colours] = useState(initialState);

    return(
        <main>
        <h2>This is colours page</h2>
            <ul>
                {colours.map((colour) => { return <li key={colour} > 
                                                        <Link to={`/colours/${colour}`}>{colour}</Link>
                                                        </li>
                                            })}
            </ul>
        </main>
    )
}