import CardsOne from "../../stories/Cards/Card-I";
import FilterTwo from "../../stories/Filter-II/filterTwo";
import Footer from "../../Components/LandingPage/Footer";
import React from "react";
import Search from "../../Components/LandingPage/Search/search";
import styling from "./searchResults.module.css";

const SearchResults = () => {
  return (
    <>
      <Search
        onSearch={function (query: string): void {
          throw new Error("Function not implemented.");
        }}
      />

      <div className={styling.overall}>
        <div className={styling.container}>
          <div className={styling.filter}>
            <FilterTwo />
          </div>
          <div className={styling.content}>
            <div className={styling.list}>
              <button className={styling.nav_btn}>
                <img
                  src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1729008893/Vector_2x_cepive.svg"
                  alt=""
                />
              </button>
              <p>Embedded System</p>
              <p>Arduino</p>
              <p>Firmware</p>
              <p>Electronic Design</p>
              <p>Circuit design</p>
              <p>Hardware testing</p>
            </div>

            <div className={styling.text}>
              <p>
                Search Result for <span>Circuit Designer</span>
              </p>
              <hr /> <p className={styling.number}>Showing 227 results</p>
            </div>
            <div className={styling.all_cards}>
              <CardsOne
                profileImage={
                  "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611446/Group_16_Copy_2_n0jltw.svg"
                }
                companyName={"Recruiter/Company's name"}
                timeFrame={"Part Time"}
                mainSkill={"Circuit Design"}
                amount={"50-55k"}
                time={"30 min ago"}
                skills={"Skills"}
                skillWidth="74px"
                skillSet={["JavaScript", "3D Modelling"]}
                hidePost={{
                  style: { display: "none" },
                }}
                hideImage={{
                  style: { display: "none" },
                }}
                text={
                  "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt...."
                }
              />
              <CardsOne
                profileImage={
                  "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611446/Group_16_Copy_2_n0jltw.svg"
                }
                companyName={"Recruiter/Company's name"}
                timeFrame={"Part Time"}
                mainSkill={"Circuit Design"}
                amount={"50-55k"}
                time={"30 min ago"}
                skills={"Skills"}
                skillWidth="74px"
                skillSet={["JavaScript", "3D Modelling"]}
                hidePost={{
                  style: { display: "none" },
                }}
                hideImage={{
                  style: { display: "none" },
                }}
                text={
                  "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt...."
                }
              />
              <CardsOne
                profileImage={
                  "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611446/Group_16_Copy_2_n0jltw.svg"
                }
                companyName={"Recruiter/Company's name"}
                timeFrame={"Part Time"}
                mainSkill={"Circuit Design"}
                amount={"50-55k"}
                time={"30 min ago"}
                skills={"Skills"}
                skillWidth="74px"
                skillSet={["JavaScript", "3D Modelling"]}
                hidePost={{
                  style: { display: "none" },
                }}
                hideImage={{
                  style: { display: "none" },
                }}
                text={
                  "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt...."
                }
              />
              <CardsOne
                profileImage={
                  "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611446/Group_16_Copy_2_n0jltw.svg"
                }
                companyName={"Recruiter/Company's name"}
                timeFrame={"Part Time"}
                mainSkill={"Circuit Design"}
                amount={"50-55k"}
                time={"30 min ago"}
                skills={"Skills"}
                skillWidth="74px"
                skillSet={["JavaScript", "3D Modelling"]}
                hidePost={{
                  style: { display: "none" },
                }}
                hideImage={{
                  style: { display: "none" },
                }}
                text={
                  "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt...."
                }
              />
              <CardsOne
                profileImage={
                  "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611446/Group_16_Copy_2_n0jltw.svg"
                }
                companyName={"Recruiter/Company's name"}
                timeFrame={"Part Time"}
                mainSkill={"Circuit Design"}
                amount={"50-55k"}
                time={"30 min ago"}
                skills={"Skills"}
                skillWidth="74px"
                skillSet={["JavaScript", "3D Modelling"]}
                hidePost={{
                  style: { display: "none" },
                }}
                hideImage={{
                  style: { display: "none" },
                }}
                text={
                  "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt...."
                }
              />
              <CardsOne
                profileImage={
                  "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611446/Group_16_Copy_2_n0jltw.svg"
                }
                companyName={"Recruiter/Company's name"}
                timeFrame={"Part Time"}
                mainSkill={"Circuit Design"}
                amount={"50-55k"}
                time={"30 min ago"}
                skills={"Skills"}
                skillWidth="74px"
                skillSet={["JavaScript", "3D Modelling"]}
                hidePost={{
                  style: { display: "none" },
                }}
                hideImage={{
                  style: { display: "none" },
                }}
                text={
                  "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt...."
                }
              />
              <CardsOne
                profileImage={
                  "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611446/Group_16_Copy_2_n0jltw.svg"
                }
                companyName={"Recruiter/Company's name"}
                timeFrame={"Part Time"}
                mainSkill={"Circuit Design"}
                amount={"50-55k"}
                time={"30 min ago"}
                skills={"Skills"}
                skillWidth="74px"
                skillSet={["JavaScript", "3D Modelling"]}
                hidePost={{
                  style: { display: "none" },
                }}
                hideImage={{
                  style: { display: "none" },
                }}
                text={
                  "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt...."
                }
              />
              <CardsOne
                profileImage={
                  "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611446/Group_16_Copy_2_n0jltw.svg"
                }
                companyName={"Recruiter/Company's name"}
                timeFrame={"Part Time"}
                mainSkill={"Circuit Design"}
                amount={"50-55k"}
                time={"30 min ago"}
                skills={"Skills"}
                skillWidth="74px"
                skillSet={["JavaScript", "3D Modelling"]}
                hidePost={{
                  style: { display: "none" },
                }}
                hideImage={{
                  style: { display: "none" },
                }}
                text={
                  "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt...."
                }
              />
              <CardsOne
                profileImage={
                  "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611446/Group_16_Copy_2_n0jltw.svg"
                }
                companyName={"Recruiter/Company's name"}
                timeFrame={"Part Time"}
                mainSkill={"Circuit Design"}
                amount={"50-55k"}
                time={"30 min ago"}
                skills={"Skills"}
                skillWidth="74px"
                skillSet={["JavaScript", "3D Modelling"]}
                hidePost={{
                  style: { display: "none" },
                }}
                hideImage={{
                  style: { display: "none" },
                }}
                text={
                  "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt...."
                }
              />
              <CardsOne
                profileImage={
                  "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611446/Group_16_Copy_2_n0jltw.svg"
                }
                companyName={"Recruiter/Company's name"}
                timeFrame={"Part Time"}
                mainSkill={"Circuit Design"}
                amount={"50-55k"}
                time={"30 min ago"}
                skills={"Skills"}
                skillWidth="74px"
                skillSet={["JavaScript", "3D Modelling"]}
                hidePost={{
                  style: { display: "none" },
                }}
                hideImage={{
                  style: { display: "none" },
                }}
                text={
                  "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt...."
                }
              />
              <CardsOne
                profileImage={
                  "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611446/Group_16_Copy_2_n0jltw.svg"
                }
                companyName={"Recruiter/Company's name"}
                timeFrame={"Part Time"}
                mainSkill={"Circuit Design"}
                amount={"50-55k"}
                time={"30 min ago"}
                skills={"Skills"}
                skillWidth="74px"
                skillSet={["JavaScript", "3D Modelling"]}
                hidePost={{
                  style: { display: "none" },
                }}
                hideImage={{
                  style: { display: "none" },
                }}
                text={
                  "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt...."
                }
              />
              <CardsOne
                profileImage={
                  "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611446/Group_16_Copy_2_n0jltw.svg"
                }
                companyName={"Recruiter/Company's name"}
                timeFrame={"Part Time"}
                mainSkill={"Circuit Design"}
                amount={"50-55k"}
                time={"30 min ago"}
                skills={"Skills"}
                skillWidth="74px"
                skillSet={["JavaScript", "3D Modelling"]}
                hidePost={{
                  style: { display: "none" },
                }}
                hideImage={{
                  style: { display: "none" },
                }}
                text={
                  "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt...."
                }
              />
              <CardsOne
                profileImage={
                  "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611446/Group_16_Copy_2_n0jltw.svg"
                }
                companyName={"Recruiter/Company's name"}
                timeFrame={"Part Time"}
                mainSkill={"Circuit Design"}
                amount={"50-55k"}
                time={"30 min ago"}
                skills={"Skills"}
                skillWidth="74px"
                skillSet={["JavaScript", "3D Modelling"]}
                hidePost={{
                  style: { display: "none" },
                }}
                hideImage={{
                  style: { display: "none" },
                }}
                text={
                  "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt...."
                }
              />
              <CardsOne
                profileImage={
                  "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611446/Group_16_Copy_2_n0jltw.svg"
                }
                companyName={"Recruiter/Company's name"}
                timeFrame={"Part Time"}
                mainSkill={"Circuit Design"}
                amount={"50-55k"}
                time={"30 min ago"}
                skills={"Skills"}
                skillWidth="74px"
                skillSet={["JavaScript", "3D Modelling"]}
                hidePost={{
                  style: { display: "none" },
                }}
                hideImage={{
                  style: { display: "none" },
                }}
                text={
                  "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt...."
                }
              />
              <CardsOne
                profileImage={
                  "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611446/Group_16_Copy_2_n0jltw.svg"
                }
                companyName={"Recruiter/Company's name"}
                timeFrame={"Part Time"}
                mainSkill={"Circuit Design"}
                amount={"50-55k"}
                time={"30 min ago"}
                skills={"Skills"}
                skillWidth="74px"
                skillSet={["JavaScript", "3D Modelling"]}
                hidePost={{
                  style: { display: "none" },
                }}
                hideImage={{
                  style: { display: "none" },
                }}
                text={
                  "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt...."
                }
              />
              <CardsOne
                profileImage={
                  "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611446/Group_16_Copy_2_n0jltw.svg"
                }
                companyName={"Recruiter/Company's name"}
                timeFrame={"Part Time"}
                mainSkill={"Circuit Design"}
                amount={"50-55k"}
                time={"30 min ago"}
                skills={"Skills"}
                skillWidth="74px"
                skillSet={["JavaScript", "3D Modelling"]}
                hidePost={{
                  style: { display: "none" },
                }}
                hideImage={{
                  style: { display: "none" },
                }}
                text={
                  "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt...."
                }
              />
              <CardsOne
                profileImage={
                  "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611446/Group_16_Copy_2_n0jltw.svg"
                }
                companyName={"Recruiter/Company's name"}
                timeFrame={"Part Time"}
                mainSkill={"Circuit Design"}
                amount={"50-55k"}
                time={"30 min ago"}
                skills={"Skills"}
                skillWidth="74px"
                skillSet={["JavaScript", "3D Modelling"]}
                hidePost={{
                  style: { display: "none" },
                }}
                hideImage={{
                  style: { display: "none" },
                }}
                text={
                  "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt...."
                }
              />
              <CardsOne
                profileImage={
                  "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611446/Group_16_Copy_2_n0jltw.svg"
                }
                companyName={"Recruiter/Company's name"}
                timeFrame={"Part Time"}
                mainSkill={"Circuit Design"}
                amount={"50-55k"}
                time={"30 min ago"}
                skills={"Skills"}
                skillWidth="74px"
                skillSet={["JavaScript", "3D Modelling"]}
                hidePost={{
                  style: { display: "none" },
                }}
                hideImage={{
                  style: { display: "none" },
                }}
                text={
                  "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt...."
                }
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchResults;
