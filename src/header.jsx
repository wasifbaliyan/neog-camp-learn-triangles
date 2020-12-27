import "./header.css";
export default function Header({ setRoute }) {
  const handleClick = (item) => {
    setRoute(item);
  };
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li onClick={() => handleClick("area")} className="nav-item">
            AREA
          </li>
          <li onClick={() => handleClick("hypotenuse")} className="nav-item">
            HYPOTENUSE
          </li>
          <li onClick={() => handleClick("sum")} className="nav-item">
            SUM
          </li>
          <li onClick={() => handleClick("third")} className="nav-item">
            FIND ANGLE
          </li>
          <li onClick={() => handleClick("angle")} className="nav-item">
            check obtuse/right/acute
          </li>
          <li onClick={() => handleClick("side")} className="nav-item">
            Check Equilateral/isoceles/scalene
          </li>
        </ul>
      </nav>
    </header>
  );
}