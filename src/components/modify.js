import React, { useState, useEffect } from "react";
import axios from "axios";
import getSpecialisations from "../services/service.js";


const Modify = ({specialisation,setSpecialisations,setIsOpen})=>{
    const urlBase = "https://f738-103-156-19-229.in.ngrok.io/api/v1";

  const config = {
    headers: {
      "ngrok-skip-browser-warning": "true",
    },
  };
  const [shouldEdit, setEdit] = useState(specialisation.id);
  const [available_timings, setAvailible_timings] = useState(specialisation.available_timings);
  const [city, setCity] = useState(specialisation.city);
  const [description, setDescription] = useState(specialisation.description);
  const [dob, setDob] = useState(specialisation.dob);
  const [fname, setFname] = useState(specialisation.fname);
  const [lname, setLname] = useState(specialisation.lname);
  const [photo_url, setPhoto_url] = useState(specialisation.photo_url);
  const [qualification, setQualification] = useState(specialisation.qualification);
  const [rating, setRating] = useState(specialisation.rating);
  const [sex, setSex] = useState(specialisation.sex);
  const [specialization, setSpecialization] = useState(specialisation.specialization);
  const [state, setState] = useState(specialisation.state);
  const [clinic_address, setClinic_address] = useState(specialisation.clinic_address);
  const [id, setId] = useState(specialisation.id);

  const handleUpdate = () => {
    const data = {
      available_timings,
      city,
      clinic_address,
      description,
      dob,
      fname,
      id,
      lname,
      online_status: false,
      photo_url,
      qualification,
      rating,
      sex,
      specialization,
      state,
    };
    if (
      !(
        fname &&
        lname &&
        sex &&
        qualification &&
        specialization &&
        clinic_address &&
        city &&
        state &&
        description &&
        rating &&
        available_timings &&
        dob
      )
    ) {
      alert("All Fields are Required");
    } else {

    axios
        .post(`${urlBase}/doctor/updateDoctor`, data, config)
        .then((json) => {
          setEdit(-1);
        })
        .then(() => {
          getSpecialisations(setSpecialisations);
                  })
        .catch((error) => {
          alert("Error While Updating");
          console.log(error);
        });
      }
  };

  useEffect(() => {
    getSpecialisations(setSpecialisations);
  }, []);

return(
    <div>
    <div className="bd-example">
     <div className="modal" id="exampleModalLive"  tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
     <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
       <div className="modal-content" style={{backgroundColor:"rgb(250, 250, 250)"}}>
       <div className="modal-header">
           <h5 className="modal-title" style={{color:"#17a2b8", paddingLeft:'300px', fontWeight:'bold'}} id="exampleModalCenterTitle">UPDATE DOCTOR</h5>
           <button type="button" className="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">&times;</span>
           </button>
       </div>
       <div className="modal-body" style={{backgroundColor:"rgb(250, 250, 250)"}}>
       <tbody>
       <tr style={{backgroundColor:"rgb(250, 250, 250)"}}>
         <td style={{paddingLeft:'30px'}}>
         <h5 className="modal-title mod-form" id="exampleModalCenterTitle">First Name</h5>
           <input className="mod-form-input"
             type="text"
             required
             value={fname}
             placeholder="First Name"
             onChange={(e) => setFname(e.target.value)}
           />
         </td>
         <td style={{paddingLeft:'100px'}}>
         <h5 className="modal-title mod-form" id="exampleModalCenterTitle">Last Name</h5>
           <input className="mod-form-input" 
             type="text"
             required
             value={lname}
             placeholder="Second Name"
             onChange={(e) => setLname(e.target.value)}
           />
           </td>
         </tr>
         <tr style={{backgroundColor:"rgb(250, 250, 250)"}}>
         <td style={{paddingLeft:'30px'}}>
         <h5 className="modal-title mod-form" id="exampleModalCenterTitle">Sex</h5>
         <select name="sex" id="sex" className="mod-form-input"
         required
         value={sex}
         placeholder="Sex"
         onChange={(e) => {setSex(e.target.value); console.log(e.target.value)}}>
             <option selected disabled hidden value=''>Select option</option>
             <option value="M">Male</option>
             <option value="F">Female</option>
             <option value="O">Others</option>
           </select>
         </td>
         <td style={{paddingLeft:'100px'}}>
         <h5 className="modal-title mod-form" id="exampleModalCenterTitle">Available Timings</h5>
           <input className="mod-form-input"
             type="text"
             required
             value={available_timings}
             placeholder="Available Timings"
             onChange={(e) => setAvailible_timings(e.target.value)}
           />
         </td>
         </tr>
       <tr style={{backgroundColor:"rgb(250, 250, 250)"}}>
         <td style={{paddingLeft:'30px'}}>
         <h5 className="modal-title add-form" id="exampleModalCenterTitle">Upload Photo</h5>
           <input className="add-form-input"
             type="file"
             value={""}
             placeholder="Photo URL"
             onChange={(e) => setPhoto_url(e.target.value)}
           />
         </td>
         <td style={{paddingLeft:'100px'}}>
         <h5 className="modal-title add-form" id="exampleModalCenterTitle">Qualification</h5>
           <input className="add-form-input"
             type="text"
             required
             value={qualification}
             placeholder="Qualifications"
             onChange={(e) => setQualification(e.target.value)}
           />
         </td>
         </tr>
         <tr style={{backgroundColor:"rgb(250, 250, 250)"}}>
         <td style={{paddingLeft:'30px'}}>
           {/* <label htmlFor="Specialization">&nbsp;Specialization:&nbsp;&nbsp;</label> */}
           <h5 className="modal-title add-form" id="exampleModalCenterTitle">Specialization</h5>
           <select name="specialization" id="specialization" className="add-form-input"
             required
             value={specialization}
             placeholder="Specialization"
             onChange={(e) => {setSpecialization(e.target.value); console.log(specialization)}}>
             <option selected disabled hidden value=''>Select option</option>
             <option value="General">General</option>
             <option value="Pediatrician">Pediatrician</option>
             <option value="Dermatologists">Dermatologists</option>
             <option value="Psychiatrists">Psychiatrists</option>
             <option value="Urologists">Urologists</option>
             <option value="ChildSpecialist">ChildSpecialist</option>
             <option value="Cardiologist">Cardiologist</option>
             <option value="Neurologist">Neurologist</option>
             <option value="Ayurveda">Ayurveda</option>
           </select>
         </td>
         <td style={{paddingLeft:'100px'}}>
         <h5 className="modal-title add-form" id="exampleModalCenterTitle">Address</h5>
           <input className="add-form-input"
             type="text"
             required
             value={clinic_address}
             placeholder="Clinic Address"
             onChange={(e) => setClinic_address(e.target.value)}
           />
         </td>
       </tr>
       <tr style={{backgroundColor:"rgb(250, 250, 250)"}}>
         <td style={{paddingLeft:'30px'}}>
         <h5 className="modal-title add-form" id="exampleModalCenterTitle">City</h5>
           <input className="add-form-input"
             type="text"
             required
             value={city}
             placeholder="City"
            onChange={(e) => setCity(e.target.value)}
           />
         </td>
         <td style={{paddingLeft:'100px'}}>
         <h5 className="modal-title add-form" id="exampleModalCenterTitle">State</h5>
           <input className="add-form-input"
             type="text"
             required
             value={state}
             placeholder="State"
             onChange={(e) => setState(e.target.value)}
           />
         </td>
         </tr>
         <tr style={{backgroundColor:"rgb(250, 250, 250)"}}>
         <td style={{paddingLeft:'30px'}}>
         <h5 className="modal-title add-form" id="exampleModalCenterTitle">Description</h5>
           <input className="add-form-input"
             type="text"
             required
             value={description}
             placeholder="Description"
             onChange={(e) => setDescription(e.target.value)}
           />
         </td>
         <td style={{paddingLeft:'100px'}}>
           <h5 className="modal-title add-form" id="exampleModalCenterTitle">Rating</h5>
         <select name="Rating" id="Rating" className="add-form-input"
             required
             value={rating}
             placeholder="Rating"
             onChange={(e) => {console.log(rating);setRating(e.target.value)}}>
             <option selected disabled hidden value=''>Select option</option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
           </select>
         </td>
       </tr>
       <tr style={{backgroundColor:"rgb(250, 250, 250)"}}>
         <td style={{paddingLeft:'30px'}}>
         <h5 className="modal-title add-form" id="exampleModalCenterTitle">DOB</h5>
           <input className="add-form-input"
             type="date"
             required
             value={dob}
             placeholder="DOB"
             onChange={(e) => {console.log(dob); setDob(e.target.value)}}
           />
         </td>
         <td style={{paddingLeft:'100px'}}>
         <h5 className="modal-title add-form" id="exampleModalCenterTitle">Online Status</h5>
           <input className="add-form-input"
             type="text"
             required
             value='🔴 Offline'
             placeholder="Offline"
             disabled
           />
         </td>
         </tr>
         <tr>
       </tr>
       </tbody>
       </div>
       <div className="modal-footer">
           <button type="button" className="btn btn-outline-secondary"  style={{fontWeight:'bold', borderRadius:'7px'}} data-dismiss="modal"
             >CLOSE</button>
           <button type="button" className="btn btn-outline-primary" data-dismiss="modal"  style={{fontWeight:'bold', borderRadius:'7px'}} onClick={(e) => handleUpdate(e)}>SUBMIT</button>
       </div>
       </div>
   </div>
   </div>
  </div>
</div>
)
}

export default Modify

