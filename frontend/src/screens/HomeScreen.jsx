import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import Meta from '../components/Meta';
import '../assets/styles/HomeScreen.css'; // Import your CSS file

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    <div className="home-screen">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          <h2 className="banner-text"
           style={{ display: 'flex',
           alignItems: 'center',
           color: '#000',
           fontFamily: 'cursive',
           fontSize: '18px',
           lineHeight: '1.5',
           textAlign: 'justify',
           position: 'relative',}}>
            Trong thế giới bận rộn, việc chăm sóc cây
            có thể trở nên phức tạp.<br/> Retro sẽ giúp bạn
            đưa ra những lựa chọn có thể xem xét
            cho không gian của <br/>bạn vì chúng chung có
            những đặc điểm chung là dễ chăm sóc và ít
            yêu cầu về thời gian.
          </h2>

          <h1 style={{ color: '#000', fontFamily: 'cursive' }}>Latest Products:</h1>
          
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </div>
  );
};

export default HomeScreen;
