// rafce 
import React from 'react'

const Home = () => {

  const sideTitle = 'MY website to Aviral website ';

  const num1 = 10;
  const num2 = 10;

  const myStyle = {
    textAlign : 'center',
  }

  const addNums = (a, b) => {
    return a + b;
  }

  return (
    <div>

    <h1 style={myStyle}>
      {sideTitle}</h1>

    {num1*num2}

    <p>{addNums(56, 4)}</p>

    <h1 style={{ color : 'red', fontSize : '5rem' , }} >My First React Based Website </h1>
    <img src="https://www.racgp.org.au/getattachment/661bf5f7-d8fb-4457-b634-ae131183242a/Fellowship-programs-for-IMGs.aspx" alt="" />
    <p className='my-btn' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id laboriosam dicta qui sequi unde, dolor hic, iusto facere magni mollitia quia maiores, suscipit minus consequatur reprehenderit fugit. Repellendus, blanditiis eaque provident at ea quaerat inventore debitis soluta, aliquam, porro enim possimus veritatis id incidunt assumenda dicta deserunt obcaecati? Rem saepe eaque officiis optio facilis sed sapiente, atque earum voluptatibus praesentium voluptatum libero perspiciatis at quis ut eum? Et, saepe iste alias odit non veniam perspiciatis laborum error praesentium debitis, aut eveniet necessitatibus magni sed velit. Tempora sed omnis numquam iusto harum, exercitationem placeat eos unde, eveniet quidem, assumenda alias!</p>

    </div>
  )
}

export default Home ;