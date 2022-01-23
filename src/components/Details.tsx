interface numberProps {
  number: number;
}
const Details = (props: numberProps) => {
  return (
    <>
      <p>Details: {props.number / 2}</p>
    </>
  );
};
export default Details;
