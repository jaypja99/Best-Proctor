import React from 'react';
import { Link } from 'react-router-dom';
import Maths from '../images/Maths.png'
import Computer from '../images/Computer.png'
import SS from '../images/SS.png'
import S from '../images/Science.png'
import Hindi from '../images/Hindi.png'
import English from '../images/English.png'
import './FileList.css'

function Subjects(props) {
    return (
        <>
            <div className="menuback">
            </div>
            <div className="catmaterial">
                <div className="cat">
                    <div className="catlayout cba">
                        <center><img className="image" src={Maths} /></center>
                    </div>
                    <div className="catlayout">
                        <center><img className="image" src={SS} /></center>
                    </div>
                    <div className="catlayout">
                        <center><img className="image" src={S} /></center>
                    </div>
                    <div className="catlayout">
                        <center><img className="image" src={Computer} /></center>
                    </div>
                    <div className="catlayout">
                        <center><img className="image" src={Hindi} /></center>
                    </div>
                    <div className="catlayout">
                        <center><img className="image" src={English} /></center>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Subjects;