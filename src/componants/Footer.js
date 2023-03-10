import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    
    <div class="container bg-dark">
      <div class="row">
        <div class="col-md-4 footer-column">
          <ul class="nav flex-column">
            <li class="nav-item">
              <span class="footer-title">Product</span>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Product 1</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Product 2</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Plans & Prices</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Frequently asked questions</a>
            </li>
          </ul>
        </div>
        <div class="col-md-4 footer-column">
          <ul class="nav flex-column">
            <li class="nav-item">
              <span class="footer-title">Company</span>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Job postings</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">News and articles</a>
            </li>
            <li class="nav-item">
            <i class="bi bi-twitter"></i>
            </li>
          </ul>
        </div>
        <div class="col-md-4 footer-column">
          <ul class="nav flex-column">
            <li class="nav-item">
              <span class="footer-title">Contact & Support</span>
            </li>
            <li class="nav-item">
              <span class="nav-link"><i class="fas fa-phone"></i>+47 45 80 80 80</span>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fas fa-comments"></i>Live chat</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fas fa-envelope"></i>Contact us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fas fa-star"></i>Give feedback</a>
            </li>
          </ul>
        </div>
      </div>
  
      <div class="text-center"><i class="fas fa-ellipsis-h"></i></div>
      
      <div class="row text-center">
        <div class="col-md-4 box">
          <span class="copyright quick-links">Copyright &copy; Your Website <script>document.write(new Date().getFullYear())</script>
          </span>
        </div>
        <div class="col-md-4 box">
          <ul class="list-inline social-buttons">
            <li class="list-inline-item">
              <a href="#">
              <i class="bi bi-whatsapp"></i>
            </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
              <i class="fab fa-linkedin-in "></i>
            </a>
            </li>
      
          </ul>
       
        </div>
      
        <div class="col-md-4 box">
          <ul class="list-inline quick-links">
            <li class="list-inline-item">
              <a href="#">Privacy Policy</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='d-flex flex-nowrap'>
        
            
          </div>
    </div>
 
  )
}
