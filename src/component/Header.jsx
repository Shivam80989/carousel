import React from 'react'
import * as style from '../style/header.module.css'
import Image from "next/image";
import logo from "../app/images/logo.png";


export default function Header(){
    return(
        <div>
            <div className={style.main_container}>
                <div className={style.logo}>
                <Image className="  h-5 w-5 " src={logo}></Image>


                </div>
                <div className={style.searchbar}>
                    <input  className={style.search} type='search' placeholder='enter your search'></input>
                     
                </div>
                <div className={style.home}>
                    <p>Home</p>

                </div>
                <div className={style.about}>
                    <p>About us</p>

                </div>
                <div className={style.login}>
                    <p>Login</p>

                </div>

            </div>
        </div>
    );
}