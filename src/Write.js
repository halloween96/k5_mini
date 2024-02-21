import React, { useState } from 'react'
import axios from 'axios'

export default function Write() {

    // function SendData() {
    //     const [title, setTitle] = useState('');
    //     const [content, setContent] = useState('');
    //     const [writer, setWriter] = useState('');

    //     const sendTitle = e => setTitle(e.target.value);
    //     const sendContent = e => setContent(e.target.value);
    //     const sendWriter = e => setWriter(e.target.value);
    // }

    // function Send() {
    //     axios(
    //         {
    //             url: "http://10.125.121.204:8080/board",
    //             method: 'post',
    //             data: {
    //                 // title: title,
    //                 // content: content,
    //                 // writer: writer
    //             },
    //         }
    //     ).then(function (response) {
    //         console.log(response.data)
    //     });
    // }

    return (
        <main className='mt-72 mb-20 mx-auto border-2 rounded-md border-slate-200 shadow-md w-4/5'>
            <div className='w-full'>
                <form className="m-4 h-96 flex flex-col items-end justify-around">
                    <input type="text" className="w-full h-1/6 outline-none p-2 border-2 border-slate-200" placeholder="제목을 입력해 주세요" required />
                    <input type="text" className="w-full h-3/5 outline-none p-2 border-2 border-slate-200" placeholder="내용을 입력해 주세요" required />
                    <div className='w-full flex justify-end'>
                        <button type='reset' className='w-1/6 py-2 mx-2 rounded-lg bg-slate-500 text-white'>취소</button>
                        <button type='submit' className='w-1/6 py-2 rounded-lg bg-emerald-500 text-white'>확인</button>
                    </div>
                </form>
            </div>
        </main>
    )
}
