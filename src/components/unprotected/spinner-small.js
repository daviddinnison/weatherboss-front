import React from "react";
import { ClipLoader } from 'react-spinners';

export default function SpinnerSmall() {
    return (
      <div>
        <ClipLoader color={'#fff'} size={20}/>
      </div>
    );
  }