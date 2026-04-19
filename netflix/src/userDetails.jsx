import { useParams, useNavigate } from "react-router-dom";
import { users } from "./users";

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === Number(id));

  if (!user) return <h2>User not found</h2>;

  return (
    <div>
      <h1>{user.name}</h1>

      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address}</p>

      <button onClick={() => navigate("/user")}>
        Back to Users
      </button>
    </div>
  );
}