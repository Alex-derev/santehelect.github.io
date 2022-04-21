import React, {useEffect} from 'react';
import Descr from '../components/Descr/Descr';
import Slider from '../components/Slider/Slider';

const Heating: React.FC = () => {
    useEffect(() => {
        servicePagesService.setServicePages();
    }, []);
return (
    
    <>
        <Descr/>
        <Slider/>

    </>
)
}

export default Heating;