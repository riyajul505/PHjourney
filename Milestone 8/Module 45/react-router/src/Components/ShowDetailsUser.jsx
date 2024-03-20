import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const ShowDetailsUser = () => {
    const params = useParams();
    console.log(params.userId);
    const userData = useLoaderData();
    const navigat = useNavigate();
    const handleOriginalButton = () => {
        navigat(-1);
  };
    
    const {name,email,username,website} = userData;
    return (
        <div>
            <h1 className="text-xl">Name: {name}</h1>
            <h1 className="text-xl">Email: {email}</h1>
            <h1 className="text-xl">Username: {username}</h1>
            <h1 className="text-xl">Website: {website}</h1>
            <button className="btn btn-primary" onClick={handleOriginalButton}>Go Back</button>

        </div>
    );
};

export default ShowDetailsUser;