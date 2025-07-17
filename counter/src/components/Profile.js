import Header from "./Header";
import UserProfile from "./UserProfile";

function Profile() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Header />
      <UserProfile name="Alice" email="alice@example.com" age={25} />
    </div>
  );
}

export default Profile;