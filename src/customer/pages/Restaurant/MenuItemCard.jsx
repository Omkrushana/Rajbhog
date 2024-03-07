import { Accordion, AccordionSummary, Button, Card } from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const ingredents={
// {
//   category:"Nuts & Seeds",

// }

// }
const MenuItemCard = (item) => {
  const handleAddToCart = () => {
    console.log("Handle Add to cart");
  };
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
      <Card className="p-5 lg:flex items-center justify-between box">
        <div className="lg:flex items-center lg:space-x-5">
          <img
            className="w-[7rem] h-[7rem] object-cover"
            src="https://images.freeimages.com/images/large-previews/51f/healthy-food-1328279.jpg"
            alt=""
          />
          <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
            <p className="font-semibold text-xl">{`Pizza`} </p>
            <p>₹{299}</p>
            <p className="text-gray-400">{`Rice, Sambar, Papad`}</p>
          </div>
        </div>
        <div>
          <Button onClick={handleAddToCart}>Add to cart</Button>
        </div>
      </Card>
      </AccordionSummary>
      
    </Accordion>
  );
};

export default MenuItemCard;
