import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Editor from "./Pages/Home/editor";
import Ads from "./Pages/ADS/Ads";
import Document from "./Pages/ADS/document";
import AiWriter from "./Pages/AiWriter/AiWriter";
import TwitterAds from "./Pages/ADS/TwitterAds";
import FacebookAds from "./Pages/ADS/FacebookAds";
import GoogleAds from "./Pages/ADS/GoogleAds";
import Save from "./Pages/Shared/Save";
import Primary from "./Pages/Shared/Primary";
import Headline from "./Pages/Shared/Headline";

function App() {
  return (
    <div>
      <AiWriter />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/editor" element={<Editor />}></Route>
        <Route path="/document" element={<Document />}></Route>

        <Route path="/ads" element={<Ads />}></Route>
        <Route path="twitterads" element={<TwitterAds />}>
          <Route path="save" element={<Save />} />
          <Route index element={<Primary />} />
          <Route path="primary" element={<Primary />} />
          <Route path="headline" element={<Headline />} />
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

      </Routes>
    </div>
  );
}

export default App;
