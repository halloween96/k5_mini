import React, { useEffect } from 'react'
import { useState, useRef } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Register() {

    const [join, setJoin] = useState({
        email: '',
        password: '',
        confrim: '',
        name: '',
        birth: ''
    });

    const emailRef = useRef();
    const passRef = useRef();
    const confrimRef = useRef();
    const nameRef = useRef();
    const birthRef = useRef();

    const onSubmithandle = (e) => {
        e.preventDefault();

        console.log(emailRef.current.value)
        setJoin({
            id: emailRef.current.value,
            password: passRef.current.value,
            confirm: confrimRef.current.value,
            username: nameRef.current.value,
            birthDate: birthRef.current.value
        })
    }

    useEffect(() => {
        if (join.email === "") return;
        if (join.password !== join.confirm) {
            return alert('비밀번호와 비밀번호 확인이 같지 않습니다.')
        }

        const request = axios.post("http://10.125.121.204:8080/join", join)
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }, [join]);

    return (
        <main className='mt-72 mb-20 flex-col'>
            <div className='w-1/3 border-2 mx-auto rounded-lg border-slate-300'>
                <form className='flex flex-col p-4'>
                    <label className="py-1 text-slate-600 font-['Jua']">이메일</label>
                    <input type="email"
                        ref={emailRef}
                        className="outline-none p-2 border-2 rounded-md border-slate-200" placeholder="이메일을 입력해 주세요" required />
                    <label className="py-1 text-slate-600 font-['Jua']">비밀번호</label>
                    <input type="password"
                        ref={passRef}
                        className="outline-none p-2 border-2 rounded-md border-slate-200" placeholder="비밀번호를 입력해 주세요" required />
                    <label className="py-1 text-slate-600 font-['Jua']">비밀번호 확인</label>
                    <input type="password"
                        ref={confrimRef}
                        className="outline-none p-2 border-2 rounded-md border-slate-200" placeholder="비밀번호를 한번 더 입력해 주세요" required />

                    <label className="mt-5 py-1 text-slate-600 font-['Jua']">이름</label>
                    <input type="text"
                        ref={nameRef}
                        className="outline-none p-2 border-2 rounded-md border-slate-200" placeholder="이름을 입력해 주세요" required />
                    <label className="py-1 text-slate-600 font-['Jua']">생년월일</label>
                    <input type="number"
                        ref={birthRef}
                        onInput={(e) => {
                            if (e.target.value.length > e.target.maxLength)
                                e.target.value = e.target.value.slice(0, e.target.maxLength);
                        }}
                        className='outline-none p-2 border-2 rounded-md border-slate-200' maxlength={6} placeholder='생년월일 6자리를 입력해 주세요' required />

                    <div className='flex justify-around'>
                        <Link to="/" className='flex justify-center w-2/5 mt-8 py-2 border-emerald-500 border-2 rounded-lg text-emerald-500'>
                            <button type='button'>
                                취소
                            </button>
                        </Link>
                        <Link to="/Login" className='flex justify-center w-2/5 mt-8 py-2 rounded-lg bg-emerald-500 text-white'>
                            <button type='button'
                                onClick={onSubmithandle}>
                                확인
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </main>
    )
}
