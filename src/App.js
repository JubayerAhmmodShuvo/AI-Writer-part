import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from './Pages/Home/Home';
import Editor from "./Pages/Home/editor";
import Document from "./Pages/ADS/document";
import Ads from './Pages/ADS/Ads';
import AiWriter from './Pages/AiWriter/AiWriter';
import TwitterAds from './Pages/ADS/TwitterAds';
import FacebookAds from "./Pages/ADS/FacebookAds";
import GoogleAds from "./Pages/ADS/GoogleAds";
import FacebookPost from "./Pages/ADS/FacebookPost";
import Save from './Pages/Shared/Save';
import Primary from './Pages/Shared/Primary';
import Headline from './Pages/Shared/Headline';
import Blog from './Pages/Blog/Blog';
import Project from './Pages/Blog/Project';
import InstagramCaption from "./Pages/ADS/InstagramCaption";
import LinkedinPost from "./Pages/ADS/LinkedinPost";
import Tweet from './Pages/ADS/Tweet';
import PrinterestPin from './Pages/ADS/PrinterestPin';
import YouTubeDescription from './Pages/ADS/YouTubeDescription';
import ColdEmail from './Pages/ADS/ColdEmail';
import PromotionalEmail from './Pages/ADS/PromotionalEmail';
import PromotionalSMS from './Pages/ADS/PromotionalSMS';

function App() {
  return (
    <div>
      <AiWriter />

      < Routes>
      <Route path='/home' element={<Home />} ></Route>
      <Route path="/editor" element={<Editor />}></Route>
        <Route path="/document" element={<Document />}></Route>
      <Route path='/blog' element={<Blog />} ></Route>
      <Route path='/ads' element={<Ads />} ></Route>
      <Route path='/project' element={<Project />} ></Route>
        <Route path='twitterads' element={<TwitterAds />} >
          <Route path="save" element={<Save />}/>
          <Route index element={<Primary />}/>
          <Route path="primary" element={<Primary />}/>
          <Route path="headline" element={<Headline />}/>
         
          
        </Route>
        <Route path="facebookads" element={<FacebookAds />}>
          <Route path="save" element={<Save />} />
          <Route index element={<Primary />} />
          <Route path="primary" element={<Primary />} />
          <Route path="headline" element={<Headline />} />
        </Route>
        <Route path="googleads" element={<GoogleAds />}>
          <Route path="save" element={<Save />} />
          <Route index element={<Primary />} />
          <Route path="primary" element={<Primary />} />
          <Route path="headline" element={<Headline />} />
        </Route>

        <Route path="facebookpost" element={<FacebookPost />}>
          <Route path="save" element={<Save />} />
          <Route index element={<Primary />} />
          <Route path="primary" element={<Primary />} />
        </Route>
        <Route path="instagramcaption" element={<InstagramCaption />}>
          <Route path="save" element={<Save />} />
          <Route index element={<Primary />} />
          <Route path="primary" element={<Primary />} />
        </Route>
        <Route path="linkedinpost" element={<LinkedinPost />}>
          <Route path="save" element={<Save />} />
          <Route index element={<Primary />} />
          <Route path="primary" element={<Primary />} />
        </Route>

        <Route path='tweet' element={<Tweet />} >
          <Route path="save" element={<Save />}/>
          <Route index element={<Primary />}/>
          <Route path="primary" element={<Primary />}/>
          

        </Route>
        
        <Route Route path = 'printerestPin'
        element = {
          <PrinterestPin />
        }>
          <Route path="save" element={<Save />}/>
          <Route index element={<Primary />}/>
          <Route path="primary" element={<Primary />}/>
          

        </Route>
        <Route  path = 'youtubeDescription'
        element = {
          <YouTubeDescription />
        }>
          <Route path="save" element={<Save />}/>
          <Route index element={<Primary />}/>
          <Route path="primary" element={<Primary />}/>
          <Route path="headline" element={<Headline />}/>

        </Route>
        <Route  path = 'coldEmail'
        element = {
          <ColdEmail />
        }>
          <Route path="save" element={<Save />}/>
          <Route index element={<Primary />}/>
          <Route path="primary" element={<Primary />}/>
          <Route path="headline" element={<Headline />}/>

        </Route>
        <Route  path = 'promotionalEmail'
        element = {
          <PromotionalEmail />
        }>
          <Route path="save" element={<Save />}/>
          <Route index element={<Primary />}/>
          <Route path="primary" element={<Primary />}/>
          <Route path="headline" element={<Headline />}/>

        </Route>
        <Route  path = 'promotionalSms'
        element = {
          <PromotionalSMS/>
        }>
          <Route path="save" element={<Save />}/>
          <Route index element={<Primary />}/>
          <Route path="primary" element={<Primary />}/>
         

        </Route>
      
      </Routes>
    </div>
  );
}

export default App;
