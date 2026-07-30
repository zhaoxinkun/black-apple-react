import { useNavigate } from "react-router";

const Computer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Computers</h1>
      <p>This is the Computers page.</p>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <button onClick={() => navigate(-1)}>返回上一页</button>
    </div>
  );
};
export default Computer;
