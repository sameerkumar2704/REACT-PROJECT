import React from "react";
import LandingSection from "./components/LandingSection";
import DownloadUi from "./components/downloadui";
import FeactureSection from "./components/featureaction";
import ReasonForUsingAppBise from "./components/reason";
import SlideView from "./components/slideview";
import VideoShow from "./components/videoshow";
import DownloadAndUpdate from "./components/download_update";
import Support from "./components/support";
import ScrollToTop from "./components/scrool_top";
import EndingComponent from "./components/endingSection";

export default function App() {
  return (
    <>
      <LandingSection />
      <DownloadUi />
      <FeactureSection />
      <ReasonForUsingAppBise />
      <SlideView />
      <VideoShow />
      <DownloadAndUpdate />
      <Support />
      <EndingComponent />
      <ScrollToTop />
    </>
  );
}
