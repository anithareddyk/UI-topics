// Components let you split the UI into independent, reusable pieces, 
// and think about each piece in isolation.

// Conceptually, components are like JavaScript functions. 
// They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.
const element = <Welcome name="Anitha" />;
// When React sees an element representing a user-defined component, 
// it passes JSX attributes to this component as a single object. We call this object "props".

function Comment(props) {
  return (
    <div className="UI">
      <div className="Training">
        
        <div className="UserInfo">
          {props.author.name}
        </div>
      </div>
      <div className="UI-text">
        {props.text}
      </div>
      <div className="UI-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

// Props are Read-Only:
// All React components must act like pure functions with respect to their props.

function Welcome(props) {
  return <h1>{props.name}</h1>;
}
