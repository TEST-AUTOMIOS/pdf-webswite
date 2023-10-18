import '../tools/MergePDF.css';

function PDFtoPowerpoint (){
  return (
    <div className="tools-height">
      <div className="text-center pdf-text1">
        <h1 className="pdf-text2"> ConvertPDF to Powerpoint</h1>
        <p className="pdf-text3">
          Combine PDFs in the order you want with the easiest PDF merger
          available.
        </p>
        <div>
        <input type="file" id="fileInput" style={{ display: "none" }} accept=".pdf" />

        <a
          className="pdf-text4"
          id="pickfiles"
          href="javascript:;"
          title="Add more files"
          data-title="Add more files"
          onClick={() => {
            document.getElementById("fileInput").click();
          }}
        >
          <span>Select PDF files</span>
        </a>
        <div className='pdf-top'>
        
         
        <a
          id="gdrive_file_selector"
          className="pdf-text5"
          title="Select PDF from Google Drive"
          data-title="Select PDF from Google Drive"
          target='blank'
          href='https://drive.google.com'
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="16"
            viewBox="0 0 18 16"
          >
            <path
              fill="#FFF"
              d="M8.7375,5.80725 L3.021,15.70725 L0.12375,10.69725 L5.847,0.795 L8.7375,5.80725 Z M17.865,10.38225 L12.078,10.39125 L6.378,0.489 L12.1725,0.489 L17.865,10.38225 Z M17.87625,10.9875 L14.9865,15.9975 L3.5415,15.99 L6.43425,10.98375 L17.87625,10.9875 Z"
            ></path>
          </svg>
        </a>
&nbsp;
        <a
          id="dropbox_file_selector"
          class="pdf-text6"
          title="Select PDF from Dropbox"
          data-title="Select PDF from Dropbox"
          target='blank'
          href='https://www.dropbox.com'
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              fill="#FFF"
              d="M5.3475,0.7035 L0.096,4.125 L3.708,7.03725 L9.018,3.765 L5.3475,0.7035 Z M17.904,4.14 L12.66525,0.7275 L9.01875,3.7725 L14.29875,7.03875 L17.904,4.14 Z M9.01875,10.305 L12.66525,13.35975 L17.904,9.945 L14.2995,7.0395 L9.01875,10.305 Z M0.096,9.9585 L5.3475,13.35975 L9.01875,10.305 L3.70875,7.0455 L0.096,9.9585 Z M9.01875,10.9635 L5.35575,14.0385 L3.786,13.02 L3.786,14.16 L9.01875,17.30475 L14.271,14.15175 L14.271,13.0125 L12.693,14.031 L9.01875,10.9635 Z"
            ></path>
          </svg>
        </a>
</div> 
        </div>
        <br />
        <br />

        <p className="pdf-text7">or drop PDFs here</p>
      </div>
    </div>
  );
}
export default PDFtoPowerpoint;