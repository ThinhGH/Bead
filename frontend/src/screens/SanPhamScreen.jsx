import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import Meta from '../components/Meta';

const SanPhamScreen = () => {
  const { keyword } = useParams();
  const pageNumber = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword, pageNumber });

  return (
    <>
      <Meta title='Products' />
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff' }}>Latest Products</h1>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant='danger'>Error loading products</Message>
      ) : (
        <>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate pages={data.pages} page={data.page} keyword={keyword ? keyword : ''} />
        </>
      )}
    </>
  );
};

export default SanPhamScreen;
