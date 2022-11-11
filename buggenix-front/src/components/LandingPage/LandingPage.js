import { Layout, Button} from 'antd';
import mainLogo from "../../assets/ladybug.png";
import styles from "./LandingPage.module.css";
import { Content } from 'antd/lib/layout/layout';

const {Header}  = Layout;

const LandingPage = () => {
  return (
      <Layout className='layout'>
        <Header className= {styles.header}>
          <div className = {styles.logo}>
            <img alt = "logo" className= {styles.logoImage} style = {styles} src = {mainLogo} />
            <span>Buggenix</span>
          </div>
          <div className= {styles.authBtns}>
            <Button type = "link" className= {styles.loginBtn}>Login</Button>
            <Button className= {styles.signupBtn}>Get started</Button>
          </div>
        </Header>
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