import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { axios_cu_cred } from '../utils/api';

function FacultateById({ }) {
    const { id } = useParams();
    
  const getById = async (id) => {
    await axios_cu_cred.post("/api/test/getById", { id: id }).then((res) => {
      console.log(res.data);
    });
    };
    
    useEffect(() => {
        
    }, []);
    return (
        <div className='facul'>
            
      </div>
  )
}

export default FacultateById