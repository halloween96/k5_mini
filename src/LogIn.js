import React, { useEffect } from 'react'
import { useState, useRef } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil';
import { userToken } from './UserAtom';

export default function LogIn() {

    const navigate = useNavigate();

    const [Islogin, setIsLogin] = useRecoilState(userToken);

    const [member, setMember] = useState({
        email: '',
        password: ''
    });

    const emailRef = useRef();
    const passRef = useRef();

    const onSubmithandle = (e) => {
        e.preventDefault();

        console.log(emailRef.current.value)
        setMember({
            // id: emailRef.current.value,
            // password: passRef.current.value
            id: "admin@email.com",
            password: "1234"
        })

    }

    useEffect(() => {
        if (member.email === "") return;

        console.log("member", member);
        const request = axios.post("http://10.125.121.204:8080/login", member)
            .then(res => {
                if (res.headers.get("authorization")) {
                    console.log("login", res.headers.get("authorization"))
                    navigate("/")

                    const temp = res.headers.get("authorization")
                    localStorage.setItem('token', temp);
                    setIsLogin(temp);
                }
                else {
                    alert("아이디와 비밀번호 정보를 확인해 주세요")
                }
            })
            .catch(err => console.log(err))

        // fetch("http://10.125.121.204:8080/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json; charset=utf-8"
        //     },
        //     body: JSON.stringify(member)
        // })
        //     .then(res => console.log(res))
        //     .then(data => console.log(data))
        // console.log(member)
    }, [member]);

    useEffect(() => {
        if (Islogin) {
            localStorage.removeItem('token', Islogin);
            setIsLogin(null);
            alert("로그아웃 되었습니다.")
            navigate("/")
        }
    }, [])

    return (
        <main className='mt-72 flex-col'>
            <div className='w-1/3 border-2 mx-auto rounded-lg border-slate-300'>
                <form className='flex flex-col p-4'>
                    <div className='flex flex-col'>
                        <label className="py-1 text-slate-600 font-['Jua']">ID</label>
                        <input type="email"
                            ref={emailRef}
                            className="outline-none p-2 border-2 rounded-md border-slate-200" placeholder="이메일을 입력해 주세요" required />
                    </div>
                    <div className='flex flex-col'>
                        <label className="py-1 text-slate-600 font-['Jua']">PASSWORD</label>
                        <input type="password"
                            ref={passRef}
                            className="outline-none p-2 border-2 rounded-md border-slate-200" placeholder="비밀번호를 입력해 주세요" required />
                    </div>
                    <div className='flex justify-around'>
                        <button type='button'
                            onClick={onSubmithandle}
                            className='w-2/5 mt-8 py-2 rounded-lg bg-emerald-500 text-white'>
                            로그인
                        </button>
                        <Link to="/Register" className='flex justify-center w-2/5 mt-8 py-2 border-emerald-500 border-2 rounded-lg text-emerald-500'>
                            <button type='button'>
                                회원가입
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </main>
    )
}
