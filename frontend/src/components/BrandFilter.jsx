import React from 'react';
import { Row, Col } from 'react-bootstrap';

const BrandFilter = ({ selectedBrand, onBrandClick }) => {
  return (
    <Row className='mb-4' style={{ color: 'black' }}>
      <Col>
        <h5> các loại cây có sẵn  </h5>
        <ul className='list-inline'>
          <li className='list-inline-item'>
            <button
              type='button'
              className={`btn btn-outline-primary ${
                selectedBrand === '' ? 'active' : ''
              }`}
              onClick={() => onBrandClick('')}
            >
              Tất cả
            </button>
          </li>
          <li className='list-inline-item'>
            <button
              type='button'
              className={`btn btn-outline-primary ${
                selectedBrand === 'họ cây xa mạc' ? 'active' : ''
              }`}
              onClick={() => onBrandClick('họ cây xa mạc')}
            >
              Cây khó nuôi
            </button>
          </li>
          <li className='list-inline-item'>
            <button
              type='button'
              className={`btn btn-outline-primary ${
                selectedBrand === 'họ cây nước' ? 'active' : ''
              }`}
              onClick={() => onBrandClick('họ cây nước')}
            >
             Cây dễ nuôi 
            </button>
          </li>
       
         
        </ul>
      </Col>
    </Row>
  );
};

export default BrandFilter;