interface numberProps {
  number: number;
}
const Posts = (props: numberProps) => {
  return (
    <>
      <p>Posts: {props.number * 2}</p>
    </>
  );
};
export default Posts;
