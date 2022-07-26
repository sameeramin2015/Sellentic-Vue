<template>
<div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
         
        </p>
        <p className='footer-subscription-text'>
        Stay informed about the possibilities !
        </p>
        <div class='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button class="button">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Links</h2>
    
           <ul  class="dropdown-nav">
            <li>
              <router-link class="link" :to="{ name: 'HomePagina' }"
                >Home</router-link
              >
            </li>
            <li>
              <router-link class="link" :to="{ name: 'BlastPagina' }">Blast</router-link>
            </li>
            <li>
              <router-link class="link" :to="{ name: 'ConnectPagina' }">Connect</router-link>
            </li>
            <li>
              <router-link class="link" :to="{ name: 'OptimizePagina' }"
                >Optimize</router-link
              >
            </li>
            <li>
              <router-link class="link" :to="{ name: 'TrainingPagina' }"
                >Training</router-link
              >
            </li>
            <li>
              <router-link class="link" :to="{ name: 'SupportPagina' }">Support</router-link>
            </li>
            <li>
              <router-link class="link" :to="{ name: 'JobsPagina' }">Jobs</router-link>
            </li>
            <li>
              <router-link class="link" :to="{ name: 'AboutusPagina' }"
                >About us</router-link
              >
            </li>
          </ul>
          
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <p className='p'>Sellentic B.V.</p>
            <p className='p'>Keizershof 12, 2</p>
            <p className='p'>2500 Lier</p>
            <p className='p'>Tel: +32 3 808 74 00</p>
        </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/" target="_blank">Instagram</a>
            <a href="https://www.facebook.com/sellentic" target="_blank">Facebook</a>
            <a href='https://www.youtube.com/channel/UCkbtxbsdeqtDkkLozK_ZuJg' target="_blank">YouTube</a>
            <a href='https://www.linkedin.com/company/sellentic/' target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdFingerprint className='navbar-icon' />
              Sellentic
            </Link>
          </div>
          <small className='website-rights'>Copyright © 2022 Sellentic </small>
          <div className='social-icons'>
            <a
              className='social-icon-link'
              href="https://www.facebook.com/sellentic"
              target='_blank'
              aria-label='Facebook'
            >
             
            </a>
            <a
              className='social-icon-link'
              href="https://www.instagram.com/"
              target='_blank'
              aria-label='Instagram'
            >
             
            </a>
            <a
              className='social-icon-link'
              href='https://www.youtube.com/channel/UCkbtxbsdeqtDkkLozK_ZuJg'
              target='_blank'
              aria-label='Youtube'
            >
              
            </a>
         
            <a
              className='social-icon-link'
              href='https://www.linkedin.com/company/sellentic/'
              target='_blank'
              aria-label='LinkedIn'
            >
              
            </a>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
export default {
  name: "FooterPagina",
  components: {},
};
</script>

<style scoped>
.footer-container {
    background-color: black;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .footer-subscription {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    padding: 24px;
    color: #fff;
  }
  
  .footer-subscription > p {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
  }
  
  .footer-subscription-heading {
    margin-bottom: 24px;
    font-size: 24px;
  }
  
  .footer-subscription-text {
    margin-bottom: 24px;
    font-size: 20px;
  }
  
  .footer-input {
    padding: 8px 24px;
    border-radius: 2px;
    margin-right: 10px;
    outline: none;
    border: none;
    font-size: 18px;
    margin-bottom: 16px;
    border: 1px solid #fff;
  }
  
  .footer-links {
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;
    
  }
  
  .footer-link-wrapper {
    display: flex;
    
  }
  
  .footer-link-items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;
  }
  
  .footer-link-items h2 {
    margin-bottom: 16px;
  }
  
  .footer-link-items > h2 {
    color: #fff;
  }
  
  .footer-link-items a {
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
  }
  
  .footer-link-items a:hover {
    color: #e9e9e9;
    transition: 0.3s ease-out;
  }
  
  .footer-email-form h2 {
    margin-bottom: 2rem;
  }
  
  .footer-input::placeholder {
    color: #b1b1b1;
  }
  
  /* Social Icons */
  .social-icon-link {
    color: #fff;
    font-size: 24px;
  }
  
  .social-media {
    max-width: 1000px;
    width: 100%;
  }
  
  .social-media-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;
  }
  
  .social-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
  }
  
  .social-logo {
    color: #fff;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
  
  .website-rights {
    color: #fff;
    margin-bottom: 16px;
  }
   ul {
    list-style-type: none;
  }
   button{
    
    height: 37px;
    width: 90px;
    cursor: pointer;
    }

  
  @media screen and (max-width: 820px) {
    .footer-links {
      padding-top: 2rem;
    }
  
    .footer-input {
      width: 100%;
    }
  
    .btn {
      width: 100%;
    }
  
    .footer-link-wrapper {
      flex-direction: column;
    }
  
    .social-media-wrap {
      flex-direction: column;
    }
    .footer-input{
      width: 300px;
    }
  }
  .p{
    color: #fff;
  }
 
 
</style>