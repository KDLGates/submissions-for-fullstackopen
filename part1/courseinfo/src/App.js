// From U. of Helsinki's Full Stack Open Exercises
// A React app that takes sample course data and prints their names and exercise counts

const Header = (props) => {
  console.log(`Header's props: ${props}`); // {course: {…}}
  console.log(`course's properties: ${props.course}`); // {name: "Half Stack application development", parts: Array(3)}
  console.log(`course's name: ${props.course.name}`); // Half Stack application development
  return <h1>{props.course.name}</h1>;
};
const Content = (props) => {
  console.log(`Content's props: ${props}`); // {parts: {…}}
  console.log(`parts's properties: ${props.parts}`); // {name: "Half Stack application development", parts: Array(3)}
  console.log(`parts's parts: ${props.parts.parts}`); // (3) [{…}, {…}, {…}]
  console.log(`parts's parts[0]: ${props.parts.parts[0]}`); // {name: "Fundamentals of React", exercises: 10}
  console.log(`parts's parts[0].name: ${props.parts.parts[0].name}`); // Fundamentals of React
  console.log(`parts's parts[0].exercises: ${props.parts.parts[0].exercises}`); // 10
  console.log(`parts's parts[1].name: ${props.parts.parts[1].name}`); // Using props to pass data
  console.log(`parts's parts[1].exercises: ${props.parts.parts[1].exercises}`); // 7
  console.log(`parts's parts[2].name: ${props.parts.parts[2].name}`); // State of a component
  console.log(`parts's parts[2].exercises: ${props.parts.parts[2].exercises}`); // 14
  return (
    <>
      <Part
        partLabel={props.parts.parts[0].name}
        exerciseCount={props.parts.parts[0].exercises}
      />
      <Part
        partLabel={props.parts.parts[1].name}
        exerciseCount={props.parts.parts[1].exercises}
      />
      <Part
        partLabel={props.parts.parts[2].name}
        exerciseCount={props.parts.parts[2].exercises}
      />
    </>
  );
};

const Part = (props) => {
  console.log(`Part's props: ${props}`); // {partLabel: "Fundamentals of React", exerciseCount: 10}
  return (
    <p>
      {props.partLabel} {props.exerciseCount}
    </p>
  );
};

const Total = (props) => {
  console.log(`Total's props: ${props}`); // {parts: {…}}
  console.log(`parts's properties: ${props.parts}`); // {name: "Half Stack application development", parts: Array(3)}
  return (
    <p>
      Number of exercises{" "}
      {props.parts.parts[0].exercises +
        props.parts.parts[1].exercises +
        props.parts.parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  );
};

export default App;
