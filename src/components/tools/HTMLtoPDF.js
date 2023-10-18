import '../tools/MergePDF.css';
function HTMLtoPDF() {
  return (
    <div className="tools-height">
      <div className="text-center pdf-text1">
        <h1 className="pdf-text2">HTML to PDF</h1>
        <p className="pdf-text3">
        Convert web pages to PDF documents with high accuracy
        </p>
        <div>
        <input type="file" id="fileInput" style={{ display: "none" }} accept=".html" />

        <a
          className="pdf-text4"
          id="pickfiles"
          href="javascript:;"
          title="Add more files"
          data-title="Add more files"
          onClick={()=> {
            document.getElementById('fileInput').click();
          }}
        >
          <span>Add HTML</span>
        </a>
          
       

       
        </div>
        <br />
        <br />

        
      </div>
    </div>
  );
}
export default HTMLtoPDF;