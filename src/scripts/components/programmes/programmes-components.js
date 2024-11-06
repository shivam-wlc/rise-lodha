function renderProgrammesScreen() {
	return `
        <div class="programme-semi-circle-1">
          <div class="programme-content">
              <button>PROGRAMMES</button>
              <div>
                <p class="programme-title">SPARKING GROWTH AND DISCOVERY <br /> AT EVERY STAGE</p>
              </div>
              <p class="description-text">
                At Rising India School of Excellence Preschool, every stage is <br/>
                crafted to help children rise, learn and grow in a nurturing and <br/>
                dynamic environment.
              </p>
              <div class="programme-img-container">
              <div>
                <img
                  src="./src/assessts/programmes/icons/toddler.svg"
                  alt="Toddler"
                />
                <p>Toddler <br /> (Ages 1.5 years+) </p>
              </div>
              <div>
                <img
                  src="./src/assessts/programmes/icons/playgroup.svg"
                  alt="Play Group"
                />
                <p>Play-group <br /> (Ages 2 to 3 years) </p>
              </div>
              <div>
                <img
                  src="./src/assessts/programmes/icons/nursery.svg"
                  alt="Nursery"
                />
                <p>Nursery <br /> (Ages 3 to 4 years) </p>
              </div>
              <div>
                <img
                  src="./src/assessts/programmes/icons/jrkg.svg"
                  alt="Jr. KG"
                />
                <p> Jr. KG <br /> (Ages 4 to 5 years) </p>
              </div>
              <div>
                <img
                  src="./src/assessts/programmes/icons/srkg.svg"
                  alt="Sr. KG"
                />
                <p> Sr. KG <br /> (Ages 5 to 6 years) </p>
              </div>
            </div>
          </div>
        </div>`;
}
function renderToddlerScreen() {
	return `
        <div class="programme--semi-circle-2">
          <div class="programme-content">
            <button>TODDLER</button>
             <div>
                <p class="programme-title">TODDLER PROGRAMME (AGES 1.5 YEARS+)</p>
             </div>
             <p class="programme-title2">
                FIRST STEPS INTO THE WORLD OF WONDER.
             </p>
             
             <div>
                <img
                  class="kids-icon"
                  src="./src/assessts/programmes/icons/toddlerkid_1.png"
                  alt="Jr. KG"
                />
             </div>
             <div>
                <p class="description-text">
                    Our Toddler programme provides a nurturing and safe environment where young children take their first steps toward discovery.
                    With an emphasis on sensory exploration and emotional security, we focus on:
                    <br/>
                    Developing motor skills and coordination.
                    <br/>
                    Building early social interactions and communication through songs, play and movement.
                    <br/>
                    Creating a strong foundation for curiosity and independent exploration.
                </p>
             </div>
          </div>
        </div>`;
}
function renderPlaygroundScreen() {
	return `
        <div class="programme-semi-circle-3">
          <div class="programme-content">
            <button> PLAYGROUND </button>
            <div>
                <p class="programme-title"> PLAYGROUP (AGES 2 TO 3 YEARS)</p>
             </div>
             <p class="programme-title2">
                DISCOVERING THROUGH SENSORY PLAY.
             </p>
             <div>
                <img class="kids-icon" alt="Toddler Kid" src="./src/assessts/programmes/icons/playground_1.png"/>
             </div>

             <div>
                <p class="description-text">
                    In Playgroup, children continue their discovery journey by engaging in sensory-rich activities designed to foster curiosity and self-expression. At this stage, children are introduced to: Social skills development through play-based interaction. Sensory exploration using textures, colours and sounds. Early language skills through storytelling, rhymes and songs.
                </p>
             </div>
          </div>
        </div>`;
}
function renderNurseryScreen() {
	return `
        <div class="programme-semi-circle-4">
          <div class="programme-content">
            <button> NURSERY </button>
            <div>
                <p class="programme-title"> NURSERY (AGES 3 TO 4 YEARS)</p>
             </div>
             <p class="programme-title2">
                WHERE CURIOSITY TAKES ROOT.
             </p>
             <div>
                <img class="kids-icon" alt="Toddler Kid" src="./src/assessts/programmes/icons/nursureykid.png"/>
             </div>

             <div>
                <p class="description-text">
                    Nursery is where a child's natural curiosity blossoms. With hands-on, play-based learning experiences, we encourage children to dive deeper into the world around them. Here, the focus is on: Early literacy and numeracy skills through hands-on engaging activities. Problem-solving and critical thinking via creative exploration. Strengthening social skills through cooperative play and teamwork.
                </p>
             </div>
          </div>
        </div>`;
}
function renderJuniorKgScreen() {
	return `
        <div class="programme-semi-circle-5">
          <div class="programme-content">
             <button> JR. KG </button>
            <div>
                <p class="programme-title"> JUNIOR KINDERGARTEN (AGES 4 TO 5 YEARS)</p>
             </div>
             <p class="programme-title2">
                EXPLORING NEW POSSIBILITIES
             </p>
             <div>
                <img class="kids-icon" alt="Toddler Kid" src="./src/assessts/programmes/icons/jrkid.png"/>
             </div>

             <div>
                <p class="description-text">
                    In Jr. KG, children begin to apply the skills they have developed in more structured ways. We aim to ignite their imagination and expand their academic foundations. Key areas include: Introduction to early reading and writing. Basic math concept.
                </p>
             </div>
          </div>
        </div>
        `;
}
function renderSeniorKgScreen() {
	return `
        <div class="programme-semi-circle-6">
          <div class="programme-content">
            <button> SR. KG </button>
            <div>
                <p class="programme-title"> SENIOR KINDERGARTEN (AGES 5 TO 6 YEARS)</p>
             </div>
             <p class="programme-title2">
                RISING AS CONFIDENT LEARNERS.
             </p>
             <div>
                <img class="kids-icon" alt="Toddler Kid" src="./src/assessts/programmes/icons/srkgkid.png"/>
             </div>

             <div>
                <p class="description-text">
                    As children approach formal schooling, Sr. KG prepares them for academic success while fostering empathy, leadership and independence. We focus on: Strengthening reading, writing and problem-solving skills. Encouraging leadership and collaboration through group projects. Preparing children for the next stage of their academic journey by emphasising critical thinking and social-emotional development.
                </p>
             </div>
          </div>
        </div>`;
}

export {
	renderProgrammesScreen,
	renderToddlerScreen,
	renderPlaygroundScreen,
	renderNurseryScreen,
	renderJuniorKgScreen,
	renderSeniorKgScreen,
};
