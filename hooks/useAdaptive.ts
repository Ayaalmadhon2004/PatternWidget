import {useEffect,useState} from 'react';

export const useAdaptive=() =>{
    const [size,setSize]=useState<'mobile'|'desktop'>('desktop');
    useEffect(()=>{
        const resize=()=>{
            setSize(window.innerWidth<768?'mobile':'desktop');
        }
        resize();
        window.addEventListener('resize',resize);
        return ()=> window.removeEventListener('resize',resize);
    },[]);
    return size;
}
