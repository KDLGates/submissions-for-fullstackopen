const Header = (props) => {
  return <h1>{props.courseName}</h1>;
};
const Content = (props) => {
  return (
    <>
      <Part partLabel={props.part1} exerciseCount={props.count1} />
      <Part partLabel={props.part2} exerciseCount={props.count2} />
      <Part partLabel={props.part3} exerciseCount={props.count3} />
    </>
  );
};
const Part = (props) => {
  return (
    <p>
      {props.partLabel} {props.exerciseCount}
    </p>
  );
};
const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header courseName={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        count1={exercises1}
        count2={exercises2}
        count3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App;
