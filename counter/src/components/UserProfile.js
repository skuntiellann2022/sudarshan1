import { useState } from "react";

export default function UserProfile({ name, email, age }) {
  const [showEmail, setShowEmail] = useState(true);

  return (
    <div style={{ marginTop: '20px' }}>
      <p> Name: {name}</p>
      {showEmail && <p> Email: {email}</p>}
      <p>Age: {age}</p>
      <button onClick={() => setShowEmail(!showEmail)}>
        {showEmail ? 'Hide Email' : 'Show Email'}
      </button>
    </div>
  );
}