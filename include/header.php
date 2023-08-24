<?php
include("session.php");

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta name="theme-color" content="#ffffff">
  <link rel="stylesheet" href="../assets/bootstrap.min.css">
  <link rel="stylesheet" href="../css/main.css">

  <link rel="icon" href="../favicon.ico" type="image/x-icon">
  <link rel="shortcut icon" href="../favicon.png">
  <link rel="apple-touch-icon" href="../favicon.png">
  <link rel="manifest" href="../site.webmanifest">
 
        
 
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  
  <title><?php echo $page_title; ?></title>
</head>

<body class="d-flex flex-column min-vh-100">
<nav class="autohide navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" id="qwe111">
        <span class="navbar-toggler-icon" id="qwe"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link" href="../"><img class="rounded mx-auto d-block img-fluid" width="100" src="../images/Exotic Homes.transparent.png" alt="Exotic Homes" ></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../house">House</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../apartment">Apartment</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../residential">Residential</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../villa">Villa</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../cottage">Cottage</a>
          </li>
        </ul>
      </div>
      <div>
        <ul class="nav navbar-nav" style="flex-direction: row;">
          <li class="nav-item">
            <a class="nav-link" href="../search">
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </span>
              <span class="text sec">Search</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#account">
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
              </span>
              <span class="text sec">Account</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#basket">
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                </svg>
              </span>
              <span class="text sec">Basket</span>
            </a>

        </ul>
</div>
    </div>
  </nav>
