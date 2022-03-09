import { useParams } from "react-router-dom";

export default function SomeOtherPath() {
    const {colour_name} = useParams();
    console.log(colour_name);
    return (
        
        <h2>
            {`This is NOT the path you are looking for!`}
        </h2>
    )
}