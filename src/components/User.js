export default User = (props) => {
  const { name, location, linkedIn } = props;
  return (
    <div className="user-card">
      <p>Name : {name}</p>
      <p>Location: {location}</p>
      <p>
        LinkedIn Id:{" "}
        <a href={linkedIn} target="_blank">
          {linkedIn}
        </a>
      </p>
    </div>
  );
};
