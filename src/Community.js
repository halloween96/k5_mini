import { Link } from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'


export default function Community() {

    const [board, setBoard] = useState({});
    const [boardtag, setBoardTag] = useState([]);

    const getBoard = async () =>{
        // e.preventDefault();
        try{

            const resp = await fetch("http://10.125.121.204:8080/board");            
            const data = await resp.json();    
            
                setBoard(data);
            console.log(board);
            // .then(data =>{
                //     setBoard(data);
                //     console.log("resp", data);
                // })
                
                // console.log(data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        // let n = 1
        getBoard();
    },[]);

    // useEffect(()=>{
    //     console.log("useEffect", board);

    //     let tag = board(b => {
            
    //     <div>
    //         <div>{b.title}</div>
    //         <div>{b.writer}</div>
    //         <div>{b.cnt}</div>
    //     </div>
        
    // });
    //     setBoardTag(tag);
    // }, [board]);

    // fetch("http://10.125.121.204:8080/board")
    //     .then(resp => resp.json())
    //     .then(json => console.log(json))


    return (
        <main className='pt-72'>
            <h1 className="p-2 text-5xl font-bold text-slate-800 border-b-2 border-slate-200 font-['Jua']">자전거길 후기</h1>
            <div className='w-full'>
                <div className='flex border-2 border-slate-200 mt-5 rounded-md'>
                    {/* <div className='w-3/5'>{title}</div>
                    <div className='w-1/5'>{writer}</div>
                    <div className='w-1/5'>{cnt}</div> */}
                </div>
                <div></div>
                <div>a</div>
                <div>a</div>
                <div>a</div>
                <div className='flex justify-end'>
                    <Link to="/Write" className='p-2 px-4 rounded-lg bg-emerald-500 text-white'>
                        <button type='button'>
                            글 쓰기
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    )
}
