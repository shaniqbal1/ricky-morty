import { Pagination } from "antd";
function Paginatin(props) {
  return (
    <>
      <Pagination
        {...props}
        style={{
          justifyContent: "flex-end",
        paddingTop:"60px"
        }}
      />
    </>
  );
}
export default Paginatin;
