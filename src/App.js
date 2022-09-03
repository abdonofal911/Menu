import React, { useState } from "react";
import { Container } from "react-bootstrap";
import MyNavbar from "./Components/Navbar";
import Header from "./Components/Header";
import Category from "./Components/Category";
import ItemsList from "./Components/ItemsList";
import { items } from './data';


const App = () => {
  const [itemsData,setItemsData] = useState(items)
 
  //get all cat uniqe

  const AllCategory = ['الكل',...new Set(items.map((i) => i.category))]
  
  //filter by category

  const filterbyCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items)
    } else {
      const newArr = items.filter((item) => item.category === cat)
      setItemsData(newArr)
    }
  }

  //filter by search
  const filterbySearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title === word)
      setItemsData(newArr)
    }
  }

  return (
    <div className="color-body font" >
     <MyNavbar filterbySearch={filterbySearch}/>

      <Container>
        <Header />
        <Category filterbyCategory={filterbyCategory} AllCategory={AllCategory}/>
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  );

};

export default App;
