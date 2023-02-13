import React from "react";
import styles from "../styles/Home.module.css";
import { ConnectButton } from 'web3uikit';
import Search from "../assets/svg/search";

const Header = () => {
  return(
    
      <div className={styles.header} ><span className={styles.span}>DEFI LENDING APP</span>
      <div className={styles.spacer} />
        <div className={styles.headerWrapper}>
          <nav className={styles.nav}>
            <div className={styles.navItems}>
              <div className ={styles.navLink}>
                Home
              </div>
            </div>

            <div className={styles.navItems}>
              <div className ={styles.navLink}>
                Supply Market
              </div>
            </div>

            <div className={styles.navItems}>
              <div className ={styles.navLink}>
                Borrow Market
              </div>
            </div> 
          </nav>

            <ConnectButton moralisAuth={false}/>
            <div className={styles.inputContainer}> </div>
                 <div className={styles.svg}>
                  <Search /></div> 
                  <input className={styles.input} placeholder= ' Search '/>
                 
                 
                 
          
            
          </div>
        </div>
      
    
      
    
  
)};

export default Header;
