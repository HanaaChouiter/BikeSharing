import { useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
// import { AiFillStar } from "react-icons/ai";
import BikeImage from '../images/BikeImage.jpg'


const CardBox = styled.div`
  margin: 0px 0px 30px 0px;
  border-radius: 10px;
  height: 110px;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  

  :hover {
    background-color: black;
  }
`;

const CardImage = styled.div`
  background-position: bottom;
  background-size: cover;
  width: 40%;
`;

const CardContent = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  width: 60%;
`;

const CardText = styled.div`
  margin-top: 0;
  display: flex;
  flex-direction: column;
  h4 {
    font-family: "Abel", sans-serif;
  }
`;

// const BikeStars = styled.div`
//   display: flex;
//   justify-content: flex-start;
// `;


const BikeCard = (props) => {
    const selectedBike = props.selectedBike;
    const ref = useRef();

    useEffect(() => {
        if (props.id === selectedBike._id) {
            ref.current.scrollIntoView({ behavior: "smooth" });
          }
        }, [selectedBike, props.id]);
      
        console.log(props)
        return (
          <>
            <CardBox
              ref={ref}
              style={{
                background: `${props.id === selectedBike._id ? "black" : "grey"}`,
              }}
            >
              <CardImage
                style={
                    {background : `url(${BikeImage}) no-repeat center/cover`}
                }
              />
              <CardContent>
                <Link
                  to={`/bikePage/${props.id}`}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Abel, sans-serif",
                  }}
                >
                  <CardText>
                    <h4>Vélo de ville</h4>
                    <h2>10€/h</h2>
                    {/* <BikeStars>
                      {[...Array(Math.floor(props.stars))].map((i) => (
                        <AiFillStar size={14} color={"yellow"} />
                      ))}
                    </BikeStars> */}
                  </CardText>
                </Link>
              </CardContent>
            </CardBox>
            </>
          );
        };
        
        export default BikeCard;
        