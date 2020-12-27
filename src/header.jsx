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
            Find Area
          </li>
          <li onClick={() => handleClick("hypotenuse")} className="nav-item">
            Calculate Hypotenuse
          </li>
          <li onClick={() => handleClick("sum")} className="nav-item">
            Check if Triangle
          </li>
          <li onClick={() => handleClick("third")} className="nav-item">
            Find third Angle
          </li>
          <li onClick={() => handleClick("angle")} className="nav-item">
            check if obtuse right acute
          </li>
          <li onClick={() => handleClick("side")} className="nav-item">
            Check if Equilateral isoceles scalene
          </li>
        </ul>
      </nav>
    </header>
  );
}
