import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";


function Form() {

    const [user, setUser] = useState({
        name: "",
        higher: null,
        secondary: null,
        deg: null,
        diploma: null,
        Fav_language: "",
        file : false,
    });

    const [records, setRecords] = useState([]);



    const handleInput = (e) => {
        const name = e.target.name;
        // console.log(name);
        const value = e.target.value;
        // console.log(value);

        setUser({ ...user, [name]: value });
    }
    const handleInputFile = (e) =>{
        // setSelectedFile(e.target.files[0]);
		setUser({...user,[e.target.name] : e.target.files});
        console.log(e.target.files)
        console.log(e.target.result)
    }

    const handleChecked = (e) => {
        const name = e.target.name;
        console.log(e.target)
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const handleCheck = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const handleSubmit = (e) => {

        e.preventDefault();

        const newRecord = { ...user, id: new Date().getTime().toString() };
        console.log(newRecord);

        setRecords([newRecord])
        // console.log(records)

        setUser({ name: "", Qualification: "", Fav_language: "", about: "", resume: "" });
    }



    return <div className="outer">
        <form onSubmit={handleSubmit}>
            <div className="block">
            <label>
                <b>Name:</b>
            </label><br />
            <input type="text"
                value={user.name}
                name="name"
                onChange={handleInput}
            />
            </div>
            <div className="block">
                <label ><b>Qualification</b></label>
                <div >
                    <input type="checkbox" name="higher" value="yes" onChange={handleChecked} />10<sup>th</sup><br />
                    <input type="checkbox" name="secondary" value="yes" onChange={handleChecked}/>12<sup>th</sup><br />
                    <input type="checkbox" name="deg" value="yes" onChange={handleChecked}/>Degree<br />
                    <input type="checkbox" name="diploma" value="yes" onChange={handleChecked} />Diploma<br />
                </div>
            </div>
            <div className="block">
                <label><b>Choose your favorite Web language:</b></label><br />

                <input type="radio" autoComplete="off" id="html" name="Fav_language" value="HTML" onChange={handleCheck} />
                <label htmlFor="html">HTML</label><br />
                <input type="radio" autoComplete="off" id="css" name="Fav_language" value="CSS" onChange={handleCheck} />
                <label htmlFor="css">CSS</label><br />
                <input type="radio" autoComplete="off" id="javascript" name="Fav_language" value="JavaScript" onChange={handleCheck} />
                <label htmlFor="javascript">JavaScript</label>
            </div>
            <div className="block">
                <label><b>Resume</b></label><br />
                <input type="file"name ="resume" onChange={handleInputFile} />
            </div>
            <button className="button" type="submit">Submit</button>
            <button className="button" type="reset">reset</button> 
            <button className="button">
                <a href="http://localhost:3000/footer">
                    Click Me 
                </a>
            </button>
            <button className="button">
                <Link to = "/footer">footer</Link>
            </button>
            <div className="Infoblock">
                {
                    records.map((curElem) => {
                        return (
                            <div className="innerInfo" key={curElem.id}>
                                <p>Name : {curElem.name}</p>
                                <p>Higher : {curElem.higher}</p>
                                <p>Secondary : {curElem.secondary}</p>
                                <p>Deg : {curElem.deg}</p>
                                <p>Diploma  : {curElem.diploma}</p>
                                <p>Fav_language : {curElem.Fav_language}</p>
                                {/* <p>Resume : {curElem.}</p> */}

                            </div>
                        )
                    })}

            </div>

        </form>
    </div>

}

export default Form;