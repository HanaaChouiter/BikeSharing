import React from "react";
import { useEffect, useState } from "react";
import PlacesAutocomplete, { geocodeByAddress, getLatLng} from "react-places-autocomplete";
import { getAnnonce } from "../../api/annonce";

import styled from "styled-components";

const Container = styled.div`
  font-family: Gilda Display;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 200px 400px;
  flex-direction: column;
  h1 {
    font-size: 20px;
  }
  h2 {
    font-size: 20px;
  }
  .emplacement {
    display: flex;
    flex-direction: column;
    width: 100% !important;
  }
  .containerInput {
    display: flex;
    flex-direction: column;
    width: 100%;
    
  }
`
const Input = styled.input`
  width: 20rem;
  border-radius: 5px;
  font-size: 14px;
  padding: 10px 24px;
`

const Box = styled.div`
  display: flex;
  margin: 100px 0;
  justify-content: space-between;

  .date {
    display: flex;
    justify-content: space-around;
    width: 45%;
    align-items: center;
  }
  .date h2{
    margin-top: 5%;
    width: 15%;
  }
`

function Calendrier() {
     const [annonce, setAnnonce] = useState([]);
     const [address, setAddress] = useState("");
     const [coordinates, setCoordinates] = useState({
       lat: null,
       lng: null
     });

     const [beginDate, setBeginDate] = useState("");
     const [endDate, setEndDate] = useState("");

     useEffect(() => {
      fetchAnnonces()
  }, [])
  
  const fetchAnnonces = async () => {
      const annonces = await getAnnonce()
      setAnnonce(annonces)
  }

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  const changeBeginDate = (e) => {
    setBeginDate(e.target.value);
    console.log(beginDate)
  };

  const changeEndDate = (e) => {
    setEndDate(e.target.value);
    console.log(endDate)
  };

  const compare = () => {
    const annonces = annonce.filter( e => e.dateBegin === beginDate && e.dateEnd === endDate)
    console.log(annonces)
  }

  return (
    <Container>
      <div className="date"> 
      <h1>LOUER VOTRE VÉLO EN <br/>
      QUELQUES CLICKS
      </h1>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p> {coordinates.lat}</p>
            <p> {coordinates.lng}</p>

             <Input className="input-style" style={{width: "44.7rem"}}
            {...getInputProps
            ({ placeholder: "Emplacement actuel ..." })}
             />

            <div className="style">
             {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "black"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      </div>
      <Box>
        <div className="date">
      <h2>DE</h2>
       <Input type="datetime-local"
        type="datetime-local"
        id="meeting-time"
        name="meeting-time"
        onChange={changeBeginDate}
        value={beginDate}
        />
       </div>
       <div className="date">
     <h2>À</h2>
     <Input 
        type="datetime-local"
        id="meeting-time"
        name="meeting-time"
        onChange={changeEndDate}
        value={endDate}

     />
     </div>
      </Box>
      <button type="submit" class="btn btn-light" style={{width : "350px", margin : "0 auto"}}>RECHERCHER</button>
    </Container>
   
  );
}

export default Calendrier