import React from "react";
import { Row, Col } from "react-bootstrap";

const Category = ({filterbyCategory , AllCategory}) => {
 
 
    const onFilter = (cat) => {
        filterbyCategory(cat)
    }
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        {
            AllCategory.length >=1 ? (AllCategory.map((cat)=>{
                return(
                    <div>
                         <button onClick={() => onFilter(cat)} className="btn mx-2"style={{ border: "1px solid #b45b35" }}>{cat}</button>
                    </div>
                )
            })) : <h4>لا يوجد تصنيفات</h4>
        }
        
      </Col>
    </Row>
  );
};

export default Category;
