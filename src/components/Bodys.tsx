interface Props {
  message: string;
  number: number;
  children: React.ReactNode;
}
const Bodys = (props: Props) => {
  return (
    <>
      <p>Bodys: {props.message}</p>
      <p>Bodys: {props.number}</p>
      <p>Bodys: {props.children}</p>
    </>
  );
};
export default Bodys;
