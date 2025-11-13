import { Row, Col, Spin } from "antd";
import MainLayout from "../main-layout/mainlayout";
import Card from "../../component/card/card";
import Paginatin from "../../component/pagination/pagination";
import "./home.css";
import {
  fetchCharacters,
  SelectData,
  SelectPagination,
  selectSearchque,
} from "../../app/characterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
function Homepage() {
  const dispatch = useDispatch();
  const characters = useSelector(SelectData);
  const paginaion = useSelector(SelectPagination);
  const queryre = useSelector(selectSearchque);
  const status = useSelector((state) => state.characters.status);
  useEffect(() => {
    dispatch(fetchCharacters({ page: 1, qurey:queryre }));
  }, []);
  const selectPage = (page) => {
    dispatch(fetchCharacters({ page, qurey:queryre}));
  };
  return (
    <>
      <MainLayout>
        <div className="container">
          {status === "pending" ? (
            <Row justify="center" align="middle" style={{ minHeight: '50vh' }}>
              <Col>
                <Spin size="large" />
              </Col>
            </Row>
          ) : (
            <Row gutter={[24, 24]} justify="center">
              {characters?.map((data) => (
                <Col key={data.id} span={4}>
                  <Card data={data} />
                </Col>
              ))}
            </Row>
          )}
          {paginaion?.count >
            20 &&(
              <Paginatin
                onChange={(page) => {
                  selectPage(page);
                }}
                pageSize={20}
                total={paginaion.count ?? 0}
              />
            )}
        </div>
      </MainLayout>
    </>
  );
}
export default Homepage;