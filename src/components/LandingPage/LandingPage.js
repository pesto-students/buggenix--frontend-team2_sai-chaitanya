import { Layout, Button} from 'antd';
import styles from "./LandingPage.module.css";
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { useState } from 'react';
import betterDecisionsImg from "../../assets/landingPage/better-decisions.png";
import iterations from "../../assets/landingPage/iterations.png";
import peopleImg from "../../assets/landingPage/people.png";

const {Header}  = Layout;

export const HeaderComponent = (props) => {

  const {showBtns} = props;

  return (
      <Header showBtns = {false} className= {styles.header}>
      <Logo/>
      {showBtns && <div className= {styles.authBtns}>
        <Link to = "/login"><Button type = "link" className= {styles.loginBtn}>Login</Button></Link>
        <Link to = "/signup"><Button className= {styles.signupBtn}>Get started</Button></Link>
      </div> }
      
    </Header>
  )
}

const LandingPage = () => {

  const [selectedTab, setSelectedTab] = useState({
      value: "bug-scraper", 
      label: "Bug Scraper", 
      description: "Our state-of-the-art algorithm efficiently scouts all of your social media handles and brings back actionable info from your users in the form of tickets right into your inbox as tickets!"
    });
  const [tabsList, setTabsList] = useState([
    {
      value: "bug-scraper", 
      label: "Bug Scraper", 
      description: "Our state-of-the-art algorithm efficiently scouts all of your social media handles and brings back actionable info from your users in the form of tickets right into your inbox as tickets!"
    }, 
    {
      value: "assign-tickets", 
      label: "Assign Tickets", 
      description: "The incoming feedback that have been converted into tickets for you can then also be assigned to projects that you would’ve created right inside of our tool for your developers to start working on right away!"
    }, 
    {
      value: "metrics", 
      label: "Metrics", 
      description: "Understand key metrics that drive customer satisfaction and gain insights on what users are dissatisfied with our stat dashboard where you can see the number of bugs, feature requests or just general feedback. "
    }, 
  ])


  const TabSwitch = (tab) => {
    setSelectedTab(tab);
  }
  
  return (
    <>
        <HeaderComponent showBtns = {true}/>
        <div className= {styles.container}>
          <div className={styles.content}>
            <div className = {styles.tag}>Customer Feedback Software for SaaS </div>
            <div className= {styles.mainContent}>Navigate product decisions with customer feedback</div>
            <div className= {styles.message}>Buggenix helps collect product insights by scraping customer grievances and feature ideas from social media.</div>
            <button className= {styles.ctaBtn}>Get started now</button>
          </div>
          <h1 className= {styles.tagLine}>All-in-one customer feedback and ticket management platform</h1>
          <div className= {styles.tabs}>
            {
              tabsList.map(tab => {
                const {value, label} = tab;
                return (
                  <button className= {selectedTab.value  === tab.value && styles.selected} name = {value} onClick ={() => TabSwitch(tab)}> {label}</button>
                )
              })
            }
          </div>
          <div className= {styles.tabInfo}>
              <div className= {styles.tabImage}>
                  <img src = {require(`../../assets/landingPage/${selectedTab.value}.png`)} />
              </div>    
              <div className= {styles.tabContent}>
                  <h1>{selectedTab.label}</h1>
                  <span>{selectedTab.description}</span>
                  <button className= {styles.tabBtn}>Try now</button>
              </div>   
          </div>
          <h1 className= {styles.tagLine}>Why you need a customer feedback software</h1>

          {/* why */}

          <div className= {styles.whySection}> 
            <div className = {styles.item}> 
              <div className={styles.title}>Better decisions via concrete evidence</div>
              <hr></hr>
              <div className= {styles.card}> 
                <div className= {styles.img}>
                  <img src = {betterDecisionsImg} />
                </div>
                <span style = {{fontWeight: "bold"}}>User research</span>
                <span>Cater to exactly what the market is asking for and make strides confidently and reliably. </span>
              </div>
            </div>
            <div className = {styles.item}>
              <div className={styles.title}>Consistent iterations to stay ahead of the game</div>
              <hr/>
              <div className= {styles.card}>
                <div className= {styles.img}>
                  <img src = {iterations} />
                </div>
                <span style = {{fontWeight: "bold"}}>Measure CX</span>
                <span>Cater to exactly what the market is asking for and make strides confidently and reliably. </span>
              </div>
            </div>
          </div>
          {/* Blog section */}

          <div className= {styles.blogSection}>
            <div className= {styles.peopleImg}>
              <img src = {peopleImg}/>
            </div>
            <div className= {styles.peopleContent}>
                <h1>How will product satisfaction increase when you act on feedback?</h1> 
                <h3>Do read the blog written by one of our lead developers on #MakeFeedbackMatter where he shares his insights generously. </h3>
                <button>Read now</button>
            </div>
          </div>
        </div>
      </>
    )
  }

export default LandingPage;