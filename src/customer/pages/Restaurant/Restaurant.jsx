import {
  Card,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuItemCard from "./MenuItemCard";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const categories = [
  "Thali",
  "Starters",
  "Indian Main Course",
  "Rice and Biryani",
  "Breads",
  "Accomplish",
  "Dessert",
];

const foodType = ["Vegetarian Only", "Non-Vegetarian Only", "Both"];
const menu = [1, 1, 1, 1, 1, 1, 1];
const Restaurant = (item, index) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedFoodType, setSelectedFoodType] = useState();

  const handleFoodTypeChange = (e) => {
    console.log("selected foodType", selectedFoodType,e.target.value, e.target.name);
  };
  const handleCategoryChange = () => {
    console.log("selected category", selectedCategory);
  };
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">
          {`Home/india/rajbhog Restaurant/2/Order Online`}
        </h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://images.pexels.com/photos/10580198/pexels-photo-10580198.jpeg"
                alt=""
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </Grid>
          </Grid>
        </div>
        <div>
          <h1 className="text-4xl py-1 font-semibold"> <FastfoodIcon/> {`Rajbhog Restaurent`}</h1>
          
          <p className="text-gray-500 flex items-center gap-3">
            Indulge in the aromatic and spicy flavors of Thailand at Thai
            Orchid. Our chefs bring the authenticity of Thai cuisine to your
            table, offering a true taste of Bangkok.
          </p>
          <LocationOnIcon/>
          <span>
          Mumbai,Maharashtra.
          </span>
          <p className="py-3 text-orange-300">
           <CalendarMonthIcon className="text-white"/> Open now 10:30am - 12midnight (Today)
          </p>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%]">
          <Card className="p-5 space-y-5 lg:sticky top-28">
            <div>
              <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
                Category
              </Typography>
              <FormControl component={"fieldset"}></FormControl>

              <RadioGroup
                name="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                {categories.map((item, index) => (
                  <FormControlLabel
                    key={index}
                    value={item}
                    control={<Radio />}
                    label={item}
                    sx={{ color: "gray" }}
                  />
                ))}
              </RadioGroup>
            </div>
            <Divider />
            <div>
              <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
                Food Type
              </Typography>
              <FormControl component={"fieldset"}></FormControl>

              <RadioGroup
                name="foodType"
                value={selectedFoodType}
                onChange={handleFoodTypeChange}
              >
                {foodType.map((item, index) => (
                  <FormControlLabel
                    key={index}
                    value={item}
                    control={<Radio />}
                    label={item}
                    sx={{ color: "gray" }}
                  />
                ))}
              </RadioGroup>
            </div>
          </Card>
        </div>
        <div className="lg:w-[80%] space-y-5 lg:pl-10">
          {menu.map((item) => (
            <MenuItemCard item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Restaurant;
