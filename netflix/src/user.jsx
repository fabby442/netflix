import { useNavigate } from "react-router-dom";
import { users } from "./users";

export default function User() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>User Page</h1>

      <div className="user-grid">
        {users.map((u) => (
          <div
            key={u.id}
            className="user-card"
            onClick={() => navigate(`/user/${u.id}`)}
          >
            <h3>{u.name}</h3>
            <p>{u.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}