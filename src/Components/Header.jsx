import Button from "./Button";

const Header = () => {
  return (
    <div className="container">
        <div className="head">
        <h1 className="top">Shop In Style &#128516;</h1>
        </div>
        <div className="header">
      <div className="left">
        <h1>Grab upto 50% off on selected Item</h1>
        <Button />
      </div>
      <div className="right">
        <h3>
          You've got the playlist sorted , beauty prep is well underway, now all
          that is left to do is to decide which of your going out outfits to
          choose from
        </h3>
        <a href="https://www.facebook.com/">Choose outfit&uarr;</a>
      </div>
      </div>
    </div>
  );
};

export default Header;
