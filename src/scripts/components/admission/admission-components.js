function renderAdmissionIntoScreen() {
  return `
        <div class="admission-semi-circle-1">
          <div class="admission-content">
              <button>ADMISSIONS</button>
              <div>
                <p class="title-level-1">YOUR CHILD'S JOURNEY TO <br/> BECOME A RISER BEGINS HERE</p>
              </div>
              <div class="admission-img-container">
              <div>
                <img
                  src="./src/assessts/admission/icons/process.svg"
                  alt="Admission Process"
                />
                <p>Admission Process</p>
              </div>
              <div>
                <img
                  src="./src/assessts/admission/icons/criteria.svg"
                  alt="Eligibility Criterion"
                />
                <p>Eligibility Criterion</p>
              </div>
              <div>
                <img
                  src="./src/assessts/admission/icons/fee-structure.svg"
                  alt="Fee Structure"
                />
                <p>Fee Structure</p>
              </div>
              <div>
                <img
                  src="./src/assessts/admission/icons/apply.svg"
                  alt="Apply For Admission"
                />
                <p>Apply For Admission</p>
              </div>
            </div>
          </div>
        </div>
      `;
}

function renderAdmissionProcessScreen1() {
  return `
        <div class="admission-semi-circle-2">
          <div class="admission-content">
            <button>ADMISSIONS PROCESS</button>
            <br />
            <p> We thank you for your interest in Rising India School of Excellence International Preschool.
            <br/><br />
             We are currently accepting applications to the following programmes:<br/>
             <strong> 15 months+: Toddler Programme (Nov 2024 Batch) </strong> <br/>
              <strong> 2 - 3 Years: Playgroup (Nov 2024 Batch) </strong> <br/>
              <strong> 3 - 4 Years: Nursery (June 2025 Batch) </strong> <br/>
              <strong> 4 - 5 Years: Jr. KG (June 2025 Batch) </strong> <br/>
              <strong> 5 - 6 Years: Sr. KG (June 2025 Batch) </strong> 
            </p>
            <br/>
            <img
                src="./src/assessts/admission/icons/arrow.svg"
                alt="Admission steps"
              />
            <p>
              Please refer to our simple 4-step Admission Process:<br/><br/>
              <strong>1. Submit Online Application</strong> <br/>
              Begin the admission process by completing our online inquiry form <br/>
              and submitting the application fee of Rs. 1500/-.
            </p>
          </div>
        </div>
      `;
}
function renderAdmissionProcessScreen2() {
  return `
        <div class="admission-semi-circle-3">
          <div class="admission-content">
          </br></br></br>
            <p>
              <strong>2. Campus Tour </strong> <br/>
              We invite both parents and children to visit our school for an exclusive, personalised tour of our state-of-the-art campus.
              During this visit, you will explore our thoughtfully designed learning environments, including classrooms, outdoor play areas,
              and specialised zones like STEM, Pretend & Play, Ateliers, Music, Library, Sensory Walks and Pottery Zones. We will also take
              you through our school’s philosophy and curriculum in detail.
            </p>
            <p>
              <strong> 3. Child Observation & Parent Interaction </strong> <br/>
              Following the tour, we will conduct a child observation session, along with a personal interaction between parents and the school management. 
            </p>
            <p>
              <strong> 4. Admission Decision </strong><br/>
              The final admission decision will be communicated via email and phone. Once the required documents and fees are submitted, your child’s admission will be officially confirmed
            </p>
          </div>
        </div>
      `;
}

function renderAdmissionFeeStructureScreen() {
  return `
        <div class="admission-semi-circle-4">
          <div class="admission-content">
            <button>FEE STRUCTURE</button>
            <br/>
            <div id="title-container">
              <p class="small-text"> Our fee structure is available only on request.</p>
              <p class="large-text"> PLEASE FILL IN <br/> THE FORM BELOW </p>
              <p class="small-text">
                to request information on our fee structure <br/>
                or book an appointment at the school.
              </p>
            </div>
            <div class="letter-circle">
              <p>
                REGISTER TO MEET THE EARLY YEARS EXPERTS.
              </p>
            </div>
          </div>
        </div>
      `;
}

// function renderAdmissionRegistrationScreen1() {
// 	const width = window.innerWidth;
// 	return `
//         <div class="admission-semi-circle-5">
//           <div class="admission-content">
//               <div class="registration-form-container-1">
//                    <div class="input-container">
//                       <label for="firstName"> Child First Name: </label>
//                       <input type="text" name="first-name"/>
//                    </div>
//                    <div class="input-container">
//                       <label for="lastName"> Child Last Name: </label>
//                       <input type="text" name="last-name"/>
//                    </div>
//                    <div class="input-container">
//                       <label for="dob"> Child DOB: </label>
//                       <input type="date" name="dob"/>
//                    </div>
//                     <div class="input-container">
//                       <label for="father's name"> Father's Name: </label>
//                       <input type="text" name="father-name"/>
//                    </div>
//                    <div class="input-container">
//                       <label for="mother's name"> Mother's Name: </label>
//                       <input type="text" name="mother-name"/>
//                    </div>
//                    <div class="input-container">
//                       <label for="mobile"> Mobile Number: </label>
//                       <input type="text" name="mobile"/>
//                    </div>
//                    <div class="input-container">
//                       <label for="email"> Email ID: </label>
//                       <input type="email" name="email"/>
//                    </div>
//                     <div class="input-container">
//                       <label for="program"> Select Programme: </label>
//                       <div class="radio-options-container">
//                         <div class="radio-option">
//                           <input type="radio" name="program" value="playgroup"/>
//                           <label for="playgroup"> Play Group (16-30 months) <br/> November 2024 Batch </label>
//                         </div>
//                         <div class="radio-option">
//                           <input type="radio" name="program" value="nursery"/>
//                           <label for="nursery"> Nursery (2.5-3.5 years) <br/> November 2024 Batch </label>
//                         </div>
//                         <div class="radio-option" >
//                           <input type="radio" name="program" value="jrkg"/>
//                           <label for="jrkg"> Jr.KG (3.5-4.5 years) <br/> June 2025 Batch </label>
//                         </div>
//                         <div class="radio-option">
//                           <input type="radio" name="program" value="srkg"/>
//                           <label for="srkg"> Sr.KG (4.5-5.5 years) <br/> June 2025 Batch </label>
//                         </div>
//                       </div>
//                    </div>
//                    <div class="button-container">
//                       <button>Cancel</button>
//                       <button>Submit</button>
//                    </div>
//               </div>
//           </div>
//         </div>
//       `;
// }

function renderAdmissionRegistrationScreen1() {
  return ` 
      <div class="preschool-tour-semi-circle-1">
   
        <!-- form  -->
       <div class="preschool-tour-form">
        <form id="booking-form">
          <p>Book a Preschool Tour</p>

          <div class="form-field">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
          </div>
          
          <div class="form-field">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
        </div>

          <div class="form-field">
          <label for="mobile">Mobile:</label>
          <input type="tel" id="mobile" name="mobile" required>
       </div>

          <div class="form-field">
          <label for="childname">Child's Name:</label>
          <input type="text" id="childname" name="childname" required>
       </div>

       <div class="form-field">
          <label for="childage">Child's Age:</label>
          <div class="age-inputs">
            <input type="number" id="childage-year" name="childage-year" placeholder="Year" required min="0">
            <input type="number" id="childage-month" name="childage-month" placeholder="Month" required min="0" max="11">
          </div>
        </div>
    
        <div class="form-field">
          <label for="city">City:</label>
          <input type="text" id="city" name="city" required>
        </div>

        <div class="form-field" id="submit-button">
          <button type="submit" >Book</button>
          </div>
        </form>
       </div>
    
    </div>`;
}
export {
  renderAdmissionIntoScreen,
  renderAdmissionFeeStructureScreen,
  renderAdmissionProcessScreen1,
  renderAdmissionProcessScreen2,
  renderAdmissionRegistrationScreen1,
  // renderAdmissionRegistrationScreen2,
};
