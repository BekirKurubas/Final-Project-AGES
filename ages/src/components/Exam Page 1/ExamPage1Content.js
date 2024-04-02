import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const ExamPage1Content = ({ lv1Urls }) => {
  const [selectedOptions, setSelectedOptions] = useState(Array(5).fill(null)); // Başlangıçta seçilen seçenekler null
  const [dropdownOpen, setDropdownOpen] = useState(Array(5).fill(false)); // Dropdown açılıp kapanmasını sağlayacak state

  // Dropdown açılıp kapanmasını kontrol eden fonksiyonlar
  const toggleDropdown = (index) => {
    const updatedDropdownOpen = [...dropdownOpen];
    updatedDropdownOpen[index] = !updatedDropdownOpen[index];
    setDropdownOpen(updatedDropdownOpen);
  };

  // Seçilen seçeneği güncelleyen fonksiyon
  const handleOptionSelect = (option, index) => {
    if (!selectedOptions.includes(option)) {
      const updatedOptions = [...selectedOptions];
      updatedOptions[index] = option;
      setSelectedOptions(updatedOptions);
    }
  };

  // Dropdown menü içeriği için seçeneklerin harflerini oluştur
  const dropdownOptions = Array.from({ length: 10 }, (_, index) =>
    String.fromCharCode(97 + index)
  );

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {lv1Urls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Full Screen ${index}`}
            style={{ width: "50%", height: "auto", maxWidth: "50%" }}
          />
        ))}
      </div>
      <div
        className="d-flex p-5"
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="mr-3 mb-3"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginRight: "50px",
            }}
          >
            <h4 style={{ marginRight: "10px" }}>{[index + 1]})</h4>
            <Dropdown
              isOpen={dropdownOpen[index]}
              toggle={() => toggleDropdown(index)}
            >
              <DropdownToggle caret>Options</DropdownToggle>
              <DropdownMenu>
                {dropdownOptions.map((option, i) => (
                  <DropdownItem
                    key={option}
                    onClick={() => handleOptionSelect(option, index)}
                    disabled={selectedOptions[index] === option}
                  >
                    <span>
                      <b>Answer : {option}</b>
                    </span>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <span style={{ marginLeft: "10px" }}>
              <b>Answer : ( {selectedOptions[index]} )</b>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamPage1Content;
