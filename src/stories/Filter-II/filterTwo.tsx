import Dropdown from "./dropdown";
import React from "react";
import styling from "./filterTwo.module.css";

interface TalentProps {
  onClick?: () => void;

  style?: object;

  size?: "small" | "medium" | "large";

  imgLink?: string;
}
export const FilterTwo = ({
  style,
  imgLink,
  size = "medium",
  onClick,
}: TalentProps) => {
  return (
    <aside className={styling.container} style={style}>
      <div className={styling.filter_ctn}>
        <div className={styling.filter}>
          <img
            src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727734636/lets-icons_filter_zqrmra.svg"
            alt="filter logo"
          />
          Filter
        </div>
        <div className="logout">
          <img
            src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727734636/logout_wxobhc.svg"
            alt="logout"
          />
        </div>
      </div>
      <div className={styling.dummy}>
        <div className={styling.clear}>
          <span>Clear Filter</span>
          <img
            src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727734636/add_w8y40i.svg"
            alt="cancel logo"
          />
        </div>
      </div>
      <div>
        <Dropdown
          options={[
            "Power Efficiency Optimization",
            "SMPS (Switched-Mode Power Supply) Design.",
            "PCB Design (Altium, Eagle, KiCad).",
            "Power Management.",
            "Circuit Design",
            "Schematic Capture",
          ]}
          onSelect={function (option: string): void {
            throw new Error("Function not implemented.");
          }}
          headings={"Hardware"}
          style={{ padding: "20px 0px" }}
        />
        <Dropdown
          options={[]}
          onSelect={function (option: string): void {
            throw new Error("Function not implemented.");
          }}
          headings={"Simulation"}
          style={{ padding: "20px 0px" }}
        />
        <Dropdown
          options={[]}
          onSelect={function (option: string): void {
            throw new Error("Function not implemented.");
          }}
          headings={"Internet of Things (IOT)"}
          style={{ padding: "20px 0px" }}
        />

        <Dropdown
          options={[]}
          onSelect={function (option: string): void {
            throw new Error("Function not implemented.");
          }}
          headings={"Robotic/Embedded"}
          style={{ padding: "20px 0px" }}
        />

        <Dropdown
          options={[
            "General electronics product/project",
            "Drone Development",
            "Underwater Robotics",
            "Autonomous Navigation",
            "OpenCV",
            "Image Processing",
          ]}
          onSelect={function (option: string): void {
            throw new Error("Function not implemented.");
          }}
          headings={"Robotics/Embedded"}
          style={{ padding: "20px 0px" }}
        />
        <Dropdown
          options={[]}
          onSelect={function (option: string): void {
            throw new Error("Function not implemented.");
          }}
          headings={"Robotics/Embedded"}
          style={{ padding: "20px 0px" }}
        />
        <Dropdown
          options={[]}
          onSelect={function (option: string): void {
            throw new Error("Function not implemented.");
          }}
          headings={"Consultancy Services"}
          style={{ padding: "20px 0px" }}
        />
        <Dropdown
          options={[]}
          onSelect={function (option: string): void {
            throw new Error("Function not implemented.");
          }}
          headings={"Consultancy Services"}
          style={{ padding: "20px 0px" }}
        />
      </div>
    </aside>
  );
};

export default FilterTwo;
