import { CardData, cardsProfile } from "../../db/data";
import React, { useEffect, useState } from "react";

import CardsOne from "../../stories/Cards/Card-I";
import FilterTwo from "../../stories/Filter-II/filterTwo";
import Footer from "../../Components/LandingPage/Footer";
import Search from "../../Components/LandingPage/Search/search";
import styling from "./searchResults.module.css";
import {useLocation} from "react-router-dom";

// import axios from "axios";
// eslint-disable-next-line react-hooks/rules-of-hooks
const SearchResults = () => {
  const location = useLocation();

  const [cards, setCards] = useState<CardData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>();

  const [searchQuery, setSearchQuery] = useState<string | undefined>(new URLSearchParams(location.search).get("search") || undefined);  const [filteredCards, setFilteredCards] = useState<CardData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeButton, setActiveButton] = useState<string | null>(null);

  useEffect(() => {
    const filterResults = () => {
      if (searchQuery) {
        setFilteredCards(
          cards.filter((card) =>
            card.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
      } else {
        setFilteredCards(cards);
      }
    };
    filterResults();
  }, [cards, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const loadCard = () => {
      try {
        setLoading(true);
        setCards(cardsProfile);
        setFilteredCards(cardsProfile);
      } catch (err) {
        setError("Failed to load data: " + (err || "Unknown error"));
      } finally {
        setLoading(false);
      }
    };
    loadCard();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = cards.filter((card) =>
        card.jobTitle.toLowerCase().includes(selectedCategory.toLowerCase())
      );
      setFilteredCards(filtered);
    } else {
      setFilteredCards(cards);
    }
  }, [selectedCategory, cards]);

  const handleFilter = (category: string | null) => {
    setSelectedCategory(category);
    setActiveButton(category);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const clearFilter = () => {
    setSelectedCategory(null);
    setSearchQuery(undefined);
    setFilteredCards(cards);
    setActiveButton(null);
  };




  return (
      <div className={styling.big_container}>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        

        <Search value={searchQuery} onSearch={handleSearch}/>

        <div className={styling.overall}>
          <div className={styling.container}>
            <div className={styling.filter}>
              <FilterTwo/>
            </div>
            <div className={styling.content}>
              <div className={styling.list}>
                <button className={styling.nav_btn}>
                  <img
                      src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1729008893/Vector_2x_cepive.svg"
                      alt=""
                  />
                </button>
                <button
                    className={`${styling.listing} ${activeButton === "Embedded System" ? styling.active_list : ""}`}
                    onClick={() => handleFilter("Embedded System")}>
                  Embedded System
                </button>
                <button
                    className={`${styling.listing} ${activeButton === "Arduino" ? styling.active_list : ""}`}
                    onClick={() => handleFilter("Arduino")}>
                  Arduino
                </button>
                <button
                    className={`${styling.listing} ${activeButton === "Firmware" ? styling.active_list : ""}`}
                    onClick={() => handleFilter("Firmware")}>
                  Firmware
                </button>
                <button
                    className={`${styling.listing} ${activeButton === "Electronic Design" ? styling.active_list : ""}`}
                    onClick={() => handleFilter("Electronic Design")}>
                  Electronic Design
                </button>
                <button
                    className={`${styling.listing} ${activeButton === "Circuit Design" ? styling.active_list : ""}`}
                    onClick={() => handleFilter("Circuit Design")}>
                  Circuit Design
                </button>
                <button
                    className={`${styling.listing} ${activeButton === "Hardware Testing" ? styling.active_list : ""}`}
                    onClick={() => handleFilter("Hardware Testing")}>
                  Hardware Testing
                </button>
              </div>

              <div className={styling.text}>
                <p>
                  Search Result for &nbsp;
                  <span>{selectedCategory || "All Categories"}</span>
                </p>
                <hr/>
                <p className={styling.number}>
                  Showing {filteredCards.length} results
                </p>
              </div>

              {!loading && !error && (
                  <div className={styling.all_cards}>
                    {filteredCards.map((data) => (
                        <CardsOne
                            profileImage={data.profileImage}
                            companyName={data.company}
                            timeFrame={data.duration}
                            mainSkill={data.jobTitle}
                            amount={data.amount}
                            time={data.time}
                            skills={data.skills}
                            skillSet={data.skillSet}
                            text={data.profileDesc}
                            hidePost={{
                              style: {display: "none"},
                            }}
                            hideImage={{
                              style: {display: "none"},
                            }}
                        />
                    ))}
                  </div>
              )}
            </div>
          </div>
        </div>


      </div>
  );
};

export default SearchResults;
