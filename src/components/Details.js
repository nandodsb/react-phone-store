import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
       {value => {
        const  {
          id,
          company, 
          img, 
          info, 
          price, 
          title,
          inCart
        } = value.detailProduct;

        return (
          <div className="container py-5">
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{title}</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                <img src={img} className="img-fluid" alt="product" />
              </div>
            </div>

            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2>modelo: {title}</h2>
                <h4 className="text-title text-capitalize text-muted mt-3 mb-2">
                  fabricado por:{" "}
                  <span className="text-capitalize">{company}</span>
                </h4>

                <h4 className="text-blue">
                  <strong>
                    preço: <span>$</span>
                    {price}
                  </strong>
                </h4>

                <p className="font-weight-bold mt-3 mb-0">
                  informações sobre o produto:
                </p>
                <p className="text-muted lead">{info}</p>
                <div>
                  <Link to="/">
                    <ButtonContainer>Produtos</ButtonContainer>
                  </Link>

                  
                  <ButtonContainer 
                    cart
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? "inCart" : "Adicione"}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          </div>
        );
       }}
      </ProductConsumer>
    )
  }
}
