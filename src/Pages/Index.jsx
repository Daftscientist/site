import React from 'react'
import Button from 'Components/Elements/Button';
import { Link } from 'react-router-dom';

const Index = () => {
   return (
      <>
        <Button>lol hi</Button>
        hi
        <Link to={"/hi"}>hi</Link>
      </>
   )
}

export default Index;