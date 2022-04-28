import React from 'react';

function Detail(){
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
  </div>  
  )
};

export default Detail 
//컴포넌트 Detail을 다른 파일에서 impoert,export를 하려면 반드시 그 다른 파일에서 import React from 'react';를 써주어야합니다.