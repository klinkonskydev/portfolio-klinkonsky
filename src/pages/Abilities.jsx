import '../styles/abilities.scss'

export function Abilities() {
  return (
    <div className="skills-section">

      <div>
        <h1>My skills</h1>
        <p>front end</p>
      </div>

      <section className="skills opened" id="skills">

        <div className="card">

          <div className="abilitie">
            <div className="skill">
              <p>HTML</p>
              <p>100%</p>
            </div>

            <div className="porcentage">
              <div className="porcentage-HTML"></div>
            </div>
          </div>

          <div className="abilitie">
            <div className="skill">
              <p>CSS</p>
              <p>86%</p>
            </div>

            <div className="porcentage">
              <div className="porcentage-CSS"></div>
            </div>
          </div>

          <div className="abilitie">
            <div className="skill">
              <p>SCSS</p>
              <p>79%</p>
            </div>

            <div className="porcentage">
              <div className="porcentage-SCSS"></div>
            </div>
          </div>

          <div className="abilitie">
            <div className="skill">
              <p>JavaScript</p>
              <p>72%</p>
            </div>

            <div className="porcentage">
              <div className="porcentage-JS"></div>
            </div>
          </div>
        </div>

        <div className="card">

          <div className="abilitie">
            <div className="skill">
              <p>Node JS</p>
              <p>52%</p>
            </div>

            <div className="porcentage">
              <div className="porcentage-node"></div>
            </div>
          </div>

          <div className="abilitie">
            <div className="skill">
              <p>React JS</p>
              <p>32%</p>
            </div>

            <div className="porcentage">
              <div className="porcentage-REACT"></div>
            </div>
          </div>

          <div className="abilitie">

            <div className="skill">
              <p>Typescript</p>
              <p>22%</p>
            </div>

            <div className="porcentage">
              <div className="porcentage-typescript"></div>
            </div>
          </div>

          <div className="abilitie">
            <div className="skill">
              <p>React Mobile</p>
              <p>2%</p>
            </div>

            <div className="porcentage">
              <div className="porcentage-REACTMB"></div>
            </div>
          </div>
          
        </div>
      </section>


    </div>
  );
}