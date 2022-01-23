interface Props {
  number: number;
}
const Details = (props: Props) => {
  return (
    <>
      <p>Details: {props.number / 2}</p>
    </>
  );
};
export default Details;
