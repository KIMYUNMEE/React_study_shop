import React,{useState} from 'react';
import { useHistory,useParams } from 'react-router-dom';

function Detail(props){

  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function(상품){
    return 상품.id === id
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt="상품"/>
        </div>
        <div className="col-md-6 mt-4">
         <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
  </div>  
  )
};

export default Detail 
//컴포넌트 Detail을 다른 파일에서 impoert,export를 하려면 반드시 그 다른 파일에서 import React from 'react';를 써주어야합니다.