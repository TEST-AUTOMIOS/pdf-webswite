import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import Tools from "./components/Tools";
import Login from "./components/Login";
import Block from "./components/Block";
import Block2 from "./components/Block2";
import Content from "./components/content";
import Footer from "./components/Footer";
import MergePDF from "./components/tools/MergePDF";
import SplitPDF from "./components/tools/SplitPdf";
import CompressPDF from "./components/tools/CompressPDF";
import PDFtoWord from "./components/tools/PDFtoWord";
import PDFtoPowerpoint from "./components/tools/PDFtoPowerpoint";
import PDFtoExcel from "./components/tools/PDFtoExcel";
import WordtoPDF from "./components/tools/WordtoPDF";
import PowerpointtoPDF from "./components/tools/PowerpointtoPDF";
import SignPDF from "./components/tools/SignPDF";
import Watermark from "./components/tools/Watermark";
import RotatePDF from "./components/tools/RotatePDF";
import HTMLtoPDF from "./components/tools/HTMLtoPDF";
import UnlockPDF from "./components/tools/UnlockPDF";
import ProtectPDF from "./components/tools/ProtectPDF";
import OrganizePDF from "./components/tools/OrganizePDF";
import PDFtoPDFA from "./components/tools/PDFtoPDFA";
import RepairPDF from "./components/tools/RepairPDF";
import Pagenumber from "./components/tools/Pagenumber";
import OCRtoPDF from "./components/tools/OCRtoPDF";
import ScantoPDF from "./components/tools/ScantoPDF";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateAccount from "./components/CreateAccount";
import ForgotPass from "./components/ForgotPass";
import Navbar2 from "./components/Navbar2";
import Excelpdf from "./components/tools/excelpdf";
import Editpdf from "./components/tools/editpdf";
import PDFtoJPG from "./components/tools/PDFtoJPG";
import JPGtoPDF from "./components/tools/JPGtoPDF";

function MainLayout() {
  return (
    <div>
      <Home />
      <Tools />
      <Block />
      <Block2/>
      <Content/>
      <Footer/>
    </div>
  );
}

function App() {
  return (
    <div>
      

      <BrowserRouter>
      <Navbar2 />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mergepdf" element={<MergePDF />} />
          <Route path="/splitpdf" element={<SplitPDF />} />
          <Route path="/compresspdf" element={<CompressPDF />} />
          <Route path="/pdftoword" element={<PDFtoWord />} />
          <Route path="/pdftopowerpoint" element={<PDFtoPowerpoint />} />
          <Route path="/pdftoexcel" element={<PDFtoExcel />} />
          <Route path="/wordtopdf" element={<WordtoPDF />} />
          <Route path="/powerpointtopdf" element={<PowerpointtoPDF />} />
          <Route path="/signpdf" element={<SignPDF />} />
          <Route path="/watermark" element={<Watermark />} />
          <Route path="/rotatepdf" element={<RotatePDF />} />
          <Route path="/rotatepdf" element={<RotatePDF />} />
          <Route path="/htmltopdf" element={<HTMLtoPDF />} />
          <Route path="/unlockpdf" element={<UnlockPDF />} />
          <Route path="/protectpdf" element={<ProtectPDF />} />
          <Route path="/organizepdf" element={<OrganizePDF />} />
          <Route path="/pdftopdfa" element={<PDFtoPDFA />} />
          <Route path="/repairpdf" element={<RepairPDF />} />
          <Route path="/pagenumber" element={<Pagenumber />} />
          <Route path="/ocrtopdf" element={<OCRtoPDF />} />
          <Route path="/scantopdf" element={<ScantoPDF />} />
          <Route path="/create-account" element={<CreateAccount/>}/>
          <Route path="/login/forgotpassowrd" element={<ForgotPass/>}/>
          <Route path="/excelpdf" element={<Excelpdf/>}/>
          <Route path="/editpdf" element={<Editpdf/>}/>
          <Route path="/PDFtoJPG" element={<PDFtoJPG/>}/>
          <Route path="/JPGtoPDF" element={<JPGtoPDF/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
