import { Layout, Button} from 'antd';
import styles from "./LandingPage.module.css";
import { Content } from 'antd/lib/layout/layout';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
const {Header}  = Layout;

export const HeaderComponent = () => {
  return (
      <Header className= {styles.header}>
      <Logo/>
      <div className= {styles.authBtns}>
        <Link to = "/login"><Button type = "link" className= {styles.loginBtn}>Login</Button></Link>
        <Button className= {styles.signupBtn}>Get started</Button>
      </div>
    </Header>
  )
}

const LandingPage = () => {
  return (
      <Layout className='layout'>
        <HeaderComponent />
        <Content className={styles.content}>
          <h3 className = {styles.tag}>Customer Feedback Software for SaaS </h3>
          <h1 className= {styles.mainContent}>Navigate product decisions with customer feedback</h1>
          <h2 className= {styles.message}>Buggenix helps collect product insights by scraping customer grievances and feature ideas from social media.</h2>
          <Button className= {styles.ctaBtn}>Get started now</Button>
        </Content>
      </Layout>
  )
}

export default LandingPage;