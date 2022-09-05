import React,{useState,useEffect} from 'react'

function App() {
  const [data,setData]=useState({"first":"","last":"","email":"","password":""})
  const [first,setFirst]=useState("")
  const [error,setError]=useState({"first":false,"last":false,"email":false,"password":false})
  const [last,setLast]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [visible,setVisible]=useState(false)
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(first!=="" && last!=="" && password!=="" && email!=="" &&  email.toLowerCase().includes("@gmail.com") && email.toLowerCase().indexOf("@")===email.toLowerCase().lastIndexOf("@")  && email.toLowerCase().indexOf("gmail")===email.toLowerCase().lastIndexOf("gmail") && email.toLowerCase().indexOf(".")===email.toLowerCase().lastIndexOf(".") && email.toLowerCase().indexOf("com")===email.toLowerCase().lastIndexOf("com")){
      console.log(data)
      setData({"first":first,"last":last,"email":email.toLowerCase(),"password":password})
      setFirst("")
      setLast("")
      setEmail("")
      setPassword("")
      setError({"first":false,"last":false,"email":false,"password":false})
    }
    else{
      if(first==="" && last==="" && email ==="" &&   password ==="" ){
        setError({"first":true,"last":true,"email":true,"password":true})
        
      }
      else if(last===""){
        setError({"first":false,"last":true,"email":false,"password":false})
        setLast("")
      }
      else if(email ==="" || !email.toLowerCase().includes("@gmail.com") || email.toLowerCase().indexOf("@")!==email.toLowerCase().lastIndexOf("@") || email.toLowerCase().indexOf("gmail")!==email.toLowerCase().lastIndexOf("gmail") || email.toLowerCase().indexOf(".")!==email.toLowerCase().lastIndexOf(".") || email.toLowerCase().indexOf("com")!==email.toLowerCase().lastIndexOf("com")){
        setError({"first":false,"last":false,"email":true,"password":false})
        setEmail("")
      }
      else if(password ==="" || password.length < 4){
        setError({"first":false,"last":false,"email":false,"password":true})
        setPassword("")
      }
      else{
        setError({"first":true,"last":false,"email":false,"password":false})
        setFirst("")
      }

    }
  }
  useEffect(()=>{
    if(visible){
      setTimeout(()=>
         {setVisible(false)},2000)
    }
  })
  return (
    <div className='box'>
      <div className="container">
        <div className="text">
        <h1 className='head'>Learn to code by watching others</h1>
        <p className='about'>See how experienced developers solve problems in real- time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
        
        </div>
        <div className="form">
          <div className="try">
            <p className='trial'><em>Try it free 7 days</em> then $20/month thereafter</p>
          </div>
          <form onSubmit={handleSubmit} className="fm">
            <div className={(!error.first)?"input":"input err-inp"}>
            <input type="text" name="first" className={(!error.first)?"first":"first error-input"} value={first}  placeholder='First Name' onChange={(e)=>setFirst(e.target.value)}/>
            {(error.first)?<div className="error">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>
            </div>:<></>}
            </div>
            {(error.first)?<div className="errormessage">
            <p>Enter a valid First Name.</p>
            </div>:<></>}
            <div className={(!error.last)?"input":"input err-inp"}>
            <input type="text" name="last" className={(!error.last)?"last":"last error-input"} value={last} placeholder='Last Name' onChange={(e)=>setLast(e.target.value)}/>
            {(error.last)?<div className="error">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>
            </div>:<></>}
            </div>
            {(error.last)?<div className="errormessage">
            <p>Enter a valid Last Name.</p>
            </div>:<></>}
            <div className={(!error.email)?"input":"input err-inp"}>
            <input type="text" name="email" className={(!error.email)?"email":"email error-input"} value={email} placeholder={(!error.email)?'Email Address':"abcd@gmail.com"} onChange={(e)=>setEmail(e.target.value)}/>
            {(error.email)?<div className="error">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>
            </div>:<></>}

            </div>
            {(error.email)?<div className="errormessage">
            <p>Looks like this is not a valid Email.</p>
            </div>:<></>}
            <div className={(!error.password)?"input":"input err-inp"}>
            <input type="password" name="password" className={(!error.password)?"password":"password error-input"} value={password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            {(error.password)?<div className="error">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>
            </div>:<></>}
            </div>
            {(error.password)?<div className="errormessage">
            <p>Enter a valid Passsword.</p>
            </div>:<></>}
            {(!error.email && !error.password && !error.last && !error.first && visible)?
            <div className="success">Purchase Successful</div>:<></>}
            <button type="submit" className='btn' onClick={()=>setVisible(true)}>CLAIM YOUR FREE TRIAL</button>
            <p className='condition'>By clicking the button you are agreeing to our <em>Terms and Services</em></p>
          </form>
         
        </div>
      </div>
    </div>
  )
}

export default App