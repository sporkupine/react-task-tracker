import Button from "./Button";

const onClick = () => {
  console.log("Click");
}

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
  title: "Task Tracker"
}

export default Header