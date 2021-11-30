import React, { useState, useEffect } from 'react';
import download from 'downloadjs';
import axios from 'axios';
import { API_URL } from '../utils/constants';
import './FileList.css'
import Maths from '../images/Maths.png'
import Computer from '../images/Computer.png'
import SS from '../images/SS.png'
import S from '../images/Science.png'
import Hindi from '../images/Hindi.png'
import English from '../images/English.png'


const FilesList = ({match}) => {
  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/getAllFiles`);
        setErrorMsg('');
        setFilesList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };

    getFilesList();
  }, []);

  const downloadFile = async (id, path, mimetype) => {
    try {
      const result = await axios.get(`${API_URL}/download/${id}`, {
        responseType: 'blob'
      });
      const split = path.split('/');
      const filename = split[split.length - 1];
      setErrorMsg('');
      return download(result.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg('Error while downloading file. Try again later');
      }
    }
  };

  return (
    <div className="files-container ">
      
      <div className="menuback">
        
      </div>
      <div className="catmaterial">
        <div className="cat">
            <div className="catlayout">
              <center><img className="image" src={Maths}/></center>
            </div>
            <div className="catlayout">
            <center><img className="image" src={SS}/></center>
            </div>
            <div className="catlayout">
            <center><img className="image" src={S}/></center>
            </div>
            <div className="catlayout">
            <center><img className="image" src={Computer}/></center>
            </div>
            <div className="catlayout">
            <center><img className="image" src={Hindi}/></center>
            </div>
            <div className="catlayout">
            <center><img className="image" src={English}/></center>
            </div>
      
        </div>
      </div>

      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <div className="background">
      <table className="files-table" >
        <thead>
          <tr className="files-table">
            <th className="files">Description</th>
            <th className="files">Download File</th>
          </tr>
        </thead>
        <tbody>
          {filesList.length > 0 ? (
            filesList.map(
              ({ _id, Subjects,description, Standard, file_path, file_mimetype }) => (
                <tr key={_id} className="files-table ">
                  
                  <td className="file-description files-table">{description}</td>
                  <td className="files-table">
                    <a
                      href="#/"
                      onClick={() =>
                        downloadFile(_id, file_path, file_mimetype)
                      }
                    >
                      Download
                    </a>
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={3} style={{ fontWeight: '300' }}>
                No files found. Please add some.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default FilesList;