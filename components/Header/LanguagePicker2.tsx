import { useState } from "react";
import Dropdown from "./Dropdown";

const LanguagePicker: React.FC = () => {
  const [isShowLanguage, setIsShowLanguage] = useState(false);

  const toggleDropdown = () => {
    setIsShowLanguage((prev) => !prev);
  };

  return (
    <div id="language-picker" className="header-dropdown relative">
      <Dropdown isOpen={isShowLanguage} toggleDropdown={toggleDropdown} />
    </div>
  );
};

export default LanguagePicker;
