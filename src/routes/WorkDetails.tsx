import { useParams } from "react-router-dom";

export function WorkDetails() {
  const { slug } = useParams();
  return (
    <>
      <h1>{slug}</h1>
    </>
  );
}
