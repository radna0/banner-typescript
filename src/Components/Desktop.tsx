import React from 'react'


interface IDesktopProps {
    display: number[]
}

const Desktop:React.FC<IDesktopProps> = ({display}) =>{

  return(
    <>
    {display.map(item =>{
        
        return(
            <div key={item } className="display">
            <img src={`https://picsum.photos/id/${item * 20}/200/300`} ></img>
            </div>
            )
        })}
        
    </>
        )
}

export default Desktop