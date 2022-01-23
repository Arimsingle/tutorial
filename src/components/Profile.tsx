interface Props {
  id: string;
  name: string;
  address: string;
}
const Profile = (props: Props) => {
  return (
    <>
      <p>ID : {props.id}</p>
      <p>Name : {props.name}</p>
      <p>Address : {props.address}</p>
    </>
  );
};
export default Profile;
