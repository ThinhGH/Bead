
import React from 'react';
import { Row, Col } from 'react-bootstrap';

const CategoryFilter = ({ selectedCategory, onCategoryClick }) => {
  return (
    <Row className='mb-4' style={{ color: 'black' }}>
      <Col>
        <h5>Chọn chậu cây :</h5>
        <ul className='list-inline'>
          <li className='list-inline-item'>
            <button
              type='button'
              className={`btn btn-outline-primary ${
                selectedCategory === '' ? 'active' : ''
              }`}
              onClick={() => onCategoryClick('')}
            >
              Tất cả
            </button>
          </li>
          
        </ul>
      </Col>
    </Row>
  );
};

export default CategoryFilter;