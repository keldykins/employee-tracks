import React, { useContext } from "react";
import TracksContext from "../utils/TracksContext";
import styled from "styled-components";

const StyledEmployees = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60%;
    padding: 40px;
    background-color: #ffffff;
    border-radius: 10px;
    margin-bottom: 40px;

    h3 {
      font-size: 16px;
      line-height: 24px;
      margin: 0;
      text-align: center;
    }

    img {
      margin: 20px auto;
      max-width: 100%;
      height: auto;
    }
  }
  @media (max-width: 600px) {
    .card {
      width: 100%;
      border-radius: 0;
    }
  }
`;
const ShowEmployees = () => {
  const { result } = useContext(TracksContext);
  console.log(result);
  return (
    <StyledEmployees>
      {result?.map(({ name, picture, location, email, phone }, i) => (
        <div className="card" key={i}>
          <img className="img" alt={name} src={picture.large}></img>
          <div className="card-title">
            <h3>{name.first + " " + name.last}</h3>
            <h3>
              {location.city + ", " + location.state + ", " + location.country}
            </h3>
            <h3>{email}</h3>
            <h3>{phone}</h3>
          </div>
        </div>
      ))}
    </StyledEmployees>
  );
};

export default ShowEmployees;
