import React from 'react';
import { Link } from 'react-router-dom';
import Maths from '../images/Shoes.png'
import Computer from '../images/Books.png'
import SS from '../images/Bags.png'
import S from '../images/Stationery.png'
import Hindi from '../images/Dress.png'
import English from '../images/Sports.png'
import './FileList.css'

function Subjects(props) {
    return (
        <>
            <div className="menuback">
            </div>
            <div className="catmaterial">
                <div className="cat">
                    <div className="catlayout ">
                        <center><img className="image" src={Maths} /></center>
                    </div>
                    <div className="catlayout ">
                        <center><img className="image" src={SS} /></center>
                    </div>
                    <div className="catlayout cba">
                        <center><img className="image" src={S} /></center>
                    </div>
                    <div className="catlayout ">
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