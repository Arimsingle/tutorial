interface Props {
  number: number;
  message: string;
}
const Posts = (props: Props) => {
  return (
    <>
      <p>Posts: {props.message}</p>
      <p>Posts: {props.number * 2}</p>
    </>
  );
};
export default Posts;
