import { useState} from "react";

function Password() {
    let [copthtml,setCopyhtml] = useState('Copy');
    let [pass,setPass] = useState('');
    let [num,setNum] = useState(false);
    let [chr,setChr] = useState(false);
    let [length,setLength] = useState(8);
    const paddwordGenrator = ()=>{
        copthtml = 'Copy';
        setCopyhtml(copthtml);
        let str = "ABCDEFGHIKLMNOPQRSTVXYZabcdefghijklmnopqrstuvwxyz";
        pass = '';
        if (num) {
            str = '0123456789' + str;
        }
        if (chr) {
            str = "!@#$%^&*()-_+={}[]|\"" + str;
        }
        for (let i = 0; i < length; i++) {
            const value = Math.floor(Math.random() * length +1);
            let char = str.charAt(value);
            pass += char;
        }
        setPass(pass);
    };

    function number() {
        num = !num;
        setNum(num);
        paddwordGenrator();
    }

    function char() {
        chr = !chr;
        setChr(chr);
        paddwordGenrator();
    }

    function lngth(e) {
        length = e.target.value;
        setLength(length);
        paddwordGenrator();
    }

    function copy_text() {
        if (pass) {
            window.navigator.clipboard.writeText(pass)
            copthtml = 'Copied';
            setCopyhtml(copthtml);
        }
    }

    return(
        <div className="border-red-700 w-full h-screen bg-slate-500 flex align-middle justify-center">
        <div className="Box flex flex-col lg:w-2/5 w-4/5 m-auto gap-2">
            <h1 className="text-center font-semibold text-3xl text-white mb-3" > Password Generator</h1>
            <div className="flex lg:flex-row flex-col">
            <input type="text" readOnly  placeholder="Password" className="p-2 lg:rounded-s-md rounded-sm lg:w-10/12 w-full" value={pass}/>
            <button type="button" className="bg-blue-600 p-2 lg:rounded-e-md  rounded-sm lg:w-2/12 w-full text-white lg:m-0 mt-3 mb-3" onClick={copy_text}>
                {copthtml}
            </button>
            </div>
            <div className="fields flex justify-around lg:flex-row flex-col">
            <div className="flex align-middle">
            <label htmlFor="" className="me-4 text-white font-semibold" >Length {length}</label>
            <input type="range" min={8} max={70} value={length} onChange={lngth}/>
            </div>
            <div className="">
            <input type="checkbox" id="number"/>
            <label htmlFor="number" onClick={number} className="ms-3 text-white font-semibold">
                Number
            </label>
            </div>
            <div className="">
            <input type="checkbox" id="char" />
            <label htmlFor="char" onClick={char} className="ms-3 text-white font-semibold">
                Special Char
            </label>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Password;
