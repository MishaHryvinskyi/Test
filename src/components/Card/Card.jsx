import { Button } from "components/Button/Button"
import { CardContainer, CardImage, WrapperCardImage, InfoCarItem, BrandCar, InfoCar, TitleContainer, BrandCarAccent } from "./Card.styled"

export const Card = () => {

const cardEl = {
    "id": 9584,
    "year": 2019,
    "make": "Volvo",
    "model": "XC90",
    "type": "SUV",
    "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/volvo_xc90.jpg",
    "description": "The Volvo XC90 is a premium SUV that offers exceptional safety, advanced technology, and elegant design.",
    "fuelConsumption": "8.3",
    "engineSize": "2.0L 4-cylinder",
    "accessories": [
        "Nappa leather seats",
        "Bowers & Wilkins premium sound system",
        "Head-up display"
    ],
    "functionalities": [
        "IntelliSafe advanced safety features",
        "Pilot Assist semi-autonomous driving",
        "Four-zone automatic climate control"
    ],
    "rentalPrice": "$50",
    "rentalCompany": "Premium Auto Rentals",
    "address": "456 Example Avenue, Lviv, Ukraine",
    "rentalConditions": "Minimum age: 21\nValid driver's license\nProof of insurance required",
    "mileage": 5352
}

    return (
        <CardContainer>
            <WrapperCardImage>
                <CardImage src={cardEl.img} alt={cardEl.make} />
            </WrapperCardImage>
            <TitleContainer>
                <BrandCar>{cardEl.make} <BrandCarAccent>{cardEl.model + ","}</BrandCarAccent> {cardEl.year}</BrandCar>
                <BrandCar>{cardEl.rentalPrice}</BrandCar>
            </TitleContainer>
            <InfoCar>
                <span style={{paddingRight: "6px", borderRight: "1px solid rgba(18, 20, 23, 0.50)"}}>{cardEl.address.split(',')[1].trim()}</span> 
                <InfoCarItem>{cardEl.address.split(',')[2].trim()}</InfoCarItem>
                <InfoCarItem>{cardEl.rentalCompany.split(' ').slice(1).join(' ')}</InfoCarItem>
                <span style={{paddingLeft: "6px"}}>{cardEl.rentalCompany.split(' ')[0]}</span>
            </InfoCar>
            <InfoCar>
                    <span 
                        style={{
                            paddingRight: "6px", 
                            borderRight: "1px solid rgba(18, 20, 23, 0.50)"
                        }}
                    >
                        {cardEl.type.charAt(0).toUpperCase() + cardEl.type.slice(1).toLowerCase()}
                    </span>
                    <InfoCarItem>
                        {cardEl.make}
                    </InfoCarItem>
                    <InfoCarItem>
                        {cardEl.id}
                    </InfoCarItem>
                    <span style={{paddingLeft: "6px"}}>{cardEl.accessories[1].split(' ').slice(3).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
            </InfoCar>
            <Button />
        </CardContainer>
    )
}