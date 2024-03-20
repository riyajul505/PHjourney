import { useLoaderData } from "react-router-dom";
import UserCard from "./UserCard";

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h1>Our users {users.length} </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam placeat fuga voluptate ex totam, eum quo tempora excepturi nihil, facilis voluptas in harum vitae porro dolores quidem cum eveniet?</p>
            <div className="grid grid-cols-1 mt-5 lg:grid-cols-3 gap-4">
                {users.map((user) => <UserCard key={user.id} data={user}></UserCard>)}
            </div>
        </div>
        
    );
};

export default Users;