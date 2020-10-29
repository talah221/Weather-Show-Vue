<template>
  <footer>
    <div class="footer-header">
      <div class="app-icon">
        <img
          src="https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/weather-few-clouds-256.png"
        />
      </div>
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/favorites">Favorites</router-link>
      </div>
    </div>

    <div class="copyrights">
      <span>© Copyright 2020 Tal Lahyani - All Rights Reserved</span>
      <div class="social-links">
        <a
          href="https://www.facebook.com/tal.lahyani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-256.png"
            alt=""
          />
        </a>
        <a
          href="https://talah221.github.io/PortfolioV2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn3.iconfinder.com/data/icons/business-finance-40/512/24-128.png"
            alt=""
          />
        </a>
        <a
          href="https://www.linkedin.com/in/tal-lahyani/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-128.png"
            alt=""
          />
        </a>
        <a
          href="https://github.com/talah221"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/github-256.png"
            alt=""
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
footer {
  background-color: bisque;
  width: 100%;
  border-radius: 3px;
  .footer-header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid lightgray;
    .app-icon {
      img {
        width: 60px;
        margin-left: 15px;
      }
    }
    .links {
      a {
        margin-right: 15px;
        text-decoration: none;
        color: black;
      }
    }
  }

  .copyrights {
    text-align: center;
    padding: 10px;
    .social-links {
      img {
        width: 40px;
        margin-right: 30px;
        margin-top: 10px;
      }
    }
  }
}
</style>
