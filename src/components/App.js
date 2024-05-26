import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { useState } from "react";
import ReactGA from 'react-ga4';

function App(){

    const [pageContent, setPageContent] = useState('intro')

    const switchContent = content => {
        try{
            setPageContent(content);
            ReactGA.event({
                category: 'Navigation',    
                action: 'Menu Click',      
                label: content          
              });
        }catch(err){
            console.log('error in switchContent component in App.js: ', err);
        }
    }

    return (
        <div className="mainDiv">
            <Header currentPage={pageContent} switchContent={switchContent}/>
            <Content content={pageContent} switchContent={switchContent}/>
            <Footer/>
        </div>
    )
}

export default App;