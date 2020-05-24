import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

import { ButtonContainer } from './Button';
import styled from 'styled-components';
import '../App.css';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm 
       navbar-dark px-sm-5" id="NavWrapper">
        
        {/*logo
        https://www.svgrepo.com/svg/289603/online-shop-ecommerce
        */}

        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link" id="nav-link">
              produtos
            </Link>
          </li>
        </ul>

        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
            <i className="fas fa-cart-plus"/>
            </span>
            meu carrinho
          </ButtonContainer>
        </Link>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`


background: var(--mainBlue);

.navbar-brand {
  height: 3.2rem;
  width: 3.2rem;
}

.nav-link {
  color: var(--mainWhite)!important;
  font-size: 1.3rem;
  text-transform: capitalize; 
  font-family: 'Lobster', cursive;    
}
`;