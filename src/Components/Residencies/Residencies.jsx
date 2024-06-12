import React, { useState } from "react";
import "./residencies.css";
import data from "../../utils/properties.json";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

export const Residencies = () => {
  // Search bar validation

  const [searchBar, setSearchBar] = useState("");

  // Checkbox validation

  const [filter, setFilter] = useState({
    flats: true,
    houses: true,
  });

  // Num of Bedroom filter validation

  const [minBedroomsFilter, setMinBedroomsFilter] = useState("All");
  const [maxBedroomsFilter, setMaxBedroomsFilter] = useState("All");

  // Added date filter validation

  const [dateFilter, setDateFilter] = useState("");

  // For the New Date

  const months = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };

  // Postcode filter validation

  const [postcodeFilter, setPostcodeFilter] = useState("");

  // Favourites validation

  const [favorites, setFavorites] = useState([]);

  // Adding to favourites validation

  const handleAddToFavorites = (propertyId) => {
    if (!favorites.find((favorite) => favorite.id === propertyId)) {
      const propertyToAdd = data.properties.find(
        (property) => property.id === propertyId
      );

      setFavorites((prevFavorites) => [...prevFavorites, propertyToAdd]);
    }
  };

  // Removing from favourites validation

  const removeFromFavorites = (property) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== property.id)
    );
  };

  // Clearing favourites validation

  const clearFavorites = () => {
    setFavorites([]);
  };

  // prevents the form from being submitted and navigating to a new page or reloading the current page.

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  // Fitering JSON file function

  const filteredProperties = data.properties.filter(
    (property) =>
      property.location.toLowerCase().includes(searchBar.toLowerCase()) &&
      property.postcode.toLowerCase().includes(postcodeFilter.toLowerCase()) &&
      ((filter.flats && property.type.toLowerCase() === "flat") ||
        (filter.houses &&
          property.type.toLowerCase() === "house" &&
          ((minBedroomsFilter === "All" && maxBedroomsFilter === "All") ||
            (minBedroomsFilter !== "All" &&
              maxBedroomsFilter === "All" &&
              property.bedrooms >= parseInt(minBedroomsFilter)) ||
            (minBedroomsFilter === "All" &&
              maxBedroomsFilter !== "All" &&
              property.bedrooms <= parseInt(maxBedroomsFilter)) ||
            (minBedroomsFilter !== "All" &&
              maxBedroomsFilter !== "All" &&
              property.bedrooms >= parseInt(minBedroomsFilter) &&
              property.bedrooms <= parseInt(maxBedroomsFilter))))) &&
      (dateFilter === "" ||
        new Date(
          property.added.year,
          months[property.added.month],
          property.added.day
        ) > new Date(dateFilter))
  );

  return (
    <div>
      <section className="r-wrapper">
        <div className="padding innerWidth r-container">
          {/* Filtering */}

          <form onSubmit={handleFormSubmit}>
            <div className="r-head flexColStart">
              <span className="primaryText">Popular Residencies</span>
            </div>

            <div className="filter-options">
              {/* Search bar */}

              <div className="flexCenter search-bar paddings innerWidth flexCenter r-container">
                <HiLocationMarker size={25} style={{ color: "var(--green)" }} />
                <input
                  type="text"
                  placeholder="Search Property Location"
                  className="search"
                  value={searchBar}
                  onChange={(e) => setSearchBar(e.target.value)}
                />
                <button type="submit" className="button">
                  Search
                </button>
              </div>

              {/* Checkbox */}

              <div className="checkbox-options">
                <label>
                  <input
                    style={{ accentColor: "var(--green)" }}
                    type="checkbox"
                    checked={filter.flats}
                    onChange={() =>
                      setFilter((prevFilter) => ({
                        ...prevFilter,
                        flats: !prevFilter.flats,
                      }))
                    }
                  />
                  Flats
                </label>
                <br />
                <label>
                  <input
                    style={{ accentColor: "var(--green)" }}
                    type="checkbox"
                    checked={filter.houses}
                    onChange={() =>
                      setFilter((prevFilter) => ({
                        ...prevFilter,
                        houses: !prevFilter.houses,
                      }))
                    }
                  />
                  Houses
                </label>
              </div>

              {/* Bedroom filtering */}

              <div className="dropdown-options">
                <label>
                  Min Bedrooms:
                  <select
                    value={minBedroomsFilter}
                    onChange={(e) => setMinBedroomsFilter(e.target.value)}
                  >
                    <option value="All">All</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                  </select>
                </label>
                <label>
                  Max Bedrooms:
                  <select
                    value={maxBedroomsFilter}
                    onChange={(e) => setMaxBedroomsFilter(e.target.value)}
                  >
                    <option value="All">All</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                  </select>
                </label>
              </div>

              {/* Added date filtering */}

              <div className="date-picker">
                <label>
                  Added After:
                  <input
                    type="date"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                  />
                </label>
              </div>

              {/* Postcode filtering */}

              <div className="postcode-filter">
                <label>
                  Postal Code:
                  <input
                    type="text"
                    value={postcodeFilter}
                    onChange={(e) => setPostcodeFilter(e.target.value)}
                  />
                </label>
              </div>
            </div>
          </form>

          <div className="r-card">
            {filteredProperties.map((property) => (
              <div key={property.id}>
                <h4 className="secondaryText">{property.type}</h4>
                <Link to={`/properties/${property.id}`}>
                  <img
                    className="r-image"
                    src={property.picture}
                    alt="Residencies"
                  />
                </Link>

                <div>
                  <button
                    className="fav-button"
                    onClick={() => handleAddToFavorites(property.id)}
                  >
                    Add to Favorites
                  </button>
                </div>

                <div>
                  <span style={{ color: "#2C6E49" }}>$</span>
                  <span>{property.price}</span>
                </div>

                <div>
                  <span style={{ fontWeight: "bold" }}>Location </span>
                  <span style={{ color: "#2C6E49" }}>{property.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Favourites section */}

      <section className="favorites-section">
        <h2>My Favorites</h2>

        <button className="clearFav-button" onClick={clearFavorites}>
          Clear Favorites
        </button>

        <ul>
          {favorites.map((favProperty) => (
            <li key={favProperty.id}>
              {favProperty.location}{" "}
              <button
                className="deleteFav-button"
                onClick={() => removeFromFavorites(favProperty)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
