import Dashboard from '../components/Dashboard';

const ProfileHomeComponent = () => {
  return <div>This is the profile home page</div>;
};

const ProfileHome = () => {
  return <Dashboard children={<ProfileHomeComponent />} />;
};

export default ProfileHome;
