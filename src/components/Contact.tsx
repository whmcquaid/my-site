import { FiMail, } from 'react-icons/fi';
import { GrTwitter } from 'react-icons/gr';
import { GrLinkedinOption } from 'react-icons/gr';
import { ImGithub } from 'react-icons/im';

const Contact = () => {
    return (
      <>
      <div className='email-container'>
      <p className='contact-p'>
        To contact me you can send me an email.
      </p>
      <div className= 'contact-email'>
          <a href= 'mailto:williamhmcquaid@gmail.com'>
            <FiMail  className='mail-icon' size='35px'/>
          </a>
      </div>
      </div>
      <div className='social-container'>
      <p className='contact-p'>
        Or, I can be found on social media.
      </p>
      <div className= 'contact-icons'>
        <a href='https://github.com/whmcquaid/'>
           <ImGithub  size='35px'/>
        </a>
        <a href='https://twitter.com/williammcquaid7'>
         <GrTwitter  size='35px'/>
        </a>
        <a href='https://www.linkedin.com/in/william-mcquaid-66b112211/'>
          <GrLinkedinOption  size='35px'/>
        </a>
      </div>
      </div>
      </>
    )
}

export default Contact;